// ================================================================
// MISSION & VISION — Section 03
// Cinematic split layout: dark Mission half + light Vision half
// Giant bg typography decoration, animated pillars, reveal effects
// ================================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── Mission supporting pillars
const MISSION_PILLARS = [
  'Make every brand unmissable',
  'Democratize premium branding',
  'Data + creativity in every campaign',
  'Results that compound over time',
];

// ── Vision supporting pillars
const VISION_PILLARS = [
  'Redefine social media marketing in India',
  'Set the standard — not follow it',
  'Gen Z aesthetic meets enterprise results',
  'Build brands that outlast trends',
];

// ── Shared animated pillar list component
function PillarList({ pillars, dark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="ab-mv-pillars"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {pillars.map((text, i) => (
        <motion.div
          key={text}
          className="ab-mv-pillar"
          initial={{ opacity: 0, x: dark ? -24 : 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: i * 0.08, ease: SPRING }}
        >
          <span className="ab-mv-pillar-dot" aria-hidden="true" />
          <span className="ab-mv-pillar-text">{text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function MissionVision() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' });
  const visionInView = useInView(visionRef, { once: true, margin: '-80px' });

  return (
    <div className="ab-mv">

      {/* ════════════════════════════════════════
          MISSION — Dark cinematic half
      ════════════════════════════════════════ */}
      <section
        className="ab-mv-mission"
        ref={missionRef}
        aria-label="Our Mission"
      >
        {/* ── Giant decorative background number ── */}
        <div className="ab-mv-bg-number" aria-hidden="true">01</div>

        {/* ── Film grain overlay ── */}
        <div className="ab-grain" aria-hidden="true" />

        {/* ── Ambient orange glow ── */}
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(255,156,96,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} aria-hidden="true" />

        <div className="ab-mv-mission-inner">
          {/* Eyebrow */}
          <motion.div
            className="ab-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: SPRING }}
          >
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Our Mission
          </motion.div>

          {/* Animated divider line — expands on scroll-in */}
          <motion.div
            className="ab-mv-line"
            initial={{ width: 0 }}
            animate={missionInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: SPRING }}
          />

          {/* Mission heading */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              className="ab-mv-heading"
              initial={{ y: '100%' }}
              animate={missionInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: SPRING }}
            >
              <span className="ab-mv-heading-white">Make Every</span>
              <br />
              <span className="ab-mv-heading-orange">Brand</span>
              <br />
              <span className="ab-mv-heading-outline">Unmissable.</span>
            </motion.h2>
          </div>

          {/* Mission body */}
          <motion.p
            className="ab-mv-body"
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: SPRING }}
          >
            We exist to democratize premium branding. Every brand — regardless
            of size — deserves world-class social media strategy, creative
            excellence, and data-driven growth that actually compounds.
          </motion.p>

          {/* Mission pillars */}
          <PillarList pillars={MISSION_PILLARS} dark={true} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISION — Light editorial half
      ════════════════════════════════════════ */}
      <section
        className="ab-mv-vision"
        ref={visionRef}
        aria-label="Our Vision"
      >
        {/* ── Giant decorative background number ── */}
        <div
          className="ab-mv-bg-number"
          style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.04)' }}
          aria-hidden="true"
        >
          02
        </div>

        <div className="ab-mv-vision-inner">
          {/* Eyebrow — dark on light bg */}
          <motion.div
            className="ab-eyebrow"
            style={{ background: 'rgba(255,156,96,0.08)', borderColor: 'rgba(255,156,96,0.2)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: SPRING }}
          >
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Our Vision
          </motion.div>

          {/* Animated divider line */}
          <motion.div
            className="ab-mv-line"
            style={{ background: 'linear-gradient(90deg, #080808, transparent)' }}
            initial={{ width: 0 }}
            animate={visionInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: SPRING }}
          />

          {/* Vision heading */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              className="ab-mv-heading"
              initial={{ y: '100%' }}
              animate={visionInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: SPRING }}
            >
              <span style={{ color: '#080808' }}>Redefine</span>
              <br />
              <span className="ab-mv-heading-orange">Social Media</span>
              <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(0,0,0,0.15)' }}>
                Marketing.
              </span>
            </motion.h2>
          </div>

          {/* Vision body */}
          <motion.p
            className="ab-mv-body"
            style={{ color: 'rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: SPRING }}
          >
            We&apos;re building a new standard for what social media marketing
            looks like in India. One where aesthetic quality, strategic depth,
            and measurable results are non-negotiable — for every client.
          </motion.p>

          {/* Vision pillars */}
          <PillarList pillars={VISION_PILLARS} dark={false} />
        </div>
      </section>

    </div>
  );
}
