// ================================================================
// ABOUT HERO — Section 01
// Full-screen cinematic hero with parallax background,
// animated title reveal, floating metrics, scroll indicator
// ================================================================

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ── Hero floating metrics data
const HERO_METRICS = [
  { val: '150+', label: 'Brands Scaled' },
  { val: '₹50Cr', label: 'Revenue Generated' },
  { val: '4.9★', label: 'Client Rating' },
  { val: '2021', label: 'Est. Year' },
];

// ── Shared animation spring — used throughout hero reveals
const SPRING = [0.16, 1, 0.3, 1];

export default function AboutHero() {
  // ── Parallax reference — background moves slower than scroll
  const bgRef = useRef(null);

  useEffect(() => {
    // Subtle parallax: bg translates at 0.3x scroll speed
    const handleScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="ab-hero" aria-label="About Social Minds Hero">
      {/* ── Parallax background image ── */}
      <div ref={bgRef} className="ab-hero-bg" aria-hidden="true" />

      {/* ── Multi-layer cinematic dark overlay ── */}
      <div className="ab-hero-overlay" aria-hidden="true" />

      {/* ── Atmospheric orange glow blob ── */}
      <div className="ab-hero-glow" aria-hidden="true" />

      {/* ── Film grain texture ── */}
      <div className="ab-grain" aria-hidden="true" />

      {/* ── Hero Content ── */}
      <div className="ab-hero-content">
        {/* Eyebrow pill */}
        <motion.div
          className="ab-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: SPRING }}
        >
          <span className="ab-eyebrow-dot" aria-hidden="true" />
          Our Story
        </motion.div>

        {/* ── Main cinematic title — staggered line reveal ── */}
        <h1 className="ab-hero-title">
          {/* Line 1 — clip reveal from bottom */}
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: SPRING }}
            >
              We Don&apos;t
            </motion.span>
          </div>

          {/* Line 2 — outline style */}
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="ab-hero-title-outline"
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.52, ease: SPRING }}
            >
              Just Post
            </motion.span>
          </div>

          {/* Line 3 — orange accent */}
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="ab-hero-title-orange"
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.64, ease: SPRING }}
            >
              Content.
            </motion.span>
          </div>
        </h1>

        {/* Sub-headline — delayed fade */}
        <motion.p
          className="ab-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: SPRING }}
        >
          We engineer digital attention. Every post, reel, and campaign
          is built to make your brand{' '}
          <span style={{ color: '#ff9c60' }}>impossible to ignore</span>.
        </motion.p>

        {/* ── Floating metric badges ── */}
        <motion.div
          className="ab-hero-metrics"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: SPRING }}
        >
          {HERO_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="ab-hero-metric"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.07, ease: SPRING }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(255,156,96,0.25)',
                transition: { duration: 0.25 },
              }}
            >
              <div className="ab-hero-metric-val">{m.val}</div>
              <div className="ab-hero-metric-label">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator — animated drop line ── */}
      <motion.div
        className="ab-hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        aria-hidden="true"
      >
        <span className="ab-hero-scroll-text">Scroll</span>
        <div className="ab-hero-scroll-line" />
      </motion.div>
    </section>
  );
}
