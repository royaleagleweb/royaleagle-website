function WorkPage() {
  return (
    <PageShell active="work">
      <section className="re-work-page">
        <div className="re-select-head">
          <div className="re-select-k">Selected work</div>
          <a href="contact.html" className="re-select-all">Book a conversation →</a>
        </div>
        <p className="re-work-lede" style={{ marginLeft: "auto", marginRight: "auto" }}>A Fort Lauderdale studio, since 2014. <a href="services">Services</a> · <a href="wordpress">WordPress</a> · <a href="contractor-websites">Contractor websites</a> · <a href="yacht-websites">Yacht websites</a></p>
        <div className="re-work-grid">
          {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
        </div>
      </section>
      <CTA title="Want a site like these?" sub="Twenty minutes with the studio is enough to know if we're a fit."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
