// ========================================
// PROCESS TIMELINE v2.0 — DARK SECTION
// Animated vertical timeline with connectors
// Premium cinematic design
// 5-step process
// ========================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// PROCESS STEPS
// ========================================
const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    subtitle: 'FREE 30-MIN STRATEGY SESSION',
    description:
      "We start with a deep conversation about your brand, goals, audience, and competitors. We ask the questions most agencies skip. By the end, we both know if we're the right fit.",
    icon: '🎙️',
    color: '#FF9C60',
    duration: '30 Minutes',
  },
  {
    number: '02',
    title: 'Brand Audit',
    subtitle: 'COMPLETE DIGITAL ANALYSIS',
    description:
      'We dissect your current presence — every post, every metric, every competitor. We identify gaps, opportunities, and the exact content types that will work for your niche.',
    icon: '🔍',
    color: '#60D4FF',
    duration: 'Week 1',
  },
  {
    number: '03',
    title: 'Strategy Build',
    subtitle: 'CUSTOM GROWTH BLUEPRINT',
    description:
      'We build your complete content strategy — content pillars, posting schedule, hook library, hashtag strategy, and 90-day milestone map. Nothing generic. Everything custom.',
    icon: '🏗️',
    color: '#A3FF60',
    duration: 'Week 1-2',
  },
  {
    number: '04',
    title: 'Content Creation',
    subtitle: 'PRODUCTION & PUBLISHING',
    description:
      'Scripts, shoots, edits, captions, and hashtags. We produce every piece, optimize it for the algorithm, and schedule it for peak engagement times. You just show up.',
    icon: '🎬',
    color: '#C084FC',
    duration: 'Ongoing',
  },
  {
    number: '05',
    title: 'Analyze & Scale',
    subtitle: 'WEEKLY OPTIMIZATION',
    description:
      'Every week we review performance, identify winners, cut losers, and double down on what works. Monthly deep-dive reports with clear next-step recommendations.',
    icon: '📈',
    color: '#FF6B9D',
    duration: 'Weekly',
  },
];

// ========================================
// MAIN COMPONENT
// ========================================
export default function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#080808',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div style={{
        position: 'absolute', top: '50%', right: '0',
        width: '500px', height: '800px',
        background: 'radial-gradient(ellipse at right, rgba(255,156,96,0.04) 0%, transparent 65%)',
        filter: 'blur(80px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tag-orange"
            style={{ marginBottom: '20px' }}
          >
            <span style={{ fontSize: '7px' }}>●</span>
            HOW WE WORK
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 9rem)',
                color: '#fff',
                lineHeight: '0.9',
                marginBottom: '20px',
              }}
            >
              5 Steps To<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Your Growth.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: 'rgba(255,255,255,0.3)',
              maxWidth: '460px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            A proven system. Refined across 50+ brands. Built to create compounding growth.
          </motion.p>
        </div>

        {/* ── TIMELINE ── */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '40px',
              top: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #FF9C60, #FF6B9D, #C084FC, #A3FF60, #60D4FF)',
              transformOrigin: 'top',
              zIndex: 0,
            }}
          />

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                style={{
                  display: 'flex',
                  gap: '40px',
                  alignItems: 'flex-start',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Step circle */}
                <div style={{ flexShrink: 0, position: 'relative' }}>
                  <motion.div
                    animate={{ boxShadow: [`0 0 0 0 ${step.color}40`, `0 0 0 12px transparent`] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    style={{
                      width: '80px', height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(10,10,10,0.95)',
                      border: `2px solid ${step.color}50`,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 0 24px ${step.color}25, inset 0 0 0 1px rgba(255,255,255,0.04)`,
                    }}
                  >
                    <span style={{ fontSize: '18px', marginBottom: '2px' }}>{step.icon}</span>
                    <span style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '13px',
                      color: step.color,
                      letterSpacing: '0.05em',
                    }}>{step.number}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  padding: '28px 32px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${step.color}15`,
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Glow corner */}
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '100px', height: '100px',
                    background: `radial-gradient(circle at top right, ${step.color}08 0%, transparent 65%)`,
                    pointerEvents: 'none',
                  }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px' }}>
                    <div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: step.color,
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}>{step.subtitle}</div>
                      <h3 style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        color: '#fff',
                        lineHeight: 1,
                      }}>{step.title}</h3>
                    </div>
                    <div style={{
                      padding: '6px 14px',
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}25`,
                      borderRadius: '100px',
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: step.color,
                        whiteSpace: 'nowrap',
                      }}>{step.duration}</span>
                    </div>
                  </div>

                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.75,
                  }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
