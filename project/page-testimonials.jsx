// TESTIMONIALS page

function TestimonialsPage() {
  const quotes = [
    { q: "Royal Eagle rebuilt our entire stack in 90 days and we've doubled qualified leads year-over-year. The team feels like an extension of our company, not a vendor.", a: "Sanjay Godavariya", r: "Director, Pristinit", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85", cat: "B2B SaaS" },
    { q: "They listened carefully and delivered exactly what we asked for, on the timeline we agreed on. In a decade of agency work, that's the rarest thing I've experienced.", a: "Alex Denz", r: "Founder, Alex Co.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85", cat: "Mobile" },
    { q: "Phone calls and emails answered very professionally. Felt like an extension of our team from week one.", a: "Van Hunter", r: "Director, Leadership Group", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85", cat: "Services" },
    { q: "Maintenance, domain, SSL — all in one place. That's a level of consolidation we'd been chasing for years.", a: "Sanjay Godavariya", r: "Director, Pristinit", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85", cat: "Maintenance" },
    { q: "Their AI strategy work paid for itself in the first month. We're now running three of the workflows they prototyped and shipping a fourth in Q3.", a: "Rachel Kim", r: "COO, IntegraMed", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85", cat: "AI" },
    { q: "We've used five agencies in eight years. Royal Eagle is the first one we'd actually recommend to a peer without caveats.", a: "James Whittaker", r: "CMO, Atlantic Bank", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85", cat: "Finance" },
    { q: "Their performance marketing team turned our Google Ads from a black hole into our most predictable channel. ROAS doubled in 60 days.", a: "Priya Patel", r: "Head of Growth, SEEQ", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=85", cat: "Paid Media" },
    { q: "The Shopify rebuild was on time, on budget, and on brand. I wish I could say that about more vendors.", a: "Jordan Lee", r: "Founder, Big Lu Pet Co.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85", cat: "E-commerce" },
    { q: "Honest, accountable, and senior. The three things you want from an agency and almost never get.", a: "Marisol Rivera", r: "GM, Sea Walk'n Charters", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85", cat: "Hospitality" },
  ];
  return (
    <PageShell active="testimonials">
      <PageHero
        kicker="Client feedback"
        title='In their <em>own</em> words.'
        sub="Direct quotes from the people we work with — verified, attributed, and pulled from Google, Clutch, and DesignRush reviews."
      />
      <section className="section">
        <div className="testi-stats">
          <div><div className="bn-n">4.9</div><div className="bn-l">Avg Google rating</div></div>
          <div><div className="bn-n">312</div><div className="bn-l">Reviews collected</div></div>
          <div><div className="bn-n">98%</div><div className="bn-l">Client retention</div></div>
          <div><div className="bn-n">62%</div><div className="bn-l">From referrals</div></div>
        </div>
        <div className="testi-masonry">
          {quotes.map((q, i) => (
            <figure key={i} className={`testi-card ${i % 5 === 0 ? "testi-card-big" : ""}`}>
              <div className="trust-stars">★★★★★</div>
              <span className="testi-cat">{q.cat}</span>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <img src={q.img} alt={q.a} loading="lazy"/>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="testi-r">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TestimonialsPage/>);
