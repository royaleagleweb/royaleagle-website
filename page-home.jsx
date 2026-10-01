function Hero() {
  const featured = CASE_STUDIES[0];
  return (
    <section className="re-hero">
      <div className="re-hero-inner">
        <div>
          <p className="re-hero-kicker">Est. 2014 · Fort Lauderdale</p>
          <h1 className="re-hero-title">
            More calls
            <span className="gold">from the web.</span>
          </h1>
          <p className="re-hero-sub">Websites, SEO, and ads for South Florida small businesses, contractors, and marine companies.</p>
          <ul className="re-hero-chips" aria-label="Services"><li>Web design</li><li>WordPress</li><li>SEO</li><li>Google &amp; Meta ads</li><li>Hosting &amp; care</li></ul>
          <div className="re-hero-ctas"><a href="tel:+17542334037" className="btn btn-gold re-hero-cta" aria-label="Call Royal Eagle at 754-233-4037">Call 754-233-4037</a></div>
          <p className="re-hero-reassure">Talk to Roy directly · Mon–Fri, 9–6</p>
          <a href="mailto:roy@royaleagleweb.com" className="re-hero-alt">Or email roy@royaleagleweb.com</a>
          <p className="re-hero-trust"><span className="re-hero-trust-k">Sites for</span> Doctor Yachts · Construction 95 · Florida Impact Windows &amp; Doors</p>
        </div>
        <div className="re-device">
          <a href={featured.url} target="_blank" rel="noopener" className="re-device-frame" aria-label={`Visit ${featured.brand}`}>
            <div className="re-chrome" aria-hidden="true">
              <span></span><span></span><span></span>
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
            Royal Eagle is a <strong>web design and web development studio</strong> based at 4440 Inverrary Blvd in Lauderhill, FL. Since 2014 the studio has built <strong>custom websites, WordPress sites, and marketing</strong> for South Florida businesses. Rated 5.0 on Google.
          </p>
          <p>
            Every engagement is hands-on. It is a small practice on purpose.
          </p>
        </div>
        <div>
          <h2>What we actually ship</h2>
          <p>Based in Lauderhill. Working across Broward, Miami-Dade, and Palm Beach — without a city-page mill.</p>
          <ul>
            <li><a href="wordpress.html">WordPress web design</a></li>
            <li><a href="contractor-websites.html">Contractor websites</a></li>
            <li><a href="yacht-websites.html">Yacht websites</a></li>
            <li><a href="work.html">Selected work</a></li>
            <li><a href="contact.html">Book a conversation →</a></li>
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
      description: "Websites that work. Built for South Florida. A Fort Lauderdale studio, since 2014. WordPress, custom sites, marketing. Rated 5.0 on Google. 754-233-4037.",
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
