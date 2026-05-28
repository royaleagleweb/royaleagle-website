// WHITE LABEL page — for agencies

function WhiteLabelPage() {
  const services = [
    { t: "White-label WordPress development", d: "We build to your design files under your brand. NDA, dedicated PM, monthly capacity commitments." },
    { t: "White-label Shopify builds", d: "Shopify Plus development as a senior bench for design and marketing agencies." },
    { t: "White-label AI engineering", d: "Claude and OpenAI implementations under your brand — strategy, prototype, production." },
    { t: "White-label PPC management", d: "Google and Meta campaign management with branded reporting and Google Premier Partner access." },
    { t: "White-label maintenance", d: "WordPress maintenance with custom-branded portals and reports for your clients." },
    { t: "White-label brand & design", d: "Senior creative and design talent on tap when your team is at capacity." },
  ];
  return (
    <PageShell active="white-label">
      <PageHero
        kicker="White label partnerships"
        eyebrow="Agency partnership program"
        title='A senior bench<br/>under <span class="gradient-text">your brand.</span>'
        sub="Design and marketing agencies hire Royal Eagle as their senior delivery team — WordPress, Shopify, AI, paid media — all delivered white-label, under your brand, to your clients."
      />
      <section className="section">
        <div className="wl-intro">
          <div>
            <div className="kicker"><span className="kicker-dot"></span>About 15% of our revenue</div>
            <h2 className="section-title">Why agencies pick us.</h2>
            <p className="wl-intro-p">Most white-label vendors are price plays — and the work shows it. Our white-label program is the opposite: senior US-based practitioners, NDA-protected, with dedicated project management and a real strategic partnership with your firm. We've quietly delivered hundreds of engagements under partner brands since 2017.</p>
          </div>
          <div className="wl-stats">
            <div><div className="bn-n">62</div><div className="bn-l">Active agency partners</div></div>
            <div><div className="bn-n">9 yrs</div><div className="bn-l">Avg partnership length</div></div>
            <div><div className="bn-n">0</div><div className="bn-l">Direct client contact w/o permission</div></div>
            <div><div className="bn-n">48h</div><div className="bn-l">Turnaround on capacity asks</div></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><div className="kicker"><span className="kicker-dot"></span>Services available</div><h2 className="section-title">What you can resell.</h2></div>
        <div className="wl-services">
          {services.map((s, i) => (
            <div key={i} className="wl-svc">
              <div className="bn-n">{String(i+1).padStart(2,'0')}</div>
              <h3 className="wl-svc-t">{s.t}</h3>
              <p className="wl-svc-d">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA title="Partner with us." sub="Book a partnership intro call. We'll walk through our process, NDA, and how the relationship typically scales."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WhiteLabelPage/>);
