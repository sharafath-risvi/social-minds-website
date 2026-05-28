// ========================================
// IPHONE EXPERIENCE SECTION v2.0 — MAIN SHOWCASE
// THE BEST VISUAL SECTION ON THE WEBSITE
// Massive XL iPhone centered — Instagram analytics inside
// Left: 3 metric cards stacked | Right: 3 reel previews
// Giant outlined background text: "GROWTH IS OUR LANGUAGE"
// Multi-layer cinematic glow + parallax
// ========================================

import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import IPhoneMockup, { AnalyticsContent } from '../ui/IPhoneMockup';

// ========================================
// LEFT METRIC CARDS
// ========================================
const leftCards = [
  {
    icon: '📊',
    title: 'Reach Spike',
    value: '+840%',
    sub: 'vs last week',
    color: '#60D4FF',
    delay: 0.5,
  },
  {
    icon: '⚡',
    title: 'Growth Score',
    value: '9.8 / 10',
    sub: 'this month',
    color: '#FF9C60',
    delay: 0.65,
  },
  {
    icon: '🎬',
    title: 'Reel Performance',
    value: '2.1M',
    sub: '18.4% engagement',
    color: '#A3FF60',
    delay: 0.8,
  },
];

// ========================================
// RIGHT REEL PREVIEW CARDS
// ========================================
const rightCards = [
  {
    gradient: 'linear-gradient(135deg, #FF6B35, #FF9C60)',
    title: 'Brand Launch Reel',
    views: '4.2M',
    color: '#FF9C60',
    delay: 0.55,
  },
  {
    gradient: 'linear-gradient(135deg, #6B35FF, #9C60FF)',
    title: 'Product Showcase',
    views: '2.8M',
    color: '#C084FC',
    delay: 0.7,
  },
  {
    gradient: 'linear-gradient(135deg, #35D4FF, #60AAFF)',
    title: 'Testimonial Reel',
    views: '1.4M',
    color: '#60D4FF',
    delay: 0.85,
  },
];

// ========================================
// METRIC CARD (Left side)
// ========================================
function MetricCard({ card, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: card.delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        style={{
          background: 'rgba(15,15,15,0.92)',
          // Removed backdropFilter:blur(28px) — 3 floating animated cards blurring
          // over dark bg = unnecessary compositing cost on every float keyframe
          border: `1px solid ${card.color}22`,
          borderRadius: '20px',
          padding: '20px 24px',
          minWidth: '220px',
          boxShadow: `0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px ${card.color}08`,
          position: 'relative',
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        {/* Glow accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: `linear-gradient(90deg, transparent, ${card.color}40, transparent)`,
        }} />

        {/* Live dot */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          width: '7px', height: '7px',
          borderRadius: '50%',
          background: card.color,
          boxShadow: `0 0 8px ${card.color}`,
          animation: 'pulse-glow 2s ease-in-out infinite',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '16px' }}>{card.icon}</span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>{card.title}</span>
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '30px',
          color: card.color,
          lineHeight: 1,
          letterSpacing: '0.04em',
          marginBottom: '4px',
        }}>{card.value}</div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.25)',
        }}>{card.sub}</div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// REEL PREVIEW CARD (Right side)
// ========================================
function ReelPreviewCard({ card, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: card.delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        style={{
          width: '180px',
          height: '110px',
          background: card.gradient,
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)`,
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)',
        }} />

        {/* Play button */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '32px', height: '32px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.25)',
        }}>
          <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid rgba(255,255,255,0.9)', marginLeft: '2px' }} />
        </div>

        {/* Bottom label */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '8px 10px',
        }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '9px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '3px',
          }}>{card.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: card.color, fontSize: '8px' }}>◈</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>{card.views} views</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function IPhoneExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Reduced from [50,-50] to [25,-25] — halves the per-tick transform distance
  const iphoneY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  const parallaxX = useTransform(springX, [-600, 600], [-10, 10]);
  const parallaxY = useTransform(springY, [-400, 400], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    // passive:true — prevents blocking the browser scroll thread
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        padding: 'clamp(8rem, 15vw, 14rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── MASSIVE BACKGROUND TEXT ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          y: textY,
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {['GROWTH', 'IS', 'OUR', 'LANGUAGE'].map((word, i) => (
          <div key={word} style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(6rem, 16vw, 18rem)',
            lineHeight: '0.88',
            WebkitTextStroke: '1px rgba(255,255,255,0.035)',
            color: 'transparent',
            display: 'block',
            letterSpacing: '-0.02em',
          }}>
            {word}
          </div>
        ))}
      </motion.div>

      {/* ── LAYERED GLOW SYSTEM — pure radial-gradients, no filter:blur ── */}
      {/* Center mega glow */}
      <motion.div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px', height: '700px',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,156,96,0.20) 0%, rgba(255,80,0,0.07) 35%, transparent 65%)',
          scale: glowScale,
          zIndex: 1,
        }}
        className="animate-pulse-glow"
      />
      {/* Purple glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '30%',
        width: '600px', height: '500px',
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(160,80,255,0.10) 0%, rgba(160,80,255,0.03) 45%, transparent 60%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      {/* Blue glow */}
      <div style={{
        position: 'absolute', bottom: '20%', right: '20%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(60,180,255,0.09) 0%, rgba(60,180,255,0.03) 45%, transparent 65%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 2 }} />
      <div className="noise-overlay" style={{ zIndex: 2 }} />

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>

        {/* ── SECTION LABEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="tag-orange" style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <span style={{ fontSize: '7px' }}>●</span>
            THE GROWTH EXPERIENCE
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 8rem)',
                color: '#fff',
                lineHeight: '0.9',
              }}
            >
              Your Brand.<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Unstoppable.</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* ── THREE-COLUMN LAYOUT ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 60px)',
          flexWrap: 'wrap',
        }}>
          {/* LEFT — Metric Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {leftCards.map((card, i) => (
              <MetricCard key={card.title} card={card} i={i} inView={inView} />
            ))}
          </div>

          {/* CENTER — Giant iPhone */}
          <motion.div
            style={{ x: parallaxX, y: iphoneY, position: 'relative', zIndex: 10 }}
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ring decorations */}
            <div style={{
              position: 'absolute', inset: '-30px',
              borderRadius: '80px',
              border: '1px solid rgba(255,156,96,0.07)',
              zIndex: -1,
            }} />
            <div style={{
              position: 'absolute', inset: '-60px',
              borderRadius: '100px',
              border: '1px solid rgba(255,156,96,0.03)',
              zIndex: -1,
            }} />

            <IPhoneMockup size="xl" glowColor="#FF9C60">
              <AnalyticsContent />
            </IPhoneMockup>
          </motion.div>

          {/* RIGHT — Reel Preview Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {rightCards.map((card, i) => (
              <ReelPreviewCard key={card.title} card={card} i={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Watch your metrics transform in real time
          </p>
          <a href="/contact" className="btn-primary">
            Get These Results ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
