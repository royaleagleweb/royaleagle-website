// CASE STUDY DETAIL — honest: live URL + facts we can stand behind. No invented metrics.

function CaseDetail() {
  const slug = getSlug();
  const cs = CASE_STUDIES.find(c => c.slug === slug) || CASE_STUDIES[0];
  const i = CASE_STUDIES.findIndex(c => c.slug === cs.slug);
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length];

  return (
    <PageShell active="case-studies">
      <section className="case-hero" style={{ background: `linear-gradient(180deg, ${cs.color} 0%, var(--bg) 100%)` }}>
        <div className="case-hero-inner">
          <a href="case-studies.html" className="case-back">← All work</a>
          <div className="case-hero-meta">
            <span className="case-tag">{cs.tag}</span>
            {cs.location && <span className="case-year">{cs.location}</span>}
          </div>
          <h1 className="case-title">{cs.brand}</h1>
          <p className="case-summary">{cs.summary}</p>
          <div className="case-services">
            {cs.services.map(s => <span key={s} className="case-service">{s}</span>)}
          </div>
          {cs.url && (
            <p style={{ marginTop: 24 }}>
              <a href={cs.url} target="_blank" rel="noopener" className="btn btn-gold">Visit the live site →</a>
            </p>
          )}
        </div>
        <div className="case-hero-img" style={{ minHeight: 280, overflow: "hidden" }}>
          {cs.shot
            ? <img src={cs.shot} alt={`${cs.brand} live website`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}/>
            : <div className="work-card-mark" style={{ "--brand-color": cs.color, minHeight: 280 }}><span>{cs.brand}</span></div>}
        </div>
      </section>

      {cs.facts && cs.facts.length > 0 && (
        <section className="section case-impact-section">
          <div className="section-head">
            <div className="kicker"><span className="kicker-dot"></span>What we can say</div>
            <h2 className="section-title">The facts.</h2>
          </div>
          <div className="case-impact">
            {cs.facts.map(([n, l], k) => (
              <div key={k} className="case-impact-cell">
                <div className="case-impact-n">{n}</div>
                <div className="case-impact-l">{l}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section case-challenge">
        <div className="case-prose-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>The work</div>
            <h2 className="section-title">A live site.<br/>That's the proof.</h2>
          </div>
          <div className="case-prose">
            <p>{cs.summary} Roy built it. We don't publish traffic percentages, conversion lifts, or LCP scores we can't show you.</p>
            <p>If you want the same kind of site for your business, call 754-233-4037 or send a note. Roy answers.</p>
          </div>
        </div>
      </section>

      <CTAStrip
        variant="warm"
        heading="Want a site like this?"
        sub="Twenty minutes on the phone with Roy is enough to know if we're a fit."
        primary="Book a call"
        secondary="See more work"
        secondaryHref="work.html"
      />

      <section className="section case-next">
        <a href={`case.html?s=${next.slug}`} className="case-next-card" style={{ background: `linear-gradient(135deg, ${next.color} 0%, ${next.color}aa 100%)` }}>
          <div className="case-next-meta">Next project</div>
          <div className="case-next-brand">{next.brand}</div>
          <div className="case-next-tag">{next.tag}{next.location ? ` · ${next.location}` : ""}</div>
        </a>
      </section>

      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseDetail/>);
