// ========================================
// HORIZONTAL REEL SECTION
// Scroll-driven horizontal motion cards
// 8 reel cards sliding as user scrolls
// Cinematic reel previews with engagement data
// ========================================

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// ========================================
// REEL CARDS DATA
// ========================================
const reels = [
  {
    id: 1,
    title: 'Morning Routine That Changed My Business',
    views: '4.2M',
    likes: '342K',
    duration: '0:58',
    gradient: 'linear-gradient(145deg, #FF6B35 0%, #FF9C60 40%, #FFD4B8 100%)',
    tag: 'LIFESTYLE',
  },
  {
    id: 2,
    title: 'The Secret to 18% Engagement Rate',
    views: '3.8M',
    likes: '210K',
    duration: '0:47',
    gradient: 'linear-gradient(145deg, #6B35FF 0%, #9C60FF 40%, #D4B8FF 100%)',
    tag: 'STRATEGY',
  },
  {
    id: 3,
    title: 'Brand Launch That Went Viral in 48 Hours',
    views: '7.1M',
    likes: '890K',
    duration: '1:12',
    gradient: 'linear-gradient(145deg, #35FF6B 0%, #60FF9C 40%, #B8FFD4 100%)',
    tag: 'CASE STUDY',
  },
  {
    id: 4,
    title: 'How We Built 100K Audience From Zero',
    views: '2.9M',
    likes: '178K',
    duration: '0:52',
    gradient: 'linear-gradient(145deg, #FF3560 0%, #FF6B9D 40%, #FFB8D4 100%)',
    tag: 'GROWTH',
  },
  {
    id: 5,
    title: 'Content Calendar That Saves 10 Hours/Week',
    views: '1.8M',
    likes: '124K',
    duration: '0:44',
    gradient: 'linear-gradient(145deg, #35D4FF 0%, #60DAFF 40%, #B8F0FF 100%)',
    tag: 'PRODUCTIVITY',
  },
  {
    id: 6,
    title: 'The Psychology Behind Viral Hooks',
    views: '5.4M',
    likes: '448K',
    duration: '0:61',
    gradient: 'linear-gradient(145deg, #FFD435 0%, #FFDA60 40%, #FFF0B8 100%)',
    tag: 'PSYCHOLOGY',
  },
  {
    id: 7,
    title: 'Instagram Algorithm Decoded in 60 Seconds',
    views: '6.2M',
    likes: '512K',
    duration: '0:60',
    gradient: 'linear-gradient(145deg, #FF6B6B 0%, #FF9C9C 40%, #FFD4D4 100%)',
    tag: 'PLATFORM',
  },
  {
    id: 8,
    title: 'Client Result: 0 to 500K in 90 Days',
    views: '8.8M',
    likes: '1.2M',
    duration: '1:24',
    gradient: 'linear-gradient(145deg, #4AFF8A 0%, #60FFAA 40%, #B8FFD8 100%)',
    tag: 'RESULTS',
  },
];

// ========================================
// INDIVIDUAL REEL CARD
// ========================================
function ReelCard({ reel, index }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        flexShrink: 0,
        width: '220px',
        height: '360px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        background: reel.gradient,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        cursor: 'default',
      }}
    >
      {/* Noise texture on card */}
      <div className="noise-overlay" style={{ opacity: 0.06 }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
      }} />

      {/* Tag */}
      <div style={{
        position: 'absolute', top: '14px', left: '14px',
        padding: '4px 10px',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '8px',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.15em',
        }}>{reel.tag}</span>
      </div>

      {/* Duration */}
      <div style={{
        position: 'absolute', top: '14px', right: '14px',
        padding: '4px 8px',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '9px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.8)',
        }}>{reel.duration}</span>
      </div>

      {/* Play button */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '48px', height: '48px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid rgba(255,255,255,0.3)',
        }}
      >
        <div style={{
          width: 0, height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '14px solid rgba(255,255,255,0.9)',
          marginLeft: '3px',
        }} />
      </motion.div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 14px 16px' }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          color: '#fff',
          lineHeight: 1.4,
          marginBottom: '10px',
        }}>
          {reel.title}
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#FF9C60', fontSize: '10px' }}>◈</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>{reel.views}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '10px' }}>♥</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>{reel.likes}</span>
          </div>
        </div>
      </div>

      {/* Animated shimmer */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 5, repeat: Infinity, delay: index * 0.3, ease: 'linear' }}
      />
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function HorizontalReelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves left, row 2 moves right
  const row1X = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const row2X = useTransform(scrollYProgress, [0, 1], ['-8%', '4%']);

  const split1 = reels.slice(0, 4);
  const split2 = reels.slice(4, 8);

  return (
    <section
      ref={ref}
      style={{
        background: '#080808',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* ── HEADER ── */}
      <div style={{
        textAlign: 'center',
        padding: '0 24px',
        marginBottom: '56px',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="tag-orange"
          style={{ marginBottom: '20px' }}
        >
          <span style={{ fontSize: '7px' }}>●</span>
          OUR VIRAL CONTENT
        </motion.div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 10rem)',
              color: '#fff',
              lineHeight: '0.9',
              marginBottom: '20px',
            }}
          >
            Reel After Reel.<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Growth After Growth.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: 'rgba(255,255,255,0.3)',
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          Every reel we produce is engineered to stop the scroll and capture attention in the first 2 seconds.
        </motion.p>
      </div>

      {/* ── ROW 1 — Moves left ── */}
      <div style={{ overflow: 'hidden', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            paddingLeft: '48px',
            paddingRight: '48px',
            x: row1X,
            willChange: 'transform',
          }}
        >
          {[...split1, ...split1].map((reel, i) => (
            <ReelCard key={`r1-${i}`} reel={reel} index={i} />
          ))}
        </motion.div>
      </div>

      {/* ── ROW 2 — Moves right ── */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            paddingLeft: '48px',
            paddingRight: '48px',
            x: row2X,
            willChange: 'transform',
          }}
        >
          {[...split2, ...split2].map((reel, i) => (
            <ReelCard key={`r2-${i}`} reel={reel} index={i + 4} />
          ))}
        </motion.div>
      </div>

      {/* ── MARQUEE TEXT STRIP ── */}
      <div style={{
        marginTop: '60px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '14px 0',
        position: 'relative', zIndex: 2,
      }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '48px', whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)' }}>REEL PRODUCTION</span>
              <span style={{ color: '#FF9C60', fontSize: '8px' }}>●</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)' }}>VIRAL CONTENT</span>
              <span style={{ color: '#FF9C60', fontSize: '8px' }}>●</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)' }}>GROWTH STRATEGY</span>
              <span style={{ color: '#FF9C60', fontSize: '8px' }}>●</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)' }}>SOCIAL MINDS</span>
              <span style={{ color: '#FF9C60', fontSize: '8px' }}>●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
