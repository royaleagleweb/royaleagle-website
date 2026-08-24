// ABOUT page — company first, founder once. Real Google reviews only.

function AboutStory() {
  return (
    <section className="re-studio">
      <div className="re-studio-grid">
        <div>
          <p className="re-studio-kicker">The studio</p>
          <h2 className="re-studio-title">A Fort Lauderdale practice, since 2014.</h2>
          <div className="re-studio-copy">
            <p>Royal Eagle is a senior-level studio for thoughtful WordPress and custom websites. We work with South Florida businesses that want a site that holds up — and a studio that stays in the work after launch.</p>
            <p>The practice sits at 4440 Inverrary Blvd in Lauderhill, about eight minutes from the Sawgrass. Websites, WordPress, custom builds, marketing, and a little AI when it actually helps.</p>
            <p>When a project needs extra hands, we bring in senior specialists — without inventing a leadership grid or a headcount. That is the whole company story.</p>
          </div>
          <div className="re-studio-founder">
            <div className="founder-mark"><EagleMark/></div>
            <div className="re-studio-founder-meta">
              Founded by Roy Bachar<br/>
              Fort Lauderdale, Florida
            </div>
          </div>
          <div className="re-studio-ctas">
            <a href="contact.html" className="btn btn-gold">Book a conversation</a>
            <a href="tel:+17542334037" className="btn btn-ghost">754-233-4037</a>
          </div>
        </div>
        <div className="re-reviews">
          {GOOGLE_REVIEWS.map((q, i) => (
            <figure key={i} className="testi-card">
              <div className="trust-stars">★★★★★</div>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="re-review-mark"><span className="re-review-check" aria-hidden="true">✓</span> Verified Google Review</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactStrip() {
  const facts = [
    { n: "2014", l: "Founded" },
    { n: "Studio", l: "Fort Lauderdale" },
    { n: "Lauderhill", l: "4440 Inverrary Blvd" },
    { n: "5.0★", l: "Google rating" },
  ];
  return (
    <section className="section fact-strip">
      <div className="fs-grid">
        {facts.map((f, i) => (
          <div key={i} className="fs-cell">
            <div className="fs-n">{f.n}</div>
            <div className="fs-l">{f.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const vs = [
    { t: "Outcomes over outputs", d: "A handsome site that doesn't convert is a vanity project. We measure ourselves on what your business actually does after launch." },
    { t: "Plain-English partnership", d: "No jargon walls, no agency-speak. You'll always know what we're doing, why, and what it costs." },
    { t: "Build it to last", d: "We pick durable tools over shiny new ones. Your stack should outlive the trend cycle." },
    { t: "Local, on purpose", d: "Same time zone, a real address, and a phone number a person answers." },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>What we believe</div>
        <h2 className="section-title">Four principles<br/>we won't compromise on.</h2>
      </div>
      <div className="values-grid">
        {vs.map((v, i) => (
          <div key={i} className="value">
            <div className="value-num">{String(i+1).padStart(2,'0')}</div>
            <h3 className="value-t">{v.t}</h3>
            <p className="value-d">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell active="about">
      <PageHero
        kicker="The studio"
        title='A Fort Lauderdale practice,<br/><span class="gradient-text">since 2014.</span>'
        sub="Royal Eagle. WordPress, custom sites, and marketing for South Florida businesses. 4440 Inverrary Blvd, Lauderhill."
      />
      <FactStrip/>
      <AboutStory/>
      <Values/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage/>);
