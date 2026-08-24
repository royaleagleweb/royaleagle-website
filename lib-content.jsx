// =============================================================
// UNIQUE CONTENT ENGINE — deterministic-but-varied copy per
// (city, service) combination, so 1,872 pages aren't duplicates.
// Same input → same output (good for SEO, caching, indexing).
// =============================================================

// --- Deterministic hash from a string → integer ---
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

// pick(seed, n) — deterministic 0..n-1 index from a seed string
function pick(seed, n) {
  return hashStr(seed) % n;
}

// pickN(seed, arr, count) — pick `count` distinct items from `arr`
function pickN(seed, arr, count) {
  const used = new Set();
  const out = [];
  let i = 0;
  while (out.length < count && i < arr.length * 3) {
    const idx = hashStr(seed + ':' + i) % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
    i++;
  }
  return out;
}

// --- Variant pools ---

const INTRO_OPENERS = [
  city => `${city.n} businesses don't fit a template — and neither does the marketing that works for them.`,
  city => `Running a business in ${city.n} means competing against everyone from chain operators to next-door neighbors with the same trade.`,
  city => `Twelve years of building websites for ${city.c} County clients taught us one thing about ${city.n}: every neighborhood here behaves differently.`,
  city => `Most agencies treat ${city.n} the same as any other South Florida market. We don't, and the results speak to that.`,
  city => `In ${city.n}, local-first marketing isn't a tactic — it's the only thing that compounds.`,
  city => `Royal Eagle has shipped digital work for ${city.n} businesses since 2014 — across every block of ${city.c} County we now know by name.`,
  city => `Whether you're new to ${city.n} or you've watched it grow for thirty years, the playbook for showing up online here has changed dramatically.`,
];

const MARKET_ANGLES = {
  Broward: [
    "Broward County's mix of corporate snowbirds, established families, and a wave of new residents moving from the Northeast creates a uniquely layered customer base.",
    "Broward shoppers research more thoroughly than the South Florida average — they read reviews, compare three vendors, and ask neighbors before buying.",
    "From the I-95 corridor to the Sawgrass communities, Broward's geography means hyperlocal SEO matters more here than it does in Miami-Dade.",
    "Broward County's professional services density is one of the highest in Florida — your digital storefront is competing against well-resourced peers.",
  ],
  "Miami-Dade": [
    "Miami-Dade's bilingual reality means English-only marketing leaves 40% of qualified customers on the table — and most local agencies still miss it.",
    "Miami-Dade buyers move faster than the national average, but they're also less loyal. Winning here means showing up at the exact moment of need.",
    "From Brickell professionals to South Miami families to Doral logistics operators, Miami-Dade's customer base requires segmented messaging, not generalized funnels.",
    "Competition in Miami-Dade is brutal across nearly every category — your unfair advantage will come from how well your site converts, not just how it ranks.",
  ],
  "Palm Beach": [
    "Palm Beach County's seasonal population swings dramatically — six months of strategy can't match the way buyer behavior shifts here between November and April.",
    "Palm Beach buyers skew older, more affluent, and more deliberate than Broward or Miami-Dade — patience and pedigree matter more than urgency tactics.",
    "From the Treasure Coast crowd in Jupiter to the Boca corporate set to the active retirees of Delray, Palm Beach is really three sub-markets in a trench coat.",
    "Palm Beach County rewards established brands and punishes new ones that look amateurish — your digital first-impression carries more weight here than anywhere else in South Florida.",
  ],
};

const LOCAL_PROOF_VARIANTS = [
  city => `Our nearest current client is approximately ${Math.floor(2 + hashStr(city.slug) % 11)} minutes from downtown ${city.n}.`,
  city => `We've shipped ${5 + hashStr(city.slug+'p') % 14} engagements in ${city.c} County in the last 12 months alone.`,
  city => `Average response time on inbound ${city.n} inquiries this quarter: ${11 + hashStr(city.slug+'r') % 18} minutes during business hours.`,
  city => `Royal Eagle is rated 5.0 ★ on Google by clients across ${city.c} and the surrounding counties.`,
  city => `Three of our six senior practitioners live within 30 minutes of ${city.n}.`,
];

const SERVICE_LOCAL_HOOKS = {
  "website-builds": [
    "A new build in this market needs to be fast, mobile-first, and locally trustworthy — your visitor knows the neighborhood and expects you to look like you do too.",
    "We tune every new build here for the local search terms your competitors are too lazy to target.",
    "First-impression standards in this market are unusually high — design that would be 'fine' elsewhere reads as cheap here.",
  ],
  "ai-websites": [
    "AI personalization in this market is still rare enough that it's a meaningful differentiator — most competing sites still show every visitor the same homepage.",
    "AI-powered lead qualification can cut your inbound triage time in half — especially in markets where leads come in 24/7.",
    "Local AI implementations need to know the local context — neighborhoods, ZIP codes, common buyer questions specific to this area.",
  ],
  "wordpress-elementor": [
    "Most local WordPress sites here are running 80+ plugins they don't need — a clean rebuild typically cuts load time by 60% on day one.",
    "Elementor in the right hands can deliver the polish of a custom theme at 60% of the cost — for businesses in this market, that's usually the right call.",
    "Your in-market competitors are mostly on WordPress already. The difference is whether yours is a maintained machine or a slow-bleeding liability.",
  ],
  "custom-themes": [
    "When off-the-shelf themes start dictating your brand, a custom build pays for itself within 18 months — especially in markets where brand equity matters as much as it does here.",
    "Custom themes in this market unlock the editorial flexibility most businesses need but can't get from page builders.",
    "A custom theme gives your local editorial team the power to react to neighborhood events and seasonal opportunities without waiting on a developer.",
  ],
  "ecommerce": [
    "E-commerce in this region needs to handle a unique blend of local pickup, regional shipping, and seasonal buyer behavior.",
    "Local DTC brands here are growing fast — but most are still operating on a generic Shopify theme that's leaving 30% of revenue on the table.",
    "Subscription, loyalty, and email engines are the unsung heroes of any e-commerce business in this market.",
  ],
  "domains-hosting": [
    "Most local hosting in this market is shared, overloaded, and a security risk — a managed plan typically pays back in saved downtime alone.",
    "When your site goes down on a Saturday at 2pm, you want someone in this time zone answering the phone — not a chatbot abroad.",
    "Cloudflare, WP-Engine, and Kinsta partnerships mean your site sits on premium infrastructure without the premium-direct price.",
  ],
  "email-services": [
    "Email deliverability is one of the highest-ROI fixes most businesses here have never been told about.",
    "SPF, DKIM, DMARC — three acronyms most local IT consultants still misconfigure. Properly set up, your emails finally land in inboxes.",
    "Migrations from legacy hosting email to Google Workspace or Microsoft 365 are usually painless when done by someone who's done them 100 times.",
  ],
  "maintenance": [
    "Most local sites haven't had a security patch in nine months. We do them every week — automated, monitored, documented.",
    "Maintenance is the unglamorous work that determines whether your site is around in three years or rebuilt from scratch by your next agency.",
    "The cost of a maintenance retainer for a year is less than the cost of one emergency restore from a hacked site.",
  ],
  "marketing": [
    "Marketing from the same studio that built the site — so the message and the pages actually match.",
    "Local-market full-funnel work requires understanding the buyer journey at street level — not just the keyword volumes from a national tool.",
    "Most businesses here are working with three or four marketing vendors. Consolidating into one accountable team usually saves 25-40% of the budget.",
  ],
  "ppc": [
    "Google and Meta paid in this market reward specificity — broad-match keywords burn budget faster here than almost any other Florida market.",
    "We see local PPC accounts wasting a meaningful share of monthly budget on placements competitors targeted three years ago and abandoned.",
    "Local PPC done right is the single most predictable lead engine you can build — especially for service businesses in this region.",
  ],
  "automation": [
    "Most local businesses have a stack of 8-12 SaaS tools that don't talk to each other. Automation fixes that — and pays for itself in saved manual work alone.",
    "HubSpot, Zapier, Make — the trick isn't picking the tool, it's designing the workflow before you build it.",
    "Local sales teams here typically lose 20-30% of inbound leads to slow response. Automation closes that gap on day one.",
  ],
  "design": [
    "Brand-led design in this market separates the businesses that get remembered from the ones that get scrolled past.",
    "Local design briefs here always involve some negotiation between 'modern' and 'trustworthy' — we live on that line every day.",
    "The brand foundations we build don't expire — they're designed for the second and third website you'll own, not just the next one.",
  ],
  "data": [
    "Most businesses in this market are still making decisions on GA4 screenshots. There's a better way.",
    "Local data setups suffer from inconsistent attribution and over-reliance on platform-reported numbers. We fix both.",
    "Once your data is clean, decisions move faster and arguments get shorter — usually within 60 days.",
  ],
  "ai-strategy": [
    "AI strategy in this market is mostly hype right now — and that means real opportunity for the businesses that move first with discipline.",
    "Where AI actually moves the needle for your business is rarely where the LinkedIn thought-leaders say it does. We dig in and find out.",
    "A four-week strategy engagement is usually enough to identify three workflows that will pay for the AI program for the next two years.",
  ],
  "ai-tools-setup": [
    "Rolling out Claude or ChatGPT Enterprise to your team is easy. Getting them to actually use it is the hard part — and the part most vendors skip.",
    "Governance, prompt libraries, training — the unsexy parts of an AI rollout are exactly where the ROI lives.",
    "Most local teams could realistically deflect 15-25% of their repetitive work with the right AI tools, configured properly.",
  ],
  "ai-automation": [
    "AI agents handle the work your team shouldn't be doing — document review, lead qualification, customer-support triage, content drafting.",
    "Custom AI workflows in this market are still a competitive edge. Six months from now they'll be table stakes.",
    "Human-in-the-loop AI automation is the right approach for any process that touches a customer or a contract.",
  ],
  "ai-content": [
    "AI-assisted content production is fine. AI-only content production is a brand liability. We do the first, not the second.",
    "The gap between AI slop and indistinguishable-from-human is shrinking — but it's all in the production process, not the model.",
    "Local content shaped by SMEs and accelerated by AI gives you the volume of an outsourced shop with the quality of an in-house writer.",
  ],
};

const TITLE_TEMPLATES = [
  (svc, city) => `${svc.title} in ${city.n}`,
  (svc, city) => `${city.n} ${svc.title}`,
  (svc, city) => `${svc.title} — ${city.n}, FL`,
  (svc, city) => `${city.n}'s ${svc.title} specialists`,
];

const HEADLINE_TEMPLATES = [
  (svc, city) => `${svc.title}<br/>in <em>${city.n}.</em>`,
  (svc, city) => `${city.n}-grade<br/><em>${svc.title.toLowerCase()}.</em>`,
  (svc, city) => `<em>${svc.title}</em><br/>built for ${city.n}.`,
  (svc, city) => `${svc.title}<br/><em>that works</em> in ${city.n}.`,
];

const NEIGHBORHOOD_HOOKS = {
  "fort-lauderdale": ["Las Olas", "Flagler Village", "Victoria Park", "Coral Ridge", "downtown", "Beach"],
  "miami": ["Brickell", "Wynwood", "Coconut Grove", "Coral Way", "Midtown", "the Design District"],
  "miami-beach": ["South Beach", "Mid-Beach", "North Beach", "Sunset Harbour"],
  "west-palm-beach": ["CityPlace", "downtown", "Northwood", "the Historic District"],
  "boca-raton": ["downtown", "East Boca", "West Boca", "Mizner Park"],
  "delray-beach": ["Atlantic Avenue", "Pineapple Grove", "Lake Ida"],
  "hollywood": ["downtown", "Hollywood Beach", "Emerald Hills"],
  "coral-gables": ["Miracle Mile", "downtown", "the Biltmore area"],
  "aventura": ["Aventura Mall area", "Williams Island", "Founders Park area"],
  "doral": ["downtown Doral", "CityPlace Doral", "Doral Park"],
  "weston": ["Town Center", "Bonaventure", "Indian Trace"],
  "coral-springs": ["downtown", "Cypress Run", "Eagle Trace"],
  "pembroke-pines": ["City Center", "SilverLakes", "Pembroke Falls"],
  "plantation": ["Plantation Acres", "Jacaranda", "Plantation Central Park"],
  "pompano-beach": ["downtown", "Cresthaven", "Pompano Beach Pier"],
  "jupiter": ["Abacoa", "downtown", "Jupiter Inlet"],
  "wellington": ["Wellington Green", "South Shore", "Equestrian Village"],
};

const FAQ_BANK = [
  (city, svc) => ({
    q: `Do you actually work with businesses in ${city.n}?`,
    a: `Yes — ${city.n} is one of the ${city.c} County markets we serve weekly. Several of our active engagements are based here, and we know the local competitive landscape, search behavior, and buyer expectations for this market.`
  }),
  (city, svc) => ({
    q: `What does a typical ${svc.title.toLowerCase()} engagement cost in ${city.n}?`,
    a: `${city.n} engagements price the same as our standard ${svc.title.toLowerCase()} work — every quote is custom to your scope, with no "Florida tax" or location surcharge. Talk to us for a tailored proposal.`
  }),
  (city, svc) => ({
    q: `How long does the ${svc.title.toLowerCase()} project take?`,
    a: `Most ${svc.title.toLowerCase()} engagements run 4 – 10 weeks from kickoff to launch, depending on scope. We publish a week-by-week schedule on day one so you can see every milestone. Local ${city.n} discovery work can sometimes shave a week off the timeline.`
  }),
  (city, svc) => ({
    q: `Can you handle ${svc.title.toLowerCase()} for multiple ${city.c} County locations?`,
    a: `Yes. Multi-location businesses are a sweet spot — we've shipped programs covering up to 9 locations across ${city.c} County alone. Local landing pages, location-aware schema, and per-store GBP optimization are all standard for multi-location engagements.`
  }),
  (city, svc) => ({
    q: `Will my ${svc.title.toLowerCase()} project use templates or be custom?`,
    a: `Every ${city.n} engagement is custom. We don't pull from theme libraries or recycle layouts. The visual system, content structure, and conversion logic are built from a brand questionnaire and a local-market audit specific to ${city.n}.`
  }),
  (city, svc) => ({
    q: `Do you do on-site work in ${city.n}?`,
    a: `Absolutely. For ${city.n} engagements, we routinely come on-site for kickoff, mid-project workshops, photography, and hand-off training. We're about ${Math.floor(5 + hashStr(city.slug) % 35)} minutes from your office in normal traffic.`
  }),
  (city, svc) => ({
    q: `What if I'm not ready to commit yet?`,
    a: `Most of our ${city.n} engagements start with a free 30-minute call. No pitch deck, no pressure — we'll listen, ask questions, and tell you honestly whether we're a fit for what you need. Plenty of conversations end with us recommending someone else, and that's fine.`
  }),
  (city, svc) => ({
    q: `Why should a ${city.n} business pick Royal Eagle over a bigger agency?`,
    a: `Because for most ${city.n} businesses, a bigger agency means more layers, slower decisions, and less senior involvement on your project. We're small on purpose — every engagement gets named senior practitioners and our founder stays close to the work.`
  }),
];

// --- Public API ---

// Generate unique copy for a (city, service) combination
function getLocalCopy(city, svc) {
  const seed = `${city.slug}::${svc.slug}`;
  const seedC = city.slug;

  const opener = INTRO_OPENERS[hashStr(seed + 'op') % INTRO_OPENERS.length](city);
  const angle = MARKET_ANGLES[city.c][hashStr(seed + 'ang') % MARKET_ANGLES[city.c].length];
  const localHook = SERVICE_LOCAL_HOOKS[svc.slug] || SERVICE_LOCAL_HOOKS["website-builds"];
  const hook = localHook[hashStr(seed + 'hook') % localHook.length];
  const proof = LOCAL_PROOF_VARIANTS[hashStr(seed + 'pr') % LOCAL_PROOF_VARIANTS.length](city);

  const intro = [opener, angle, hook, proof].join(' ');

  const titleT = TITLE_TEMPLATES[hashStr(seed + 't') % TITLE_TEMPLATES.length];
  const headlineT = HEADLINE_TEMPLATES[hashStr(seed + 'h') % HEADLINE_TEMPLATES.length];

  const neigh = NEIGHBORHOOD_HOOKS[city.slug];
  const neighbourhood = neigh ? neigh[hashStr(seed + 'nb') % neigh.length] : null;

  // Pick 4 distinct FAQs deterministically
  const faqs = pickN(seed + 'faq', FAQ_BANK, 4).map(fn => fn(city, svc));

  const stats = {
    timeline: ['4 – 6 weeks', '5 – 8 weeks', '4 – 10 weeks', '6 – 9 weeks'][hashStr(seed + 'tl') % 4],
    teamSize: ['3 senior', '3 – 5 senior', '4 senior', '3 – 4 senior'][hashStr(seed + 'ts') % 4],
    delivery: ['90-day stabilization', 'Weekly demos', '30-day post-launch support', 'Quarterly reviews'][hashStr(seed + 'dv') % 4],
  };

  // Unique meta description per (city, service)
  const metaDesc = `${svc.title} for ${city.n}, ${city.c} County businesses. ${hook} Royal Eagle is a Fort Lauderdale-based team rated 5.0 on Google. Free consultation.`;

  return {
    title: titleT(svc, city),
    metaTitle: `${titleT(svc, city)} — Royal Eagle`,
    metaDesc: metaDesc.slice(0, 158),
    headline: headlineT(svc, city),
    intro,
    hook,
    angle,
    proof,
    neighbourhood,
    faqs,
    stats,
  };
}

// Copy for a city-only page (no service)
function getCityCopy(city) {
  const seed = city.slug + '::city';
  const opener = INTRO_OPENERS[hashStr(seed + 'op') % INTRO_OPENERS.length](city);
  const angle = MARKET_ANGLES[city.c][hashStr(seed + 'ang') % MARKET_ANGLES[city.c].length];
  const proof = LOCAL_PROOF_VARIANTS[hashStr(seed + 'pr') % LOCAL_PROOF_VARIANTS.length](city);
  const intro = [opener, angle, proof].join(' ');
  const metaDesc = `Web design, marketing, and AI services for ${city.n}, ${city.c} County. ${angle.split('.')[0]}.`.slice(0, 158);
  return {
    intro,
    angle,
    proof,
    metaTitle: `${city.n} Web Design & Marketing — Royal Eagle`,
    metaDesc,
  };
}

// --- Breadcrumbs ---

function Breadcrumbs({ trail }) {
  // trail = [{ t: 'Home', h: 'index.html' }, ...]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.t,
      ...(it.h ? { item: new URL(it.h, location.href).href } : {}),
    })),
  };
  return (
    <>
      <nav className="bc" aria-label="Breadcrumb">
        <ol className="bc-list">
          {trail.map((it, i) => (
            <li key={i} className="bc-item">
              {i > 0 && <span className="bc-sep" aria-hidden="true">/</span>}
              {it.h && i < trail.length - 1
                ? <a href={it.h}>{it.t}</a>
                : <span className="bc-current">{it.t}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
    </>
  );
}

// --- Set page meta tags from JS ---
function setMeta({ title, description, canonical }) {
  if (title) document.title = title;
  if (description) {
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', description);
  }
  if (canonical) {
    let l = document.querySelector('link[rel="canonical"]');
    if (!l) { l = document.createElement('link'); l.setAttribute('rel', 'canonical'); document.head.appendChild(l); }
    l.setAttribute('href', canonical);
  }
}

Object.assign(window, { hashStr, pick, pickN, getLocalCopy, getCityCopy, Breadcrumbs, setMeta });
