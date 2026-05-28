// CASE STUDIES INDEX page

function CaseIndex() {
  const tags = ["All", ...new Set(CASE_STUDIES.map(c => c.tag))];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.tag === active);
  return (
    <PageShell active="case-studies">
      <PageHero
        kicker="Case studies"
        title='Documented outcomes,<br/><span class="gradient-text">not promises.</span>'
        sub="Ten in-depth case studies covering web design, e-commerce, B2B SaaS, healthcare, hospitality, and more. Each one with full metrics."
      />
      <section className="section">
        <div className="blog-filters">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`bf-chip ${active === t ? 'is-active' : ''}`}>{t}</button>
          ))}
        </div>
        <div className="case-index-grid">
          {shown.map(c => (
            <a key={c.slug} href={`case.html?s=${c.slug}`} className="ci-card" style={{ "--cs-color": c.color }}>
              <figure className="ci-img"><img src={c.imgs[0]} alt={c.brand} loading="lazy"/></figure>
              <div className="ci-body">
                <div className="ci-meta">
                  <span className="ci-tag">{c.tag}</span>
                  <span>{c.year}</span>
                </div>
                <h3 className="ci-brand">{c.brand}</h3>
                <p className="ci-summary">{c.summary}</p>
                <div className="ci-impact">
                  {c.impact.slice(0, 2).map(([n, l], k) => (
                    <div key={k} className="ci-impact-cell">
                      <div className="ci-n">{n}</div>
                      <div className="ci-l">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseIndex/>);
