// Shared chrome — mega-menu nav + sitemap footer + page shell

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "light"
}/*EDITMODE-END*/;

const PALETTES = {
  light: { bg: "#FAF7F0", bg2: "#FFFFFF", surface: "#F2EEDF", ink: "#1A1410", inkDim: "#6B5B3F", gold: "#B8893A", goldHi: "#D4A845", accent: "#B8893A", line: "rgba(26, 20, 16, 0.10)" },
  midnight: { bg: "#0A1428", bg2: "#0F1B36", surface: "#13224A", ink: "#F5F1E6", inkDim: "#A8B3CC", gold: "#D4A845", goldHi: "#F4CB6B", accent: "#E8C547", line: "rgba(212,168,69,0.18)" },
  obsidian: { bg: "#0B0B0F", bg2: "#15151C", surface: "#1E1E28", ink: "#F8F4E8", inkDim: "#A09988", gold: "#C9A24A", goldHi: "#E8C66E", accent: "#E0B84A", line: "rgba(201,162,74,0.2)" },
  imperial: { bg: "#1A0F2E", bg2: "#241640", surface: "#2D1B52", ink: "#F5EFE0", inkDim: "#B5A8CC", gold: "#E0B84A", goldHi: "#F2CE6D", accent: "#F2CE6D", line: "rgba(224,184,74,0.18)" },
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

// ---------- MEGA-MENU NAV ----------
const NAV_GROUPS = [
  {
    label: "Company", active: ["about", "our-story", "team", "regions", "testimonials"],
    cols: [
      { h: "About", items: [
        { t: "About Us", h: "about.html", d: "Who we are" },
        { t: "Our Story", h: "our-story.html", d: "Founded in Fort Lauderdale, 2014" },
        { t: "Team", h: "team.html", d: "Meet the 38 senior practitioners" },
        { t: "Regions Served", h: "regions.html", d: "Broward · Miami-Dade · WPB" },
      ]},
      { h: "Social proof", items: [
        { t: "Testimonials", h: "testimonials.html", d: "What clients say" },
        { t: "Case Studies", h: "case-studies.html", d: "10+ documented engagements" },
        { t: "Portfolio", h: "portfolio.html", d: "Visual showcase" },
      ]},
    ],
  },
  {
    label: "Services", active: ["services", "service"],
    cols: [
      { h: "Website Builds", items: [
        { t: "Website Builds", h: "service.html?s=website-builds", d: "Custom marketing sites" },
        { t: "AI Websites", h: "service.html?s=ai-websites", d: "Personalized & AI-powered" },
        { t: "WordPress / Elementor", h: "service.html?s=wordpress-elementor", d: "WordPress experts since 2014" },
        { t: "Custom Themes", h: "service.html?s=custom-themes", d: "Hand-coded WP themes" },
        { t: "E-commerce", h: "service.html?s=ecommerce", d: "Shopify Plus & WooCommerce" },
      ]},
      { h: "Infrastructure", items: [
        { t: "Domains & Hosting", h: "service.html?s=domains-hosting", d: "Managed hosting + DNS" },
        { t: "Email Services", h: "service.html?s=email-services", d: "Workspace + deliverability" },
        { t: "Maintenance", h: "service.html?s=maintenance", d: "Updates, security, support" },
      ]},
      { h: "Marketing", items: [
        { t: "Marketing", h: "service.html?s=marketing", d: "Full-funnel programs" },
        { t: "PPC (Google + Meta)", h: "service.html?s=ppc", d: "Paid search & social" },
        { t: "Automation", h: "service.html?s=automation", d: "HubSpot, Zapier, Make" },
        { t: "Design", h: "service.html?s=design", d: "Brand & marketing creative" },
        { t: "Data", h: "service.html?s=data", d: "GA4, BigQuery, Looker" },
      ]},
    ],
  },
  {
    label: "AI Consultation", active: ["ai"],
    cols: [
      { h: "AI services", items: [
        { t: "AI Strategy", h: "service.html?s=ai-strategy", d: "Where AI moves the needle" },
        { t: "AI Tools Setup", h: "service.html?s=ai-tools-setup", d: "Claude, ChatGPT, Copilot rollout" },
        { t: "AI Automation", h: "service.html?s=ai-automation", d: "Agents that handle real work" },
        { t: "AI Content", h: "service.html?s=ai-content", d: "Brand-trained AI writers" },
      ]},
      { h: "Resources", items: [
        { t: "Blog: AI category", h: "blog.html?cat=AI", d: "Our latest writing on AI" },
        { t: "AI Strategy template", h: "resources.html", d: "Download the engagement template" },
      ]},
    ],
  },
  {
    label: "Locations", active: ["regions", "city", "locations", "local-service"],
    cols: [
      { h: "Major markets", items: [
        { t: "All Service Areas (104 cities)", h: "locations.html", d: "Broward · Miami-Dade · Palm Beach" },
        { t: "Fort Lauderdale", h: "city.html?c=fort-lauderdale", d: "Our hometown · all 18 services" },
        { t: "Miami", h: "city.html?c=miami", d: "Magic City · all 18 services" },
        { t: "West Palm Beach", h: "city.html?c=west-palm-beach", d: "Palm Beach County hub" },
      ]},
      { h: "Broward", items: [
        { t: "Hollywood", h: "city.html?c=hollywood", d: "Between Miami & Lauderdale" },
        { t: "Pembroke Pines", h: "city.html?c=pembroke-pines", d: "172K residents · 18 services" },
        { t: "Coral Springs", h: "city.html?c=coral-springs", d: "134K residents · 18 services" },
        { t: "Pompano Beach", h: "city.html?c=pompano-beach", d: "113K residents · 18 services" },
        { t: "Plantation", h: "city.html?c=plantation", d: "Professional hub · 18 services" },
        { t: "Weston", h: "city.html?c=weston", d: "Premier planned community" },
      ]},
      { h: "Miami-Dade & Palm Beach", items: [
        { t: "Miami Beach", h: "city.html?c=miami-beach", d: "Iconic barrier-island city" },
        { t: "Coral Gables", h: "city.html?c=coral-gables", d: "The City Beautiful" },
        { t: "Aventura", h: "city.html?c=aventura", d: "North Miami-Dade luxury" },
        { t: "Boca Raton", h: "city.html?c=boca-raton", d: "Palm Beach professional hub" },
        { t: "Delray Beach", h: "city.html?c=delray-beach", d: "Most fun small town in America" },
        { t: "Jupiter", h: "city.html?c=jupiter", d: "North county growth market" },
      ]},
    ],
  },
  {
    label: "Resources", active: ["blog", "case-studies", "resources", "pricing", "faq"],
    cols: [
      { h: "Read", items: [
        { t: "Blog", h: "blog.html", d: "20+ articles on web & marketing" },
        { t: "Case Studies", h: "case-studies.html", d: "Documented client outcomes" },
        { t: "Resources", h: "resources.html", d: "Templates, guides, checklists" },
      ]},
      { h: "Plan", items: [
        { t: "Pricing", h: "pricing.html", d: "Published, transparent rates" },
        { t: "FAQ", h: "faq.html", d: "Common questions answered" },
        { t: "Affiliates", h: "affiliates.html", d: "15% referral commission" },
        { t: "White Label", h: "white-label.html", d: "Agency partnership program" },
      ]},
    ],
  },
];

function Nav({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} onMouseLeave={() => setOpenMenu(null)}>
      <div className="nav-inner">
        <a href="index.html" className="brand">
          <EagleMark/>
          <span className="brand-text">
            <span className="brand-royal">ROYAL</span>
            <span className="brand-eagle">EAGLE</span>
          </span>
        </a>
        <div className="nav-links nav-links-mega">
          {NAV_GROUPS.map(g => (
            <div key={g.label} className="nav-mega-trigger" onMouseEnter={() => setOpenMenu(g.label)}>
              <button className={`nav-mega-btn ${g.active.includes(active) ? 'is-active' : ''}`}>
                {g.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ))}
        </div>
        <a href="contact.html" className="nav-cta">
          <span>Start a project</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
      {openMenu && (
        <div className="nav-mega-panel">
          <div className="nav-mega-panel-inner">
            {NAV_GROUPS.find(g => g.label === openMenu).cols.map((c, ci) => (
              <div key={ci} className="nav-mega-col">
                <div className="nav-mega-h">{c.h}</div>
                {c.items.map(it => (
                  <a key={it.t} href={it.h} className="nav-mega-item">
                    <div className="nmi-t">{it.t}</div>
                    <div className="nmi-d">{it.d}</div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer footer-v2">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="index.html" className="brand">
            <EagleMark/>
            <span className="brand-text">
              <span className="brand-royal">ROYAL</span>
              <span className="brand-eagle">EAGLE</span>
            </span>
          </a>
          <p className="footer-tag">From concept to conversion. Your all-in-one web design, AI, and marketing partner — Fort Lauderdale, since 2014.</p>
          <div className="footer-contact">
            <a href="tel:+17542334037">📞 754-233-4037</a>
            <a href="mailto:hello@royaleagleweb.com">✉ hello@royaleagleweb.com</a>
            <a href="https://share.google/idV4zjUrBGsrRtZ19" target="_blank" rel="noopener">📍 4440 Inverrary Blvd, Lauderhill, FL</a>
          </div>
        </div>
        <div className="footer-cols footer-cols-v2">
          {SITE_MAP.map(col => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(l => <a key={l.t} href={l.h}>{l.t}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Royal Eagle Web Design & Marketing</span>
        <span className="footer-meta">
          <a href="legal.html?s=privacy">Privacy</a>
          <span>·</span>
          <a href="legal.html?s=terms">Terms</a>
          <span>·</span>
          <a href="legal.html?s=accessibility">Accessibility</a>
          <span>·</span>
          <a href="sitemap.html">Sitemap</a>
        </span>
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

function CTA({ title = "Ready to <em>soar?</em>", sub = "Tell us about your project. We'll come back within one business day with a real plan — not a sales pitch." } = {}) {
  return (
    <section className="section cta">
      <div className="cta-card">
        <div className="cta-eagle"><EagleCrest size={120} glow={false}/></div>
        <div className="kicker kicker-center"><span className="kicker-dot"></span>Let's build something worth bookmarking</div>
        <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p className="cta-sub">{sub}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <a href="contact.html" className="btn btn-gold">
            Schedule a consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="pricing.html" className="btn btn-ghost">See pricing</a>
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
            <div className="fcta-avatars">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt=""/>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt=""/>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" alt=""/>
            </div>
            <button className="fcta-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="fcta-greeting">
            <strong>Hi, I'm Sam.</strong> I lead client services at Royal Eagle. Ask us anything — we usually reply within an hour during business hours.
          </div>
          <div className="fcta-actions">
            <a href="tel:+17542334037" className="fcta-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 5c0 9.4 6.6 16 16 16 1.5 0 2-.7 2-2v-3c0-.6-.4-1-1-1l-3.5-.5c-.4 0-.8.2-1 .6L14 17c-3-1.4-5.6-4-7-7l1.9-1.5c.4-.2.6-.6.6-1L9 4c0-.6-.4-1-1-1H5c-1.3 0-2 .5-2 2z" stroke="currentColor" strokeWidth="1.5"/></svg>
              <div>
                <div className="fcta-action-t">Call us</div>
                <div className="fcta-action-s">754-233-4037</div>
              </div>
            </a>
            <a href="mailto:hello@royaleagleweb.com" className="fcta-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 8l9 6 9-6M3 7h18v10c0 1-.4 1.4-1.4 1.4H4.4C3.4 18.4 3 18 3 17z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <div>
                <div className="fcta-action-t">Email us</div>
                <div className="fcta-action-s">hello@royaleagleweb.com</div>
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
            <span>Average reply time today: <strong>14 min</strong></span>
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
function MeetYourLead({ name = "Sam Kowalski", role = "Director of Client Services", img = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", quote = "I personally answer every new-business inquiry. Send us a note and you'll hear back from me — not an automated workflow — within one business day." }) {
  return (
    <aside className="meet-lead">
      <figure className="ml-photo">
        <img src={img} alt={name}/>
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
            <a href="mailto:hello@royaleagleweb.com" className="ml-action">✉ hello@royaleagleweb.com</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

function PageShell({ active, children }) {
  const [t, set] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyPalette(PALETTES[t.palette] || PALETTES.light, t.palette); }, [t.palette]);
  return (
    <>
      <ScrollProgress/>
      <CustomCursor/>
      <Nav active={active}/>
      <main>{children}</main>
      <Footer/>
      <FloatingCTA/>
      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio label="Theme" value={t.palette} onChange={v => set('palette', v)}
            options={[
              { value: 'light', label: 'Light' },
              { value: 'midnight', label: 'Midnight' },
              { value: 'obsidian', label: 'Obsidian' },
              { value: 'imperial', label: 'Imperial' },
            ]}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

applyPalette(PALETTES[TWEAK_DEFAULTS.palette], TWEAK_DEFAULTS.palette);

Object.assign(window, { EagleCrest, EagleMark, Nav, Footer, PageHero, CTA, CTAStrip, MeetYourLead, FloatingCTA, PageShell, PALETTES, applyPalette, TWEAK_DEFAULTS, getSlug });
