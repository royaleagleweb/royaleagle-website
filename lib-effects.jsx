// ============================================================
// EFFECTS — custom cursor, scroll bar, magnetic buttons,
// tilt, text reveal, and the EAGLE PARTICLE FIELD canvas.
// ============================================================

// ---- Custom gold cursor companion ----
function CustomCursor() {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  React.useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('cursor-active');
    let tx = 0, ty = 0, dx = 0, dy = 0, rx = 0, ry = 0;
    const onMove = e => { tx = e.clientX; ty = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let raf;
    const tick = () => {
      dx += (tx - dx) * 0.5;
      dy += (ty - dy) * 0.5;
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const enter = () => document.body.classList.add('cursor-hover');
    const leave = () => document.body.classList.remove('cursor-hover');
    const bind = () => {
      document.querySelectorAll('a, button, [role="button"], .tilt-card, .sig-card, .svc-hub-card, .ci-card').forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.body.classList.remove('cursor-active');
      obs.disconnect();
    };
  }, []);
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </>
  );
}

// ---- Scroll progress bar at top ----
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true"></div>;
}

// ---- Magnetic button hook ----
function useMagnetic(strength = 0.25) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(pointer: coarse)').matches) return;
    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return ref;
}

// Wrapper that gives a child element magnetic behavior
function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useMagnetic(strength);
  return <span ref={ref} className={`magnetic ${className}`}>{children}</span>;
}

// ---- 3D Tilt on hover ----
function useTilt(max = 8) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(pointer: coarse)').matches) return;
    let raf;
    let cx = 0, cy = 0, tcx = 0, tcy = 0;
    const onMove = e => {
      const rect = el.getBoundingClientRect();
      tcx = ((e.clientX - rect.left) / rect.width - 0.5) * max;
      tcy = ((e.clientY - rect.top) / rect.height - 0.5) * max;
    };
    const onLeave = () => { tcx = 0; tcy = 0; };
    const tick = () => {
      cx += (tcx - cx) * 0.15;
      cy += (tcy - cy) * 0.15;
      el.style.transform = `perspective(1200px) rotateY(${cx}deg) rotateX(${-cy}deg)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max]);
  return ref;
}

function TiltCard({ children, max = 6, className = "" }) {
  const ref = useTilt(max);
  return <div ref={ref} className={`tilt-card ${className}`}>{children}</div>;
}

// ---- Word-by-word reveal ----
function RevealText({ children, stagger = 60, delay = 0, as = "span", className = "" }) {
  const text = typeof children === 'string' ? children : React.Children.toArray(children).map(c => typeof c === 'string' ? c : '').join('');
  const words = text.split(' ');
  const Tag = as;
  return (
    <Tag className={`reveal-text ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="reveal-word">
          <span className="reveal-word-inner" style={{ animationDelay: `${delay + i * stagger}ms` }}>{w}{i < words.length - 1 ? '\u00A0' : ''}</span>
        </span>
      ))}
    </Tag>
  );
}

// ---- EAGLE PARTICLE FIELD — Canvas hero centerpiece ----
function EagleParticleField() {
  const canvasRef = React.useRef(null);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    let W = 0, H = 0;
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // Rasterize eagle silhouette to an offscreen canvas, then sample
    const off = document.createElement('canvas');
    off.width = 200;
    off.height = 200;
    const octx = off.getContext('2d');
    octx.fillStyle = '#fff';
    octx.fill(new Path2D('M100 38 L94 48 L88 46 L92 54 L86 58 L96 62 L100 70 L104 62 L114 58 L108 54 L112 46 L106 48 Z'));
    octx.fill(new Path2D('M100 70 L92 82 L96 110 L100 130 L104 110 L108 82 Z'));
    octx.fill(new Path2D('M92 82 L60 70 L40 80 L36 96 L52 92 L46 106 L62 100 L58 116 L74 108 L72 122 L88 112 L96 110 Z'));
    octx.fill(new Path2D('M108 82 L140 70 L160 80 L164 96 L148 92 L154 106 L138 100 L142 116 L126 108 L128 122 L112 112 L104 110 Z'));
    octx.fill(new Path2D('M96 130 L88 154 L100 146 L112 154 L104 130 Z'));
    // Sample non-empty pixels every 2.4px
    const img = octx.getImageData(0, 0, 200, 200);
    const points = [];
    for (let y = 6; y < 200; y += 2.4) {
      for (let x = 6; x < 200; x += 2.4) {
        const i = (Math.floor(y) * 200 + Math.floor(x)) * 4 + 3;
        if (img.data[i] > 180) points.push({ x: x / 200, y: y / 200 });
      }
    }
    // Shuffle for organic distribution
    for (let i = points.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [points[i], points[j]] = [points[j], points[i]];
    }

    const count = Math.min(360, points.length);
    const particles = [];
    for (let i = 0; i < count; i++) {
      const t = points[i % points.length];
      particles.push({
        tx: t.x, ty: t.y,
        x: 0.5 + (Math.random() - 0.5) * 0.4,
        y: 0.5 + (Math.random() - 0.5) * 0.4,
        vx: 0, vy: 0,
        size: 1 + Math.random() * 2.4,
        orbitR: 1 + Math.random() * 3.5,
        orbitT: Math.random() * Math.PI * 2,
        orbitS: 0.25 + Math.random() * 0.45,
        glow: Math.random() * Math.PI * 2,
      });
    }

    // Mouse position relative to canvas (in normalized 0-1)
    let mx = -1, my = -1;
    const onMove = e => {
      const rect = wrap.getBoundingClientRect();
      mx = (e.clientX - rect.left) / rect.width;
      my = (e.clientY - rect.top) / rect.height;
    };
    const onLeave = () => { mx = -1; my = -1; };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    let raf;
    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      ctx.clearRect(0, 0, W, H);

      // Fit eagle (200x200) inside canvas with padding
      const scale = Math.min(W, H) * 0.78;
      const ox = (W - scale) / 2;
      const oy = (H - scale) / 2 + Math.sin(t * 0.4) * 4; // gentle float

      // Soft glow halo behind
      const grad = ctx.createRadialGradient(ox + scale/2, oy + scale/2, 0, ox + scale/2, oy + scale/2, scale * 0.55);
      grad.addColorStop(0, 'rgba(212, 168, 69, 0.18)');
      grad.addColorStop(1, 'rgba(212, 168, 69, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const mouseX = mx * W;
      const mouseY = my * H;

      for (const p of particles) {
        const targetPx = ox + p.tx * scale;
        const targetPy = oy + p.ty * scale;

        p.orbitT += 0.006 * p.orbitS;
        const orbitDx = Math.cos(p.orbitT) * p.orbitR;
        const orbitDy = Math.sin(p.orbitT) * p.orbitR;

        const finalTx = targetPx + orbitDx;
        const finalTy = targetPy + orbitDy;

        const myX = p.x * W;
        const myY = p.y * H;
        const dx = finalTx - myX;
        const dy = finalTy - myY;
        p.vx += dx * 0.035;
        p.vy += dy * 0.035;

        // Mouse repulsion
        if (mx >= 0) {
          const mdx = myX - mouseX;
          const mdy = myY - mouseY;
          const mdist = Math.sqrt(mdx*mdx + mdy*mdy);
          if (mdist < 120 && mdist > 0) {
            const force = ((120 - mdist) / 120) * 3;
            p.vx += (mdx / mdist) * force;
            p.vy += (mdy / mdist) * force;
          }
        }

        p.vx *= 0.78;
        p.vy *= 0.78;
        const nx = myX + p.vx;
        const ny = myY + p.vy;
        p.x = nx / W;
        p.y = ny / H;

        const alpha = 0.55 + Math.sin(t * 2 + p.glow) * 0.2;
        // Outer glow
        ctx.fillStyle = `rgba(212, 168, 69, ${alpha * 0.18})`;
        ctx.beginPath();
        ctx.arc(nx, ny, p.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
        // Core dot
        ctx.fillStyle = `rgba(244, 203, 107, ${alpha})`;
        ctx.beginPath();
        ctx.arc(nx, ny, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="eagle-canvas-wrap">
      <canvas ref={canvasRef} className="eagle-canvas" aria-hidden="true"></canvas>
      <div className="eagle-canvas-rings">
        <div className="ecr ecr-1"></div>
        <div className="ecr ecr-2"></div>
        <div className="ecr ecr-3"></div>
      </div>
    </div>
  );
}

// ---- Interactive UI/UX dot grid background ----
// A canvas of small dots that light up gold near the cursor.
function InteractiveDotGrid() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    let W = 0, H = 0;
    let dots = [];
    const SPACING = 28;
    const buildDots = () => {
      dots = [];
      for (let y = SPACING/2; y < H; y += SPACING) {
        for (let x = SPACING/2; x < W; x += SPACING) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildDots();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    let mx = -9999, my = -9999;
    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };
    canvas.parentElement.addEventListener('mousemove', onMove);
    canvas.parentElement.addEventListener('mouseleave', onLeave);

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const influence = Math.max(0, 1 - dist / 160);
        // gentle attraction toward cursor
        const tx = d.ox - dx * influence * 0.25;
        const ty = d.oy - dy * influence * 0.25;
        d.x += (tx - d.x) * 0.15;
        d.y += (ty - d.y) * 0.15;
        // gold near mouse, faint ink elsewhere
        const goldAmt = influence;
        const radius = 1.4 + influence * 3;
        ctx.fillStyle = `rgba(212, 168, 69, ${0.15 + goldAmt * 0.85})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
        if (goldAmt > 0.4) {
          ctx.fillStyle = `rgba(244, 203, 107, ${(goldAmt - 0.4) * 0.5})`;
          ctx.beginPath();
          ctx.arc(d.x, d.y, radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.parentElement.removeEventListener('mousemove', onMove);
      canvas.parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return <canvas ref={ref} className="dot-grid-canvas" aria-hidden="true"></canvas>;
}

Object.assign(window, { CustomCursor, ScrollProgress, useMagnetic, Magnetic, useTilt, TiltCard, RevealText, EagleParticleField, InteractiveDotGrid });
