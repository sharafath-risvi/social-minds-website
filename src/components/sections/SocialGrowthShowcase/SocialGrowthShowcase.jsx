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
// MAIN EXPORT — SocialGrowthShowcase
// ========================================
export default function SocialGrowthShowcase() {
  // Active accordion panel state (0-4)
  const [activePanel, setActivePanel] = useState(0);

  // Section ref for scroll-triggered pinning
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const accordionRef = useRef(null);

  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // ========================================
  // ACCORDION ENTRANCE ANIMATION
  // ========================================
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation for the accordion
      if (accordionRef.current) {
        gsap.fromTo(
          accordionRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ========================================
  // AUTO-ROTATE accordion every 4.5s
  // Pauses on hover
  // ========================================
  const autoRotateRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActivePanel((prev) => (prev + 1) % ACCORDION_DATA.length);
      }
    }, 4500);
    return () => clearInterval(autoRotateRef.current);
  }, []);

  const handleMouseEnter = (index) => {
    setActivePanel(index);
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
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
        <div ref={gridRef} className="sgs-main-grid">

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
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </motion.div>

          {/* ── RIGHT: Dynamic Story Content ── */}
          <GrowthContent
            data={ACCORDION_DATA[activePanel] || ACCORDION_DATA[0]}
            activeIndex={activePanel}
            onDotClick={handleMouseEnter}
          />

        </div>



      </div>
    </section>
  );
}
