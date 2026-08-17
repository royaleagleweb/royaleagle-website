// ============================================================
// SEO META + STRUCTURED DATA
// Per-page <title>, <meta description>, canonical, OpenGraph,
// Twitter card, JSON-LD schema (LocalBusiness + page-type).
// Runs after the page mounts; updates the document head live.
// ============================================================

const SITE = {
  name: "Royal Eagle Web Design & Marketing",
  shortName: "Royal Eagle",
  domain: "https://royaleagleweb.com",
  phone: "+1-754-233-4037",
  phoneDisplay: "(754) 233-4037",
  email: "roy@royaleagleweb.com",
  address: {
    street: "4440 Inverrary Blvd",
    city: "Lauderhill",
    state: "FL",
    zip: "33319",
    country: "US",
  },
  geo: { lat: 26.156, lng: -80.218 },
  founder: "Roy Bachar",
  founded: "2014",
  socials: ["https://share.google/1081gc2LSDc6FXpcZ"],
  defaultOgImage: "https://royaleagleweb.com/og-image.png",
  // Service-area cities (top markets)
  serviceArea: [
    "Fort Lauderdale", "Lauderhill", "Plantation", "Sunrise", "Hollywood",
    "Pembroke Pines", "Pompano Beach", "Coral Springs", "Davie", "Weston",
    "Miami", "Miami Beach", "Coral Gables", "Aventura", "Doral",
    "Boca Raton", "Delray Beach", "Boynton Beach", "West Palm Beach", "Jupiter"
  ],
};

function setOrReplaceMeta(attr, key, content) {
  if (!content) return;
  let m = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!m) {
    m = document.createElement("meta");
    m.setAttribute(attr, key);
    document.head.appendChild(m);
  }
  m.setAttribute("content", content);
}

function setLinkRel(rel, href, attrs = {}) {
  let l = document.head.querySelector(`link[rel="${rel}"]`);
  if (!l) {
    l = document.createElement("link");
    l.setAttribute("rel", rel);
    document.head.appendChild(l);
  }
  l.setAttribute("href", href);
  Object.entries(attrs).forEach(([k, v]) => l.setAttribute(k, v));
}

function setJsonLd(id, data) {
  let s = document.head.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (!s) {
    s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.id = id;
    document.head.appendChild(s);
  }
  s.textContent = JSON.stringify(data);
}

// LocalBusiness — site-wide schema present on every page
const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "WebDesignCompany"],
  "@id": SITE.domain + "/#business",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.domain,
  logo: SITE.domain + "/logo.png",
  image: SITE.defaultOgImage,
  description: "Hands-on web design, web development, and digital marketing for South Florida businesses. Fort Lauderdale–area studio, founded 2014. WordPress, custom builds, SEO, PPC, and AI services.",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  foundingDate: SITE.founded,
  founder: { "@type": "Person", name: SITE.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: SITE.serviceArea.map(c => ({ "@type": "City", name: c })),
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  }],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "9",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: SITE.socials,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      "Web Design", "Web Development", "WordPress Development", "E-commerce Development",
      "Search Engine Optimization", "Pay-Per-Click Advertising", "Brand & Design",
      "Marketing Automation", "AI Consultation", "Website Maintenance"
    ].map(s => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s }
    })),
  },
};

// Stamp <head> with all global SEO tags + LocalBusiness schema
function applyBaseSeo() {
  // Theme + viewport (will be no-op if already set in HTML)
  setOrReplaceMeta("name", "theme-color", "#0A1428");
  setOrReplaceMeta("name", "color-scheme", "dark");
  setOrReplaceMeta("name", "format-detection", "telephone=no");
  setOrReplaceMeta("name", "author", SITE.name);
  setOrReplaceMeta("name", "publisher", SITE.name);
  setOrReplaceMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setOrReplaceMeta("name", "googlebot", "index, follow, max-image-preview:large, max-snippet:-1");
  // Geo + locality (older but still parsed)
  setOrReplaceMeta("name", "geo.region", "US-FL");
  setOrReplaceMeta("name", "geo.placename", "Lauderhill, Fort Lauderdale, Florida");
  setOrReplaceMeta("name", "geo.position", `${SITE.geo.lat};${SITE.geo.lng}`);
  setOrReplaceMeta("name", "ICBM", `${SITE.geo.lat}, ${SITE.geo.lng}`);
  // Site-wide LocalBusiness
  setJsonLd("local-business", LOCAL_BUSINESS_LD);

  // Apple touch
  // favicon + manifest are wired in static <head>
}

// Apply per-page SEO. Pass:
//   { title, description, image, canonical, type, jsonLd: { [id]: data, … } }
function applyPageSeo(opts) {
  const {
    title,
    description,
    image,
    canonical,
    type = "website",
    keywords,
    breadcrumbs,
    article,
    service,
    faq,
    extraLd = {},
  } = opts || {};

  // Build absolute canonical — homepage is / not index.html
  let path = (canonical || (location.pathname + location.search)).replace(/^\.?\//, "");
  if (!path || path === "index.html" || path === "/index.html") path = "";
  const canonicalUrl = path.startsWith("http") ? path : (path ? `${SITE.domain}/${path}` : `${SITE.domain}/`);

  // Document title — strip duplicated brand
  const finalTitle = title
    ? (title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`)
    : `${SITE.name} | Web Design & Marketing in Fort Lauderdale, Florida`;
  document.title = finalTitle;

  // Description
  const finalDesc = description ||
    "Royal Eagle is a hands-on web design, web development, and digital marketing studio in the Fort Lauderdale area. Serving Broward, Miami-Dade, and Palm Beach since 2014. Rated 5.0 on Google.";
  setOrReplaceMeta("name", "description", finalDesc);
  if (keywords) setOrReplaceMeta("name", "keywords", keywords);

  // Canonical
  setLinkRel("canonical", canonicalUrl);

  // OpenGraph
  setOrReplaceMeta("property", "og:title", finalTitle);
  setOrReplaceMeta("property", "og:description", finalDesc);
  setOrReplaceMeta("property", "og:url", canonicalUrl);
  setOrReplaceMeta("property", "og:type", type);
  setOrReplaceMeta("property", "og:site_name", SITE.name);
  setOrReplaceMeta("property", "og:locale", "en_US");
  setOrReplaceMeta("property", "og:image", image || SITE.defaultOgImage);
  setOrReplaceMeta("property", "og:image:width", "1200");
  setOrReplaceMeta("property", "og:image:height", "630");

  // Twitter card
  setOrReplaceMeta("name", "twitter:card", "summary_large_image");
  setOrReplaceMeta("name", "twitter:title", finalTitle);
  setOrReplaceMeta("name", "twitter:description", finalDesc);
  setOrReplaceMeta("name", "twitter:image", image || SITE.defaultOgImage);

  // Breadcrumbs schema
  if (breadcrumbs && breadcrumbs.length) {
    setJsonLd("breadcrumbs", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url ? (b.url.startsWith("http") ? b.url : `${SITE.domain}/${b.url.replace(/^\//, "")}`) : undefined,
      })),
    });
  }

  // Article schema (blog)
  if (article) {
    setJsonLd("article", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title || finalTitle,
      description: article.description || finalDesc,
      image: article.image || image || SITE.defaultOgImage,
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: { "@type": "Person", name: article.author || SITE.founder },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        logo: { "@type": "ImageObject", url: `${SITE.domain}/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords: article.keywords,
    });
  }

  // Service schema
  if (service) {
    setJsonLd("service", {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.name,
      name: service.name,
      description: service.description || finalDesc,
      provider: { "@id": `${SITE.domain}/#business` },
      areaServed: (service.areaServed || SITE.serviceArea).map(c => ({ "@type": "City", name: c })),
      url: canonicalUrl,
      ...(service.offers ? { offers: service.offers } : {}),
    });
  }

  // FAQ schema
  if (faq && faq.length) {
    setJsonLd("faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  // Any custom LD pairs
  for (const [id, data] of Object.entries(extraLd)) setJsonLd(id, data);
}

// Run base SEO immediately
applyBaseSeo();

Object.assign(window, { SITE, applyBaseSeo, applyPageSeo, LOCAL_BUSINESS_LD });
