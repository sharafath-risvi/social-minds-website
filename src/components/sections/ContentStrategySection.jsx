// ========================================
// CONTENT STRATEGY SECTION — CINEMATIC REDESIGN
// "Every Post Is A Strategy"
//
// Architecture: Sticky Parallax Story Engine
//   • 300vh scroll container
//   • 100vh sticky stage (always visible)
//   • 3 scenes stacked absolutely on top of each other
//   • GSAP cross-fades one scene into the next
//   • Only ONE image dominates at any time
//
// Panel 1 — Reels Strategy
// Panel 2 — Carousel Strategy
// Panel 3 — Stories Strategy
// ========================================

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContentStrategySection.css';

gsap.registerPlugin(ScrollTrigger);

// ========================================
// PANEL DATA
// ========================================
const PANELS = [
  {
    id: 'reels',
    index: '01',
    tag: 'SHORT-FORM VIDEO',
    title: 'REELS\nSTRATEGY',
    subtitle: 'Every second is engineered.',
    body: 'We architect reels that ambush attention inside the first two seconds — then hold it with retention loops, audio psychology, and pattern interrupts that the algorithm rewards with viral distribution.',
    image: '/strategy/panel-reels.png',
    imageAlt: 'Creator filming cinematic Reels in professional studio with orange ring light',
    metrics: [
      { value: '3.2M', label: 'Avg Views' },
      { value: '94%',  label: 'Hook Rate' },
      { value: '78%',  label: 'Completion' },
    ],
    align: 'left',
  },
  {
    id: 'carousel',
    index: '02',
    tag: 'SWIPE CONTENT',
    title: 'CAROUSEL\nSTRATEGY',
    subtitle: 'Slides that demand to be saved.',
    body: 'Our carousel system is built around a single truth: the cover slide wins or loses everything. We engineer swipe-worthy narratives that educate, entertain, and drive audiences to save, share, and DM.',
    image: '/strategy/panel-carousel.png',
    imageAlt: 'Premium brand moodboards and content strategy slides flat lay on dark surface',
    metrics: [
      { value: '12.8K', label: 'Avg Saves' },
      { value: '340%',  label: 'Share Rate' },
      { value: '8.4%',  label: 'DM Conv.' },
    ],
    align: 'right',
  },
  {
    id: 'stories',
    index: '03',
    tag: '24-HOUR IMPACT',
    title: 'STORIES\nSTRATEGY',
    subtitle: 'Presence that compounds daily.',
    body: "Stories keep your brand inside every follower's mind 24 hours a day. Interactive polls, behind-the-scenes drops, and community triggers that build trust and loyalty with every tap.",
    image: '/strategy/panel-stories.png',
    imageAlt: 'Hands holding iPhone with cinematic Instagram story in dark atmospheric setting',
    metrics: [
      { value: '28K',  label: 'Daily Views' },
      { value: '6.2%', label: 'Reply Rate' },
      { value: '5–7',  label: 'Stories / Day' },
    ],
    align: 'left',
  },
];

// ========================================
// MAIN COMPONENT
// ========================================
export default function ContentStrategySection() {
  const sectionRef         = useRef(null);
  const headerRef          = useRef(null);
  const scrollContainerRef = useRef(null);
  const sceneRefs          = useRef([]);
  const imageRefs          = useRef([]);
  const contentRefs        = useRef([]);
  const dotRefs            = useRef([]);
  const scrollHintRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. Header entrance ──────────────────────────
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // ── 2. Initial scene setup ───────────────────────
      // NEW ARCHITECTURE: Stack upwards to prevent black flashes.
      // Old scene remains opaque beneath the new scene as it fades in.
      gsap.set(sceneRefs.current[0], { opacity: 1, zIndex: 1 });
      gsap.set(sceneRefs.current[1], { opacity: 0, zIndex: 2 });
      gsap.set(sceneRefs.current[2], { opacity: 0, zIndex: 3 });

      // All images start slightly zoomed for cinematic parallax
      // Reduced from 1.08 to 1.05 for a lighter, faster feel
      imageRefs.current.forEach((img) => {
        if (img) gsap.set(img, { scale: 1.05 });
      });

      const container = scrollContainerRef.current;
      if (!container) return;

      const SCRUB = 1.2; // Reduced from 2.5 for snappier, less heavy feel

      // ════════════════════════════════════════════════
      // SCENE 1 — Reels
      // ════════════════════════════════════════════════

      // Image gently zooms into full sharpness (0% → 20%)
      gsap.to(imageRefs.current[0], {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '20% top',
          scrub: SCRUB,
        },
      });

      // Cinematic push-away as next scene enters (20% → 35%)
      // Fixed overlap: Starts exactly at 20% when previous zoom finishes
      gsap.to(imageRefs.current[0], {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: '20% top',
          end: '35% top',
          scrub: SCRUB,
        },
      });

      // ════════════════════════════════════════════════
      // SCENE 2 — Carousel
      // ════════════════════════════════════════════════

      // Scene 2 fades IN over Scene 1 (15% → 30%)
      gsap.to(sceneRefs.current[1], {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: container,
          start: '15% top',
          end: '30% top',
          scrub: SCRUB,
        },
      });

      // Image 2 zooms into sharpness (15% → 40%)
      // Fixed overlap: Ends exactly at 40% when the next push-away starts
      gsap.to(imageRefs.current[1], {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: '15% top',
          end: '40% top',
          scrub: SCRUB,
        },
      });

      // Cinematic push-away as Scene 3 enters (40% → 60%)
      gsap.to(imageRefs.current[1], {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: '40% top',
          end: '60% top',
          scrub: SCRUB,
        },
      });

      // ════════════════════════════════════════════════
      // SCENE 3 — Stories
      // ════════════════════════════════════════════════

      // Scene 3 fades IN over Scene 2 (40% → 55%)
      gsap.to(sceneRefs.current[2], {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: container,
          start: '40% top',
          end: '55% top',
          scrub: SCRUB,
        },
      });

      // Image 3 zooms into sharpness (40% → 65%) and then HOLDS COMPLETELY
      gsap.to(imageRefs.current[2], {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: '40% top',
          end: '65% top',
          scrub: SCRUB,
        },
      });

      // ── Content parallax — each block slowly floats up ──
      const contentRanges = [
        ['top top',    '25% top'],
        ['25% top',    '50% top'],
        ['50% top',    '65% top'],
      ];
      contentRefs.current.forEach((content, i) => {
        if (!content) return;
        gsap.to(content, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: contentRanges[i][0],
            end: contentRanges[i][1],
            scrub: 3,
          },
        });
      });

      // ── Scroll hint fades away after first scroll ──
      if (scrollHintRef.current) {
        gsap.to(scrollHintRef.current, {
          opacity: 0,
          y: -12,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: container,
            start: '8% top',
            end: '18% top',
            scrub: 1.2,
          },
        });
      }

      // ── Progress dots: update active state on scroll ──
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const p = self.progress;
          // Scene 1 < 25%, Scene 2 < 50%
          const active = p < 0.25 ? 0 : p < 0.50 ? 1 : 2;
          dotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            dot.className = `cps-scene-dot${i === active ? ' cps-scene-dot--active' : ''}`;
          });
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cps-section"
      aria-labelledby="cps-heading"
      id="content-strategy"
    >
      {/* ── Ambient background effects ── */}
      <div className="cps-bg-glow-1" aria-hidden="true" />
      <div className="cps-bg-glow-2" aria-hidden="true" />
      <div className="cps-bg-noise"  aria-hidden="true" />

      {/* ============================================
          SECTION HEADER
          Scrolls normally above the sticky cinema
          ============================================ */}
      <div ref={headerRef} className="cps-header">
        <div className="cps-eyebrow">
          <span className="cps-eyebrow-dot" aria-hidden="true" />
          Content Intelligence
        </div>
        <h2 id="cps-heading" className="cps-heading">
          Every Post<br />
          Is A{' '}
          <span className="cps-heading-accent">Strategy.</span>
        </h2>
        <p className="cps-heading-sub">
          We don't post for the sake of posting.<br />
          Every format serves a purpose in your growth ecosystem.
        </p>
      </div>

      {/* ============================================
          CINEMATIC SCROLL CONTAINER
          300vh = scroll space for 3 scenes
          Sticky stage pins at viewport top
          GSAP maps scroll progress → scene fades
          ============================================ */}
      <div ref={scrollContainerRef} className="cps-scroll-container">
        <div className="cps-sticky-stage">

          {/* ── 3 scenes, absolutely stacked ── */}
          {PANELS.map((panel, i) => (
            <div
              key={panel.id}
              ref={(el) => { sceneRefs.current[i] = el; }}
              className="cps-scene"
            >
              {/* Full-bleed background image */}
              <div className="cps-scene-image-wrap">
                <img
                  ref={(el) => { imageRefs.current[i] = el; }}
                  src={panel.image}
                  alt={panel.imageAlt}
                  className="cps-scene-image"
                  draggable={false}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                {/* Directional cinematic gradient */}
                <div
                  className={`cps-panel-overlay cps-overlay-${panel.align}`}
                  aria-hidden="true"
                />
              </div>

              {/* Giant watermark index number */}
              <div className="cps-panel-index" aria-hidden="true">
                {panel.index}
              </div>

              {/* Floating editorial content block */}
              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                className={`cps-panel-content cps-content-${panel.align}`}
              >
                <div className="cps-tag">{panel.tag}</div>

                <h3 className="cps-panel-title">
                  {panel.title.split('\n').map((line, li) => (
                    <span key={li} className="cps-title-line">
                      {li === 1
                        ? <span className="cps-title-accent">{line}</span>
                        : line}
                    </span>
                  ))}
                </h3>

                <p className="cps-panel-subtitle">{panel.subtitle}</p>
                <p className="cps-panel-body">{panel.body}</p>

                <div className="cps-metrics-row" role="list" aria-label="Performance metrics">
                  {panel.metrics.map((m) => (
                    <div key={m.label} className="cps-metric-pill" role="listitem">
                      <span className="cps-metric-value">{m.value}</span>
                      <span className="cps-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle bottom separator */}
              <div className="cps-panel-rule" aria-hidden="true" />
            </div>
          ))}

          {/* ── Scene progress dots ── */}
          <div className="cps-scene-dots" aria-label="Scene progress" role="status">
            {PANELS.map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                className={`cps-scene-dot${i === 0 ? ' cps-scene-dot--active' : ''}`}
              />
            ))}
          </div>

          {/* ── Scroll hint (fades out early) ── */}
          <div ref={scrollHintRef} className="cps-scroll-hint" aria-hidden="true">
            <div className="cps-scroll-hint-line" />
            <span className="cps-scroll-hint-label">SCROLL</span>
          </div>

        </div>
      </div>

      {/* ── Footer line ── */}
      <div className="cps-footer-line">
        <span className="cps-footer-label">
          ✦ &nbsp; Content Engineered. Growth Guaranteed. &nbsp; ✦
        </span>
      </div>

    </section>
  );
}
