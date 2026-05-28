// ========================================
// CINEMATIC IPHONE HERO — SECTION 5
// Full-screen black section
// MASSIVE centered iPhone — Section 1 of 2 iPhone sections
// Floating analytics cards orbiting phone
// Social notification toasts + animated reel inside
// Giant outlined text in background
// Mouse parallax on all layers
// ========================================

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import IPhoneMockup, { ReelContent } from '../ui/IPhoneMockup';

// ========================================
// NOTIFICATION TOASTS DATA
// ========================================
const notifications = [
  { text: '🔥 Your reel just hit 100K views!', color: '#FF9C60', delay: 2 },
  { text: '❤️ 4,282 new likes in the last hour', color: '#FF6B9D', delay: 5 },
  { text: '👥 You gained 312 followers today!', color: '#A3FF60', delay: 8 },
  { text: '📈 Engagement rate: 22.4% this week', color: '#60D4FF', delay: 11 },
];

// ========================================
// FLOATING ORBIT CARDS
// ========================================
const orbitCards = [
  { icon: '❤️', label: 'Likes', value: '+48.2K', sub: 'last 24h', color: '#FF6B9D', x: '-320px', y: '-80px', delay: 0.2, floatDur: 3.8 },
  { icon: '📈', label: 'Reach', value: '2.8M', sub: 'this month', color: '#60D4FF', x: '280px', y: '-60px', delay: 0.4, floatDur: 4.4 },
  { icon: '⚡', label: 'Engagement', value: '18.6%', sub: 'rate', color: '#FF9C60', x: '-300px', y: '140px', delay: 0.6, floatDur: 4.0 },
  { icon: '👥', label: 'Followers', value: '+4.2K', sub: 'this week', color: '#A3FF60', x: '260px', y: '160px', delay: 0.8, floatDur: 5.0 },
];

// ========================================
// TOAST NOTIFICATION
// ========================================
function Toast({ notification }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3500);
    }, 14000);

    const firstShow = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3500);
    }, notification.delay * 1000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(firstShow);
    };
  }, []);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, scale: visible ? 1 : 0.94 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        position: 'fixed',
        top: '80px',
        right: '24px',
        background: 'rgba(20,20,20,0.9)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${notification.color}30`,
        borderRadius: '14px',
        padding: '12px 18px',
        maxWidth: '260px',
        boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${notification.color}15`,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: notification.color, flexShrink: 0, boxShadow: `0 0 8px ${notification.color}` }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
          {notification.text}
        </span>
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function CinematicIPhoneHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 20 });

  const iphoneX = useTransform(springX, [-600, 600], [-12, 12]);
  const iphoneY = useTransform(springY, [-400, 400], [-8, 8]);
  const bgX = useTransform(springX, [-600, 600], [-30, 30]);
  const bgY = useTransform(springY, [-400, 400], [-18, 18]);
  const cardX = useTransform(springX, [-600, 600], [-6, 6]);
  const cardY = useTransform(springY, [-400, 400], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    // passive:true — prevents blocking the browser scroll thread
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── BACKGROUND SYSTEM ── */}

      {/* Giant outlined typography behind everything */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          x: bgX, y: bgY,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {['YOUR', 'CONTENT', 'GOES', 'VIRAL'].map((word, i) => (
          <div key={word} style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(5rem, 14vw, 16rem)',
            lineHeight: '0.9',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            color: 'transparent',
            display: 'block',
          }}>
            {word}
          </div>
        ))}
      </motion.div>

      {/* Primary orange glow — pure radial-gradient, no filter:blur */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle 55% at 50% 50%, rgba(255,156,96,0.16) 0%, rgba(255,80,0,0.07) 40%, transparent 70%)',
        zIndex: 1,
        animation: 'pulse-glow-intense 4s ease-in-out infinite',
      }} />

      {/* Purple accent glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '40%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(160,80,255,0.10) 0%, rgba(160,80,255,0.03) 45%, transparent 65%)',
        zIndex: 1,
      }} />

      {/* Blue accent */}
      <div style={{
        position: 'absolute', top: '55%', right: '20%',
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(60,180,255,0.08) 0%, rgba(60,180,255,0.02) 45%, transparent 65%)',
        zIndex: 1,
      }} />

      {/* Grid overlay */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, zIndex: 2 }} />
      <div className="noise-overlay" style={{ zIndex: 2 }} />

      {/* ── SECTION LABEL ── */}
      <div style={{
        position: 'absolute', top: '80px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="tag-orange"
        >
          <span style={{ fontSize: '7px' }}>●</span>
          THE SOCIAL MINDS EXPERIENCE
        </motion.div>
      </div>

      {/* ── CENTRAL IPHONE ── */}
      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* iPhone with parallax */}
        <motion.div
          style={{ x: iphoneX, y: iphoneY }}
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle ring around phone */}
          <div style={{
            position: 'absolute', inset: '-20px',
            borderRadius: '70px',
            border: '1px solid rgba(255,156,96,0.08)',
            zIndex: -1,
          }} />
          <div style={{
            position: 'absolute', inset: '-40px',
            borderRadius: '80px',
            border: '1px solid rgba(255,156,96,0.04)',
            zIndex: -1,
          }} />

          <IPhoneMockup size="xl" glowColor="#FF9C60">
            <ReelContent
              gradient="linear-gradient(180deg, #0a0020 0%, #1a0040 25%, #2a0060 50%, #FF3060 80%, #FF9C60 100%)"
              label="How We 10X Your Brand's Reach 🚀"
              plays="4.8M"
              likes="124K"
              comments="8.2K"
              shares="32K"
              username="@socialmindsin"
            />
          </IPhoneMockup>
        </motion.div>

        {/* ── FLOATING ORBIT CARDS ── */}
        {orbitCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              marginLeft: card.x,
              marginTop: card.y,
              transform: 'translate(-50%, -50%)',
              x: cardX, y: cardY,
              zIndex: 15,
            }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: card.floatDur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
              style={{
                background: 'rgba(10,10,10,0.90)',
                // Removed backdropFilter:blur(24px) — 4 animated floating cards
                // over black bg = 4 unnecessary compositor blur layers cycling continuously
                border: `1px solid ${card.color}25`,
                borderRadius: '20px',
                padding: '16px 20px',
                minWidth: '160px',
                boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px ${card.color}10, inset 0 1px 0 rgba(255,255,255,0.05)`,
                willChange: 'transform',
              }}
            >
              {/* Live indicator */}
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                width: '7px', height: '7px',
                borderRadius: '50%',
                background: card.color,
                boxShadow: `0 0 8px ${card.color}, 0 0 16px ${card.color}60`,
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '15px' }}>{card.icon}</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '9px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>{card.label}</span>
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '28px',
                color: card.color,
                lineHeight: 1,
                letterSpacing: '0.04em',
              }}>{card.value}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                color: 'rgba(255,255,255,0.25)',
                marginTop: '4px',
              }}>{card.sub}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM TEXT ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          position: 'absolute',
          bottom: '48px', left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.2)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Real results. Real growth. Real impact.
        </p>
        <a href="/contact" className="btn-primary">
          Get This Experience ↗
        </a>
      </motion.div>

      {/* Toast Notifications */}
      {notifications.map((notif, i) => (
        <Toast key={i} notification={notif} />
      ))}
    </section>
  );
}
