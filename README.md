# Royal Eagle Web & Marketing — Website

Static marketing site for Royal Eagle Web Design & Marketing (Fort Lauderdale, FL).
Plain HTML + client-side React/Babel. **No build step.**

## Deploy (Cloudflare Pages)

Connected to this repo via Cloudflare Pages. Every push to `main` auto-deploys.

- **Build command:** _(none)_
- **Build output directory:** `/`
- **Framework preset:** None

## Editing

- Small text edits: press `.` on this repo in GitHub to open github.dev (browser VS Code), edit, commit.
- Bigger changes are produced in the design tool, then committed here.

## Structure

- `index.html` + `*.html` — pages (some are templates driven by `?s=` / `?c=` query params)
- `*.jsx` — React components, compiled in-browser by Babel (load order matters; see each HTML `<head>`)
- `styles.css` — all styles
- `site-data.jsx`, `site-cities.jsx` — content data (services, blog, cases, FAQs, cities)
- `lib-*.jsx` — shared libraries (SEO, effects, conversion, content engine)
- `sitemap*.xml`, `robots.txt` — SEO
- `_headers`, `_redirects` — Cloudflare Pages config
- favicon / og-image / logo / manifest — brand assets

## Post-deploy checklist

1. Confirm `https://royaleagleweb.com/sitemap_index.xml` loads
2. Submit `sitemap_index.xml` in Google Search Console
3. Set www → non-www redirect (handled by `_redirects`)
4. Cloudflare: enable Brotli + Auto Minify
