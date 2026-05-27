// ========================================
// SERVICES SHOWCASE v4.0
// Interactive Staircase Layout — Cinematic Edition
// Cards ascend in height left → right
// Hover = card expands upward with content reveal
// Dynamic preview card above staircase
// Black background | Premium editorial
// ========================================

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ========================================
// SERVICES DATA — 5 steps of growth
// ========================================
const SERVICES = [
  {
    id: 'reel-strategy',
    number: '01',
    title: 'Reel\nStrategy',
    subtitle: 'Short-Form Video',
    description:
      'We engineer scroll-stopping reels with retention psychology baked into every frame — hook, pattern interrupt, payoff. From concept to viral in one pipeline.',
    metric: '3.2M',
    metricLabel: 'Avg. Views',
    tags: ['Hook Writing', 'Trending Audio', 'Retention Editing', 'Viral Formats'],
    icon: '🎬',
    cta: 'Explore Reels',
    // Preview card content
    previewLabel: 'Reel Strategy',
    previewStat: '3.2M avg. views per reel',
    previewTag: 'Short-Form Mastery',
    previewColor: '#FF9C60',
    previewGlow: 'rgba(255,156,96,0.18)',
    previewBars: [65, 80, 55, 90, 72, 95, 68, 88, 75, 100, 82, 70],
    previewLines: ['Hook Engineering', 'Pattern Interrupts', 'Viral Formats'],
  },
  {
    id: 'brand-identity',
    number: '02',
    title: 'Brand\nIdentity',
    subtitle: 'Visual Branding',
    description:
      'Complete visual systems — logo, color palette, typography, tone of voice, and content aesthetic. We make your brand instantly recognizable and impossible to forget.',
    metric: '50+',
    metricLabel: 'Brands Built',
    tags: ['Logo Design', 'Color Systems', 'Brand Voice', 'Style Guides'],
    icon: '🏛️',
    cta: 'Explore Branding',
    previewLabel: 'Brand Identity',
    previewStat: '50+ brands elevated',
    previewTag: 'Visual Systems',
    previewColor: '#C4A882',
    previewGlow: 'rgba(196,168,130,0.18)',
    previewBars: [40, 55, 70, 85, 90, 88, 92, 95, 88, 82, 90, 96],
    previewLines: ['Color Systems', 'Brand Voice', 'Style Guides'],
  },
  {
    id: 'content-production',
    number: '03',
    title: 'Content\nProduction',
    subtitle: 'Platform-First Content',
    description:
      'Every piece mapped to a journey — awareness, engagement, conversion. Data-backed content calendars built around your audience psychology and platform algorithms.',
    metric: '18.6%',
    metricLabel: 'Engagement Rate',
    tags: ['Content Calendar', 'Trend Forecasting', 'Multi-Platform', 'Repurposing'],
    icon: '🎯',
    cta: 'Explore Content',
    previewLabel: 'Content Production',
    previewStat: '18.6% avg. engagement rate',
    previewTag: 'Platform-First',
    previewColor: '#7EB8A4',
    previewGlow: 'rgba(126,184,164,0.18)',
    previewBars: [30, 45, 60, 75, 80, 85, 78, 90, 82, 88, 92, 96],
    previewLines: ['Multi-Platform', 'Trend Forecasting', 'Content Calendars'],
  },
  {
    id: 'analytics-growth',
    number: '04',
    title: 'Analytics\n& Growth',
    subtitle: 'Data-Driven Growth',
    description:
      'Real-time performance dashboards, deep-dive monthly reports, A/B testing frameworks. No vanity metrics — only the numbers that move the needle for your bottom line.',
    metric: '+415%',
    metricLabel: 'Organic Reach',
    tags: ['Monthly Reports', 'A/B Testing', 'ROI Tracking', 'Custom Dashboards'],
    icon: '📈',
    cta: 'Explore Analytics',
    previewLabel: 'Analytics & Growth',
    previewStat: '+415% organic reach uplift',
    previewTag: 'Data Intelligence',
    previewColor: '#6A9FD8',
    previewGlow: 'rgba(106,159,216,0.18)',
    previewBars: [20, 30, 28, 45, 52, 65, 72, 80, 78, 88, 92, 100],
    previewLines: ['ROI Tracking', 'A/B Testing', 'Custom Dashboards'],
  },
  {
    id: 'campaign-launch',
    number: '05',
    title: 'Campaign\nLaunch',
    subtitle: 'Viral Campaign Architecture',
    description:
      'Multi-platform launch orchestration — teaser content, launch explosions, and momentum harvesting. We engineer virality with precision timing and layered content drops.',
    metric: '12M',
    metricLabel: 'Impressions',
    tags: ['Meta Ads', 'Launch Strategy', 'ROAS Optimisation', 'Audience Targeting'],
    icon: '🚀',
    cta: 'Explore Campaigns',
    previewLabel: 'Campaign Launch',
    previewStat: '12M impressions per campaign',
    previewTag: 'Viral Architecture',
    previewColor: '#D4785A',
    previewGlow: 'rgba(212,120,90,0.20)',
    previewBars: [15, 22, 30, 45, 60, 72, 85, 90, 88, 95, 100, 98],
    previewLines: ['Meta Ads', 'ROAS Optimisation', 'Audience Targeting'],
  },
];

// ========================================
// STAIRCASE HEIGHTS (tighter, more balanced)
// ========================================
const BASE_HEIGHTS      = [200, 268, 336, 404, 472];
const EXPANDED_HEIGHT   = 540;   // reduced from 680 — less dominant
const COMPRESSED_HEIGHT = 180;

// ========================================
// CINEMATIC PREVIEW CARD
// ========================================
function PreviewCard({ activeService }) {
  const defaultPreview = {
    previewLabel: 'Our Services',
    previewStat: 'Five disciplines. One agency.',
    previewTag: 'Social Minds Studio',
    previewColor: 'rgba(255,156,96,0.7)',
    previewGlow: 'rgba(255,156,96,0.12)',
    previewBars: [40, 55, 50, 68, 60, 75, 65, 80, 72, 85, 78, 90],
    previewLines: ['Strategy', 'Production', 'Analytics'],
  };

  const preview = activeService || defaultPreview;

  return (
    <div
      style={{
        marginBottom: '28px',
        height: '88px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'linear-gradient(120deg, #111111 0%, #0c0c0c 100%)',
        boxShadow: `0 0 40px ${preview.previewGlow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
        transition: 'box-shadow 0.6s ease',
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
        gap: '28px',
      }}
    >
      {/* Ambient glow sweep */}
      <motion.div
        key={preview.previewLabel}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 40% 100% at 0% 50%, ${preview.previewGlow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Left — label area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={preview.previewLabel + '-text'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px', zIndex: 1 }}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: preview.previewColor || '#FF9C60',
            textTransform: 'uppercase',
            opacity: 0.85,
          }}>
            {preview.previewTag}
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '22px',
            color: '#ffffff',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>
            {preview.previewLabel}
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.03em',
          }}>
            {preview.previewStat}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Divider */}
      <div style={{
        width: '1px',
        height: '40px',
        background: 'rgba(255,255,255,0.08)',
        flexShrink: 0,
        zIndex: 1,
      }} />

      {/* Center — micro bar chart */}
      <AnimatePresence mode="wait">
        <motion.div
          key={preview.previewLabel + '-bars'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            height: '44px',
            flex: 1,
            zIndex: 1,
          }}
        >
          {preview.previewBars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(h / 100) * 44}px` }}
              transition={{ duration: 0.5, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1,
                borderRadius: '2px 2px 0 0',
                background: i === preview.previewBars.length - 1
                  ? preview.previewColor || '#FF9C60'
                  : `rgba(255,255,255,${0.04 + (h / 100) * 0.1})`,
                minWidth: '4px',
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Divider */}
      <div style={{
        width: '1px',
        height: '40px',
        background: 'rgba(255,255,255,0.08)',
        flexShrink: 0,
        zIndex: 1,
      }} />

      {/* Right — capability tags */}
      <AnimatePresence mode="wait">
        <motion.div
          key={preview.previewLabel + '-lines'}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.38, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            zIndex: 1,
            minWidth: '130px',
          }}
        >
          {preview.previewLines.map((line, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
            }}>
              <div style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: preview.previewColor || '#FF9C60',
                opacity: 0.7,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '9px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{line}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Right edge accent line */}
      <motion.div
        animate={{ scaleY: activeService ? 1 : 0.4, opacity: activeService ? 1 : 0.25 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: '2px',
          background: `linear-gradient(180deg, transparent, ${preview.previewColor || '#FF9C60'}, transparent)`,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}

// ========================================
// INDIVIDUAL STAIRCASE CARD
// ========================================
function StaircaseCard({ service, index, activeIndex, onHover, onLeave, inView }) {
  const isActive   = activeIndex === index;
  const isInactive = activeIndex !== null && !isActive;
  const baseH      = BASE_HEIGHTS[index];

  const targetHeight = isActive
    ? EXPANDED_HEIGHT
    : isInactive
    ? COMPRESSED_HEIGHT
    : baseH;

  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.07 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        flex: isActive ? '1.6' : isInactive ? '0.65' : '1',
        minWidth: isActive ? '240px' : '110px',
        alignSelf: 'flex-end',
        willChange: 'transform, flex',
        transition: 'flex 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ height: targetHeight }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderRadius: '18px',
          border: isActive
            ? '1.5px solid rgba(255,156,96,0.55)'
            : isInactive
            ? '1.5px solid rgba(255,255,255,0.08)'
            : '1.5px solid rgba(255,255,255,0.13)',
          background: isActive
            ? 'linear-gradient(158deg, #1e1408 0%, #131313 55%, #0f0f0f 100%)'
            : isInactive
            ? 'linear-gradient(158deg, #141414 0%, #111111 100%)'
            : 'linear-gradient(158deg, #191919 0%, #141414 100%)',
          boxShadow: isActive
            ? '0 0 0 1px rgba(255,156,96,0.18), 0 8px 32px rgba(255,156,96,0.14), 0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)'
            : isInactive
            ? '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)'
            : '0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.055)',
          overflow: 'hidden',
          cursor: 'default',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: isActive ? '26px 24px' : '20px 16px',
          transition: 'padding 0.42s ease, border-color 0.42s ease, box-shadow 0.42s ease, background 0.42s ease',
          willChange: 'height',
        }}
      >
        {/* ── ORANGE TOP ACCENT LINE (active only) ── */}
        <motion.div
          animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 0, left: '16px', right: '16px',
            height: '2px',
            background: 'linear-gradient(90deg, #FF9C60 0%, #FF7030 60%, transparent 100%)',
            borderRadius: '1px',
            transformOrigin: 'left',
            boxShadow: '0 0 12px rgba(255,156,96,0.65), 0 0 24px rgba(255,156,96,0.25)',
          }}
        />

        {/* ── SIDE AMBIENT GLOW (active only) ── */}
        <motion.div
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '60px',
            background: 'linear-gradient(90deg, rgba(255,156,96,0.06) 0%, transparent 100%)',
            pointerEvents: 'none',
            borderRadius: '18px 0 0 18px',
          }}
        />

        {/* ── STEP NUMBER — visible watermark ── */}
        <div style={{
          position: 'absolute',
          bottom: isActive ? '14px' : '8px',
          right: isActive ? '16px' : '10px',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isActive ? '76px' : '54px',
          color: isActive
            ? 'rgba(255,156,96,0.22)'
            : 'rgba(255,255,255,0.11)',
          lineHeight: 1,
          userSelect: 'none',
          transition: 'font-size 0.42s ease, color 0.42s ease',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}>
          {service.number}
        </div>

        {/* ── COLLAPSED TOP — always visible ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>

          {/* Icon circle */}
          <div style={{
            width: isActive ? '42px' : '34px',
            height: isActive ? '42px' : '34px',
            borderRadius: '11px',
            background: isActive
              ? 'linear-gradient(135deg, rgba(255,156,96,0.18) 0%, rgba(255,112,48,0.08) 100%)'
              : 'rgba(255,255,255,0.07)',
            border: isActive
              ? '1px solid rgba(255,156,96,0.4)'
              : '1px solid rgba(255,255,255,0.14)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: isActive ? '19px' : '15px',
            transition: 'all 0.42s ease',
            flexShrink: 0,
            boxShadow: isActive ? '0 0 14px rgba(255,156,96,0.18)' : 'none',
          }}>
            {service.icon}
          </div>

          {/* Service subtitle tag */}
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '8px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: isActive ? '#FF9C60' : isInactive ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.42)',
            textTransform: 'uppercase',
            transition: 'color 0.32s ease',
          }}>
            {service.subtitle}
          </div>

          {/* Service title */}
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: isActive ? 'clamp(1.45rem, 2.1vw, 2.1rem)' : 'clamp(1.1rem, 1.6vw, 1.6rem)',
            lineHeight: 0.95,
            color: isActive ? '#ffffff' : isInactive ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.92)',
            letterSpacing: '0.01em',
            whiteSpace: 'pre-line',
            transition: 'font-size 0.42s ease, color 0.32s ease',
            textShadow: isActive ? '0 0 24px rgba(255,255,255,0.08)' : 'none',
          }}>
            {service.title}
          </div>

          {/* Metric — always shown */}
          <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: isActive ? 'clamp(1.6rem, 2.4vw, 2.7rem)' : 'clamp(1.2rem, 1.8vw, 1.8rem)',
              lineHeight: 1,
              color: isActive ? '#FF9C60' : isInactive ? '#d4784a' : '#FF9C60',
              letterSpacing: '0.02em',
              transition: 'font-size 0.42s ease, color 0.32s ease',
              textShadow: isActive ? '0 0 18px rgba(255,156,96,0.45)' : 'none',
            }}>
              {service.metric}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '8px',
              color: isActive ? 'rgba(255,255,255,0.42)' : isInactive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.36)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '2px',
              transition: 'color 0.32s ease',
            }}>
              {service.metricLabel}
            </div>
          </div>
        </div>

        {/* ── EXPANDED CONTENT — fades in on hover ── */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.28, delay: 0.1, ease: 'easeOut' }}
              style={{ marginTop: '16px' }}
            >
              {/* Thin divider */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,156,96,0.3), rgba(255,255,255,0.03))',
                marginBottom: '14px',
              }} />

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(11px, 1vw, 13px)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                marginBottom: '14px',
              }}>
                {service.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                {service.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '8px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.52)',
                    padding: '3px 10px',
                    background: 'rgba(255,255,255,0.065)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '100px',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}>{tag}</span>
                ))}
              </div>

              {/* CTA link */}
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF7030',
                  textDecoration: 'none',
                }}
              >
                {service.cta}
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'rgba(255,112,48,0.1)',
                  fontSize: '10px',
                }}>↗</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// MAIN EXPORT
// ========================================
export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const activeService = activeIndex !== null ? SERVICES[activeIndex] : null;

  const handleHover = (index) => setActiveIndex(index);
  const handleLeave = () => setActiveIndex(null);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#080808',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(24px, 5vw, 72px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dark grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />

      {/* Orange ambient glow — top center */}
      <div style={{
        position: 'absolute', top: '-40px', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.055) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── HEADER ROW ── */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '24px',   // ← Reduced from clamp(3rem, 6vw, 5rem)
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="tag-orange"
              style={{ marginBottom: '16px' }}
            >
              <span style={{ fontSize: '7px' }}>●</span>
              WHAT WE DO
            </motion.div>

            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2.8rem, 7vw, 9rem)',
                  color: '#ffffff',
                  lineHeight: '0.9',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                Our Services
              </motion.h2>
            </div>
          </div>

          {/* Right-side sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.28)',
              maxWidth: '220px',
              lineHeight: 1.65,
              margin: 0,
              paddingBottom: '6px',
            }}
          >
            Five disciplines. One integrated growth engine.
          </motion.p>
        </div>

        {/* ── CINEMATIC PREVIEW CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <PreviewCard activeService={activeService} />
        </motion.div>

        {/* ── STAIRCASE GRID ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 'clamp(8px, 1vw, 14px)',
            height: `${EXPANDED_HEIGHT + 20}px`,
          }}
          onMouseLeave={handleLeave}
        >
          {SERVICES.map((service, i) => (
            <StaircaseCard
              key={service.id}
              service={service}
              index={i}
              activeIndex={activeIndex}
              onHover={handleHover}
              onLeave={handleLeave}
              inView={inView}
            />
          ))}
        </div>

        {/* ── STEP PROGRESS INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            marginTop: '28px',
          }}
        >
          {SERVICES.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              animate={{
                width: activeIndex === i ? '26px' : '5px',
                background: activeIndex === i ? '#FF9C60' : 'rgba(255,255,255,0.15)',
              }}
              transition={{ duration: 0.32 }}
              style={{
                height: '5px', borderRadius: '3px',
                border: 'none', cursor: 'pointer', padding: 0,
                outline: 'none',
              }}
              aria-label={`Select ${s.subtitle}`}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
