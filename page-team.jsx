// TEAM page — Roy only. No invented teammates.

function TeamPage() {
  return (
    <PageShell active="team">
      <PageHero
        kicker="Who you'll work with"
        title='The studio.<br/><span class="gradient-text">Founded 2014.</span>'
        sub="Royal Eagle is a Fort Lauderdale practice. Founded by Roy Bachar. When a project needs extra hands, the studio works with senior specialists — without fake names or stock headshots."
      />
      <section className="section">
        <div className="founder-card founder-card-wide">
          <div className="founder-mark"><EagleMark/></div>
          <div>
            <div className="team-pc-n">Roy Bachar</div>
            <div className="team-pc-r">Founder</div>
            <p className="team-pc-bio-txt">
              Founded Royal Eagle in the Fort Lauderdale area in 2014. Hands-on through every engagement — from first call to post-launch. WordPress, custom sites, marketing, and AI when it actually helps. 754-233-4037.
            </p>
            <div className="founder-actions">
              <a href="tel:+17542334037" className="btn btn-gold">Call the studio</a>
              <a href="contact.html" className="btn btn-ghost">Book a conversation</a>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Want to talk to a person?" sub="Call the studio, or send a note. You'll hear back from a person — not a chatbot."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TeamPage/>);
