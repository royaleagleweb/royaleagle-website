// OUR STORY page — honest timeline, Roy only

function Timeline() {
  const events = [
    { y: "2014", t: "Roy founds Royal Eagle", d: "A Fort Lauderdale–area web and marketing shop. The promise is the same now as then: a person answers, and the work is accountable." },
    { y: "Since then", t: "Websites, WordPress, marketing", d: "Custom sites, WordPress builds, hosting and email when clients need it, and marketing that a small business can actually run." },
    { y: "Today", t: "Same shop, same phone", d: "4440 Inverrary Blvd, Lauderhill. 754-233-4037. Roy still answers. AI gets used when it helps — not as a costume." },
  ];
  return (
    <section className="section timeline">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>One founder, one shop</div>
        <h2 className="section-title">From <em>2014</em> to now.</h2>
      </div>
      <div className="timeline-list">
        {events.map((e, i) => (
          <div key={i} className="tl-row">
            <div className="tl-y">{e.y}</div>
            <div className="tl-dot"></div>
            <div className="tl-body">
              <h3 className="tl-t">{e.t}</h3>
              <p className="tl-d">{e.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FoundersLetter() {
  return (
    <section className="section founders-letter">
      <div className="fl-grid">
        <div className="fl-photo fl-photo-mark">
          <EagleCrest size={180} glow={false}/>
        </div>
        <div className="fl-body">
          <div className="kicker"><span className="kicker-dot"></span>A note from the founder</div>
          <h2 className="section-title">Why I built<br/><span className="gradient-text">Royal Eagle.</span></h2>
          <div className="about-prose">
            <p>I started Royal Eagle in 2014. The shop is still mine. The phone is still mine.</p>
            <p>The promise then is still the promise now: I answer the phone. I sit on the discovery calls. I'm in the design reviews. I don't disappear after kickoff.</p>
            <p>If we're not the right fit, I'll say so. If a project needs extra hands, I'll tell you who and why. That's the whole pitch.</p>
            <p className="fl-sign">— Roy Bachar</p>
            <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="google-badge fl-google">
              <div className="gb-icon">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </div>
              <div>
                <div className="gb-rating">★★★★★ 5.0</div>
                <div className="gb-label">View our Google Business profile →</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStoryPage() {
  return (
    <PageShell active="our-story">
      <PageHero
        kicker="Our story"
        title='Founded in Fort Lauderdale,<br/><span class="gradient-text">in 2014.</span>'
        sub="A Fort Lauderdale studio, since 2014. Websites and marketing for South Florida businesses — still at 4440 Inverrary Blvd in Lauderhill."
      />
      <FoundersLetter/>
      <Timeline/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<OurStoryPage/>);
