// Yacht websites — Doctor Yachts only. Not a yacht-marketing agency.

const YACHT_FAQS = [
  {
    q: "Do you design yacht websites in Fort Lauderdale?",
    a: "We built the live site for Doctor Yachts. We are a Fort Lauderdale–area studio — not a yacht-marketing agency and not a YachtWorld shop.",
  },
  {
    q: "Do you integrate YachtWorld or brokerage feeds?",
    a: "No. We do not list feed integrations we do not have. If you need a studio to design and build a site — and stay on it — that is the work.",
  },
  {
    q: "Is Royal Eagle a marine advertising firm?",
    a: "No. We are a web studio that built one live yacht site. Marine businesses who want a studio, not a yacht-ad firm, can call 754-233-4037.",
  },
];

function YachtWebsitesPage() {
  const proof = CASE_STUDIES.filter(c => c.slug === "doctor-yachts");

  React.useEffect(() => {
    applyPageSeo({
      title: "Yacht Website Design Fort Lauderdale | Royal Eagle",
      description: "Yacht website design in Fort Lauderdale from a studio that built Doctor Yachts (doctoryachts.com). Not a yacht-marketing agency. Rated 5.0 on Google. 754-233-4037.",
      canonical: "yacht-websites.html",
      keywords: "yacht website design fort lauderdale, yacht website, marine website fort lauderdale",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Services", url: "services.html" },
        { name: "Yacht websites" },
      ],
      service: {
        name: "Yacht website design",
        description: "A Fort Lauderdale studio that built a live yacht site. Not a yacht-marketing agency.",
      },
      faq: YACHT_FAQS,
    });
  }, []);

  return (
    <PageShell active="yacht-websites">
      <PageHero
        kicker="Marine"
        title='Yacht website design<br/><span class="gradient-text">in Fort Lauderdale.</span>'
        sub="We built the live site for Doctor Yachts. We are a studio — not a yacht-advertising firm. 754-233-4037."
      />

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>The honest pitch</div>
          <h2 className="section-title">One live yacht site. A studio.</h2>
        </div>
        <div className="kw-copy">
          <p>Royal Eagle is a Fort Lauderdale–area web studio. We designed and built <strong>Doctor Yachts</strong> — live at doctoryachts.com. That is the marine proof we will put on this page.</p>
          <p>We do not claim to be a yacht-marketing agency. We do not list YachtWorld feeds, inventory integrations, or a marine roster we do not have. If you run a marine business and want a studio that will stay on the site — not a yacht-ad firm — call the studio.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Proof</div>
          <h2 className="section-title">Doctor Yachts.</h2>
        </div>
        <p className="kw-proof-note">Mobile boat mechanic serving Fort Lauderdale and South Florida waterways. Visit the live site.</p>
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
          {YACHT_FAQS.map((f, i) => (
            <div key={i} className="faq faq-open">
              <div className="faq-q"><span>{f.q}</span></div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Need a marine site from a studio?" sub="Call 754-233-4037. Fort Lauderdale area, since 2014."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<YachtWebsitesPage/>);
