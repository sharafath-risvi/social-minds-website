// ================================================================
// ABOUT STORY — Section 02
// Asymmetric editorial split: cinematic image left + rich text right
// Stats, floating card overlay, scroll-triggered reveals
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Agency story stats displayed in 2x2 grid
const STORY_STATS = [
  { val: '2021', label: 'Founded' },
  { val: '₹50Cr+', label: 'Revenue Generated' },
  { val: '150+', label: 'Brands Scaled' },
  { val: '4.9★', label: 'Client Rating' },
];

const SPRING = [0.16, 1, 0.3, 1];

export default function AboutStory() {
  const ref = useRef(null);
  // ── Trigger entrance animations when section enters viewport
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-story" ref={ref} aria-label="About Social Minds Story">
      <div className="ab-story-grid">

        {/* ── LEFT: Cinematic image with floating stat card ── */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: SPRING }}
        >
          <div className="ab-story-image-wrap">
            {/* Main agency image */}
            <img
              className="ab-story-img"
              src="/about/agency.png"
              alt="Social Minds creative agency team at work"
              loading="lazy"
              draggable={false}
            />

            {/* ── Floating stat card — overlaps corner of image ── */}
            <motion.div
              className="ab-story-float-card"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: SPRING }}
              // Subtle perpetual float animation
              style={{ animation: 'ab-float 3.5s ease-in-out infinite' }}
            >
              <div className="ab-story-float-val">50Cr+</div>
              <div className="ab-story-float-label">Revenue Generated</div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: Editorial storytelling content ── */}
        <motion.div
          className="ab-story-content"
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: SPRING }}
        >
          {/* Eyebrow label */}
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Our Story
          </div>

          {/* Section heading with outline accent */}
          <h2>
            Born From
            <br />
            <span>Frustration</span>
          </h2>

          {/* Storytelling paragraphs */}
          <p>
            Social Minds was born from a single, burning frustration: brilliant
            brands being invisible. We watched genuinely great products and
            talented people fail simply because they couldn&apos;t navigate the
            attention economy.
          </p>
          <p>
            So we built the agency we always wished existed. One that combines
            the precision of data science, the craft of premium design, and the
            instinct of cultural fluency — to make brands{' '}
            <span style={{ color: '#ff9c60', fontWeight: 600 }}>
              truly impossible to ignore.
            </span>
          </p>
          <p>
            Today, Social Minds is India&apos;s most premium Gen Z-native social
            media agency. We don&apos;t follow trends. We set them.
          </p>

          {/* ── 2x2 Stats grid ── */}
          <motion.div
            className="ab-story-stats"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: SPRING }}
          >
            {STORY_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="ab-story-stat"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: SPRING }}
              >
                <div className="ab-story-stat-val">{s.val}</div>
                <div className="ab-story-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
