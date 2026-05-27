// ============================================================
// OUR PROCESS EXPERIENCE — v1.0
// Social Minds — Cinematic 3-Column Interactive Section
//
// Architecture:
// - Left  → Active process content (number, heading, desc, stats)
// - Center → 5 stacked expandable cinematic image panels
// - Right  → Dynamic metrics, strategy details, performance cards
//
// Interaction:
// - Click panel to expand / collapse (accordion)
// - Left + Right content transitions with AnimatePresence
// - Counter animations for metrics on active state
// - Scroll-triggered section entry animations
//
// Dependencies: framer-motion (already installed)
// ============================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// ── Local CSS (cinematic effects, grid layout, overlays)
import '../../styles/our-process-experience.css';

// ============================================================
// PROCESS STEPS DATA
// Each step contains left content + right metrics
// ============================================================
const PROCESS_STEPS = [
  {
    id: 'discovery',
    number: '01',
    label: 'Phase One',
    heading: 'Discovery',
    description:
      'We dissect your brand at every layer — audience behavior, competitor positioning, content gaps, and algorithm dynamics. Nothing is assumed. Everything is audited.',
    image: '/process/discovery.png',
    imageAlt: 'Brand discovery and audit session',
    overlayTitle: 'Brand Discovery',
    overlayDesc: 'Deep-dive audit across all platforms and competitors',
    microStats: [
      { value: '30 MIN', label: 'Strategy Call' },
      { value: '360°', label: 'Brand Audit' },
    ],
    // Right panel content
    rightHeading: 'Know Your\nBrand',
    rightHeadingAccent: 'Inside Out.',
    rightDesc:
      'Before we create a single piece of content, we map your entire digital DNA. Every platform. Every competitor. Every opportunity.',
    metrics: [
      { value: '50+', label: 'Audit Points', bar: 80 },
      { value: '3X', label: 'Deeper Research', bar: 65 },
      { value: '100%', label: 'Custom Analysis', bar: 100 },
      { value: '48H', label: 'Turnaround', bar: 55 },
    ],
    performance: [
      { icon: '🔍', label: 'Data Points Analyzed', value: '200+' },
      { icon: '📊', label: 'Competitor Profiles', value: '12 Avg' },
    ],
  },
  {
    id: 'strategy',
    number: '02',
    label: 'Phase Two',
    heading: 'Strategy',
    description:
      'We architect your growth blueprint — content pillars, hook frameworks, posting cadence, hashtag intelligence, and a 90-day milestone map tailored to your niche.',
    image: '/process/strategy.png',
    imageAlt: 'Creative strategy planning session',
    overlayTitle: 'Growth Blueprint',
    overlayDesc: 'Custom content strategy and 90-day roadmap',
    microStats: [
      { value: '90 DAY', label: 'Milestone Map' },
      { value: '∞', label: 'Hook Frameworks' },
    ],
    rightHeading: 'Strategy\nThat',
    rightHeadingAccent: 'Actually Works.',
    rightDesc:
      'No generic templates. No recycled playbooks. Every strategy is engineered specifically for your brand, audience, and growth goals.',
    metrics: [
      { value: '+560%', label: 'Avg Growth Rate', bar: 90 },
      { value: '12M', label: 'Total Reach', bar: 75 },
      { value: '4.6x', label: 'Engagement', bar: 82 },
      { value: '90D', label: 'Blueprint', bar: 70 },
    ],
    performance: [
      { icon: '🏗️', label: 'Content Pillars Built', value: '5–7 Custom' },
      { icon: '📅', label: 'Content Calendar', value: 'Full Quarter' },
    ],
  },
  {
    id: 'production',
    number: '03',
    label: 'Phase Three',
    heading: 'Production',
    description:
      'From scripting to shooting, editing to sound design — we produce content that stops the scroll. Every frame is intentional. Every second is engineered for retention.',
    image: '/process/production.png',
    imageAlt: 'Professional content production shoot',
    overlayTitle: 'Cinematic Content',
    overlayDesc: 'Full-scale production from script to final edit',
    microStats: [
      { value: '4K', label: 'Production Quality' },
      { value: '8+', label: 'Posts / Month' },
    ],
    rightHeading: 'Production\nThat',
    rightHeadingAccent: 'Converts.',
    rightDesc:
      'We handle scripts, shoots, editing, captions, and scheduling. You show up. We make magic. Content that looks expensive because it is.',
    metrics: [
      { value: '4K', label: 'Video Quality', bar: 100 },
      { value: '94%', label: 'Retention Rate', bar: 94 },
      { value: '8+', label: 'Posts Monthly', bar: 60 },
      { value: '48H', label: 'Edit Turnaround', bar: 50 },
    ],
    performance: [
      { icon: '🎬', label: 'Reels Produced Monthly', value: '8–20' },
      { icon: '✂️', label: 'Editing Hours', value: '60+ Hrs' },
    ],
  },
  {
    id: 'launch',
    number: '04',
    label: 'Phase Four',
    heading: 'Campaign\nLaunch',
    description:
      'We deploy your content at peak engagement windows, activate collaborations, seed reach networks, and trigger the algorithm with precision timing for maximum viral exposure.',
    image: '/process/launch.png',
    imageAlt: 'Social media campaign launch moment',
    overlayTitle: 'Campaign Live',
    overlayDesc: 'Multi-platform simultaneous deployment',
    microStats: [
      { value: '12M+', label: 'Launch Reach' },
      { value: '6×', label: 'Platform Spread' },
    ],
    rightHeading: 'Launch That\nMakes',
    rightHeadingAccent: 'Noise.',
    rightDesc:
      'Coordinated multi-platform launches, influencer activations, and algorithm triggers that put your brand in front of millions on day one.',
    metrics: [
      { value: '12M', label: 'Launch Reach', bar: 88 },
      { value: '98K', label: 'Avg Likes D1', bar: 72 },
      { value: '6×', label: 'Platform Spread', bar: 85 },
      { value: '1.4M', label: 'Live Views', bar: 78 },
    ],
    performance: [
      { icon: '🚀', label: 'Peak Hour Publishing', value: 'Algorithm-Timed' },
      { icon: '📱', label: 'Platforms Activated', value: '6 Simultaneous' },
    ],
  },
  {
    id: 'growth',
    number: '05',
    label: 'Phase Five',
    heading: 'Growth\nScaling',
    description:
      'We analyze every data point weekly, double down on winners, cut underperformers, and iterate with compounding precision. Your growth never plateaus. It accelerates.',
    image: '/process/growth.png',
    imageAlt: 'Analytics and growth scaling dashboard',
    overlayTitle: 'Scale Up',
    overlayDesc: 'Weekly optimization and compounding growth system',
    microStats: [
      { value: '520K', label: 'Audience Growth' },
      { value: 'WEEKLY', label: 'Optimization' },
    ],
    rightHeading: 'Compounding\nGrowth,',
    rightHeadingAccent: 'Guaranteed.',
    rightDesc:
      'Weekly deep-dives. Monthly strategy reviews. Continuous iteration. We never let your metrics plateau. We find the ceiling, then break through it.',
    metrics: [
      { value: '520K', label: 'Audience Growth', bar: 95 },
      { value: '+145%', label: 'Revenue Lift', bar: 85 },
      { value: '18.5%', label: 'Retention Rate', bar: 77 },
      { value: '+62K', label: 'Monthly Followers', bar: 80 },
    ],
    performance: [
      { icon: '📈', label: 'Weekly Report Depth', value: '20+ Metrics' },
      { icon: '🎯', label: 'Optimization Cycles', value: 'Every 7 Days' },
    ],
  },
];

// ============================================================
// CINEMATIC GRID DATA
// Maps each grid cell to a visual + overlay content
// The 5 cells cover the 5 process stages visually
// ============================================================
const GRID_ITEMS = [
  {
    // Cell 1 — large tall left (rows 1-2)
    img: '/process/grid_creator.png',
    alt: 'Content creator filming reels with iPhone',
    category: 'Reel Strategy',
    title: 'Discovery & Audit',
    metric: '+560% Reach',
    stepIndex: 0,
  },
  {
    // Cell 2 — top right landscape
    img: '/process/grid_podcast.png',
    alt: 'Premium podcast studio setup',
    category: 'Podcast Production',
    title: 'Strategy Build',
    metric: '12M Views',
    stepIndex: 1,
  },
  {
    // Cell 3 — middle right square
    img: '/process/grid_edit.png',
    alt: 'Video editing workflow on premium workstation',
    category: 'Editing Studio',
    title: 'Content Production',
    metric: '94% Retention',
    stepIndex: 2,
  },
  {
    // Cell 4 — bottom left wide
    img: '/process/launch.png',
    alt: 'Social media campaign launch room',
    category: 'Campaign Launch',
    title: 'Go Live',
    metric: '1.4M Live Views',
    stepIndex: 3,
  },
  {
    // Cell 5 — bottom right floating
    img: '/process/grid_data.png',
    alt: 'Analytics war room with growth dashboards',
    category: 'Growth Scaling',
    title: 'Scale Up',
    metric: '520K Growth',
    stepIndex: 4,
  },
];

// ============================================================
// ANIMATED COUNTER HOOK
// Counts up from 0 to value over duration when triggered
// ============================================================
function useCountUp(target, active, duration = 900) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!active) return;

    // Strip non-numeric prefix/suffix to animate the number
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
    const prefix = target.match(/^[^0-9]*/)?.[0] || '';
    const suffix = target.match(/[^0-9.]+$/)?.[0] || '';

    if (isNaN(numericPart)) {
      setDisplay(target);
      return;
    }

    let start = 0;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericPart;
      setDisplay(
        prefix +
          (Number.isInteger(numericPart)
            ? Math.floor(current).toLocaleString()
            : current.toFixed(1)) +
          suffix
      );
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return display;
}

// ============================================================
// METRIC CARD COMPONENT
// Individual animated stat card with progress bar
// ============================================================
function MetricCard({ value, label, bar, active, delay = 0 }) {
  const count = useCountUp(value, active, 1000);

  return (
    <motion.div
      className="ope-metric-card"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
      transition={{ duration: 0.5, delay: delay * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Metric Value — animated counter */}
      <div className="ope-metric-value">{count}</div>
      <div className="ope-metric-label">{label}</div>

      {/* Progress bar fill */}
      <div className="ope-metric-bar-track">
        <motion.div
          className="ope-metric-bar-fill"
          initial={{ scaleX: 0 }}
          animate={active ? { scaleX: bar / 100 } : { scaleX: 0 }}
          transition={{ duration: 0.85, delay: delay * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

// ============================================================
// PERFORMANCE CARD COMPONENT
// ============================================================
function PerformanceCard({ icon, label, value, active, delay = 0 }) {
  return (
    <motion.div
      className="ope-performance-card"
      initial={{ opacity: 0, x: 20 }}
      animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.55, delay: delay * 0.1 + 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ope-perf-icon">{icon}</div>
      <div>
        <div className="ope-perf-label">{label}</div>
        <div className="ope-perf-value">{value}</div>
      </div>
    </motion.div>
  );
}

// ============================================================
// CINEMATIC GRID COMPONENT
// Asymmetric 5-image editorial layout
// Hover → pauses auto-rotation + shows overlay + updates active step
// HoverEnd → resumes auto-rotation with a fresh 4.5s window
// ============================================================
function CinematicGrid({ activeIndex, onHover, onHoverEnd, inView }) {
  return (
    <motion.div
      className="ope-center"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {GRID_ITEMS.map((item, index) => (
        <motion.div
          key={item.stepIndex}
          className={`ope-grid-item${activeIndex === item.stepIndex ? ' active' : ''}`}
          // ── Stagger reveal: each cell enters with slight delay
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: item.stepIndex === 4 ? -8 : 0, scale: 1 } : {}}
          transition={{
            duration: 0.75,
            delay: 0.4 + index * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          // ── Hover start → pause rotation, activate this step
          onHoverStart={() => onHover(item.stepIndex)}
          // ── Hover end → resume rotation after a fresh 4.5s delay
          onHoverEnd={onHoverEnd}
        >
          {/* ── Cinematic background image ── */}
          <img
            className="ope-grid-img"
            src={item.img}
            alt={item.alt}
            loading="lazy"
            draggable={false}
          />

          {/* ── Always-on dark cinematic depth gradient ── */}
          <div className="ope-grid-grad" aria-hidden="true" />

          {/* ── Orange glow accent at bottom ── */}
          <div className="ope-grid-glow" aria-hidden="true" />

          {/* ── Editorial film grain per cell ── */}
          <div className="ope-grid-grain" aria-hidden="true" />

          {/* ── Hover overlay: category, title, metric ── */}
          <div className="ope-grid-overlay">
            {/* Category label pill */}
            <div className="ope-grid-category">
              <span className="ope-grid-category-dot" aria-hidden="true" />
              {item.category}
            </div>
            {/* Process title */}
            <div className="ope-grid-title">{item.title}</div>
            {/* Growth metric */}
            <div className="ope-grid-metric">{item.metric}</div>
          </div>

          {/* ── Active pulse ring indicator (top-left) ── */}
          <div className="ope-grid-active-ring" aria-hidden="true">
            <span className="ope-grid-active-dot" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ============================================================
// LEFT PANEL COMPONENT
// Animated process step content
// ============================================================
function LeftPanel({ step, stepIndex, totalSteps, activeIndex }) {
  return (
    <div className="ope-left">
      {/* ── Giant editorial process number ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`num-${stepIndex}`}
          className={`ope-step-number${true ? ' active' : ''}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.number}
        </motion.div>
      </AnimatePresence>

      {/* ── Mini phase label ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${stepIndex}`}
          className="ope-step-label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.label}
        </motion.div>
      </AnimatePresence>

      {/* ── Main heading ── */}
      <AnimatePresence mode="wait">
        <motion.h3
          key={`heading-${stepIndex}`}
          className="ope-step-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ whiteSpace: 'pre-line' }}
        >
          {step.heading}
        </motion.h3>
      </AnimatePresence>

      {/* ── Supporting paragraph ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`desc-${stepIndex}`}
          className="ope-step-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.description}
        </motion.p>
      </AnimatePresence>

      {/* ── Micro stats ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`stats-${stepIndex}`}
          className="ope-micro-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {step.microStats.map((stat, i) => (
            <div key={i} className="ope-micro-stat">
              <span className="ope-micro-stat-value">{stat.value}</span>
              <span className="ope-micro-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Progress pip indicators ── */}
      <div className="ope-progress-track">
        {PROCESS_STEPS.map((_, i) => (
          <div
            key={i}
            className={`ope-progress-pip${
              i === activeIndex ? ' active' : i < activeIndex ? ' passed' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// RIGHT PANEL COMPONENT
// Dynamic strategy metrics and performance indicators
// ============================================================
function RightPanel({ step, stepIndex }) {
  const [animKey, setAnimKey] = useState(stepIndex);
  const isActive = animKey === stepIndex;

  useEffect(() => {
    // Re-trigger metric animations on step change
    setAnimKey(stepIndex);
  }, [stepIndex]);

  return (
    <div className="ope-right">
      {/* ── Right mega heading ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`rh-${stepIndex}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="ope-right-heading"
            style={{ whiteSpace: 'pre-line' }}
          >
            {step.rightHeading}{' '}
            <span>{step.rightHeadingAccent}</span>
          </div>
          <div className="ope-right-desc">{step.rightDesc}</div>
        </motion.div>
      </AnimatePresence>

      {/* ── Animated metrics grid ── */}
      <div className="ope-metrics-grid">
        {step.metrics.map((metric, i) => (
          <MetricCard
            key={`${stepIndex}-${i}`}
            value={metric.value}
            label={metric.label}
            bar={metric.bar}
            active={isActive}
            delay={i}
          />
        ))}
      </div>

      {/* ── Single premium performance card (first item only) ── */}
      <PerformanceCard
        key={`${stepIndex}-perf-0`}
        icon={step.performance[0].icon}
        label={step.performance[0].label}
        value={step.performance[0].value}
        active={isActive}
        delay={0}
      />
    </div>
  );
}

// ============================================================
// MAIN COMPONENT — OurProcessExperience
// ============================================================
export default function OurProcessExperience() {
  // ── Active step state — drives left/right panel content
  const [activeIndex, setActiveIndex] = useState(0);

  // ── Scroll-in view ref for section entry animations
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // ── Auto-rotation refs
  // isHovering ref: prevents interval from advancing while user hovers
  // intervalRef: stores the setInterval ID so we can clear/restart it cleanly
  const isHovering = useRef(false);
  const intervalRef = useRef(null);

  // ── Start / restart the auto-rotation interval
  // Advances activeIndex every 4500ms unless user is hovering
  const startRotation = useCallback(() => {
    // Always clear existing interval before starting fresh
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovering.current) {
        setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
      }
    }, 4500);
  }, []);

  // ── Mount: begin auto-rotation once section is in view
  useEffect(() => {
    if (!inView) return;
    startRotation();
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, startRotation]);

  // ── Handle grid image hover — pauses rotation, sets active immediately
  const handleImageHover = useCallback((stepIndex) => {
    isHovering.current = true;
    setActiveIndex(stepIndex);
  }, []);

  // ── Handle grid image hover end — resumes rotation
  // Restarts the interval so we get a fresh 4.5s from the moment hover ends
  const handleImageHoverEnd = useCallback(() => {
    isHovering.current = false;
    startRotation();
  }, [startRotation]);

  // ── Handle dot click — sets step and restarts fresh rotation window
  const handleDotClick = useCallback((index) => {
    setActiveIndex(index);
    startRotation();
  }, [startRotation]);

  const activeStep = PROCESS_STEPS[activeIndex];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <section
      ref={sectionRef}
      className="ope-section"
      id="our-process-experience"
      aria-label="Our Process Experience"
    >
      {/* ── Editorial film grain texture ── */}
      <div className="ope-grain" aria-hidden="true" />

      {/* ── Ambient atmospheric glow blobs ── */}
      <div className="ope-ambient-top" aria-hidden="true" />
      <div className="ope-ambient-bottom" aria-hidden="true" />

      {/* ── SECTION HEADER ── */}
      <motion.div
        className="ope-header"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow pill tag */}
        <div className="ope-eyebrow">
          <span className="ope-eyebrow-dot" aria-hidden="true" />
          Our Process Experience
        </div>

        {/* Main cinematic title */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            className="ope-main-title"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            How We Build
            <br />
            <span className="ope-title-orange">Your Empire.</span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          className="ope-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          A proven cinematic process, refined across{' '}
          <span style={{ color: '#ff9c60' }}>50+ brands</span>, engineered to
          create compounding, unstoppable growth.
        </motion.p>
      </motion.div>

      {/* ── 3-COLUMN CINEMATIC LAYOUT ── */}
      <motion.div
        className="ope-layout"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ────────────────────────────────────────
            LEFT COLUMN — Process step content
        ──────────────────────────────────────── */}
        <LeftPanel
          step={activeStep}
          stepIndex={activeIndex}
          totalSteps={PROCESS_STEPS.length}
          activeIndex={activeIndex}
        />

        {/* ────────────────────────────────────────
            CENTER COLUMN — Premium cinematic image grid
            5-cell asymmetric editorial layout
            Hover any image → updates left/right panel
        ──────────────────────────────────────── */}
        <CinematicGrid
          activeIndex={activeIndex}
          onHover={handleImageHover}
          onHoverEnd={handleImageHoverEnd}
          inView={inView}
        />

        {/* ────────────────────────────────────────
            RIGHT COLUMN — Strategy metrics area
        ──────────────────────────────────────── */}
        <RightPanel
          step={activeStep}
          stepIndex={activeIndex}
        />
      </motion.div>

      {/* ── STEP NAVIGATION DOTS — bottom center ── */}
      <motion.div
        className="ope-step-dots"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-label="Process step navigation"
      >
        {PROCESS_STEPS.map((step, i) => (
          <button
            key={step.id}
            className={`ope-dot${activeIndex === i ? ' active' : ''}`}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to step ${step.number} — ${step.heading}`}
            aria-current={activeIndex === i ? 'step' : undefined}
          />
        ))}
      </motion.div>
    </section>
  );
}
