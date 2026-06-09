// ========================================
// HERO SECTION v5.0
// Premium two-column slice hero
// + scroll-driven Apple-style phone reveal (GSAP) — UNTOUCHED
// ========================================

import { useEffect, useRef, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IntroContext } from '../../App';
import './HeroSlice.css';


gsap.registerPlugin(ScrollTrigger);

// ─── Image slice data ─────────────────────────────────────────────────────────
// width: fraction of total right-panel width
// height: vh height of the slice
// offset: vertical shift (positive = down)
// bgPos: background-position to frame the most interesting area
const SLICES = [
  {
    id: 0,
    label: 'Analytics',
    src: '/hero/dashboard.webp',
    width: '22%',
    height: '72vh',
    offset: '6vh',
    bgPos: 'center 20%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 1,
    label: 'Production',
    src: '/hero/studio.webp',
    width: '18%',
    height: '55vh',
    offset: '16vh',
    bgPos: 'center 30%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 2,
    label: 'Brand Strategy',
    src: '/hero/strategy.webp',
    width: '24%',
    height: '78vh',
    offset: '6vh',
    bgPos: 'center 25%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 3,
    label: 'Growth',
    src: '/hero/analytics.webp',
    width: '18%',
    height: '60vh',
    offset: '20vh',
    bgPos: 'center 30%',
    borderRadius: '20px 20px 20px 20px',
  },
  {
    id: 4,
    label: 'Creative',
    src: '/hero/production.webp',
    width: '18%',
    height: '50vh',
    offset: '12vh',
    bgPos: 'center 35%',
    borderRadius: '20px 20px 20px 20px',
  },
];


// ─── Particle system (kept for scroll phase) ──────────────────────────────────
const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.35 + 0.08,
    color: Math.random() > 0.6 ? '#FF9C60' : Math.random() > 0.5 ? '#ffffff' : '#FFB888',
  }));

// ─── Phone Mockup (100% unchanged) ───────────────────────────────────────────
function PhoneMockup() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {/* LEFT SIDE BUTTONS */}
      <div style={{ position: 'absolute', left: '-3px', top: '17%', width: '3px', height: '28px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: '-3px', top: '26%', width: '3px', height: '52px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: '-3px', top: '38%', width: '3px', height: '52px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      {/* RIGHT SIDE BUTTON */}
      <div style={{ position: 'absolute', right: '-3px', top: '28%', width: '3px', height: '72px', borderRadius: '0 2px 2px 0', background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)', boxShadow: '1px 0 3px rgba(0,0,0,0.6), inset -1px 0 0 rgba(255,255,255,0.07)', zIndex: 5 }} />
      {/* PHONE FRAME */}
      <div style={{ width: 'clamp(260px, 30vw, 340px)', height: 'clamp(530px, 59vw, 660px)', borderRadius: '44px', background: 'linear-gradient(160deg, #242424 0%, #0d0d0d 45%, #1a1a1a 100%)', border: 'none', outline: 'none', boxShadow: `0 0 0 1.5px #2e2e2e, 0 0 0 2.5px rgba(255,255,255,0.07), 0 0 0 3.5px #1a1a1a, 0 40px 120px rgba(0,0,0,0.95), 0 0 80px rgba(255,156,96,0.10), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.5)`, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Glass shine */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '55%', height: '40%', borderRadius: '44px 0 60% 0', background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 30 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', borderRadius: '44px 44px 0 0', background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.18) 70%, transparent 95%)', pointerEvents: 'none', zIndex: 30 }} />
        {/* Dynamic Island */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '114px', height: '32px', background: '#000', borderRadius: '0 0 22px 22px', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04)' }}>
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #1e1e1e, #0a0a0a)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)', flexShrink: 0 }} />
          <div style={{ width: '52px', height: '7px', borderRadius: '4px', background: 'linear-gradient(90deg, #0d0d0d, #141414)', border: '1px solid rgba(255,255,255,0.04)' }} />
          <div style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#32D74B', boxShadow: '0 0 6px rgba(50,215,75,0.8), 0 0 12px rgba(50,215,75,0.4)', animation: 'notchGreenPulse 2.8s ease-in-out infinite', zIndex: 22 }} />
        </div>
        {/* Screen content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '36px 18px 0', marginBottom: '2px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.92)', letterSpacing: '0.02em' }}>9:41</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '10px' }}>
                {[4, 6, 8, 10].map((h, i) => (<div key={i} style={{ width: '3px', height: `${h}px`, borderRadius: '1px', background: i < 3 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }} />))}
              </div>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M6.5 8.5a1 1 0 1 1 0 .001z" fill="rgba(255,255,255,0.9)" /><path d="M4.2 6.8a3.2 3.2 0 0 1 4.6 0" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M2 4.6a6 6 0 0 1 9 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <div style={{ width: '22px', height: '11px', border: '1px solid rgba(255,255,255,0.55)', borderRadius: '3px', padding: '1.5px', position: 'relative' }}>
                  <div style={{ width: '72%', height: '100%', borderRadius: '1.5px', background: 'rgba(255,255,255,0.88)' }} />
                </div>
                <div style={{ width: '2px', height: '5px', background: 'rgba(255,255,255,0.45)', borderRadius: '0 1px 1px 0' }} />
              </div>
            </div>
          </div>
          {/* App content */}
          <div style={{ flex: 1, padding: '8px 14px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Dashboard</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", marginTop: '1px' }}>Growth OS</div>
              </div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF9C60, #FF7030)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', boxShadow: '0 0 14px rgba(255,156,96,0.5)' }}>⚡</div>
            </div>
            <div style={{ borderRadius: '18px', background: 'linear-gradient(135deg, rgba(255,156,96,0.12) 0%, rgba(255,112,48,0.06) 100%)', border: '1px solid rgba(255,156,96,0.2)', padding: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,156,96,0.15) 0%, transparent 70%)', filter: 'blur(10px)' }} />
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '4px' }}>Total Reach</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '34px', lineHeight: 1, background: 'linear-gradient(135deg, #FF9C60, #FFD4B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>2.8M</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '9px', color: '#4ade80', fontFamily: "'Space Grotesk', sans-serif" }}>↑ 24.6%</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', fontFamily: "'Space Grotesk', sans-serif" }}>this month</span>
              </div>
              <svg width="100%" height="28" viewBox="0 0 200 28" style={{ marginTop: '8px' }}>
                <defs><linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF9C60" stopOpacity="0.4" /><stop offset="100%" stopColor="#FF9C60" stopOpacity="1" /></linearGradient></defs>
                <polyline points="0,22 30,18 60,20 80,12 110,14 140,6 170,8 200,2" fill="none" stroke="url(#sparkGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="200" cy="2" r="3" fill="#FF9C60" />
              </svg>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[{ label: 'Engagement', value: '18.6%', icon: '📈', color: '#60D4FF' }, { label: 'New Followers', value: '+4.2K', icon: '👥', color: '#A3FF60' }].map((s) => (
                <div key={s.label} style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '10px' }}>
                  <div style={{ fontSize: '11px', marginBottom: '3px' }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.28)', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '6px' }}>Top Reels</div>
              <div style={{ display: 'flex', gap: '7px' }}>
                {[{ bg: 'linear-gradient(135deg, #FF9C60, #FF4500)', views: '840K', emoji: '🔥' }, { bg: 'linear-gradient(135deg, #A855F7, #6366F1)', views: '1.2M', emoji: '✨' }, { bg: 'linear-gradient(135deg, #0EA5E9, #06B6D4)', views: '620K', emoji: '🚀' }].map((r, i) => (
                  <div key={i} style={{ flex: 1, aspectRatio: '9/16', borderRadius: '10px', background: r.bg, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 5px', overflow: 'hidden' }}>
                    <div style={{ fontSize: '14px', textAlign: 'center' }}>{r.emoji}</div>
                    <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '2px 4px', fontSize: '7px', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center', fontWeight: 700 }}>{r.views}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, rgba(255,156,96,0.2), rgba(255,156,96,0.08))', border: '1px solid rgba(255,156,96,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>📊</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Brand Campaign Q2</div>
                <div style={{ marginTop: '4px', height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #FF9C60, #FFD4B8)' }} />
                </div>
              </div>
              <div style={{ fontSize: '9px', color: '#FF9C60', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, flexShrink: 0 }}>72%</div>
            </div>
          </div>
          <div style={{ height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '8px' }}>
            <div style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.22)', boxShadow: '0 0 4px rgba(255,255,255,0.1)' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '44px', background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px)', pointerEvents: 'none', zIndex: 10 }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '44px', background: 'radial-gradient(ellipse at 50% 0%, transparent 60%, rgba(0,0,0,0.35) 100%)', pointerEvents: 'none', zIndex: 11 }} />
      </div>
    </div>
  );
}

// ─── Left Panel — White theme ─────────────────────────────────────────────────
function LeftPanel({ panelRef }) {
  return (
    <div
      ref={panelRef}
      style={{ position: 'absolute', left: 'clamp(28px, 5vw, 72px)', top: '50%', transform: 'translateY(-50%)', width: 'clamp(240px, 24vw, 340px)', zIndex: 14, opacity: 0, willChange: 'transform, opacity', display: 'flex', flexDirection: 'column', gap: '0px' }}
      data-panel="left"
    >
      <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #FF9C60, #FF7030)', borderRadius: '1px', marginBottom: '22px', boxShadow: '0 0 10px rgba(255,156,96,0.4)' }} />
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', marginBottom: '20px' }}>
        <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF9C60', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 8px rgba(255,156,96,0.7)' }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: '#FF7030', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>Premium Social Agency</span>
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 3.4vw, 52px)', lineHeight: 1.0, color: '#0a0a0a', letterSpacing: '0.02em', marginBottom: '20px' }}>
        Built for brands<br />that demand{' '}
        <span style={{ color: '#FF7030' }}>attention.</span>
      </div>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.1vw, 14px)', color: 'rgba(10,10,10,0.50)', lineHeight: 1.75, marginBottom: '28px', letterSpacing: '0.01em', maxWidth: '300px' }}>
        Strategy-first content systems engineered for growth. We don't just post — we architect digital presence that converts.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
        {['Content Strategy', 'Reel Mastery', 'Brand Scaling'].map((tag) => (
          <span key={tag} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: 'rgba(10,10,10,0.50)', padding: '5px 12px', background: 'rgba(10,10,10,0.04)', border: '1px solid rgba(10,10,10,0.10)', borderRadius: '100px', letterSpacing: '0.09em', textTransform: 'uppercase' }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        {[{ val: '50+', lbl: 'Brands Scaled' }, { val: '10M+', lbl: 'Views Generated' }, { val: '4.9★', lbl: 'Client Rating' }].map((s) => (
          <div key={s.lbl}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(24px, 2.4vw, 36px)', color: '#FF7030', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(10,10,10,0.35)', textTransform: 'uppercase', letterSpacing: '0.11em', marginTop: '4px' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Right Panel — White theme ────────────────────────────────────────────────
function RightPanel({ panelRef }) {
  const strips = [
    { label: 'Total Reach',  value: '+2.8M',  unit: 'audience',     w: '100%' },
    { label: 'Engagement',   value: '18.6%',  unit: 'avg rate',     w: '82%'  },
    { label: 'Viral Reels',  value: '47',     unit: 'this quarter', w: '90%'  },
    { label: 'Followers',    value: '+4.2K',  unit: 'per week',     w: '74%'  },
    { label: 'Performance',  value: '9.8',    unit: 'score / 10',   w: '88%'  },
  ];
  const waveBars = [3,6,9,14,10,7,12,16,8,5,11,15,9,6,13,10,4,8,12,7];

  return (
    <div ref={panelRef} data-panel="right" style={{ position: 'absolute', right: 'clamp(20px, 5vw, 68px)', top: '50%', transform: 'translateY(-50%)', width: 'clamp(210px, 21vw, 280px)', zIndex: 14, opacity: 0, willChange: 'transform, opacity', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <motion.div animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF9C60', boxShadow: '0 0 8px rgba(255,156,96,0.9)', flexShrink: 0 }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: '#FF7030', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>Live Social Signals</span>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '28px', marginBottom: '6px' }}>
        <div style={{ position: 'absolute', left: 0, top: '50%', width: '85%', height: '1px', background: 'linear-gradient(90deg, rgba(255,156,96,0.35), rgba(255,156,96,0.06))' }} />
        <motion.div animate={{ left: ['0%', '80%', '0%'] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#FF9C60', boxShadow: '0 0 8px rgba(255,156,96,0.9)' }} />
        {[0, '40%', '80%'].map((l, i) => (<div key={i} style={{ position: 'absolute', left: l, top: '50%', transform: 'translateY(-50%)', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,156,96,0.4)' }} />))}
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: '4px', bottom: '4px', width: '1px', background: 'linear-gradient(180deg, rgba(255,156,96,0.4), rgba(255,156,96,0.08) 60%, transparent)' }} />
        {strips.map((s) => (
          <div key={s.label} style={{ width: s.w, display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px 9px 14px', background: 'rgba(10,10,10,0.03)', border: '1px solid rgba(10,10,10,0.07)', borderLeft: '2px solid rgba(255,156,96,0.5)', borderRadius: '0 10px 10px 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', background: 'linear-gradient(90deg, rgba(255,156,96,0.05), transparent)', pointerEvents: 'none' }} />
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(15px, 1.5vw, 20px)', color: '#0a0a0a', letterSpacing: '0.04em', lineHeight: 1, flexShrink: 0 }}>{s.value}</div>
            <div style={{ width: '1px', height: '18px', background: 'rgba(10,10,10,0.10)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(10,10,10,0.60)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(10,10,10,0.32)', letterSpacing: '0.05em', marginTop: '1px' }}>{s.unit}</div>
            </div>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FF9C60', boxShadow: '0 0 5px rgba(255,156,96,0.7)', flexShrink: 0 }} />
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', width: '100%', height: '28px', marginTop: '6px' }}>
        <div style={{ position: 'absolute', left: 0, top: '50%', width: '70%', height: '1px', background: 'linear-gradient(90deg, rgba(255,156,96,0.25), transparent)' }} />
        <motion.div animate={{ left: ['0%', '65%', '0%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,156,96,0.7)', boxShadow: '0 0 6px rgba(255,156,96,0.6)' }} />
      </div>
      <div style={{ width: '100%', marginTop: '4px', padding: '10px 12px', background: 'rgba(10,10,10,0.03)', border: '1px solid rgba(10,10,10,0.07)', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(10,10,10,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Signal Activity</span>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: '#22c55e', fontWeight: 700, letterSpacing: '0.1em' }}>● LIVE</motion.span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2.5px', height: '24px' }}>
          {waveBars.map((h, i) => (
            <motion.div key={i} animate={{ opacity: [0.3, 0.3 + (h / 20) * 0.7, 0.3] }} transition={{ duration: 1.8 + (i % 5) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }} style={{ flex: 1, height: `${h}px`, borderRadius: '1px', background: `rgba(255,156,96,${0.40 + (h / 20) * 0.55})`, minHeight: '3px', willChange: 'opacity' }} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
        <motion.div animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
        <div style={{ flex: 1, height: '1px', background: 'rgba(10,10,10,0.08)' }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(10,10,10,0.30)', letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0 }}>Growth Engine Online</span>
      </div>
      <div style={{ position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center center', fontFamily: "'Bebas Neue', sans-serif", fontSize: '9px', color: 'rgba(10,10,10,0.04)', letterSpacing: '0.3em', textTransform: 'uppercase', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
        Social Intelligence System
      </div>
    </div>
  );
}

// ─── Vertical Image Slice Composition ────────────────────────────────────────
// No hover zoom — slices are static editorial composition panels
function SliceComposition() {
  const showIntro = useContext(IntroContext);

  return (
    <div className="hero-slices-wrap">
      {SLICES.map((slice, i) => (
        <motion.div
          key={slice.id}
          className="hero-slice"
          style={{
            width: slice.width,
            height: slice.height,
            marginTop: slice.offset,
            backgroundImage: `url(${slice.src})`,
            backgroundSize: 'cover',
            backgroundPosition: slice.bgPos,
            borderRadius: slice.borderRadius,
          }}
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={showIntro ? { opacity: 0, y: 32, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5 + i * 0.25, // 0.5s base pause + 0.25s stagger
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}

// ─── Trust / Stat Pills ───────────────────────────────────────────────────────
const STATS = [
  { value: '50+',  label: 'Brands Scaled' },
  { value: '12M+', label: 'Views Generated' },
  { value: '415%', label: 'Avg. Growth' },
];

// ─── HERO SECTION MAIN ────────────────────────────────────────────────────────
export default function HeroSection() {
  const showIntro = useContext(IntroContext);
  const wrapperRef    = useRef(null);
  const stickyRef     = useRef(null);
  const textRef       = useRef(null);   // fades out on scroll — now wraps two-col layout
  const phoneRef      = useRef(null);
  const bgBlurRef     = useRef(null);
  const ctaRef        = useRef(null);   // kept for GSAP (empty/hidden, still targeted)
  const leftPanelRef  = useRef(null);
  const rightPanelRef = useRef(null);

  const [particles] = useState(() => generateParticles(20));

  // Mouse parallax (unchanged)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const glowX   = useTransform(springX, [-600, 600], [-40, 40]);
  const glowY   = useTransform(springY, [-400, 400], [-25, 25]);

  // ── GSAP SCROLL TIMELINE (100% unchanged) ──────────────────────────────────
  useEffect(() => {
    let idleFloat = null;

    const ctx = gsap.context(() => {
      const ambientGlow = document.getElementById('phone-ambient-glow');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
          onComplete: () => {
            idleFloat = gsap.to(phoneRef.current, {
              y: -18, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1,
            });
          },
          onReverseComplete: () => {
            if (idleFloat) { idleFloat.kill(); idleFloat = null; }
          },
        },
      });

      // PHASE 1 (0–25%): two-col hero fades back
      tl.to(textRef.current, {
        scale: 1.03, opacity: 0, y: -40,
        duration: 0.25, ease: 'none',
      }, 0);

      tl.to(ctaRef.current, {
        opacity: 0, y: -24,
        duration: 0.2, ease: 'none',
      }, 0);

      tl.to(bgBlurRef.current, {
        opacity: 1, duration: 0.22, ease: 'none',
      }, 0);

      // PHASE 2 (20–55%): phone rises
      tl.fromTo(phoneRef.current,
        { opacity: 0, scale: 0.6, y: 160 },
        { opacity: 1, scale: 1,   y: -28, duration: 0.38, ease: 'none' },
        0.18
      );

      if (ambientGlow) {
        tl.fromTo(ambientGlow,
          { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'none' }, 0.24
        );
      }

      // PHASE 3: phone holds
      tl.to(phoneRef.current, { y: -28, duration: 0.1, ease: 'none' }, 0.55);

      // PHASE 4: left panel slides in
      tl.fromTo(leftPanelRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'none' },
        0.60
      );

      // PHASE 5: right panel slides in
      tl.fromTo(rightPanelRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'none' },
        0.65
      );

      // PHASE 6: hold beat
      tl.to({}, { duration: 0.1 }, 0.90);
    }, wrapperRef);

    // Mouse parallax
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      if (idleFloat) idleFloat.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // 400vh scroll canvas — unchanged
    <div ref={wrapperRef} style={{ position: 'relative', height: '400vh', background: '#ffffff' }}>

      {/* STICKY SHELL — unchanged */}
      <section
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* ── WHITE SCROLL SECTION BACKGROUND LAYERS ── */}
        {/* Very subtle light grid — barely visible on white */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.06, zIndex: 0 }} />

        {/* Warm orange ambient glow — works on white too */}
        <motion.div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.08) 0%, transparent 60%)',
          x: glowX, y: glowY, zIndex: 0, willChange: 'transform',
        }} />

        {/* Subtle bottom warmth */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(0deg, rgba(255,156,96,0.03) 0%, transparent 100%)', zIndex: 0 }} />

        {/* Particles — orange only, no white (invisible on white bg) */}
        {particles.filter(p => p.color !== '#ffffff').map((p) => (
          <motion.div key={p.id}
            style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: p.color, zIndex: 1, willChange: 'transform, opacity' }}
            animate={{ y: [0, -60, 0], opacity: [0, p.opacity * 0.4, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* BG OVERLAY — fades in on scroll to slightly dim the white bg
            as the phone rises; very subtle on white (#f8f8f8 instead of black) */}
        <div ref={bgBlurRef} style={{
          position: 'absolute', inset: 0,
          background: 'rgba(245,245,245,0.92)',
          opacity: 0, zIndex: 3, pointerEvents: 'none', willChange: 'opacity',
        }} />

        {/* ══════════════════════════════════════════════════════════════════
            NEW HERO CONTENT — two-column slice layout
            GSAP targets textRef and ctaRef (same refs, same fade-out behavior).
            The dark background becomes white; on scroll the whole block fades
            out exactly as the old centered text did.
        ══════════════════════════════════════════════════════════════════ */}
        <div
          ref={textRef}
          className="hero-twocol"
          style={{ willChange: 'transform, opacity', transformOrigin: 'center center' }}
        >
          <div className="hero-twocol-inner">

            {/* ── LEFT COLUMN ── */}
            <div className="hero-left">

              {/* Agency badge */}
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 16 }}
                animate={showIntro ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero-badge-dot" />
                Premium Digital Growth Agency
              </motion.div>

              {/* Main headline */}
              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 30 }}
                animate={showIntro ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero-hl-black">WE MAKE</span>
                <span className="hero-hl-black">BRANDS</span>
                <span className="hero-hl-orange">IMPOSSIBLE</span>
                <span className="hero-hl-black">TO IGNORE</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={showIntro ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                We combine strategy, content creation, production and performance
                marketing to transform attention into measurable business growth.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="hero-ctas"
                initial={{ opacity: 0, y: 18 }}
                animate={showIntro ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/contact" className="hero-btn-primary">
                  Start Growing Today
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/services" className="hero-btn-ghost">
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust stats */}
              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 14 }}
                animate={showIntro ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {STATS.map((s, i) => (
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-val">{s.value}</span>
                    <span className="hero-stat-lbl">{s.label}</span>
                    {i < STATS.length - 1 && <div className="hero-stat-div" />}
                  </div>
                ))}
              </motion.div>

            </div>{/* /hero-left */}

            {/* ── RIGHT COLUMN — slice composition ── */}
            <div className="hero-right">
              <SliceComposition />
            </div>

          </div>{/* /hero-twocol-inner */}
        </div>{/* /hero-twocol */}

        {/* ctaRef — empty div kept so GSAP timeline target is valid */}
        <div ref={ctaRef} style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }} />

        {/* ── PHONE LAYER (100% unchanged) ── */}
        <div ref={phoneRef} style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 15, opacity: 0, willChange: 'transform, opacity',
        }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,156,96,0.14) 0%, transparent 65%)', zIndex: -1 }} />
          <div style={{ position: 'absolute', top: 0, left: '10%', width: '40%', height: '100%', borderRadius: '44px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)', pointerEvents: 'none', zIndex: 20 }} />
          <PhoneMockup />
        </div>

        {/* ── LEFT PANEL (unchanged) ── */}
        <LeftPanel panelRef={leftPanelRef} />

        {/* ── RIGHT PANEL (unchanged) ── */}
        <RightPanel panelRef={rightPanelRef} />

        {/* AMBIENT GLOW (unchanged) */}
        <div id="phone-ambient-glow" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,156,96,0.10) 0%, rgba(255,156,96,0.03) 45%, transparent 70%)',
          zIndex: 4, pointerEvents: 'none', opacity: 0, willChange: 'opacity',
        }} />

      </section>
    </div>
  );
}
