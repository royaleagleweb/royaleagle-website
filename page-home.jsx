// Homepage — editorial hero, marquee, work, stats, project quiz, studio.
// Motion is progressive: content renders fully without JS; effects respect
// prefers-reduced-motion and skip cursor work on touch devices.

document.documentElement.classList.add("hx-js");

const HX_RM = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const HX_FINE = () => !!(window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
const HX_PAD2 = (n) => String(n).padStart(2, "0");
const HX_SERVICES = ["Web design", "WordPress", "SEO", "Google & Meta ads", "Hosting & care"];
const HX_PHONE_D = "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z";

function PhoneIcon({ className = "re-hero-cta-ic" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={HX_PHONE_D}/></svg>
  );
}

// Line-art version of the Royal Eagle crest (same geometry as EagleCrest).
function EagleLine({ className = "" }) {
  return (
    <svg className={`hx-eagle ${className}`} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <circle cx="100" cy="100" r="92" pathLength="1"/>
      <circle cx="100" cy="100" r="85" className="hx-eagle-dots"/>
      <path pathLength="1" d="M100 38 L94 48 L88 46 L92 54 L86 58 L96 62 L100 70 L104 62 L114 58 L108 54 L112 46 L106 48 Z"/>
      <path pathLength="1" d="M100 70 L92 82 L96 110 L100 130 L104 110 L108 82 Z"/>
      <path pathLength="1" d="M92 82 L60 70 L40 80 L36 96 L52 92 L46 106 L62 100 L58 116 L74 108 L72 122 L88 112 L96 110 Z"/>
      <path pathLength="1" d="M108 82 L140 70 L160 80 L164 96 L148 92 L154 106 L138 100 L142 116 L126 108 L128 122 L112 112 L104 110 Z"/>
      <path pathLength="1" d="M96 130 L88 154 L100 146 L112 154 L104 130 Z"/>
    </svg>
  );
}

function HandUnderline() {
  return (
    <svg className="hx-underline" viewBox="0 0 400 28" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path pathLength="1" d="M5 17 C 70 7, 150 5, 214 11 S 338 22, 395 9"/>
      <path pathLength="1" className="hx-underline-2" d="M38 23 C 130 16, 262 15, 372 19"/>
    </svg>
  );
}

function Hero() {
  const featured = CASE_STUDIES[0];
  return (
    <section className="re-hero re-hero-x">
      <div className="re-hero-fx" aria-hidden="true"></div>
      <p className="hx-vlabel hx-vlabel-hero" aria-hidden="true">Lauderhill, FL · 26.156° N 80.218° W · Since 2014</p>
      <div className="re-hero-inner">
        <div>
          <p className="re-hero-kicker">Est. 2014 · Fort Lauderdale</p>
          <h1 className="re-hero-title hx-kinetic">
            <span className="hx-line"><span className="hx-w" style={{ "--i": 0 }}><span>More</span></span> <span className="hx-w" style={{ "--i": 1 }}><span>calls</span></span></span>
            <span className="gold hx-line"><span className="hx-w" style={{ "--i": 2 }}><span>from</span></span> <span className="hx-w" style={{ "--i": 3 }}><span>the</span></span> <span className="hx-w" style={{ "--i": 4 }}><span>web.</span></span><HandUnderline/></span>
          </h1>
          <p className="re-hero-sub">Websites, SEO, and ads for South Florida small businesses, contractors, and marine companies.</p>
          <ul className="re-hero-chips" aria-label="Services"><li>Web design</li><li>WordPress</li><li>SEO</li><li>Google &amp; Meta ads</li><li>Hosting &amp; care</li></ul>
          <div className="re-hero-ctas"><a href="tel:+17542334037" className="btn btn-gold re-hero-cta" data-magnetic aria-label="Call Royal Eagle at 754-233-4037"><PhoneIcon/><span>Call 754-233-4037</span></a></div>
          <p className="re-hero-reassure">Talk to Roy directly · Mon–Fri, 9–6</p>
          <a href="mailto:roy@royaleagleweb.com" className="re-hero-alt">Or email roy@royaleagleweb.com</a>
          <p className="re-hero-trust"><span className="re-hero-trust-k">Sites for</span> Doctor Yachts · Construction 95 · Florida Impact Windows &amp; Doors</p>
        </div>
        <div className="re-device">
          <a href={featured.url} target="_blank" rel="noopener" className="re-device-frame" aria-label={`Visit ${featured.brand}`}>
            <div className="re-chrome" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <img src={featured.shot} alt={`${featured.brand} live website`}/>
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const run = [...HX_SERVICES, ...HX_SERVICES];
  return (
    <div className="hx-marquee">
      <p className="hx-sr">Services: {HX_SERVICES.join(", ")}.</p>
      <div className="hx-marquee-track" aria-hidden="true">
        {[0, 1].map(k => (
          <ul key={k} className="hx-marquee-row">
            {run.map((t, i) => <li key={i}>{t}<span className="hx-star">✦</span></li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}

function HomeWorkCard({ cs, index }) {
  const n = HX_PAD2((index ?? 0) + 1);
  const place = [cs.tag, cs.location].filter(Boolean).join(" · ");
  return (
    <div className="hx-cell" data-reveal style={{ "--i": index % 2 }}>
      <span className="hx-bignum" aria-hidden="true">{n}</span>
      <a href={cs.url} target="_blank" rel="noopener" className="hx-card" data-tilt aria-label={`${cs.brand} live website (opens in a new tab)`}>
        <div className="hx-card-shot">
          <img src={cs.shot} alt={`${cs.brand} live website`} loading="lazy" width="1400" height="900"/>
        </div>
        <div className="hx-card-label">
          <div className="hx-card-meta">
            <h3 className="hx-card-brand">{cs.brand}</h3>
            <p className="hx-card-place">{place}</p>
          </div>
          <span className="hx-card-go" aria-hidden="true">↗</span>
        </div>
        <span className="hx-card-glare" aria-hidden="true"></span>
      </a>
    </div>
  );
}

function SelectWork() {
  const count = CASE_STUDIES.length;
  return (
    <section className="re-select hx-work" id="work">
      <p className="hx-vlabel hx-vlabel-work" aria-hidden="true">Selected work — {HX_PAD2(count)}</p>
      <div className="hx-head" data-reveal>
        <div>
          <p className="hx-kicker"><span className="hx-num" data-count-to={count} data-pad="2">{HX_PAD2(count)}</span>&nbsp;live sites</p>
          <h2 className="hx-h2">Selected <span className="hx-gold">work.</span></h2>
        </div>
        <a href="work.html" className="hx-head-link">View the portfolio <span aria-hidden="true">→</span></a>
      </div>
      <div className="hx-work-grid">
        {CASE_STUDIES.map((cs, i) => <HomeWorkCard key={cs.slug} cs={cs} index={i}/>)}
      </div>
    </section>
  );
}

function Stats() {
  const years = Math.max(0, new Date().getFullYear() - 2014);
  const live = CASE_STUDIES.length;
  return (
    <section className="hx-stats" aria-label="The studio in numbers">
      <div className="hx-stat" data-reveal style={{ "--i": 0 }}>
        <span className="hx-stat-n"><span className="hx-num" data-count-to="2014" data-count-from="1990">2014</span></span>
        <span className="hx-stat-l">Established in the Fort Lauderdale area</span>
      </div>
      <div className="hx-stat" data-reveal style={{ "--i": 1 }}>
        <span className="hx-stat-n"><span className="hx-num" data-count-to={years} data-pad="2">{HX_PAD2(years)}</span></span>
        <span className="hx-stat-l">Years in the work</span>
      </div>
      <div className="hx-stat" data-reveal style={{ "--i": 2 }}>
        <span className="hx-stat-n"><span className="hx-num" data-count-to={live} data-pad="2">{HX_PAD2(live)}</span></span>
        <span className="hx-stat-l">Live client sites in the portfolio</span>
      </div>
    </section>
  );
}

// ---------------- Project quiz + sign-up ----------------
// Delivery: the same FormSubmit endpoint the contact page already uses.
const HX_FORM_ENDPOINT = "https://formsubmit.co/ajax/roy@royaleagleweb.com";
const QUIZ_STEPS = [
  { key: "business", type: "single", q: "What kind of business is it?", hint: "Pick the closest fit.",
    options: ["Contractor / trades", "Marine", "Small business / other"] },
  { key: "needs", type: "multi", q: "What do you need?", hint: "Choose all that apply.",
    options: ["New website", "Redesign", "SEO", "Google / Meta ads", "Hosting & care"] },
  { key: "timeline", type: "single", q: "When do you want to start?", hint: "",
    options: ["As soon as possible", "In 1–3 months", "In 3+ months", "Just exploring"] },
  { key: "budget", type: "single", q: "What budget are you working with?",
    hint: "Every project is custom-quoted. This only helps Roy suggest the right scope.",
    options: ["Under $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"] },
];
const QUIZ_TOTAL = QUIZ_STEPS.length + 1;

function quizSummary(a, c) {
  return [
    `Business: ${a.business || "-"}`,
    `Needs: ${(a.needs || []).join(", ") || "-"}`,
    `Timeline: ${a.timeline || "-"}`,
    `Budget: ${a.budget || "-"}`,
    `Name: ${c.name || "-"}`,
    `Phone: ${c.phone || "-"}`,
    `Email: ${c.email || "-"}`,
    `Note: ${c.note || "-"}`,
  ].join("\n");
}

function ProjectQuiz() {
  const [step, setStep] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [answers, setAnswers] = React.useState({ business: "", needs: [], timeline: "", budget: "" });
  const [contact, setContact] = React.useState({ name: "", phone: "", email: "", note: "", _honey: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | failed
  const headRef = React.useRef(null);
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    if (headRef.current) headRef.current.focus({ preventScroll: true });
  }, [step, status === "sending" ? "idle" : status]);

  const cur = QUIZ_STEPS[step];
  const isContact = step === QUIZ_STEPS.length;
  const pct = status === "sent" ? 100 : Math.round(((step + 1) / QUIZ_TOTAL) * 100);

  function pick(key, value, multi) {
    setErrors({});
    setAnswers(prev => {
      if (!multi) return { ...prev, [key]: value };
      const has = prev[key].includes(value);
      return { ...prev, [key]: has ? prev[key].filter(v => v !== value) : [...prev[key], value] };
    });
  }

  function validateContact() {
    const e = {};
    if (contact.name.trim().length < 2) e.name = "Please add your name.";
    if (contact.phone.replace(/\D/g, "").length < 10) e.phone = "Please add a phone number with area code.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact.email.trim())) e.email = "Please add a valid email address.";
    return e;
  }

  function go(delta) {
    setDir(delta);
    setErrors({});
    setStep(s => Math.min(QUIZ_STEPS.length, Math.max(0, s + delta)));
  }

  async function send() {
    setStatus("sending");
    const payload = {
      _subject: `Homepage quiz: ${contact.name.trim()} (${answers.business})`,
      _template: "table",
      _captcha: "false",
      _honey: contact._honey,
      business: answers.business,
      needs: answers.needs.join(", "),
      timeline: answers.timeline,
      budget: answers.budget,
      name: contact.name.trim(),
      phone: contact.phone.trim(),
      email: contact.email.trim(),
      note: contact.note.trim(),
      source: "royaleagleweb.com homepage quiz",
    };
    try {
      const res = await fetch(HX_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok && String(json.success) === "true" ? "sent" : "failed");
    } catch (err) {
      setStatus("failed");
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    if (!isContact) {
      const v = answers[cur.key];
      if (cur.type === "multi" ? v.length === 0 : !v) {
        setErrors({ step: cur.type === "multi" ? "Choose at least one option." : "Choose one option to continue." });
        return;
      }
      go(1);
      return;
    }
    const e2 = validateContact();
    setErrors(e2);
    if (Object.keys(e2).length) {
      const first = document.getElementById(`hxq-${Object.keys(e2)[0]}`);
      if (first) first.focus();
      return;
    }
    send();
  }

  const mailto = `mailto:roy@royaleagleweb.com?subject=${encodeURIComponent(`Project quiz: ${contact.name || "website"}`)}&body=${encodeURIComponent(quizSummary(answers, contact))}`;
  const upd = (id, value) => {
    setContact(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => { const n = { ...prev }; delete n[id]; return n; });
  };
  const field = (id, label, props = {}, optional = false) => (
    <div className={`hx-field${errors[id] ? " has-error" : ""}`}>
      <label htmlFor={`hxq-${id}`}>{label}{optional && <span className="hx-opt-tag"> (optional)</span>}</label>
      {props.as === "textarea"
        ? <textarea id={`hxq-${id}`} rows="3" value={contact[id]} onChange={e => upd(id, e.target.value)}/>
        : <input id={`hxq-${id}`} value={contact[id]} onChange={e => upd(id, e.target.value)}
            aria-invalid={errors[id] ? "true" : undefined} aria-describedby={errors[id] ? `hxq-${id}-err` : undefined} {...props}/>}
      {errors[id] && <p className="hx-field-err" id={`hxq-${id}-err`}>{errors[id]}</p>}
    </div>
  );

  return (
    <section className="hx-quiz" id="quiz" aria-labelledby="hx-quiz-title">
      <div className="hx-quiz-inner">
        <div className="hx-quiz-intro" data-reveal>
          <p className="hx-kicker">Project quiz · {QUIZ_STEPS.length} questions</p>
          <h2 className="hx-h2" id="hx-quiz-title">Find your <span className="hx-ink-gold">next step.</span></h2>
          <p className="hx-quiz-lede">Four quick questions, then where to reach you. Your answers go straight to Roy's inbox.</p>
          <p className="hx-quiz-alt">Rather talk? <a href="tel:+17542334037">Call 754-233-4037</a></p>
          <EagleLine className="hx-eagle-quiz"/>
        </div>
        <div className="hx-quiz-card" data-reveal style={{ "--i": 1 }}>
          <div className="hx-quiz-top">
            <span className="hx-quiz-count">{status === "sent" ? "Done" : (isContact ? "Last step · your details" : `Question ${step + 1} of ${QUIZ_STEPS.length}`)}</span>
            <div className="hx-quiz-bar" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={pct}>
              <span style={{ transform: `scaleX(${pct / 100})` }}></span>
            </div>
          </div>

          {status === "sent" ? (
            <div className="hx-step hx-thanks" key="sent" aria-live="polite">
              <svg className="hx-check" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" pathLength="1"/><path d="M15 27 L23 35 L38 18" pathLength="1"/></svg>
              <h3 className="hx-q" tabIndex="-1" ref={headRef}>Thanks, {contact.name.trim().split(" ")[0]}. Your answers are in Roy's inbox.</h3>
              <p className="hx-hint">He'll reach out at {contact.email.trim()} or {contact.phone.trim()}. If it's urgent, call <a href="tel:+17542334037" className="hx-nowrap">754-233-4037</a>.</p>
            </div>
          ) : status === "failed" ? (
            <div className="hx-step hx-failed" key="failed" role="alert">
              <h3 className="hx-q" tabIndex="-1" ref={headRef}>We couldn't send that automatically.</h3>
              <p className="hx-hint">Nothing was sent yet. Your answers are ready to go by email, or you can call instead.</p>
              <div className="hx-quiz-nav hx-quiz-nav-col">
                <a className="btn btn-gold hx-next" href={mailto}>Email my answers to Roy</a>
                <a className="btn btn-ghost hx-back" href="tel:+17542334037"><PhoneIcon className="hx-ic"/> Or call 754-233-4037</a>
                <button type="button" className="hx-link" onClick={() => setStatus("idle")}>Try sending again</button>
              </div>
            </div>
          ) : (
            <form className="hx-quiz-form" onSubmit={onSubmit} noValidate>
              <div className={`hx-step ${dir > 0 ? "is-fwd" : "is-back"}`} key={step}>
                {!isContact ? (
                  <fieldset className="hx-fieldset" aria-describedby={cur.hint ? `hxq-hint-${step}` : undefined}>
                    <legend className="hx-q" tabIndex="-1" ref={headRef}>{cur.q}</legend>
                    {cur.hint && <p className="hx-hint" id={`hxq-hint-${step}`}>{cur.hint}</p>}
                    <div className={`hx-opts${cur.options.length > 4 ? " hx-opts-dense" : ""}`}>
                      {cur.options.map(o => {
                        const checked = cur.type === "multi" ? answers[cur.key].includes(o) : answers[cur.key] === o;
                        return (
                          <label key={o} className={`hx-opt${checked ? " is-on" : ""}`}>
                            <input type={cur.type === "multi" ? "checkbox" : "radio"} name={`hxq-${cur.key}`} value={o} checked={checked} onChange={() => pick(cur.key, o, cur.type === "multi")}/>
                            <span className={`hx-opt-mark${cur.type === "multi" ? " is-box" : ""}`} aria-hidden="true"></span>
                            <span className="hx-opt-t">{o}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                ) : (
                  <div className="hx-fieldset">
                    <h3 className="hx-q" tabIndex="-1" ref={headRef}>Where should Roy reach you?</h3>
                    <p className="hx-hint">{answers.business} · {answers.needs.join(", ")} · {answers.timeline} · {answers.budget}</p>
                    <div className="hx-fields">
                      {field("name", "Name", { type: "text", autoComplete: "name", required: true })}
                      {field("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel", required: true })}
                      {field("email", "Email", { type: "email", autoComplete: "email", required: true })}
                      {field("note", "Anything else?", { as: "textarea" }, true)}
                    </div>
                    <input className="hx-hp" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" value={contact._honey} onChange={e => setContact({ ...contact, _honey: e.target.value })}/>
                  </div>
                )}
              </div>
              {errors.step && <p className="hx-field-err hx-step-err" role="alert">{errors.step}</p>}
              <div className="hx-quiz-nav">
                {step > 0 && <button type="button" className="btn btn-ghost hx-back" onClick={() => go(-1)}>Back</button>}
                <button type="submit" className="btn btn-gold hx-next" disabled={status === "sending"}>
                  {isContact ? (status === "sending" ? "Sending…" : "Send to Roy") : "Next"}
                </button>
              </div>
              {isContact && <p className="hx-fine">By sending, you're asking Royal Eagle to contact you about your project. No mailing lists.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="re-studio hx-studio" id="studio">
      <span className="hx-outline-num" aria-hidden="true">2014</span>
      <div className="re-studio-grid">
        <div data-reveal>
          <p className="re-studio-kicker">The studio</p>
          <h2 className="re-studio-title">A Fort Lauderdale practice, since 2014.</h2>
          <div className="re-studio-copy">
            <p>Royal Eagle is a senior-level studio for thoughtful WordPress and custom websites. We work with South Florida businesses that want a site that holds up — and a studio that stays in the work.</p>
            <p>The practice is based at 4440 Inverrary Blvd in Lauderhill, about eight minutes from the Sawgrass. Websites, WordPress, custom builds, marketing, and a little AI when it actually helps.</p>
            <p>When a project needs extra hands, we bring in senior specialists — and we say so. No invented leadership grid. No headcount costume.</p>
          </div>
          <div className="re-studio-founder">
            <EagleLine className="hx-eagle-founder"/>
            <div className="re-studio-founder-meta">
              Founded by Roy Bachar<br/>
              Fort Lauderdale, Florida
            </div>
          </div>
          <div className="re-studio-ctas">
            <a href="#quiz" className="btn btn-gold">Take the project quiz</a>
            <a href="tel:+17542334037" className="btn btn-ghost">754-233-4037</a>
          </div>
        </div>
        <div className="re-reviews">
          {GOOGLE_REVIEWS.map((q, i) => (
            <figure key={i} className="testi-card" data-reveal style={{ "--i": i }}>
              <div className="trust-stars">★★★★★</div>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="re-review-mark"><span className="re-review-check" aria-hidden="true">✓</span> Verified Google Review</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOBlock() {
  return (
    <section className="seo-block" aria-label="Service areas and details">
      <div className="seo-block-inner">
        <div>
          <h2>Web Design in Fort Lauderdale, FL</h2>
          <p>
            Royal Eagle is a <strong>web design and web development studio</strong> based at 4440 Inverrary Blvd in Lauderhill, FL. Since 2014 the studio has built <strong>custom websites, WordPress sites, and marketing</strong> for South Florida businesses. Rated 5.0 on Google.
          </p>
          <p>
            Every engagement is hands-on. It is a small practice on purpose.
          </p>
        </div>
        <div>
          <h2>What we actually ship</h2>
          <p>Based in Lauderhill. Working across Broward, Miami-Dade, and Palm Beach — without a city-page mill.</p>
          <ul>
            <li><a href="wordpress.html">WordPress web design</a></li>
            <li><a href="contractor-websites.html">Contractor websites</a></li>
            <li><a href="yacht-websites.html">Yacht websites</a></li>
            <li><a href="work.html">Selected work</a></li>
            <li><a href="contact.html">Book a conversation →</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeClose() {
  return (
    <section className="hx-close" aria-labelledby="hx-close-title">
      <div className="hx-close-inner" data-reveal>
        <div>
          <p className="hx-kicker">Let's talk</p>
          <h2 className="hx-close-title" id="hx-close-title">Book a <span className="hx-gold">conversation.</span></h2>
          <p className="hx-close-sub">A Fort Lauderdale studio, since 2014. Call <span className="hx-nowrap">754-233-4037</span> or send a note.</p>
          <div className="hx-close-ctas">
            <a href="tel:+17542334037" className="btn btn-gold hx-close-call" data-magnetic><PhoneIcon/><span>Call 754-233-4037</span></a>
            <a href="#quiz" className="btn btn-ghost">Take the project quiz</a>
          </div>
        </div>
        <EagleLine className="hx-eagle-close"/>
      </div>
    </section>
  );
}

// Vanilla effects layer: reveals, count-ups, cursor glow, magnetic CTA,
// pointer tilt, and a scroll progress rail. All transform/opacity only.
function HomeFX() {
  React.useEffect(() => {
    const doc = document.documentElement;
    const rm = HX_RM();
    const fine = HX_FINE();
    const off = [];
    document.body.classList.add("is-home");
    off.push(() => document.body.classList.remove("is-home"));

    // Scroll reveals (+ eagle line draw) with stagger via --i.
    const reveal = Array.from(document.querySelectorAll(".home-x [data-reveal]"));
    const counters = Array.from(document.querySelectorAll(".home-x [data-count-to]"));
    const runCount = (el) => {
      const to = Number(el.dataset.countTo), from = Number(el.dataset.countFrom || 0), pad = Number(el.dataset.pad || 0);
      const fmt = (v) => String(Math.round(v)).padStart(pad, "0");
      const t0 = performance.now(), dur = 1300;
      const step = (now) => {
        const k = Math.min(1, (now - t0) / dur);
        el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (rm || !("IntersectionObserver" in window)) {
      reveal.forEach(el => el.classList.add("is-in"));
    } else {
      counters.forEach(el => { el.textContent = String(Number(el.dataset.countFrom || 0)).padStart(Number(el.dataset.pad || 0), "0"); });
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          const el = en.target;
          io.unobserve(el);
          if (el.hasAttribute("data-count-to")) runCount(el); else el.classList.add("is-in");
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      reveal.forEach(el => io.observe(el));
      counters.forEach(el => io.observe(el));
      off.push(() => io.disconnect());
    }

    // Scroll progress rail (desktop CSS only shows it).
    const fill = document.querySelector(".hx-rail-fill");
    let sRaf = 0;
    const onScroll = () => {
      if (sRaf) return;
      sRaf = requestAnimationFrame(() => {
        sRaf = 0;
        const max = doc.scrollHeight - doc.clientHeight;
        if (fill) fill.style.transform = `scaleY(${max > 0 ? Math.min(1, doc.scrollTop / max) : 0})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    off.push(() => window.removeEventListener("scroll", onScroll));

    if (!fine || rm) return () => off.forEach(f => f());

    // Soft gold cursor glow.
    const glow = document.createElement("div");
    glow.className = "hx-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);
    let gx = innerWidth / 2, gy = innerHeight / 3, tx = gx, ty = gy, gRaf = 0;
    const gLoop = () => {
      gx += (tx - gx) * 0.14; gy += (ty - gy) * 0.14;
      glow.style.transform = `translate3d(${gx.toFixed(1)}px, ${gy.toFixed(1)}px, 0)`;
      gRaf = Math.abs(tx - gx) + Math.abs(ty - gy) > 0.4 ? requestAnimationFrame(gLoop) : 0;
    };

    // Magnetic CTAs (uses the independent `translate` property so CSS hover transforms still work).
    const mags = Array.from(document.querySelectorAll(".home-x [data-magnetic]")).map(el => ({ el, x: 0, y: 0, tx: 0, ty: 0, raf: 0 }));
    const magTick = (m) => {
      m.x += (m.tx - m.x) * 0.2; m.y += (m.ty - m.y) * 0.2;
      m.el.style.translate = `${m.x.toFixed(2)}px ${m.y.toFixed(2)}px`;
      m.raf = Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) > 0.1 ? requestAnimationFrame(() => magTick(m)) : 0;
    };

    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      glow.classList.add("is-on");
      if (!gRaf) gRaf = requestAnimationFrame(gLoop);
      mags.forEach(m => {
        const r = m.el.getBoundingClientRect();
        const dx = e.clientX - (r.left - m.x + r.width / 2), dy = e.clientY - (r.top - m.y + r.height / 2);
        const near = Math.abs(dx) < r.width / 2 + 48 && Math.abs(dy) < r.height / 2 + 48;
        m.tx = near ? dx * 0.16 : 0; m.ty = near ? dy * 0.28 : 0;
        if (!m.raf) m.raf = requestAnimationFrame(() => magTick(m));
      });
    };
    const onLeave = () => { glow.classList.remove("is-on"); mags.forEach(m => { m.tx = 0; m.ty = 0; if (!m.raf) m.raf = requestAnimationFrame(() => magTick(m)); }); };
    window.addEventListener("pointermove", onMove, { passive: true });
    doc.addEventListener("pointerleave", onLeave);
    off.push(() => { window.removeEventListener("pointermove", onMove); doc.removeEventListener("pointerleave", onLeave); glow.remove(); });

    // Pointer-following 3D tilt on work cards.
    document.querySelectorAll(".home-x [data-tilt]").forEach(card => {
      const s = { rx: 0, ry: 0, trx: 0, try_: 0, gx: 50, gy: 50, raf: 0 };
      const tick = () => {
        s.rx += (s.trx - s.rx) * 0.16; s.ry += (s.try_ - s.ry) * 0.16;
        card.style.setProperty("--rx", `${s.rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${s.ry.toFixed(2)}deg`);
        card.style.setProperty("--gx", `${s.gx.toFixed(1)}%`);
        card.style.setProperty("--gy", `${s.gy.toFixed(1)}%`);
        s.raf = Math.abs(s.trx - s.rx) + Math.abs(s.try_ - s.ry) > 0.02 ? requestAnimationFrame(tick) : 0;
      };
      const move = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        s.trx = (0.5 - py) * 7; s.try_ = (px - 0.5) * 9; s.gx = px * 100; s.gy = py * 100;
        if (!s.raf) s.raf = requestAnimationFrame(tick);
      };
      const leave = () => { s.trx = 0; s.try_ = 0; if (!s.raf) s.raf = requestAnimationFrame(tick); };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      off.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); });
    });

    return () => off.forEach(f => f());
  }, []);
  return <div className="hx-rail" aria-hidden="true"><span className="hx-rail-fill"></span></div>;
}

function HomePage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "Web Design in Fort Lauderdale, FL | Royal Eagle",
      description: "Websites that work. Built for South Florida. A Fort Lauderdale studio, since 2014. WordPress, custom sites, marketing. Rated 5.0 on Google. 754-233-4037.",
      canonical: "/",
      keywords: "web design fort lauderdale, wordpress fort lauderdale, royal eagle",
      breadcrumbs: [{ name: "Home" }]
    });
  }, []);
  return (
    <PageShell active="home">
      <div className="home-x">
        <Hero/>
        <Marquee/>
        <SelectWork/>
        <Stats/>
        <ProjectQuiz/>
        <Studio/>
        <SEOBlock/>
        <HomeClose/>
        <HomeFX/>
      </div>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>);
