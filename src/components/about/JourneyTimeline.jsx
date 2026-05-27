// ================================================================
// JOURNEY TIMELINE — Section 05
// Horizontal drag-scrollable cinematic milestone timeline
// Cards reveal on scroll-in, connecting orange line, hover lift
// ================================================================

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── Timeline milestones data
const MILESTONES = [
  {
    year: '2021',
    title: 'The Beginning',
    desc: 'Social Minds founded with a single mission: make brands impossible to ignore. First client signed within the first week.',
    metric: '1st Client — Day 7',
  },
  {
    year: '2022',
    title: 'First Viral Moment',
    desc: 'A reel campaign for a local fashion brand hits 2M+ organic views. The agency philosophy is proven: premium storytelling scales.',
    metric: '2M+ Organic Views',
  },
  {
    year: '2022',
    title: 'Growth Phase',
    desc: 'Team expands to 8 creators, strategists, and editors. Revenue crosses ₹1Cr. 40+ brands scaling simultaneously.',
    metric: '40+ Active Brands',
  },
  {
    year: '2023',
    title: 'Viral Campaigns',
    desc: 'Three consecutive viral campaigns — combined 15M+ views. Brands start coming inbound. The waitlist begins.',
    metric: '15M+ Combined Views',
  },
  {
    year: '2024',
    title: 'Scaling Up',
    desc: 'Revenue generated for clients crosses ₹50Cr. 150+ brands scaled. Social Minds establishes itself as a category leader.',
    metric: '₹50Cr+ Generated',
  },
  {
    year: '2025+',
    title: 'Future Vision',
    desc: 'Expanding to full-service brand building. Audio, podcast, OTT. Social Minds becomes the definitive premium content studio in India.',
    metric: 'Next Chapter Begins',
  },
];

export default function JourneyTimeline() {
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-80px' });

  // ── Drag-to-scroll behavior for horizontal track
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className="ab-timeline" aria-label="Agency Journey Timeline">

      {/* ── Section header ── */}
      <motion.div
        className="ab-timeline-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: SPRING }}
      >
        <div className="ab-eyebrow" style={{
          background: 'rgba(255,156,96,0.08)',
          borderColor: 'rgba(255,156,96,0.2)',
        }}>
          <span className="ab-eyebrow-dot" aria-hidden="true" />
          Our Journey
        </div>

        <h2 className="ab-timeline-heading">
          The Story So
          <br />
          <span>Far.</span>
        </h2>
      </motion.div>

      {/* ── Horizontal drag-scroll track ── */}
      <div
        ref={trackRef}
        className="ab-timeline-track"
        role="region"
        aria-label="Drag to scroll timeline"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {/* Orange connecting line through all cards */}
        <div className="ab-timeline-line" aria-hidden="true" />

        {MILESTONES.map((item, i) => (
          <motion.div
            key={`${item.year}-${i}`}
            className="ab-tl-item"
            // ── Stagger each card into view
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: SPRING }}
          >
            {/* Year badge */}
            <div className="ab-tl-year">{item.year}</div>

            {/* Milestone card */}
            <motion.div
              className="ab-tl-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: SPRING }}
            >
              <h3 className="ab-tl-title">{item.title}</h3>
              <p className="ab-tl-desc">{item.desc}</p>
              <div className="ab-tl-metric">{item.metric}</div>
            </motion.div>
          </motion.div>
        ))}

        {/* Trailing spacer for last card readability */}
        <div style={{ flexShrink: 0, width: 'clamp(24px, 5vw, 80px)' }} />
      </div>

      {/* ── Drag hint label ── */}
      <motion.p
        style={{
          textAlign: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#838383',
          textTransform: 'uppercase',
          marginTop: '32px',
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        aria-hidden="true"
      >
        ← Drag to explore →
      </motion.p>
    </section>
  );
}
