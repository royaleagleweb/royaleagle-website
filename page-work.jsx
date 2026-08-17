function WorkPage() {
  return (
    <PageShell active="work">
      <section className="re-work-page">
        <h1>Real sites. Live links.</h1>
        <p className="re-work-lede">Four we shipped. Click through.</p>
        <div className="re-work-grid">
          {CASE_STUDIES.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
        </div>
      </section>
      <CTA title="Want a site like these?" sub="Twenty minutes on the phone with Roy is enough to know if we're a fit."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
