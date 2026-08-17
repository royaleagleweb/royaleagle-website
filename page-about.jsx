// ABOUT page — Roy, small shop, no invented org chart

function AboutStory() {
  return (
    <section className="section about-story">
      <div className="about-grid">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Our story</div>
          <h2 className="section-title">A Fort Lauderdale shop<br/><span className="gradient-text">that actually picks up.</span></h2>
        </div>
        <div className="about-prose">
          <p>Royal Eagle started in 2014. Roy Bachar still runs it from 4440 Inverrary Blvd in Lauderhill — Fort Lauderdale area, about eight minutes from the Sawgrass.</p>
          <p>The work is websites, WordPress, custom builds, marketing, and a little AI when it actually helps. Roy answers the phone. When a project needs extra hands, he works with senior specialists — without inventing a leadership grid or a headcount.</p>
          <p>That is the whole company story. Same shop, same number, same person on the other end.</p>
        </div>
      </div>
    </section>
  );
}

function FactStrip() {
  const facts = [
    { n: "2014", l: "Founded" },
    { n: "Roy", l: "Answers the phone" },
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

function Founder() {
  return (
    <section className="section">
      <div className="meth-head">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Who you'll work with</div>
          <h2 className="section-title">Roy Bachar.<br/>Founder, since 2014.</h2>
        </div>
        <p className="meth-aside">No stock-photo team grid. When a project needs extra hands, Roy brings in senior specialists he already works with — and tells you first.</p>
      </div>
      <div className="founder-card">
        <div className="founder-mark"><EagleMark/></div>
        <div>
          <div className="team-pc-n">Roy Bachar</div>
          <div className="team-pc-r">Founder</div>
          <p className="team-pc-bio-txt">Hands-on through every engagement — first call, design reviews, launch. WordPress, custom sites, marketing, and AI when it is useful. Call 754-233-4037.</p>
          <div className="founder-actions">
            <a href="tel:+17542334037" className="btn btn-gold">Call Roy</a>
            <a href="mailto:roy@royaleagleweb.com" className="btn btn-ghost">roy@royaleagleweb.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell active="about">
      <PageHero
        kicker="About us"
        title='A small shop.<br/><span class="gradient-text">On purpose.</span>'
        sub="Roy Bachar's Fort Lauderdale–area web and marketing shop. Founded 2014. 4440 Inverrary Blvd, Lauderhill. He answers the phone."
      />
      <FactStrip/>
      <AboutStory/>
      <Values/>
      <Founder/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage/>);
