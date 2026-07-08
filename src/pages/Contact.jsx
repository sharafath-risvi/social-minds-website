// ========================================
// CONTACT PAGE — PREMIUM WHITE/ORANGE THEME v2
// Luxury creative agency style
// White base · Warm orange gradients · Glassmorphism
// OPTIMISED: GPU-accelerated hero, merged Connect+Form split layout
// ========================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Lock, Zap, Target } from 'lucide-react';

// ─── Scroll-reveal wrapper ──────────────────────────────────────────────────
function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Lightweight CSS particle system (no Framer Motion per particle) ─────────
function FloatingParticles({ count = 16 }) {
  // Stable random values generated once
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 6.25 + Math.sin(i * 1.7) * 20 + 50) % 100,
      y: (i * 5.5 + Math.cos(i * 2.3) * 15 + 50) % 100,
      size: 1.5 + (i % 3),
      dur: 7 + (i % 5),
      delay: (i % 6) * 0.8,
    }))
  ).current;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(255,156,96,0.55)',
            animation: `cpFloat ${p.dur}s ${p.delay}s ease-in-out infinite`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}

// ─── Premium input field ─────────────────────────────────────────────────────
function PremiumInput({ label, type = 'text', placeholder, value, onChange, multiline = false, icon, error }) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', position: 'relative' }}>
      <label style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '10px',
        letterSpacing: '0.18em',
        color: focused ? '#FF7030' : '#9A9090',
        fontWeight: 700,
        transition: 'color 0.22s ease',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        {icon && <span style={{ fontSize: '12px' }}>{icon}</span>}
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <Tag
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={multiline ? 5 : undefined}
          style={{
            width: '100%',
            background: focused ? 'rgba(255,156,96,0.03)' : '#FFFFFF',
            border: `1.5px solid ${focused ? 'rgba(255,112,48,0.4)' : 'rgba(0,0,0,0.09)'}`,
            borderRadius: '14px',
            padding: '15px 18px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: '#1A1A1A',
            outline: 'none',
            resize: multiline ? 'vertical' : undefined,
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
            minHeight: multiline ? '130px' : undefined,
            boxShadow: focused
              ? '0 0 0 3px rgba(255,112,48,0.1), 0 2px 16px rgba(255,112,48,0.08)'
              : '0 1px 6px rgba(0,0,0,0.05)',
          }}
        />
        {/* Orange bottom accent line on focus */}
        {focused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 1,
              left: '14px',
              right: '14px',
              height: '2px',
              background: 'linear-gradient(90deg, #FF9C60, #FF7030)',
              borderRadius: '2px',
              transformOrigin: 'left',
            }}
          />
        )}
      </div>
      {error && (
        <span style={{ color: '#EF4444', fontSize: '11px', marginTop: '2px', fontFamily: "'Inter', sans-serif" }}>
          {error}
        </span>
      )}
    </div>
  );
}

// ─── Contact info item row ───────────────────────────────────────────────────
function InfoRow({ icon, label, value, sub, href, delay = 0 }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <motion.a
        href={href || undefined}
        target={href ? '_blank' : undefined}
        rel="noopener noreferrer"
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        animate={{
          y: hov ? -5 : 0,
          boxShadow: hov
            ? '0 16px 48px rgba(255,112,48,0.18), 0 0 0 1.5px rgba(255,112,48,0.3)'
            : '0 3px 16px rgba(0,0,0,0.06)',
        }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '18px 20px',
          background: hov ? 'rgba(255,248,240,0.95)' : 'rgba(255,255,255,0.88)',
          border: `1px solid ${hov ? 'rgba(255,156,96,0.25)' : 'rgba(0,0,0,0.06)'}`,
          borderRadius: '20px',
          textDecoration: 'none',
          cursor: 'none',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
      >
        {/* Icon bubble */}
        <motion.div
          animate={{ scale: hov ? 1.08 : 1 }}
          transition={{ duration: 0.25 }}
          style={{
            width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
            background: hov
              ? 'linear-gradient(135deg, rgba(255,156,96,0.22), rgba(255,112,48,0.12))'
              : 'linear-gradient(135deg, rgba(255,156,96,0.1), rgba(255,112,48,0.05))',
            border: '1px solid rgba(255,156,96,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px',
            transition: 'background 0.25s ease',
          }}
        >
          {icon}
        </motion.div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '9px', letterSpacing: '0.18em', color: '#FF7030',
            fontWeight: 700, textTransform: 'uppercase', marginBottom: '3px',
          }}>
            {label}
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', fontWeight: 600, color: '#1A1A1A',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {value}
          </p>
          {sub && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#9A9090', marginTop: '1px' }}>
              {sub}
            </p>
          )}
        </div>
        <motion.span
          animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.35 }}
          style={{ color: '#FF7030', fontSize: '15px', fontWeight: 700, flexShrink: 0 }}
        >↗</motion.span>
      </motion.a>
    </FadeUp>
  );
}

// ─── Stats removed ───────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', brand: '', service: '', message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  // Map scroll-lock fix: overlay blocks iframe scroll capture until user clicks
  const [mapUnlocked, setMapUnlocked] = useState(false);

  const validateForm = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    
    if (!formData.name) {
      errors.name = 'Full Name is required';
    } else if (!nameRegex.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    if (!formData.email) {
      errors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.brand) {
      errors.brand = 'Brand / Company is required';
    }

    if (!formData.service) {
      errors.service = 'Please select a service';
    }

    if (!formData.message || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const serviceLabels = {
    'social-media': 'Social Media Marketing',
    'branding': 'Brand Identity & Design',
    'personal': 'Personal Branding',
    'reels': 'Reel & Video Growth',
    'content': 'Content Strategy',
    'performance': 'Performance Marketing',
    'full': 'Full Brand Package',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError('Form service is not configured. Missing access key.');
      return;
    }

    setSubmitLoading(true);

    try {
      const payload = {
        access_key: accessKey,
        Name: formData.name,
        Email: formData.email,
        'Phone Number': formData.phone,
        'Company / Business Name': formData.brand || 'Not provided',
        'Service Interested In': serviceLabels[formData.service] || formData.service || 'Not provided',
        Message: formData.message,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', brand: '', service: '', message: '' });
        setFormErrors({});
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please check your network connection and try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  // Inject CSS keyframes once
  useEffect(() => {
    const el = document.createElement('style');
    el.id = 'contact-v2-styles';
    el.textContent = `
      /* Lightweight GPU-only particle float */
      @keyframes cpFloat {
        0%,100% { transform: translateY(0px) translateZ(0); opacity: 0; }
        15%      { opacity: 0.9; }
        85%      { opacity: 0.9; }
        100%     { transform: translateY(-70px) translateZ(0); opacity: 0; }
      }
      /* Hero orb drift — pure transform, GPU only */
      @keyframes cpOrbA {
        0%,100% { transform: translate(0,0) translateZ(0); }
        33%     { transform: translate(14px,-22px) translateZ(0); }
        66%     { transform: translate(-8px,-10px) translateZ(0); }
      }
      @keyframes cpOrbB {
        0%,100% { transform: translate(0,0) translateZ(0); }
        40%     { transform: translate(-16px,18px) translateZ(0); }
        70%     { transform: translate(10px,8px) translateZ(0); }
      }
      @keyframes cpOrbC {
        0%,100% { transform: translate(0,0) translateZ(0); }
        50%     { transform: translate(8px,-16px) translateZ(0); }
      }
      /* Shimmer for WA banner */
      @keyframes cpShimmer {
        0%   { transform: translateX(-100%) translateZ(0); }
        100% { transform: translateX(200%) translateZ(0); }
      }
      /* Hero badge pulse dot */
      @keyframes cpPulse {
        0%,100% { transform: scale(1) translateZ(0); }
        50%     { transform: scale(1.55) translateZ(0); }
      }
      /* Blink dot */
      @keyframes cpBlink {
        0%,100% { opacity: 1; }
        50%     { opacity: 0.3; }
      }
      /* CTA arrow bounce */
      @keyframes cpArrow {
        0%,100% { transform: translateX(0) translateZ(0); }
        50%     { transform: translateX(4px) translateZ(0); }
      }
      /* Select dropdown arrow */
      .cp-select option { background: #fff; color: #1A1A1A; }

      /* Hero orb classes */
      .cp-orb-a { animation: cpOrbA 9s ease-in-out infinite; will-change: transform; }
      .cp-orb-b { animation: cpOrbB 12s ease-in-out infinite; will-change: transform; }
      .cp-orb-c { animation: cpOrbC 15s ease-in-out infinite 2s; will-change: transform; }
      .cp-badge-dot { animation: cpPulse 2s ease-in-out infinite; will-change: transform; }
      .cp-blink { animation: cpBlink 1.6s ease-in-out infinite; will-change: opacity; }
      .cp-arrow { animation: cpArrow 1.6s ease-in-out infinite; will-change: transform; }

      /* Map scroll-intercept overlay */
      .cp-map-overlay {
        position: absolute; inset: 0; z-index: 20;
        cursor: pointer;
        background: transparent;
        display: flex; align-items: flex-end; justify-content: center;
        padding-bottom: 70px;
      }
      .cp-map-overlay-hint {
        display: inline-flex; align-items: center; gap: '6px';
        padding: 8px 18px;
        background: rgba(255,255,255,0.88);
        border: 1px solid rgba(255,156,96,0.2);
        border-radius: 100px;
        font-family: 'Inter', sans-serif;
        font-size: 11px; font-weight: 600;
        color: #6E6868; letter-spacing: 0.04em;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.2s ease;
      }
    `;
    document.head.appendChild(el);
    return () => { document.getElementById('contact-v2-styles')?.remove(); };
  }, []);

  // ══════════════════════════════════════════════════════════════════════
  return (
    <main style={{ background: '#FFFFFF', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (scroll-lag optimised)
          Strategy: NO Framer Motion parallax transforms.
                    All moving elements use pure CSS `animation` with
                    `will-change: transform` so the browser can GPU-layer
                    them independently. backdrop-filter removed from hero
                    area to avoid costly compositing during scroll.
          ══════════════════════════════════════════════════════════════ */}
      <section
        className="contact-hero-section"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,5rem) clamp(3rem,6vw,5rem)',
          overflow: 'hidden',
          background: '#FFFFFF',
          /* Isolate hero layer so scroll does not repaint everything */
          isolation: 'isolate',
        }}
      >

        {/* Accent lines (static) */}
        <div style={{
          position: 'absolute', top: '22%', right: '14%', width: '180px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,156,96,0.45), transparent)',
          transform: 'rotate(-28deg)', pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '28%', left: '8%', width: '140px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,156,96,0.35), transparent)',
          transform: 'rotate(18deg)', pointerEvents: 'none', zIndex: 0,
        }} />

        {/* ── Hero content (no Framer Motion parallax/scroll transform) ── */}
        <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(3rem,6vw,6rem)',
            alignItems: 'center',
          }}>

            {/* ── Left: editorial text ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '8px 20px',
                  background: 'linear-gradient(135deg, rgba(255,156,96,0.1), rgba(255,112,48,0.05))',
                  border: '1px solid rgba(255,112,48,0.22)',
                  borderRadius: '100px', marginBottom: '34px',
                }}
              >
                <span className="cp-badge-dot" style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '10px', letterSpacing: '0.2em', color: '#FF7030', fontWeight: 700,
                }}>
                  CONTACT SOCIAL MINDS
                </span>
              </motion.div>

              {/* Headline — staggered entrance, no ongoing scroll transform */}
              {[
                { text: 'LET\'S BUILD', gradient: false, outline: false },
                { text: 'SOMETHING', gradient: true,  outline: false },
                { text: 'UNFORGETTABLE', gradient: false, outline: true },
              ].map(({ text, gradient, outline }, i) => (
                <div
                  key={text}
                  style={{
                    /* NO overflow:hidden — was clipping glyphs at lineHeight < 1 */
                    overflow: 'visible',
                    marginBottom: i < 2 ? '6px' : '34px',
                    /* Extra breathing room so tight lineHeight doesn't shear bottom of glyphs */
                    paddingBottom: '4px',
                  }}
                >
                  <motion.div
                    className="contact-hero-heading"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(3.6rem,8.5vw,9.5rem)',
                      /* Slightly more generous lineHeight on the outline row */
                      lineHeight: outline ? 0.95 : 0.89,
                      letterSpacing: outline ? '0.02em' : '0.01em',
                      display: 'block',
                      /* Ensure the text never overflows its own measure */
                      width: '100%',
                      ...(gradient ? {
                        background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 55%, #CC4F00 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      } : outline ? {
                        /* Premium orange outline — clearly visible, luxury editorial look */
                        WebkitTextStroke: '1.8px rgba(255,112,48,0.82)',
                        color: 'transparent',
                      } : {
                        color: '#0D0D0D',
                      }),
                    }}
                  >
                    {text}
                  </motion.div>
                </div>
              ))}

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.75 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(14px,1.35vw,17px)', color: '#6E6868',
                  maxWidth: '430px', lineHeight: 1.78, marginBottom: '0px',
                }}
              >
                Your next big brand move starts here. One conversation
                can completely transform where your brand is headed.
              </motion.p>
            </div>

            {/* ── Right: Premium modern communication visual element ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                margin: '0 auto',
                padding: '15px 5px',
              }}
            >
              {/* Subtle ambient back-glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '85%',
                  height: '85%',
                  background: 'radial-gradient(circle, rgba(255,112,48,0.15) 0%, rgba(255,156,96,0.05) 50%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Main Glassmorphic Card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 250, 245, 0.88) 100%)',
                  border: '1.5px solid rgba(255, 112, 48, 0.2)',
                  borderRadius: '28px',
                  padding: 'clamp(24px, 4vw, 36px)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.07), 0 4px 20px rgba(255, 112, 48, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Header — Live Status & Agency Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 197, 94, 0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(34, 197, 94, 0.25)' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: '#166534', letterSpacing: '0.05em' }}>
                      ACCEPTING NEW BRANDS
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 700, color: '#FF7030', letterSpacing: '0.1em', background: 'rgba(255, 112, 48, 0.08)', padding: '5px 12px', borderRadius: '8px' }}>
                    DIRECT ACCESS
                  </span>
                </div>

                {/* Response Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '26px' }}>
                  <div style={{ background: '#FFFFFF', padding: '18px 16px', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 700, color: '#0D0D0D', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      &lt; 2 Hrs
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#6E6868', fontWeight: 500 }}>
                      Avg. Response Time
                    </div>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '18px 16px', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 700, color: '#FF7030', marginBottom: '4px' }}>
                      100%
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#6E6868', fontWeight: 500 }}>
                      Confidentiality Rate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — CONNECT WITH US + CONTACT FORM (merged split layout)
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="connect-form"
        style={{
          position: 'relative',
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,6vw,5rem)',
          background: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* Section label + heading */}
          <FadeUp style={{ marginBottom: 'clamp(3rem,5vw,5rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(255,156,96,0.08)', border: '1px solid rgba(255,156,96,0.2)', borderRadius: '100px', marginBottom: '22px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF7030', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: '#FF7030', fontWeight: 700 }}>
                LET'S CONNECT
              </span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem,5.5vw,6.5rem)', lineHeight: 0.91, color: '#0D0D0D' }}>
              START YOUR NEXT{' '}
              <span style={{ background: 'linear-gradient(135deg, #FF9C60, #FF7030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                BIG BRAND MOVE
              </span>
            </h2>
          </FadeUp>

          {/* ── Split grid — 40 / 60 ── */}
          <div className="contact-split-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
            gap: 'clamp(2.5rem,5vw,4.5rem)',
            alignItems: 'start',
          }}>

            {/* ════════ LEFT — Connect info panel ════════ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <FadeUp delay={0.05}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(14px,1.2vw,16px)', color: '#6E6868',
                  lineHeight: 1.78, marginBottom: '36px', maxWidth: '400px',
                }}>
                  We're a remote-first creative studio. Reach out via any channel
                  — we're always listening and ready to craft something remarkable together.
                </p>
              </FadeUp>

              {/* Contact info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <InfoRow
                  icon={<Mail size={20} color="#FF7030" />} label="Email Us"
                  value="socialminds.official@gmail.com"
                  sub="We reply within 24 hours"
                  href="mailto:socialminds.official@gmail.com"
                  delay={0.1}
                />
                <InfoRow
                  icon={<Phone size={20} color="#FF7030" />} label="Call Us"
                  value="+91 72003 23181"
                  sub="Mon – Sat · 9:00 AM – 6:00 PM"
                  href="tel:+917200323181"
                  delay={0.18}
                />
                <InfoRow
                  icon={<MapPin size={20} color="#FF7030" />} label="Location"
                  value="Chennai, Tamil Nadu"
                  sub="2nd Floor, Lokesh Towers, Nungambakkam"
                  delay={0.26}
                />
                <InfoRow
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>} label="Instagram"
                  value="@social.minds.chennai"
                  sub="Follow for daily inspiration"
                  href="https://www.instagram.com/social.minds.chennai"
                  delay={0.34}
                />
              </div>

              {/* WhatsApp banner */}
              <FadeUp delay={0.44}>
                <motion.a
                  href="https://wa.me/917200323181?text=Hi! I'm interested in Social Minds services."
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -4, boxShadow: '0 20px 52px rgba(255,112,48,0.2), 0 0 0 1.5px rgba(255,112,48,0.38)' }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '16px', flexWrap: 'wrap',
                    marginTop: '16px',
                    padding: 'clamp(1.2rem,2.5vw,1.8rem) clamp(1.4rem,3vw,2.2rem)',
                    background: 'linear-gradient(135deg, rgba(255,156,96,0.09), rgba(255,112,48,0.04))',
                    border: '1px solid rgba(255,156,96,0.22)',
                    borderRadius: '22px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 24px rgba(255,112,48,0.07)',
                    cursor: 'none',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  {/* Shimmer sweep */}
                  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '22px', pointerEvents: 'none' }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '45%', height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,156,96,0.07), transparent)',
                      animation: 'cpShimmer 4s 1.2s infinite',
                      willChange: 'transform',
                    }} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', letterSpacing: '0.2em', color: '#FF7030', fontWeight: 700, marginBottom: '5px' }}>QUICK CHAT</p>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.3rem,2.2vw,1.8rem)', color: '#0D0D0D', letterSpacing: '0.03em', marginBottom: '3px' }}>Message us on WhatsApp</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#6E6868' }}>Usually responds within 2–3 hours</p>
                  </div>
                  <div style={{
                    padding: '12px 24px', borderRadius: '100px',
                    background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em',
                    boxShadow: '0 6px 20px rgba(255,112,48,0.28)',
                    position: 'relative', zIndex: 1, flexShrink: 0,
                  }}>
                    CHAT NOW ↗
                  </div>
                </motion.a>
              </FadeUp>
            </div>

            {/* ════════ RIGHT — Premium contact form ════════ */}
            <FadeUp delay={0.12}>
              <div style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.98)',
                borderRadius: '32px',
                padding: 'clamp(2.4rem,4.5vw,3.8rem)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.08), 0 8px 28px rgba(0,0,0,0.04)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Top gradient stripe */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, #FF9C60, #FF7030, #CC4F00)',
                  borderRadius: '32px 32px 0 0',
                }} />

                {/* Form header */}
                <div style={{ marginBottom: '28px', position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', letterSpacing: '0.18em', color: '#FF7030', fontWeight: 700, marginBottom: '8px' }}>
                    SEND A MESSAGE
                  </p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: '#0D0D0D', lineHeight: 0.95, letterSpacing: '0.02em' }}>
                    START THE CONVERSATION
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#9A9090', marginTop: '8px', lineHeight: 1.6 }}>
                    Free strategy call · 30 minutes · No commitment
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    style={{ textAlign: 'center', padding: 'clamp(2.5rem,5vw,4rem)', position: 'relative', zIndex: 1 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.18, 1] }}
                      transition={{ duration: 0.55, delay: 0.15 }}
                      style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
                    >
                      <CheckCircle size={60} color="#FF7030" />
                    </motion.div>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#FF7030', marginBottom: '10px' }}>
                      MESSAGE SENT!
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#6E6868', lineHeight: 1.65 }}>
                      Thank you! We'll get back to you within 24 hours with a tailored strategy.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '22px', position: 'relative', zIndex: 1 }}
                  >
                    {/* Row 1 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                      <PremiumInput
                        label="Your Name*"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        error={formErrors.name}
                      />
                      <PremiumInput
                        label="Email Address*"
                        type="email" placeholder="Email Address"
                        value={formData.email}
                        onChange={e => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        error={formErrors.email}
                      />
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                      <PremiumInput
                        label="Phone Number*"
                        type="tel" placeholder="Phone Number"
                        value={formData.phone}
                        onChange={e => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        error={formErrors.phone}
                      />
                      <PremiumInput
                        label="Brand / Company*"
                        placeholder="Brand / Company"
                        value={formData.brand}
                        onChange={e => {
                          setFormData({ ...formData, brand: e.target.value });
                          if (formErrors.brand) setFormErrors({ ...formErrors, brand: '' });
                        }}
                        error={formErrors.brand}
                      />
                    </div>

                    {/* Row 3 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                      {/* Service select */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        <label style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '10px', letterSpacing: '0.18em',
                          color: '#9A9090', fontWeight: 700, textTransform: 'uppercase',
                          display: 'flex', alignItems: 'center', gap: '6px',
                        }}>
                          Service Needed*
                        </label>
                        <select
                          className="cp-select"
                          value={formData.service}
                          onChange={e => {
                            setFormData({ ...formData, service: e.target.value });
                            if (formErrors.service) setFormErrors({ ...formErrors, service: '' });
                          }}
                          style={{
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(0,0,0,0.09)',
                            borderRadius: '14px', padding: '15px 18px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '14px', color: formData.service ? '#1A1A1A' : '#9A9090',
                            outline: 'none', appearance: 'none',
                            boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                            cursor: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23FF7030' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 14px center',
                            paddingRight: '40px',
                          }}
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="branding">Brand Identity & Design</option>
                          <option value="personal">Personal Branding</option>
                          <option value="reels">Reel & Video Growth</option>
                          <option value="content">Content Strategy</option>
                          <option value="performance">Performance Marketing</option>
                          <option value="full">Full Brand Package</option>
                        </select>
                        {formErrors.service && (
                          <span style={{ color: '#EF4444', fontSize: '11px', marginTop: '-4px', fontFamily: "'Inter', sans-serif" }}>
                            {formErrors.service}
                          </span>
                        )}
                      </div>
                      <div className="cp-desktop-spacer" style={{ minHeight: 0 }} />
                    </div>

                    {/* Message */}
                    <PremiumInput
                      label="Your Message*"
                      placeholder="Tell us about your brand, goals, and what you're looking to achieve..."
                      value={formData.message}
                      onChange={e => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      multiline
                      error={formErrors.message}
                    />

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={submitLoading}
                      style={{
                        padding: '20px',
                        background: submitLoading
                          ? 'rgba(255,156,96,0.55)'
                          : 'linear-gradient(135deg, #FF9C60, #FF7030)',
                        border: 'none', borderRadius: '100px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '15px', fontWeight: 700, color: '#fff',
                        letterSpacing: '0.08em', cursor: 'none',
                        boxShadow: 'none',
                        marginTop: '8px',
                      }}
                    >
                      {submitLoading ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ display: 'inline-block', fontSize: '16px' }}
                          >⟳</motion.span>
                          SENDING...
                        </span>
                      ) : 'SEND MESSAGE ↗'}
                    </motion.button>

                    {submitError && (
                      <div style={{
                        color: '#EF4444',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13px',
                        textAlign: 'center',
                        marginTop: '2px',
                      }}>
                        {submitError}
                      </div>
                    )}

                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px', color: '#B0ACAC', textAlign: 'center', lineHeight: 1.5,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                    }}>
                      <Lock size={14} color="#B0ACAC" /> Your information is 100% private and secure.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,156,96,0.28), transparent)' }} />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — MAP / LOCATION — Full-width map + detail grid below
          ══════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,6vw,5rem)',
        /* Static gradient — no filter:blur here avoids scroll repaint */
        background: '#FFFFFF',
        overflow: 'hidden',
        /* CSS containment: browser skips layout/paint of children during scroll */
        contain: 'layout style paint',
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* Section header */}
          <FadeUp style={{ marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(255,156,96,0.08)', border: '1px solid rgba(255,156,96,0.2)', borderRadius: '100px', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF7030', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: '#FF7030', fontWeight: 700 }}>OUR STUDIO</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,6vw,7rem)', lineHeight: 0.9, color: '#0D0D0D' }}>
              FIND US{' '}
              <span style={{ background: 'linear-gradient(135deg, #FF9C60, #FF7030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ANYWHERE</span>
            </h2>
          </FadeUp>

          {/* ── Full-width map — scroll-lock fix + GPU isolation ── */}
          <FadeUp delay={0.1} style={{ marginBottom: 'clamp(2rem,3.5vw,3rem)' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,156,96,0.12)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.07)',
              width: '100%',
              /* GPU-isolate: map repaints stay in own compositor layer */
              transform: 'translateZ(0)',
            }}>

              {/* ── Scroll-intercept overlay ──────────────────────────────────
                  When mapUnlocked is false this transparent div sits on top of
                  the iframe and re-fires wheel / touch events to window so the
                  page continues scrolling naturally.
                  On click the overlay hides and the user can interact with map.
                  ─────────────────────────────────────────────────────────── */}
              {!mapUnlocked && (
                <div
                  className="cp-map-overlay"
                  onClick={() => setMapUnlocked(true)}
                  onWheel={e => {
                    // Forward the wheel delta to the page — prevents scroll lock
                    window.scrollBy({ top: e.deltaY, left: 0, behavior: 'auto' });
                  }}
                  onTouchStart={e => {
                    // Store touch start position for delta calculation
                    e.currentTarget._touchY = e.touches[0].clientY;
                  }}
                  onTouchMove={e => {
                    const dy = e.currentTarget._touchY - e.touches[0].clientY;
                    e.currentTarget._touchY = e.touches[0].clientY;
                    window.scrollBy({ top: dy, left: 0, behavior: 'auto' });
                  }}
                >
                  <span className="cp-map-overlay-hint">Click to interact with map</span>
                </div>
              )}

              {/* Map iframe — no CSS filter, no pointer-events tricks needed
                  (overlay above handles everything) */}
              <iframe
                title="Social Minds Studio Location"
                src="https://www.google.com/maps?q=Lokesh+Towers,+No.37/28,+Kodambakkam+High+Rd,+Nungambakkam,+Chennai,+Tamil+Nadu+600034&output=embed"
                width="100%"
                height="460"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Thin bottom fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px',
                background: 'linear-gradient(to top, rgba(255,247,242,0.3), transparent)',
                pointerEvents: 'none',
                zIndex: 15,
              }} />

              {/* Static location pin — NO animations (eliminated every source of jank) */}
              <div style={{
                position: 'absolute', top: '46%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 12, pointerEvents: 'none', textAlign: 'center',
              }}>
                {/* Static pin marker */}
                <div style={{
                  width: '46px', height: '46px',
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  boxShadow: '0 5px 16px rgba(255,112,48,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                }}>
                  <span style={{ transform: 'rotate(45deg)', fontSize: '19px', display: 'inline-block' }}>✦</span>
                </div>
              </div>

              {/* Studio label pill */}
              <div style={{
                position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)',
                padding: '9px 20px',
                background: 'rgba(255,255,255,0.97)',
                borderRadius: '100px',
                boxShadow: '0 3px 14px rgba(0,0,0,0.09)',
                display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap',
                zIndex: 16, pointerEvents: 'none',
              }}>
                <MapPin size={15} color="#FF7030" />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: '#1A1A1A', letterSpacing: '0.07em' }}>SOCIAL MINDS STUDIO</span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#6E6868' }}>Chennai · Tamil Nadu</span>
              </div>
            </div>
          </FadeUp>

          {/* ── Studio detail cards — horizontal grid below the map ── */}
          <FadeUp delay={0.2}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {[
                {
                  icon: <MapPin size={22} color="#FF7030" />,
                  label: 'Office Address',
                  lines: ['2nd Floor, Lokesh Towers, No.37/28', 'Kodambakkam High Rd, Nungambakkam, Chennai – 600034'],
                },
                {
                  icon: <Clock size={22} color="#FF7030" />,
                  label: 'Working Hours',
                  lines: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
                },
                {
                  icon: <Mail size={22} color="#FF7030" />,
                  label: 'Email',
                  lines: ['socialminds.official@gmail.com', 'Reply within 24 hours'],
                  href: 'mailto:socialminds.official@gmail.com',
                },
                {
                  icon: <Phone size={22} color="#FF7030" />,
                  label: 'Phone',
                  lines: ['+91 72003 23181', 'Mon – Sat: 9:00 AM – 6:00 PM'],
                  href: 'tel:+917200323181',
                },
                {
                  icon: <CheckCircle size={22} color="#22C55E" />,
                  label: 'Availability',
                  lines: ['Currently Available', 'WhatsApp 24 / 7'],
                  green: true,
                },
              ].map(({ icon, label, lines, href, green }) => {
                /* Use plain <a> / <div> — avoids Framer Motion overhead per card */
                const Tag = href ? 'a' : 'div';
                const tagProps = href
                  ? { href, target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <Tag
                    key={label}
                    {...tagProps}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: '10px',
                      padding: '22px 20px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(255,156,96,0.12)',
                      borderRadius: '20px',
                      /* Lightweight single shadow */
                      boxShadow: '0 2px 12px rgba(0,0,0,0.045)',
                      textDecoration: 'none',
                      cursor: href ? 'pointer' : 'default',
                      /* CSS transition on transform only — GPU composited */
                      transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px) translateZ(0)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,112,48,0.14), 0 0 0 1.5px rgba(255,156,96,0.28)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.045)';
                    }}
                  >
                    {/* Icon bubble */}
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(255,156,96,0.1), rgba(255,112,48,0.05))',
                      border: '1px solid rgba(255,156,96,0.16)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px',
                    }}>{icon}</div>
                    <div style={{ minWidth: 0, width: '100%' }}>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', letterSpacing: '0.16em', color: '#FF7030', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>{label}</p>
                      {lines.map((line, li) => (
                        <p key={li} style={{
                          fontFamily: li === 0 ? "'Space Grotesk', sans-serif" : "'Inter', sans-serif",
                          fontSize: li === 0 ? '13px' : '11px',
                          fontWeight: li === 0 ? 600 : 400,
                          color: li === 0 ? (green ? '#16A34A' : '#1A1A1A') : '#9A9090',
                          lineHeight: 1.5,
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }}>{line}</p>
                      ))}
                    </div>
                  </Tag>
                );
              })}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        padding: 'clamp(4rem,8vw,6rem) clamp(1.5rem,6vw,5rem)',
        background: '#FFFFFF',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', top: '22%', left: '7%', width: '110px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,112,48,0.38))', transform: 'rotate(-14deg)' }} />
        <div style={{ position: 'absolute', bottom: '24%', right: '7%', width: '110px', height: '1px', background: 'linear-gradient(90deg, rgba(255,112,48,0.38), transparent)', transform: 'rotate(-14deg)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '920px', margin: '0 auto' }}>
          <FadeUp>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(255,156,96,0.09)', border: '1px solid rgba(255,156,96,0.22)', borderRadius: '100px', marginBottom: '38px' }}>
              <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ fontSize: '14px', display: 'inline-block' }}>✦</motion.span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: '#FF7030', fontWeight: 700 }}>THE NEXT STEP IS YOURS</span>
            </div>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,8.5vw,8.5rem)', lineHeight: 0.89, color: '#0D0D0D', marginBottom: '30px' }}>
              READY TO MAKE YOUR<br />
              BRAND{' '}
              <span style={{ background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 55%, #CC4F00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>IMPOSSIBLE</span><br />
              TO IGNORE?
            </h2>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1.4vw,17px)', color: '#6E6868', maxWidth: '500px', margin: '0 auto 52px', lineHeight: 1.77 }}>
              Free 30-minute strategy call. No contracts. No pressure.
              Just a real conversation about your brand's full potential.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="https://wa.me/917200323181"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 72px rgba(255,112,48,0.52), 0 18px 46px rgba(255,112,48,0.32)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  padding: '20px 52px',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  borderRadius: '100px', textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em',
                  boxShadow: '0 0 36px rgba(255,112,48,0.38), 0 10px 32px rgba(255,112,48,0.22)',
                  cursor: 'none',
                }}
              >
                <span>BOOK FREE STRATEGY CALL</span>
                <span className="cp-arrow" style={{ fontSize: '17px', display: 'inline-block' }}>↗</span>
              </motion.a>

              <motion.a
                href="#connect-form"
                whileHover={{ background: 'rgba(255,112,48,0.06)', borderColor: 'rgba(255,112,48,0.38)', color: '#FF7030' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '20px 44px',
                  background: 'rgba(255,255,255,0.72)',
                  border: '1.5px solid rgba(0,0,0,0.09)',
                  borderRadius: '100px', textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px', fontWeight: 700, color: '#1A1A1A', letterSpacing: '0.08em',
                  boxShadow: '0 3px 16px rgba(0,0,0,0.05)',
                  cursor: 'none',
                }}
              >
                SEND A MESSAGE
              </motion.a>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(14px,3vw,36px)', marginTop: '52px', flexWrap: 'wrap' }}>
              {[
                { icon: <Lock size={15} color="#FF7030" />, text: '100% Confidential' },
                { icon: <Zap size={15} color="#FF7030" />, text: '24hr Response' },
                { icon: <Target size={15} color="#FF7030" />, text: 'No-Pressure Call' },
                { icon: <CheckCircle size={15} color="#FF7030" />, text: 'Free Strategy Session' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#6E6868', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
