// ========================================
// BRAND MARQUEE SECTION
// Dual-row infinite marquee with glassmorphism pills
// Alternating direction — orange glow divider
// ========================================

import { motion } from 'framer-motion';

// Row 1 — brands / platforms
const row1 = [
  { label: 'Instagram', icon: '📸' },
  { label: 'YouTube', icon: '🎬' },
  { label: 'LinkedIn', icon: '💼' },
  { label: 'TikTok', icon: '🎵' },
  { label: 'Reels', icon: '🎥' },
  { label: 'Stories', icon: '⚡' },
  { label: 'Shorts', icon: '🔥' },
  { label: 'Pinterest', icon: '📌' },
  { label: 'Twitter', icon: '🐦' },
  { label: 'Facebook', icon: '📘' },
];

// Row 2 — services / achievements
const row2 = [
  { label: '10M+ Views', icon: '👁️' },
  { label: '50+ Brands', icon: '🏆' },
  { label: 'Viral Content', icon: '🚀' },
  { label: 'Growth Hacking', icon: '📈' },
  { label: 'Reel Strategy', icon: '🎯' },
  { label: 'Brand Building', icon: '🏛️' },
  { label: 'Content Studio', icon: '🎨' },
  { label: 'Analytics', icon: '📊' },
  { label: 'Ads Management', icon: '💡' },
  { label: 'SEO Strategy', icon: '🔍' },
];

function MarqueeRow({ items, reverse = false, speed = 'normal' }) {
  const animClass = reverse
    ? speed === 'fast' ? 'animate-marquee-reverse-fast' : 'animate-marquee-reverse'
    : speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div className={animClass} style={{ display: 'flex', gap: '16px', whiteSpace: 'nowrap', width: 'max-content' }}>
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              // Replaced backdropFilter:blur(12px) — was applied to 30+ cloned moving elements
              // causing a massive compositing layer cost on every marquee animation frame.
              background: 'rgba(20,20,20,0.85)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '100px',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '14px' }}>{item.icon}</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.04em',
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section style={{
      background: '#000',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top divider */}
      <div className="section-divider" />

      {/* Header label */}
      <div style={{
        textAlign: 'center',
        padding: '48px 24px 36px',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ height: '1px', width: '40px', background: 'rgba(255,156,96,0.4)' }} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
          }}>
            AS SEEN GROWING WITH
          </span>
          <div style={{ height: '1px', width: '40px', background: 'rgba(255,156,96,0.4)' }} />
        </motion.div>
      </div>

      {/* Orange ambient glow — pure radial-gradient, no filter:blur */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '200px',
        // radial-gradient achieves the same soft glow as blur(40px) but costs zero GPU
        background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,156,96,0.09) 0%, rgba(255,156,96,0.03) 55%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Marquee rows */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        padding: '0 0 48px',
        position: 'relative',
        zIndex: 2,
      }}>
        <MarqueeRow items={row1} reverse={false} speed="normal" />
        <MarqueeRow items={row2} reverse={true} speed="fast" />
      </div>

      {/* Bottom orange divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,156,96,0.4), rgba(255,156,96,0.7), rgba(255,156,96,0.4), transparent)',
      }} />
    </section>
  );
}
