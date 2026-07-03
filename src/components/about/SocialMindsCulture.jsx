// ================================================================
// SOCIAL MINDS CULTURE — Section 08
// Dark cinematic image mosaic: 3-cell asymmetric grid + 2 stat cards
// Hover reveals overlay with tag + title, image unzoom on hover
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── Culture grid cells — using available assets
const CULTURE_CELLS = [
  {
    // Large tall left — spans full height
    img: '/Teampics/workingpic1.webp',
    alt: 'Social Minds creator filming content in studio',
    tag: 'Production',
    title: 'Cinema-Quality Creation',
  },
  {
    // Top right — strategy meeting
    img: '/Teampics/workingpic2.webp',
    alt: 'Social Minds team strategy session',
    tag: 'Strategy',
    title: 'Data-Led Decisions',
  },
  {
    // Bottom right — process image
    img: '/Teampics/workingpic3.webp',
    alt: 'Post-production editing workflow',
    tag: 'Post-Production',
    title: 'Premium Editing',
  },
];

// ── Extra stat cards below the grid
const CULTURE_STATS = [
  { val: '20+', label: 'Team Members' },
  { val: '5x', label: 'Avg. Growth Rate' },
  { val: '360°', label: 'Service Coverage' },
  { val: '24/7', label: 'Support Access' },
];

export default function SocialMindsCulture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-culture" ref={ref} aria-label="Social Minds Culture">
      {/* ── Film grain ── */}
      <div className="ab-grain" aria-hidden="true" />

      <div className="ab-culture-inner">

        {/* ── Section header ── */}
        <motion.div
          className="ab-culture-header"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: SPRING }}
        >
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Our Culture
          </div>

          <h2 className="ab-culture-heading">
            The World
            <br />
            <span>Inside.</span>
          </h2>
        </motion.div>

        {/* ── Asymmetric 3-cell image grid ── */}
        <div className="ab-culture-grid">
          {CULTURE_CELLS.map((cell, i) => (
            <motion.div
              key={cell.tag}
              className="ab-culture-cell"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: SPRING }}
            >
              {/* ── Background image — unzooms on hover via CSS ── */}
              <img
                className="ab-culture-img"
                src={cell.img}
                alt={cell.alt}
                loading="lazy"
                draggable={false}
              />

              {/* Always-on dark gradient */}
              <div className="ab-culture-cell-grad" aria-hidden="true" />

              {/* ── Hover overlay — tag + title ── */}
              <div className="ab-culture-cell-overlay">
                <div className="ab-culture-cell-tag">
                  <span
                    style={{ width: 4, height: 4, borderRadius: '50%', background: '#ff9c60', display: 'inline-block' }}
                    aria-hidden="true"
                  />
                  {cell.tag}
                </div>
                <div className="ab-culture-cell-title">{cell.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Extra stat cards row ── */}
        <motion.div
          className="ab-culture-extra"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: SPRING }}
        >
          {CULTURE_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="ab-culture-extra-card"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.07, ease: SPRING }}
              whileHover={{ borderColor: 'rgba(255,156,96,0.2)', background: 'rgba(255,156,96,0.04)' }}
            >
              <div className="ab-culture-extra-val">{s.val}</div>
              <div className="ab-culture-extra-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
