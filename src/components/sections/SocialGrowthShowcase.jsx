// ========================================
// SOCIAL GROWTH SHOWCASE — WHITE SECTION
// Before/After growth comparison
// Animated growth charts per platform
// Case study results
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// GROWTH CASE STUDIES
// ========================================
const caseStudies = [
  {
    brand: 'FashionBrand.in',
    platform: 'Instagram',
    platformIcon: '📸',
    color: '#E1306C',
    before: { followers: '2.4K', reach: '12K', engagement: '1.8%' },
    after: { followers: '148K', reach: '2.8M', engagement: '18.6%' },
    duration: '90 Days',
    growth: '+6,050%',
    bars: { before: 4, after: 100 },
  },
  {
    brand: 'TechStartup Co.',
    platform: 'LinkedIn',
    platformIcon: '💼',
    color: '#0A66C2',
    before: { followers: '800', reach: '4K', engagement: '0.9%' },
    after: { followers: '42K', reach: '890K', engagement: '8.4%' },
    duration: '60 Days',
    growth: '+5,150%',
    bars: { before: 2, after: 85 },
  },
  {
    brand: 'FoodBrand PVT',
    platform: 'YouTube',
    platformIcon: '🎬',
    color: '#FF0000',
    before: { followers: '1.2K', reach: '8K', engagement: '2.1%' },
    after: { followers: '284K', reach: '4.2M', engagement: '14.2%' },
    duration: '120 Days',
    growth: '+23,567%',
    bars: { before: 1, after: 95 },
  },
];

// ========================================
// GROWTH TICKER — scrolling metrics
// ========================================
const tickerItems = [
  '500K → 2.8M in 90 Days',
  '1.8% → 18.6% Engagement',
  '0 → 100K Followers in 3 Months',
  '₹2L → ₹18L Monthly Revenue',
  '1.2K → 284K YouTube Subscribers',
  '8x ROAS on Meta Ads',
];

// ========================================
// ANIMATED BAR CHART
// ========================================
function GrowthBar({ before, after, color, inView }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <motion.div
          style={{ width: '32px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px 4px 0 0', height: 0 }}
          animate={inView ? { height: `${before}%` } : { height: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.05em' }}>BEFORE</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <motion.div
          style={{ width: '32px', background: `linear-gradient(180deg, ${color}, ${color}BB)`, borderRadius: '4px 4px 0 0', height: 0 }}
          animate={inView ? { height: `${after}%` } : { height: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.4 }}
        />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.05em' }}>AFTER</span>
      </div>
    </div>
  );
}

// ========================================
// CASE STUDY CARD
// ========================================
function CaseStudyCard({ study, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '24px',
        padding: '36px 32px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered
          ? `0 16px 56px rgba(0,0,0,0.12), 0 0 0 2px ${study.color}25`
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '80px', height: '80px',
        background: `${study.color}08`,
        borderRadius: '0 24px 0 80px',
      }} />

      {/* Platform + Brand */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '18px' }}>{study.platformIcon}</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              color: study.color,
              letterSpacing: '0.08em',
            }}>{study.platform}</span>
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            color: '#0D0D0D',
          }}>{study.brand}</div>
        </div>

        {/* Growth badge */}
        <div style={{
          padding: '8px 14px',
          background: `${study.color}10`,
          border: `1px solid ${study.color}25`,
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '22px',
            color: study.color,
            lineHeight: 1,
            letterSpacing: '0.03em',
          }}>{study.growth}</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '8px',
            color: 'rgba(0,0,0,0.35)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>Growth</div>
        </div>
      </div>

      {/* Before / After metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {[
          { label: 'Followers', before: study.before.followers, after: study.after.followers },
          { label: 'Reach', before: study.before.reach, after: study.after.reach },
          { label: 'Engagement', before: study.before.engagement, after: study.after.engagement },
        ].map((metric) => (
          <div key={metric.label} style={{
            padding: '10px 8px',
            background: 'rgba(0,0,0,0.03)',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.1em', marginBottom: '6px', textTransform: 'uppercase' }}>
              {metric.label}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: 'rgba(0,0,0,0.35)', textDecoration: 'line-through', marginBottom: '2px' }}>
              {metric.before}
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: study.color, letterSpacing: '0.03em' }}>
              {metric.after}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart + duration */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <GrowthBar before={study.bars.before} after={study.bars.after} color={study.color} inView={inView} />
        <div style={{
          padding: '8px 14px',
          background: 'rgba(0,0,0,0.04)',
          borderRadius: '10px',
          textAlign: 'right',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(0,0,0,0.35)', marginBottom: '2px' }}>TIMELINE</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#0D0D0D', letterSpacing: '0.03em' }}>{study.duration}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function SocialGrowthShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#F8F7F4',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tag-orange-dark"
            style={{ marginBottom: '24px' }}
          >
            <span style={{ fontSize: '7px' }}>●</span>
            REAL RESULTS
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 9rem)',
                color: '#0D0D0D',
                lineHeight: '0.9',
                marginBottom: '20px',
              }}
            >
              Numbers Don't<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Lie.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: 'rgba(0,0,0,0.45)',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Real brands. Real growth. Every number below is a transformation we drove.
          </motion.p>
        </div>

        {/* ── TICKER ── */}
        <div style={{
          marginBottom: '60px',
          overflow: 'hidden',
          background: '#0D0D0D',
          borderRadius: '14px',
          padding: '14px 0',
        }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '48px', whiteSpace: 'nowrap', width: 'max-content' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.04em',
                }}>{item}</span>
                <span style={{ color: '#FF9C60', fontSize: '8px' }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── CASE STUDY CARDS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.brand} study={study} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <a href="/contact" className="btn-primary" style={{ marginRight: '16px' }}>
            Get These Results ↗
          </a>
          <a href="/services" className="btn-ghost-dark">
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
