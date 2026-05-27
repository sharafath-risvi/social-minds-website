// ========================================
// CONTACT PAGE
// Minimal luxury contact with glassmorphism form,
// social links, WhatsApp CTA, and location card
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

const socialLinks = [
  { name: 'Instagram', icon: '◈', handle: '@socialminds_agency', url: '#', color: '#FF6B9D' },
  { name: 'LinkedIn', icon: '◉', handle: 'Social Minds Agency', url: '#', color: '#60D4FF' },
  { name: 'Twitter / X', icon: '◎', handle: '@socialminds', url: '#', color: '#FFFFFF' },
  { name: 'WhatsApp', icon: '▣', handle: '+91 70000 00000', url: 'https://wa.me/917000000000', color: '#A3FF60' },
];

function InputField({ label, type = 'text', placeholder, value, onChange, multiline = false }) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: focused ? '#FF9C60' : 'rgba(255,255,255,0.35)',
        fontWeight: 600,
        transition: 'color 0.2s ease',
      }}>
        {label}
      </label>
      <Tag
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 5 : undefined}
        style={{
          background: focused ? 'rgba(255, 156, 96, 0.04)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${focused ? 'rgba(255, 156, 96, 0.3)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '14px',
          padding: '16px 20px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          color: '#FFFFFF',
          outline: 'none',
          resize: multiline ? 'vertical' : undefined,
          transition: 'border-color 0.2s ease, background 0.2s ease',
          minHeight: multiline ? '140px' : undefined,
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        background: '#000',
        padding: 'clamp(8rem, 15vw, 12rem) 24px clamp(4rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255, 156, 96, 0.08)',
              border: '1px solid rgba(255, 156, 96, 0.2)',
              borderRadius: '100px',
              marginBottom: '32px',
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ color: '#FF9C60', fontSize: '8px' }}
            >
              ●
            </motion.span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.15em', color: '#FF9C60', fontWeight: 600 }}>
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 11rem)', lineHeight: 0.9, marginBottom: '24px' }}
          >
            <span style={{ color: '#FFFFFF' }}>LET'S</span><br />
            <span className="gradient-text-orange glow-text-orange">BUILD</span><br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>TOGETHER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Ready to turn your brand into a movement? One conversation changes everything.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(5rem, 10vw, 8rem) 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Contact Form */}
          <AnimatedSection>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 4vw, 3rem)',
            }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 3vw, 3rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '8px', letterSpacing: '0.02em' }}>
                START A CONVERSATION
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '40px', lineHeight: 1.6 }}>
                Free strategy call • 30 minutes • No commitment
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '48px',
                    background: 'rgba(255, 156, 96, 0.05)',
                    border: '1px solid rgba(255, 156, 96, 0.2)',
                    borderRadius: '20px',
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FF9C60', marginBottom: '8px' }}>
                    MESSAGE SENT!
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <InputField
                      label="YOUR NAME"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <InputField
                      label="EMAIL ADDRESS"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <InputField
                      label="PHONE NUMBER"
                      type="tel"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    {/* Service select */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
                        SERVICE NEEDED
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '14px',
                          padding: '16px 20px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '15px',
                          color: 'rgba(255,255,255,0.5)',
                          outline: 'none',
                          appearance: 'none',
                        }}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="personal">Personal Branding</option>
                        <option value="reels">Reel Growth</option>
                        <option value="content">Content Strategy</option>
                        <option value="performance">Performance Marketing</option>
                      </select>
                    </div>
                  </div>

                  <InputField
                    label="YOUR MESSAGE"
                    placeholder="Tell us about your brand and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    multiline
                  />

                  <button
                    type="submit"
                    style={{
                      padding: '18px',
                      background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                      border: 'none',
                      borderRadius: '100px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#000',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      boxShadow: '0 0 30px rgba(255, 156, 96, 0.3)',
                      transition: 'all 0.3s ease',
                      marginTop: '8px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 156, 96, 0.6)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 156, 96, 0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    SEND MESSAGE ↗
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Info Panel */}
          <AnimatedSection delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Quick Contact */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                padding: '32px',
              }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '24px', letterSpacing: '0.04em' }}>
                  CONNECT WITH US
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        textDecoration: 'none',
                        padding: '14px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '14px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${link.color}08`;
                        e.currentTarget.style.borderColor = `${link.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      }}
                    >
                      <div style={{
                        width: '38px',
                        height: '38px',
                        background: `${link.color}12`,
                        border: `1px solid ${link.color}20`,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        color: link.color,
                        flexShrink: 0,
                      }}>
                        {link.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '2px', letterSpacing: '0.08em' }}>
                          {link.name.toUpperCase()}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                          {link.handle}
                        </p>
                      </div>
                      <span style={{ marginLeft: 'auto', color: link.color, fontSize: '14px' }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917000000000?text=Hi! I'm interested in Social Minds services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '28px 32px',
                  background: 'rgba(163, 255, 96, 0.05)',
                  border: '1px solid rgba(163, 255, 96, 0.2)',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(163, 255, 96, 0.08)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(163, 255, 96, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(163, 255, 96, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: '#A3FF60', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '4px' }}>
                    QUICK CHAT
                  </p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                    Message on WhatsApp
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                    Usually responds in 2 hours
                  </p>
                </div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(163, 255, 96, 0.1)',
                  border: '1px solid rgba(163, 255, 96, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0,
                }}>
                  💬
                </div>
              </a>

              {/* Studio Location */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255, 156, 96, 0.02) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: '#FF9C60', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '12px' }}>
                  OUR STUDIO
                </p>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  SOCIAL MINDS HQ
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '16px' }}>
                  📍 Digital First — Remote Agency<br />
                  Serving clients across India & beyond<br />
                  Available for in-person strategy sessions
                </p>
                <div style={{
                  height: '100px',
                  background: 'rgba(255, 156, 96, 0.04)',
                  border: '1px solid rgba(255, 156, 96, 0.1)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'rgba(255, 156, 96, 0.3)', letterSpacing: '0.1em' }}>
                    INDIA · REMOTE
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#F5F5F3', padding: 'clamp(5rem, 10vw, 7rem) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: '#0A0A0A', lineHeight: 0.92, marginBottom: '24px' }}>
              NO RISK.<br />
              <span style={{ WebkitTextStroke: '2px #0A0A0A', color: 'transparent' }}>ALL REWARD.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#838383', lineHeight: 1.7, marginBottom: '40px' }}>
              Free 30-minute strategy call. No contracts. No pressure. Just real conversation about your brand's potential.
            </p>
            <a
              href="https://wa.me/917000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 48px',
                background: '#0A0A0A',
                borderRadius: '100px',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                transition: 'all 0.3s ease',
              }}
            >
              Book Free Strategy Call ↗
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
