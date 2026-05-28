// OUR STORY page — timeline

function Timeline() {
  const events = [
    { y: "2014", t: "Founded in a Fort Lauderdale co-working space", d: "Marcus Reyes and two co-founders leave Miami brand studios to start a different kind of agency — one accountable to outcomes, not deliverables." },
    { y: "2015", t: "First seven-figure client", d: "A South Florida law firm engagement that ran for three years and seeded what would become our legal vertical practice." },
    { y: "2017", t: "WordPress agency partnership with WP-Engine", d: "Officially certified as a WP-Engine partner; opens the door to enterprise WordPress work." },
    { y: "2019", t: "Office move to Inverrary Blvd", d: "Outgrow the co-working space, move to a dedicated 4,200 sqft office that becomes our home for the next seven years." },
    { y: "2020", t: "Pivot to remote during the pandemic", d: "Like everyone, we adapt overnight. Unlike many, we never fully return to office. Hybrid 2-days-in becomes permanent." },
    { y: "2021", t: "Google Premier Partner status", d: "Hit the top tier of Google Ads partnership, which unlocks direct account-management access for our clients." },
    { y: "2022", t: "Long-term retainer milestone", d: "A consumer brand we helped launch in 2018 crosses a major growth milestone; Royal Eagle has been their digital partner the entire run." },
    { y: "2023", t: "First AI engagements", d: "Build internal Claude-powered tools, then ship the first client-facing AI features. The new practice line is born." },
    { y: "2024", t: "Diamond HubSpot Solutions Partner", d: "Top-tier HubSpot certification across implementation, training, and ongoing optimization." },
    { y: "2025", t: "38 senior practitioners on staff", d: "Cross 38 team members — every one a senior practitioner. No subcontracting, no offshore." },
    { y: "2026", t: "AI Consultation becomes a standalone practice", d: "What was a side line in 2023 is now a dedicated team of seven, with a published methodology and a growing roster of mid-market clients." },
  ];
  return (
    <section className="section timeline">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>Twelve years, one company</div>
        <h2 className="section-title">From <em>three</em> to <em>thirty-eight.</em></h2>
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
        <figure className="fl-photo">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85" alt="Roy, Founder of Royal Eagle"/>
        </figure>
        <div className="fl-body">
          <div className="kicker"><span className="kicker-dot"></span>A note from the founder</div>
          <h2 className="section-title">Why I built<br/><span className="gradient-text">Royal Eagle.</span></h2>
          <div className="about-prose">
            <p>I started Royal Eagle out of a one-bedroom in Plantation in 2014. The first three clients found me through a Craigslist ad I posted on a Sunday night. They're all still with us.</p>
            <p>The promise then is still the promise now: I answer the phone. I sit on the discovery calls. I'm in the design reviews. I don't disappear after the kickoff and reappear on launch day with a junior in tow.</p>
            <p>We turn away more work than we take. We tell clients when they don't need what they're asking for — even when it costs us the engagement. And every site we ship gets the same treatment we'd give our own, because in twelve years we've never figured out how to do it the other way.</p>
            <p className="fl-sign">— Roy</p>
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
        sub="Twelve years of building websites and marketing engines for ambitious businesses across South Florida and beyond."
      />
      <FoundersLetter/>
      <Timeline/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<OurStoryPage/>);
