// ================================================================
// WHY BRANDS TRUST US — Section 07
// White section: animated metric counters + 6 trust reasons grid
// Premium hover effects, scroll-triggered count-up animation
// ================================================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const SPRING = [0.16, 1, 0.3, 1];

// ── Animated counter hook — counts up from 0 to target on trigger
function useCountUp(target, active, duration = 1200) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!active) return;
    // Parse prefix / numeric / suffix from target string like "150+" or "₹50Cr"
    const raw = String(target);
    const numMatch = raw.match(/[\d.]+/);
    if (!numMatch) { setDisplay(raw); return; }

    const numeric = parseFloat(numMatch[0]);
    const prefix = raw.slice(0, numMatch.index);
    const suffix = raw.slice(numMatch.index + numMatch[0].length);

    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numeric;
      const formatted = Number.isInteger(numeric)
        ? Math.floor(current).toLocaleString()
        : current.toFixed(1);
      setDisplay(prefix + formatted + suffix);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return display;
}

// ── Single animated metric card
function MetricCard({ val, label, delay, active }) {
  const count = useCountUp(val, active, 1100);
  return (
    <motion.div
      className="ab-trust-metric-card"
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: SPRING }}
      whileHover={{ y: -6 }}
    >
      <div className="ab-trust-metric-val">{count}</div>
      <div className="ab-trust-metric-label">{label}</div>
    </motion.div>
  );
}

// ── Client result metrics
const METRICS = [
  { val: '150+', label: 'Brands Scaled' },
  { val: '₹50Cr', label: 'Revenue Generated' },
  { val: '500M+', label: 'Total Impressions' },
  { val: '4.9', label: 'Avg. Client Rating' },
];

// ── Trust reasons — 6 cards
const REASONS = [
  {
    icon: '◎',
    title: 'Gen Z Native Thinking',
    desc: 'We live on the platforms we manage. No outdated playbooks — only what is working right now, tested daily.',
  },
  {
    icon: '◆',
    title: 'Premium Quality Standard',
    desc: 'Every piece of content is crafted as if it were our own brand on the line. Zero shortcuts, ever.',
  },
  {
    icon: '◈',
    title: 'Data-Driven Creativity',
    desc: 'Beautiful content that actually converts. Aesthetic excellence married to performance metrics.',
  },
  {
    icon: '▣',
    title: 'Full Transparency',
    desc: 'Weekly reporting, real metrics, no vanity numbers. You always know exactly what your investment is doing.',
  },
  {
    icon: '◇',
    title: 'Algorithm Mastery',
    desc: 'We study the Instagram and YouTube algorithm obsessively. This gives our clients a compounding edge.',
  },
  {
    icon: '◉',
    title: 'Results, Not Promises',
    desc: '90-day performance benchmarks on every engagement. We put our reputation on the line every time.',
  },
];

export default function WhyBrandsTrustUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ab-trust" ref={ref} aria-label="Why Brands Trust Social Minds">
      <div className="ab-trust-inner">

        {/* ── Section header — 2-column layout ── */}
        <motion.div
          className="ab-trust-header"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: SPRING }}
        >
          <div>
            <div className="ab-eyebrow" style={{
              background: 'rgba(255,156,96,0.08)',
              borderColor: 'rgba(255,156,96,0.2)',
            }}>
              <span className="ab-eyebrow-dot" aria-hidden="true" />
              Why Choose Us
            </div>
            <h2 className="ab-trust-heading">
              Why Brands
              <br />
              <span>Trust Us.</span>
            </h2>
          </div>

          <p className="ab-trust-sub">
            150+ brands have trusted Social Minds to build their presence,
            grow their audience, and generate real, measurable revenue.
            Here&apos;s what makes us different.
          </p>
        </motion.div>

        {/* ── Animated metrics grid — 4 count-up cards ── */}
        <div className="ab-trust-metrics">
          {METRICS.map((m, i) => (
            <MetricCard
              key={m.label}
              val={m.val}
              label={m.label}
              delay={i * 0.08}
              active={inView}
            />
          ))}
        </div>

        {/* ── Trust reasons — 3-column grid ── */}
        <div className="ab-trust-reasons">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              className="ab-trust-reason"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: SPRING }}
              whileHover={{ y: -6 }}
            >
              <span className="ab-trust-reason-icon" role="img" aria-hidden="true">
                {r.icon}
              </span>
              <h3 className="ab-trust-reason-title">{r.title}</h3>
              <p className="ab-trust-reason-desc">{r.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
