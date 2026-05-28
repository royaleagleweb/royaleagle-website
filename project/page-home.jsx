// HOME page — cinematic, premium agency

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return (
    <div ref={ref} className={className} style={{
      opacity: seen ? 1 : 0,
      transform: seen ? 'translateY(0)' : 'translateY(12px)',
      transition: `opacity 0.7s ${delay}s ease-out, transform 0.7s ${delay}s ease-out`,
    }}>{children}</div>
  );
}

// Smoothly tick a number from 0 to target when in viewport.
function Counter({ to, prefix = "", suffix = "", duration = 1400, decimals = 0 }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

// Uniform white line-icon set used across the hero and quiz
const SFIcon = {
  star: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.5 7h7.4l-6 4.4 2.3 7.1L12 16l-6.2 4.5 2.3-7.1-6-4.4h7.4z"/></svg>,
  google: <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M21 12.3c0-.7-.06-1.4-.18-2H12v4h5.04c-.22 1.16-.88 2.14-1.88 2.8v2.32h3.02c1.78-1.62 2.82-4 2.82-6.96z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 21c2.52 0 4.64-.84 6.18-2.28l-3.02-2.34c-.84.56-1.92.9-3.16.9-2.42 0-4.48-1.64-5.22-3.84H3.66v2.4A8.99 8.99 0 0 0 12 21z" stroke="currentColor" strokeWidth="1.5"/><path d="M6.78 13.44a5.4 5.4 0 0 1 0-2.88V8.16H3.66a8.99 8.99 0 0 0 0 8.08l3.12-2.4z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 5.88c1.36 0 2.58.46 3.54 1.38l2.66-2.66A8.99 8.99 0 0 0 12 3a8.99 8.99 0 0 0-8.34 5.16l3.12 2.4C7.52 7.52 9.58 5.88 12 5.88z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  pin: <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 22s-7-6-7-13a7 7 0 0 1 14 0c0 7-7 13-7 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  // Service finder line icons (replace emojis)
  web: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M6.5 7h.01M9 7h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  refresh: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  leads: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 17l5-5 4 3 8-8M16 7h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  shop: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M5 7h14l-1.5 12h-11z M8 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ai: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="5" y="8" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8V4M9 12h.01M15 12h.01M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  question: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  flame: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 2-3 2-5 3 1 2 4 2 4S12 7 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  target: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
  cal: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M4 10h16M9 3v4M15 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  compass: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M15 9l-2 4-4 2 2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  dollar1: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 4v16M16 8h-5a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  dollar2: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v10M15 10h-4a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  dollar3: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  vault: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 9V8M12 16v-1M15 12h1M8 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  chat: <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4a8 8 0 1 1 16-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
};

// Animated word rotator for the hero headline
function WordRotator({ words, interval = 2200 }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="word-rotator">
      {words.map((w, k) => (
        <span key={k} className={`wr-word ${k === i ? 'is-active' : ''}`} style={{ animationDelay: `${k * 0.08}s` }}>
          <em>{w}</em>
        </span>
      ))}
    </span>
  );
}

// Cursor spotlight that follows the mouse over the hero
function CursorSpotlight() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    let tx = 50, ty = 50, cx = 50, cy = 50, raf;
    const onMove = e => {
      const r = parent.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.background = `radial-gradient(ellipse 600px 500px at ${cx}% ${cy}%, color-mix(in srgb, var(--gold) 22%, transparent), transparent 70%)`;
      raf = requestAnimationFrame(tick);
    };
    parent.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener('mousemove', onMove);
    };
  }, []);
  return <div ref={ref} className="cursor-spotlight" aria-hidden="true"></div>;
}

// Parallax-on-scroll wrapper for the hero background
function useParallax(ratio = 0.3) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate3d(0, ${window.scrollY * ratio}px, 0) scale(1.08)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ratio]);
  return ref;
}

// Live activity ticker — cycles through "right now" updates
function LiveTicker() {
  const lines = [
    { icon: '🟢', t: '6 active clients online right now' },
    { icon: '✦', t: 'Just shipped: AI Strategy for IntegraMed Orthopedics' },
    { icon: '⚡', t: 'New WordPress build kickoff: Boca Raton dental group' },
    { icon: '★', t: 'Latest 5-star Google review · 2 days ago' },
    { icon: '◐', t: 'Open delivery slots: 2 in July, 3 in August' },
    { icon: '◉', t: 'Avg first reply this week: 11 minutes' },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % lines.length), 3200);
    return () => clearInterval(t);
  }, [lines.length]);
  return (
    <div className="live-ticker" aria-live="polite">
      <div className="lt-pulse"></div>
      <div className="lt-track">
        {lines.map((l, k) => (
          <div key={k} className={`lt-line ${k === i ? 'is-active' : ''}`}>
            <span className="lt-i">{l.icon}</span>
            <span className="lt-t">{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const bgRef = useParallax(0.25);
  return (
    <section className="hero hero-luxe hero-sf">
      <div className="hero-sf-bg">
        <div ref={bgRef} className="hero-sf-bg-inner">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=90" alt="South Florida beach aerial view" loading="eager"/>
        </div>
        <div className="hero-sf-overlay"></div>
        <CursorSpotlight/>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-luxe-inner hero-luxe-inner-sf">
        <div className="hero-luxe-left">
          <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="kicker kicker-link kicker-light">
            <span className="kicker-stars">{SFIcon.star}{SFIcon.star}{SFIcon.star}{SFIcon.star}{SFIcon.star}</span>
            <span>5.0 on Google · Fort Lauderdale, FL</span>
          </a>
          <h1 className="hero-luxe-title hero-luxe-title-rot">
            <span className="hlt-line">Timeless <em>Craft.</em></span>
            <span className="hlt-line">Modern{'\u00A0'}<WordRotator words={["Legacy.", "Websites.", "Campaigns.", "AI Tools.", "Growth."]}/></span>
          </h1>
          <p className="hero-luxe-sub">
            Hands-on web design, marketing, and a little AI when it actually helps. Based on Inverrary Blvd in Lauderhill — about eight minutes from the Sawgrass.
          </p>
          <div className="hero-luxe-ctas">
            <a href="contact.html" className="btn btn-gold btn-lg btn-shimmer">
              Let's chat — no pitch deck
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="tel:+17542334037" className="hero-luxe-secondary hero-luxe-secondary-light">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              754-233-4037 (we answer)
            </a>
          </div>
          <LiveTicker/>
          <div className="hero-luxe-badges hero-luxe-badges-light">
            <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="hlb hlb-link">
              <div className="hlb-icon">{SFIcon.star}</div>
              <div className="hlb-t">5.0 / 5</div>
              <div className="hlb-s">Google verified →</div>
            </a>
            <div className="hlb-sep"></div>
            <div className="hlb">
              <div className="hlb-icon">{SFIcon.google}</div>
              <div className="hlb-t">Google Partner</div>
              <div className="hlb-s">Ads certified</div>
            </div>
            <div className="hlb-sep"></div>
            <div className="hlb">
              <div className="hlb-icon">{SFIcon.pin}</div>
              <div className="hlb-t">Fort Lauderdale</div>
              <div className="hlb-s">4440 Inverrary Blvd</div>
            </div>
          </div>
        </div>
        <div className="hero-luxe-right hero-luxe-right-sf">
          <TiltCard max={4} className="hero-finder-tilt"><ServiceFinder/></TiltCard>
        </div>
      </div>
    </section>
  );
}

function SignatureCollections() {
  const items = [
    { tag: "New", name: "AI Websites", sub: "Personalized & AI-powered", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=90", href: "service.html?s=ai-websites" },
    { tag: "Bestseller", name: "WordPress Builds", sub: "Custom themes & maintenance", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=90", href: "service.html?s=wordpress-elementor" },
    { tag: "Signature", name: "Brand & Design", sub: "Identity systems + UI", img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=900&q=90", href: "service.html?s=design" },
    { tag: "New", name: "AI Strategy", sub: "Where AI moves the needle", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=90", href: "service.html?s=ai-strategy" },
  ];
  return (
    <section className="section sig-section sig-section-light">
      <div className="sig-canvas-bg">
        <InteractiveDotGrid/>
      </div>
      <div className="sig-section-inner">
        <div className="sig-head">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>Signature work</div>
            <h2 className="sig-h">A handful of things we do<br/>better than just about anyone.</h2>
          </div>
          <a href="services.html" className="sig-all">View all services →</a>
        </div>
        <div className="sig-grid">
          {items.map((it, i) => (
            <a key={i} href={it.href} className="sig-card">
              <figure className="sig-img">
                <img src={it.img} alt={it.name} loading="lazy"/>
                {it.tag && <span className="sig-tag">{it.tag}</span>}
              </figure>
              <div className="sig-body">
                <h3 className="sig-name">{it.name}</h3>
                <div className="sig-foot">
                  <span className="sig-sub">{it.sub}</span>
                  <span className="sig-plus" aria-label="View details">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigNumbers() {
  const items = [
    { n: 12, suffix: " yrs", l: "On Inverrary Blvd", sub: "Same office, same phone number, same Roy answering it" },
    { n: 100, suffix: "%", l: "Of inquiries answered by a human", sub: "No chatbots, no overseas BPO" },
    { n: 1, suffix: " business day", l: "Reply window we promise", sub: "Most replies land inside two hours" },
    { n: 5, decimals: 1, suffix: " / 5", l: "Google rating", sub: "Every review verified — read them yourself" },
  ];
  return (
    <section className="section bignum-section">
      <div className="bn-head">
        <div className="kicker"><span className="kicker-dot"></span>By the numbers</div>
        <h2 className="bn-title">A small shop.<br/>On <em>purpose.</em></h2>
      </div>
      <div className="bn-grid">
        {items.map((it, i) => (
          <FadeIn key={i} delay={i * 0.05} className="bn-cell">
            <div className="bn-n">
              <Counter to={it.n} prefix={it.prefix} suffix={it.suffix} decimals={it.decimals}/>
            </div>
            <div className="bn-l">{it.l}</div>
            <div className="bn-s">{it.sub}</div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ClientStrip() {
  const logos = ["IntegraMed", "SEEQ", "Sea Walk'n", "DLE Lawyers", "United Nursery", "Big Lu", "Pristinit", "Akita Partners", "Coastal Realty", "Palmetto Co.", "Atlantic Bank", "Sunbelt"];
  return (
    <section className="client-strip">
      <div className="cs-label">
        <span className="kicker-dot"></span>
        Trusted by 800+ ambitious businesses across South Florida
      </div>
      <div className="cs-grid">
        {logos.map((l, i) => <div key={i} className="cs-logo">{l}</div>)}
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    {
      n: "01", t: "Web Design & Development",
      d: "Custom WordPress, headless, and bespoke builds. Every site we ship is responsive, accessible (WCAG 2.1 AA), and performance-audited before launch.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85",
      pts: ["Custom WordPress themes & plugins", "Headless CMS architecture", "E-commerce (WooCommerce, Shopify)", "Performance & accessibility audits"]
    },
    {
      n: "02", t: "Paid Media & Search",
      d: "Google Ads, Meta Ads, LinkedIn, and programmatic. Certified specialists who treat your budget like our own — every dollar accounted for, every campaign reported on.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
      pts: ["Google Ads Premier Partner team", "Meta Business Partner agency", "Conversion tracking & attribution", "Monthly performance reviews"]
    },
    {
      n: "03", t: "WordPress Maintenance",
      d: "24/7 monitoring, automated backups, security hardening, and proactive updates. The unglamorous work that keeps your site fast, safe, and online.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=85",
      pts: ["Automated daily backups", "Security firewall & malware scans", "Core, theme & plugin updates", "Uptime monitoring & response"]
    },
    {
      n: "04", t: "Automation & Data",
      d: "HubSpot, Salesforce, Zapier, custom integrations. We connect the systems that should already talk to each other — so your team stops doing work computers should do.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85",
      pts: ["HubSpot CRM implementations", "Marketing automation workflows", "Custom API integrations", "Reporting dashboards"]
    },
  ];
  return (
    <section className="section caps caps-v2">
      <div className="section-head section-head-row">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Capabilities</div>
          <h2 className="section-title">A full-service partner,<br/>not a single-discipline shop.</h2>
        </div>
        <p className="meth-aside">Most agencies do one thing well. Our clients hire us because we connect design, development, and marketing into one accountable team — with one project manager and one invoice.</p>
      </div>
      <div className="caps-grid caps-grid-v2">
        {caps.map((c, i) => (
          <FadeIn key={i} delay={(i % 2) * 0.08} className="cap-card cap-card-v2">
            <div className="cap-img cap-img-v2">
              <img src={c.img} alt={c.t} loading="lazy"/>
              <div className="cap-n">{c.n}</div>
            </div>
            <div className="cap-body">
              <h3 className="cap-t">{c.t}</h3>
              <p className="cap-d">{c.d}</p>
              <ul className="cap-pts">
                {c.pts.map(p => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="services.html" className="cap-link">Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FeaturedCS() {
  return (
    <section className="featured-cs">
      <div className="fcs-bg">
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1800&q=85" alt="IntegraMed Orthopedics case study" loading="lazy"/>
        <div className="fcs-overlay"></div>
      </div>
      <div className="fcs-inner">
        <div className="fcs-left">
          <div className="kicker fcs-kicker"><span className="kicker-dot"></span>Featured case study · 2026</div>
          <h2 className="fcs-title">IntegraMed Orthopedics<br/><em>Spine & Wellness</em></h2>
          <p className="fcs-lede">South Florida's largest orthopedic and spine wellness practice needed a digital rebuild that could compete with hospital systems. We delivered a multilingual WordPress build, a content engine targeting 40+ procedure keywords, and a paid-search program that now drives 60% of new-patient bookings.</p>
          <div className="fcs-metas">
            <span className="fcs-meta">Healthcare</span>
            <span className="fcs-meta">WordPress</span>
            <span className="fcs-meta">Local SEO</span>
            <span className="fcs-meta">Paid Search</span>
            <span className="fcs-meta">Photography</span>
          </div>
          <a href="work.html" className="btn btn-gold">Read the full case study →</a>
        </div>
        <div className="fcs-right">
          <div className="fcs-stat">
            <div className="fcs-n"><Counter to={184} suffix="%" prefix="+"/></div>
            <div className="fcs-l">Organic traffic in 6 months</div>
          </div>
          <div className="fcs-stat">
            <div className="fcs-n">2.1s <span className="fcs-arr">→</span> 0.8s</div>
            <div className="fcs-l">Largest Contentful Paint</div>
          </div>
          <div className="fcs-stat">
            <div className="fcs-n"><Counter to={3.4} decimals={1} suffix="x"/></div>
            <div className="fcs-l">Marketing-qualified leads</div>
          </div>
          <div className="fcs-stat">
            <div className="fcs-n"><Counter to={184} suffix="% MRR"/></div>
            <div className="fcs-l">From paid search, month 6</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const phases = [
    { n: "01", t: "Understand", d: "We start by getting to know you. Two-week diagnostic across your site, analytics, ad accounts, and competitive landscape. Deliverable: a written audit with prioritized opportunities.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=85" },
    { n: "02", t: "Assemble", d: "A specialized team tailored to your project — design, engineering, UX, SEO, and brand. Senior practitioners, not subcontractors. One project manager, one accountable owner.", img: "https://images.unsplash.com/photo-1551836022-deb4ffc60277?w=600&q=85" },
    { n: "03", t: "Define", d: "We translate the audit into a 90-day plan with budgets, milestones, owner assignments, and forecasted KPIs. Reviewed and signed off before any production work begins.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=85" },
    { n: "04", t: "Execute", d: "Strategy meets craft. Thoughtful design and responsive development. Weekly check-ins, Friday demos, no surprises at handoff. Every page audited for performance and accessibility.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=85" },
    { n: "05", t: "Support", d: "Launch with monitoring on day one, 30-day stabilization window included. Then ongoing optimization — quarterly experiments, continuous improvements, an average 32% YoY lift on key metrics.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=85" },
  ];
  return (
    <section className="section methodology meth-v2">
      <div className="meth-head">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Methodology</div>
          <h2 className="section-title">A predictable process<br/>for unpredictable problems.</h2>
        </div>
        <p className="meth-aside">Five phases refined across 800+ engagements. Predictable timeline, budget, and communication — the unglamorous discipline that makes ambitious projects actually ship.</p>
      </div>
      <div className="meth-v2-list">
        {phases.map((p, i) => (
          <FadeIn key={i} className="meth-v2-row">
            <div className="meth-v2-img">
              <img src={p.img} alt={p.t} loading="lazy"/>
              <div className="meth-v2-n">{p.n}</div>
            </div>
            <div className="meth-v2-body">
              <h3 className="meth-v2-t">{p.t}</h3>
              <p className="meth-v2-d">{p.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Tiny inline monograms — line-art icons for each industry
const IndustryMark = ({ kind }) => {
  const marks = {
    healthcare: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M14 5h4v9h9v4h-9v9h-4v-9H5v-4h9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    realestate: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M5 14L16 5l11 9v12a2 2 0 0 1-2 2h-6v-9h-6v9H7a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    professional: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M6 11h20v15H6z M11 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3 M6 17h20" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    hospitality: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M8 14a8 8 0 0 1 16 0v1a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z M6 22h20l-2 5H8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    saas: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M11 11l-5 5 5 5 M21 11l5 5-5 5 M18 9l-4 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    nonprofit: <svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="M16 27S4 19 4 12a6 6 0 0 1 12-3 6 6 0 0 1 12 3c0 7-12 15-12 15z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  };
  return marks[kind] || marks.professional;
};

function Industries() {
  const ind = [
    { n: "Healthcare & Wellness", ex: "Concierge medicine, med spas, dental, mental health", kind: "healthcare", num: "I" },
    { n: "Real Estate", ex: "Luxury brokerages, agents, property management", kind: "realestate", num: "II" },
    { n: "Professional Services", ex: "Law firms, accounting, financial advisory", kind: "professional", num: "III" },
    { n: "Hospitality & Tourism", ex: "Hotels, restaurants, charter, members' clubs", kind: "hospitality", num: "IV" },
    { n: "SaaS & Technology", ex: "B2B SaaS, vertical platforms, agencies", kind: "saas", num: "V" },
    { n: "Non-profit & Foundations", ex: "Foundations, family offices, cultural institutions", kind: "nonprofit", num: "VI" },
  ];
  return (
    <section className="section industries industries-lux">
      <div className="section-head">
        <div className="kicker"><span className="kicker-dot"></span>Industries we serve</div>
        <h2 className="section-title">Specialists,<br/>not <em>generalists.</em></h2>
        <p className="section-sub">A decade of pattern recognition across six categories where we do our best work. We know the buyer journey, the competitive dynamics, and the unspoken expectations of each.</p>
      </div>
      <div className="ind-grid ind-grid-lux">
        {ind.map((it, k) => (
          <a key={k} href="contact.html" className="ind-card ind-card-lux">
            <div className="ind-lux-top">
              <span className="ind-lux-num">{it.num}</span>
              <span className="ind-lux-mark"><IndustryMark kind={it.kind}/></span>
            </div>
            <div className="ind-lux-rule"></div>
            <div className="ind-lux-body">
              <h3 className="ind-lux-n">{it.n}</h3>
              <p className="ind-lux-ex">{it.ex}</p>
            </div>
            <div className="ind-lux-foot">
              <span className="ind-lux-cta">Discuss your project</span>
              <span className="ind-lux-arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { n: "Marcus Reyes", r: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=85" },
    { n: "Priya Sharma", r: "Head of Engineering", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=85" },
    { n: "Diego Alvarez", r: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85" },
    { n: "Elena Vargas", r: "Director, Performance", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=85" },
    { n: "Jordan Thompson", r: "Lead WordPress Engineer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=85" },
    { n: "Sam Kowalski", r: "Client Services Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=85" },
  ];
  return (
    <section className="section team-section team-section-v2">
      <div className="meth-head">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Leadership</div>
          <h2 className="section-title">A senior team.<br/>Every project, every day.</h2>
        </div>
        <p className="meth-aside">No junior hand-offs, no offshore subcontracting. The same people you meet on the pitch are the ones doing the work.</p>
      </div>
      <div className="team-photo-grid team-photo-grid-v2">
        {team.map((t, i) => (
          <div key={i} className="team-pc team-pc-v2">
            <div className="team-photo">
              <img src={t.img} alt={t.n} loading="lazy"/>
              <div className="team-photo-overlay"></div>
            </div>
            <div className="team-pc-info">
              <div className="team-pc-n">{t.n}</div>
              <div className="team-pc-r">{t.r}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PressTesti() {
  const featured = GOOGLE_REVIEWS[0];
  const others = GOOGLE_REVIEWS.slice(1);
  return (
    <section className="section press-testi press-testi-v2">
      <div className="section-head section-head-row">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>5.0 ★★★★★ on Google</div>
          <h2 className="section-title">What our clients<br/>actually say about us.</h2>
        </div>
        <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="google-badge">
          <div className="gb-icon">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          </div>
          <div>
            <div className="gb-rating">★★★★★ 5.0</div>
            <div className="gb-label">See all reviews on Google →</div>
          </div>
        </a>
      </div>
      <div className="pt-grid pt-grid-v2">
        <figure className="pt-feature">
          <div className="pt-feature-bg">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85" alt=""/>
            <div className="pt-feature-overlay"></div>
          </div>
          <div className="pt-feature-content">
            <div className="trust-stars">★★★★★</div>
            <blockquote>"{featured.q}"</blockquote>
            <figcaption>
              <div className="testi-google-mark">G</div>
              <div>
                <div className="testi-a">{featured.a}</div>
                <div className="testi-r">{featured.r}</div>
              </div>
            </figcaption>
          </div>
        </figure>
        <div className="pt-stack">
          {others.map((q, i) => (
            <figure key={i} className="pt-card">
              <div className="trust-stars">★★★★★</div>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <div className="testi-google-mark">G</div>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="testi-r">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// SEO content block — keyword-rich footer with local terms for "web design Fort Lauderdale"
function SEOBlock() {
  return (
    <section className="seo-block" aria-label="Service areas and details">
      <div className="seo-block-inner">
        <div>
          <h2>Web Design in Fort Lauderdale, FL</h2>
          <p>
            Royal Eagle is a <strong>web design and web development studio</strong> based at 4440 Inverrary Blvd in Lauderhill, FL — eight minutes from the Sawgrass Expressway and twenty from downtown Fort Lauderdale. Since 2014 we've built <strong>custom websites, WordPress sites, Shopify stores, and digital marketing engines</strong> for small businesses, professional service firms, and growing brands across South Florida.
          </p>
          <p>
            Every engagement is hands-on. Roy answers the phone, sits on the discovery calls, reviews every design, and stays in the work through launch. We're a small team on purpose — six senior practitioners covering web design, WordPress development, SEO, PPC, brand, and AI consultation.
          </p>
          <p>
            <strong>Looking for "web design near me" in Fort Lauderdale?</strong> Most of our clients are within 30 minutes of our office. We work on-site for kickoffs, photography, and team training when it makes sense — and remotely the rest of the time.
          </p>
        </div>
        <div>
          <h2>South Florida Service Areas</h2>
          <p>
            We serve clients across <strong>Broward, Miami-Dade, and Palm Beach counties</strong> — over 100 cities in total. Each market has its own competitive dynamics, buyer expectations, and search behavior. We tune every engagement to the specific city, neighborhood, and audience.
          </p>
          <ul>
            <li><a href="city.html?c=fort-lauderdale">Web Design Fort Lauderdale</a></li>
            <li><a href="city.html?c=miami">Web Design Miami</a></li>
            <li><a href="city.html?c=hollywood">Web Design Hollywood</a></li>
            <li><a href="city.html?c=pembroke-pines">Web Design Pembroke Pines</a></li>
            <li><a href="city.html?c=plantation">Web Design Plantation</a></li>
            <li><a href="city.html?c=coral-springs">Web Design Coral Springs</a></li>
            <li><a href="city.html?c=boca-raton">Web Design Boca Raton</a></li>
            <li><a href="city.html?c=west-palm-beach">Web Design West Palm Beach</a></li>
            <li><a href="city.html?c=miami-beach">Web Design Miami Beach</a></li>
            <li><a href="city.html?c=coral-gables">Web Design Coral Gables</a></li>
            <li><a href="city.html?c=aventura">Web Design Aventura</a></li>
            <li><a href="city.html?c=delray-beach">Web Design Delray Beach</a></li>
          </ul>
          <p style={{ marginTop: 24 }}>
            <a href="locations.html" className="link-arrow">See all 104 South Florida cities we serve →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "Web Design in Fort Lauderdale, FL | Royal Eagle Web Design & Marketing",
      description: "Hands-on web design, web development, and digital marketing for South Florida businesses. Fort Lauderdale-area studio, founded 2014. WordPress, custom builds, SEO, PPC, and AI. Rated 5.0 on Google.",
      canonical: "index.html",
      keywords: "web design fort lauderdale, web development fort lauderdale, wordpress fort lauderdale, digital marketing fort lauderdale, seo fort lauderdale, ppc fort lauderdale",
      breadcrumbs: [{ name: "Home" }]
    });
  }, []);
  return (
    <PageShell active="home">
      <Hero/>
      <SignatureCollections/>
      <SocialProofFeed/>
      <CTAStrip
        variant="warm"
        heading="Not sure where to start? Most folks aren't."
        sub="Twenty minutes on the phone with Roy usually sorts it out. If we're not the right fit we'll point you to someone who is — happens roughly once a month."
        primary="Book the 20-min call"
        secondary="Browse services first"
        secondaryHref="services.html"
      />
      <BigNumbers/>
      <Capabilities/>
      <CTAStrip
        variant="urgent"
        heading="Roy's calendar — June 2026"
        sub="Two open kickoff slots this month (one mid-June, one the week of the 22nd). After that the next opening is mid-July."
        primary="Grab a slot"
        secondary="See pricing"
      />
      <FeaturedCS/>
      <Methodology/>
      <ComparisonTable/>
      <CTAStrip
        variant="quiet"
        heading="One last thing before you go —"
        sub="If you've read this far, you're probably the kind of client we'd love to work with. Send a note, even if it's just to say hello."
        primary="Say hello"
      />
      <Industries/>
      <PressTesti/>
      <SEOBlock/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>);
