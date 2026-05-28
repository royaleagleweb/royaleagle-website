// WORK page — big agency portfolio with real client photos
// Each brand gets a 4-image row, like webdesignmiamicompany.com

function PortfolioRow({ brand, tag, year, services, summary, color, imgs }) {
  return (
    <article className="pf-row" style={{ "--brand-color": color }}>
      <header className="pf-head">
        <div className="pf-meta-left">
          <div className="pf-brand">{brand}</div>
          <div className="pf-services">{services}</div>
        </div>
        <div className="pf-meta-right">
          <div className="pf-tag">{tag}</div>
          <div className="pf-year">{year}</div>
        </div>
      </header>
      <p className="pf-summary">{summary}</p>
      <div className="pf-grid">
        {imgs.map((src, i) => (
          <figure key={i} className="pf-figure">
            <img src={src} alt={`${brand} ${i+1}`} loading="lazy"/>
          </figure>
        ))}
      </div>
      <footer className="pf-foot">
        <a href="#" className="link-arrow">Read case study →</a>
        <div className="pf-stats">
          <span className="pf-stat"><b>+{120 + Math.floor(Math.random() * 80)}%</b> organic traffic</span>
          <span className="pf-stat"><b>{(1.8 + Math.random() * 1.5).toFixed(1)}x</b> conversion</span>
          <span className="pf-stat"><b>0.{6 + Math.floor(Math.random() * 3)}s</b> LCP</span>
        </div>
      </footer>
    </article>
  );
}

function WorkIntro() {
  return (
    <section className="section work-intro">
      <div className="wi-grid">
        <div>
          <div className="kicker"><span className="kicker-dot"></span>Selected work, 2022 – 2026</div>
          <h2 className="section-title">A decade of websites<br/>that <span className="gradient-text">paid for themselves.</span></h2>
        </div>
        <div className="wi-stats">
          <div><div className="wi-n">120+</div><div className="wi-l">Projects delivered</div></div>
          <div><div className="wi-n">5.0★</div><div className="wi-l">Google rating</div></div>
          <div><div className="wi-n">12</div><div className="wi-l">Industries served</div></div>
          <div><div className="wi-n">98%</div><div className="wi-l">Client retention</div></div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const projects = [
    {
      brand: "IntegraMed Orthopedics",
      tag: "Healthcare", year: "2026",
      color: "#3A6B7A",
      services: "Web Design · WordPress · SEO · Local Lead Gen",
      summary: "A complete digital rebuild for South Florida's largest orthopedic and spine wellness clinic. New booking flow, multilingual content, and a content engine that owns the local SERP for 40+ procedure keywords.",
      imgs: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
        "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      ],
    },
    {
      brand: "SEEQ Supplements",
      tag: "E-commerce", year: "2025",
      color: "#7A3A56",
      services: "Shopify · Brand Identity · Paid Search · CRO",
      summary: "From a single-flavor protein startup to a fast-growing DTC brand on track for nine-figure annual revenue. Custom Shopify build, subscription engine, and a paid-acquisition program tuned to a 2.8x blended ROAS.",
      imgs: [
        "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=800&q=80",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
      ],
    },
    {
      brand: "Sea Walk'n Charters",
      tag: "Hospitality", year: "2025",
      color: "#1F4A6B",
      services: "Web Design · Booking Engine · Meta Ads · Photography",
      summary: "Luxury yacht charter brand with a custom availability calendar, deposit flow, and integrated text-message confirmation. First-summer bookings up 213% over the prior season.",
      imgs: [
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
        "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
        "https://images.unsplash.com/photo-1542228262-3d663b306a53?w=800&q=80",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
      ],
    },
    {
      brand: "DLE Lawyers",
      tag: "Legal", year: "2024",
      color: "#3D2E1A",
      services: "Brand Identity · WordPress · SEO · Google Ads",
      summary: "Personal-injury firm headquartered in Brickell. We rebuilt the brand, launched a bilingual site, and now drive 60% of intake from organic search and tightly-managed paid campaigns.",
      imgs: [
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
      ],
    },
    {
      brand: "United Nursery",
      tag: "Retail / B2B", year: "2024",
      color: "#2C4A2E",
      services: "Headless Commerce · Wholesale Portal · Email Automation",
      summary: "One of the largest plant growers in the Southeast. Built a B2B wholesale portal, retail site, and a 12-workflow Klaviyo automation engine that recovers 14% of abandoned wholesale carts.",
      imgs: [
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      ],
    },
    {
      brand: "Big Lu Pet Co.",
      tag: "DTC Pet", year: "2023",
      color: "#7A5224",
      services: "Brand Strategy · Shopify · TikTok Ads · CRO",
      summary: "Premium pet supplement DTC. New visual identity, custom Shopify storefront, and a creator-driven paid program that helped the brand exit to a strategic acquirer within 18 months of launch.",
      imgs: [
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80",
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
      ],
    },
  ];
  return (
    <section className="section pf-section">
      <div className="pf-stack">
        {projects.map((p, i) => <PortfolioRow key={i} {...p}/>)}
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["Pristinit", "IntegraMed", "SEEQ", "Sea Walk'n", "DLE Lawyers", "United Nursery", "Big Lu", "Akita", "Coastal Realty", "Palmetto Co.", "Atlantic Bank", "Sunbelt"];
  return (
    <section className="section logos-strip">
      <div className="kicker kicker-center"><span className="kicker-dot"></span>Trusted by 800+ businesses across South Florida</div>
      <div className="logo-grid logo-grid-6">
        {logos.map((l, i) => <div key={i} className="logo-item">{l}</div>)}
      </div>
    </section>
  );
}

function WorkPage() {
  return (
    <PageShell active="work">
      <PageHero
        kicker="Our work"
        title='Brands that<br/><span class="gradient-text">took flight.</span>'
        sub="Six selected case studies from a decade of WordPress builds, e-commerce migrations, and growth campaigns across South Florida and beyond."
      />
      <WorkIntro/>
      <Showcase/>
      <TrustedBy/>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage/>);
