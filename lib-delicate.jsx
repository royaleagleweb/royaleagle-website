// ============================================================
// DELICATE — refined ornamental components used site-wide.
// Filigree dividers, drop caps, Roman numerals, corner
// brackets, floating gold sparkles, signature emblem.
// ============================================================

// Ornamental divider — Art-Nouveau filigree, thin gold center mark.
function Filigree({ variant = "diamond", className = "" }) {
  return (
    <div className={`filigree filigree-${variant} ${className}`} aria-hidden="true">
      <span className="fil-line"></span>
      <span className="fil-mark">
        {variant === "diamond" && (
          <svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 2l4 10-4 10-4-10z" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M2 12l10-4 10 4-10 4z" fill="none" stroke="currentColor" strokeWidth="1"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
        )}
        {variant === "fleur" && (
          <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1"><path d="M16 4c0 4-3 5-3 8s3 3 3 6-3 4-3 6 3 4 3 4-3 0-3-4 3-4 3-6-3-3-3-6 3-4 3-8zM4 16c4 0 5 3 8 3s3-3 6-3 4 3 6 3 4-3 4-3-3 3-4 3-4-3-6-3-3 3-6 3-4-3-8-3z"/><circle cx="16" cy="16" r="1.6" fill="currentColor"/></svg>
        )}
        {variant === "eagle" && (
          <svg viewBox="0 0 40 24" width="38" height="22"><g fill="currentColor"><path d="M20 4 L18 8 L22 8 Z"/><path d="M20 8 L16 14 L24 14 Z" opacity="0.8"/><path d="M16 14 L4 11 L0 14 L8 13 L4 17 L12 15 L20 14 Z" opacity="0.9"/><path d="M24 14 L36 11 L40 14 L32 13 L36 17 L28 15 L20 14 Z" opacity="0.9"/><path d="M18 14 L20 20 L22 14 Z"/></g></svg>
        )}
      </span>
      <span className="fil-line"></span>
    </div>
  );
}

// Roman-numeral section label, paired with optional small caps copy.
function ChapterLabel({ numeral, label }) {
  return (
    <div className="chapter-label" aria-hidden="true">
      <span className="cl-num">{numeral}</span>
      {label && (
        <>
          <span className="cl-rule"></span>
          <span className="cl-text">{label}</span>
        </>
      )}
    </div>
  );
}

// Slow-drifting gold sparkles. Decorative only.
function Sparkles({ count = 14, area = "section" }) {
  const items = React.useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
    size: 2 + Math.random() * 3,
  })), [count]);
  return (
    <div className={`sparkles sparkles-${area}`} aria-hidden="true">
      {items.map(s => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
        />
      ))}
    </div>
  );
}

// Drop cap — first letter of paragraph rendered ornate.
function DropCap({ children }) {
  const text = typeof children === 'string' ? children : '';
  if (!text) return <p>{children}</p>;
  const first = text[0];
  const rest = text.slice(1);
  return (
    <p className="dropcap-p">
      <span className="dropcap">{first}</span>{rest}
    </p>
  );
}

// Corner-bracket frame — for featured cards / pull-quotes.
function CornerFrame({ children, className = "" }) {
  return (
    <div className={`corner-frame ${className}`}>
      <span className="cf-c cf-tl" aria-hidden="true"></span>
      <span className="cf-c cf-tr" aria-hidden="true"></span>
      <span className="cf-c cf-bl" aria-hidden="true"></span>
      <span className="cf-c cf-br" aria-hidden="true"></span>
      {children}
    </div>
  );
}

// Tiny wax-seal style emblem with the eagle silhouette.
function WaxSeal({ size = 80 }) {
  return (
    <div className="wax-seal" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id="wsGrad" cx="0.35" cy="0.35" r="0.7">
            <stop offset="0%" stopColor="var(--gold-hi)"/>
            <stop offset="100%" stopColor="var(--gold)"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#wsGrad)"/>
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" strokeDasharray="2 2"/>
        <g fill="rgba(0,0,0,0.22)">
          <path d="M50 28 L46 34 L54 34 Z"/>
          <path d="M50 34 L44 46 L56 46 Z"/>
          <path d="M44 46 L28 42 L24 46 L34 45 L30 51 L40 48 L50 46 Z"/>
          <path d="M56 46 L72 42 L76 46 L66 45 L70 51 L60 48 L50 46 Z"/>
          <path d="M46 46 L50 60 L54 46 Z"/>
        </g>
        {/* Outer text — circular "ROYAL EAGLE · EST 2014 ·" */}
        <defs>
          <path id="wsArc" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
        </defs>
        <text fontSize="6.2" letterSpacing="2.4" fill="rgba(0,0,0,0.32)" fontFamily="var(--serif)">
          <textPath href="#wsArc" startOffset="0%">ROYAL EAGLE · EST 2014 · ROYAL EAGLE · EST 2014 ·</textPath>
        </text>
      </svg>
    </div>
  );
}

// Hairline gold horizontal rule.
function Hairline({ width = "60px", className = "" }) {
  return (
    <span className={`hairline ${className}`} style={{ width }} aria-hidden="true"></span>
  );
}

Object.assign(window, { Filigree, ChapterLabel, Sparkles, DropCap, CornerFrame, WaxSeal, Hairline });
