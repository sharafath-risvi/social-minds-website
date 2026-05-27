// ========================================
// TESTIMONIALS v2.0 — WHITE SECTION
// Infinite horizontal scrolling carousel
// Rich client cards with avatar, stars, quote
// Moving dual-row layout
// ========================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// TESTIMONIALS DATA
// ========================================
const testimonials = [
  {
    name: 'Rohan Mehta',
    role: 'Founder, FashionBrand.in',
    avatar: 'RM',
    avatarColor: '#FF9C60',
    quote: 'Social Minds took us from 2K to 148K followers in 90 days. The reels they produce are on another level — every single one goes viral. They don\'t just create content, they create a movement.',
    stars: 5,
    result: '6,050% growth',
    platform: '📸 Instagram',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, TechStartup Co.',
    avatar: 'PS',
    avatarColor: '#60D4FF',
    quote: 'The analytics reports alone are worth the investment. They track every metric that matters and optimize weekly. Our LinkedIn engagement went from 0.9% to 8.4% in 60 days. Incredible team.',
    stars: 5,
    result: '+5,150% followers',
    platform: '💼 LinkedIn',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Director, FoodBrand PVT',
    avatar: 'AK',
    avatarColor: '#A3FF60',
    quote: 'I was skeptical at first. But within the first month, one reel hit 2.1M views. We had to expand our kitchen capacity because we couldn\'t handle the orders. Social Minds literally scaled our business.',
    stars: 5,
    result: '2.1M reel views',
    platform: '🎬 YouTube',
  },
  {
    name: 'Sneha Gupta',
    role: 'Personal Brand Coach',
    avatar: 'SG',
    avatarColor: '#FF6B9D',
    quote: 'As a personal brand, I needed someone who understood my voice. Social Minds nailed it from day one. They built my entire content strategy and now I get 200+ DMs per week from potential clients.',
    stars: 5,
    result: '200+ weekly DMs',
    platform: '📸 Instagram',
  },
  {
    name: 'Vivek Nair',
    role: 'Co-founder, EduTech App',
    avatar: 'VN',
    avatarColor: '#C084FC',
    quote: 'The ROI is unmatched. We spent ₹2L on their service and generated ₹18L in revenue from organic content alone. Their growth strategy is seriously next-level. Best investment of our startup journey.',
    stars: 5,
    result: '9x ROI',
    platform: '🎵 TikTok',
  },
  {
    name: 'Ananya Das',
    role: 'Fashion Influencer',
    avatar: 'AD',
    avatarColor: '#FFD700',
    quote: 'Before Social Minds, I was stuck at 8K followers for 2 years. Now I\'m at 384K in 4 months. They decoded the Instagram algorithm in ways I never could. The growth is real and organic.',
    stars: 5,
    result: '0 → 384K followers',
    platform: '📸 Instagram',
  },
];

// ========================================
// SINGLE TESTIMONIAL CARD
// ========================================
function TestimonialCard({ t, i }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 'clamp(300px, 35vw, 420px)',
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '24px',
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      {/* Quote mark */}
      <div style={{
        position: 'absolute', top: '20px', right: '28px',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '80px',
        color: 'rgba(0,0,0,0.05)',
        lineHeight: 1,
        userSelect: 'none',
      }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
        {Array(t.stars).fill(null).map((_, si) => (
          <span key={si} style={{ color: '#FF9C60', fontSize: '14px' }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        color: 'rgba(0,0,0,0.6)',
        lineHeight: 1.75,
        marginBottom: '24px',
        position: 'relative',
        zIndex: 2,
      }}>
        "{t.quote}"
      </p>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.08), transparent)',
        marginBottom: '20px',
      }} />

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        {/* Avatar */}
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}AA)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          color: '#fff',
          flexShrink: 0,
          boxShadow: `0 4px 16px ${t.avatarColor}40`,
        }}>
          {t.avatar}
        </div>
        <div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            color: '#0D0D0D',
          }}>{t.name}</div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: 'rgba(0,0,0,0.4)',
          }}>{t.role}</div>
        </div>
      </div>

      {/* Result + Platform */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{
          padding: '5px 12px',
          background: 'rgba(255,156,96,0.08)',
          border: '1px solid rgba(255,156,96,0.2)',
          borderRadius: '100px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          color: '#FF7030',
        }}>
          {t.result}
        </span>
        <span style={{
          padding: '5px 12px',
          background: 'rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '100px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          color: 'rgba(0,0,0,0.4)',
        }}>
          {t.platform}
        </span>
      </div>
    </div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section
      ref={ref}
      style={{
        background: '#F8F7F4',
        padding: 'clamp(6rem, 12vw, 10rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* ── HEADER ── */}
      <div style={{
        textAlign: 'center',
        padding: '0 clamp(24px, 5vw, 80px)',
        marginBottom: '64px',
        position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="tag-orange-dark"
          style={{ marginBottom: '20px' }}
        >
          <span style={{ fontSize: '7px' }}>●</span>
          WHAT BRANDS SAY
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
            Brands Don't<br />
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
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          Real clients. Real results. Real transformations.
        </motion.p>
      </div>

      {/* ── ROW 1 — Left to Right ── */}
      <div style={{ overflow: 'hidden', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-slow" style={{ display: 'flex', gap: '20px', width: 'max-content', padding: '8px 0' }}>
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} i={i} />
          ))}
        </div>
      </div>

      {/* ── ROW 2 — Right to Left ── */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-reverse" style={{ display: 'flex', gap: '20px', width: 'max-content', padding: '8px 0' }}>
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} i={i} />
          ))}
        </div>
      </div>

      {/* ── RATING SUMMARY ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          textAlign: 'center',
          marginTop: '60px',
          position: 'relative', zIndex: 2,
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {Array(5).fill(null).map((_, i) => (
              <span key={i} style={{ color: '#FF9C60', fontSize: '20px' }}>★</span>
            ))}
          </div>
          <div>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#0D0D0D', letterSpacing: '0.03em' }}>4.8 / 5</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.4)', marginLeft: '12px' }}>
              from 50+ client reviews
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
