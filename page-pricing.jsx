function Pricing() {
  const plans = [
    { n: "Essentials", tier: "Foundation", d: "Foundation maintenance for static WordPress sites that need proactive care.", feats: ["WordPress backups", "Maintenance & updates", "Performance monitoring", "Firewall protection", "Brute-force login protection", "Malware scans & removal"], cta: "Talk to us" },
    { n: "Professional", tier: "Most popular", d: "Our most popular plan. For sites that need frequent updates with zero downtime.", feats: ["Everything in Essentials, plus:", "Edit existing pages", "Fix errors and bugs", "Plugin install & config", "User & password management", "WooCommerce support"], cta: "Talk to us", best: true },
    { n: "Enterprise", tier: "Priority everything", d: "The ultimate WordPress support plan for managers who need priority everything.", feats: ["Everything in Professional, plus:", "Publish new posts/pages", "Update page layouts", "WordPress LMS support", "Multisite network support", "Priority help desk"], cta: "Talk to us" },
  ];
  return (
    <section className="section">
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div key={i} className={`price-card ${p.best ? 'price-card-best' : ''}`}>
            {p.best && <div className="best-badge">Most popular</div>}
            <div className="price-name">{p.n}</div>
            <p className="price-d">{p.d}</p>
            <div className="price-row price-row-quote">
              <span className="price-tier">{p.tier}</span>
              <span className="price-quote">Custom quote</span>
            </div>
            <ul className="price-feats">
              {p.feats.map((f, j) => (
                <li key={j} className={f.includes('Everything') ? 'feat-head' : ''}>
                  {!f.includes('Everything') && <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="contact.html" className={`btn ${p.best ? 'btn-gold' : 'btn-ghost'}`} style={{ width: '100%', justifyContent: 'center' }}>{p.cta}</a>
          </div>
        ))}
      </div>
      <div className="price-note">
        <span>30-day money-back guarantee</span>
        <span className="dot-sep">·</span>
        <span>Cancel anytime</span>
        <span className="dot-sep">·</span>
        <span>Volume discounts at 5+ sites</span>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const qs = [
    { q: "Do you really offer unlimited Help Desk Support?", a: "Yes — once you're on a Professional or Enterprise plan, you can submit unlimited tasks. Each task is capped at ~30 minutes, but there's no limit on the number of tasks per month." },
    { q: "Can multiple websites share one plan?", a: "Each domain requires its own plan. If you have 5+ sites, book a call — we'll put together a multi-site bundle." },
    { q: "What if a task takes more than 30 minutes?", a: "Larger tasks are scoped separately. Most things you'd want — content edits, plugin tweaks, layout changes — fit comfortably inside the 30-minute window." },
    { q: "What are your hours and response times?", a: "Mon–Fri, 9am–6pm ET. Roy answers the phone. Most notes get a same-day or next-business-day reply." },
    { q: "How does onboarding work?", a: "You'll receive a welcome email with secure credential-collection. Once we have access, your plan is fully implemented within 24–48 hours — backups verified, monitoring connected, updates applied." },
    { q: "Do you support WooCommerce?", a: "Absolutely. E-commerce sites require Professional or Enterprise plans because they need additional resources to keep fast, secure, and at 100% uptime." },
  ];
  return (
    <section className="section">
      <div className="section-head"><div className="kicker"><span className="kicker-dot"></span>Common questions</div><h2 className="section-title">FAQ.</h2></div>
      <div className="faq-list">
        {qs.map((it, i) => (
          <div key={i} className={`faq ${open === i ? 'faq-open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="faq-q">
              <span>{it.q}</span>
              <span className="faq-toggle">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <div className="faq-a">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <PageShell active="pricing">
      <PageHero
        kicker="Plans & pricing"
        title='Fully managed,<br/><span class="gradient-text">flat monthly fee.</span>'
        sub="Pick a plan, ship the work, sleep at night. Every engagement is quoted to your scope — talk to us for a tailored proposal."
      />
      <Pricing/>
      <FAQ/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PricingPage/>);
