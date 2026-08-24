// SERVICE DETAIL — driven by ?s=<slug>

// Accordion FAQ component (used on service detail + local-service pages)
function ServiceFAQList({ faqs }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="sd-faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`sd-faq ${isOpen ? 'is-open' : ''}`}>
            <button
              className="sd-faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="sd-faq-num">{String(i+1).padStart(2,'0')}</span>
              <span className="sd-faq-q-t">{f.q}</span>
              <span className="sd-faq-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div className="sd-faq-a" hidden={!isOpen}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceDetail() {
  const slug = getSlug();
  const svc = SERVICES.find(s => s.slug === slug) || SERVICES[0];
  const related = SERVICES.filter(s => s.cat === svc.cat && s.slug !== svc.slug).slice(0, 3);

  // SEO + structured data
  React.useEffect(() => {
    applyPageSeo({
      title: `${svc.title} in Fort Lauderdale, FL`,
      description: `${svc.hero} Royal Eagle — hands-on ${svc.title.toLowerCase()} for South Florida businesses since 2014. 5.0 ★ on Google.`,
      canonical: `service.html?s=${svc.slug}`,
      image: svc.img,
      keywords: `${svc.title.toLowerCase()}, ${svc.title.toLowerCase()} Fort Lauderdale, ${svc.cat.toLowerCase()}, web design Fort Lauderdale, web development South Florida`,
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Services", url: "services.html" },
        { name: svc.title }
      ],
      service: {
        name: svc.title,
        description: svc.hero,
        offers: svc.price && svc.price !== 'Custom quote' ? { "@type": "Offer", description: svc.price } : undefined,
      },
      faq: svc.index === false ? undefined : (svc.faqs || []),
      noindex: svc.index === false,
    });
  }, [svc.slug]);

  return (
    <PageShell active="services">
      <section className="section sd-hero">
        <div className="sd-hero-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>{svc.cat}</div>
            <h1 className="sd-title">{svc.title}</h1>
            <p className="sd-hero-sub">{svc.hero}</p>
            <div className="sd-meta">
              <div className="sd-meta-cell">
                <div className="sd-meta-l">Engagement</div>
                <div className="sd-meta-v">{svc.cat}</div>
              </div>
              <div className="sd-meta-cell">
                <div className="sd-meta-l">Who does the work</div>
                <div className="sd-meta-v">Roy + specialists as needed</div>
              </div>
              <div className="sd-meta-cell">
                <div className="sd-meta-l">Local rating</div>
                <div className="sd-meta-v">★★★★★ 5.0</div>
              </div>
            </div>
            <div className="sd-ctas">
              <a href="contact.html" className="btn btn-gold">Schedule a consultation</a>
              <a href="work.html" className="btn btn-ghost">Selected work</a>
            </div>
          </div>
          {svc.img ? (
          <figure className="sd-hero-img">
            <img src={svc.img} alt="A live site from the studio" loading="eager"/>
            <div className="sd-hero-img-overlay"></div>
          </figure>
          ) : null}
        </div>
      </section>

      <section className="section sd-intro">
        <div className="sd-intro-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>The overview</div>
            <h2 className="section-title">What you get,<br/><span className="gradient-text">how we get there.</span></h2>
          </div>
          <p className="sd-intro-p">{svc.intro}</p>
        </div>
      </section>

      <section className="section sd-bullets-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>What's included</div>
          <h2 className="section-title">Everything in the {svc.title.toLowerCase()} engagement.</h2>
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
        <MeetYourLead/>
      </section>

      <CTAStrip
        variant="warm"
        heading={`Have a ${svc.title.toLowerCase()} project in mind?`}
        sub="Tell us what you're trying to do. We'll let you know within a day whether we're the right fit — honestly."
        primary="Send us a brief"
        secondary="See pricing"
      />

      <section className="section sd-tech-section">
        <div className="sd-tech-grid">
          <div className="sd-tech-card">
            <div className="kicker"><span className="kicker-dot"></span>Tech we use</div>
            <h3 className="sd-tech-h">The stack</h3>
            <div className="sd-stack">
              {svc.stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <p className="sd-tech-p">We're platform-agnostic by philosophy. The tools above are the ones we actually use in production — picked for the job, not for a partner badge.</p>
          </div>
          <div className="sd-tech-card">
            <div className="kicker"><span className="kicker-dot"></span>Deliverables</div>
            <h3 className="sd-tech-h">What you take home</h3>
            <ul className="sd-deliverables">
              {svc.deliverables.map((d, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head">
            <div className="kicker"><span className="kicker-dot"></span>Related services</div>
            <h2 className="section-title">More in {svc.cat}.</h2>
          </div>
          <div className="sd-related">
            {related.map(r => (
              <a key={r.slug} href={`service.html?s=${r.slug}`} className="sd-rel-card">
                {r.img ? <div className="sd-rel-img"><img src={r.img} alt={r.title} loading="lazy"/></div> : null}
                <div className="sd-rel-body">
                  <div className="sd-rel-cat">{r.cat}</div>
                  <div className="sd-rel-t">{r.title}</div>
                  <div className="sd-rel-p">{r.price}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {svc.faqs && svc.faqs.length > 0 && (
        <section className="section sd-faq-section">
          <div className="sd-faq-head">
            <div className="kicker"><span className="kicker-dot"></span>Frequently asked</div>
            <h2 className="section-title">Questions about<br/><span className="gradient-text">{svc.title.toLowerCase()}.</span></h2>
            <p className="section-sub">If your question isn't here, just ask — we reply within one business day.</p>
          </div>
          <ServiceFAQList faqs={svc.faqs}/>
        </section>
      )}

      <CTA title={`Ready for <em>${svc.title.toLowerCase()}?</em>`}/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ServiceDetail/>);
