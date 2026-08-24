// WordPress — honest build + care page. No invented plugins, stacks, or metrics.

const WP_FAQS = [
  {
    q: "Do you still build WordPress sites?",
    a: "Yes. WordPress and Elementor are a regular part of the studio’s work — new sites and existing ones that need a grown-up looking after.",
  },
  {
    q: "Can our team update the site after launch?",
    a: "That is a design goal. We set the site up so you can change pages and posts without breaking the layout. If you would rather we handle edits, that is what maintenance is for.",
  },
  {
    q: "Do you maintain WordPress after launch?",
    a: "Yes. Updates, backups, and small content edits. A WordPress site is not finished the day it goes live. Call 754-233-4037 if you want the studio on the hook for that.",
  },
  {
    q: "Are you in Fort Lauderdale?",
    a: "The studio is at 4440 Inverrary Blvd in Lauderhill — Fort Lauderdale area. Same time zone, a real address, a phone a person answers.",
  },
];

function WordpressPage() {
  React.useEffect(() => {
    applyPageSeo({
      title: "WordPress Web Design Fort Lauderdale | Royal Eagle",
      description: "WordPress and Elementor sites from a Fort Lauderdale studio. Build and maintenance. 4440 Inverrary Blvd, Lauderhill. Rated 5.0 on Google. 754-233-4037.",
      canonical: "wordpress.html",
      keywords: "wordpress web design fort lauderdale, wordpress developer fort lauderdale, elementor, wordpress maintenance",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Services", url: "services.html" },
        { name: "WordPress" },
      ],
      service: {
        name: "WordPress web design",
        description: "WordPress and Elementor builds and maintenance from a Fort Lauderdale–area studio.",
      },
      faq: WP_FAQS,
    });
  }, []);

  return (
    <PageShell active="wordpress">
      <PageHero
        kicker="WordPress"
        title='WordPress web design<br/><span class="gradient-text">in Fort Lauderdale.</span>'
        sub="We build and maintain WordPress and Elementor sites. The studio is at 4440 Inverrary Blvd in Lauderhill. 754-233-4037."
      />

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>What we actually do</div>
          <h2 className="section-title">Build it. Then keep it.</h2>
        </div>
        <div className="kw-copy">
          <p>Royal Eagle is a Fort Lauderdale–area studio. <strong>WordPress is a real part of the work</strong> — new sites, Elementor builds, and the unglamorous care that keeps a site online after launch.</p>
          <p>We do not publish a plugin catalog or a list of invented case metrics. If you need a WordPress site — or an existing one that needs looking after — call the studio.</p>
        </div>
        <ul className="kw-list">
          <li><strong>New WordPress sites</strong> Including Elementor when it fits the editors who will live in the site.</li>
          <li><strong>Rebuilds</strong> When a theme has gotten away from you and the admin is no longer safe to touch.</li>
          <li><strong>Hosting and email</strong> When you want one studio on the hook for the domain, the inbox, and the site.</li>
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Maintenance</div>
          <h2 className="section-title">Care after launch.</h2>
        </div>
        <div className="kw-copy">
          <p>A WordPress site is not done at launch. Core, themes, and plugins need updates. Backups need to exist. Someone has to notice when a form stops sending.</p>
          <p>We offer that as ongoing care — a monthly conversation with the studio, not a productized factory. Small content edits are part of it. Larger work gets scoped.</p>
          <p><a href="service.html?s=maintenance">Maintenance</a> · <a href="service.html?s=wordpress-elementor">WordPress / Elementor</a> · <a href="work.html">Selected work</a></p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Work</div>
          <h2 className="section-title">Sites we shipped.</h2>
        </div>
        <p className="kw-proof-note">We do not claim a CMS for a client unless we have verified it here. See the live sites on the work page — then decide if the studio is a fit.</p>
        <p><a href="work.html" className="btn btn-gold">Selected work</a></p>
      </section>

      <section className="section faq-section">
        <div className="section-head">
          <div className="kicker"><span className="kicker-dot"></span>Questions</div>
          <h2 className="section-title">Straight answers.</h2>
        </div>
        <div className="faq-list">
          {WP_FAQS.map((f, i) => (
            <div key={i} className="faq faq-open">
              <div className="faq-q"><span>{f.q}</span></div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Need a WordPress site — or one looked after?" sub="Call 754-233-4037 or send a note. A Fort Lauderdale studio, since 2014."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WordpressPage/>);
