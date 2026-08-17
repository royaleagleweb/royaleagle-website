// CASE STUDIES INDEX — real live sites, no invented metrics

function CaseIndex() {
  const tags = ["All", ...new Set(CASE_STUDIES.map(c => c.tag))];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.tag === active);
  return (
    <PageShell active="case-studies">
      <PageHero
        kicker="Work"
        title='Live client sites,<br/><span class="gradient-text">not invented metrics.</span>'
        sub="These are sites Roy built that are on the public web today. Click through and look at the real thing."
      />
      <section className="section">
        <div className="blog-filters">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`bf-chip ${active === t ? 'is-active' : ''}`}>{t}</button>
          ))}
        </div>
        <div className="re-work-grid">
          {shown.map((c, i) => <WorkCard key={c.slug} cs={c} index={i}/>)}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseIndex/>);
