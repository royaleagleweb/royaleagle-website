// Titles, descriptions, and canonicals for /service, /case, and /legal.
// Loaded in the browser as a classic script and imported by worker.js.
// Formulas match applyPageSeo() in lib-seo.jsx (brand suffix + 160-char clamp).

const DETAIL_BRAND = "Royal Eagle";
const DETAIL_ORIGIN = "https://royaleagleweb.com";

function withBrandSuffix(title) {
  return title.includes(DETAIL_BRAND) ? title : `${title} | ${DETAIL_BRAND}`;
}

function clampDescription(description) {
  if (description.length <= 160) return description;
  return description.slice(0, 157).trimEnd() + "...";
}

function serviceDetailHead(svc) {
  const title = `${svc.title} in Fort Lauderdale, FL`;
  const description = `${svc.hero} Royal Eagle — hands-on ${svc.title.toLowerCase()} for South Florida businesses since 2014. 5.0 ★ on Google.`;
  return {
    title: withBrandSuffix(title),
    description,
    canonical: `${DETAIL_ORIGIN}/service?s=${svc.slug}`,
  };
}

function caseDetailHead(cs) {
  const title = `${cs.brand} — ${cs.tag}`;
  const description = `${cs.brand} — ${cs.tag}. ${cs.summary}`;
  return {
    title: withBrandSuffix(title),
    description: clampDescription(description),
    canonical: `${DETAIL_ORIGIN}/case?s=${cs.slug}`,
  };
}

// On-page legal H1s are "Privacy Policy", "Terms of Service", and
// "Accessibility Statement". These strings are the existing client titles.
const LEGAL_DETAIL_HEAD = {
  privacy: {
    title: "Privacy Policy — Royal Eagle Web Design",
    description: "Privacy Policy for Royal Eagle Web Design & Marketing: what we collect, how we use it, cookies, and your rights.",
  },
  terms: {
    title: "Terms of Service — Royal Eagle Web Design",
    description: "Terms of Service for Royal Eagle Web Design & Marketing: engagement scope, payment, ownership, and governing law.",
  },
  accessibility: {
    title: "Accessibility Statement — Royal Eagle Web Design",
    description: "Accessibility Statement for Royal Eagle Web Design: WCAG 2.2 Level AA status, our process, and how to send feedback.",
  },
};

function legalDetailHead(slug) {
  const seo = LEGAL_DETAIL_HEAD[slug];
  if (!seo) return null;
  return {
    title: withBrandSuffix(seo.title),
    description: seo.description,
    canonical: `${DETAIL_ORIGIN}/legal?s=${slug}`,
  };
}

function detailKind(pathname) {
  const bare = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (bare === "/service" || bare === "/case" || bare === "/legal") return bare.slice(1);
  return null;
}

// Indexable slugs only. Unknown, missing, and index:false (AI and similar)
// return null so the static head — and its client fallback / noindex script — stays.
function resolveDetailRequest(kind, slug, services, cases) {
  if (!slug) return null;
  if (kind === "service") {
    const svc = services.find((item) => item.slug === slug);
    if (!svc || svc.index === false) return null;
    return serviceDetailHead(svc);
  }
  if (kind === "case") {
    const cs = cases.find((item) => item.slug === slug);
    if (!cs) return null;
    return caseDetailHead(cs);
  }
  if (kind === "legal") return legalDetailHead(slug);
  return null;
}

Object.assign(globalThis, {
  serviceDetailHead,
  caseDetailHead,
  legalDetailHead,
  detailKind,
  resolveDetailRequest,
});
