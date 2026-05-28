// CASE STUDY DETAIL — driven by ?s=<slug>

function CaseDetail() {
  const slug = getSlug();
  const cs = CASE_STUDIES.find(c => c.slug === slug) || CASE_STUDIES[0];
  const i = CASE_STUDIES.findIndex(c => c.slug === cs.slug);
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length];

  return (
    <PageShell active="case-studies">
      <section className="case-hero" style={{ background: `linear-gradient(180deg, ${cs.color} 0%, var(--bg) 100%)` }}>
        <div className="case-hero-inner">
          <a href="case-studies.html" className="case-back">← All case studies</a>
          <div className="case-hero-meta">
            <span className="case-tag">{cs.tag}</span>
            <span className="case-year">{cs.year}</span>
          </div>
          <h1 className="case-title">{cs.brand}</h1>
          <p className="case-summary">{cs.summary}</p>
          <div className="case-services">
            {cs.services.map(s => <span key={s} className="case-service">{s}</span>)}
          </div>
        </div>
        <figure className="case-hero-img">
          <img src={cs.imgs[0]} alt={cs.brand} loading="eager"/>
        </figure>
      </section>

      <section className="section case-impact-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Outcome</div>
          <h2 className="section-title">The numbers.</h2>
        </div>
        <div className="case-impact">
          {cs.impact.map(([n, l], k) => (
            <div key={k} className="case-impact-cell">
              <div className="case-impact-n">{n}</div>
              <div className="case-impact-l">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section case-challenge">
        <div className="case-prose-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>The challenge</div>
            <h2 className="section-title">Where they started.</h2>
          </div>
          <div className="case-prose">
            <p>{cs.brand} came to Royal Eagle in {cs.year} facing a familiar inflection point — a digital presence that no longer reflected the quality of the business behind it. Site performance was lagging, the content management workflow was painful, and the marketing surfaces weren't generating the kind of pipeline the leadership team needed to support growth plans.</p>
            <p>The brief, on paper, was a website rebuild. In practice, the engagement quickly expanded into a broader strategic conversation about brand expression, conversion architecture, and which channels were actually worth investing in for this specific stage of the business.</p>
          </div>
        </div>
      </section>

      <section className="section case-process">
        <div className="case-prose-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>What we did</div>
            <h2 className="section-title">The approach.</h2>
          </div>
          <div className="case-prose">
            <p>We assembled a five-person team — creative direction, brand design, lead engineering, performance marketing, and project management — and ran the engagement across our standard five-phase methodology. The first two weeks were diagnostic: deep interviews with the leadership team, a structured competitive audit, and a quantitative review of analytics, ad accounts, and existing site performance.</p>
            <p>From there we moved into a defined production phase. Design in Figma, engineering on {cs.services[0]}, weekly demos every Friday with stakeholders, and a soft launch to a staging URL before the public flip. The full engagement closed in 11 weeks from kickoff to launch.</p>
          </div>
        </div>
        <div className="case-gallery">
          {cs.imgs.slice(1).map((img, k) => (
            <figure key={k} className="case-gallery-fig">
              <img src={img} alt={`${cs.brand} ${k+2}`} loading="lazy"/>
            </figure>
          ))}
        </div>
      </section>

      <section className="section case-result">
        <div className="case-prose-grid">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>The result</div>
            <h2 className="section-title">Where they are now.</h2>
          </div>
          <div className="case-prose">
            <p>Six months after launch, the metrics tell the story. {cs.impact[0][0]} improvement on the headline KPI, {cs.impact[1][0]} on the secondary, and a digital surface that's now the single largest contributor to new business pipeline. {cs.brand} continues with Royal Eagle today on a monthly retainer covering ongoing content, paid media management, and quarterly experimentation programs.</p>
          </div>
        </div>
      </section>

      <CTAStrip
        variant="warm"
        heading={`Want results like ${cs.brand}?`}
        sub="Every engagement starts with a 30-minute discovery call. We'll listen, ask real questions, and tell you straight whether we can help."
        primary="Book a discovery call"
        secondary="See more case studies"
        secondaryHref="case-studies.html"
      />

      <section className="section case-next">
        <a href={`case.html?s=${next.slug}`} className="case-next-card" style={{ background: `linear-gradient(135deg, ${next.color} 0%, ${next.color}aa 100%)` }}>
          <div className="case-next-meta">Next case study</div>
          <div className="case-next-brand">{next.brand}</div>
          <div className="case-next-tag">{next.tag} · {next.year}</div>
        </a>
      </section>

      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseDetail/>);
