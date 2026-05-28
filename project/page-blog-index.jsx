// BLOG INDEX page

function BlogIndex() {
  const cats = ["All", ...new Set(BLOG_POSTS.map(p => p.cat))];
  const [active, setActive] = React.useState("All");
  const params = new URLSearchParams(window.location.search);
  React.useEffect(() => {
    const c = params.get('cat');
    if (c && cats.includes(c)) setActive(c);
  }, []);
  const shown = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === active);
  const featured = shown[0];
  const rest = shown.slice(1);
  return (
    <PageShell active="blog">
      <PageHero
        kicker="The Royal Eagle blog"
        title='Writing on web, marketing,<br/>and <span class="gradient-text">AI in 2026.</span>'
        sub="20+ articles from our team on the questions that come up most often in client engagements — from headless commerce to accessibility to AI strategy."
      />
      <section className="section">
        <div className="blog-filters">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`bf-chip ${active === c ? 'is-active' : ''}`}>{c}</button>
          ))}
        </div>
        {featured && (
          <a href={`blog-post.html?s=${featured.slug}`} className="blog-featured">
            <figure className="bf-img"><img src={featured.img} alt={featured.title} loading="lazy"/></figure>
            <div className="bf-body">
              <div className="bf-meta">
                <span className="bf-cat">{featured.cat}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <h2 className="bf-title">{featured.title}</h2>
              <p className="bf-excerpt">{featured.excerpt}</p>
              <div className="bf-author">
                <div className="bp-author-avatar">{featured.author.split(' ').map(w => w[0]).join('')}</div>
                <span>{featured.author}</span>
              </div>
            </div>
          </a>
        )}
        <div className="blog-grid">
          {rest.map(p => (
            <a key={p.slug} href={`blog-post.html?s=${p.slug}`} className="bp-card">
              <figure className="bp-card-img"><img src={p.img} alt={p.title} loading="lazy"/></figure>
              <div className="bp-card-body">
                <div className="bf-meta">
                  <span className="bf-cat">{p.cat}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="bp-card-t">{p.title}</h3>
                <p className="bp-card-e">{p.excerpt}</p>
                <div className="bp-card-foot">
                  <span>{p.author}</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogIndex/>);
