// ========================================
// WHY SOCIAL MINDS — v4.0
// Premium white editorial redesign
// Asymmetric bento grid layout
// Glassmorphism cards + hover glow
// Apple / Linear / Awwwards aesthetic
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// REASONS DATA
// ========================================
const REASONS = [
  {
    id: 'strategy',
    icon: '🎯',
    title: 'Strategy First',
    description:
      'We build the growth blueprint before we create a single post. Every move is calculated, intentional, and engineered for maximum brand impact.',
    accent: '#FF9C60',
    stat: '100%',
    statLabel: 'Strategy-backed',
    featured: false,
    size: 'normal',
  },
  {
    id: 'cinematic',
    icon: '🎬',
    title: 'Cinematic Quality',
    description:
      'Studio-level production values on every single reel, campaign, and brand visual. Your audience will feel the difference before they even read a word.',
    accent: '#FF7030',
    stat: '4K',
    statLabel: 'Production standard',
    featured: true,   // ← Hero card
    size: 'large',
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data-Driven Growth',
    description:
      'We track 50+ performance metrics per campaign. If it moves a number, we see it — and we act on it immediately.',
    accent: '#FF9C60',
    stat: '50+',
    statLabel: 'Tracked metrics',
    featured: false,
    size: 'normal',
  },
  {
    id: 'speed',
    icon: '⚡',
    title: 'Rapid Execution',
    description:
      'Ideation to published content in 48 hours. Speed is a competitive advantage we hand directly to your brand.',
    accent: '#FF9C60',
    stat: '48h',
    statLabel: 'Turnaround',
    featured: false,
    size: 'normal',
  },
  {
    id: 'results',
    icon: '🏆',
    title: 'Proven Results',
    description:
      '50+ brands scaled. 10M+ views generated. We don\'t pitch promises — we show you the receipts.',
    accent: '#FF9C60',
    stat: '10M+',
    statLabel: 'Views generated',
    featured: false,
    size: 'normal',
  },
  {
    id: 'partnership',
    icon: '🤝',
    title: 'True Partnership',
    description:
      'We treat your brand as our own. Your growth is our obsession — not just a deliverable we invoice you for.',
    accent: '#FF9C60',
    stat: '50+',
    statLabel: 'Brands partnered',
    featured: false,
    size: 'normal',
  },
];

// ========================================
// INDIVIDUAL CARD
// ========================================
function ReasonCard({ reason, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = reason.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        gridRow:    isFeatured ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: '24px',
        background: hovered
          ? 'rgba(255,255,255,1)'
          : isFeatured
          ? 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,250,245,0.97) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(252,250,248,0.84) 100%)',
        border: hovered
          ? '1.5px solid rgba(255,156,96,0.65)'
          : isFeatured
          ? '1.5px solid rgba(255,156,96,0.32)'
          : '1.5px solid rgba(0,0,0,0.09)',
        boxShadow: hovered
          ? '0 24px 70px rgba(255,156,96,0.22), 0 8px 24px rgba(0,0,0,0.09), 0 0 0 1px rgba(255,156,96,0.18), inset 0 1px 0 rgba(255,255,255,0.9)'
          : isFeatured
          ? '0 16px 56px rgba(0,0,0,0.09), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.85)'
          : '0 6px 28px rgba(0,0,0,0.07), 0 1px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
        padding: isFeatured ? '44px 40px' : '30px 28px',
        overflow: 'hidden',
        cursor: 'default',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transform: hovered ? 'translateY(-7px) scale(1.005)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top-right corner shimmer — always on featured, stronger */}
      {isFeatured && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '240px', height: '240px',
          background: 'radial-gradient(circle at 100% 0%, rgba(255,156,96,0.14) 0%, rgba(255,156,96,0.04) 50%, transparent 72%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Bottom-left warm reflection */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '160px', height: '120px',
        background: 'radial-gradient(ellipse at 0% 100%, rgba(255,156,96,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '0 0 0 24px',
      }} />

      {/* Orange hover glow — richer spread */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.38 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 90% 70% at 0% 100%, rgba(255,156,96,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
          borderRadius: '24px',
        }}
      />

      {/* Top accent line — full width on featured, partial on normal */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : isFeatured ? 0.6 : 0, opacity: hovered ? 1 : isFeatured ? 0.5 : 0 }}
        transition={{ duration: 0.42, ease: 'easeOut' }}
        style={{
          position: 'absolute', top: 0, left: '18px', right: isFeatured ? '18px' : '55%',
          height: '2px',
          background: 'linear-gradient(90deg, #FF9C60, #FF7030 50%, transparent 100%)',
          transformOrigin: 'left',
          borderRadius: '1px',
          boxShadow: '0 0 6px rgba(255,156,96,0.5)',
        }}
      />

      {/* Icon + stat row (featured: stacked; normal: side by side) */}
      <div style={{
        display: 'flex',
        alignItems: isFeatured ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        marginBottom: isFeatured ? '28px' : '20px',
        flexDirection: isFeatured ? 'column' : 'row',
        gap: isFeatured ? '20px' : '0',
      }}>
        {/* Icon box */}
        <motion.div
          animate={{ y: hovered ? -3 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            width: isFeatured ? '62px' : '50px',
            height: isFeatured ? '62px' : '50px',
            borderRadius: isFeatured ? '17px' : '14px',
            background: hovered
              ? 'linear-gradient(135deg, rgba(255,156,96,0.22) 0%, rgba(255,112,48,0.1) 100%)'
              : isFeatured
              ? 'linear-gradient(135deg, rgba(255,156,96,0.1) 0%, rgba(255,255,255,0.6) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(255,255,255,0.5) 100%)',
            border: hovered
              ? '1px solid rgba(255,156,96,0.5)'
              : isFeatured
              ? '1px solid rgba(255,156,96,0.2)'
              : '1px solid rgba(0,0,0,0.09)',
            boxShadow: hovered
              ? '0 4px 16px rgba(255,156,96,0.25), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: isFeatured ? '26px' : '20px',
            transition: 'all 0.4s ease',
            flexShrink: 0,
          }}
        >
          {reason.icon}
        </motion.div>

        {/* Stat — for non-featured shown top-right */}
        {!isFeatured && (
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '24px',
              background: hovered
                ? 'linear-gradient(135deg, #FF9C60, #FF7030)'
                : 'linear-gradient(135deg, rgba(0,0,0,0.22), rgba(0,0,0,0.14))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.02em',
              lineHeight: 1,
              transition: 'all 0.35s ease',
            }}>
              {reason.stat}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '8px',
              fontWeight: 600,
              color: 'rgba(0,0,0,0.32)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {reason.statLabel}
            </div>
          </div>
        )}
      </div>

      {/* For featured: inline stat bar — premium gradient */}
      {isFeatured && (
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '14px',
          marginBottom: '24px',
          padding: '16px 20px',
          background: 'linear-gradient(120deg, rgba(255,156,96,0.1) 0%, rgba(255,112,48,0.05) 100%)',
          border: '1px solid rgba(255,156,96,0.28)',
          borderRadius: '14px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
        }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '40px',
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
            fontSize: '10px',
            fontWeight: 700,
            color: 'rgba(0,0,0,0.42)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {reason.statLabel}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isFeatured ? 'clamp(2rem, 3.5vw, 3.2rem)' : 'clamp(1.3rem, 2vw, 1.8rem)',
        color: hovered ? '#0A0A0A' : '#111111',
        lineHeight: '1.0',
        letterSpacing: '0.005em',
        marginBottom: isFeatured ? '14px' : '10px',
        transition: 'color 0.3s ease',
      }}>
        {reason.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: isFeatured ? '15px' : '13px',
        color: hovered ? 'rgba(0,0,0,0.58)' : 'rgba(0,0,0,0.46)',
        lineHeight: 1.8,
        flex: 1,
        transition: 'color 0.3s ease',
      }}>
        {reason.description}
      </p>

      {/* Bottom accent arrow */}
      <div style={{
        marginTop: '22px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{
          width: hovered ? '36px' : '18px',
          height: '1.5px',
          background: hovered
            ? 'linear-gradient(90deg, #FF9C60, #FF7030)'
            : 'rgba(0,0,0,0.13)',
          borderRadius: '1px',
          transition: 'width 0.38s cubic-bezier(0.22,1,0.36,1), background 0.35s ease',
          boxShadow: hovered ? '0 0 6px rgba(255,156,96,0.5)' : 'none',
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
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN EXPORT
// ========================================
export default function WhySocialMinds() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(160deg, #F8F7F4 0%, #F2F0EB 40%, #F8F7F4 100%)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot texture */}
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Top-left orange ambient — stronger */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '640px', height: '640px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.13) 0%, rgba(255,156,96,0.04) 45%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom-right ambient */}
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '520px', height: '520px',
        background: 'radial-gradient(circle, rgba(255,112,48,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Center mid-section warm glow */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%',
        transform: 'translateX(-50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.055) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Horizontal light band — top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,156,96,0.25) 40%, rgba(255,156,96,0.25) 60%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── CENTERED HEADER ── */}
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
              color: '#0D0D0D',
              lineHeight: '0.92',
              letterSpacing: '-0.01em',
              margin: '0 0 24px 0',
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
              color: 'rgba(0,0,0,0.45)',
              lineHeight: 1.8,
              maxWidth: '620px',
              margin: '0 auto 32px',
            }}
          >
            We combine cinematic storytelling, strategic execution, and data-driven
            growth systems to create brands people cannot ignore.
          </motion.p>

          {/* Feature tags */}
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
                padding: '9px 18px',
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,156,96,0.28)',
                borderRadius: '100px',
                boxShadow: '0 2px 12px rgba(255,156,96,0.1)',
              }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: '#FF9C60',
                  boxShadow: '0 0 6px rgba(255,156,96,0.6)',
                }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'rgba(0,0,0,0.6)',
                  textTransform: 'uppercase',
                }}>{tag}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── BENTO GRID ── */}
        {/*
          Layout (desktop):
          Col:  1        2        3
          Row1: featured  featured  card-0
          Row2: featured  featured  card-3
          Row3: card-1    card-2    card-5    (card 4 skipped — featured fills rows 1&2 cols 1&2)

          We use a 3-col grid and place cards manually via gridColumn/gridRow on the featured card.
          The 5 normal cards fill remaining cells in DOM order.
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(230px, auto)',
          gap: '14px',
        }}>
          {/* We render in a specific order:
              featured first (spans 2×2), then remaining 5 normal cards */}
          {[
            REASONS[1], // Cinematic Quality — featured
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

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 5rem)' }}
        >
          {/* Decorative line */}
          <div style={{
            width: '48px', height: '2px',
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
              boxShadow: '0 8px 32px rgba(255,112,48,0.35)',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,112,48,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,112,48,0.35)';
            }}
          >
            Join the Family
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              fontSize: '12px',
            }}>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
