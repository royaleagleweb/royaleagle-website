// Shared chrome — mega-menu nav + sitemap footer + page shell

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "obsidian"
}/*EDITMODE-END*/;

const PALETTES = {
  light: { bg: "#FAF7F0", bg2: "#FFFFFF", surface: "#F2EEDF", ink: "#1A1410", inkDim: "#6B5B3F", gold: "#B8893A", goldHi: "#D4A845", accent: "#B8893A", line: "rgba(26, 20, 16, 0.10)" },
  midnight: { bg: "#07080B", bg2: "#0C0D11", surface: "#121318", ink: "#F4F1EA", inkDim: "#A8A59C", gold: "#E8B84A", goldHi: "#F2C85C", accent: "#E8B84A", line: "rgba(232,184,74,0.18)" },
  obsidian: { bg: "#07080B", bg2: "#0C0D11", surface: "#121318", ink: "#F4F1EA", inkDim: "#A8A59C", gold: "#E8B84A", goldHi: "#F2C85C", accent: "#E8B84A", line: "rgba(232,184,74,0.18)" },
  imperial: { bg: "#07080B", bg2: "#0C0D11", surface: "#121318", ink: "#F4F1EA", inkDim: "#A8A59C", gold: "#E8B84A", goldHi: "#F2C85C", accent: "#E8B84A", line: "rgba(232,184,74,0.18)" },
};

function applyPalette(p, name) {
  const r = document.documentElement;
  if (name) r.setAttribute('data-pal', name);
  Object.entries({ '--bg': p.bg, '--bg2': p.bg2, '--surface': p.surface, '--ink': p.ink, '--ink-dim': p.inkDim, '--gold': p.gold, '--gold-hi': p.goldHi, '--accent': p.accent, '--line': p.line }).forEach(([k, v]) => r.style.setProperty(k, v));
}

const EagleCrest = ({ size = 280, glow = true }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} style={{ filter: glow ? `drop-shadow(0 0 40px var(--gold))` : 'none' }}>
    <defs><linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--gold-hi)"/><stop offset="100%" stopColor="var(--gold)"/></linearGradient></defs>
    <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4"/>
    <circle cx="100" cy="100" r="86" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.3"/>
    <g fill="url(#goldGrad)">
      <path d="M100 38 L94 48 L88 46 L92 54 L86 58 L96 62 L100 70 L104 62 L114 58 L108 54 L112 46 L106 48 Z"/>
      <path d="M100 70 L92 82 L96 110 L100 130 L104 110 L108 82 Z"/>
      <path d="M92 82 L60 70 L40 80 L36 96 L52 92 L46 106 L62 100 L58 116 L74 108 L72 122 L88 112 L96 110 Z" opacity="0.95"/>
      <path d="M108 82 L140 70 L160 80 L164 96 L148 92 L154 106 L138 100 L142 116 L126 108 L128 122 L112 112 L104 110 Z" opacity="0.95"/>
      <path d="M96 130 L88 154 L100 146 L112 154 L104 130 Z"/>
    </g>
  </svg>
);

const EagleMark = () => (
  <svg viewBox="0 0 40 40" width="32" height="32">
    <g fill="var(--gold)">
      <path d="M20 6 L17 11 L22 12 L20 16 L25 17 L20 22 L26 21 L24 26 L20 25 L16 26 L14 21 L20 22 L15 17 L20 16 L18 12 L23 11 Z" transform="scale(1.2) translate(-3 -2)"/>
    </g>
  </svg>
);

const NAV_LINKS = [
  { t: "Work", h: "work.html", keys: ["work", "case-studies", "portfolio"] },
  { t: "Services", h: "services.html", keys: ["services", "service"] },
  { t: "About", h: "about.html", keys: ["about", "our-story", "team"] },
  { t: "Contact", h: "contact.html", keys: ["contact"] },
];

function Nav({ active }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("nav-lock", open);
    return () => document.body.classList.remove("nav-lock");
  }, [open]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav-inner">
          <a href="index.html" className="brand">
            <EagleMark/>
            <span className="brand-lockup">Royal Eagle</span>
          </a>
          <div className="site-nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.t} href={l.h} className={l.keys.includes(active) ? "is-active" : ""}>{l.t}</a>
            ))}
          </div>
          <a href="tel:+17542334037" className="site-nav-cta">Call Roy</a>
          <button
            type="button"
            className={`nav-burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span></span>
          </button>
        </div>
      </nav>
      <div className={`nav-drawer ${open ? "is-open" : ""}`} hidden={!open}>
        {NAV_LINKS.map(l => (
          <a key={l.t} href={l.h} className={l.keys.includes(active) ? "is-active" : ""} onClick={() => setOpen(false)}>{l.t}</a>
        ))}
        <a href="tel:+17542334037" className="nav-drawer-call">Call 754-233-4037</a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot-row">
        <span className="site-foot-ico" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s-7-6-7-13a7 7 0 0 1 14 0c0 7-7 13-7 13z" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6"/></svg>
        </span>
        <a href="https://share.google/idV4zjUrBGsrRtZ19" target="_blank" rel="noopener">4440 Inverrary Blvd</a>
        <span className="site-foot-dot">·</span>
        <span className="site-foot-ico" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6"/></svg>
        </span>
        <a href="tel:+17542334037">754-233-4037</a>
        <span className="site-foot-dot">·</span>
        <span className="site-foot-ico" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 8l9 6 9-6M3 7h18v10c0 1-.4 1.4-1.4 1.4H4.4C3.4 18.4 3 18 3 17z" stroke="currentColor" strokeWidth="1.6"/></svg>
        </span>
        <a href="mailto:roy@royaleagleweb.com">roy@royaleagleweb.com</a>
      </div>
      <div className="site-foot-legal">
        <span>© 2026 Royal Eagle · Mon–Fri 9–6 ET</span>
        <a href="legal.html?s=privacy">Privacy</a>
        <a href="legal.html?s=terms">Terms</a>
        <a href="sitemap.html">Sitemap</a>
      </div>
    </footer>
  );
}

function PageHero({ kicker, title, sub, eyebrow }) {
  return (
    <section className="page-hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="page-hero-inner">
        {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
        <div className="kicker"><span className="kicker-dot"></span>{kicker}</div>
        <h1 className="page-hero-title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className="page-hero-sub">{sub}</p>
      </div>
    </section>
  );
}

function CTA({ title = "Want to talk to Roy?", sub = "Call 754-233-4037 or send a note. He answers." } = {}) {
  return (
    <section className="section cta">
      <div className="cta-card">
        <div className="cta-eagle"><EagleCrest size={120} glow={false}/></div>
        <div className="kicker kicker-center"><span className="kicker-dot"></span>Let's build something worth bookmarking</div>
        <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p className="cta-sub">{sub}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <a href="contact.html" className="btn btn-gold">Book 20 minutes</a>
          <a href="tel:+17542334037" className="btn btn-ghost">Call Roy</a>
        </div>
      </div>
    </section>
  );
}

// Read ?s= query param helper
function getSlug() {
  const p = new URLSearchParams(window.location.search);
  return p.get('s') || p.get('slug') || '';
}

// ---- Floating "Talk to us" widget — appears on every page ----
function FloatingCTA() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!scrolled) return null;
  return (
    <div className={`fcta ${open ? 'fcta-open' : ''}`}>
      {open && (
        <div className="fcta-panel">
          <div className="fcta-head">
            <div className="fcta-avatars fcta-avatars-mark">
              <EagleMark/>
            </div>
            <button className="fcta-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="fcta-greeting">
            <strong>Hi, I'm Roy.</strong> I founded Royal Eagle in 2014. Ask anything — I answer the phone and the inbox.
          </div>
          <div className="fcta-actions">
            <a href="tel:+17542334037" className="fcta-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 5c0 9.4 6.6 16 16 16 1.5 0 2-.7 2-2v-3c0-.6-.4-1-1-1l-3.5-.5c-.4 0-.8.2-1 .6L14 17c-3-1.4-5.6-4-7-7l1.9-1.5c.4-.2.6-.6.6-1L9 4c0-.6-.4-1-1-1H5c-1.3 0-2 .5-2 2z" stroke="currentColor" strokeWidth="1.5"/></svg>
              <div>
                <div className="fcta-action-t">Call us</div>
                <div className="fcta-action-s">754-233-4037</div>
              </div>
            </a>
            <a href="mailto:roy@royaleagleweb.com" className="fcta-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 8l9 6 9-6M3 7h18v10c0 1-.4 1.4-1.4 1.4H4.4C3.4 18.4 3 18 3 17z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <div>
                <div className="fcta-action-t">Email Roy</div>
                <div className="fcta-action-s">roy@royaleagleweb.com</div>
              </div>
            </a>
            <a href="contact.html" className="fcta-action fcta-action-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <div>
                <div className="fcta-action-t">Send a project brief</div>
                <div className="fcta-action-s">Reply within 1 business day</div>
              </div>
            </a>
          </div>
          <div className="fcta-foot">
            <span className="kicker-dot"></span>
            <span>Roy replies himself — usually the same day</span>
          </div>
        </div>
      )}
      <button className="fcta-btn" onClick={() => setOpen(!open)} aria-label="Talk to us">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18l12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            <span>Talk to us</span>
            <span className="fcta-pulse"></span>
          </>
        )}
      </button>
    </div>
  );
}

// ---- Mid-page inline CTA strip — drop between sections ----
function CTAStrip({ variant = "default", heading, sub, primary, secondary, primaryHref = "contact.html", secondaryHref = "pricing.html" }) {
  return (
    <section className={`cta-strip cta-strip-${variant}`}>
      <div className="cta-strip-inner">
        <div className="cta-strip-text">
          <h3>{heading}</h3>
          {sub && <p>{sub}</p>}
        </div>
        <div className="cta-strip-actions">
          <a href={primaryHref} className="btn btn-gold">{primary || "Schedule a consultation"}</a>
          {secondary && <a href={secondaryHref} className="btn btn-ghost">{secondary}</a>}
        </div>
      </div>
    </section>
  );
}

// ---- Inline "ask a human" callout — drop mid-content in long pages ----
function MeetYourLead({ name = "Roy Bachar", role = "Founder", quote = "I answer the phone. Send a note and you'll hear back from me — not a chatbot — within one business day." }) {
  return (
    <aside className="meet-lead">
      <figure className="ml-photo ml-photo-mark">
        <EagleMark/>
      </figure>
      <div className="ml-body">
        <div className="kicker"><span className="kicker-dot"></span>Skip the form — talk to a human</div>
        <p className="ml-quote">"{quote}"</p>
        <div className="ml-meta">
          <div>
            <div className="ml-name">{name}</div>
            <div className="ml-role">{role}</div>
          </div>
          <div className="ml-actions">
            <a href="tel:+17542334037" className="ml-action">📞 754-233-4037</a>
            <a href="mailto:roy@royaleagleweb.com" className="ml-action">✉ roy@royaleagleweb.com</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

function WorkCard({ cs, index }) {
  const n = String((index ?? 0) + 1).padStart(2, "0");
  return (
    <a href={cs.url} target="_blank" rel="noopener" className="re-card" style={{ "--brand-color": cs.color }}>
      <div className="re-card-label">{n} {cs.brand}</div>
      <div className="re-card-shot">
        {cs.shot
          ? <img src={cs.shot} alt={`${cs.brand} live website`} loading="lazy"/>
          : <div className="re-card-shot-fallback">{cs.brand}</div>}
      </div>
      <div className="re-card-body">
        <div className="re-card-top">
          <div>
            <h3 className="re-card-brand">{cs.brand}</h3>
            <p className="re-card-sum">{cs.summary}</p>
          </div>
        </div>
        <div className="re-card-meta">
          <span className="re-card-tag">{cs.tag}</span>
          <span className="re-card-visit">Visit →</span>
        </div>
      </div>
    </a>
  );
}

function Counter({ to, prefix = "", suffix = "", decimals = 0 }) {
  const formatted = decimals > 0 ? Number(to).toFixed(decimals) : Math.round(to).toLocaleString();
  return <span>{prefix}{formatted}{suffix}</span>;
}

function PageShell({ active, children }) {
  React.useEffect(() => { applyPalette(PALETTES.obsidian, "obsidian"); }, []);
  return (
    <>
      <ScrollProgress/>
      <CustomCursor/>
      <Nav active={active}/>
      <main>{children}</main>
      <Footer/>
      <FloatingCTA/>
    </>
  );
}

applyPalette(PALETTES.obsidian, "obsidian");

Object.assign(window, { EagleCrest, EagleMark, Nav, Footer, PageHero, CTA, CTAStrip, MeetYourLead, FloatingCTA, WorkCard, Counter, PageShell, PALETTES, applyPalette, TWEAK_DEFAULTS, getSlug });
