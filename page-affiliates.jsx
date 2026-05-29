// AFFILIATES page

const W3F_KEY = "0b2db5c7-f37b-4cda-bf34-95fcf2ba59c3";

async function submitToWeb3Forms(data) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: W3F_KEY, ...data }),
  });
  return res.json();
}

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
          {(() => {
            const [submitted, setSubmitted] = React.useState(false);
            const [sending, setSending] = React.useState(false);
            const [error, setError] = React.useState("");
            const [fields, setFields] = React.useState({ name: "", email: "", website: "", promo: "" });
            async function handleSubmit(e) {
              e.preventDefault(); setSending(true); setError("");
              const result = await submitToWeb3Forms({
                subject: `Affiliate application from ${fields.name}`,
                from_name: fields.name, replyto: fields.email, ...fields,
              });
              setSending(false);
              if (result.success) setSubmitted(true);
              else setError("Something went wrong — please email roy@royaleagleweb.com directly.");
            }
            if (submitted) return <p style={{ color: '#c9a84c', fontWeight: 600 }}>Application received! We'll be in touch within 24 hours.</p>;
            return (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <label><span>Your name</span><input type="text" required value={fields.name} onChange={e => setFields({...fields, name: e.target.value})}/></label>
                  <label><span>Email</span><input type="email" required value={fields.email} onChange={e => setFields({...fields, email: e.target.value})}/></label>
                </div>
                <label><span>Website or LinkedIn</span><input type="url" placeholder="https://..." value={fields.website} onChange={e => setFields({...fields, website: e.target.value})}/></label>
                <label><span>Where will you promote our services?</span><textarea rows="3" placeholder="e.g. my newsletter, my agency referral pipeline, my consulting clients" value={fields.promo} onChange={e => setFields({...fields, promo: e.target.value})}></textarea></label>
                {error && <p style={{ color: '#e55', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn btn-gold" style={{ alignSelf: 'flex-start' }} disabled={sending}>{sending ? "Sending…" : "Submit application →"}</button>
              </form>
            );
          })()}
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AffiliatesPage/>);
