// ABOUT page — real photos, big-company feel

function AboutHero() {
  return (
    <section className="section about-hero-photos">
      <div className="ahp-grid">
        <figure className="ahp ahp-1">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80" alt="Royal Eagle team meeting" loading="lazy"/>
        </figure>
        <figure className="ahp ahp-2">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80" alt="Strategy session" loading="lazy"/>
        </figure>
        <figure className="ahp ahp-3">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" alt="Client review" loading="lazy"/>
        </figure>
        <figure className="ahp ahp-4">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" alt="Fort Lauderdale office" loading="lazy"/>
        </figure>
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <section className="section about-story">
      <div className="about-grid">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Our story</div>
          <h2 className="section-title">A decade of<br/><span className="gradient-text">building things that work.</span></h2>
        </div>
        <div className="about-prose">
          <p>Royal Eagle started in 2014 in a Fort Lauderdale co-working space with a simple frustration: small businesses kept getting handed pretty websites that didn't actually do anything. Beautiful screenshots, ugly conversion rates.</p>
          <p>So we built a different kind of agency — one that treats design, development, and marketing as one continuous discipline. Every site we ship is measured. Every campaign we run is accountable. Every client gets a real partner, not a project number.</p>
          <p>Twelve years later we're a team of 38 across web, paid media, content, branding, and software — still based in Fort Lauderdale, still answering our own phones, and still stubbornly obsessed with the metric that matters: did it work?</p>
        </div>
      </div>
    </section>
  );
}

function FactStrip() {
  const facts = [
    { n: "2014", l: "Founded" },
    { n: "6", l: "Senior team" },
    { n: "120+", l: "Projects delivered" },
    { n: "5.0★", l: "Google rating" },
    { n: "12", l: "Industries" },
    { n: "98%", l: "Client retention" },
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
    { t: "Plain-English partnership", d: "No jargon walls, no agency-speak. You'll always know what we're doing, why, and what it costs — in language your CFO understands." },
    { t: "Build it to last", d: "We pick boring, durable tools over shiny new ones. Your stack should outlive the trend cycle and outlast the agency relationship." },
    { t: "Local, global craft", d: "Same time zone, real relationships, on-site when it matters — and a portfolio that holds up against shops twice our size." },
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

function Leadership() {
  const team = [
    { n: "Marcus Reyes", r: "Founder & CEO", bio: "Founded Royal Eagle in 2014 after a decade at Miami brand studios. Speaks at WordCamp Miami annually.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" },
    { n: "Priya Sharma", r: "Head of Engineering", bio: "Ex-Automattic engineering lead. Maintains three open-source WordPress plugins with 200K+ active installs.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
    { n: "Diego Alvarez", r: "Creative Director", bio: "Art directed for Wieden+Kennedy and BBDO before relocating from Buenos Aires. Pratt grad.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
    { n: "Elena Vargas", r: "Director, Performance Marketing", bio: "Google Premier Partner certified across all surfaces. Previously ran paid for two unicorn DTC brands.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80" },
    { n: "Jordan Thompson", r: "Lead WordPress Engineer", bio: "Twelve-year WordPress career. Core contributor and WP Engine certified developer.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" },
    { n: "Sam Kowalski", r: "Director of Client Services", bio: "Eight years in agency account management at Razorfish and AKQA. Florida native.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
  ];
  return (
    <section className="section">
      <div className="meth-head">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Leadership</div>
          <h2 className="section-title">A senior team.<br/>On every project, every day.</h2>
        </div>
        <p className="meth-aside">No junior hand-offs, no offshore subcontracting. The people you meet on the pitch are the people doing the work.</p>
      </div>
      <div className="team-photo-grid leadership-grid">
        {team.map((t, i) => (
          <div key={i} className="team-pc team-pc-bio">
            <div className="team-photo">
              <img src={t.img} alt={t.n} loading="lazy"/>
            </div>
            <div className="team-pc-info">
              <div className="team-pc-n">{t.n}</div>
              <div className="team-pc-r">{t.r}</div>
              <p className="team-pc-bio-txt">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Culture() {
  return (
    <section className="section culture-section">
      <div className="culture-grid">
        <div className="culture-text">
          <div className="kicker"><span className="kicker-dot"></span>Culture</div>
          <h2 className="section-title">Built on respect for<br/>craft, and for clients.</h2>
          <p className="culture-lede">We work hard, we ship fast, and we go home on time. Hybrid by default — Tuesdays and Thursdays in the Fort Lauderdale office, the rest of the week wherever you do your best work.</p>
          <ul className="culture-list">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Annual learning stipend, every role</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Profit sharing after year one</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Quarterly off-sites somewhere in the state</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> A real 401(k) match, not a token one</li>
          </ul>
          <a href="contact.html" className="link-arrow">Open roles → see careers</a>
        </div>
        <figure className="culture-photo">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="Royal Eagle team" loading="lazy"/>
        </figure>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell active="about">
      <PageHero
        kicker="About us"
        title='From concept<br/>to <span class="gradient-text">conversion.</span>'
        sub="A Fort Lauderdale studio of 38, building websites and marketing engines for South Florida businesses since 2014."
      />
      <AboutHero/>
      <FactStrip/>
      <AboutStory/>
      <Values/>
      <Leadership/>
      <Culture/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage/>);
