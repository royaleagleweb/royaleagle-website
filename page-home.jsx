function Hero() {
  const featured = CASE_STUDIES[0];
  return (
    <section className="re-hero">
      <div className="re-hero-inner">
        <div>
          <h1 className="re-hero-title">
            Websites that work.
            <span className="gold">Built in Fort Lauderdale.</span>
          </h1>
          <p className="re-hero-sub">Roy Bachar. Since 2014. He answers the phone.</p>
          <div className="re-hero-ctas">
            <a href="contact.html" className="btn btn-gold">Book 20 minutes</a>
            <a href="work.html" className="btn btn-ghost">See the work</a>
          </div>
          <a href="tel:+17542334037" className="re-hero-phone">754-233-4037</a>
        </div>
        <div className="re-device">
          <a href={featured.url} target="_blank" rel="noopener" className="re-device-frame" aria-label={`Visit ${featured.brand}`}>
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
        <div className="re-select-k">Select work</div>
        <a href="work.html" className="re-select-all">View all work →</a>
      </div>
      <div className="re-work-grid">
        {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="section team-section">
      <div className="meth-head">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Who you'll work with</div>
          <h2 className="section-title">Roy Bachar.<br/>Founder, since 2014.</h2>
        </div>
        <p className="meth-aside">No stock-photo leadership grid. Roy answers the phone, sits on the discovery calls, and stays in the work through launch.</p>
      </div>
      <div className="founder-card">
        <div className="founder-mark"><EagleMark/></div>
        <div>
          <div className="team-pc-n">Roy Bachar</div>
          <div className="team-pc-r">Founder · 4440 Inverrary Blvd, Lauderhill</div>
          <p className="team-pc-bio-txt">WordPress, custom sites, marketing, and AI when it actually helps. When a project needs extra hands, he works with senior specialists — and tells you first.</p>
          <div className="founder-actions">
            <a href="tel:+17542334037" className="btn btn-gold">754-233-4037</a>
            <a href="about.html" className="btn btn-ghost">About the shop</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>5.0 on Google</div>
        <h2 className="section-title">What people wrote<br/>on Google.</h2>
      </div>
      <div className="work-card-grid">
        {GOOGLE_REVIEWS.map((q, i) => (
          <figure key={i} className="testi-card">
            <div className="trust-stars">★★★★★</div>
            <blockquote>"{q.q}"</blockquote>
            <figcaption>
              <div className="testi-a">{q.a}</div>
              <div className="testi-r">{q.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="btn btn-ghost">Read reviews on Google →</a>
      </p>
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
            Royal Eagle is a <strong>web design and web development studio</strong> based at 4440 Inverrary Blvd in Lauderhill, FL. Since 2014 Roy Bachar has built <strong>custom websites, WordPress sites, and marketing</strong> for South Florida businesses.
          </p>
          <p>
            Every engagement is hands-on. Roy answers the phone. It's a small shop on purpose.
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
      description: "Websites that work. Built in Fort Lauderdale. Roy Bachar, since 2014. He answers the phone. 754-233-4037.",
      canonical: "/",
      keywords: "web design fort lauderdale, wordpress fort lauderdale, roy bachar",
      breadcrumbs: [{ name: "Home" }]
    });
  }, []);
  return (
    <PageShell active="home">
      <Hero/>
      <SelectWork/>
      <Founder/>
      <Reviews/>
      <SEOBlock/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>);
