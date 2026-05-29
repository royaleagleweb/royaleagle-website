const W3F_KEY = "0b2db5c7-f37b-4cda-bf34-95fcf2ba59c3";

async function submitToWeb3Forms(data) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: W3F_KEY, ...data }),
  });
  return res.json();
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  const [fields, setFields] = React.useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true); setError("");
    const result = await submitToWeb3Forms({
      subject: `New enquiry from ${fields.name} — Royal Eagle`,
      from_name: fields.name,
      replyto: fields.email,
      ...fields,
    });
    setSending(false);
    if (result.success) { setSubmitted(true); }
    else { setError("Something went wrong. Please try again or call us at 754-233-4037."); }
  }

  return (
    <section className="section contact-section">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Let's talk.</h2>
          <p className="contact-lede">Tell us about your project. We'll come back within one business day with a real plan — not a sales pitch.</p>
          <div className="contact-meta">
            <div className="cm-row">
              <div className="cm-label">Call</div>
              <a href="tel:+17542334037" className="cm-val">754-233-4037</a>
            </div>
            <div className="cm-row">
              <div className="cm-label">Email</div>
              <a href="mailto:roy@royaleagleweb.com" className="cm-val">roy@royaleagleweb.com</a>
            </div>
            <div className="cm-row">
              <div className="cm-label">Office</div>
              <a href="https://share.google/idV4zjUrBGsrRtZ19" target="_blank" rel="noopener" className="cm-val">4440 Inverrary Blvd<br/>Lauderhill, FL 33319 →</a>
            </div>
            <div className="cm-row">
              <div className="cm-label">Hours</div>
              <div className="cm-val">Sat – Thu · 8am – 5pm ET</div>
            </div>
          </div>
          <div className="contact-guarantee">
            <span className="kicker-dot"></span>
            <span>30-day money-back guarantee on every plan</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact-success">
              <EagleCrest size={100} glow={false}/>
              <h3>Message received.</h3>
              <p>We'll be in touch within one business day. In the meantime — feel free to call us directly at 754-233-4037.</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <label>
                  <span>Your name</span>
                  <input type="text" placeholder="Jane Smith" required value={fields.name} onChange={e => setFields({...fields, name: e.target.value})}/>
                </label>
                <label>
                  <span>Company</span>
                  <input type="text" placeholder="Acme Co." value={fields.company} onChange={e => setFields({...fields, company: e.target.value})}/>
                </label>
              </div>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@yourbrand.com" required value={fields.email} onChange={e => setFields({...fields, email: e.target.value})}/>
              </label>
              <label>
                <span>Phone (optional)</span>
                <input type="tel" placeholder="(555) 123-4567" value={fields.phone} onChange={e => setFields({...fields, phone: e.target.value})}/>
              </label>
              <label>
                <span>My project needs help with…</span>
                <select required value={fields.service} onChange={e => setFields({...fields, service: e.target.value})}>
                  <option value="" disabled>Pick one</option>
                  <option>Web Design</option>
                  <option>Web Development</option>
                  <option>Local Search / SEO</option>
                  <option>Paid Google Ads</option>
                  <option>Paid Facebook Ads</option>
                  <option>Lead Generation</option>
                  <option>Email Marketing</option>
                  <option>Hosting & Maintenance</option>
                  <option>Automation Strategy</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span>Tell us a bit more</span>
                <textarea rows="5" placeholder="What are you trying to do? What's working? What isn't?" value={fields.message} onChange={e => setFields({...fields, message: e.target.value})}></textarea>
              </label>
              {error && <p style={{ color: '#e55', fontSize: '0.9rem', margin: '0' }}>{error}</p>}
              <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                {sending ? "Sending…" : "Send message"}
                {!sending && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <PageShell active="contact">
      <PageHero
        kicker="Start a project"
        title='Ready to <em>soar?</em><br/>'
        sub="One short form, one quick conversation, one clear plan. That's the whole process."
      />
      <ContactForm/>
      <section className="section contact-map-section">
        <div className="contact-map-grid">
          <div className="contact-map-card">
            <div className="kicker"><span className="kicker-dot"></span>Find us</div>
            <h2 className="section-title">4440 Inverrary Blvd<br/><span className="gradient-text">Lauderhill, FL.</span></h2>
            <p className="contact-map-p">Our office sits on the south side of Inverrary, about eight minutes from the Sawgrass Expressway and twenty from downtown Fort Lauderdale. Drop in for a meeting — we have coffee that's actually good.</p>
            <div className="contact-map-meta">
              <div>
                <div className="cm-label">Hours</div>
                <div className="cm-val cm-val-sm">Mon – Fri · 9am – 6pm ET</div>
              </div>
              <div>
                <div className="cm-label">Parking</div>
                <div className="cm-val cm-val-sm">Free, on-site</div>
              </div>
              <div>
                <div className="cm-label">Nearest exit</div>
                <div className="cm-val cm-val-sm">FL Turnpike, Commercial Blvd</div>
              </div>
            </div>
            <a href="https://share.google/idV4zjUrBGsrRtZ19" target="_blank" rel="noopener" className="btn btn-gold">
              Get directions on Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="contact-map-embed">
            <iframe
              title="Royal Eagle office on Google Maps"
              src="https://www.google.com/maps?q=4440+Inverrary+Blvd+Lauderhill+FL+33319&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
            <div className="contact-map-pin">
              <span className="cmp-dot"></span>
              <span>Royal Eagle HQ</span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage/>);
