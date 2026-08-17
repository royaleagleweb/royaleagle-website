// SERVICES HUB page — categorized cards into all service detail pages

function ServicesHub() {
  const cats = [...new Set(SERVICES.map(s => s.cat))];
  return (
    <PageShell active="services">
      <PageHero
        kicker="Services"
        title='Web, WordPress,<br/><span class="gradient-text">marketing, upkeep.</span>'
        sub="The work Roy actually does. One person accountable. Specialists join when a project needs extra hands."
      />
      {cats.map(cat => {
        const items = SERVICES.filter(s => s.cat === cat);
        return (
          <section key={cat} className="section">
            <div className="section-head section-head-row">
              <div>
                <div className="kicker"><span className="kicker-dot"></span>{cat}</div>
                <h2 className="section-title">{cat}.</h2>
              </div>
              <p className="meth-aside">{items.length} services in this category. </p>
            </div>
            <div className="svc-hub-grid">
              {items.map(s => (
                <a key={s.slug} href={`service.html?s=${s.slug}`} className="svc-hub-card">
                  <figure className="svc-hub-img"><img src={s.img} alt={s.title} loading="lazy"/></figure>
                  <div className="svc-hub-body">
                    <h3 className="svc-hub-t">{s.title}</h3>
                    <p className="svc-hub-d">{s.hero}</p>
                    <div className="svc-hub-foot">
                      <span className="svc-hub-price">Talk to us →</span>
                      <span className="svc-hub-arr">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })}
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ServicesHub/>);
