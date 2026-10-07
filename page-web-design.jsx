// Web design — Fort Lauderdale commercial landing. Honest we-voice. No invented metrics.

const DESIGN_FAQS = [
  {
    q: "Do you design websites in Fort Lauderdale?",
    a: "Yes. The studio is at 4440 Inverrary Blvd in Lauderhill — Fort Lauderdale area — since 2014. Roy answers the phone.",
  },
  {
    q: "WordPress or a custom site?",
    a: "WordPress when it fits the people who will edit it. Custom when it does not. We will tell you which on the first call — not from a stack we are trying to sell.",
  },
  {
    q: "What does a website cost?",
    a: "Custom quote. Sites are not the same job. We do not publish a fake starting price. Call 754-233-4037.",
  },
  {
    q: "Who does the work?",
    a: "Roy. When a project needs extra hands, we bring in specialists and say so. No invented team page.",
  },
  {
    q: "What areas do you serve?",
    a: "Fort Lauderdale and South Florida — Broward, Miami-Dade, and Palm Beach. Remote is fine when the project fits.",
  },
];

function WebDesignPage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "Web Design Fort Lauderdale | Royal Eagle",
      description: "Web design in Fort Lauderdale from a studio at 4440 Inverrary Blvd, Lauderhill. WordPress and custom sites since 2014. Rated 5.0 on Google. 754-233-4037.",
      canonical: "web-design",
      keywords: "web design fort lauderdale, web designer fort lauderdale, website design fort lauderdale, south florida web design",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Services", url: "services" },
        { name: "Web design" },
      ],
      service: {
        name: "Web design",
        description: "Web design in Fort Lauderdale from a studio in Lauderhill. WordPress and custom sites since 2014.",
      },
      faq: DESIGN_FAQS,
    });
  }, []);

  return (
    <PageShell active="web-design">
      <PageHero
        kicker="Web design"
        title='Web design<br/><span class="gradient-text">in Fort Lauderdale.</span>'
        sub={<>A Fort Lauderdale studio, since 2014. WordPress and custom sites. 754-233-4037. <a href="services">Services</a> · <a href="wordpress">WordPress</a> · <a href="contractor-websites">Contractor websites</a> · <a href="yacht-websites">Yacht websites</a> · <a href="work">Work</a> · <a href="contact">Contact</a></>}
      />

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>The studio</div>
          <h2 className="section-title">A real address. A person on the line.</h2>
        </div>
        <div className="kw-copy">
          <p>Royal Eagle is a Fort Lauderdale–area web studio at <strong>4440 Inverrary Blvd in Lauderhill</strong>. Founded in 2014. Roy Bachar does the work. When a project needs extra hands, we bring in specialists — and we say so.</p>
          <p>We design and build websites for South Florida businesses. Then we stay reachable. That is the whole offer. No invented headcount. No awards wall.</p>
        </div>
        <ul className="kw-list">
          <li><strong>WordPress</strong> When the people who will live in the site need to edit pages. See <a href="wordpress">WordPress</a>.</li>
          <li><strong>Custom sites</strong> When a theme would fight the brand, or the job is not a CMS job.</li>
          <li><strong>Care after launch</strong> Updates, backups, and small edits. A monthly conversation with the studio — not a factory plan.</li>
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Work we already ship</div>
          <h2 className="section-title">Niches on the site. Not a roster we invented.</h2>
        </div>
        <div className="kw-copy">
          <p>The portfolio already on this site is the proof — yachts, contractors, plumbing, impact windows, and two funding sites. Visit them. Then decide if the studio is a fit.</p>
          <p><a href="contractor-websites">Contractor websites</a> · <a href="yacht-websites">Yacht websites</a> · <a href="work">Selected work</a> · <a href="services">All services</a></p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>South Florida</div>
          <h2 className="section-title">Fort Lauderdale first. Nearby after that.</h2>
        </div>
        <div className="kw-copy">
          <p>Most of the work is in Broward, Miami-Dade, and Palm Beach. The office is about eight minutes from the Sawgrass, twenty from downtown Fort Lauderdale. Remote is fine when the project fits.</p>
          <p>We do not run a city-page mill. If you need a site, call <a href="tel:+17542334037">754-233-4037</a> or write <a href="mailto:roy@royaleagleweb.com">roy@royaleagleweb.com</a>.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Questions</div>
          <h2 className="section-title">Straight answers.</h2>
        </div>
        <div className="faq-list">
          {DESIGN_FAQS.map((f, i) => (
            <div key={i} className="faq faq-open">
              <div className="faq-q"><span>{f.q}</span></div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Need a site in Fort Lauderdale?" sub="Call 754-233-4037 or send a note. A studio in Lauderhill, since 2014."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WebDesignPage/>);
