// ========================================
// FINAL CTA v3.0 — PERFORMANCE OPTIMIZED
// Removed: blur() filters, 30 particles,
//   backdropFilter, drop-shadow on text,
//   scroll-driven parallax, CSS animations
// Kept: all content, layout, typography,
//   colors, buttons, trust badges
// ========================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// ========================================
// PARTICLES — reduced to 8, CSS-only
// No Framer Motion, no boxShadow on each
// ========================================
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 10 + i * 11,
  delay: i * 0.9,
  duration: 7 + i * 0.8,
  size: 2 + (i % 3),
  opacity: 0.25 + (i % 3) * 0.1,
}));

// ========================================
// MAIN COMPONENT
// ========================================
export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Force own composite layer to isolate from scroll
        willChange: 'auto',
        transform: 'translateZ(0)',
      }}
    >
      {/* ── STATIC BACKGROUND GLOW — NO filter:blur ── */}
      {/* Use pre-softened radial-gradient directly; avoids GPU blur passes */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px', height: '700px',
          background:
            'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,140,80,0.18) 0%, rgba(255,80,0,0.07) 45%, transparent 72%)',
          zIndex: 0,
          pointerEvents: 'none',
          // Static — no animation, no filter
        }}
      />

      {/* Side accent glows — static, no filter */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '20%', left: '5%',
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(255,100,30,0.07) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(255,156,96,0.06) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none',
        }}
      />

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px',
          background: 'linear-gradient(0deg, rgba(255,156,96,0.05) 0%, transparent 100%)',
          zIndex: 0, pointerEvents: 'none',
        }}
      />

      {/* Grid + Noise */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, zIndex: 1, pointerEvents: 'none' }} />
      <div className="noise-overlay"  style={{ zIndex: 1, pointerEvents: 'none' }} />

      {/* ── CSS PARTICLES — pure CSS animation, composited on GPU ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              bottom: '-8px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: '#FF9C60',
              opacity: 0,
              willChange: 'transform, opacity',
              animation: `ctaParticleRise ${p.duration}s ${p.delay}s ease-in infinite`,
            }}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          willChange: 'transform, opacity',
        }}
      >
        <div style={{
          textAlign: 'center',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(24px, 5vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>

          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="tag-orange"
            style={{ marginBottom: '40px' }}
          >
            {/* Static dot — removed pulsing scale animation */}
            <span style={{ fontSize: '7px' }}>●</span>
            START YOUR GROWTH JOURNEY
          </motion.div>

          {/* Giant headline */}
          <div style={{ marginBottom: '24px' }}>
            {[
              { text: 'READY TO',  orange: false },
              { text: 'GO VIRAL?', orange: true  },
            ].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', lineHeight: '0.9' }}>
                <motion.div
                  initial={{ y: '105%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(5rem, 16vw, 20rem)',
                    lineHeight: '0.88',
                    display: 'block',
                    willChange: 'transform',
                    ...(line.orange ? {
                      background: 'linear-gradient(135deg, #FF9C60 0%, #FFD4B8 40%, #FF7030 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      // Removed: filter: 'drop-shadow(0 0 60px ...)' — huge perf hit on large text
                    } : {
                      color: '#fff',
                    }),
                  }}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 20px)',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.06em',
              maxWidth: '600px',
              margin: '0 auto 56px',
              lineHeight: 1.6,
            }}
          >
            Join 50+ brands that trust Social Minds to make their content impossible to ignore.
            One conversation could change everything.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.68 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}
          >
            <Link to="/contact" className="btn-primary" style={{ fontSize: '17px', padding: '20px 52px' }}>
              Start Growing Now ↗
            </Link>
            <a
              href="https://wa.me/917000000000?text=Hi! I'd like to know more about Social Minds."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: '17px', padding: '20px 52px' }}
            >
              💬 WhatsApp Us
            </a>
          </motion.div>

          {/* Trust badges — removed backdropFilter:blur */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: 'clamp(24px, 4vw, 56px)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '32px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              // Removed: backdropFilter: 'blur(10px)' — expensive when triggered by scroll
            }}
          >
            {[
              { value: '50+',     label: 'Brands Scaled'   },
              { value: '10M+',    label: 'Views Generated'  },
              { value: '4.8★',   label: 'Client Rating'    },
              { value: '90 Days', label: 'To See Results'   },
            ].map((badge) => (
              <div key={badge.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #FF9C60, #FFD4B8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>
                  {badge.value}
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}>
                  {badge.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Inline keyframes for CSS particle animation */}
      <style>{`
        @keyframes ctaParticleRise {
          0%   { transform: translateY(0)    scaleX(1);   opacity: 0;    }
          15%  { opacity: 0.35; }
          80%  { opacity: 0.15; }
          100% { transform: translateY(-90vh) scaleX(0.6); opacity: 0;  }
        }
      `}</style>
    </section>
  );
}
