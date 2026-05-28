// RESOURCES page — downloadable templates, guides, tools

function ResourcesPage() {
  const resources = [
    { type: "Template", t: "AI Strategy Engagement Brief", d: "The exact intake template we use to scope four-week AI strategy engagements. PDF + Notion duplicate.", pages: "12 pages", color: "#3A6B7A" },
    { type: "Guide", t: "WordPress Security Checklist", d: "The 47-point pre-launch security audit we run on every WordPress site we ship.", pages: "8 pages", color: "#7A3A56" },
    { type: "Calculator", t: "PPC Budget Sizing Calculator", d: "Spreadsheet that takes your conversion rate, AOV, and target CAC and outputs a defensible monthly budget.", pages: "Excel + Google Sheets", color: "#1F4A6B" },
    { type: "Template", t: "Marketing Site Brand Brief", d: "The brand questionnaire we send before every site engagement. Use it with your team or send to a designer.", pages: "6 pages", color: "#3D2E1A" },
    { type: "Guide", t: "Shopify vs Webflow vs WordPress", d: "Our internal platform decision tree for new e-commerce and marketing-site engagements.", pages: "14 pages", color: "#2C4A2E" },
    { type: "Template", t: "Quarterly Marketing Review Deck", d: "The Looker-based quarterly review template we present to retainer clients every 90 days.", pages: "Figma + Slides", color: "#7A5224" },
    { type: "Checklist", t: "WCAG 2.2 AA Audit Checklist", d: "The full accessibility audit we run before every site launch. 81 items, with pass/fail definitions.", pages: "11 pages", color: "#1A3A5C" },
    { type: "Guide", t: "Klaviyo Flow Library", d: "Wireframes for the 12 Klaviyo email/SMS flows that drive most of our DTC clients' email revenue.", pages: "24 pages", color: "#5C2A1A" },
    { type: "Calculator", t: "Hosting TCO Calculator", d: "Calculates true 3-year cost of WordPress hosting across WP-Engine, Kinsta, Pagely, and self-hosted options.", pages: "Excel + Google Sheets", color: "#2D3E66" },
  ];
  return (
    <PageShell active="resources">
      <PageHero
        kicker="Resources"
        title='Templates, guides,<br/><span class="gradient-text">and calculators.</span>'
        sub="The artifacts we use internally — and now share publicly. All free, no email required. Updated quarterly."
      />
      <section className="section">
        <div className="resources-grid">
          {resources.map((r, i) => (
            <a key={i} href="#" className="res-card" style={{ "--res-color": r.color }}>
              <div className="res-cover">
                <div className="res-type">{r.type}</div>
                <div className="res-pages">{r.pages}</div>
              </div>
              <div className="res-body">
                <h3 className="res-t">{r.t}</h3>
                <p className="res-d">{r.d}</p>
                <div className="res-cta">
                  <span>Download</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ResourcesPage/>);
