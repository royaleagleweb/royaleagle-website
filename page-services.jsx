// SERVICES HUB page — categorized cards into all service detail pages

const KEYWORD_PAGES = [
  { href: "wordpress.html", t: "WordPress", d: "Build and maintain WordPress and Elementor sites. Fort Lauderdale studio, Lauderhill address." },
  { href: "contractor-websites.html", t: "Contractor websites", d: "Construction, plumbing, and windows sites — a South Florida studio, not a national factory." },
  { href: "yacht-websites.html", t: "Yacht websites", d: "We built the live Doctor Yachts site. A studio, not a yacht-advertising firm." },
];

function ServicesHub() {
  const cats = [...new Set(SERVICES.map(s => s.cat))];
  React.useEffect(() => {
    applyPageSeo({
      title: "Web Design & Digital Marketing Services in Fort Lauderdale",
      description: "WordPress, custom sites, contractor and yacht websites, hosting, and marketing from a Fort Lauderdale studio. Rated 5.0 on Google. 754-233-4037.",
      canonical: "services.html",
      keywords: "web design services fort lauderdale, wordpress development fort lauderdale, contractor website design florida",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Services" }],
    });
  }, []);
  return (
    <PageShell active="services">
      <PageHero
        kicker="Services"
        title='Web, WordPress,<br/><span class="gradient-text">marketing, upkeep.</span>'
        sub="The work the studio actually does. Start with WordPress, contractor websites, or yacht websites — then the rest of the list."
      />
      <section className="section" id="keyword-pages">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Start here</div>
          <h2 className="section-title">Three pages worth reading.</h2>
        </div>
        <div className="svc-hub-grid">
          {KEYWORD_PAGES.map(p => (
            <a key={p.href} href={p.href} className="svc-hub-card">
              <div className="svc-hub-body">
                <h3 className="svc-hub-t">{p.t}</h3>
                <p className="svc-hub-d">{p.d}</p>
                <div className="svc-hub-foot">
                  <span className="svc-hub-price">Read the page →</span>
                  <span className="svc-hub-arr">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
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
                  {s.img ? <figure className="svc-hub-img"><img src={s.img} alt="A live site from the studio" loading="lazy"/></figure> : null}
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
