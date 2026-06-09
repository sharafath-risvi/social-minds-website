// ========================================
// CONTENT INTELLIGENCE SECTION — DARK BG
// "Every Post Is A Strategy"
//
// Architecture: Full-width cinematic editorial rows
//   • 3 large banner-style image rows
//   • Content text sits DIRECTLY on the image
//   • Gradient overlay only for readability — no card, no box
//   • All metric pills removed
//   • Alternating left / right text position
//   • Subtle zoom on hover
//   • Fade-up entrance via IntersectionObserver
// ========================================

import { useEffect, useRef } from 'react';
import './ContentStrategySection.css';

// ========================================
// PANEL DATA  — metrics removed
// ========================================
const PANELS = [
  {
    id: 'reels',
    index: '01',
    tag: 'Short-Form Video',
    title: 'REELS\nSTRATEGY',
    body: 'We architect reels that ambush attention inside the first two seconds — then hold it with retention loops, audio psychology, and pattern interrupts the algorithm rewards with viral reach.',
    image: '/strategy/panel-reels.png',
    imageAlt: 'Creator filming cinematic Reels in professional studio with orange ring light',
    side: 'left',
  },
  {
    id: 'carousel',
    index: '02',
    tag: 'Swipe Content',
    title: 'CAROUSEL\nSTRATEGY',
    body: 'Our carousel system is built around a single truth: the cover slide wins or loses everything. We engineer swipe-worthy narratives that educate, entertain, and drive saves, shares, and DMs.',
    image: '/strategy/panel-carousel.png',
    imageAlt: 'Premium brand moodboards and content strategy slides flat lay on dark surface',
    side: 'right',
  },
  {
    id: 'stories',
    index: '03',
    tag: '24-Hour Impact',
    title: 'STORIES\nSTRATEGY',
    body: "Stories keep your brand inside every follower's mind around the clock. Interactive polls, behind-the-scenes drops, and community triggers that compound trust and loyalty with every tap.",
    image: '/strategy/panel-stories.png',
    imageAlt: 'Hands holding iPhone with cinematic Instagram story in dark atmospheric setting',
    side: 'left',
  },
];

// ========================================
// IntersectionObserver-based fade-up hook
// ========================================
function useFadeUp(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('cps-visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

// ========================================
// SINGLE CINEMATIC ROW
// ========================================
function CinematicRow({ panel, rowIndex }) {
  const rowRef     = useRef(null);
  const textRef    = useRef(null);

  useFadeUp(rowRef, 0);
  useFadeUp(textRef, 160);

  return (
    <div
      ref={rowRef}
      className="cps-row cps-fade-up"
      id={`cps-panel-${panel.id}`}
    >
      {/* ── Full-width cinematic image ── */}
      <div className="cps-image-wrap">
        <img
          src={panel.image}
          alt={panel.imageAlt}
          className="cps-image"
          loading={rowIndex === 0 ? 'eager' : 'lazy'}
          draggable={false}
        />

        {/* Directional gradient for text readability */}
        <div
          className={`cps-overlay cps-overlay--${panel.side}`}
          aria-hidden="true"
        />

        {/* Vignette bottom edge — depth + grounding */}
        <div className="cps-vignette" aria-hidden="true" />

        {/* Giant watermark index */}
        <div className="cps-watermark" aria-hidden="true">{panel.index}</div>

        {/* ── Text directly on the image ── */}
        <div
          ref={textRef}
          className={`cps-text cps-text--${panel.side} cps-fade-up`}
        >
          {/* Category label */}
          <span className="cps-label">{panel.tag}</span>

          {/* Large heading */}
          <h3 className="cps-title">
            {panel.title.split('\n').map((line, i) => (
              <span key={i} className="cps-title-line">
                {i === 1 ? <em className="cps-title-em">{line}</em> : line}
              </span>
            ))}
          </h3>

          {/* Supporting paragraph */}
          <p className="cps-body">{panel.body}</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// MAIN EXPORT
// ========================================
export default function ContentStrategySection() {
  const headerRef = useRef(null);
  useFadeUp(headerRef, 0);

  return (
    <section
      className="cps-section"
      aria-labelledby="cps-heading"
      id="content-strategy"
    >
      {/* Ambient glows */}
      <div className="cps-bg-glow-1" aria-hidden="true" />
      <div className="cps-bg-glow-2" aria-hidden="true" />
      <div className="cps-bg-noise"  aria-hidden="true" />

      {/* Section header */}
      <header ref={headerRef} className="cps-header cps-fade-up">
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
      </header>

      {/* Cinematic rows */}
      <div className="cps-rows">
        {PANELS.map((panel, i) => (
          <CinematicRow key={panel.id} panel={panel} rowIndex={i} />
        ))}
      </div>

      {/* Footer label */}
      <div className="cps-footer">
        <span className="cps-footer-label">
          ✦&nbsp;&nbsp;Content Engineered. Growth Guaranteed.&nbsp;&nbsp;✦
        </span>
      </div>
    </section>
  );
}
