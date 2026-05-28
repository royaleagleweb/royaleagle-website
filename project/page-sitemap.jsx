// SITEMAP page

function SitemapPage() {
  return (
    <PageShell active="sitemap">
      <PageHero
        kicker="Sitemap"
        title='Every page,<br/><span class="gradient-text">one screen.</span>'
        sub="A complete index of every page on royaleagleweb.com — for both humans and search engines."
      />
      <section className="section">
        <div className="sitemap-grid">
          {SITE_MAP.map(col => (
            <div key={col.title} className="sitemap-col">
              <h3 className="sitemap-col-t">{col.title}</h3>
              <div className="sitemap-links">
                {col.links.map(l => (
                  <a key={l.t} href={l.h} className="sitemap-link">
                    <span>{l.t}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="sitemap-col">
            <h3 className="sitemap-col-t">Case studies</h3>
            <div className="sitemap-links">
              {CASE_STUDIES.map(c => (
                <a key={c.slug} href={`case.html?s=${c.slug}`} className="sitemap-link">
                  <span>{c.brand}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </div>
          <div className="sitemap-col">
            <h3 className="sitemap-col-t">Blog</h3>
            <div className="sitemap-links">
              {BLOG_POSTS.slice(0, 12).map(p => (
                <a key={p.slug} href={`blog-post.html?s=${p.slug}`} className="sitemap-link">
                  <span>{p.title}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
              <a href="blog.html" className="sitemap-link sitemap-more">
                <span>+ {BLOG_POSTS.length - 12} more articles →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SitemapPage/>);
