// ========================================
// BRAND MARQUEE SECTION
// Dual-row infinite marquee with glassmorphism pills
// Alternating direction — orange glow divider
// ========================================

import { motion } from 'framer-motion';
import './BrandMarquee.css';

// Row 1 — clients
const row1 = [
  { label: 'Afra Modest', logo: '/clientlogos/afra.png' },
  { label: 'Shashijab', logo: '/clientlogos/Shashijab.png' },
  { label: 'SSJ Super Shop', logo: '/clientlogos/ssjsupershop.png' },
  { label: 'Brita', logo: '/clientlogos/brita.png' },
  { label: '1Way', logo: '/clientlogos/1way.jpg' },
  { label: 'Rainbow Pro Gears', logo: '/clientlogos/rainbow.jpg' },
  { label: 'Kanchi Plaza', logo: '/clientlogos/kanchiplaza.jpg' },
];

// Row 2 — clients
const row2 = [
  { label: 'MedWalk', logo: '/clientlogos/medwalk.png' },
  { label: 'Bag House', logo: '/clientlogos/bag-house.png' },
  { label: 'Rahman Plaza', logo: '/clientlogos/rahmanplaza.png' },
  { label: 'Princess Park', logo: '/clientlogos/princesspark.jpg' },
  { label: 'Simco', logo: '/clientlogos/simco.png' },
  { label: 'SS Footwear', logo: '/clientlogos/ss-footwear.png' },
];

function MarqueeRow({ items, reverse = false, speed = 'normal' }) {
  const animClass = reverse
    ? speed === 'fast' ? 'animate-marquee-reverse-fast' : 'animate-marquee-reverse'
    : speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div className={animClass} style={{ display: 'flex', gap: '16px', whiteSpace: 'nowrap', width: 'max-content' }}>
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="brand-pill">
            {item.logo ? (
              <div className="brand-pill-logo">
                <img 
                  src={item.logo} 
                  alt={item.label}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'none';
                    e.target.parentElement.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
            ) : null}
            <div className="brand-pill-initial" style={{ display: item.logo ? 'none' : 'flex' }}>
              {item.label.charAt(0)}
            </div>
            <span className="brand-pill-text">
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
            TRUSTED BY GROWING BRANDS
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
