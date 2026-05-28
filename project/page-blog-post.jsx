// BLOG POST — driven by ?s=<slug>

function BlogPost() {
  const slug = getSlug();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];
  const i = BLOG_POSTS.findIndex(p => p.slug === post.slug);
  const related = BLOG_POSTS.filter(p => p.cat === post.cat && p.slug !== post.slug).slice(0, 3);
  const next = BLOG_POSTS[(i + 1) % BLOG_POSTS.length];

  return (
    <PageShell active="blog">
      <article className="bp">
        <header className="bp-header">
          <div className="bp-header-inner">
            <a href="blog.html" className="case-back">← All articles</a>
            <div className="bp-meta">
              <span className="bp-cat">{post.cat}</span>
              <span className="bp-dot">·</span>
              <span>{post.date}</span>
              <span className="bp-dot">·</span>
              <span>{post.read}</span>
            </div>
            <h1 className="bp-title">{post.title}</h1>
            <p className="bp-excerpt">{post.excerpt}</p>
            <div className="bp-author">
              <div className="bp-author-avatar">{post.author.split(' ').map(w => w[0]).join('')}</div>
              <div>
                <div className="bp-author-n">{post.author}</div>
                <div className="bp-author-r">Royal Eagle</div>
              </div>
            </div>
          </div>
          <figure className="bp-hero-img">
            <img src={post.img} alt={post.title} loading="eager"/>
          </figure>
        </header>

        <div className="bp-body">
          <div className="bp-toc">
            <div className="bp-toc-h">On this page</div>
            <a href="#section-1">The problem</a>
            <a href="#section-2">A framework</a>
            <a href="#section-3">Worked example</a>
            <a href="#section-4">When it falls apart</a>
            <a href="#section-5">What we'd do differently</a>
            <a href="#section-6">Further reading</a>
          </div>
          <div className="bp-prose">
            <p className="bp-lead">{post.excerpt}</p>

            <h2 id="section-1">The problem</h2>
            <p>It's worth being honest about why this question gets asked so often. Most of the businesses that come to us with a {post.cat.toLowerCase()} problem aren't actually looking for a {post.cat.toLowerCase()} solution — they're looking for a way to grow without breaking what already works.</p>
            <p>The trouble is, you can't have both, at least not all of the time. {post.cat === "AI" ? "AI in particular sits at an awkward intersection of operational risk and revenue opportunity — and the loudest people on both sides have an interest in distorting the picture." : "There's a tendency in our industry to oversimplify these tradeoffs, and a tendency in client conversations to want a simple framework that holds in every situation."}</p>

            <blockquote>
              The fastest way to do the wrong thing is to do it on autopilot. The fastest way to do the right thing is to understand the cost of being wrong.
            </blockquote>

            <h2 id="section-2">A framework</h2>
            <p>We've refined a four-question framework across hundreds of engagements. It's not the only way to think about this, but it's the one that has held up across the widest range of businesses we've worked with.</p>
            <ol>
              <li><strong>What is the cost of doing nothing for six months?</strong> If it's small, you have time to deliberate. If it's large, you're already losing money to inaction.</li>
              <li><strong>Where is the bottleneck — capability or capacity?</strong> Capability problems need expertise. Capacity problems need leverage. They look identical from a distance and require very different responses.</li>
              <li><strong>What's the cost of being wrong?</strong> Some bets are reversible in a quarter. Others lock you in for years. Treat them differently.</li>
              <li><strong>Who owns it after we leave?</strong> If the answer is "nobody specific," the engagement is going to fail no matter how good the work is.</li>
            </ol>

            <h2 id="section-3">A worked example</h2>
            <p>Last spring we ran this framework with a healthcare client weighing whether to invest in a custom appointment-booking platform or stay on their off-the-shelf system. The off-the-shelf platform was costing them about a meaningful monthly licensing bill and was the subject of constant complaint from their front-desk team, but a custom build was looking like a meaningful commitment.</p>            <p>Running the four questions:</p>
            <ul>
              <li>Cost of doing nothing — measurable: front-desk staff were spending an average of 14 minutes per appointment on system workarounds, which translated to a meaningful amount in lost capacity each month.</li>
              <li>Bottleneck — capability, not capacity. The team had room to do the work if the tools didn't fight them.</li>
              <li>Cost of being wrong — moderate. A custom platform could be torn out in 18 months if it didn't deliver, painful but recoverable.</li>
              <li>Owner — the COO, who had genuine investment in the outcome.</li>
            </ul>
            <p>The math made the decision: the custom build paid back in under 24 months and the COO had the political authority to drive adoption. We launched in 14 weeks and the system is now running 100% of appointment traffic.</p>

            <h2 id="section-4">When it falls apart</h2>
            <p>The framework works because it forces specificity. It falls apart in three situations: when the cost of doing nothing is genuinely zero (which is rare but possible), when the owner question can't be answered (which is fatal), and when the "right" answer is politically impossible (which is more common than agencies like to admit).</p>
            <p>That last one is worth dwelling on. About 20% of the engagements we decline are situations where we can see the right answer clearly but we can also see that the org isn't set up to execute it. Doing the wrong thing well is still doing the wrong thing.</p>

            <h2 id="section-5">What we'd do differently</h2>
            <p>If we were starting from scratch today, we'd put more weight on the owner question and less on the cost-of-being-wrong question. We've watched brilliant decisions die in implementation because nobody owned them, and we've watched mediocre decisions deliver real value because someone competent made them work.</p>
            <p>The corollary: if you're a leader reading this and considering whether to engage an agency on {post.cat.toLowerCase()}, the most important pre-work isn't a brief — it's identifying the named individual who is going to own the outcome after we leave.</p>

            <h2 id="section-6">Further reading</h2>
            <p>If this resonated, the related posts below go deeper on specific tactics. And if you'd like to talk through your specific situation, our consultations are free and never turn into a sales pitch.</p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bp-related-section">
          <div className="section-head">
            <div className="kicker"><span className="kicker-dot"></span>Related reading</div>
            <h2 className="section-title">More on {post.cat}.</h2>
          </div>
          <div className="bp-related">
            {related.map(r => (
              <a key={r.slug} href={`blog-post.html?s=${r.slug}`} className="bp-rel-card">
                <div className="bp-rel-img"><img src={r.img} alt={r.title} loading="lazy"/></div>
                <div className="bp-rel-body">
                  <div className="bp-rel-meta">{r.cat} · {r.read}</div>
                  <div className="bp-rel-t">{r.title}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <CTAStrip
        variant="quiet"
        heading={`Working through something like this?`}
        sub="We're happy to be a sounding board even if there's no engagement at the end of it. Send us a note."
        primary="Start a conversation"
        secondary="More articles"
        secondaryHref="blog.html"
      />

      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogPost/>);
