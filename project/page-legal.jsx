// LEGAL PAGES — driven by ?s=privacy | terms | accessibility

const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Effective May 25, 2026",
    sections: [
      { h: "Who we are", p: "Royal Eagle Web Design & Marketing LLC operates royaleagleweb.com and provides web design, marketing, and AI consulting services to clients in the United States and abroad. We are headquartered at 4440 Inverrary Blvd, Fort Lauderdale, FL 33319, and can be contacted at privacy@royaleagleweb.com." },
      { h: "What we collect", p: "We collect information you provide directly — name, email address, phone number, and company information you submit through forms on our website. We also collect anonymized analytics data including page views, referral source, device type, and approximate location (city level), through Google Analytics 4 and Plausible Analytics. When you contact us by phone or email, we retain that correspondence for the duration of our engagement plus seven years for tax and contractual recordkeeping." },
      { h: "How we use it", p: "We use the information you provide to respond to inquiries, deliver services we've agreed to, send transactional and project-related communications, and (with your explicit opt-in) send periodic newsletter content about web design and marketing topics. We do not sell, rent, or trade personal information to third parties under any circumstance." },
      { h: "Cookies and tracking", p: "Our site uses functional cookies necessary for the site to operate, and analytics cookies which you can opt out of via the cookie banner. We do not deploy advertising cookies or third-party pixels on royaleagleweb.com itself. Sites we build for clients may use different cookie configurations as directed by those clients." },
      { h: "Third parties", p: "We rely on a small set of trusted vendors to deliver our services: Google Workspace for email and document storage, HubSpot for CRM, Stripe for payment processing, WP-Engine for hosting, Cloudflare for content delivery, and (where applicable) Claude or OpenAI APIs for AI-assisted features. Each vendor has signed data processing agreements with us aligned with GDPR and CCPA requirements." },
      { h: "Your rights", p: "If you are a resident of California, the EU, or the UK, you have the right to request access to, correction of, or deletion of personal data we hold about you, and to lodge a complaint with your local data protection authority. To exercise any of these rights, contact privacy@royaleagleweb.com and we'll respond within 30 days." },
      { h: "Children's data", p: "Our services are not directed at children under 16, and we do not knowingly collect personal information from them. If you believe a child has provided us with personal information, contact us immediately and we'll delete it." },
      { h: "Changes to this policy", p: "We may update this policy from time to time. Material changes will be communicated via email to active clients and prominently noted on this page. The 'effective date' at the top indicates when the current version took effect." },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Effective May 25, 2026",
    sections: [
      { h: "Agreement", p: "By engaging Royal Eagle for any service or making use of royaleagleweb.com, you agree to these terms. Project-specific terms in any signed Statement of Work supersede these general terms where the two differ." },
      { h: "Engagement scope", p: "Each engagement is defined by a written Statement of Work or service agreement specifying deliverables, timeline, milestones, and fees. Work outside the scope of a signed agreement is billed at our standard hourly rate and requires explicit written approval before commencement." },
      { h: "Payment terms", p: "Project work is typically billed in milestone installments — 30% on kickoff, 30% on design approval, 40% on launch. Retainers are billed monthly in advance, due on the first of each month. Past-due invoices accrue interest at 1.5% per month or the maximum permitted by Florida law. We reserve the right to suspend ongoing work on accounts more than 30 days past due." },
      { h: "Ownership", p: "Upon final payment, all project deliverables — designs, code, copy, brand assets — become the client's intellectual property. Royal Eagle retains the right to display project work in our portfolio and case studies unless explicitly excluded in the engagement agreement. Pre-existing Royal Eagle tooling, frameworks, and methodologies remain our property." },
      { h: "Warranties and liability", p: "We warrant that all work will be performed in a professional manner consistent with industry standards. We do not warrant uninterrupted or error-free operation of any deployed system, and our total liability under any engagement is capped at the fees paid in the preceding 12 months. We carry industry-standard professional liability insurance and can provide certificates on request." },
      { h: "Termination", p: "Either party may terminate an engagement with 30 days' written notice. On termination, the client pays for all work completed through the termination date plus any committed-but-unrecoverable third-party costs (ad spend, software licenses, etc.)." },
      { h: "Governing law", p: "These terms are governed by the laws of the State of Florida. Disputes will be resolved first through good-faith negotiation, then through binding arbitration in Broward County, Florida, under AAA commercial rules." },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    eyebrow: "Last reviewed May 25, 2026",
    sections: [
      { h: "Our commitment", p: "Royal Eagle is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards on our own website and on every client engagement." },
      { h: "Conformance status", p: "The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. They define three levels of conformance: Level A, Level AA, and Level AAA. royaleagleweb.com is partially conformant with WCAG 2.2 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard." },
      { h: "Our process", p: "Every site we ship — both our own and our clients' — runs through a 4-stage accessibility process: (1) automated scanning via Axe DevTools and Lighthouse, (2) manual keyboard-navigation testing, (3) screen-reader testing with VoiceOver and NVDA, and (4) a final audit by a contracted accessibility specialist." },
      { h: "Known limitations", p: "Some third-party embedded content (e.g. Calendly embeds, YouTube videos) may not fully conform to WCAG 2.2 AA. We work with vendors continuously to advocate for improvements and provide alternative access paths where embedded content is critical to the user journey." },
      { h: "Feedback", p: "We welcome feedback on the accessibility of royaleagleweb.com. If you encounter accessibility barriers, please contact us at accessibility@royaleagleweb.com or by phone at 754-233-4037. We aim to respond to accessibility feedback within 5 business days." },
      { h: "Formal complaints", p: "If you are not satisfied with our response, you may file a complaint with the U.S. Department of Justice under Title III of the Americans with Disabilities Act." },
    ],
  },
};

function LegalPage() {
  const slug = getSlug() || "privacy";
  const page = LEGAL_PAGES[slug] || LEGAL_PAGES.privacy;
  return (
    <PageShell active="legal">
      <section className="section legal-hero">
        <div className="legal-eyebrow">{page.eyebrow}</div>
        <h1 className="legal-title">{page.title}</h1>
        <div className="legal-nav">
          <a href="legal.html?s=privacy" className={slug === "privacy" ? "is-active" : ""}>Privacy</a>
          <a href="legal.html?s=terms" className={slug === "terms" ? "is-active" : ""}>Terms</a>
          <a href="legal.html?s=accessibility" className={slug === "accessibility" ? "is-active" : ""}>Accessibility</a>
        </div>
      </section>
      <section className="section legal-body">
        <div className="legal-toc">
          <div className="bp-toc-h">Contents</div>
          {page.sections.map((s, i) => (
            <a key={i} href={`#sec-${i}`}>{s.h}</a>
          ))}
        </div>
        <div className="legal-content">
          {page.sections.map((s, i) => (
            <div key={i} className="legal-section" id={`sec-${i}`}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
          <div className="legal-contact">
            Questions? <a href="contact.html">Get in touch →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LegalPage/>);
