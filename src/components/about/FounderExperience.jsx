// ================================================================
// FOUNDER EXPERIENCE — Section 04
// Cinematic dark section: large portrait + floating quote card +
// vision statement + founder story + animated stats row
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── Founder achievement stats
const FOUNDER_STATS = [
  { val: '8+', label: 'Years Experience' },
  { val: '150+', label: 'Brands Built' },
  { val: '₹50Cr', label: 'Revenue Driven' },
];

export default function FounderExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-founder" ref={ref} aria-label="Founder Experience">
      {/* ── Ambient orange glow ── */}
      <div className="ab-founder-glow" aria-hidden="true" />

      {/* ── Film grain ── */}
      <div className="ab-grain" aria-hidden="true" />

      <div className="ab-founder-grid">

        {/* ════════════════════════════════
            LEFT: Cinematic founder portrait
        ════════════════════════════════ */}
        <motion.div
          className="ab-founder-portrait"
          initial={{ opacity: 0, x: -48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: SPRING }}
        >
          {/* Portrait image container */}
          <div className="ab-founder-img-wrap">
            <img
              className="ab-founder-img"
              src="/about/founder.png"
              alt="Social Minds Founder and CEO"
              loading="lazy"
              draggable={false}
            />
            {/* Bottom gradient fade into section bg */}
            <div className="ab-founder-img-overlay" aria-hidden="true" />
          </div>

          {/* ── Floating quote card — overlaps bottom-right of portrait ── */}
          <motion.div
            className="ab-founder-quote-card"
            initial={{ opacity: 0, scale: 0.8, y: 24 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.55, ease: SPRING }}
            style={{ animation: 'ab-float 4s ease-in-out infinite' }}
          >
            <div className="ab-founder-quote-mark">&ldquo;</div>
            <p className="ab-founder-quote-text">
              Brands don&apos;t fail because of bad products. They fail because
              no one is paying attention.
            </p>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════
            RIGHT: Founder story + content
        ════════════════════════════════ */}
        <motion.div
          className="ab-founder-content"
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: SPRING }}
        >
          {/* Eyebrow */}
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            The Founder
          </div>

          {/* Founder name — large editorial */}
          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <motion.h2
              className="ab-founder-name"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.25, ease: SPRING }}
            >
              The Mind
              <br />
              <span>Behind It.</span>
            </motion.h2>
          </div>

          {/* Title / role */}
          <p className="ab-founder-title">Founder &amp; CEO — Social Minds</p>

          {/* Bio paragraphs — staggered reveal */}
          <motion.p
            className="ab-founder-bio"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: SPRING }}
          >
            With 8+ years in digital marketing and 3 startups built from the
            ground up, the founder of Social Minds has spent his career
            obsessing over one question: why do some brands command attention
            while others beg for it?
          </motion.p>

          <motion.p
            className="ab-founder-bio"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: SPRING }}
          >
            The answer led to Social Minds — an agency built on the principle
            that premium storytelling, cultural intelligence, and data
            precision aren&apos;t separate disciplines. They&apos;re the same thing.
          </motion.p>

          {/* ── Vision statement — left-border styled ── */}
          <motion.div
            className="ab-founder-vision"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: SPRING }}
          >
            <p className="ab-founder-vision-text">
              &ldquo;I built Social Minds because I was tired of watching great
              brands be invisible. That ends now.&rdquo;
            </p>
          </motion.div>

          {/* ── Founder stats row ── */}
          <motion.div
            className="ab-founder-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75, ease: SPRING }}
          >
            {FOUNDER_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.8 + i * 0.08, ease: SPRING }}
              >
                <div className="ab-founder-stat-val">{s.val}</div>
                <div className="ab-founder-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
