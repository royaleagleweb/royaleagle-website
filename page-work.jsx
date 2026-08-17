// WORK page — real live client sites only. No invented metrics.

function WorkIntro() {
  return (
    <section className="section work-intro">
      <div className="wi-grid">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Selected work</div>
          <h2 className="section-title">Sites Roy actually<br/><span className="gradient-text">built and shipped.</span></h2>
        </div>
        <div className="wi-stats">
          <div><div className="wi-n">{CASE_STUDIES.length}</div><div className="wi-l">Live sites featured here</div></div>
          <div><div className="wi-n">5.0★</div><div className="wi-l">Google rating</div></div>
          <div><div className="wi-n">2014</div><div className="wi-l">Shop founded</div></div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="section pf-section">
      <div className="work-card-grid">
        {CASE_STUDIES.map(cs => <WorkCard key={cs.slug} cs={cs}/>)}
      </div>
    </section>
  );
}

function WorkPage() {
  return (
    <PageShell active="work">
      <PageHero
        kicker="Our work"
        title='Real client sites.<br/><span class="gradient-text">Live links.</span>'
        sub="A short list of sites Roy built that are live today. No invented case studies, no random traffic numbers, no stock photos posing as a portfolio."
      />
      <WorkIntro/>
      <Showcase/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
