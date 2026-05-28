// TEAM page

function TeamPage() {
  return (
    <PageShell active="team">
      <PageHero
        kicker="Our team"
        title='Thirty-eight senior<br/><span class="gradient-text">practitioners.</span>'
        sub="Designers, engineers, marketers, strategists. Every Royal Eagle project is delivered by named senior individuals — no subcontracting, no offshore."
      />
      <section className="section">
        <div className="team-photo-grid team-photo-grid-v2">
          {TEAM.map((t, i) => (
            <div key={i} className="team-pc team-pc-v2 team-pc-bio">
              <div className="team-photo">
                <img src={t.img} alt={t.n} loading="lazy"/>
                <div className="team-photo-overlay"></div>
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

      <section className="section careers">
        <div className="careers-card">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>We're hiring</div>
            <h2 className="section-title">Want to join the flock?</h2>
            <p className="careers-p">We're always hiring senior practitioners in design, engineering, paid media, and AI. Hybrid in Fort Lauderdale (Tue/Thu in office) or fully remote for the right person.</p>
            <a href="contact.html" className="btn btn-gold">See open roles →</a>
          </div>
          <div className="careers-stats">
            <div><div className="bn-n">38</div><div className="bn-l">Team size</div></div>
            <div><div className="bn-n">12</div><div className="bn-l">Avg years experience</div></div>
            <div><div className="bn-n">94%</div><div className="bn-l">Retention, last 3 yrs</div></div>
          </div>
        </div>
      </section>

      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TeamPage/>);
