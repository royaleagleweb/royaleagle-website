function WorkPage() {
  return (
    <PageShell active="work">
      <section className="re-work-page">
        <div className="re-work-page-head">
          <div className="re-work-page-k">Selected work</div>
          <a href="contact.html" className="re-select-all">Book a conversation →</a>
        </div>
        <h1>Six live client sites.</h1>
        <p className="re-work-lede">Real brands. Live links. Visit them.</p>
        <div className="re-work-grid">
          {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
        </div>
      </section>
      <CTA title="Want a site like these?" sub="Twenty minutes with the studio is enough to know if we're a fit."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
