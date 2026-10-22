// LOCATIONS — Lauderhill studio and nearby Broward. No city mill.
// Fort Lauderdale stays on /web-design. Area names here are ones the site already uses.

const LOCATIONS_TITLE = "Web Design Lauderhill, FL | Royal Eagle";
const LOCATIONS_DESC = "Web design in Lauderhill, FL from the studio at 4440 Inverrary Blvd. Nearby Broward work in Plantation and Sunrise. Rated 5.0 on Google. 754-233-4037.";

// Cities and counties already named on the site. No extra towns.
const LOCATIONS_AREA_SERVED = [
  { "@type": "City", name: "Lauderhill" },
  { "@type": "City", name: "Fort Lauderdale" },
  { "@type": "City", name: "Plantation" },
  { "@type": "City", name: "Sunrise" },
  { "@type": "AdministrativeArea", name: "Broward County" },
  { "@type": "AdministrativeArea", name: "Miami-Dade County" },
  { "@type": "AdministrativeArea", name: "Palm Beach County" },
];

function locationsBusinessLd() {
  if (!window.LOCAL_BUSINESS_LD) return null;
  return Object.assign({}, window.LOCAL_BUSINESS_LD, { areaServed: LOCATIONS_AREA_SERVED });
}

// applyBaseSeo() stamps the sitewide city list as soon as lib-seo.jsx loads.
// Replace it before paint so the rendered schema matches this page.
function applyLocationsBusinessLd() {
  const business = locationsBusinessLd();
  const s = document.head.querySelector('script[type="application/ld+json"][data-id="local-business"]');
  if (!business || !s) return;
  s.textContent = JSON.stringify(business);
}
applyLocationsBusinessLd();

function LocationsPage() {
  React.useEffect(() => {
    const business = locationsBusinessLd();
    applyPageSeo({
      title: LOCATIONS_TITLE,
      description: LOCATIONS_DESC,
      canonical: "locations",
      keywords: "web design lauderhill, web design plantation, web design sunrise, broward web design",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Web design in Lauderhill", url: "locations" },
      ],
      extraLd: business ? { "local-business": business } : {},
    });
  }, []);

  return (
    <PageShell active="regions">
      <PageHero
        kicker="Lauderhill"
        title='Web design in Lauderhill.<br/><span class="gradient-text">A Broward studio.</span>'
        sub={<>4440 Inverrary Blvd, Lauderhill, FL 33319. Plantation and Sunrise are a short drive. We also work across Broward, Miami-Dade, and Palm Beach. Rated 5.0 on Google. <span className="re-hub-trail"><a href="/web-design">Web design in Fort Lauderdale</a> · <a href="/wordpress">WordPress web design</a> · <a href="/contractor-websites">Contractor websites</a> · <a href="/yacht-websites">Yacht websites</a> · <a href="/work">Selected work</a> · <a href="/contact">Contact the studio</a></span></>}
      />
      <section className="section">
        <div className="kw-copy">
          <p>Royal Eagle is a web studio in <strong>Lauderhill</strong>. The office is at 4440 Inverrary Blvd. Most of the work is nearby — Plantation, Sunrise, and the rest of Broward. <a href="/web-design">Web design in Fort Lauderdale</a> is its own page. Remote is fine when the project fits.</p>
          <p>We do not publish a directory of 100 cities. If you are in Lauderhill or nearby and need a website, call <a href="tel:+17542334037">754-233-4037</a>.</p>
        </div>
        <ul className="kw-list">
          <li><strong>The studio</strong> 4440 Inverrary Blvd, Lauderhill — about eight minutes from the Sawgrass, twenty from downtown Fort Lauderdale.</li>
          <li><strong>The work</strong> WordPress, custom sites, and marketing. See <a href="/wordpress">WordPress web design</a>, <a href="/contractor-websites">contractor websites</a>, and <a href="/yacht-websites">yacht websites</a>.</li>
          <li><strong>The proof</strong> Six live sites on <a href="/work">selected work</a>. Rated 5.0 on Google. <a href="/contact">Contact the studio</a>.</li>
        </ul>
      </section>
      <CTA title="In Lauderhill or nearby?" sub="Call 754-233-4037 or send a note. We reply within one business day."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<LocationsPage/>);
