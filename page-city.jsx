// CITY PAGE — driven by ?c=<slug>
// Generic landing page for one South Florida city, listing all 18 services

function CityPage() {
  const slug = new URLSearchParams(location.search).get('c') || 'fort-lauderdale';
  const city = CITIES.find(c => c.slug === slug) || CITIES[0];
  const nearby = CITIES.filter(o => o.c === city.c && o.slug !== city.slug).slice(0, 8);
  const otherCounties = [...new Set(CITIES.map(c => c.c).filter(c => c !== city.c))];

  return (
    <PageShell active="regions">
      <section className="city-hero">
        <div className="city-hero-bg">
          <img src={`https://images.unsplash.com/photo-${city.slug.includes('miami') ? '1535262971923-d4b40c39a48a' : city.slug.includes('palm') || city.slug.includes('boca') || city.slug.includes('delray') ? '1611606063065-ee7946f0787a' : '1561491139-a4c3b9c01e1a'}?w=2000&q=90`} alt={`${city.n}, ${city.c} County, Florida`} loading="eager"/>
          <div className="city-hero-overlay"></div>
        </div>
        <div className="city-hero-inner">
          <a href="locations.html" className="case-back">← All service areas</a>
          <div className="kicker kicker-light">
            <span className="kicker-dot"></span>
            {city.c} County · Population {city.pop.toLocaleString()}
          </div>
          <h1 className="city-h1">
            Web design & marketing<br/>
            <em>in {city.n}.</em>
          </h1>
          <p className="city-sub">
            {city.anchor
              ? `${city.n} — ${city.anchor} — is one of the ${city.c} County markets we serve every day. Whether you're a new business launching, a long-standing local brand looking to modernize, or a multi-location operation expanding into the area, we build the websites and run the campaigns that actually drive {city.n} customers.`
              : `${city.n}, ${city.c} County is one of our home markets. We've built websites, run paid campaigns, and managed marketing operations for ${city.n} businesses across professional services, real estate, healthcare, hospitality, and retail.`}
          </p>
          <div className="city-cta-row">
            <a href={`contact.html?city=${city.slug}`} className="btn btn-gold btn-lg">Get a {city.n} quote →</a>
            <a href="tel:+17542334037" className="hero-luxe-secondary hero-luxe-secondary-light">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              754-233-4037 (we answer)
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>All services in {city.n}</div>
          <h2 className="section-title">Pick the service<br/>you need in <span className="gradient-text">{city.n}.</span></h2>
        </div>
        <div className="svc-hub-grid">
          {SERVICES.map(s => (
            <a key={s.slug} href={`local-service.html?c=${city.slug}&s=${s.slug}`} className="svc-hub-card">
              <figure className="svc-hub-img"><img src={s.img} alt={`${s.title} in ${city.n}`} loading="lazy"/></figure>
              <div className="svc-hub-body">
                <h3 className="svc-hub-t">{s.title} <span className="svc-hub-loc">in {city.n}</span></h3>
                <p className="svc-hub-d">{s.hero}</p>
                <div className="svc-hub-foot">
                  <span className="svc-hub-price">View {city.n} page →</span>
                  <span className="svc-hub-arr">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section city-facts">
        <div className="city-facts-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>Why local matters in {city.n}</div>
            <h2 className="section-title">We work with {city.n}<br/>businesses every week.</h2>
            <div className="about-prose">
              <p>{city.n} customers don't search the same way customers do in other Florida markets. Local intent, neighborhood awareness, and {city.c} County-specific competitive dynamics all shape what works — and we know them because we live here.</p>
              <p>Every {city.n} engagement gets local-SEO setup with Google Business Profile optimization, neighborhood-specific landing pages, and review-acquisition flows tailored to your industry's typical buyer journey in this part of {city.c}.</p>
            </div>
          </div>
          <aside className="city-facts-card">
            <div className="cfc-row"><div className="cfc-l">City</div><div className="cfc-v">{city.n}</div></div>
            <div className="cfc-row"><div className="cfc-l">County</div><div className="cfc-v">{city.c}</div></div>
            <div className="cfc-row"><div className="cfc-l">Population</div><div className="cfc-v">{city.pop.toLocaleString()}</div></div>
            <div className="cfc-row"><div className="cfc-l">ZIP codes</div><div className="cfc-v">{city.zip}</div></div>
            <div className="cfc-row"><div className="cfc-l">We serve since</div><div className="cfc-v">2014</div></div>
            <div className="cfc-row"><div className="cfc-l">Local rating</div><div className="cfc-v">★★★★★ 5.0 Google</div></div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-head section-head-row">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>Nearby cities we also serve in {city.c} County</div>
            <h2 className="section-title">More {city.c} markets.</h2>
          </div>
          <a href={`locations.html#${city.c.toLowerCase().replace(/[^a-z]/g,'')}`} className="link-arrow">See all {city.c} cities →</a>
        </div>
        <div className="city-nearby">
          {nearby.map(o => (
            <a key={o.slug} href={`city.html?c=${o.slug}`} className="city-nearby-card">
              <div className="cnc-n">{o.n}</div>
              <div className="cnc-c">{o.c} · {o.pop.toLocaleString()} pop</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Other counties we serve</div>
          <h2 className="section-title">South Florida-wide.</h2>
        </div>
        <div className="city-county-row">
          {otherCounties.map(co => (
            <a key={co} href={`locations.html#${co.toLowerCase().replace(/[^a-z]/g,'')}`} className="city-county-card">
              <div className="ccc-c">{co} County</div>
              <div className="ccc-count">{CITIES.filter(c => c.c === co).length} cities served</div>
            </a>
          ))}
        </div>
      </section>

      <CTA title={`Ready to grow in <em>${city.n}?</em>`} sub={`Tell us about your ${city.n} business. We'll come back within one business day.`}/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CityPage/>);
