// ========================================
// ACCORDION PANEL COMPONENT
// Cinematic expanding image panel
// Each panel expands on hover/click
// with glow border (box-shadow) + content reveal
// ========================================

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// ========================================
// AccordionPanel Props:
// - data: panel content data object
// - index: panel index (0-4)
// - isActive: whether this panel is open
// - onClick: callback to activate panel
// ========================================
export default function AccordionPanel({ data, index, isActive, onClick }) {
  const panelRef = useRef(null);
  const imageRef = useRef(null);
  const lightRef = useRef(null);

  // ========================================
  // MOUSE-FOLLOW LIGHTING EFFECT
  // Orange glow radial follows cursor
  // ========================================
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const handleMouseMove = (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lightRef.current) {
        gsap.to(lightRef.current, {
          x,
          y,
          duration: 0.45,
          ease: 'power2.out',
        });
        gsap.to(lightRef.current, { opacity: 1, duration: 0.2 });
      }
    };

    const handleMouseLeave = () => {
      if (lightRef.current) {
        gsap.to(lightRef.current, { opacity: 0, duration: 0.35 });
      }
    };

    panel.addEventListener('mousemove', handleMouseMove);
    panel.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      panel.removeEventListener('mousemove', handleMouseMove);
      panel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // ========================================
  // GSAP SMOOTH IMAGE SCALE
  // Active: slight zoom-in cinematic effect
  // Inactive: subtle scale-out
  // ========================================
  useEffect(() => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      scale: isActive ? 1.0 : 1.06,
      duration: 0.9,
      ease: 'power3.inOut',
    });
  }, [isActive]);

  // ========================================
  // PANEL FLOAT ANIMATION (active only)
  // Applied via CSS animation class
  // ========================================
  const panelClass = [
    'sgs-panel',
    isActive ? 'is-active' : '',
    isActive ? 'sgs-panel--floating' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={panelRef}
      className={panelClass}
      onClick={onClick}
      role="button"
      aria-expanded={isActive}
      aria-label={`${data.caseLabel} — ${data.title}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* ========================================
          IMAGE WRAPPER
          position:absolute + inset:0 guarantees
          the image fills every pixel of the panel
          at all flex sizes during transition.
          overflow:hidden clips during GSAP scale.
          ======================================== */}
      <div className="sgs-panel-image-wrap">
        <img
          ref={imageRef}
          src={data.image}
          alt={data.altText}
          className="sgs-panel-image"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* ── Dark-to-transparent gradient overlay ── */}
      <div className="sgs-panel-overlay" aria-hidden="true" />

      {/* ── Mouse-follow orange light ── */}
      <div
        ref={lightRef}
        className="sgs-mouse-light"
        aria-hidden="true"
        style={{ opacity: 0, left: 0, top: 0 }}
      />

      {/* ── Panel index label (top-left) ── */}
      <span className="sgs-panel-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')} / 05
      </span>

      {/* ── Collapsed short label (hidden when active) ── */}
      <span className="sgs-panel-collapsed-label" aria-hidden="true">
        {data.shortLabel}
      </span>

      {/* ── Expanded content (slides up when active) ── */}
      <div className="sgs-panel-content">
        <div className="sgs-panel-tag">{data.caseLabel}</div>
        <h3 className="sgs-panel-title">{data.title}</h3>
        <p className="sgs-panel-desc">{data.shortDesc}</p>
      </div>
    </div>
  );
}

