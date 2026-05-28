// AFFILIATES page

function AffiliatesPage() {
  return (
    <PageShell active="affiliates">
      <PageHero
        kicker="Affiliates program"
        eyebrow="15% commission · 12 months"
        title='Refer a client.<br/><span class="gradient-text">Earn ongoing commission.</span>'
        sub="Our affiliate program pays 15% on the first 12 months of any client you refer. Tracked transparently, paid monthly."
      />
      <section className="section">
        <div className="aff-stats">
          <div><div className="bn-n">15%</div><div className="bn-l">Commission rate</div></div>
          <div><div className="bn-n">12 mo</div><div className="bn-l">Earnings window</div></div>
          <div><div className="bn-n">5.0★</div><div className="bn-l">Affiliate satisfaction</div></div>
          <div><div className="bn-n">142</div><div className="bn-l">Active affiliates</div></div>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><div className="kicker"><span className="kicker-dot"></span>How it works</div><h2 className="section-title">Three steps, no surprises.</h2></div>
        <div className="aff-steps">
          {[
            { n: "01", t: "Apply", d: "Fill out the affiliate application below. Approval is usually same-day. You'll get a personal referral link tracked through FirstPromoter." },
            { n: "02", t: "Refer", d: "Send your referral link to anyone in your network who needs web, marketing, or AI work. We'll handle the discovery call and engagement scope." },
            { n: "03", t: "Earn", d: "Get paid 15% on the first 12 months of any signed engagement. Paid monthly via PayPal or ACH. Live dashboard shows clicks, conversions, and earnings." },
          ].map(s => (
            <div key={s.n} className="aff-step">
              <div className="bn-n">{s.n}</div>
              <h3 className="aff-step-t">{s.t}</h3>
              <p className="aff-step-d">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="aff-card">
          <h2 className="section-title">Apply to the program.</h2>
          <p className="aff-card-p">Most applications are approved within 24 hours. We'll send your dashboard login the same day.</p>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert("Thanks — we'll review your application within 24 hours."); }}>
            <div className="field-row">
              <label><span>Your name</span><input type="text" required/></label>
              <label><span>Email</span><input type="email" required/></label>
            </div>
            <label><span>Website or LinkedIn</span><input type="url" placeholder="https://..."/></label>
            <label><span>Where will you promote our services?</span><textarea rows="3" placeholder="e.g. my newsletter, my agency referral pipeline, my consulting clients"></textarea></label>
            <button type="submit" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>Submit application →</button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AffiliatesPage/>);
