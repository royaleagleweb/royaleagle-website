// PORTFOLIO page — visual grid

function PortfolioPage() {
  return (
    <PageShell active="portfolio">
      <PageHero
        kicker="Portfolio"
        title='Selected work,<br/><span class="gradient-text">2022 – 2026.</span>'
        sub="A visual showcase of recent design, web, brand, and campaign work. Click any project for the full case study."
      />
      <section className="section">
        <div className="pf-masonry">
          {CASE_STUDIES.flatMap(c => c.imgs.map((img, k) => ({ img, c, k }))).map(({ img, c, k }, i) => (
            <a key={`${c.slug}-${k}`} href={`case.html?s=${c.slug}`} className="pf-tile" style={{ "--cs-color": c.color, gridRowEnd: `span ${[2, 3, 2, 3, 2, 3, 2, 2][i % 8]}` }}>
              <img src={img} alt={c.brand} loading="lazy"/>
              <div className="pf-tile-overlay">
                <div className="pf-tile-cat">{c.tag}</div>
                <div className="pf-tile-brand">{c.brand}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PortfolioPage/>);
