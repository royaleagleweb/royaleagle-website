// Contractor websites — trades proof only. No invented storm-season stats.

const TRADE_SLUGS = ["construction-95", "yellow-plumbing", "florida-impact-windows"];

const TRADE_FAQS = [
  {
    q: "Do you design websites for contractors in Florida?",
    a: "Yes. The studio is in the Fort Lauderdale area, and we already ship sites for trades — construction, plumbing, and impact windows. We are not a national contractor-marketing factory.",
  },
  {
    q: "Can you build a plumber or construction company website?",
    a: "Yes. Yellow Plumbing and Construction 95 are live. A trades site needs the work you actually do, a phone that is easy to tap, and pages a person can finish on a job site — not a brochure of services you do not offer.",
  },
  {
    q: "Are you a contractor marketing agency?",
    a: "No. We are a South Florida web studio that has built sites for trades. We do not invent storm-season statistics or run a national ads machine.",
  },
];

function ContractorWebsitesPage() {
  const proof = TRADE_SLUGS.map(slug => CASE_STUDIES.find(c => c.slug === slug)).filter(Boolean);

  React.useEffect(() => {
    applyPageSeo({
      title: "Contractor Website Design Florida | Royal Eagle",
      description: "Contractor, plumber, and construction company websites from a South Florida studio. Construction 95, Yellow Plumbing, Florida Impact Windows. Rated 5.0 on Google. 754-233-4037.",
      canonical: "contractor-websites.html",
      keywords: "contractor website design florida, plumber website, construction company website, contractor website fort lauderdale",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Services", url: "services.html" },
        { name: "Contractor websites" },
      ],
      service: {
        name: "Contractor website design",
        description: "Websites for construction, plumbing, and windows companies from a South Florida studio.",
      },
      faq: TRADE_FAQS,
    });
  }, []);

  return (
    <PageShell active="contractor-websites">
      <PageHero
        kicker="Trades"
        title='Contractor websites<br/><span class="gradient-text">in Florida.</span>'
        sub="Construction, plumbing, and windows sites from a South Florida studio — not a national contractor-marketing factory. 754-233-4037."
      />

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>The honest pitch</div>
          <h2 className="section-title">We already ship sites for trades.</h2>
        </div>
        <div className="kw-copy">
          <p>Royal Eagle is a Fort Lauderdale–area studio. We build websites for businesses that work with their hands — <strong>construction, plumbing, impact windows</strong> — and we stay on the site after it launches.</p>
          <p>We are not a national contractor-marketing factory. We do not invent storm-season statistics. The proof is three live sites, not a deck of claims.</p>
        </div>
        <ul className="kw-list">
          <li><strong>What the job is</strong> Clear work you actually do. A phone that is easy to tap. Pages a person can finish on a phone between jobs.</li>
          <li><strong>Who does the work</strong> The studio. Specialists join when a project needs extra hands — and we say so.</li>
          <li><strong>Where we are</strong> South Florida. We also shipped a plumber’s site in Connecticut. The shop itself is here.</li>
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Proof</div>
          <h2 className="section-title">Three live sites.</h2>
        </div>
        <p className="kw-proof-note">Construction 95, Yellow Plumbing, and Florida Impact Windows &amp; Doors. Visit them. That is the whole case.</p>
        <div className="re-work-grid">
          {proof.map((cs, i) => <WorkCard key={cs.slug} cs={cs} index={i}/>)}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Questions</div>
          <h2 className="section-title">Straight answers.</h2>
        </div>
        <div className="faq-list">
          {TRADE_FAQS.map((f, i) => (
            <div key={i} className="faq faq-open">
              <div className="faq-q"><span>{f.q}</span></div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Need a site for the trade?" sub="Call 754-233-4037. A South Florida studio, since 2014."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContractorWebsitesPage/>);
