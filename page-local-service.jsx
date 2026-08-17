// LOCAL SERVICE PAGE — driven by ?c=<city>&s=<service>
// Example: local-service.html?c=fort-lauderdale&s=wordpress-elementor

function LocalServicePage() {
  const params = new URLSearchParams(location.search);
  const citySlug = params.get('c') || 'fort-lauderdale';
  const svcSlug = params.get('s') || 'website-builds';
  const city = CITIES.find(c => c.slug === citySlug) || CITIES[0];
  const svc = SERVICES.find(s => s.slug === svcSlug) || SERVICES[0];
  const otherSvcs = SERVICES.filter(s => s.slug !== svc.slug && s.cat === svc.cat).slice(0, 3);
  const nearby = CITIES.filter(o => o.c === city.c && o.slug !== city.slug).slice(0, 6);

  // Geo-targeted FAQs — adapt the service FAQs to the city
  const localFaqs = (svc.faqs || []).map((f, i) => i === 0
    ? { q: f.q.replace(/\?$/, ` in ${city.n}?`), a: f.a }
    : f
  );

  React.useEffect(() => {
    applyPageSeo({
      title: `${svc.title} in ${city.n}, ${city.c} County FL`,
      description: `${svc.hero} Local ${svc.title.toLowerCase()} for ${city.n}, ${city.c} County businesses. Royal Eagle is rated 5.0 on Google.`,
      canonical: `local-service.html?c=${city.slug}&s=${svc.slug}`,
      image: svc.img,
      keywords: `${svc.title.toLowerCase()} ${city.n}, ${svc.title.toLowerCase()} ${city.c} County, ${svc.title.toLowerCase()} near me, ${city.n} ${svc.cat.toLowerCase()}`,
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Locations", url: "locations.html" },
        { name: city.n, url: `city.html?c=${city.slug}` },
        { name: svc.title }
      ],
      service: {
        name: `${svc.title} in ${city.n}`,
        description: `${svc.hero} Local ${svc.title.toLowerCase()} for ${city.n} businesses.`,
        areaServed: [city.n, `${city.c} County`, "South Florida"]
      },
      faq: localFaqs
    });
  }, [city.slug, svc.slug]);

  return (
    <PageShell active="services">
      <section className="section sd-hero ls-hero">
        <div className="sd-hero-grid">
          <div>
            <div className="kicker ls-kicker">
              <span className="kicker-dot"></span>
              {city.n}, {city.c} County · {svc.cat}
            </div>
            <h1 className="sd-title ls-title">
              {svc.title} in <em>{city.n}</em>
            </h1>
            <p className="sd-hero-sub">
              {svc.hero} {city.anchor ? `For ${city.n} businesses — ${city.anchor} — that means a service tuned to the local market, not a generic template.` : `For ${city.n}, ${city.c} County businesses ready to invest in a digital presence that performs.`}
            </p>
            <div className="sd-meta">
              <div className="sd-meta-cell">
                <div className="sd-meta-l">Service area</div>
                <div className="sd-meta-v">{city.n}</div>
              </div>
              <div className="sd-meta-cell">
                <div className="sd-meta-l">County</div>
                <div className="sd-meta-v">{city.c}</div>
              </div>
              <div className="sd-meta-cell">
                <div className="sd-meta-l">Local rating</div>
                <div className="sd-meta-v">★★★★★ 5.0</div>
              </div>
            </div>
            <div className="sd-ctas">
              <a href={`contact.html?city=${city.slug}&svc=${svc.slug}`} className="btn btn-gold">Get a {city.n} quote</a>
              <a href="tel:+17542334037" className="btn btn-ghost">📞 754-233-4037</a>
            </div>
          </div>
          <figure className="sd-hero-img">
            <img src={svc.img} alt={`${svc.title} in ${city.n}`} loading="eager"/>
            <div className="sd-hero-img-overlay"></div>
            <div className="ls-hero-pin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s-7-6-7-13a7 7 0 0 1 14 0c0 7-7 13-7 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>{city.n}, FL</span>
            </div>
          </figure>
        </div>
      </section>

      <section className="section sd-intro">
        <div className="sd-intro-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>Who this is for</div>
            <h2 className="section-title">Built for {city.n}<br/>businesses that want to <span className="gradient-text">stand out locally.</span></h2>
          </div>
          <p className="sd-intro-p">{svc.intro} In {city.n} specifically, we tune every engagement to the unique buyer behavior of {city.c} County — Google Business Profile, local content, neighborhood-specific landing pages, and review-acquisition systems calibrated to your industry's typical sales cycle.</p>
        </div>
      </section>

      <section className="section sd-bullets-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>What's included</div>
          <h2 className="section-title">Everything in our {city.n} {svc.title.toLowerCase()} engagement.</h2>
        </div>
        <div className="sd-bullets">
          {svc.bullets.map((b, i) => (
            <div key={i} className="sd-bullet">
              <div className="sd-bullet-n">{String(i+1).padStart(2,'0')}</div>
              <div className="sd-bullet-t">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <MeetYourLead quote={`I personally handle every ${city.n} inquiry. Send a note, give us a call, and within a business day you'll have a tailored plan — built around your business, not a template.`}/>
      </section>

      <CTAStrip
        variant="warm"
        heading={`Have a ${svc.title.toLowerCase()} project in ${city.n}?`}
        sub={`Tell us what you're trying to do. We'll let you know within a day whether we're the right fit — honestly.`}
        primary={`Get my ${city.n} quote →`}
        secondary="See pricing"
        primaryHref={`contact.html?city=${city.slug}&svc=${svc.slug}`}
      />

      {otherSvcs.length > 0 && (
        <section className="section">
          <div className="section-head">
            <div className="kicker"><span className="kicker-dot"></span>Related services in {city.n}</div>
            <h2 className="section-title">More in {svc.cat}.</h2>
          </div>
          <div className="sd-related">
            {otherSvcs.map(r => (
              <a key={r.slug} href={`local-service.html?c=${city.slug}&s=${r.slug}`} className="sd-rel-card">
                <div className="sd-rel-img"><img src={r.img} alt={`${r.title} in ${city.n}`} loading="lazy"/></div>
                <div className="sd-rel-body">
                  <div className="sd-rel-cat">{r.cat} · {city.n}</div>
                  <div className="sd-rel-t">{r.title}</div>
                  <div className="sd-rel-p">View {city.n} page →</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-head section-head-row">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>{svc.title} in other {city.c} cities</div>
            <h2 className="section-title">Nearby service areas.</h2>
          </div>
          <a href={`city.html?c=${city.slug}`} className="link-arrow">All services in {city.n} →</a>
        </div>
        <div className="city-nearby">
          {nearby.map(o => (
            <a key={o.slug} href={`local-service.html?c=${o.slug}&s=${svc.slug}`} className="city-nearby-card">
              <div className="cnc-n">{svc.title}</div>
              <div className="cnc-c">in {o.n}</div>
            </a>
          ))}
        </div>
      </section>

      {svc.faqs && svc.faqs.length > 0 && (
        <section className="section sd-faq-section">
          <div className="sd-faq-head">
            <div className="kicker"><span className="kicker-dot"></span>{city.n} · {svc.title} FAQ</div>
            <h2 className="section-title">{city.n} <span className="gradient-text">{svc.title.toLowerCase()}</span> — your questions, answered.</h2>
            <p className="section-sub">Common questions we get from {city.n} business owners considering {svc.title.toLowerCase()}. If yours isn't here, just ask.</p>
          </div>
          <ServiceFAQList faqs={localFaqs}/>
        </section>
      )}

      <CTA title={`${svc.title} in <em>${city.n}.</em>`} sub={`Ready to start? Send a note or give us a call — we'll be in touch within one business day.`}/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LocalServicePage/>);
