// FAQ page

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={`faq ${open ? "faq-open" : ""}`} onClick={onClick}>
      <div className="faq-q">
        <span>{q}</span>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

function FAQPage() {
  const groups = [...new Set(FAQS.map(f => f.group))];
  const [active, setActive] = React.useState(groups[0]);
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    applyPageSeo({
      title: "FAQ | Common Questions | Royal Eagle",
      description: "Common questions about web design, WordPress, marketing, and working with Royal Eagle in Fort Lauderdale.",
      canonical: "faq.html",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "FAQ" }],
      faq: FAQS
    });
  }, []);
  return (
    <PageShell active="faq">
      <PageHero
        kicker="FAQ"
        title='Common questions,<br/><span class="gradient-text">straight answers.</span>'
        sub="Questions we hear most often — engagement, pricing, process, and whether AI belongs in the job."
      />
      <section className="section faq-section">
        <div className="faq-grid">
          <aside className="faq-side">
            <div className="bp-toc-h">Topics</div>
            {groups.map(g => (
              <button key={g} onClick={() => setActive(g)} className={`faq-side-btn ${active === g ? "is-active" : ""}`}>{g}</button>
            ))}
          </aside>
          <div className="faq-list">
            {FAQS.filter(f => f.group === active).map((f, i) => (
              <FAQItem key={i} {...f} open={open === i} onClick={() => setOpen(open === i ? null : i)}/>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Still have a question?" sub="Send us a note — we answer every inquiry within one business day."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FAQPage/>);
