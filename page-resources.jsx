// RESOURCES — no fake downloads. Page is noindexed; 301s to services.

function ResourcesPage() {
  return (
    <PageShell active="resources">
      <PageHero
        kicker="Resources"
        title='Nothing to download<br/><span class="gradient-text">here.</span>'
        sub="We do not publish a library of briefs, checklists, or calculators. If you want work, call the studio or start on Services."
      />
      <section className="section">
        <div className="kw-copy">
          <p>This URL used to list templates that did not exist. We will not invent files to download.</p>
          <p>
            <a href="services.html" className="btn btn-gold">Services</a>
            {" "}
            <a href="contact.html" className="btn btn-ghost">Book a conversation</a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ResourcesPage/>);
