// TESTIMONIALS — Google excerpts only. No invented client quotes.

function TestimonialsPage() {
  return (
    <PageShell active="testimonials">
      <PageHero
        kicker="Client feedback"
        title='What people wrote<br/>on <span class="gradient-text">Google.</span>'
        sub="Short excerpts from the Google Business profile. Read the originals yourself — we don't invent testimonials."
      />
      <section className="section">
        <div className="testi-stats">
          <div><div className="bn-n">5.0</div><div className="bn-l">Google rating</div></div>
          <div><div className="bn-n">{GOOGLE_REVIEWS.length}</div><div className="bn-l">Excerpts on this page</div></div>
        </div>
        <div className="testi-masonry">
          {GOOGLE_REVIEWS.map((q, i) => (
            <figure key={i} className={`testi-card ${i === 0 ? "testi-card-big" : ""}`}>
              <div className="trust-stars">★★★★★</div>
              <span className="testi-cat">{q.r}</span>
              <blockquote>"{q.q}"</blockquote>
              <figcaption>
                <div className="testi-google-mark">G</div>
                <div>
                  <div className="testi-a">{q.a}</div>
                  <div className="testi-r">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://share.google/1081gc2LSDc6FXpcZ" target="_blank" rel="noopener" className="btn btn-gold">Read reviews on Google →</a>
        </p>
      </section>
      <CTA/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TestimonialsPage/>);
