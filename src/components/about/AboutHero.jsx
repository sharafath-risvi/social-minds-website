// ================================================================
// ABOUT HERO — Section 01
// Premium split-layout hero with realistic mockup and typography
// ================================================================

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IPhoneMockup from '../ui/IPhoneMockup';

export default function AboutHero() {
  const containerRef = useRef(null);

  // Track scroll progress through the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the phone aggressively from 1x to 5.5x
  const phoneScale = useTransform(scrollYProgress, [0, 0.8], [1, 5.5]);
  
  // Fade out smoothly at the very end of the scroll to transition into the next section
  const phoneOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Fade out the left text block extremely fast as the phone begins to zoom
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const textVisibility = useTransform(scrollYProgress, (v) => v > 0.1 ? "hidden" : "visible");
  const textY = useTransform(scrollYProgress, [0, 0.1], ["-50%", "-80%"]);

  return (
    <section 
      ref={containerRef}
      className="ab-hero ab-hero-scroll-container" 
      aria-label="About Social Minds Hero"
    >
      <div className="ab-hero-sticky-viewport">
        {/* Premium Left Content Block */}
        <motion.div 
          style={{
            position: 'absolute',
            left: 'clamp(16px, 3vw, 5vw)',
            top: '50%',
            transform: 'translateY(-50%)',
            y: textY,
            opacity: textOpacity,
            visibility: textVisibility,
            pointerEvents: useTransform(scrollYProgress, (v) => v > 0.1 ? "none" : "auto"),
            maxWidth: '420px',
            zIndex: 10,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          <div className="ab-eyebrow" style={{ marginBottom: '28px' }}>
            <div className="ab-eyebrow-dot" />
            OUR STORY
          </div>
          <h1 style={{ 
            fontFamily: "'Bebas Neue', sans-serif", 
            fontSize: 'clamp(3.8rem, 6.5vw, 6rem)', 
            lineHeight: 0.95, 
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span style={{ color: '#0A0A0A' }}>WE DON'T JUST</span>
            <span style={{ color: '#FF9C60' }}>MANAGE</span>
            <span style={{ WebkitTextStroke: '1.5px #0A0A0A', color: 'transparent', letterSpacing: '0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>SOCIAL MEDIA.</span>
          </h1>
          <p style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '16px', 
            color: '#555', 
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            We build digital empires that command attention.<br />
            Strategies driving growth for ambitious brands.
          </p>
        </motion.div>

        <motion.div 
          className="ab-hero-zoom-target"
          style={{ scale: phoneScale, opacity: phoneOpacity, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        >
          <div className="ab-hero-phone-wrap" style={{ marginTop: '30px' }}>
            <IPhoneMockup size="lg" glowColor="transparent" lightMode={true} scale={0.88} hideScreenGlare={true}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* iOS Status Bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0 24px 0 20px',
                  zIndex: 10,
                }}>
                  <span style={{ color: '#000', fontSize: '13px', fontWeight: 600, fontFamily: "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>9:41</span>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {/* Cellular Signal */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '10px' }}>
                      <div style={{ width: '3px', height: '4px', backgroundColor: '#000', borderRadius: '1px' }} />
                      <div style={{ width: '3px', height: '6px', backgroundColor: '#000', borderRadius: '1px' }} />
                      <div style={{ width: '3px', height: '8px', backgroundColor: '#000', borderRadius: '1px' }} />
                      <div style={{ width: '3px', height: '10px', backgroundColor: '#000', borderRadius: '1px' }} />
                    </div>
                    {/* WiFi Icon */}
                    <svg width="15" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#000' }}>
                      <path d="M12 21C10.6193 21 9.5 19.8807 9.5 18.5C9.5 17.1193 10.6193 16 12 16C13.3807 16 14.5 17.1193 14.5 18.5C14.5 19.8807 13.3807 21 12 21ZM2.15049 9.38092C7.57525 4.67139 16.4248 4.67139 21.8495 9.38092C22.2589 9.73645 22.3021 10.3562 21.9466 10.7656C21.5911 11.175 20.9714 11.2182 20.5619 10.8627C15.8453 6.76451 8.15476 6.76451 3.43807 10.8627C3.02863 11.2182 2.40891 11.175 2.05337 10.7656C1.69784 10.3562 1.74106 9.73645 2.15049 9.38092ZM5.48545 13.0645C9.0984 10.2078 14.9016 10.2078 18.5146 13.0645C18.9142 13.3805 18.982 13.961 18.666 14.3606C18.35 14.7602 17.7695 14.828 17.3699 14.512C14.3828 12.1498 9.61719 12.1498 6.63013 14.512C6.23053 14.828 5.65002 14.7602 5.33402 14.3606C5.01802 13.961 5.08581 13.3805 5.48545 13.0645Z"/>
                    </svg>
                    {/* Battery Group */}
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                      <div style={{ 
                        width: '27px', 
                        height: '13px', 
                        backgroundColor: '#000', 
                        borderRadius: '3.5px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative' 
                      }}>
                        {/* Battery Text Inside */}
                        <span style={{ 
                          fontSize: '8.5px', 
                          fontWeight: 700, 
                          color: '#FFF', 
                          fontFamily: "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", 
                          lineHeight: 1,
                          marginTop: '0.5px'
                        }}>
                          100
                        </span>
                        {/* Battery Terminal Node */}
                        <div style={{ 
                          position: 'absolute', 
                          right: '-3.5px', 
                          top: '3px', 
                          width: '2.5px', 
                          height: '5px', 
                          backgroundColor: '#000', 
                          borderRadius: '0 1.5px 1.5px 0',
                          opacity: 0.5
                        }} />
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <img 
                    src="/socialminds.png" 
                    alt="Social Minds Logo" 
                    style={{ 
                      width: '65%', 
                      height: 'auto', 
                      objectFit: 'contain',
                      marginBottom: '16px'
                    }} 
                  />
                  <span style={{
                    color: '#888',
                    fontSize: '11px',
                    fontWeight: '600',
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>
                    Social Minds Agency
                  </span>
                </motion.div>

                {/* Loading indicator */}
                <motion.div 
                  style={{
                    position: 'absolute',
                    bottom: '60px',
                    width: '24px',
                    height: '24px',
                    border: '2.5px solid rgba(255, 156, 96, 0.2)',
                    borderTopColor: '#FF9C60',
                    borderRadius: '50%',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </IPhoneMockup>
          </div>
        </motion.div>

        {/* Premium Right Social Orbit Block */}
        <motion.div
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            y: textY,
            opacity: textOpacity,
            visibility: textVisibility,
            pointerEvents: useTransform(scrollYProgress, (v) => v > 0.1 ? "none" : "auto"),
            zIndex: 10,
            width: 'clamp(300px, 35vw, 450px)',
            height: '600px',
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          {/* Instagram Card (Top Right) */}
          <div style={{ 
            position: 'absolute', top: '8%', right: 'clamp(40px, 6vw, 100px)',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '18px', padding: '18px 22px 18px 18px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)', 
            display: 'flex', alignItems: 'center', gap: '15px', width: 'max-content',
            transform: 'translateZ(0)'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0A0A0A' }}>Content Growth</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#666' }}>Reels & Engagement</span>
            </div>
          </div>
          
          {/* WhatsApp Card (Slightly lower, slightly left) */}
          <div style={{ 
            position: 'absolute', top: '26%', right: 'clamp(140px, 15vw, 240px)', transform: 'scale(1.08) translateZ(0)',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '18px', padding: '18px 22px 18px 18px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)', 
            display: 'flex', alignItems: 'center', gap: '15px', width: 'max-content'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#25D366', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0A0A0A' }}>Lead Generation</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#666' }}>Customer Conversations</span>
            </div>
          </div>

          {/* Facebook Card (Center right) */}
          <div style={{ 
            position: 'absolute', top: '44%', right: 'clamp(40px, 6vw, 100px)',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '18px', padding: '18px 22px 18px 18px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)', 
            display: 'flex', alignItems: 'center', gap: '15px', width: 'max-content',
            transform: 'translateZ(0)'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1877F2', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0A0A0A' }}>Brand Awareness</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#666' }}>Community Building</span>
            </div>
          </div>

          {/* YouTube Card (Lower, slightly left) */}
          <div style={{ 
            position: 'absolute', top: '62%', right: 'clamp(140px, 15vw, 240px)', transform: 'scale(1.05) translateZ(0)',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '18px', padding: '18px 22px 18px 18px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)', 
            display: 'flex', alignItems: 'center', gap: '15px', width: 'max-content'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#FF0000', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0A0A0A' }}>Video Marketing</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#666' }}>YouTube Growth & Reach</span>
            </div>
          </div>

          {/* Google Business Card (Bottom right) */}
          <div style={{ 
            position: 'absolute', top: '80%', right: 'clamp(40px, 6vw, 100px)',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '18px', padding: '18px 22px 18px 18px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)', 
            display: 'flex', alignItems: 'center', gap: '15px', width: 'max-content',
            transform: 'translateZ(0)'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0A0A0A' }}>Local Visibility</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#666' }}>Maps & Local SEO</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
