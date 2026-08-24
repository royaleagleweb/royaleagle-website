function WorkPage() {
  return (
    <PageShell active="work">
      <section className="re-work-page">
        <div className="re-select-head">
          <div className="re-select-k">Selected work</div>
          <a href="contact.html" className="re-select-all">Book a conversation →</a>
        </div>
        <div className="re-work-grid">
          {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
        </div>
      </section>
      <CTA title="Want a site like these?" sub="Twenty minutes with the studio is enough to know if we're a fit."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
