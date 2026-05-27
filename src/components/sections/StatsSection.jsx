// ========================================
// STATS SECTION v2.0 — WHITE BACKGROUND
// Giant animated counting numbers — GSAP CountUp
// Diagonal accent lines + animated chart bars
// ========================================

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// STATS DATA
// ========================================
const stats = [
  {
    prefix: '',
    value: 50,
    suffix: '+',
    label: 'Brands Scaled',
    sub: 'across industries',
    color: '#FF9C60',
    bars: [30, 45, 60, 52, 75, 82, 90, 95],
  },
  {
    prefix: '',
    value: 10,
    suffix: 'M+',
    label: 'Views Generated',
    sub: 'organic + paid combined',
    color: '#FF6B9D',
    bars: [20, 35, 48, 62, 55, 78, 85, 92],
  },
  {
    prefix: '',
    value: 18.6,
    suffix: '%',
    label: 'Avg Engagement Rate',
    sub: 'industry avg is 3.2%',
    color: '#60D4FF',
    bars: [15, 25, 38, 30, 55, 62, 70, 80],
  },
  {
    prefix: '',
    value: 4.8,
    suffix: '★',
    label: 'Client Satisfaction',
    sub: 'across all projects',
    color: '#A3FF60',
    bars: [70, 75, 80, 78, 85, 88, 90, 95],
  },
];

// ========================================
// ANIMATED COUNTER HOOK
// ========================================
function useCounter(target, duration = 2000, delay = 0, start = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const isDecimal = !Number.isInteger(target);

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

        if (progress < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, target, duration, delay]);

  return count;
}

// ========================================
// SINGLE STAT CARD
// ========================================
function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 2200, index * 150, inView);
  const displayValue = Number.isInteger(stat.value) ? count : parseFloat(count).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      style={{
        position: 'relative',
        padding: '40px 32px',
        background: '#fff',
        borderRadius: '24px',
        border: '1px solid rgba(0,0,0,0.06)',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 12px 48px rgba(0,0,0,0.1), 0 0 0 2px ${stat.color}30`,
      }}
    >
      {/* Diagonal accent line */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '120px', height: '120px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '100px', height: '100px',
          background: `${stat.color}12`,
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px',
          width: '60px', height: '60px',
          background: `${stat.color}08`,
          borderRadius: '50%',
        }} />
      </div>

      {/* Color dot */}
      <div style={{
        width: '10px', height: '10px',
        background: stat.color,
        borderRadius: '50%',
        marginBottom: '20px',
        boxShadow: `0 0 12px ${stat.color}60`,
      }} />

      {/* Giant number */}
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(3.5rem, 6vw, 6rem)',
        lineHeight: 1,
        color: '#0D0D0D',
        letterSpacing: '-0.01em',
        marginBottom: '8px',
      }}>
        <span style={{ color: stat.color }}>{stat.prefix}</span>
        {displayValue}
        <span style={{ color: stat.color }}>{stat.suffix}</span>
      </div>

      {/* Label */}
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '16px',
        fontWeight: 700,
        color: '#0D0D0D',
        marginBottom: '4px',
      }}>
        {stat.label}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px',
        color: 'rgba(0,0,0,0.4)',
      }}>
        {stat.sub}
      </div>

      {/* Mini bar chart */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '4px',
        height: '36px',
        marginTop: '20px',
      }}>
        {stat.bars.map((h, i) => (
          <motion.div
            key={i}
            style={{
              flex: 1,
              background: i === stat.bars.length - 1
                ? stat.color
                : `${stat.color}35`,
              borderRadius: '3px 3px 0 0',
              height: 0,
            }}
            animate={inView ? { height: `${h}%` } : { height: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 + i * 0.04, ease: 'easeOut' }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN STATS SECTION
// ========================================
export default function StatsSection() {
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
      {/* Dot pattern */}
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.8 }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tag-orange-dark"
            style={{ marginBottom: '24px' }}
          >
            <span style={{ color: 'var(--color-orange-deep)', fontSize: '7px' }}>●</span>
            BY THE NUMBERS
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 8rem)',
                color: '#0D0D0D',
                lineHeight: 0.9,
                marginBottom: '20px',
              }}
            >
              Results That<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Speak Louder.</span>
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
            Every number below is a brand we transformed, an audience we built, and a story we told.
          </motion.p>
        </div>

        {/* ── STATS GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            textAlign: 'center',
            padding: '32px',
            background: '#fff',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A3FF60', boxShadow: '0 0 10px #A3FF6060' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.5)', letterSpacing: '0.06em' }}>
              TRUSTED BY 50+ BRANDS ACROSS INDIA
            </span>
          </div>
          <div className="section-divider-white" style={{ width: '1px', height: '20px', display: 'inline-block' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF9C60', boxShadow: '0 0 10px #FF9C6060' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.5)', letterSpacing: '0.06em' }}>
              3+ YEARS OF DIGITAL EXCELLENCE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
