// ================================================================
// ABOUT STORY — Section 02
// Vertical editorial layout: Section Heading + Large Landscape Banner + Clean Content
// Stats, scroll-triggered reveals, premium styling preserved
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Agency story stats displayed in grid
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
      <div className="ab-story-vertical">

        {/* ── 1. SECTION HEADING ── */}
        <motion.div
          className="ab-story-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: SPRING }}
        >
          {/* Eyebrow label */}
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Our Story
          </div>

          {/* Section heading with outline accent */}
          <h2 className="ab-story-heading">
            Born From
            <br />
            <span>Frustration</span>
          </h2>

          {/* Two-line description */}
          <p className="ab-story-header-desc">
            We watched brilliant brands and talented people remain invisible in a crowded digital world.
            We are here to change that by making your brand impossible to ignore.
          </p>
        </motion.div>

        {/* ── 2. LARGE LANDSCAPE IMAGE BANNER ── */}
        <motion.div
          className="ab-story-banner-wrap"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: SPRING }}
        >
          {/* Main agency image banner */}
          <img
            className="ab-story-img-landscape"
            src="/Teampics/groupphoto.webp"
            alt="Social Minds creative agency team at work"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* ── 3. CONTENT SECTION (Single-column readable layout) ── */}
        <motion.div
          className="ab-story-content-vertical"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.3, ease: SPRING }}
        >
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

          {/* ── Stats grid ── */}
          <motion.div
            className="ab-story-stats"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: SPRING }}
          >
            {STORY_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="ab-story-stat"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease: SPRING }}
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
