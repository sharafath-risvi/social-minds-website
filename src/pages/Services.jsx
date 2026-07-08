// ========================================
// SERVICES PAGE
// Apple-style premium service showcase
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
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
import SEOGrowthVisual from '../components/services/SEOGrowthVisual';
import SocialMediaManagementVisual from '../components/services/SocialMediaManagementVisual';

const getVisualComponent = (id, theme) => {
  switch (id) {
    case 'social-media-marketing': return <SocialMediaVisual theme={theme} />;
    case 'performance-marketing': return <PerformanceVisual theme={theme} />;
    case 'branding': return <BrandingVisual theme={theme} />;
    case 'content-strategy': return <SEOVisual theme={theme} />; // Map SEO to Content Strategy as it fits keywords
    case 'personal-branding': return <WebDevVisual theme={theme} />; // Map WebDev to Personal Branding (personal sites)
    case 'reel-growth': return <ContentVisual theme={theme} />; // Map Content Production to Reel Growth
    case 'social-media-management': return <SocialMediaManagementVisual theme={theme} />;
    case 'seo': return <SEOGrowthVisual theme={theme} />;
    default: return <SocialMediaVisual theme={theme} />;
  }
};

function AnimatedSection({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section 
        style={{
          background: '#FFFFFF',
          minHeight: '100vh', 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px',
          overflow: 'hidden'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        {/* Background ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255, 156, 96, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* ========================================================= */}
        {/* HERO TEXT CONTENT */}
        {/* ========================================================= */}
        <motion.div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 20,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#FF9C60' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
              OUR SERVICES
            </span>
            <div style={{ width: '40px', height: '1px', background: '#FF9C60' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: 'clamp(4rem, 8vw, 8.5rem)', 
              lineHeight: 0.95, 
              marginBottom: '20px' 
            }}
          >
            <span style={{ color: '#0A0A0A', display: 'block' }}>EVERYTHING YOUR BRAND NEEDS</span>
            <span style={{ color: '#FF9C60', display: 'inline-block', marginRight: '16px' }}>TO GROW</span>
            <span style={{ WebkitTextStroke: '2px #0A0A0A', color: 'transparent' }}>ONLINE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '18px', 
              color: '#555', 
              maxWidth: '680px', 
              lineHeight: 1.7, 
              marginBottom: '40px' 
            }}
          >
            We design custom growth engines. From scroll-stopping content creation and social media management to branding, performance marketing, and high-quality lead generation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
          >
            <Link
              to="/contact"
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                borderRadius: '100px',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                color: '#000',
                letterSpacing: '0.06em',
                boxShadow: '0 12px 24px rgba(255, 156, 96, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(255, 156, 96, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 156, 96, 0.3)';
              }}
            >
              Start Scaling ↗
            </Link>
            
            <button
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              style={{
                padding: '16px 40px',
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
              }}
            >
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICE DEEP DIVES ── */}
      {services.map((service, i) => {
        const isDark = service.isDark !== undefined ? service.isDark : i % 2 === 0;
        return (
          <section
            key={service.id}
            style={{
              background: isDark ? '#0A0A0A' : '#F5F5F3',
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
                <AnimatedSection className="service-content" delay={0.1} style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', color: 'rgba(255,156,96,0.5)', letterSpacing: '0.1em' }}>
                        {service.number}
                      </span>
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        color: isDark ? 'rgba(255,255,255,0.3)' : '#838383',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
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
                      color: isDark ? '#FFFFFF' : '#0A0A0A',
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
                      color: isDark ? 'rgba(255,255,255,0.5)' : '#555',
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
                          color: isDark ? 'rgba(255,255,255,0.6)' : '#444',
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
                <AnimatedSection className="service-visual" delay={0.2} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  {getVisualComponent(service.id, isDark ? 'dark' : 'light')}
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── PROCESS ("5 Steps to Your Growth") — Temporarily commented out per request ── */}
      {/* <ProcessTimeline /> */}



      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
