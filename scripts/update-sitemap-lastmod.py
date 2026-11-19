#!/usr/bin/env python3
"""Set each <lastmod> in sitemap.xml from git history.

lastmod is the day that URL's rendered content or in-page markup last
changed on this branch's first-parent history (main, once this lands).
That is the merge date, the day the live page changed, not the date the
work was authored on a feature branch.

What counts
  The page component, the HTML shell, and (for ?s= pages, FAQ, reviews,
  and the HTML sitemap) the matching block in site-data.jsx.

What does not count
  Shared chrome: shared.jsx, styles.css, lib-seo.jsx, lib-conversion.jsx.
  A nav, footer, or theme edit must not stamp every URL.
  Canonical and og:url-only hunks, the copied local-business JSON-LD, and
  the generic "Websites that work" first-paint placeholder.

Run from the repo root:

    python3 scripts/update-sitemap-lastmod.py
"""

from __future__ import annotations

import datetime as dt
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITEMAP = ROOT / "sitemap.xml"
NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
HOST = "https://royaleagleweb.com"

# Lines that are not page content. A commit counts only when some other
# added or removed line remains.
IGNORABLE = re.compile(
    r"("
    r"rel=\"canonical\"|property=\"og:url\"|\bcanonical:"
    r"|name=\"theme-color\"|google-site-verification"
    r"|apple-touch-icon|favicon\.svg|site\.webmanifest|browserconfig\.xml"
    r"|fonts\.googleapis|fonts\.gstatic|dns-prefetch|rel=\"preconnect\""
    r"|googletagmanager|function gtag\(|gtag\('js'"
    r"|unpkg\.com|type=\"text/babel\"|integrity="
    r"|@type\":\"ProfessionalService\"|data-id=\"local-business\""
    r"|color-scheme:dark"
    r"|<style>html,body\{background:"
    r"|Websites that work\."
    r"|Roy Bachar\. Since 2014\."
    r"|>A Fort Lauderdale studio, since 2014\.</p>"
    r"|class=\"re-hero-phone\""
    r"|aria-label=\"Royal Eagle\""
    r"|<section class=\"re-hero\""
    r"|<div id=\"root\">"
    r")",
    re.I,
)

# Wrapper tags with no text. Matched against the whole line so a content
# line that happens to end in </div> still counts.
STRUCTURAL = re.compile(
    r"^</?(?:section|div|head|body|html)(?:\s[^>]*)?>$",
    re.I,
)

STATIC_FILES = {
    "/": ["index.html", "page-home.jsx"],
    "/services": ["services.html", "page-services.jsx"],
    "/web-design": ["web-design.html", "page-web-design.jsx"],
    "/wordpress": ["wordpress.html", "page-wordpress.jsx"],
    "/contractor-websites": ["contractor-websites.html", "page-contractor-websites.jsx"],
    "/yacht-websites": ["yacht-websites.html", "page-yacht-websites.jsx"],
    "/about": ["about.html", "page-about.jsx"],
    "/team": ["team.html", "page-team.jsx"],
    "/work": ["work.html", "page-work.jsx"],
    "/testimonials": ["testimonials.html", "page-testimonials.jsx"],
    "/pricing": ["pricing.html", "page-pricing.jsx"],
    "/faq": ["faq.html", "page-faq.jsx"],
    "/locations": ["locations.html", "page-locations.jsx"],
    "/contact": ["contact.html", "page-contact.jsx"],
    "/sitemap": ["sitemap.html", "page-sitemap.jsx"],
    "/llms.txt": ["llms.txt"],
}

# Whole content arrays rendered by a hub. Not used for individual ?s= URLs,
# so editing one service does not move the other service URLs.
BLOCK_RANGES = {
    "/": ["/^const CASE_STUDIES = \\[/,/^];/:site-data.jsx"],
    "/work": ["/^const CASE_STUDIES = \\[/,/^];/:site-data.jsx"],
    "/services": ["/^const SERVICES = \\[/,/^];/:site-data.jsx"],
    "/faq": ["/^const FAQS = \\[/,/^];/:site-data.jsx"],
    "/testimonials": ["/^const GOOGLE_REVIEWS = \\[/,/^];/:site-data.jsx"],
    "/sitemap": ["/^const SITE_MAP = \\[/,/^];/:site-data.jsx"],
}

QUERY_FILES = {
    "service": ["service.html", "page-service-detail.jsx"],
    "case": ["case.html", "page-case-detail.jsx"],
    "legal": ["legal.html", "page-legal.jsx"],
}

NOTE = (
    "  <!-- lastmod is the day that URL's rendered content last changed on main.\n"
    "       Shared nav, footer, and global CSS do not stamp every URL. Refresh with\n"
    "       python3 scripts/update-sitemap-lastmod.py -->\n"
)


def git(*args: str) -> str:
    return subprocess.check_output(
        ["git", "--no-pager", *args],
        cwd=ROOT,
        text=True,
        stderr=subprocess.STDOUT,
    )


def file_commits(path: str) -> list[tuple[str, str, str]]:
    out = git(
        "log",
        "HEAD",
        "--first-parent",
        "--format=%H%x09%cs%x09%s",
        "--",
        path,
    )
    rows = []
    for line in out.splitlines():
        if not line.strip():
            continue
        sha, day, subject = line.split("\t", 2)
        rows.append((sha, day, subject))
    return rows


def commit_diff(sha: str, path: str) -> str:
    parents = git("rev-parse", f"{sha}^@").split()
    if not parents:
        return git("show", "--format=", sha, "--", path)
    return git("diff", parents[0], sha, "--", path)


def meaningful(diff: str) -> bool:
    for line in diff.splitlines():
        if not line.startswith(("+", "-")) or line.startswith(("+++", "---")):
            continue
        body = line[1:].strip()
        if not body or IGNORABLE.search(body) or STRUCTURAL.fullmatch(body):
            continue
        return True
    return False


def latest_file(path: str) -> tuple[str, str, str] | None:
    for sha, day, subject in file_commits(path):
        if meaningful(commit_diff(sha, path)):
            return day, sha[:7], f"{path}: {subject}"
    return None


def latest_range(range_spec: str) -> tuple[str, str, str] | None:
    try:
        out = git(
            "log",
            "HEAD",
            "--first-parent",
            "-1",
            "--format=%cs%x09%h%x09%s",
            f"-L{range_spec}",
        )
    except subprocess.CalledProcessError as exc:
        sys.stderr.write(exc.output or "")
        raise SystemExit(f"git log -L failed for {range_spec}") from exc
    line = out.strip().splitlines()[0] if out.strip() else ""
    if not line or line.startswith("diff --git"):
        return None
    day, sha, subject = line.split("\t", 2)
    return day, sha, f"{range_spec.split(':')[-1]}: {subject}"


def sources(loc: str) -> tuple[list[str], list[str]]:
    if not loc.startswith(HOST):
        raise SystemExit(f"unexpected host in {loc}")
    tail = loc[len(HOST):] or "/"
    if tail in STATIC_FILES:
        return STATIC_FILES[tail], BLOCK_RANGES.get(tail, [])
    match = re.fullmatch(r"/([a-z]+)\?s=([a-z0-9-]+)", tail)
    if not match or match.group(1) not in QUERY_FILES:
        raise SystemExit(f"no source mapping for {loc}")
    kind, slug = match.group(1), match.group(2)
    ranges = []
    if kind in ("service", "case"):
        ranges.append(f'/slug: "{slug}"/,/^  \\}},/:site-data.jsx')
    return QUERY_FILES[kind], ranges


def lastmod_for(loc: str) -> tuple[str, str]:
    files, ranges = sources(loc)
    found: list[tuple[str, str, str]] = []
    for path in files:
        hit = latest_file(path)
        if hit:
            found.append(hit)
    for spec in ranges:
        hit = latest_range(spec)
        if hit:
            found.append(hit)
    if not found:
        raise SystemExit(f"no content commit found for {loc}")
    day, sha, why = max(found, key=lambda row: row[0])
    today = dt.date.today().isoformat()
    if day > today:
        raise SystemExit(f"refusing future lastmod {day} for {loc} ({why})")
    return day, f"{day} {sha} {why}"


def locs_and_rest(xml: str) -> list[tuple[str, str, str]]:
    rows = []
    for match in re.finditer(
        r"<loc>([^<]+)</loc><lastmod>\d{4}-\d{2}-\d{2}</lastmod>"
        r"<changefreq>([^<]+)</changefreq><priority>([^<]+)</priority>",
        xml,
    ):
        rows.append((match.group(1), match.group(2), match.group(3)))
    return rows


def main() -> None:
    xml = SITEMAP.read_text(encoding="utf-8")
    original = locs_and_rest(xml)
    if len(original) != 35:
        raise SystemExit(f"expected 35 URLs, found {len(original)}")

    updates: list[tuple[str, str, str]] = []
    for loc, _freq, _pri in original:
        day, why = lastmod_for(loc)
        updates.append((loc, day, why))
        xml, n = re.subn(
            r"(<loc>" + re.escape(loc) + r"</loc><lastmod>)\d{4}-\d{2}-\d{2}(</lastmod>)",
            rf"\g<1>{day}\g<2>",
            xml,
            count=1,
        )
        if n != 1:
            raise SystemExit(f"failed to write lastmod for {loc}")

    if "python3 scripts/update-sitemap-lastmod.py" not in xml:
        xml = xml.replace(
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + NOTE,
            1,
        )

    ET.register_namespace("", "http://www.sitemaps.org/schemas/sitemap/0.9")
    root = ET.fromstring(xml)
    found = root.findall("sm:url", NS)
    if len(found) != 35:
        raise SystemExit(f"sitemap no longer has 35 URLs ({len(found)})")
    for (loc, freq, pri), url_el in zip(original, found):
        got_loc = url_el.findtext("sm:loc", default="", namespaces=NS)
        got_freq = url_el.findtext("sm:changefreq", default="", namespaces=NS)
        got_pri = url_el.findtext("sm:priority", default="", namespaces=NS)
        got_day = url_el.findtext("sm:lastmod", default="", namespaces=NS)
        if (got_loc, got_freq, got_pri) != (loc, freq, pri):
            raise SystemExit(f"refusing to change loc/changefreq/priority for {loc}")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", got_day):
            raise SystemExit(f"bad lastmod {got_day} for {loc}")

    SITEMAP.write_text(xml, encoding="utf-8")
    for loc, day, why in updates:
        path = loc[len(HOST):] or "/"
        print(f"{path}\t{day}\t{why}")


if __name__ == "__main__":
    main()
