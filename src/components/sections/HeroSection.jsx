// ========================================
// HERO SECTION v5.0
// Premium two-column slice hero
// + scroll-driven Apple-style phone reveal (GSAP) — UNTOUCHED
// ========================================

import { useEffect, useRef, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IntroContext } from '../../App';
import './HeroSlice.css';


gsap.registerPlugin(ScrollTrigger);

// ─── Image slice data ─────────────────────────────────────────────────────────
// width: fraction of total right-panel width
// height: vh height of the slice
// offset: vertical shift (positive = down)
// bgPos: background-position to frame the most interesting area
const SLICES = [
  {
    id: 0,
    label: 'Analytics',
    src: '/hero/dashboard.webp',
    width: '22%',
    height: '72vh',
    offset: '6vh',
    bgPos: 'center 20%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 1,
    label: 'Production',
    src: '/hero/studio.webp',
    width: '18%',
    height: '55vh',
    offset: '16vh',
    bgPos: 'center 30%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 2,
    label: 'Brand Strategy',
    src: '/hero/strategy.webp',
    width: '24%',
    height: '78vh',
    offset: '6vh',
    bgPos: 'center 25%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 3,
    label: 'Growth',
    src: '/hero/analytics.webp',
    width: '18%',
    height: '60vh',
    offset: '20vh',
    bgPos: 'center 30%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 4,
    label: 'Creative',
    src: '/hero/production.webp',
    width: '18%',
    height: '50vh',
    offset: '12vh',
    bgPos: 'center 35%',
    borderRadius: '20px 20px 20px 20px',
  },
];


// ─── Particle system (kept for scroll phase) ──────────────────────────────────
const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.35 + 0.08,
    color: Math.random() > 0.6 ? '#FF9C60' : Math.random() > 0.5 ? '#ffffff' : '#FFB888',
  }));

// ─── Phone Mockup (100% unchanged) ───────────────────────────────────────────
function PhoneMockup() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {/* LEFT SIDE BUTTONS */}
      <div style={{ position: 'absolute', left: '-3px', top: '17%', width: '3px', height: '28px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: '-3px', top: '26%', width: '3px', height: '52px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: '-3px', top: '38%', width: '3px', height: '52px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      {/* RIGHT SIDE BUTTON */}
      <div style={{ position: 'absolute', right: '-3px', top: '28%', width: '3px', height: '72px', borderRadius: '0 2px 2px 0', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '1px 0 3px rgba(0,0,0,0.6), inset -1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      {/* PHONE FRAME */}
      <div style={{ width: 'clamp(260px, 30vw, 340px)', height: 'clamp(530px, 59vw, 660px)', borderRadius: '44px', background: 'linear-gradient(160deg, #242424 0%, #0d0d0d 45%, #1a1a1a 100%)', border: 'none', outline: 'none', boxShadow: `0 0 0 1.5px #2e2e2e, 0 0 0 2.5px rgba(255,255,255,0.07), 0 0 0 3.5px #1a1a1a, 0 40px 120px rgba(0,0,0,0.95), 0 0 80px rgba(255,156,96,0.10), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.5)`, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Glass shine */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '55%', height: '40%', borderRadius: '44px 0 60% 0', background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 30 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', borderRadius: '44px 44px 0 0', background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.18) 70%, transparent 95%)', pointerEvents: 'none', zIndex: 30 }} />
        {/* Dynamic Island */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '114px', height: '32px', background: '#000', borderRadius: '0 0 22px 22px', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04)' }}>
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #1e1e1e, #0a0a0a)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)', flexShrink: 0 }} />
          <div style={{ width: '52px', height: '7px', borderRadius: '4px', background: 'linear-gradient(90deg, #0d0d0d, #141414)', border: '1px solid rgba(255,255,255,0.04)' }} />
          <div style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#32D74B', boxShadow: '0 0 6px rgba(50,215,75,0.8), 0 0 12px rgba(50,215,75,0.4)', animation: 'notchGreenPulse 2.8s ease-in-out infinite', zIndex: 22 }} />
        </div>
        {/* Screen content */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            src="/videos/socialmindsintro.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Status bar overlaid on video */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '36px 18px 0', pointerEvents: 'none' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>9:41</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '10px' }}>
                {[4, 6, 8, 10].map((h, i) => (<div key={i} style={{ width: '3px', height: `${h}px`, borderRadius: '1px', background: i < 3 ? '#fff' : 'rgba(255,255,255,0.4)' }} />))}
              </div>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M6.5 8.5a1 1 0 1 1 0 .001z" fill="#fff" /><path d="M4.2 6.8a3.2 3.2 0 0 1 4.6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M2 4.6a6 6 0 0 1 9 0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <div style={{ width: '22px', height: '11px', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '3px', padding: '1.5px', position: 'relative' }}>
                  <div style={{ width: '72%', height: '100%', borderRadius: '1.5px', background: '#fff' }} />
                </div>
                <div style={{ width: '2px', height: '5px', background: 'rgba(255,255,255,0.7)', borderRadius: '0 1px 1px 0' }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '40px', background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px)', pointerEvents: 'none', zIndex: 10 }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '40px', background: 'radial-gradient(ellipse at 50% 0%, transparent 60%, rgba(0,0,0,0.35) 100%)', pointerEvents: 'none', zIndex: 11 }} />
      </div>
    </div>
  );
}

// ─── Side Panels Removed ──────────────────────────────────────────────────────

// ─── Vertical Image Slice Composition ────────────────────────────────────────
// No hover zoom — slices are static editorial composition panels
function SliceComposition() {
  const showIntro = useContext(IntroContext);

  return (
    <div className="hero-slices-wrap">
      {SLICES.map((slice, i) => (
        <motion.div
          key={slice.id}
          className="hero-slice"
          style={{
            width: slice.width,
            height: slice.height,
            marginTop: slice.offset,
            backgroundImage: `url(${slice.src})`,
            backgroundSize: 'cover',
            backgroundPosition: slice.bgPos,
            borderRadius: slice.borderRadius,
          }}
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={showIntro ? { opacity: 0, y: 32, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5 + i * 0.25, // 0.5s base pause + 0.25s stagger
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}

// ─── Trust / Stat Pills ───────────────────────────────────────────────────────
const STATS = [
  { value: '50+',  label: 'Brands Scaled' },
  { value: '12M+', label: 'Views Generated' },
  { value: '415%', label: 'Avg. Growth' },
];

// ─── HERO SECTION MAIN ────────────────────────────────────────────────────────
export default function HeroSection() {
  const showIntro = useContext(IntroContext);
  const wrapperRef    = useRef(null);
  const stickyRef     = useRef(null);
  const textRef       = useRef(null);   // fades out on scroll — now wraps two-col layout
  const phoneRef      = useRef(null);
  const bgBlurRef     = useRef(null);
  const ctaRef        = useRef(null);   // kept for GSAP (empty/hidden, still targeted)
  const topTextRef    = useRef(null);
  const bottomTextRef = useRef(null);
  const cardsRef      = useRef(null);   // wrapper for all 6 showcase cards

  const [particles] = useState(() => generateParticles(20));

  // Mouse parallax (unchanged)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const glowX   = useTransform(springX, [-600, 600], [-40, 40]);
  const glowY   = useTransform(springY, [-400, 400], [-25, 25]);

  // ── GSAP SCROLL TIMELINE (100% unchanged) ──────────────────────────────────
  useEffect(() => {
    let idleFloat = null;

    const ctx = gsap.context(() => {
      const ambientGlow = document.getElementById('phone-ambient-glow');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // Reduced scrub for a snappier, more responsive tracking without lag
          invalidateOnRefresh: true,
          onComplete: () => {
            idleFloat = gsap.to(phoneRef.current, {
              y: 10, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1,
            });
          },
          onReverseComplete: () => {
            if (idleFloat) { idleFloat.kill(); idleFloat = null; }
          },
        },
      });

      // PHASE 1: two-col hero fades back faster
      tl.to(textRef.current, {
        scale: 1.03, opacity: 0, y: -40,
        duration: 0.20, ease: 'none',
      }, 0);

      tl.to(ctaRef.current, {
        opacity: 0, y: -24,
        duration: 0.15, ease: 'none',
      }, 0);

      tl.to(bgBlurRef.current, {
        opacity: 1, duration: 0.20, ease: 'none',
      }, 0);

      // PHASE 2: phone fades/scales in — Starts significantly earlier (0.05 instead of 0.18)
      tl.fromTo(phoneRef.current,
        { opacity: 0, scale: 0.55, y: 180 },
        { opacity: 1, scale: 0.92, y: -15, duration: 0.40, ease: 'none' },
        0.05
      );

      if (ambientGlow) {
        tl.fromTo(ambientGlow,
          { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'none' }, 0.15
        );
      }

      // PHASE 3: phone holds, top heading slides up
      tl.to(phoneRef.current, { y: -15, scale: 0.92, duration: 0.06, ease: 'none' }, 0.45);
      tl.fromTo(topTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'none' },
        0.48
      );

      // PHASE 4: stagger the 6 cards from their sides
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('[data-dir]');
        cards.forEach((card, i) => {
          const dir = card.getAttribute('data-dir');
          const fromX = dir === 'left' ? -60 : 60;
          tl.fromTo(card,
            { opacity: 0, x: fromX },
            { opacity: 1, x: 0, duration: 0.12, ease: 'none' },
            0.55 + i * 0.04
          );
        });
      }

      // PHASE 5: hold
      tl.to({}, { duration: 0.1 }, 0.85);

      // PHASE 6: hold beat
      tl.to({}, { duration: 0.05 }, 0.95);
    }, wrapperRef);

    // Mouse parallax
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      if (idleFloat) idleFloat.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', height: '400vh', background: '#ffffff' }}>

      {/* STICKY SHELL — unchanged */}
      <section
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* ── WHITE SCROLL SECTION BACKGROUND LAYERS ── */}
        {/* Very subtle light grid — barely visible on white */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.06, zIndex: 0 }} />

        {/* Warm orange ambient glow — works on white too */}
        <motion.div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.08) 0%, transparent 60%)',
          x: glowX, y: glowY, zIndex: 0, willChange: 'transform',
        }} />

        {/* Subtle bottom warmth */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(0deg, rgba(255,156,96,0.03) 0%, transparent 100%)', zIndex: 0 }} />

        {/* Particles — orange only, no white (invisible on white bg) */}
        {particles.filter(p => p.color !== '#ffffff').map((p) => (
          <motion.div key={p.id}
            style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: p.color, zIndex: 1, willChange: 'transform, opacity' }}
            animate={{ y: [0, -60, 0], opacity: [0, p.opacity * 0.4, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* BG OVERLAY — fades in on scroll to slightly dim the white bg
            as the phone rises; very subtle on white (#f8f8f8 instead of black) */}
        <div ref={bgBlurRef} style={{
          position: 'absolute', inset: 0,
          background: 'rgba(245,245,245,0.92)',
          opacity: 0, zIndex: 3, pointerEvents: 'none', willChange: 'opacity',
        }} />

        {/* ══════════════════════════════════════════════════════════════════
            NEW HERO CONTENT — two-column slice layout
            GSAP targets textRef and ctaRef (same refs, same fade-out behavior).
            The dark background becomes white; on scroll the whole block fades
            out exactly as the old centered text did.
        ══════════════════════════════════════════════════════════════════ */}
        <div
          ref={textRef}
          className="hero-twocol"
          style={{ willChange: 'transform, opacity', transformOrigin: 'center center', transform: 'translateZ(0)' }}
        >
          <div className="hero-twocol-inner">

            {/* ── LEFT COLUMN ── */}
            <div className="hero-left">

              {/* Agency badge */}
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 16 }}
                animate={showIntro ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero-badge-dot" />
                Premium Digital Growth Agency
              </motion.div>

              {/* Main headline */}
              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 30 }}
                animate={showIntro ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero-hl-black">WE MAKE</span>
                <span className="hero-hl-black">BRANDS</span>
                <span className="hero-hl-orange">IMPOSSIBLE</span>
                <span className="hero-hl-black">TO IGNORE</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={showIntro ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                We combine strategy, content creation, production and performance
                marketing to transform attention into measurable business growth.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="hero-ctas"
                initial={{ opacity: 0, y: 18 }}
                animate={showIntro ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/contact" className="hero-btn-primary">
                  Start Growing Today
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/services" className="hero-btn-ghost">
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust stats */}
              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 14 }}
                animate={showIntro ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {STATS.map((s, i) => (
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-val">{s.value}</span>
                    <span className="hero-stat-lbl">{s.label}</span>
                    {i < STATS.length - 1 && <div className="hero-stat-div" />}
                  </div>
                ))}
              </motion.div>

            </div>{/* /hero-left */}

            {/* ── RIGHT COLUMN — slice composition ── */}
            <div className="hero-right">
              <SliceComposition />
            </div>

          </div>{/* /hero-twocol-inner */}
        </div>{/* /hero-twocol */}

        {/* ctaRef — empty div kept so GSAP timeline target is valid */}
        <div ref={ctaRef} style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }} />

        {/* ── PHONE SECTION CONTAINER ── */}
        <div className="phone-section-container" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100%', height: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3vh',
          zIndex: 14, pointerEvents: 'none'
        }}>

          {/* ── TOP CONTENT ── */}
          <div style={{ pointerEvents: 'auto', paddingTop: '8vh' }}>
            <div ref={topTextRef} style={{ textAlign: 'center', opacity: 0, willChange: 'transform, opacity', transform: 'translateZ(0)' }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 58px)', color: '#0a0a0a', lineHeight: 0.95, letterSpacing: '0.02em', marginBottom: '10px' }}>
                Turn Attention Into <span style={{ color: '#FF7030' }}>Growth.</span>
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(10,10,10,0.55)', lineHeight: 1.5, maxWidth: '900px', margin: '0 auto', whiteSpace: 'nowrap' }}>
                Strategic content, powerful storytelling and performance-driven campaigns designed to turn viewers into loyal customers.
              </p>
            </div>
          </div>

          {/* ── PHONE LAYER ── */}
          <div style={{ pointerEvents: 'auto', position: 'relative' }}>
            <div ref={phoneRef} style={{
              position: 'relative',
              opacity: 0, willChange: 'transform, opacity', transform: 'translateZ(0)'
            }}>
              {/* ── SHOWCASE ADS LAYER — all 6 cards, grouped for staggered animation ── */}
              <div ref={cardsRef}>

              {/* Card 1 (top-left) - 1.2M Reach — slides from left */}
              <div data-dir="left" style={{
                position: 'absolute', top: '10%', left: 'clamp(-280px, -42vw, -480px)', width: '180px', height: '110px',
                background: '#111', borderRadius: '16px', padding: '18px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transform: 'rotate(-8deg) translateZ(0)',
                border: '1px solid #333', zIndex: -2, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#32D74B', boxShadow: '0 0 10px rgba(50,215,75,0.6)' }} />
                  <div style={{ fontSize: '10px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Viral Campaign</div>
                </div>
                <div style={{ fontSize: '28px', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>1.2M REACH</div>
                <div style={{ fontSize: '13px', color: '#FF7030', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1, marginTop: '4px' }}>92% ENGAGEMENT</div>
                <div style={{ marginTop: '12px', height: '3px', width: '100%', background: '#333', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '92%', background: '#FF7030', borderRadius: '2px' }} />
                </div>
              </div>

              {/* Card 1.5 (far bottom-left) - Content Creation — slides from left */}
              <div data-dir="left" style={{
                position: 'absolute', bottom: '24%', left: 'clamp(-350px, -42vw, -450px)', width: '160px', height: '200px',
                background: '#111', borderRadius: '12px', padding: '6px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transform: 'rotate(-14deg) translateZ(0)', zIndex: -3, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src="/hero/studio.webp" alt="Content Creation" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #111 0%, rgba(17,17,17,0.1) 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px' }}>
                     <div style={{ display: 'inline-block', border: '1px solid #FF7030', color: '#FF7030', fontSize: '7px', fontWeight: 800, padding: '2px 4px', borderRadius: '4px', marginBottom: '4px' }}>REELS STRATEGY</div>
                     <div style={{ fontSize: '18px', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1.1 }}>CONTENT<br/>CREATION</div>
                  </div>
                </div>
              </div>

              {/* Card 2 (bottom-left) - Brand Awareness — slides from left (first to appear) */}
              <div data-dir="left" style={{
                position: 'absolute', bottom: '15%', left: 'clamp(-200px, -26vw, -250px)', width: '220px', height: '280px',
                background: '#fff', borderRadius: '16px', padding: '8px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.25)', transform: 'rotate(-10deg) translateZ(0)', zIndex: -2, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src="/hero/strategy.webp" alt="Creative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #111 0%, transparent 60%)' }} />
                  
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#FF7030', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.05em' }}>
                    SOCIAL MINDS
                  </div>

                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                     <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: '8px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', marginBottom: '6px' }}>REELS CAMPAIGN</div>
                     <div style={{ fontSize: '24px', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1.1 }}>BRAND<br/>AWARENESS</div>
                  </div>
                </div>
              </div>

              {/* Card 3 (top-right) - 14,200 Leads — slides from right */}
              <div data-dir="right" style={{
                position: 'absolute', top: '10%', right: 'clamp(-320px, -46vw, -520px)', width: '160px', height: '115px',
                background: '#fff', borderRadius: '16px', padding: '14px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)', transform: 'rotate(7deg) translateZ(0)',
                border: '1px solid rgba(0,0,0,0.05)', zIndex: -2, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>ROAS</div>
                  <div style={{ background: '#eaffea', color: '#16a34a', padding: '2px 6px', borderRadius: '100px', fontSize: '9px', fontWeight: 800 }}>+4.8x</div>
                </div>
                <div style={{ fontSize: '28px', color: '#111', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>14,200</div>
                <div style={{ fontSize: '10px', color: '#888', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Leads Generated</div>
                <svg width="100%" height="24" viewBox="0 0 150 24">
                  <path d="M0,24 C20,24 30,10 50,15 C70,20 80,0 100,5 C120,10 135,0 150,0" fill="none" stroke="#FF7030" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Card 4.5 (far bottom-right) - Conversion — slides from right */}
              <div data-dir="right" style={{
                position: 'absolute', bottom: '22%', right: 'clamp(-350px, -42vw, -450px)', width: '160px', height: '200px',
                background: '#fff', borderRadius: '12px', padding: '6px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transform: 'rotate(14deg) translateZ(0)', zIndex: -3, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src="/hero/production.webp" alt="Performance Marketing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(255,112,48,0.9) 0%, rgba(255,112,48,0.2) 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', textAlign: 'center' }}>
                     <div style={{ fontSize: '20px', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>CONVERSION</div>
                     <div style={{ fontSize: '8px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px', fontWeight: 700 }}>Campaigns</div>
                  </div>
                </div>
              </div>

              {/* Card 4 (bottom-right) - Brand Scaling — slides from right */}
              <div data-dir="right" style={{
                position: 'absolute', bottom: '15%', right: 'clamp(-200px, -26vw, -250px)', width: '220px', height: '280px',
                background: '#fff', borderRadius: '16px', padding: '8px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.25)', transform: 'rotate(10deg) translateZ(0)', zIndex: -2, opacity: 0, willChange: 'transform, opacity'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src="/hero/dashboard.webp" alt="Growth Strategy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #111 0%, rgba(17,17,17,0.1) 60%)' }} />
                  
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#fff', color: '#111', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.05em' }}>
                    Q3 GROWTH
                  </div>

                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                     <div style={{ display: 'inline-block', background: '#FF7030', color: '#fff', fontSize: '8px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', marginBottom: '6px' }}>LEAD GENERATION</div>
                     <div style={{ fontSize: '24px', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1.1 }}>BRAND<br/>SCALING</div>
                  </div>
                </div>
              </div>

              </div>{/* /cardsRef */}

              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,156,96,0.14) 0%, transparent 65%)', zIndex: -1 }} />
              <div style={{ position: 'absolute', top: 0, left: '10%', width: '40%', height: '100%', borderRadius: '44px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)', pointerEvents: 'none', zIndex: 20 }} />
              <PhoneMockup />
            </div>
          </div>


        </div>

        {/* AMBIENT GLOW (unchanged) */}
        <div id="phone-ambient-glow" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,156,96,0.10) 0%, rgba(255,156,96,0.03) 45%, transparent 70%)',
          zIndex: 4, pointerEvents: 'none', opacity: 0, willChange: 'opacity',
        }} />

      </section>
    </div>
  );
}
