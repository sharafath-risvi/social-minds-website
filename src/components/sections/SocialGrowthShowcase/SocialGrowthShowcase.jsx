// ========================================
// SOCIAL GROWTH SHOWCASE — MAIN COMPONENT
// Interactive Vertical Image Accordion
// 
// Section Purpose:
// Visually explains "How SOCIAL MINDS
// transforms brands digitally."
//
// Layout:
// LEFT: Interactive Vertical Accordion
// RIGHT: Dynamic Storytelling Content
//
// Tech: React + Framer Motion + GSAP + CSS
// ========================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Sub-components ──
import AccordionPanel from './AccordionPanel';
import GrowthContent from './GrowthContent';

// ── Styles ──
import './SocialGrowthShowcase.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ========================================
// ACCORDION DATA
// 5 premium editorial case study panels
// ========================================
const ACCORDION_DATA = [
  {
    id: 'reel-obsession',
    image: '/showcase/panel-1-reel.png',
    altText: 'Creator filming Instagram Reels in a professional studio with orange ring light',
    shortLabel: 'Reel Strategy',
    caseLabel: 'CASE STUDY / 01',
    title: 'Reel Obsession Engine',
    shortDesc: 'Turning 15-second windows into viral moments that compound.',
    heading: 'Turning <em>attention</em><br>into digital obsession.',
    headingPlain: 'Turning attention into digital obsession.',
    description:
      'We engineered a reel-first content strategy that hacked the Instagram algorithm. Every frame was designed with retention psychology — hooks, pattern interrupts, and emotional payoffs that force the save button.',
    stats: [
      { value: '+320%', label: 'Reach Growth' },
      { value: '4.8M', label: 'Total Views' },
      { value: '2.4x', label: 'Engagement Rate' },
      { value: '190K', label: 'New Followers' },
    ],
    ctaLabel: 'Explore Reel Strategy',
  },
  {
    id: 'brand-identity',
    image: '/showcase/panel-2-brand.png',
    altText: 'Premium branding moodboard with orange and black design collateral',
    shortLabel: 'Brand Identity',
    caseLabel: 'CASE STUDY / 02',
    title: 'Brand Identity Reborn',
    shortDesc: 'A complete visual transformation from generic to iconic.',
    heading: 'From <em>invisible</em><br>to iconic brand.',
    headingPlain: 'From invisible to iconic brand.',
    description:
      'We rebuilt the brand\'s visual language from scratch — logo, color system, typography, and content aesthetic. The result was a premium, instantly recognizable identity that commanded premium pricing.',
    stats: [
      { value: '+280%', label: 'Profile Visits' },
      { value: '6.8M', label: 'Impressions' },
      { value: '3.2x', label: 'Story Views' },
      { value: '340K', label: 'Audience Growth' },
    ],
    ctaLabel: 'Explore Brand Strategy',
  },
  {
    id: 'analytics-mastery',
    image: '/showcase/panel-3-analytics.png',
    altText: 'Futuristic analytics dashboard showing orange glowing social media growth metrics',
    shortLabel: 'Data & Analytics',
    caseLabel: 'CASE STUDY / 03',
    title: 'Analytics-Driven Growth',
    shortDesc: 'Data decoded into decisive creative action.',
    heading: 'When <em>data</em> becomes<br>your weapon.',
    headingPlain: 'When data becomes your weapon.',
    description:
      'We built a real-time analytics infrastructure to track what content truly drives growth. Every post, every story, every reel was A/B tested. Winning content was doubled down on until the algorithm had no choice but to favor us.',
    stats: [
      { value: '+415%', label: 'Organic Reach' },
      { value: '21.5%', label: 'Engagement Rate' },
      { value: '1.2M', label: 'Monthly Impressions' },
      { value: '+158%', label: 'Saves & Shares' },
    ],
    ctaLabel: 'Explore Analytics Strategy',
  },
  {
    id: 'campaign-viral',
    image: '/showcase/panel-4-campaign.png',
    altText: 'Multiple smartphones displaying viral social media content in a creative studio',
    shortLabel: 'Campaign Launch',
    caseLabel: 'CASE STUDY / 04',
    title: 'Viral Campaign Architecture',
    shortDesc: 'Engineered virality through layered content drops.',
    heading: 'Engineering <em>viral</em><br>moment by moment.',
    headingPlain: 'Engineering viral moment by moment.',
    description:
      'We orchestrated a multi-platform campaign launch with precision timing. Teaser content built anticipation, launch content exploded across feeds, and follow-up content harvested the momentum for sustained growth.',
    stats: [
      { value: '+560%', label: 'Campaign Reach' },
      { value: '12M', label: 'Total Impressions' },
      { value: '4.6x', label: 'ROAS' },
      { value: '520K', label: 'Audience Gained' },
    ],
    ctaLabel: 'Explore Campaign Strategy',
  },
  {
    id: 'audience-psychology',
    image: '/showcase/panel-5-audience.png',
    altText: 'Abstract orange digital network visualization representing viral audience growth',
    shortLabel: 'Audience Growth',
    caseLabel: 'CASE STUDY / 05',
    title: 'Audience Psychology Map',
    shortDesc: 'Understanding what makes your audience obsessed.',
    heading: 'Building an audience<br>that <em>stays obsessed</em>.',
    headingPlain: 'Building an audience that stays obsessed.',
    description:
      'We mapped the full audience psychology — what they watch, save, share, and why. Then we reverse-engineered content that triggered each psychological driver. The result: a community that doesn\'t just follow, it evangelizes.',
    stats: [
      { value: '+730%', label: 'Community Growth' },
      { value: '3.9M', label: 'Total Reach' },
      { value: '2.8x', label: 'Retention Rate' },
      { value: '285K', label: 'Loyal Community' },
    ],
    ctaLabel: 'Explore Audience Strategy',
  },
];

// ========================================
// BOTTOM STATS DATA
// Floating glass cards at section bottom
// ========================================

const BOTTOM_STATS = [
  {
    icon: '🚀',
    value: 500,
    suffix: '+',
    label: 'Brands Scaled',
    floatDur: '7s',
    floatDelay: '0s',
  },
  {
    icon: '🎬',
    value: 12000,
    suffix: '+',
    label: 'Reels Managed',
    floatDur: '6s',
    floatDelay: '0.8s',
  },
  {
    icon: '📈',
    value: 320,
    suffix: '%',
    label: 'Avg. Engagement Lift',
    floatDur: '8s',
    floatDelay: '1.5s',
  },
  {
    icon: '👥',
    value: 50,
    suffix: 'M+',
    label: 'Audience Growth',
    floatDur: '5.5s',
    floatDelay: '0.4s',
  },
];

// ========================================
// FLOATING PARTICLES COMPONENT
// Subtle orange particles floating up
// ========================================
function FloatingParticles({ count = 12 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    animDelay: `${Math.random() * 8}s`,
    animDur: `${6 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="sgs-particle"
          style={{
            left: p.left,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-drift ${p.animDur} ${p.animDelay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ========================================
// ANIMATED BOTTOM STAT CARD
// Counter + glassmorphism floating card
// ========================================
function BottomStatCard({ stat, index, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(stat.value);
    };

    const delay = index * 150;
    const timer = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timer);
  }, [inView, stat.value, index]);

  // Format large numbers with commas
  const formatCount = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
    return n.toString();
  };

  return (
    <motion.div
      className="sgs-bottom-stat-card"
      style={{ '--float-dur': stat.floatDur, '--float-delay': stat.floatDelay }}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="listitem"
    >
      <span className="sgs-bottom-stat-icon" aria-hidden="true">{stat.icon}</span>
      <div className="sgs-bottom-stat-number">
        {formatCount(count)}
        <span className="sgs-orange-accent">{stat.suffix}</span>
      </div>
      <div className="sgs-bottom-stat-label">{stat.label}</div>
    </motion.div>
  );
}

// ========================================
// MAIN EXPORT — SocialGrowthShowcase
// ========================================
export default function SocialGrowthShowcase() {
  // Active accordion panel state
  // null = all panels collapsed (default: 0 = first open)
  const [activePanel, setActivePanel] = useState(0);

  // Section ref for scroll-triggered animations
  const sectionRef = useRef(null);
  const accordionRef = useRef(null);
  const bottomRef = useRef(null);

  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' });

  // ========================================
  // GSAP SCROLL PARALLAX
  // Accordion + story panel parallax motion
  // ========================================
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Accordion subtle parallax
      if (accordionRef.current) {
        gsap.fromTo(
          accordionRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: accordionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ========================================
  // AUTO-ROTATE accordion every 5s
  // Pauses on hover or manual interaction
  // ========================================
  const autoRotateRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        // Always rotate through 0–4 even if currently null
        setActivePanel((prev) =>
          prev === null ? 0 : (prev + 1) % ACCORDION_DATA.length
        );
      }
    }, 5000);
    return () => clearInterval(autoRotateRef.current);
  }, []);

  // ========================================
  // HANDLE PANEL CLICK — TOGGLE BEHAVIOR
  // Clicking active panel collapses it (null)
  // Clicking a different panel opens it
  // ========================================
  const handlePanelClick = (index) => {
    setActivePanel((prev) => {
      // Toggle: same panel clicked = collapse
      if (prev === index) return null;
      return index;
    });
    // Pause auto-rotate for 12s on manual interaction
    isPausedRef.current = true;
    setTimeout(() => { isPausedRef.current = false; }, 12000);
  };

  // ========================================
  // RENDER
  // ========================================
  return (
    <section
      ref={sectionRef}
      className="sgs-section"
      aria-labelledby="sgs-section-heading"
      id="social-growth-showcase"
    >
      {/* ── Background layers ── */}
      <div className="sgs-bg-grain" aria-hidden="true" />
      <div className="sgs-bg-glow-top" aria-hidden="true" />
      <div className="sgs-bg-glow-bottom" aria-hidden="true" />
      <div className="sgs-bg-dot-pattern" aria-hidden="true" />
      <FloatingParticles count={14} />

      <div className="sgs-container">

        {/* ============================================
            SECTION HEADER
            Label + Giant heading + subtext
            ============================================ */}
        <motion.div
          className="sgs-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Small label pill */}
          <div className="sgs-label" role="text" aria-label="Section: Growth Stories">
            <span className="sgs-label-dot" aria-hidden="true" />
            Growth Stories
          </div>

          {/* Giant cinematic heading */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              id="sgs-section-heading"
              className="sgs-heading"
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              How We Transform
              <br />
              <span className="sgs-heading-accent">Brands</span> Digitally.
            </motion.h2>
          </div>

          {/* Subtext */}
          <motion.p
            className="sgs-subtext"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Five real case studies. Five brand transformations.
            Click each story to explore the strategy behind the numbers.
          </motion.p>
        </motion.div>

        {/* ============================================
            MAIN CONTENT GRID
            Left: Accordion | Right: Story Content
            ============================================ */}
        <div className="sgs-main-grid">

          {/* ── LEFT: Vertical Image Accordion ── */}
          <motion.div
            ref={accordionRef}
            className="sgs-accordion-wrapper"
            aria-label="Growth case study image accordion"
            role="tablist"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
          >
            {ACCORDION_DATA.map((panel, i) => (
              <AccordionPanel
                key={panel.id}
                data={panel}
                index={i}
                isActive={activePanel === i}
                onClick={() => handlePanelClick(i)}
              />
            ))}
          </motion.div>

          {/* ── RIGHT: Dynamic Story Content ── */}
          {/* Pass data safely: if null use first panel as placeholder */}
          <GrowthContent
            data={activePanel !== null ? ACCORDION_DATA[activePanel] : ACCORDION_DATA[0]}
            activeIndex={activePanel}
            onDotClick={handlePanelClick}
          />

        </div>

        {/* ============================================
            BOTTOM FLOATING STATS ROW
            Animated glass cards with counters
            ============================================ */}
        <div ref={bottomRef} className="sgs-bottom-stats">
          <motion.div
            className="sgs-bottom-stats-label"
            initial={{ opacity: 0 }}
            animate={bottomInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Overall performance metrics"
          >
            ✦ &nbsp; Cumulative Impact Across All Clients &nbsp; ✦
          </motion.div>

          <div className="sgs-bottom-stats-grid" role="list" aria-label="Aggregate statistics">
            {BOTTOM_STATS.map((stat, i) => (
              <BottomStatCard
                key={stat.label}
                stat={stat}
                index={i}
                inView={bottomInView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
