// TEAM page — Roy only. No invented teammates.

function TeamPage() {
  return (
    <PageShell active="team">
      <PageHero
        kicker="Who you'll work with"
        title='Roy Bachar.<br/><span class="gradient-text">That's the shop.</span>'
        sub="Founder since 2014. Fort Lauderdale / Lauderhill. When a project needs extra hands, he works with senior specialists — without fake names or stock headshots."
      />
      <section className="section">
        <div className="founder-card founder-card-wide">
          <div className="founder-mark"><EagleMark/></div>
          <div>
            <div className="team-pc-n">Roy Bachar</div>
            <div className="team-pc-r">Founder</div>
            <p className="team-pc-bio-txt">
              Founded Royal Eagle in the Fort Lauderdale area in 2014. Hands-on through every engagement — from first call to post-launch. WordPress, custom sites, marketing, and AI when it actually helps. He answers the phone: 754-233-4037.
            </p>
            <div className="founder-actions">
              <a href="tel:+17542334037" className="btn btn-gold">Call Roy</a>
              <a href="contact.html" className="btn btn-ghost">Book a call</a>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Want to talk to a person?" sub="Call Roy, or send a note. You'll hear back from him — not a chatbot."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TeamPage/>);
