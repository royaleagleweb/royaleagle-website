// LOCATIONS — studio / Lauderhill / South Florida. No city mill.

function LocationsPage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "Where we work | Lauderhill & South Florida | Royal Eagle",
      description: "Royal Eagle is a Fort Lauderdale–area studio at 4440 Inverrary Blvd, Lauderhill. We work across Broward, Miami-Dade, and Palm Beach. Rated 5.0 on Google. 754-233-4037.",
      canonical: "locations.html",
      keywords: "web design lauderhill, web design fort lauderdale, south florida web studio",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Where we work" }],
    });
  }, []);

  return (
    <PageShell active="regions">
      <PageHero
        kicker="Where we work"
        title='Lauderhill studio.<br/><span class="gradient-text">South Florida work.</span>'
        sub="4440 Inverrary Blvd, Lauderhill, FL 33319. We work across Broward, Miami-Dade, and Palm Beach — without a hundred city pages."
      />
      <section className="section">
        <div className="kw-copy">
          <p>Royal Eagle is a Fort Lauderdale–area studio. The office is in <strong>Lauderhill</strong>. Most of the work is nearby. Remote is fine when the project fits.</p>
          <p>We do not publish a directory of 100 cities. If you are in South Florida and need a website, call <a href="tel:+17542334037">754-233-4037</a>.</p>
        </div>
        <ul className="kw-list">
          <li><strong>The studio</strong> 4440 Inverrary Blvd, Lauderhill — about eight minutes from the Sawgrass, twenty from downtown Fort Lauderdale.</li>
          <li><strong>The work</strong> WordPress, custom sites, and marketing. See <a href="wordpress.html">WordPress</a>, <a href="contractor-websites.html">contractor websites</a>, and <a href="yacht-websites.html">yacht websites</a>.</li>
          <li><strong>The proof</strong> Six live sites on <a href="work.html">selected work</a>. Rated 5.0 on Google.</li>
        </ul>
      </section>
      <CTA title="In South Florida?" sub="Call 754-233-4037 or send a note. We reply within one business day."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<LocationsPage/>);
