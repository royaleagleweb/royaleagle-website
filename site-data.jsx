// ============================================================
// SITE DATA — single source of truth for all pages.
// Service detail, case study, blog post, legal, FAQ content
// is generated from these arrays.
// ============================================================

const SERVICES = [
  // ── Website Builds ──────────────────────────────────────
  {
    slug: "website-builds", cat: "Website Builds", title: "Website Builds",
    hero: "Custom websites that convert — designed, engineered, and shipped in 4–8 weeks.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=85",
    intro: "Every Royal Eagle site starts with measurable goals — qualified leads, online revenue, brand authority — and ends with a build that holds up under real-world traffic. We design in Figma, build on WordPress, Shopify, or headless platforms, and we instrument every conversion path before launch.",
    bullets: ["Custom design in Figma, no template libraries", "Responsive across every device and breakpoint", "WCAG 2.1 AA accessibility audited", "Sub-second LCP performance budgets", "Conversion tracking and analytics on day one", "30-day post-launch stabilization included"],
    price: "Custom quote",
    stack: ["WordPress", "Shopify", "Webflow", "Next.js", "Sanity"],
    deliverables: ["Figma design files", "Production-ready CMS", "Analytics & tracking", "QA & accessibility report", "Training documentation"],
    faqs: [{"q":"How long does a custom website project take from kickoff to launch?","a":"Most marketing websites take 4 to 8 weeks. A larger build with custom integrations, multi-language content, or e-commerce typically runs 10 to 16 weeks. We publish a week-by-week schedule on day one so you can see every milestone."},{"q":"Will I own the website after it launches?","a":"Yes. Upon final payment, the design files, code, content, and accounts are 100% yours. We hand off everything, including admin access, source files, and a documented walkthrough so you can take it elsewhere if you ever need to."},{"q":"Do you use templates, or is every site custom?","a":"Every site is designed from scratch in Figma based on your brand and goals. We don't recycle layouts. We will sometimes start with a familiar pattern when it makes sense — but the visual system, components, and content structure are always built specifically for you."},{"q":"Will my new site be mobile-friendly and accessible?","a":"Yes — responsive design across every breakpoint and WCAG 2.1 AA accessibility are standard, not upgrades. Every site we ship runs through automated and manual accessibility audits before launch."},{"q":"What about ongoing maintenance after launch?","a":"We include 30 days of post-launch stabilization at no additional cost. After that, ongoing maintenance is optional on a monthly plan — see our Maintenance service for details."}],
  },
  {
    slug: "ai-websites", cat: "Website Builds", title: "AI Websites",
    hero: "AI-powered sites that personalize content, qualify leads, and answer questions 24/7.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=85",
    intro: "We embed Claude- and GPT-powered assistants directly into your marketing site — answering product questions, qualifying inbound leads, generating personalized landing pages, and routing high-intent visitors to your sales team in real time.",
    bullets: ["Branded AI chat with custom knowledge base", "Visitor-aware personalization (industry, intent)", "Lead-qualification flows that route to CRM", "AI-generated landing pages from a single brief", "Cost monitoring and rate limiting built in", "Optional human handoff to your sales team"],
    price: "Custom quote",
    stack: ["Claude", "OpenAI", "Vercel AI SDK", "Pinecone"],
    deliverables: ["Trained AI assistant", "Personalization rules", "CRM integration", "Dashboard & monitoring", "Content guidelines"],
    faqs: [{"q":"What makes a website an AI website?","a":"An AI website embeds large-language-model features directly into the user experience — branded chat trained on your knowledge base, AI-powered lead qualification, personalized content per visitor, or AI-generated landing pages from a single brief. It's not a chatbot bolted on as an afterthought; it's intelligence woven into the site's core."},{"q":"Whose AI do you use — OpenAI, Claude, or something else?","a":"We deploy on Claude (Anthropic) by default, with OpenAI's GPT models as a frequent second. For some use cases we use both in an ensemble. The right choice depends on what you need the AI to do."},{"q":"Is my data safe? Will it be used to train AI models?","a":"We deploy on enterprise tiers (Claude for Work, ChatGPT Enterprise, Azure OpenAI) where your data is never used to train the underlying models. For clients with stricter data residency requirements, we can self-host open-source models on your infrastructure."},{"q":"How do you handle AI hallucinations or wrong answers?","a":"We constrain the AI to a defined knowledge base and instrument every response with confidence checks, citation requirements, and human-in-the-loop fallbacks for any uncertain answer."},{"q":"Can the AI hand off to a human when needed?","a":"Absolutely — and this is a feature we recommend for almost every implementation. Visitors with high-intent questions or complex scenarios get smoothly handed to your sales team via email, SMS, or live chat, with full conversation context attached."}],
  },
  {
    slug: "wordpress-elementor", cat: "Website Builds", title: "WordPress & Elementor",
    hero: "WordPress builds your marketing team can actually update — without breaking anything.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=85",
    intro: "We architect WordPress sites with Elementor or Gutenberg, custom blocks, and structured ACF fields so your team can publish confidently. No spaghetti, no abandoned page builders.",
    bullets: ["Elementor Pro or Gutenberg-native builds", "Custom block libraries with your brand tokens", "ACF/Meta Box structured content models", "Role-based publishing workflows", "WP-Engine, Kinsta, or self-hosted infrastructure", "Backups, security, and uptime monitoring"],
    price: "Custom quote",
    stack: ["WordPress", "Elementor Pro", "ACF", "WP-Engine", "Cloudflare"],
    deliverables: ["WordPress install + theme", "Custom block library", "Editor training video series", "Documentation"],
    faqs: [{"q":"Why WordPress in 2026? Isn't it outdated?","a":"WordPress powers 43% of the web because it works — it's flexible, mature, well-supported, and economical to maintain. For most marketing sites and content-driven businesses, it remains the most cost-effective platform that lets your team actually publish content without breaking the site."},{"q":"Will my team be able to update the site after launch?","a":"Yes. That's a core design goal of every build. We deliver custom Elementor or Gutenberg block libraries tuned to your content patterns, with editorial guardrails so your team can publish confidently."},{"q":"Elementor or Gutenberg — which is better?","a":"Depends on your team. Elementor is faster to pick up for less technical editors. Gutenberg is the modern WordPress-native approach with better long-term maintainability. We'll recommend based on who's editing the site and how often."},{"q":"Where will my WordPress site be hosted?","a":"We recommend and partner with WP Engine, Kinsta, and Cloudflare. All three deliver enterprise-grade managed WordPress hosting with security, backups, and performance built in."},{"q":"What happens if a plugin update breaks the site?","a":"Our maintenance plans include a staging environment where every update is tested before going live. If something breaks, we roll back immediately and resolve the conflict — usually within hours."}],
  },
  {
    slug: "custom-themes", cat: "Website Builds", title: "Custom Themes",
    hero: "Hand-coded themes for brands that have outgrown templates.",
    img: "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=1400&q=85",
    intro: "When off-the-shelf themes start dictating your brand, we build from scratch. Block-based, accessible, fast — and engineered so your editorial team has more power, not less.",
    bullets: ["Block-based theme architecture", "Custom Gutenberg blocks per content type", "Style variations & theme.json", "Built-in editorial guardrails", "Sub-200ms server response budgets", "Composer-driven dependency management"],
    price: "Custom quote",
    stack: ["WordPress", "PHP", "React (blocks)", "Composer"],
    deliverables: ["Production theme repo", "Custom block library", "Editorial style guide", "CI/CD pipeline"],
    faqs: [{"q":"When does a custom theme make more sense than Elementor?","a":"Custom themes pay off when your editorial team has specific content patterns that don't fit page-builder paradigms, when brand consistency requires component-level control, or when performance and accessibility budgets are non-negotiable."},{"q":"What goes into building a custom WordPress theme?","a":"We architect block-based themes from scratch — typically including 15 to 25 custom Gutenberg blocks tuned to your content types, ACF field groups for editorial flexibility, a style guide rendered in theme.json, and a CI/CD pipeline for deployment."},{"q":"Will my custom theme work with the WordPress block editor?","a":"Yes — we build block-native themes. Your editors get the full Gutenberg experience plus a custom block library shaped to your brand. No conflicts with the core editor."},{"q":"Can I take my custom theme to a different host or developer later?","a":"Absolutely. Themes are delivered as a standard WordPress theme directory, code-committed to your GitHub or Bitbucket repository. We don't lock you into our ecosystem."},{"q":"How is a custom theme different from a premium theme I could buy?","a":"Off-the-shelf themes are designed to do many things adequately. A custom theme does the things your business actually needs, exactly the way you need them. Cleaner code, no bloat, faster performance, and an editorial experience designed for your team."}],
  },
  {
    slug: "ecommerce", cat: "Website Builds", title: "Ecommerce",
    hero: "Stores that ship — Shopify and WooCommerce builds that are practical to run.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=85",
    intro: "We build and migrate Shopify and WooCommerce stores. Whether you need a first launch or a re-platform, we keep the work practical — products, checkout, and the pages that actually sell.",
    bullets: ["Shopify Plus custom themes", "WooCommerce + WordPress for content commerce", "Subscription & loyalty engines", "Klaviyo email & SMS automation", "Shipping, tax, and ERP integrations", "Headless commerce with Hydrogen or Next.js"],
    price: "Custom quote",
    stack: ["Shopify Plus", "WooCommerce", "Klaviyo", "Hydrogen"],
    deliverables: ["Storefront build", "Klaviyo flows", "Apps & integrations", "Migration plan & data"],
    faqs: [{"q":"Shopify or WooCommerce — which should I use?","a":"Shopify is faster to launch, easier to operate, and better for most direct-to-consumer brands. WooCommerce gives more flexibility, lower long-term costs, and is the right choice for content-heavy stores or unusual product structures."},{"q":"Can you migrate my existing store to a new platform?","a":"Yes. We've migrated stores between Shopify, WooCommerce, BigCommerce, and Magento with zero downtime and full SEO preservation. Product data, customer history, order history, content, and 301 redirects all come over cleanly."},{"q":"Do you handle subscriptions and recurring orders?","a":"Yes — both Shopify (Recharge, Bold) and WooCommerce (Subscriptions, MemberPress) subscription engines are part of our standard toolkit."},{"q":"Can you integrate with my ERP or inventory system?","a":"Yes. Most ERPs (NetSuite, SAP, Acumatica) and inventory systems (Cin7, Brightpearl, Skubana) have established integration patterns we work with. For unusual or custom systems, we build API-based integrations."},{"q":"How long until my store can go live?","a":"A standard Shopify or WooCommerce build takes 6 to 10 weeks. A platform migration with extensive customization takes 10 to 16 weeks. Headless commerce builds run 14 to 20 weeks."}],
  },

  // ── Infrastructure ──────────────────────────────────────
  {
    slug: "domains-hosting", cat: "Infrastructure", title: "Domains & Hosting",
    hero: "Managed hosting for WordPress, Shopify, and custom apps — with humans on call.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85",
    intro: "We resell premium hosting partnerships at WP-Engine, Kinsta, and Cloudflare — but the real product is the team behind it. When something breaks at 2am, you call us, not a chatbot in another time zone.",
    bullets: ["Managed WordPress hosting (WP-Engine, Kinsta)", "Cloudflare CDN + WAF", "Free SSL renewal & DNS management", "Daily off-site backups, 30-day retention", "Monitoring with a human you can call", "30-day money-back guarantee on every plan"],
    price: "Custom quote",
    stack: ["WP-Engine", "Kinsta", "Cloudflare", "Route 53"],
    deliverables: ["Hosting + SSL", "DNS management", "Backup & DR plan", "Status reporting"],
    faqs: [{"q":"Why pay for managed hosting when basic hosts are so cheap?","a":"Cheap hosting saves a few dollars a month and costs you in slow load times, security risks, lost sales when the site goes down, and your team's time spent firefighting. Managed hosting pays for itself the first time you'd otherwise have an outage during business hours."},{"q":"Which hosting providers do you work with?","a":"WP Engine, Kinsta, and Pressable for WordPress; Shopify-managed for Shopify; AWS, Vercel, and Cloudflare for custom and headless builds. We pick based on your stack and traffic — and we resell at our partner pricing."},{"q":"Do you include SSL certificates and a CDN?","a":"Yes — both are standard on every plan. SSL certificates auto-renew via Let's Encrypt or your host. Cloudflare CDN is included on every site we manage, with WAF and bot mitigation turned on by default."},{"q":"What happens if my site gets hacked?","a":"Our managed plans include daily backups with 30-day retention, malware scanning, firewall protection, and 24/7 monitoring. If a site is compromised, we restore from backup, identify the vulnerability, patch it, and document the incident — typically within hours."},{"q":"Can I move my hosting away later if I want?","a":"Yes — there's no lock-in. You own your domain and your site. We hand over full credentials at any time. We work hard to keep clients because we earn it."}],
  },
  {
    slug: "email-services", cat: "Infrastructure", title: "Email Services",
    hero: "Business email, domain authentication, and deliverability — set up properly.",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1400&q=85",
    intro: "We set up Google Workspace and Microsoft 365 for South Florida businesses — and more importantly, we make sure SPF, DKIM, and DMARC are configured so your emails actually land in inboxes, not spam folders.",
    bullets: ["Google Workspace & Microsoft 365 setup", "SPF, DKIM, DMARC configuration", "MX migration & inbox import", "Deliverability audits and BIMI", "Anti-phishing and DLP policy setup", "Email signature management"],
    price: "Custom quote",
    stack: ["Google Workspace", "Microsoft 365", "Mailgun"],
    deliverables: ["Domain auth records", "User migration", "Policy configuration", "Signature templates"],
    faqs: [{"q":"Why do my emails sometimes land in the spam folder?","a":"Most often it's missing or misconfigured email authentication — SPF, DKIM, or DMARC records. We audit your DNS and email setup, fix the authentication, and verify deliverability across major inbox providers. Most clients see a deliverability lift within 48 hours."},{"q":"What's the difference between Google Workspace and Microsoft 365?","a":"Both are excellent. Google Workspace is better if your team already uses Google products. Microsoft 365 is better if you live in Outlook and Office apps. We help you decide and we set either one up properly."},{"q":"Can you migrate my existing email to a new provider without losing messages?","a":"Yes. We handle MX record cutovers, inbox migration, calendar transfer, and shared-drive replication with zero downtime."},{"q":"Do you set up DMARC and BIMI?","a":"Yes — DMARC is a deliverability essential and we configure it for every client. BIMI (the logo that shows in Gmail) requires a verified mark certificate; we help you obtain one if your brand warrants it."},{"q":"What about anti-phishing and security policies?","a":"We configure Google Workspace and Microsoft 365 advanced threat protection, set up DLP policies, and enable mandatory 2FA. For teams handling sensitive data, we layer in additional security training."}],
  },
  {
    slug: "maintenance", cat: "Infrastructure", title: "Maintenance",
    hero: "The unglamorous work that keeps your site fast, secure, and online.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85",
    intro: "Every WordPress and Shopify site needs constant upkeep — security patches, plugin updates, performance tuning, content edits. Our maintenance plans bundle all of it into one predictable monthly retainer.",
    bullets: ["Weekly core/theme/plugin updates", "Malware scanning & firewall management", "Performance optimization & cache tuning", "Monthly editorial content edits", "Quarterly accessibility & SEO audits", "Priority support with 4-hour SLA"],
    price: "Custom quote",
    stack: ["WordPress", "Wordfence", "Cloudflare", "New Relic"],
    deliverables: ["Monthly report", "Update changelog", "Performance snapshots", "Support hours included"],
    faqs: [{"q":"What's actually included in monthly WordPress maintenance?","a":"Weekly plugin, theme, and core updates; daily automated backups; security firewall and malware scanning; performance monitoring; uptime monitoring with human response; monthly editorial content edits (up to 4 hours); quarterly accessibility and SEO health audits."},{"q":"Why not just install update plugins and do it myself?","a":"You can — but plugin updates break sites roughly 1 in 20 times, and finding the root cause is a slow afternoon. Our maintenance plans run every update on a staging environment first."},{"q":"Do you do content updates as part of maintenance?","a":"Yes — every plan includes monthly editorial hours for content edits, page additions, and small layout tweaks. Larger projects are scoped separately."},{"q":"What's your response time when something goes wrong?","a":"Priority support with a 4-hour first-response SLA during business hours. After-hours emergency response within 2 hours for production-down issues."},{"q":"Can I cancel maintenance anytime?","a":"Yes — month-to-month, no contracts beyond a single billing cycle. We have a 30-day money-back guarantee on every plan."}],
  },

  // ── Marketing ───────────────────────────────────────────
  {
    slug: "marketing", cat: "Marketing", title: "Marketing",
    hero: "Full-funnel marketing strategy, content, and execution under one roof.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85",
    intro: "Most marketing engagements suffer from too many vendors and too little accountability. We bring strategy, content, SEO, paid, and email under one team — with one project manager and one set of dashboards.",
    bullets: ["Quarterly strategy & roadmap", "Content production (blog, email, video)", "Technical & local SEO programs", "Paid Google & Meta ads management", "Email/SMS automation flows", "Monthly performance reviews"],
    price: "Custom quote",
    stack: ["HubSpot", "Klaviyo", "Ahrefs", "GA4", "Looker"],
    deliverables: ["Quarterly roadmap", "Content calendar", "Campaign reports", "Live KPI dashboard"],
    faqs: [{"q":"What's included in a full marketing retainer?","a":"Quarterly strategy and roadmap; ongoing content production; technical and local SEO; paid Google and Meta ads management; email and SMS automation flows; conversion-rate optimization; monthly performance reviews with live dashboards."},{"q":"How is this different from hiring an in-house marketing team?","a":"An in-house hire is one salary and one skill set. A retainer here covers the web, content, SEO, and ads work a small business actually needs — with Roy accountable for the work."},{"q":"What kinds of reporting do you provide?","a":"Live Looker Studio dashboards updated daily, monthly written performance summaries with insights, and quarterly business reviews where we go through the strategy and roadmap end-to-end."},{"q":"How quickly should I expect results?","a":"Paid campaigns deliver measurable results within the first 30 days. SEO programs typically show measurable lift in 90 to 120 days. Content programs compound — meaningful organic traffic gains usually visible in months 3 to 6."},{"q":"Do you handle the creative work too, or just strategy?","a":"Both. Design, copy, and production are part of the work — Roy stays in it, and brings in specialists when a project needs extra hands."}],
  },
  {
    slug: "ppc", cat: "Marketing", title: "PPC — Google & Meta",
    hero: "Paid search and social campaigns that compound into a predictable lead engine.",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=85",
    intro: "Google Ads and Meta campaigns with a transparent reporting model. We treat every dollar of your media budget like it's our own.",
    bullets: ["Google Ads — Search, Shopping, Display, YouTube", "Meta Ads — Facebook & Instagram", "TikTok Ads & creator partnerships", "LinkedIn Ads for B2B", "Conversion tracking & attribution", "Bi-weekly optimization reviews"],
    price: "Custom quote",
    stack: ["Google Ads", "Meta Business", "TikTok Ads", "LinkedIn"],
    deliverables: ["Account audit", "Campaign builds", "Creative production", "Bi-weekly reports"],
    faqs: [{"q":"What's your average client cost-per-lead?","a":"It varies dramatically by industry — legal cost-per-lead averages many times what a service business might pay. The honest answer is we'll benchmark against your industry, set a target CPL on day one, and report against it every two weeks."},{"q":"Do you charge a percentage of ad spend?","a":"No — we charge a flat management retainer based on the work involved, not a percentage of media spend. That keeps incentives aligned: we benefit when you grow profitably, not when you spend more on ads."},{"q":"How is media spend billed?","a":"Media (Google, Meta, etc.) is billed directly to your credit card by the ad platform, not by us. No markups, no kickbacks, total transparency."},{"q":"What if my ads aren't performing?","a":"We optimize bi-weekly with documented changes, and we hold a 60-day diagnostic period at the start of every engagement to confirm we can hit target metrics. If we can't, we'll tell you — and refund the previous month if needed."},{"q":"Do you handle TikTok and LinkedIn as well as Google and Meta?","a":"Yes. We run paid campaigns on Google Ads (Search, Shopping, Display, YouTube), Meta (Facebook + Instagram), LinkedIn (B2B), and TikTok."}],
  },
  {
    slug: "automation", cat: "Marketing", title: "Automation",
    hero: "Connect the systems that should already be talking to each other.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    intro: "Lead from a form should land in your CRM, alert the right rep, and start a nurture sequence — automatically. We design and build the HubSpot, Zapier, and Make.com workflows that turn your marketing stack into one machine.",
    bullets: ["HubSpot implementations & optimization", "Zapier & Make.com workflow builds", "Salesforce integrations", "Lead routing & scoring rules", "Email & SMS nurture sequences", "Pipeline reporting & forecasting"],
    price: "Custom quote",
    stack: ["HubSpot", "Zapier", "Make.com", "Salesforce"],
    deliverables: ["Process documentation", "Workflow builds", "Training session", "Quarterly review"],
    faqs: [{"q":"What kinds of business processes can be automated?","a":"Lead routing, follow-up sequences, internal notifications, document generation, data syncing between systems, scheduled reporting, invoice creation, customer onboarding flows, support ticket triage. If a process is repetitive and rule-based, it can probably be automated."},{"q":"Do you build on HubSpot, Salesforce, or something else?","a":"All of the above. HubSpot for most SMBs and growing B2Bs; Salesforce for larger or more complex sales operations; Zapier or Make.com for cross-tool workflows."},{"q":"What's the typical ROI on a marketing automation project?","a":"Most clients see automation pay for itself within 4 to 6 months — usually through faster lead response, recovered abandoned-cart revenue, or saved team hours on manual data work."},{"q":"Will automation replace my team?","a":"No — but it should replace the work your team shouldn't be doing in the first place. The goal is to free your people for the work that actually requires human judgment."},{"q":"How do you handle exceptions and edge cases?","a":"Every automation we build has explicit fallback paths to human review. Edge cases route to a designated person with full context attached. We document every workflow in writing."}],
  },
  {
    slug: "design", cat: "Marketing", title: "Design",
    hero: "Brand systems, marketing creative, and product UI — under one creative direction.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1400&q=85",
    intro: "Brand systems, marketing creative, and product UI — kept consistent across every surface. Roy stays in the design reviews; specialists join when a project needs extra hands.",
    bullets: ["Logo & brand identity systems", "Marketing & ad creative", "Product UI & UX design", "Packaging & print", "Pitch decks & sales collateral", "Photography & video direction"],
    price: "Custom quote",
    stack: ["Figma", "Adobe CC", "Webflow", "After Effects"],
    deliverables: ["Brand guidelines", "Asset library", "Design system in Figma"],
    faqs: [{"q":"Do you do brand identity and logo design, or just website design?","a":"Both. Full brand identity work — logo, type system, color palette, voice, brand guidelines — is a core service. About a third of our website projects start with a brand refresh first."},{"q":"How long does a brand identity engagement take?","a":"Full brand identity work runs 6 to 10 weeks: discovery, strategy and positioning, creative exploration and refinement, final guidelines documentation. Faster timelines are possible for tighter scopes."},{"q":"Will I get editable Figma files?","a":"Yes. Every engagement ends with a complete handoff of Figma files, brand guidelines (PDF + web-based), exported assets in every format, and a brand library you can extend over time."},{"q":"Can you design marketing creative on a retainer?","a":"Yes. Many of our clients keep us on a monthly creative retainer for ongoing campaign work: ad creative, landing pages, email graphics, sales collateral, packaging."},{"q":"What if I'm not sure what kind of brand my business needs?","a":"Then we start with discovery. We'll interview you, your team, and a sample of customers; audit your competitive landscape; and present a written brand strategy before any visual work begins."}],
  },
  {
    slug: "data", cat: "Marketing", title: "Data",
    hero: "Clean data, clear dashboards, decisions you can defend.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    intro: "If your team is making decisions on screenshots from GA4, we can do better. We architect modern analytics stacks — GA4, Segment, BigQuery, Looker — so your dashboards finally tell you something useful.",
    bullets: ["GA4 implementation & audit", "Segment / Rudderstack setup", "BigQuery data warehouse", "Looker / Looker Studio dashboards", "Attribution & MMM modeling", "Privacy-compliant tracking (GDPR, CCPA)"],
    price: "Custom quote",
    stack: ["GA4", "Segment", "BigQuery", "Looker", "dbt"],
    deliverables: ["Tracking plan", "Implementation", "Dashboard suite", "Documentation"],
    faqs: [{"q":"What's wrong with the GA4 setup my agency already did?","a":"We see common issues weekly: wrong events being tracked, conversions counted multiple times, key buyer journeys not captured, attribution windows misconfigured. Most GA4 implementations are 70% correct, which is much worse than it sounds."},{"q":"Do I really need a data warehouse like BigQuery?","a":"If you have more than 3 marketing channels, more than 2 platforms feeding revenue data, or you ever want to do cohort analysis across channels — yes. The cost is modest and the analytical capability it unlocks is substantial."},{"q":"Can you connect my analytics to my CRM and ad platforms?","a":"Yes — that's a big part of modern data work. Connecting GA4, BigQuery, your CRM, and ad platform conversion APIs is the standard setup for any business that takes marketing performance seriously."},{"q":"What does server-side tracking mean and do I need it?","a":"Server-side tracking moves your analytics events from the user's browser (where ad-blockers and iOS privacy features can block them) to your own server. It typically recovers 15-25% of lost conversion data."},{"q":"Can you train my team to actually use the dashboards?","a":"Yes — and we strongly recommend it. Every data project includes a training session for your team and written documentation of what each dashboard does and how to interpret it."}],
  },

  // ── AI Consultation (NEW) ───────────────────────────────
  {
    slug: "ai-strategy", cat: "AI Consultation", title: "AI Strategy",
    hero: "Where AI actually moves the needle for your business — and where it won't.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=85",
    intro: "Most AI initiatives fail because they start with technology, not value. We run a structured 4-week engagement to identify the 3 highest-ROI AI use cases for your business, validate them with prototypes, and produce a 12-month roadmap your CFO can sign off on.",
    bullets: ["Workflow audit & AI opportunity mapping", "ROI sizing for top 10 use cases", "Stakeholder interviews & alignment", "Prototype of top-3 priority use cases", "12-month implementation roadmap", "Vendor & build-vs-buy recommendations"],
    price: "Custom quote",
    stack: ["Claude", "OpenAI", "LangChain", "Pinecone"],
    deliverables: ["Opportunity map", "ROI model", "Prototype demos", "12-month roadmap"],
    faqs: [{"q":"What do I actually get from a 4-week AI strategy engagement?","a":"A written 30-page opportunity assessment, an ROI model for the top 10 AI use cases in your business, working prototypes of the top 3 priorities, a 12-month implementation roadmap, and vendor/build-vs-buy recommendations for each priority."},{"q":"Is my business too small for AI?","a":"Probably not. The right use cases scale with the business. If AI is just hype for your situation, we'll say so."},{"q":"What if AI strategy is just hype for my industry?","a":"It might be. About 1 in 5 strategy engagements end with us recommending limited AI adoption because the ROI just isn't there yet. We'd rather tell you honestly than sell you a roadmap that won't pay back."},{"q":"Who from my team needs to be involved?","a":"Two or three people, typically: a senior leader who can make decisions on direction, an operational leader who knows where the team's time goes, and ideally an IT or data person who can speak to your current stack."},{"q":"What happens after the strategy engagement ends?","a":"Many clients choose to have us implement the recommended roadmap. Many take it in-house. Some hire a different vendor to execute. All three outcomes are fine."}],
  },
  {
    slug: "ai-tools-setup", cat: "AI Consultation", title: "AI Tools Setup",
    hero: "Roll out Claude, ChatGPT Enterprise, and Copilot to your team — with guardrails.",
    img: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1400&q=85",
    intro: "Buying AI seats is easy. Getting your team to actually use them — safely, productively, and consistently — is the hard part. We handle deployment, governance, training, and measurement.",
    bullets: ["Claude for Work & ChatGPT Enterprise rollout", "Microsoft Copilot deployment", "SSO, DLP, and data-residency setup", "Custom prompt libraries per role", "Hands-on training workshops", "Adoption tracking & ROI measurement"],
    price: "Custom quote",
    stack: ["Claude", "ChatGPT", "Copilot", "Okta"],
    deliverables: ["Governance policy", "Prompt library", "Training program", "Adoption dashboard"],
    faqs: [{"q":"Which AI tools do you help deploy?","a":"Claude for Work, ChatGPT Enterprise, Microsoft Copilot, Notion AI, Cursor, Linear AI, and a growing list of vertical AI tools. We assess your team's workflows and recommend the right tools — usually 2 to 4."},{"q":"Why pay you to set this up? Can't my team just buy seats?","a":"You can. Most teams that do see 30% adoption and abandon the program within 6 months. The work that drives lasting adoption — governance policies, role-specific prompt libraries, training, measurement — is what we do."},{"q":"What does governance look like for AI tools?","a":"Defined approved-use cases, data-handling policies, SSO and access controls, audit logging, and an AI usage policy that meets your industry's compliance requirements."},{"q":"How do you measure whether AI tool adoption is working?","a":"Adoption rate, task time savings, output quality scoring, and qualitative team feedback. We dashboard all four and review monthly."},{"q":"How long does an AI tools rollout take?","a":"Typical timeline is 6 to 8 weeks: assessment and tool selection, governance and policy setup, training and rollout, and stabilization with usage tracking."}],
  },
  {
    slug: "ai-automation", cat: "AI Consultation", title: "AI Automation",
    hero: "AI-powered workflows that handle work your team shouldn't be doing.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=85",
    intro: "Document processing, customer support triage, content generation, lead enrichment — anywhere you have repetitive cognitive work, we build AI agents that handle it 24/7 with measurable accuracy.",
    bullets: ["Custom AI agents on Claude & GPT-4", "Document extraction & classification", "Customer support triage agents", "Content generation pipelines", "Lead enrichment & qualification", "Human-in-the-loop oversight"],
    price: "Custom quote",
    stack: ["Claude", "OpenAI", "LangChain", "Temporal"],
    deliverables: ["Agent specifications", "Production deployment", "Monitoring dashboard", "Handoff documentation"],
    faqs: [{"q":"How is AI automation different from regular automation?","a":"Regular automation handles rule-based work — if X then Y. AI automation handles judgment-based work — read this email and classify the intent, then route accordingly. The right answer for most businesses is both."},{"q":"What kinds of work can AI agents handle reliably?","a":"Document extraction and classification, support ticket triage and first-response drafting, lead enrichment, content drafting, code review, meeting note summarization, customer email categorization, internal Q&A on company documents."},{"q":"How do you handle AI making mistakes?","a":"Every AI agent we ship has a confidence-threshold gate — uncertain outputs route to human review. We instrument every workflow with logging, sampling, and quality scoring so you have visibility into accuracy over time."},{"q":"Is this a black-box system, or can I see how it works?","a":"Fully observable. Every AI decision is logged with the inputs, the prompt, the model output, and the confidence score. You can audit any individual decision and review trends across time."},{"q":"Will AI agents take jobs from my team?","a":"In practice, they redirect work, not eliminate it. The goal is to take repetitive judgment work off your plate — not to sell a layoff story."}],
  },
  {
    slug: "ai-content", cat: "AI Consultation", title: "AI Content",
    hero: "AI-assisted content production — at human quality, machine speed.",
    img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1400&q=85",
    intro: "We build content production systems that pair your subject-matter experts with AI co-writers — producing blog posts, ad creative, and product copy 5x faster without sacrificing voice or quality.",
    bullets: ["Brand-trained AI writing assistants", "Blog content production pipelines", "Ad creative variation engines", "Product description generation", "Localization & translation", "Editorial workflow integration"],
    price: "Custom quote",
    stack: ["Claude", "OpenAI", "Sanity", "Webflow"],
    deliverables: ["Trained AI assistants", "Content pipelines", "Editorial workflow", "Monthly reporting"],
    faqs: [{"q":"Won't AI-generated content hurt my SEO?","a":"Bad content hurts SEO. AI-assisted content done well — with subject-matter-expert review, structured editorial process, and proper sourcing — performs the same as fully human-written content. The question is quality, not method."},{"q":"How do you keep AI content on-brand?","a":"We train AI writing assistants on your existing best content — voice, tone, vocabulary, sentence rhythm — and constrain them with style guides and reviewer feedback loops. Output goes through human editorial review before publication."},{"q":"Can you handle long-form content like whitepapers and research?","a":"Yes. AI works best for long-form content as a co-writer with a domain expert: the expert provides the substance and structure, the AI accelerates the drafting and revision."},{"q":"How much content can I produce per month with this?","a":"5 to 10x what your team could produce manually, depending on length and complexity. The bottleneck shifts from drafting to ideation, review, and distribution."},{"q":"Do you handle localization for multiple languages or markets?","a":"Yes. AI is excellent at first-pass translation and localization, which we pair with native-speaker review for any market we ship into."}],
  },
];

const CASE_STUDIES = [
  {
    slug: "doctor-yachts", brand: "Doctor Yachts", tag: "Marine", year: "2026", color: "#1F4A6B",
    url: "https://doctoryachts.com/", location: "Fort Lauderdale, FL",
    services: ["Web Design", "Custom Build"],
    summary: "Mobile boat mechanic serving Fort Lauderdale and South Florida waterways.",
    facts: [["Fort Lauderdale", "Home port"], ["Live site", "doctoryachts.com"], ["Custom build", "Shipped"]],
    shot: "work/doctor-yachts.png",
    imgs: []
  },
  {
    slug: "florida-impact-windows", brand: "Florida Impact Windows & Doors", tag: "Home", year: "2026", color: "#3A6B7A",
    url: "https://floridaimpactwindowsdoors.com/", location: "Hollywood, FL",
    services: ["Web Design", "Marketing site"],
    summary: "Impact windows and doors for Florida homes. Hollywood, FL.",
    facts: [["Hollywood, FL", "Based"], ["Live site", "floridaimpactwindowsdoors.com"], ["Marketing site", "Lead-gen"]],
    shot: "work/florida-impact.png",
    imgs: []
  },
  {
    slug: "space-garage-door", brand: "Space Garage Door Repair", tag: "Home services", year: "2026", color: "#5C2A1A",
    url: "https://spacegaragedoorrepair.com/", location: "",
    services: ["WordPress", "Web Design"],
    summary: "Garage door repair, installs, and opener solutions.",
    facts: [["Live site", "spacegaragedoorrepair.com"], ["WordPress", "Build"]],
    shot: "work/space-garage.png",
    imgs: []
  },
  {
    slug: "green-coast-capital", brand: "Green Coast Capital", tag: "Finance", year: "2026", color: "#2C4A2E",
    url: "https://greencoastcapital.co/", location: "",
    services: ["Web Design"],
    summary: "Business funding site — working capital, live at greencoastcapital.co.",
    facts: [["Live site", "greencoastcapital.co"]],
    shot: "work/green-coast.png",
    imgs: []
  },
];

const BLOG_POSTS = [
  { slug: "ai-website-personalization-2026", title: "How AI personalization is reshaping marketing websites in 2026", cat: "AI", date: "May 18, 2026", read: "8 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=85", excerpt: "Personalization used to mean swapping a first name into an email subject line. In 2026, it means rendering an entirely different landing page for a returning visitor than a first-time prospect — and AI is the difference." },
  { slug: "wordpress-vs-webflow-2026", title: "WordPress vs Webflow vs Shopify: a 2026 decision framework", cat: "Web Design", date: "May 11, 2026", read: "12 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=85", excerpt: "Every quarter someone asks us which platform we'd build their site on. The honest answer is 'it depends' — but here are the four questions that actually decide it." },
  { slug: "lcp-under-1-second", title: "The five changes that took our clients' LCP below 1 second", cat: "Performance", date: "May 04, 2026", read: "10 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85", excerpt: "Google's Core Web Vitals threshold for 'Good' LCP is 2.5s. Here's the practical work that actually moves a marketing site toward that number." },
  { slug: "claude-for-sales-teams", title: "Five Claude workflows every sales team should be running by now", cat: "AI", date: "Apr 27, 2026", read: "9 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1400&q=85", excerpt: "The sales-and-AI conversation has moved past 'will it replace SDRs?' to the more useful question: which exact tasks should you offload, and which should stay human?" },
  { slug: "google-ads-2026-changes", title: "What changed in Google Ads in Q1 2026 — and what it means for budgets", cat: "Paid Media", date: "Apr 20, 2026", read: "7 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=85", excerpt: "Performance Max keeps getting more autonomous, manual exclusions keep getting weaker, and YouTube placements are eating Search budget. Here's how we're adjusting." },
  { slug: "wcag-22-aa-checklist", title: "The complete WCAG 2.2 AA checklist for marketing websites", cat: "Accessibility", date: "Apr 13, 2026", read: "14 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85", excerpt: "Accessibility isn't a moral nice-to-have any more — it's a legal floor. Here's the full checklist we run every site through before we ship." },
  { slug: "shopify-headless-2026", title: "Should you go headless on Shopify in 2026? A flowchart.", cat: "E-commerce", date: "Apr 06, 2026", read: "8 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85", excerpt: "Headless Shopify with Hydrogen is now genuinely production-ready. But it's also genuinely overkill for 80% of stores. Here's how we decide." },
  { slug: "hubspot-vs-salesforce-2026", title: "HubSpot vs Salesforce in 2026 — what changed, and who wins", cat: "Automation", date: "Mar 30, 2026", read: "11 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85", excerpt: "The old rule was Salesforce for enterprise, HubSpot for SMB. In 2026 the line has moved. Here's where we land in 2026 — and the three questions that decide for any specific business." },
  { slug: "south-florida-local-seo", title: "Local SEO playbook for South Florida service businesses", cat: "SEO", date: "Mar 23, 2026", read: "13 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85", excerpt: "Ranking in Broward is not the same problem as ranking in Miami-Dade. Here's a practical playbook for South Florida service businesses." },
  { slug: "klaviyo-flows-roi", title: "The 7 Klaviyo flows that pay for the rest of your marketing stack", cat: "E-commerce", date: "Mar 16, 2026", read: "9 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1400&q=85", excerpt: "If your store is past the early stage and you are not running these seven flows, you are leaving money on the table." },
  { slug: "ai-content-quality-bar", title: "Where AI content stops being slop — a 2026 quality framework", cat: "AI", date: "Mar 09, 2026", read: "10 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1400&q=85", excerpt: "AI-written content has earned a bad reputation, mostly deserved. But the gap between 'AI slop' and 'indistinguishable from human' comes down to four production-process changes." },
  { slug: "elementor-vs-gutenberg-2026", title: "Elementor vs Gutenberg in 2026 — and why we still pick both", cat: "WordPress", date: "Mar 02, 2026", read: "8 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=85", excerpt: "WordPress's block editor has finally matured. Elementor is no longer obviously the right choice. Here's how we pick between them — sometimes on the same project." },
  { slug: "meta-ads-ios-attribution", title: "Meta Ads after the iOS dust settled — the real attribution playbook", cat: "Paid Media", date: "Feb 23, 2026", read: "11 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=85", excerpt: "iOS 14.5 was supposed to kill Facebook ads. It didn't — but it changed how you have to measure them. Here's the modeled-attribution setup that actually works." },
  { slug: "design-systems-small-teams", title: "Design systems for teams of one — a pragmatic Figma playbook", cat: "Design", date: "Feb 16, 2026", read: "9 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1400&q=85", excerpt: "You don't need 200 components to have a design system. Here's the minimum viable Figma library we ship with every brand engagement." },
  { slug: "ga4-server-side-tracking", title: "GA4 server-side tracking — when it's worth the setup", cat: "Data", date: "Feb 09, 2026", read: "10 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85", excerpt: "Server-side GTM solves the ad-blocker and iOS-tracking problems — but adds a real layer of infrastructure. Here's where the ROI flips positive." },
  { slug: "tiktok-shop-2026", title: "TikTok Shop in 2026 — should you be on it?", cat: "E-commerce", date: "Feb 02, 2026", read: "7 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1400&q=85", excerpt: "TikTok Shop is no longer experimental. Three categories are winning hard, two are bleeding cash, and one is wildly underrated. Here's our 2026 read." },
  { slug: "wordpress-security-2026", title: "WordPress security in 2026 — the checklist we run on every site", cat: "WordPress", date: "Jan 26, 2026", read: "12 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85", excerpt: "WordPress powers 43% of the web, which means it's also the single largest target. Here's the practical security checklist we run on every site we host." },
  { slug: "lead-scoring-models", title: "Building a lead-scoring model that actually predicts revenue", cat: "Automation", date: "Jan 19, 2026", read: "11 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85", excerpt: "Most lead-scoring models are vibes wrapped in math. Here's how we build models that demonstrably correlate with close rate and contract size." },
  { slug: "rebrand-without-losing-seo", title: "How to rebrand without losing your SEO", cat: "SEO", date: "Jan 12, 2026", read: "9 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85", excerpt: "Rebranding usually means a new domain, new URL structure, and a terrifying drop in organic traffic. It doesn't have to. Here's the redirect-and-content map we use." },
  { slug: "agency-pricing-2026", title: "Why we publish our prices in 2026 (and you should too)", cat: "Agency Life", date: "Jan 05, 2026", read: "6 min", author: "Roy Bachar", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=85", excerpt: "Most agencies hide their pricing. We've published ours since 2023, and the data on what it does to lead quality is unambiguous." },
];

const FAQS = [
  { q: "How long does a typical website project take?", a: "A standard marketing site takes 4–8 weeks from kickoff to launch; a large WordPress build or e-commerce site can run 10–16 weeks. We publish a week-by-week schedule on day one and you'll have visibility into every milestone.", group: "Process" },
  { q: "What's included in your monthly maintenance plans?", a: "Weekly plugin/theme/core updates, malware scanning and firewall management, performance tuning, monthly editorial edits (up to 4 hours), quarterly accessibility and SEO audits, and priority support with a 4-hour first-response SLA.", group: "Maintenance" },
  { q: "Do you work with businesses outside of South Florida?", a: "Yes. The shop is in Lauderhill, just west of Fort Lauderdale, and most clients are nearby. Remote work is fine when the project fits.", group: "Engagement" },
  { q: "Can we keep our existing WordPress host?", a: "Usually yes. We work with most managed WordPress hosts (WP-Engine, Kinsta, Pagely, Pressable). If you're on shared budget hosting that can't support our performance targets, we'll recommend a migration as part of the engagement.", group: "Technical" },
  { q: "How do you price ongoing marketing engagements?", a: "Marketing retainers are scoped to your needs and quoted custom. We bill ad media spend separately, at cost, with full transparency in monthly reports. There are no media markups, no kickbacks, no minimum-spend lock-ins.", group: "Pricing" },
  { q: "Do you offer 30-day money-back guarantees?", a: "Yes — on hosting and maintenance plans we offer a 30-day money-back guarantee. On project work, we structure milestone payments so you can pause or exit the engagement after any completed phase.", group: "Engagement" },
  { q: "Who actually does the work — you or subcontractors?", a: "Roy does the work. When a project needs extra hands — photography, a specialist developer, a specific ad-ops skill — he brings in people he trusts and tells you first. There is no fake org chart.", group: "Process" },
  { q: "Do you do white-label work for other agencies?", a: "Yes, when it's a good fit. See the White Label page if you need a WordPress, Shopify, or AI build under your brand.", group: "Engagement" },
  { q: "What does an AI Strategy engagement actually deliver?", a: "A four-week engagement produces a 30-page opportunity map, an ROI model for the top 10 AI use cases in your business, working prototypes of the top 3, and a 12-month implementation roadmap with vendor and build-vs-buy recommendations.", group: "AI" },
  { q: "Is my data safe with your AI workflows?", a: "Yes. We deploy AI on enterprise tiers (Claude for Work, ChatGPT Enterprise, Azure OpenAI) where your data is never used for model training. We can also deploy private models on AWS Bedrock or self-host open-source models for clients with stricter data residency requirements.", group: "AI" },
  { q: "How does your affiliate program work?", a: "We pay a 15% commission on the first 12 months of any client you refer. Tracked via FirstPromoter, paid monthly via PayPal or ACH.", group: "Affiliates" },
  { q: "What is the typical engagement size?", a: "Engagements range from monthly maintenance retainers up to full-funnel marketing operations across multiple locations. Every engagement is custom-quoted.", group: "Pricing" },
];

const TEAM = [
  { n: "Roy Bachar", r: "Founder", bio: "Founded Royal Eagle in the Fort Lauderdale area in 2014. Hands-on through every engagement — from first call to post-launch. WordPress, custom sites, marketing, and AI when it actually helps. He answers the phone.", img: "" },
];

// Real Google review excerpts (from royaleagleweb.com Google Business profile)
const GOOGLE_REVIEWS = [
  { q: "Professional service! I like the way the project was done, from A to Z. Roy was very responsive and answered all my questions in a timely manner. I asked Roy to refresh how my site looked — he did a great job and added graphics and a new logo as well. If you're looking for a web designer in Fort Lauderdale, give this guy a call.", a: "Verified Google Review", r: "Web design client", stars: 5 },
  { q: "I was looking for a web designer and web developer in Fort Lauderdale for my business and found Roy and his company. He's been extremely helpful with his marketing strategy and website — the communication was great at a very reasonable price.", a: "Verified Google Review", r: "Marketing client", stars: 5 },
  { q: "Roy has been very helpful with marketing and web design consultation and also fixed technical issues I had with my emails that didn't work properly. Highly recommend Roy — solved all my web and hosting issues.", a: "Verified Google Review", r: "Hosting & email client", stars: 5 },
];

const SITE_MAP = [
  { title: "Company", links: [
    { t: "Home", h: "index.html" },
    { t: "About Us", h: "about.html" },
    { t: "Our Story", h: "our-story.html" },
    { t: "Team", h: "team.html" },
    { t: "Regions", h: "regions.html" },
    { t: "Testimonials", h: "testimonials.html" },
    { t: "Affiliates", h: "affiliates.html" },
    { t: "White Label", h: "white-label.html" },
    { t: "Contact", h: "contact.html" },
  ]},
  { title: "Website Builds", links: [
    { t: "All Services", h: "services.html" },
    { t: "Website Builds", h: "service.html?s=website-builds" },
    { t: "AI Websites", h: "service.html?s=ai-websites" },
    { t: "WordPress / Elementor", h: "service.html?s=wordpress-elementor" },
    { t: "Custom Themes", h: "service.html?s=custom-themes" },
    { t: "E-commerce", h: "service.html?s=ecommerce" },
  ]},
  { title: "Infrastructure", links: [
    { t: "Domains & Hosting", h: "service.html?s=domains-hosting" },
    { t: "Email Services", h: "service.html?s=email-services" },
    { t: "Maintenance", h: "service.html?s=maintenance" },
  ]},
  { title: "Marketing", links: [
    { t: "Marketing", h: "service.html?s=marketing" },
    { t: "PPC (Google & Meta)", h: "service.html?s=ppc" },
    { t: "Automation", h: "service.html?s=automation" },
    { t: "Design", h: "service.html?s=design" },
    { t: "Data", h: "service.html?s=data" },
  ]},
  { title: "AI Consultation", links: [
    { t: "AI Strategy", h: "service.html?s=ai-strategy" },
    { t: "AI Tools Setup", h: "service.html?s=ai-tools-setup" },
    { t: "AI Automation", h: "service.html?s=ai-automation" },
    { t: "AI Content", h: "service.html?s=ai-content" },
  ]},
  { title: "Resources", links: [
    { t: "Portfolio", h: "portfolio.html" },
    { t: "Case Studies", h: "case-studies.html" },
    { t: "Blog", h: "blog.html" },
    { t: "Resources", h: "resources.html" },
    { t: "Pricing", h: "pricing.html" },
    { t: "FAQ", h: "faq.html" },
  ]},
  { title: "Legal", links: [
    { t: "Privacy Policy", h: "legal.html?s=privacy" },
    { t: "Terms of Service", h: "legal.html?s=terms" },
    { t: "Accessibility", h: "legal.html?s=accessibility" },
    { t: "Sitemap", h: "sitemap.html" },
  ]},
];

// Expose globally
Object.assign(window, { SERVICES, CASE_STUDIES, BLOG_POSTS, FAQS, TEAM, GOOGLE_REVIEWS, SITE_MAP });
