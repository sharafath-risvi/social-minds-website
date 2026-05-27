// ========================================
// SERVICES PAGE
// Apple-style premium service showcase
// ========================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import FinalCTA from '../components/sections/FinalCTA';
import ProcessTimeline from '../components/sections/ProcessTimeline';

function AnimatedSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ label, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
      <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
        {label}
      </span>
    </div>
  );
}

export default function Services() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        background: '#000',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(8rem, 15vw, 12rem) 24px clamp(5rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10, width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
          >
            <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
              WHAT WE OFFER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 11rem)', lineHeight: 0.9, marginBottom: '32px' }}
          >
            <span style={{ color: '#FFFFFF' }}>SERVICES</span><br />
            <span style={{ color: '#FFFFFF' }}>BUILT FOR</span><br />
            <span className="gradient-text-orange glow-text-orange">MARKET</span><br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>DOMINATION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', lineHeight: 1.7 }}
          >
            Six precision-engineered services designed to make your brand the most talked-about name in your industry.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE DEEP DIVES ── */}
      {services.map((service, i) => (
        <section
          key={service.id}
          style={{
            background: i % 2 === 0 ? '#0A0A0A' : '#F5F5F3',
            padding: 'clamp(5rem, 8vw, 7rem) 24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}>
              {/* Content — alternate left/right */}
              <AnimatedSection delay={0.1} style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', color: 'rgba(255,156,96,0.5)', letterSpacing: '0.1em' }}>
                      {service.number}
                    </span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      color: i % 2 === 0 ? 'rgba(255,255,255,0.3)' : '#838383',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                      borderRadius: '100px',
                      padding: '3px 10px',
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: '40px', color: '#FF9C60', marginBottom: '12px' }}>{service.icon}</div>

                  <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                    color: i % 2 === 0 ? '#FFFFFF' : '#0A0A0A',
                    lineHeight: 0.95,
                    marginBottom: '8px',
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    color: '#FF9C60',
                    letterSpacing: '0.1em',
                    marginBottom: '24px',
                  }}>
                    {service.subtitle}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    color: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : '#555',
                    lineHeight: 1.8,
                    marginBottom: '32px',
                    maxWidth: '480px',
                  }}>
                    {service.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.features.map((f) => (
                      <li key={f} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        color: i % 2 === 0 ? 'rgba(255,255,255,0.6)' : '#444',
                      }}>
                        <span style={{ color: '#FF9C60', fontSize: '8px', flexShrink: 0 }}>◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '40px' }}>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '14px 32px',
                        background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#000',
                        letterSpacing: '0.06em',
                        boxShadow: '0 0 24px rgba(255, 156, 96, 0.35)',
                      }}
                    >
                      Get Started ↗
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              {/* Visual card */}
              <AnimatedSection delay={0.2} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '28px',
                    padding: '48px 40px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Large icon watermark */}
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '200px',
                      color: 'rgba(255, 156, 96, 0.04)',
                      lineHeight: 1,
                      position: 'absolute',
                      bottom: '-20px',
                      right: '20px',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}>
                      {service.number}
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ fontSize: '60px', marginBottom: '24px' }}>{service.icon}</div>
                      <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        color: '#FF9C60',
                        fontWeight: 700,
                        marginBottom: '8px',
                      }}>
                        WHAT YOU GET
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        {service.features.map((f) => (
                          <div key={f} style={{
                            padding: '12px 14px',
                            background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            borderRadius: '10px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '12px',
                            color: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : '#666',
                          }}>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* ── PROCESS ── */}
      <ProcessTimeline />

      {/* ── PRICING PREVIEW ── */}
      <section style={{ background: '#F5F5F3', padding: 'clamp(5rem, 10vw, 8rem) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AnimatedSection>
            <SectionTag label="INVESTMENT" />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#0A0A0A', lineHeight: 0.92, marginBottom: '24px' }}>
              READY TO INVEST<br />
              IN YOUR BRAND?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#838383', lineHeight: 1.7, marginBottom: '40px' }}>
              Starting at ₹15,000/month. No lock-in contracts. 30-day money-back guarantee.
            </p>
            <Link
              to="/pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 40px',
                background: '#0A0A0A',
                borderRadius: '100px',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
              }}
            >
              View Pricing Plans ↗
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
