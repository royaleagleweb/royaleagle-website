// PORTFOLIO — same real work as the work page. No Unsplash masonry.

function PortfolioPage() {
  return (
    <PageShell active="portfolio">
      <PageHero
        kicker="Portfolio"
        title='Selected work.<br/><span class="gradient-text">Live links.</span>'
        sub="The same real client sites as the work page. Visit them. We don't use stock photos as a portfolio."
      />
      <section className="section">
        <div className="work-card-grid">
          {CASE_STUDIES.map(c => <WorkCard key={c.slug} cs={c}/>)}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PortfolioPage/>);
