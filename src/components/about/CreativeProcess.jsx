// ================================================================
// CREATIVE PROCESS — Section 06
// 4-step cinematic process with animated bottom bar on hover,
// editorial step numbers, dark editorial layout
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── The 4 process steps
const PROCESS_STEPS = [
  {
    num: '01',
    icon: '◎',
    title: 'Strategy',
    desc: 'We audit your brand, study your audience, and reverse-engineer what your competitors are missing. No guesswork — pure data.',
    tags: ['360° Audit', 'Competitor Research', 'Growth Mapping'],
  },
  {
    num: '02',
    icon: '◆',
    title: 'Production',
    desc: 'Cinema-quality reels, editorial content, and premium storytelling — crafted to stop the scroll within the first 2 seconds.',
    tags: ['Cinematic Reels', 'Photo Editing', 'Podcast Content'],
  },
  {
    num: '03',
    icon: '◈',
    title: 'Distribution',
    desc: 'Smart posting schedules, algorithm-optimized captions, hashtag science, and platform-specific formatting for maximum reach.',
    tags: ['Posting Strategy', 'Hashtag Science', 'Platform SEO'],
  },
  {
    num: '04',
    icon: '▣',
    title: 'Scaling',
    desc: 'Weekly performance reviews, A/B tested improvements, and paid amplification. We compound your results every single month.',
    tags: ['Weekly Reports', 'Paid Boost', 'A/B Testing'],
  },
];

export default function CreativeProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-process" ref={ref} aria-label="Creative Process">
      {/* ── Film grain overlay ── */}
      <div className="ab-grain" aria-hidden="true" />

      <div className="ab-process-inner">

        {/* ── Section header ── */}
        <motion.div
          className="ab-process-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: SPRING }}
        >
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            How We Work
          </div>

          <h2 className="ab-process-heading">
            Our Creative
            <br />
            <span>Process.</span>
          </h2>

          <p className="ab-process-sub">
            Four precision-engineered stages. Every brand goes through all four.
            No shortcuts, no guesswork.
          </p>
        </motion.div>

        {/* ── 4-step process grid ── */}
        <div className="ab-process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="ab-process-step"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.1, ease: SPRING }}
            >
              {/* Editorial large step number */}
              <div className="ab-process-step-num" aria-hidden="true">
                {step.num}
              </div>

              {/* Step icon */}
              <span className="ab-process-step-icon" role="img" aria-hidden="true">
                {step.icon}
              </span>

              {/* Step title */}
              <h3 className="ab-process-step-title">{step.title}</h3>

              {/* Step description */}
              <p className="ab-process-step-desc">{step.desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '20px' }}>
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      background: 'rgba(255,156,96,0.07)',
                      border: '1px solid rgba(255,156,96,0.15)',
                      borderRadius: '100px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: '#ff9c60',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ── Orange bottom bar — expands on hover via CSS ── */}
              <div className="ab-process-step-bar" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
