// LOCATIONS HUB — all 104 South Florida cities, grouped by county

function LocationsPage() {
  const counties = [...new Set(CITIES.map(c => c.c))];
  const [query, setQuery] = React.useState('');
  return (
    <PageShell active="regions">
      <PageHero
        kicker="Service areas"
        title='104 South Florida cities.<br/><span class="gradient-text">One local team.</span>'
        sub="We serve every incorporated city, town, and village across Broward, Miami-Dade, and Palm Beach County. Find your city below."
      />
      <section className="section">
        <div className="loc-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          <input
            type="text"
            placeholder="Search your city — Fort Lauderdale, Miami, Boca Raton…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && <button className="loc-search-clear" onClick={() => setQuery('')}>×</button>}
        </div>
        <div className="loc-stats">
          <div><div className="bn-n">{CITIES.length}</div><div className="bn-l">Cities served</div></div>
          <div><div className="bn-n">3</div><div className="bn-l">Counties</div></div>
          <div><div className="bn-n">12 yrs</div><div className="bn-l">Local experience</div></div>
          <div><div className="bn-n">5.0★</div><div className="bn-l">Google rating</div></div>
        </div>

        {counties.map(co => {
          const list = CITIES.filter(c => c.c === co && (!query || c.n.toLowerCase().includes(query.toLowerCase())));
          if (list.length === 0) return null;
          return (
            <div key={co} id={co.toLowerCase().replace(/[^a-z]/g,'')} className="loc-county">
              <div className="loc-county-h">
                <h2 className="section-title">{co} County</h2>
                <span className="loc-count">{list.length} cities</span>
              </div>
              <div className="loc-grid">
                {list.map(city => (
                  <a key={city.slug} href={`city.html?c=${city.slug}`} className="loc-card">
                    <div className="loc-card-pin">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s-7-6-7-13a7 7 0 0 1 14 0c0 7-7 13-7 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </div>
                    <div>
                      <div className="loc-card-n">{city.n}</div>
                      <div className="loc-card-pop">{city.pop.toLocaleString()} pop</div>
                    </div>
                    <span className="loc-card-arr">→</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CTA title="Don't see your <em>city?</em>" sub="We probably serve it anyway — just give us a call and we'll confirm same-day."/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LocationsPage/>);
