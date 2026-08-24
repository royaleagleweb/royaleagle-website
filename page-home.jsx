function Hero() {
  const featured = CASE_STUDIES[0];
  const host = (featured.url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <section className="re-hero">
      <div className="re-hero-inner">
        <div>
          <p className="re-hero-kicker">Est. 2014 · Fort Lauderdale</p>
          <h1 className="re-hero-title">
            Websites that work.
            <span className="gold">Built for South Florida.</span>
          </h1>
          <p className="re-hero-sub">A web studio with twelve years in the work. WordPress, custom sites, marketing.</p>
          <div className="re-hero-ctas">
            <a href="contact.html" className="btn btn-gold">Book a conversation</a>
            <a href="work.html" className="btn btn-ghost">Selected work</a>
          </div>
          <a href="tel:+17542334037" className="re-hero-phone">754-233-4037</a>
        </div>
        <div className="re-device">
          <a href={featured.url} target="_blank" rel="noopener" className="re-device-frame" aria-label={`Visit ${featured.brand}`}>
            <div className="re-chrome" aria-hidden="true">
              <span></span><span></span><span></span>
              <div className="re-chrome-url">{host}</div>
            </div>
            <img src={featured.shot} alt={`${featured.brand} live website`}/>
          </a>
        </div>
      </div>
    </section>
  );
}

function SelectWork() {
  return (
    <section className="re-select" id="work">
      <div className="re-select-head">
        <div className="re-select-k">Selected work</div>
        <a href="work.html" className="re-select-all">View the portfolio →</a>
      </div>
      <div className="re-work-grid">
        {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="re-studio" id="studio">
      <div className="re-studio-grid">
        <div>
          <p className="re-studio-kicker">The studio</p>
          <h2 className="re-studio-title">A Fort Lauderdale practice, since 2014.</h2>
          <div className="re-studio-copy">
            <p>Royal Eagle is a senior-level studio for thoughtful WordPress and custom websites. We work with South Florida businesses that want a site that holds up — and a studio that stays in the work.</p>
            <p>The practice is based at 4440 Inverrary Blvd in Lauderhill, about eight minutes from the Sawgrass. Websites, WordPress, custom builds, marketing, and a little AI when it actually helps.</p>
            <p>When a project needs extra hands, we bring in senior specialists — and we say so. No invented leadership grid. No headcount costume.</p>
          </div>
          <div className="re-studio-founder">
            <div className="founder-mark"><EagleMark/></div>
            <div className="re-studio-founder-meta">
              Founded by Roy Bachar<br/>
              Fort Lauderdale, Florida
            </div>
          </div>
          <div className="re-studio-ctas">
            <a href="contact.html" className="btn btn-gold">Book a conversation</a>
            <a href="tel:+17542334037" className="btn btn-ghost">754-233-4037</a>
          </div>
        </div>
        <div className="re-reviews">
          {GOOGLE_REVIEWS.map((q, i) => (
            <figure key={i} className="testi-card">
              <div className="trust-stars">★★★★★</div>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="re-review-mark"><span className="re-review-check" aria-hidden="true">✓</span> Verified Google Review</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOBlock() {
  return (
    <section className="seo-block" aria-label="Service areas and details">
      <div className="seo-block-inner">
        <div>
          <h2>Web Design in Fort Lauderdale, FL</h2>
          <p>
            Royal Eagle is a <strong>web design and web development studio</strong> based at 4440 Inverrary Blvd in Lauderhill, FL. Since 2014 the studio has built <strong>custom websites, WordPress sites, and marketing</strong> for South Florida businesses.
          </p>
          <p>
            Every engagement is hands-on. It is a small practice on purpose.
          </p>
        </div>
        <div>
          <h2>South Florida</h2>
          <p>Based in Lauderhill, working across Broward, Miami-Dade, and Palm Beach.</p>
          <ul>
            <li><a href="city.html?c=fort-lauderdale">Web Design Fort Lauderdale</a></li>
            <li><a href="city.html?c=hollywood">Web Design Hollywood</a></li>
            <li><a href="city.html?c=miami">Web Design Miami</a></li>
            <li><a href="city.html?c=plantation">Web Design Plantation</a></li>
            <li><a href="locations.html">All service areas →</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "Web Design in Fort Lauderdale, FL | Royal Eagle",
      description: "Websites that work. Built for South Florida. A Fort Lauderdale studio, since 2014. WordPress, custom sites, marketing. 754-233-4037.",
      canonical: "/",
      keywords: "web design fort lauderdale, wordpress fort lauderdale, royal eagle",
      breadcrumbs: [{ name: "Home" }]
    });
  }, []);
  return (
    <PageShell active="home">
      <Hero/>
      <SelectWork/>
      <Studio/>
      <SEOBlock/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>);
