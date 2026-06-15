// ========================================
// GROWTH CONTENT — RIGHT SIDE PANEL
// Dynamic storytelling content that changes
// when accordion panel is selected.
//
// Shows:
// - Case study label
// - Giant cinematic heading
// - Description
// - Animated statistics (no CTA buttons)
// ========================================

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ========================================
// ANIMATED COUNTER HOOK
// Counts up from 0 to target value
// ========================================
function useCounter(target, active, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(numeric);
    };
    requestAnimationFrame(step);
  }, [target, active]);

  return value;
}

// ========================================
// SINGLE STAT CARD
// Shows animated counter + label
// ========================================
function StatCard({ stat, index, isVisible }) {
  const counterValue = useCounter(stat.value, isVisible, 1600 + index * 200);

  // Format the displayed value
  const formatValue = (val, template) => {
    if (template.startsWith('+')) return `+${Math.round(val)}%`;
    if (template.includes('M')) return `${(val).toFixed(1)}M`;
    if (template.includes('K')) return `${Math.round(val)}K`;
    if (template.includes('x')) return `${val.toFixed(1)}x`;
    return `${Math.round(val)}`;
  };

  return (
    <motion.div
      className="sgs-stat-card"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="sgs-stat-number">
        <span>{formatValue(counterValue, stat.value)}</span>
      </div>
      <div className="sgs-stat-label">{stat.label}</div>
    </motion.div>
  );
}

// ========================================
// GROWTH CONTENT MAIN COMPONENT
// ========================================
export default function GrowthContent({ data, activeIndex, onDotClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const prevIndex = useRef(activeIndex);

  // Reset counter animation when panel changes
  useEffect(() => {
    setIsVisible(false);
    const t = setTimeout(() => {
      setIsVisible(true);
      prevIndex.current = activeIndex;
    }, 350);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <div className="sgs-story-panel">

      {/* ========================================
          NAVIGATION DOTS
          Clicking a dot also switches the panel
          ======================================== */}
      <div className="sgs-story-nav" aria-label="Panel navigation">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className={`sgs-story-nav-dot${i === activeIndex ? ' active' : ''}`}
            aria-label={`Go to case study ${i + 1}`}
            aria-current={i === activeIndex ? 'true' : undefined}
            onClick={() => onDotClick && onDotClick(i)}
          />
        ))}
      </div>

      {/* ========================================
          ANIMATED CONTENT PANEL
          Transitions with AnimatePresence on change
          ======================================== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex ?? 'none'}
          className="sgs-story-text-wrapper"
          initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 20% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          exit={{ opacity: 0, y: -16, clipPath: 'inset(20% 0 0 0)' }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ flex: 1 }}
        >
          {activeIndex !== null ? (
            <>
              {/* ── Mobile-only clean title ── */}
              <h3 className="sgs-story-mobile-title">{data.title}</h3>

              {/* ── Desktop-only detailed content wrapper ── */}
              <div className="sgs-story-desktop-content">
                {/* ── Case study label ── */}
                <div className="sgs-story-case-label" aria-label="Case study label">
                  {data.caseLabel}
                </div>

                {/* ── Giant bold heading ── */}
                <h2
                  className="sgs-story-heading"
                  dangerouslySetInnerHTML={{ __html: data.heading }}
                  aria-label={data.headingPlain}
                />

                {/* ── Description ── */}
                <p className="sgs-story-desc">{data.description}</p>

                {/* ── Animated stats grid ── */}
                <div className="sgs-stats-grid" role="list" aria-label="Key metrics">
                  {data.stats.map((stat, i) => (
                    <StatCard
                      key={`${activeIndex}-${i}`}
                      stat={stat}
                      index={i}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* ── Empty state: no panel selected ── */
            <div className="sgs-story-empty">
              <p>Click any story to explore the strategy.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
