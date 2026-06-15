import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhySocialMinds.css';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   SERVICES — bright images, all preloaded
   via always-in-DOM img elements (zero lag)
───────────────────────────────────────── */
const SERVICES = [
  {
    id: 0,
    label: 'REELS STRATEGY',
    heading: ['STOP THE', 'SCROLL'],
    description:
      'We engineer short-form content that captures attention in seconds and converts viewers into followers, leads and paying customers.',
    image: '/wsm/reels.webp',
  },
  {
    id: 1,
    label: 'BRAND IDENTITY',
    heading: ['BECOME', 'UNFORGETTABLE'],
    description:
      'We build distinctive brand systems that make your business instantly recognizable across every platform and every touchpoint.',
    image: '/wsm/brand.webp',
  },
  {
    id: 2,
    label: 'CONTENT PRODUCTION',
    heading: ['CREATE WITH', 'PURPOSE'],
    description:
      'Every visual, every frame and every asset is crafted to elevate your brand authority and drive measurable, lasting growth.',
    image: '/wsm/production.webp',
  },
  {
    id: 3,
    label: 'ANALYTICS & GROWTH',
    heading: ['GROW WITH', 'DATA'],
    description:
      'Every decision is backed by performance metrics, audience insights and growth analytics that compound over time.',
    image: '/wsm/analytics.webp',
  },
  {
    id: 4,
    label: 'CAMPAIGN LAUNCH',
    heading: ['EXECUTE', 'TO SCALE'],
    description:
      'From strategy to execution, we build and launch campaigns engineered to generate measurable, predictable business results.',
    image: '/wsm/launch.webp',
  },
];

const N = SERVICES.length;

/*
  Queue = [next1, next2, next3].
  The active card becomes the full background image and is removed from the small-card queue.
*/
function buildQueue(activeId) {
  return [(activeId + 1) % N, (activeId + 2) % N, (activeId + 3) % N];
}

/* Small arrow SVG */
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function WhySocialMinds() {
  const [activeId, setActiveId] = useState(0);
  const activeIdRef = useRef(0);

  const sectionRef = useRef(null);
  const showcaseRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const active = SERVICES[activeId];

  // Derive the queue dynamically from the current scroll-driven activeId
  const queue = buildQueue(activeId);

  // Removed synchronous image decode effect to prevent main thread blocking

  /* ── GSAP Scroll Pinning & Scrubbing ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: showcaseRef.current,
        start: 'center center', // Wait until the image area is centered in viewport
        end: '+=2000', // Adjusted to balance with snap points
        pin: sectionRef.current, // Pin the entire section to prevent layout shifts
        anticipatePin: 1, // Pre-calculates pin to completely eliminate entrance stutter
        // Removed scrub: 0.5; it spins up GSAP's ticker unnecessarily since we only track progress without tweens
        onUpdate: (self) => {
          const totalItems = SERVICES.length;
          const newIndex = Math.min(totalItems - 1, Math.floor(self.progress * totalItems));
          if (newIndex !== activeIdRef.current) {
            activeIdRef.current = newIndex;
            requestAnimationFrame(() => {
              setActiveId(newIndex);
            });
          }
        }
      });

      // Suppress the 1px border artifact on the GSAP-injected pin-spacer div
      requestAnimationFrame(() => {
        const pinSpacer = sectionRef.current?.parentElement;
        if (pinSpacer && pinSpacer !== document.body) {
          pinSpacer.style.border = 'none';
          pinSpacer.style.outline = 'none';
          pinSpacer.style.boxShadow = 'none';
          pinSpacer.style.borderBottom = 'none';
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-social-minds" className="wsm-section">
      <div className="wsm-wrap">

        {/* ════════════════════════════════════════
            SECTION HEADING (above the showcase)
        ════════════════════════════════════════ */}
        <div className="wsm-section-header">
          <motion.h2
            className="wsm-section-title"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="wsm-title-line">WHY BRANDS CHOOSE</span>
            <span className="wsm-title-line">
              <span className="wsm-title-accent">OUR SERVICES</span>
            </span>
          </motion.h2>
          <motion.p
            className="wsm-section-sub"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            From strategy and content creation to performance-driven campaigns, every service we offer is designed to help brands attract attention, build trust, and achieve measurable growth.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════
            SHOWCASE CONTAINER
        ════════════════════════════════════════ */}
        <motion.div
          ref={showcaseRef}
          className="wsm-showcase"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
        >

          {/* ════════════════════════════════════
              LAYER 1 — BACKGROUND IMAGES
              All 5 <img> always in DOM.
              CSS opacity/transform crossfades
              on the GPU — zero JS per frame.
          ════════════════════════════════════ */}
          <div className="wsm-bg-layer" aria-hidden="true">
            {SERVICES.map(svc => (
              <img
                key={svc.id}
                src={svc.image}
                alt=""
                decoding="async"
                fetchPriority="high"
                className={`wsm-hero-img${svc.id === activeId ? ' is-active' : ''}`}
              />
            ))}
            {/* Subtle full-area dark overlay — improves text + card readability
                without making the image dark (just rgba 0,0,0,0.20) */}
            <div className="wsm-bg-overlay" />
            {/* Left gradient — deeper darkening only where text lives */}
            <div className="wsm-left-grad" />
          </div>

          {/* ════════════════════════════════════
              LAYER 2 — LEFT CONTENT
          ════════════════════════════════════ */}
          <div className="wsm-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${activeId}`}
                className="wsm-content-block"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
              >
                {/* Service tag */}
                <span className="wsm-service-tag">
                  <span className="wsm-tag-dot" />
                  {active.label}
                </span>

                {/* Dynamic heading */}
                <h3 className="wsm-heading">
                  {active.heading.map((line, i) => (
                    <span key={i} className="wsm-heading-line">{line}</span>
                  ))}
                </h3>

                {/* Dynamic description */}
                <p className="wsm-desc">{active.description}</p>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="wsm-cta"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Growing Today
                  <ArrowIcon />
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Progress pips */}
            <div className="wsm-pips">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  className={`wsm-pip${i === activeId ? ' active' : ''}`}
                  aria-label={`View ${SERVICES[i].label}`}
                  style={{ pointerEvents: 'none' }}
                />
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════
              LAYER 3 — CARDS AREA (center-right,
              shifted 50px below center)
              Queue = [activeId, next1, next2].
              Active card (pos 0) = orange highlight.
              next1/next2 are clickable.
          ════════════════════════════════════ */}
          <div className="wsm-cards-area">

            {/* Thumbnail card row */}
            <div className="wsm-cards-row">
              <AnimatePresence mode="popLayout" initial={false}>
                {queue.map((sid, idx) => {
                  const svc = SERVICES[sid];
                  const isFirstInQueue = idx === 0;

                  return (
                    <motion.button
                      key={sid}
                      className={`wsm-thumb${isFirstInQueue ? ' is-active' : ''}`}
                      aria-label={`Preview ${svc.label}`}
                      aria-pressed={isFirstInQueue}
                      layout
                      initial={{ opacity: 0, x: 72, scale: 0.88 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: isFirstInQueue ? 1.05 : 1,
                      }}
                      exit={{ opacity: 0, x: -44, scale: 0.88, transition: { duration: 0.35 } }}
                      transition={{
                        layout: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] },
                        opacity: { duration: 0.55 },
                        x: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
                        scale: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
                      }}
                      style={{ cursor: 'default', willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                    >
                      <div
                        className="wsm-thumb-img"
                        style={{ backgroundImage: `url(${svc.image})` }}
                      />
                      <div className="wsm-thumb-overlay" />
                      <div className="wsm-thumb-footer">
                        <span className="wsm-thumb-label">{svc.label}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>{/* /wsm-cards-row */}

            {/* ── Navigation bar: dots & arrows ── */}
            <div className="wsm-nav-bar">
              <button 
                onClick={() => setActiveId((prev) => (prev - 1 + N) % N)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 4px' }}
                aria-label="Previous service"
              >
                <ChevronLeft />
              </button>

              <div className="wsm-nav-dots" role="tablist">
                {SERVICES.map((svc, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === activeId}
                    aria-label={svc.label}
                    className={`wsm-dot${i === activeId ? ' active' : ''}`}
                    onClick={() => setActiveId(i)}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveId((prev) => (prev + 1) % N)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 4px' }}
                aria-label="Next service"
              >
                <ChevronRight />
              </button>
            </div>{/* /wsm-nav-bar */}

          </div>{/* /wsm-cards-area */}

          {/* Service counter — bottom-left */}
          <div className="wsm-counter" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeId}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="wsm-counter-current"
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
              >
                {String(activeId + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="wsm-counter-sep">/</span>
            <span className="wsm-counter-total">{String(N).padStart(2, '0')}</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
