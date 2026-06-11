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
import HeroDashboardVisual from '../components/services/HeroDashboardVisual';
import SocialMediaVisual from '../components/services/SocialMediaVisual';
import PerformanceVisual from '../components/services/PerformanceVisual';
import ContentVisual from '../components/services/ContentVisual';
import BrandingVisual from '../components/services/BrandingVisual';
import WebDevVisual from '../components/services/WebDevVisual';
import SEOVisual from '../components/services/SEOVisual';

const getVisualComponent = (id, theme) => {
  switch (id) {
    case 'social-media-marketing': return <SocialMediaVisual theme={theme} />;
    case 'performance-marketing': return <PerformanceVisual theme={theme} />;
    case 'branding': return <BrandingVisual theme={theme} />;
    case 'content-strategy': return <SEOVisual theme={theme} />; // Map SEO to Content Strategy as it fits keywords
    case 'personal-branding': return <WebDevVisual theme={theme} />; // Map WebDev to Personal Branding (personal sites)
    case 'reel-growth': return <ContentVisual theme={theme} />; // Map Content Production to Reel Growth
    default: return <SocialMediaVisual theme={theme} />;
  }
};

function AnimatedSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ ...style, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
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
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(6rem, 8vw, 8rem) 24px clamp(4rem, 6vw, 5rem)', // Reduced height/padding
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Editorial Collage Background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: '#FFFFFF' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          {/* Floating Image Panel 1: Camera / Production */}
          <motion.div initial={{ opacity: 0, y: 40, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -6 }} transition={{ duration: 1.2 }}
            style={{ position: 'absolute', top: '-10%', left: '-5%', width: '35vw', height: '45vh', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', willChange: 'transform, opacity', transform: 'translateZ(0)' }}>
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Camera Production" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)' }} />
          </motion.div>

          {/* Floating Image Panel 2: Studio Setup */}
          <motion.div initial={{ opacity: 0, x: 40, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 4 }} transition={{ duration: 1.4 }}
            style={{ position: 'absolute', top: '15%', right: '-8%', width: '40vw', height: '50vh', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', willChange: 'transform, opacity', transform: 'translateZ(0)' }}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Strategy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)' }} />
          </motion.div>

          {/* Floating Image Panel 3: Creative Moodboard */}
          <motion.div initial={{ opacity: 0, y: -20, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 1.6 }}
            style={{ position: 'absolute', bottom: '-15%', left: '20%', width: '40vw', height: '40vh', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', willChange: 'transform, opacity', transform: 'translateZ(0)' }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Creative Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(10%) contrast(1.1)' }} />
          </motion.div>

          {/* Light overlay to ensure text is perfectly readable, but incredibly transparent so visuals shine through 30-40% */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 100%)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }} />
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }} // Reduced margin
            >
              <div style={{ width: '40px', height: '1px', background: '#FF9C60' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
                WHAT WE OFFER
              </span>
              <div style={{ width: '40px', height: '1px', background: '#FF9C60' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.8rem, 9.5vw, 10.2rem)', lineHeight: 0.9, marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} // Reduced margin
            >
              <span style={{ color: '#0A0A0A' }}>SERVICES BUILT FOR</span>
              <span style={{ color: '#FF9C60' }}>MARKET</span>
              <span style={{ WebkitTextStroke: '3px #0A0A0A', color: 'transparent', letterSpacing: '0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>DOMINATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(16px, 1.8vw, 20px)', color: '#222222', maxWidth: '600px', lineHeight: 1.7, marginBottom: '36px' }} // Reduced margin and darkened text for contrast
            >
              Six precision-engineered services designed to make your brand the most talked-about name in your industry.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '18px 48px',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#000',
                  letterSpacing: '0.06em',
                  boxShadow: '0 12px 24px rgba(255, 156, 96, 0.3)',
                }}
              >
                Start Scaling ↗
              </Link>
            </motion.div>
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

              {/* Dynamic Interactive Visual Component */}
              <AnimatedSection delay={0.2} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {getVisualComponent(service.id, i % 2 === 0 ? 'dark' : 'light')}
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* ── PROCESS ── */}
      <ProcessTimeline />



      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
