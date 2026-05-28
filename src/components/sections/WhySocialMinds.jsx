// ========================================
// WHY SOCIAL MINDS — v5.0
// SAME layout, grid, content, CTA
// UPGRADED: cinematic premium aesthetics
// Awwwards / Linear / Apple visual depth
// Luxury glassmorphism cards
// Mouse-follow ambient lighting
// ========================================

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// REASONS DATA — unchanged
// ========================================
const REASONS = [
  {
    id: 'strategy',
    icon: '🎯',
    title: 'Strategy First',
    description:
      'We build the growth blueprint before we create a single post. Every move is calculated, intentional, and engineered for maximum brand impact.',
    stat: '100%',
    statLabel: 'Strategy-backed',
    featured: false,
  },
  {
    id: 'cinematic',
    icon: '🎬',
    title: 'Cinematic Quality',
    description:
      'Studio-level production values on every single reel, campaign, and brand visual. Your audience will feel the difference before they even read a word.',
    stat: '4K',
    statLabel: 'Production standard',
    featured: true,
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data-Driven Growth',
    description:
      'We track 50+ performance metrics per campaign. If it moves a number, we see it — and we act on it immediately.',
    stat: '50+',
    statLabel: 'Tracked metrics',
    featured: false,
  },
  {
    id: 'speed',
    icon: '⚡',
    title: 'Rapid Execution',
    description:
      'Ideation to published content in 48 hours. Speed is a competitive advantage we hand directly to your brand.',
    stat: '48h',
    statLabel: 'Turnaround',
    featured: false,
  },
  {
    id: 'results',
    icon: '🏆',
    title: 'Proven Results',
    description:
      "50+ brands scaled. 10M+ views generated. We don't pitch promises — we show you the receipts.",
    stat: '10M+',
    statLabel: 'Views generated',
    featured: false,
  },
  {
    id: 'partnership',
    icon: '🤝',
    title: 'True Partnership',
    description:
      "We treat your brand as our own. Your growth is our obsession — not just a deliverable we invoice you for.",
    stat: '50+',
    statLabel: 'Brands partnered',
    featured: false,
  },
];

// ========================================
// INDIVIDUAL CARD — premium visual upgrade
// ========================================
function ReasonCard({ reason, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);
  const isFeatured = reason.featured;

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        gridRow: isFeatured ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: '28px',
        // Layered glass background
        background: hovered
          ? 'rgba(255,255,255,0.97)'
          : isFeatured
          ? 'rgba(255,255,255,0.95)'
          : 'rgba(255,255,255,0.78)',
        // Premium border — inner highlight + outer glow on hover
        border: hovered
          ? '1px solid rgba(255,156,96,0.5)'
          : isFeatured
          ? '1px solid rgba(255,156,96,0.2)'
          : '1px solid rgba(0,0,0,0.065)',
        // Layered shadow system
        boxShadow: hovered
          ? [
              '0 0 0 1px rgba(255,156,96,0.12)',
              '0 8px 32px rgba(255,120,40,0.14)',
              '0 24px 64px rgba(0,0,0,0.10)',
              'inset 0 1px 0 rgba(255,255,255,0.9)',
            ].join(', ')
          : isFeatured
          ? [
              '0 4px 24px rgba(0,0,0,0.07)',
              '0 12px 48px rgba(0,0,0,0.05)',
              'inset 0 1px 0 rgba(255,255,255,0.8)',
            ].join(', ')
          : [
              '0 2px 12px rgba(0,0,0,0.05)',
              '0 4px 24px rgba(0,0,0,0.04)',
              'inset 0 1px 0 rgba(255,255,255,0.75)',
            ].join(', '),
        padding: isFeatured ? '44px 40px' : '28px 26px',
        overflow: 'hidden',
        cursor: 'default',
        // Removed backdropFilter:blur(16px) — 6 cards blurring through white bg = 6 compositor layers
        // Solid opaque white achieves the same visual since the bg is light anyway
        transform: hovered ? 'translateY(-7px) scale(1.004)' : 'translateY(0) scale(1)',
        transition: 'all 0.42s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'transform',
      }}
    >
      {/* ── MOUSE-FOLLOW SPOTLIGHT ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? `radial-gradient(circle 180px at ${mousePos.x}% ${mousePos.y}%, rgba(255,156,96,0.09) 0%, transparent 70%)`
          : 'none',
        borderRadius: '28px',
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 1 : 0,
        zIndex: 0,
      }} />

      {/* ── CORNER SHIMMER (featured + hover) ── */}
      {(isFeatured || hovered) && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: isFeatured ? '220px' : '140px',
          height: isFeatured ? '220px' : '140px',
          background: `radial-gradient(circle at 100% 0%, rgba(255,156,96,${isFeatured ? '0.12' : '0.07'}) 0%, transparent 65%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      )}

      {/* ── TOP ACCENT LINE — slides in on hover ── */}
      <div style={{
        position: 'absolute', top: 0, left: '20px',
        width: hovered ? '45%' : '0%',
        height: '2px',
        background: 'linear-gradient(90deg, #FF9C60, #FF7030, transparent)',
        borderRadius: '0 0 2px 0',
        transition: 'width 0.45s cubic-bezier(0.22,1,0.36,1)',
        zIndex: 1,
      }} />

      {/* ── INNER BORDER HIGHLIGHT — top rim glass feel ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
        borderRadius: '28px 28px 0 0',
        zIndex: 1,
      }} />

      {/* ── ALL CARD CONTENT — z:2 to sit above bg layers ── */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Icon + stat row */}
        <div style={{
          display: 'flex',
          alignItems: isFeatured ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          marginBottom: isFeatured ? '28px' : '18px',
          flexDirection: isFeatured ? 'column' : 'row',
          gap: isFeatured ? '20px' : '0',
        }}>
          {/* Premium icon box */}
          <div style={{
            width: isFeatured ? '64px' : '50px',
            height: isFeatured ? '64px' : '50px',
            borderRadius: isFeatured ? '18px' : '14px',
            // Glass icon container
            background: hovered
              ? 'linear-gradient(145deg, rgba(255,156,96,0.16) 0%, rgba(255,112,48,0.06) 100%)'
              : 'linear-gradient(145deg, rgba(0,0,0,0.055) 0%, rgba(0,0,0,0.025) 100%)',
            border: hovered
              ? '1px solid rgba(255,156,96,0.38)'
              : '1px solid rgba(0,0,0,0.08)',
            boxShadow: hovered
              ? '0 4px 16px rgba(255,156,96,0.2), inset 0 1px 0 rgba(255,255,255,0.6)'
              : 'inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: isFeatured ? '28px' : '21px',
            transition: 'all 0.42s ease',
            flexShrink: 0,
            transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          }}>
            {reason.icon}
          </div>

          {/* Stat — normal cards top-right */}
          {!isFeatured && (
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '26px',
                letterSpacing: '0.02em',
                lineHeight: 1,
                // Orange gradient number
                background: hovered
                  ? 'linear-gradient(135deg, #FF9C60, #FF7030)'
                  : 'linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'background 0.35s ease',
              }}>
                {reason.stat}
              </div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '7px',
                fontWeight: 700,
                color: hovered ? 'rgba(255,112,48,0.65)' : 'rgba(0,0,0,0.28)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '2px',
                transition: 'color 0.35s ease',
              }}>
                {reason.statLabel}
              </div>
            </div>
          )}
        </div>

        {/* Featured stat bar */}
        {isFeatured && (
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '12px',
            marginBottom: '24px',
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(255,156,96,0.08) 0%, rgba(255,112,48,0.04) 100%)',
            border: '1px solid rgba(255,156,96,0.2)',
            borderRadius: '14px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
          }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '42px',
              background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}>
              {reason.stat}
            </span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              color: 'rgba(0,0,0,0.38)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              {reason.statLabel}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isFeatured ? 'clamp(2.1rem, 3.5vw, 3.4rem)' : 'clamp(1.35rem, 2vw, 1.9rem)',
          color: '#0A0A0A',
          lineHeight: 1,
          letterSpacing: '0.01em',
          marginBottom: isFeatured ? '14px' : '9px',
        }}>
          {reason.title}
        </h3>

        {/* Thin divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: `linear-gradient(90deg, ${hovered ? 'rgba(255,156,96,0.3)' : 'rgba(0,0,0,0.07)'}, transparent)`,
          marginBottom: isFeatured ? '16px' : '12px',
          transition: 'background 0.4s ease',
        }} />

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isFeatured ? '14.5px' : '12.5px',
          color: hovered ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.42)',
          lineHeight: 1.78,
          flex: 1,
          transition: 'color 0.35s ease',
        }}>
          {reason.description}
        </p>

        {/* Bottom CTA row */}
        <div style={{
          marginTop: isFeatured ? '24px' : '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          {/* Animated line */}
          <div style={{
            width: hovered ? '36px' : '18px',
            height: '1.5px',
            background: hovered
              ? 'linear-gradient(90deg, #FF9C60, #FF7030)'
              : 'rgba(0,0,0,0.12)',
            borderRadius: '1px',
            transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s ease',
          }} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: hovered ? '#FF7030' : 'rgba(0,0,0,0.22)',
            textTransform: 'uppercase',
            transition: 'color 0.35s ease',
          }}>
            {isFeatured ? 'Our Edge' : 'Learn More'}
          </span>
          {/* Arrow chevron */}
          <span style={{
            fontSize: '10px',
            color: hovered ? '#FF7030' : 'rgba(0,0,0,0.15)',
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.35s ease, color 0.35s ease',
            lineHeight: 1,
          }}>→</span>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN EXPORT — layout IDENTICAL to v4
// ========================================
export default function WhySocialMinds() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        // Richer off-white — warm tinted for luxury feel
        background: 'linear-gradient(160deg, #FEFDFB 0%, #F7F5F1 45%, #FEFCFA 100%)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── LAYERED BACKGROUND ATMOSPHERE ── */}

      {/* Grain texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.022,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Warm dot grid */}
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.45, zIndex: 0 }} />

      {/* Top-left large warm glow */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.1) 0%, rgba(255,180,120,0.04) 40%, transparent 68%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Top-right soft warm fill */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '380px', height: '380px',
        background: 'radial-gradient(circle, rgba(255,220,180,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Center deep glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.045) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Bottom-right warm glow */}
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-60px',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(255,140,80,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Floating soft blur orbs — CSS only, no filter:blur on large elements */}
      <div style={{
        position: 'absolute', top: '25%', left: '8%',
        width: '120px', height: '120px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '30%', right: '10%',
        width: '90px', height: '90px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── CENTERED HEADER — layout unchanged ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="tag-orange-dark"
            style={{ marginBottom: '24px', display: 'inline-flex' }}
          >
            <span style={{ fontSize: '7px' }}>●</span>
            WHY SOCIAL MINDS
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.8rem, 7vw, 9rem)',
              color: '#0A0A0A',
              lineHeight: '0.9',
              letterSpacing: '-0.015em',
              margin: '0 0 22px 0',
            }}
          >
            Built For Brands That<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Refuse To Blend In.
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'rgba(0,0,0,0.42)',
              lineHeight: 1.82,
              maxWidth: '580px',
              margin: '0 auto 32px',
              letterSpacing: '0.01em',
            }}
          >
            We combine cinematic storytelling, strategic execution, and data-driven
            growth systems to create brands people cannot ignore.
          </motion.p>

          {/* Feature tags — premium style */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
          >
            {['Strategy-Led', 'Cinematic Quality', 'Growth Engine'].map((tag) => (
              <div key={tag} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,156,96,0.3)',
                borderRadius: '100px',
                boxShadow: '0 2px 16px rgba(255,156,96,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
              }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  boxShadow: '0 0 8px rgba(255,156,96,0.7)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'rgba(0,0,0,0.58)',
                  textTransform: 'uppercase',
                }}>{tag}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── BENTO GRID — layout unchanged ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(220px, auto)',
          gap: '14px',
        }}>
          {[
            REASONS[1], // Cinematic Quality — featured (2×2)
            REASONS[0], // Strategy First
            REASONS[3], // Rapid Execution
            REASONS[2], // Data-Driven
            REASONS[4], // Proven Results
            REASONS[5], // True Partnership
          ].map((reason, i) => (
            <ReasonCard
              key={reason.id}
              reason={reason}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* ── CTA — layout unchanged ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 5rem)' }}
        >
          {/* Decorative divider */}
          <div style={{
            width: '56px', height: '2px',
            background: 'linear-gradient(90deg, transparent, #FF9C60, transparent)',
            margin: '0 auto 28px',
            borderRadius: '1px',
          }} />

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 44px',
              background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
              borderRadius: '100px',
              textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 32px rgba(255,112,48,0.38), 0 2px 8px rgba(255,112,48,0.2)',
              transition: 'all 0.38s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 18px 48px rgba(255,112,48,0.48), 0 4px 12px rgba(255,112,48,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,112,48,0.38), 0 2px 8px rgba(255,112,48,0.2)';
            }}
          >
            Join the Family
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)',
              fontSize: '12px',
            }}>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
