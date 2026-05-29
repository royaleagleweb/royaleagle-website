// =============================================================
// CONVERSION TOOLKIT — 60-second service finder, social proof
// feed, and "vs the alternatives" comparison table.
// =============================================================

async function submitForm(data) {
  const res = await fetch("https://formsubmit.co/ajax/roy@royaleagleweb.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// ---- 60-second service finder quiz ----
function ServiceFinder() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  const STEPS = [
    {
      key: 'goal',
      q: "What brings you here today?",
      sub: "Pick the one closest to your situation — we'll tailor a plan from there.",
      options: [
        { id: 'new-site', t: 'I need a new website', d: 'Marketing, brand, lead-gen site', emoji: '🪶', icon: 'web' },
        { id: 'redesign', t: 'My site needs a refresh', d: 'Dated look or weak performance', emoji: '✨', icon: 'refresh' },
        { id: 'leads', t: 'I need more qualified leads', d: 'PPC, SEO, automation', emoji: '📈', icon: 'leads' },
        { id: 'ecomm', t: 'I sell or want to sell online', d: 'Shopify, WooCommerce, headless', emoji: '🛍️', icon: 'shop' },
        { id: 'ai', t: 'I want AI in my business', d: 'Strategy, tools, custom workflows', emoji: '🤖', icon: 'ai' },
        { id: 'unsure', t: "Honestly, I'm not sure yet", d: 'Just exploring options', emoji: '🤔', icon: 'question' },
      ],
    },
    {
      key: 'timeline',
      q: "When do you want to be live with this?",
      sub: "Be candid — we plan team capacity around real dates, not hopes.",
      options: [
        { id: 'asap', t: 'ASAP', d: 'This month if possible', emoji: '🔥', icon: 'flame' },
        { id: '3mo', t: 'Within 3 months', d: 'Soon but flexible', emoji: '🎯', icon: 'target' },
        { id: '6mo', t: 'In 3 – 6 months', d: 'Planning ahead', emoji: '📅', icon: 'cal' },
        { id: 'explore', t: 'No firm timeline', d: 'Doing research', emoji: '🧭', icon: 'compass' },
      ],
    },
    {
      key: 'scale',
      q: "How big is the project, roughly?",
      sub: "A rough sense of scale helps us match you with the right team and timeline. No commitment — just orientation.",
      options: [
        { id: 'small', t: 'Small / single-page', d: 'Landing page or quick refresh', emoji: '🌱', icon: 'dollar1' },
        { id: 'medium', t: 'Standard marketing site', d: '5 – 15 pages, brand-driven', emoji: '🪴', icon: 'dollar2' },
        { id: 'large', t: 'Complex build', d: 'Multi-section, integrations, automation', emoji: '🌳', icon: 'dollar3' },
        { id: 'enterprise', t: 'Enterprise / multi-product', d: 'Multiple sites, locations, or teams', emoji: '🏛️', icon: 'vault' },
        { id: 'tbd', t: "Not sure yet", d: "We'll help you size it", emoji: '💬', icon: 'chat' },
      ],
    },
    {
      key: 'contact',
      q: "Last step — where should we send your plan?",
      sub: "We'll review your answers and reply within one business day with a tailored proposal and a calendar link.",
      form: true,
    },
  ];

  const RECS = {
    'new-site':  { slug: 'website-builds',      wks: '6 – 10 weeks' },
    'redesign':  { slug: 'wordpress-elementor', wks: '5 – 8 weeks' },
    'leads':     { slug: 'ppc',                 wks: 'Live in 2 wks' },
    'ecomm':     { slug: 'ecommerce',           wks: '8 – 14 weeks' },
    'ai':        { slug: 'ai-strategy',         wks: '4 weeks' },
    'unsure':    { slug: 'marketing',           wks: 'Custom' },
  };
  const rec = RECS[answers.goal] || RECS.unsure;
  const recSvc = SERVICES.find(s => s.slug === rec.slug) || SERVICES[0];

  const pick = (key, value) => {
    setAnswers(a => ({ ...a, [key]: value }));
    setTimeout(() => setStep(s => s + 1), 280);
  };

  const current = STEPS[step];

  if (submitted) {
    return (
      <section className="section sf-section">
        <div className="sf-card sf-success-card">
          <div className="sf-success-checkmark">
            <svg viewBox="0 0 60 60" width="80" height="80">
              <circle cx="30" cy="30" r="28" stroke="var(--gold)" strokeWidth="2" fill="none" className="sf-check-circle"/>
              <path d="M18 30 L26 38 L42 22" stroke="var(--gold)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="sf-check-tick"/>
            </svg>
          </div>
          <h2 className="sf-success-h">Thanks, {(answers.name || '').split(' ')[0] || 'friend'} 👋</h2>
          <p className="sf-success-p">We've got your brief. Based on your answers we think <strong>{recSvc.title}</strong> is your best fit — typically delivered in <strong>{rec.wks}</strong>.</p>
          <p className="sf-success-p sf-success-p-quiet">Sam will reach out within one business day with a tailored proposal and a calendar link. In the meantime — feel free to read up on what's coming.</p>
          <div className="sf-success-actions">
            <a href={`service.html?s=${recSvc.slug}`} className="btn btn-gold">Read about {recSvc.title} →</a>
            <a href="tel:+17542334037" className="btn btn-ghost">Or call now: 754-233-4037</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section sf-section">
      <div className="sf-card">
        <div className="sf-header">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>60-second project quiz</div>
            <h2 className="sf-h">Tell us about your project.</h2>
            <p className="sf-h-sub">Four questions. We'll match you to the right plan and a real human will reply within a business day.</p>
          </div>
          <div className="sf-progress">
            <div className="sf-progress-text">Step <strong>{step + 1}</strong> of {STEPS.length}</div>
            <div className="sf-progress-bar"><div className="sf-progress-fill" style={{ width: `${(step+1)/STEPS.length * 100}%` }}></div></div>
          </div>
        </div>

        <div key={step} className="sf-step">
          <h3 className="sf-q">{current.q}</h3>
          {current.sub && <p className="sf-sub">{current.sub}</p>}

          {current.options && (
            <div className="sf-options">
              {current.options.map((o, i) => (
                <button key={o.id} className={`sf-option ${answers[current.key] === o.id ? 'is-active' : ''}`} onClick={() => pick(current.key, o.id)} style={{ animationDelay: `${i*40}ms` }}>
                  <span className="sf-option-emoji">{window.SFIcon ? window.SFIcon[o.icon] || o.emoji : o.emoji}</span>
                  <span className="sf-option-body">
                    <span className="sf-option-t">{o.t}</span>
                    <span className="sf-option-d">{o.d}</span>
                  </span>
                  <span className="sf-option-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </button>
              ))}
            </div>
          )}

          {current.form && (
            <form className="sf-form" onSubmit={async e => {
              e.preventDefault(); setSending(true); setFormError("");
              const result = await submitForm({
                _subject: `Service finder lead — ${answers.name || 'Anonymous'} (${recSvc?.title || answers.goal})`,
                goal: STEPS[0].options.find(o => o.id === answers.goal)?.t,
                timeline: STEPS[1].options.find(o => o.id === answers.timeline)?.t,
                scale: STEPS[2].options.find(o => o.id === answers.scale)?.t,
                suggested_service: recSvc?.title,
                name: answers.name, email: answers.email, phone: answers.phone, notes: answers.notes,
              });
              setSending(false);
              if (result.success) setSubmitted(true);
              else setFormError("Something went wrong — please try again.");
            }}>
              <div className="sf-recap">
                <div className="sf-recap-h">Your project at a glance</div>
                <div className="sf-recap-grid">
                  <div><span>Goal</span><strong>{STEPS[0].options.find(o => o.id === answers.goal)?.t}</strong></div>
                  <div><span>Timeline</span><strong>{STEPS[1].options.find(o => o.id === answers.timeline)?.t}</strong></div>
                  <div><span>Scale</span><strong>{STEPS[2].options.find(o => o.id === answers.scale)?.t}</strong></div>
                  <div className="sf-recap-match"><span>Suggested</span><strong>{recSvc.title}</strong></div>
                </div>
              </div>
              <div className="field-row">
                <label><span>Your name</span><input type="text" required value={answers.name || ''} onChange={e => setAnswers({...answers, name: e.target.value})}/></label>
                <label><span>Your email</span><input type="email" required value={answers.email || ''} onChange={e => setAnswers({...answers, email: e.target.value})}/></label>
              </div>
              <label><span>Phone (optional but helpful)</span><input type="tel" value={answers.phone || ''} onChange={e => setAnswers({...answers, phone: e.target.value})}/></label>
              <label><span>Anything else we should know?</span><textarea rows="3" placeholder="A few sentences about your business or what you're trying to do"></textarea></label>
              {formError && <p style={{ color: '#e55', fontSize: '0.85rem', margin: '0' }}>{formError}</p>}
              <button type="submit" className="btn btn-gold sf-submit" disabled={sending}>{sending ? "Sending…" : "Get my tailored plan →"}</button>
              <div className="sf-form-foot">
                <span className="kicker-dot"></span>
                <span>No spam, ever. Avg first reply: <strong>14 min</strong> during business hours.</span>
              </div>
            </form>
          )}
        </div>

        {step > 0 && (
          <button className="sf-back" onClick={() => setStep(s => s - 1)}>← Back</button>
        )}
      </div>
    </section>
  );
}

// ---- Social proof activity feed (bottom-left, cycles) ----
function SocialProofFeed() {
  const ITEMS = [
    { who: "Sarah K.", where: "Coral Gables", what: "asked about a brand refresh", when: "9 min ago" },
    { who: "A dental office", where: "Aventura", what: "booked a call with Roy", when: "23 min ago" },
    { who: "Priya R.", where: "Boca Raton", what: "downloaded the AI brief PDF", when: "an hour ago" },
    { who: "James L.", where: "Fort Lauderdale", what: "asked us to take over their hosting", when: "2 hours ago" },
    { who: "A law firm", where: "Brickell", what: "started their second redesign with us", when: "yesterday" },
    { who: "David W.", where: "Plantation", what: "renewed for year three", when: "yesterday" },
  ];
  const [i, setI] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    if (dismissed) return;
    const showT = setTimeout(() => setVisible(true), 6000);
    return () => clearTimeout(showT);
  }, [dismissed]);

  React.useEffect(() => {
    if (!visible || dismissed) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI(x => (x + 1) % ITEMS.length);
        setVisible(true);
      }, 350);
    }, 7000);
    return () => clearInterval(t);
  }, [visible, dismissed]);

  if (dismissed) return null;
  const item = ITEMS[i];
  const initials = item.who.split(' ').map(w => w[0]).join('');
  return (
    <div className={`spf ${visible ? 'spf-visible' : ''}`}>
      <div className="spf-pulse"></div>
      <div className="spf-av">{initials}</div>
      <div className="spf-body">
        <div className="spf-t"><strong>{item.who}</strong> from {item.where}</div>
        <div className="spf-s">{item.what}</div>
        <div className="spf-when">· {item.when}</div>
      </div>
      <button className="spf-close" onClick={() => setDismissed(true)} aria-label="Dismiss">×</button>
    </div>
  );
}

// ---- Vs the alternatives table ----
function ComparisonTable() {
  const rows = [
    { f: "Time to start", h: "2 – 4 months hiring cycle", fl: "1 – 2 weeks", us: "First call this week" },
    { f: "First-year commitment", h: "Full-time salary + benefits", fl: "Project-by-project", us: "Quoted to scope, milestone-billed" },
    { f: "Specialist breadth", h: "1 – 2 disciplines", fl: "Usually one", us: "Design · Eng · Paid · AI" },
    { f: "Senior-only on your project", h: "Whoever you hired", fl: "Coin-flip", us: "Guaranteed, in writing" },
    { f: "Coverage if someone's sick", h: "Project stops", fl: "Project stops", us: "Always covered" },
    { f: "Accountability if it underperforms", h: "Internal HR problem", fl: "Best effort", us: "Contractual KPI SLA" },
    { f: "30-day money-back guarantee", h: "—", fl: "—", us: "✓ Standard" },
  ];
  return (
    <section className="section comp-section">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>Why Royal Eagle</div>
        <h2 className="section-title">There are three ways to do this.<br/><span className="gradient-text">Only one scales without breaking.</span></h2>
      </div>
      <div className="comp-table">
        <div className="comp-row comp-head">
          <div></div>
          <div className="comp-col-h"><div className="comp-col-i">👤</div>Hire in-house</div>
          <div className="comp-col-h"><div className="comp-col-i">💻</div>Freelancer</div>
          <div className="comp-col-h comp-col-us"><div className="comp-col-i comp-col-i-us"><EagleMark/></div>Royal Eagle</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="comp-row">
            <div className="comp-f">{r.f}</div>
            <div className="comp-c">{r.h}</div>
            <div className="comp-c">{r.fl}</div>
            <div className="comp-c comp-c-us">
              <span className="comp-check">✓</span>
              {r.us}
            </div>
          </div>
        ))}
        <div className="comp-row comp-cta-row">
          <div></div>
          <div></div>
          <div></div>
          <div className="comp-c-us">
            <a href="#service-finder" className="btn btn-gold">Take the 60-sec quiz →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServiceFinder, SocialProofFeed, ComparisonTable });
