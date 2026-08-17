function Regions() {
  const regions = [
    { n: "Broward", c: "Fort Lauderdale · Hollywood · Pompano · Coral Springs · Plantation · Davie", coord: "26.19°N", count: "Home county" },
    { n: "Miami-Dade", c: "Miami · Aventura · Doral · Coral Gables · Brickell · Miami Beach", coord: "25.76°N", count: "We work here" },
    { n: "West Palm Beach", c: "WPB · Boca Raton · Delray · Boynton Beach · Jupiter · Wellington", coord: "26.71°N", count: "We work here" },
  ];
  return (
    <section className="section regions-section">
      <div className="regions-grid">
        {regions.map((r, i) => (
          <div key={i} className="region-card">
            <div className="region-coord">{r.coord}</div>
            <div className="region-pin">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="region-n">{r.n}</h3>
            <p className="region-c">{r.c}</p>
            <div className="region-meta">
              <span>{r.count}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="florida-svg">
        <svg viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d="M40 30 L 80 32 L 120 28 L 180 35 L 240 40 L 290 50 L 320 70 L 340 100 L 335 130 L 320 160 L 295 175 L 270 178 L 260 168 L 250 150 L 240 130 L 230 115 L 215 110 L 200 115 L 190 105 L 175 95 L 155 85 L 130 80 L 105 75 L 80 65 L 60 55 L 45 42 Z" stroke="var(--gold)" strokeWidth="1" fill="var(--gold)" fillOpacity="0.04"/>
          <circle cx="285" cy="120" r="5" fill="var(--gold)"/>
          <circle cx="285" cy="120" r="12" fill="var(--gold)" fillOpacity="0.15"/>
          <circle cx="295" cy="105" r="5" fill="var(--gold)"/>
          <circle cx="295" cy="105" r="12" fill="var(--gold)" fillOpacity="0.15"/>
          <circle cx="305" cy="85" r="5" fill="var(--gold)"/>
          <circle cx="305" cy="85" r="12" fill="var(--gold)" fillOpacity="0.15"/>
          <text x="240" y="125" fill="var(--ink-dim)" fontSize="9" fontFamily="monospace">Miami-Dade</text>
          <text x="240" y="108" fill="var(--ink-dim)" fontSize="9" fontFamily="monospace">Broward</text>
          <text x="220" y="88" fill="var(--ink-dim)" fontSize="9" fontFamily="monospace">West Palm</text>
        </svg>
      </div>
    </section>
  );
}

function LocalAdvantage() {
  const advs = [
    { t: "Same time zone, every meeting.", d: "Eastern hours mean fast iteration and same-day calls — not 8am scrums with someone in another hemisphere." },
    { t: "We know your customers.", d: "From snowbirds to Brickell startups to family businesses in Davie, we've built for South Florida buyers for a decade." },
    { t: "On-site when you need us.", d: "Photo shoots, board meetings, hand-off training — we'll come to your office, not just hop on Zoom." },
  ];
  return (
    <section className="section">
      <div className="section-head"><div className="kicker"><span className="kicker-dot"></span>Why local matters</div><h2 className="section-title">South Florida proud,<br/>South Florida built.</h2></div>
      <div className="adv-grid">
        {advs.map((a, i) => (
          <div key={i} className="adv">
            <div className="adv-num">{String(i+1).padStart(2,'0')}</div>
            <h3 className="adv-t">{a.t}</h3>
            <p className="adv-d">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RegionsPage() {
  return (
    <PageShell active="regions">
      <PageHero
        kicker="South Florida proud"
        title='Web design across<br/><span class="gradient-text">the Gold Coast.</span>'
        sub="Local roots, regional reach. We build for the businesses that build South Florida — Broward, Miami-Dade, and West Palm Beach."
      />
      <Regions/>
      <LocalAdvantage/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RegionsPage/>);
