// ================================================================
// ABOUT FINAL CTA — Section 09
// Dark cinematic ending: giant editorial type, orange glow,
// premium animated CTA button, grain texture
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const SPRING = [0.16, 1, 0.3, 1];

export default function AboutFinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-cta" ref={ref} aria-label="Start Working With Social Minds">
      {/* ── Atmospheric glow blob at top ── */}
      <div className="ab-cta-glow-top" aria-hidden="true" />

      {/* ── Film grain ── */}
      <div className="ab-grain" aria-hidden="true" />

      {/* ── Ambient side glow ── */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.04) 0%, transparent 65%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} aria-hidden="true" />

      <div className="ab-cta-content">
        {/* Eyebrow */}
        <motion.div
          className="ab-eyebrow"
          style={{ display: 'inline-flex', marginBottom: 32 }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: SPRING }}
        >
          <span className="ab-eyebrow-dot" aria-hidden="true" />
          Ready To Begin
        </motion.div>

        {/* ── Giant CTA headline — line by line reveal ── */}
        <h2 className="ab-cta-heading">
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.15, ease: SPRING }}
            >
              Let&apos;s Build
            </motion.span>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="ab-cta-heading-outline"
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.27, ease: SPRING }}
            >
              Something
            </motion.span>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.39, ease: SPRING }}
            >
              People Can&apos;t{' '}
              <span>Ignore.</span>
            </motion.span>
          </div>
        </h2>

        {/* Sub-copy */}
        <motion.p
          className="ab-cta-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease: SPRING }}
        >
          Ready to transform your brand? Let&apos;s start with a free
          strategy call and build something that lasts.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: SPRING }}
        >
          {/* Primary CTA */}
          <Link to="/contact" className="ab-cta-btn">
            Start Your Journey
            <span className="ab-cta-btn-arrow">→</span>
          </Link>

          {/* Secondary — view services */}
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '18px 40px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,156,96,0.35)';
              e.currentTarget.style.color = '#ff9c60';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
            }}
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
