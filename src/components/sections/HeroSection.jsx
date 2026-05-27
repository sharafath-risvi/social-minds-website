// ========================================
// HERO SECTION v4.0
// Cinematic scroll-driven Apple-style phone reveal
// + Left/Right panel reveal after phone settles
// GSAP ScrollTrigger scrub — NO layout reflow
// ========================================

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ========================================
// PARTICLE SYSTEM DATA
// ========================================
// Reduced to 20 particles — same visual density, half the composite layers
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

// ========================================
// PHONE MOCKUP — Cinematic Social Dashboard
// ========================================
function PhoneMockup() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>

      {/* ── LEFT SIDE BUTTONS ── */}
      {/* Action button (top) */}
      <div style={{
        position: 'absolute',
        left: '-3px',
        top: '17%',
        width: '3px',
        height: '28px',
        borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)',
        zIndex: 5,
      }} />
      {/* Volume Up */}
      <div style={{
        position: 'absolute',
        left: '-3px',
        top: '26%',
        width: '3px',
        height: '52px',
        borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)',
        zIndex: 5,
      }} />
      {/* Volume Down */}
      <div style={{
        position: 'absolute',
        left: '-3px',
        top: '38%',
        width: '3px',
        height: '52px',
        borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.07)',
        zIndex: 5,
      }} />

      {/* ── RIGHT SIDE BUTTON — Power ── */}
      <div style={{
        position: 'absolute',
        right: '-3px',
        top: '28%',
        width: '3px',
        height: '72px',
        borderRadius: '0 2px 2px 0',
        background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 40%, #333 100%)',
        boxShadow: '1px 0 3px rgba(0,0,0,0.6), inset -1px 0 0 rgba(255,255,255,0.07)',
        zIndex: 5,
      }} />

      {/* ── PHONE FRAME ── */}
      <div
        style={{
          width: 'clamp(260px, 30vw, 340px)',
          height: 'clamp(530px, 59vw, 660px)',
          borderRadius: '44px',
          // Titanium-style metallic frame
          background: 'linear-gradient(160deg, #242424 0%, #0d0d0d 45%, #1a1a1a 100%)',
          border: 'none',
          outline: 'none',
          // Layered frame shadows for depth + metallic edge
          boxShadow: `
            0 0 0 1.5px #2e2e2e,
            0 0 0 2.5px rgba(255,255,255,0.07),
            0 0 0 3.5px #1a1a1a,
            0 40px 120px rgba(0,0,0,0.95),
            0 0 80px rgba(255,156,96,0.10),
            inset 0 1px 0 rgba(255,255,255,0.10),
            inset 0 -1px 0 rgba(0,0,0,0.5)
          `,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── GLASS SHINE — top-left specular reflection ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '55%', height: '40%',
          borderRadius: '44px 0 60% 0',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 30,
        }} />

        {/* ── EDGE METALLIC HIGHLIGHT — top arc ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          borderRadius: '44px 44px 0 0',
          background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.18) 70%, transparent 95%)',
          pointerEvents: 'none',
          zIndex: 30,
        }} />

        {/* ── DYNAMIC ISLAND / NOTCH ── */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '114px', height: '32px',
          background: '#000',
          borderRadius: '0 0 22px 22px',
          zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px',
          boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04)',
        }}>
          {/* Camera circle */}
          <div style={{
            width: '11px', height: '11px', borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #1e1e1e, #0a0a0a)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
            flexShrink: 0,
          }} />
          {/* Face ID pill */}
          <div style={{
            width: '52px', height: '7px', borderRadius: '4px',
            background: 'linear-gradient(90deg, #0d0d0d, #141414)',
            border: '1px solid rgba(255,255,255,0.04)',
          }} />
          {/* Green privacy indicator — RIGHT side */}
          <div style={{
            position: 'absolute',
            right: '9px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '5px', height: '5px',
            borderRadius: '50%',
            background: '#32D74B',
            boxShadow: '0 0 6px rgba(50,215,75,0.8), 0 0 12px rgba(50,215,75,0.4)',
            animation: 'notchGreenPulse 2.8s ease-in-out infinite',
            zIndex: 22,
          }} />
        </div>

        {/* ── SCREEN CONTENT ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        }}>

          {/* iOS STATUS BAR */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '36px 18px 0',
            marginBottom: '2px',
          }}>
            {/* Time */}
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.92)',
              letterSpacing: '0.02em',
            }}>9:41</div>

            {/* Right icons — signal, wifi, battery */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {/* Cellular signal bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '10px' }}>
                {[4, 6, 8, 10].map((h, i) => (
                  <div key={i} style={{
                    width: '3px',
                    height: `${h}px`,
                    borderRadius: '1px',
                    background: i < 3 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  }} />
                ))}
              </div>
              {/* WiFi icon (SVG) */}
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M6.5 8.5a1 1 0 1 1 0 .001z" fill="rgba(255,255,255,0.9)" />
                <path d="M4.2 6.8a3.2 3.2 0 0 1 4.6 0" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                <path d="M2 4.6a6 6 0 0 1 9 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </svg>
              {/* Battery icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <div style={{
                  width: '22px', height: '11px',
                  border: '1px solid rgba(255,255,255,0.55)',
                  borderRadius: '3px',
                  padding: '1.5px',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '72%', height: '100%',
                    borderRadius: '1.5px',
                    background: 'rgba(255,255,255,0.88)',
                  }} />
                </div>
                {/* Battery nub */}
                <div style={{
                  width: '2px', height: '5px',
                  background: 'rgba(255,255,255,0.45)',
                  borderRadius: '0 1px 1px 0',
                }} />
              </div>
            </div>
          </div>

          {/* App content (unchanged) */}
          <div style={{
            flex: 1,
            padding: '8px 14px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            {/* Header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Dashboard</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", marginTop: '1px' }}>Growth OS</div>
              </div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF9C60, #FF7030)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', boxShadow: '0 0 14px rgba(255,156,96,0.5)' }}>⚡</div>
            </div>

            {/* Main metric card */}
            <div style={{ borderRadius: '18px', background: 'linear-gradient(135deg, rgba(255,156,96,0.12) 0%, rgba(255,112,48,0.06) 100%)', border: '1px solid rgba(255,156,96,0.2)', padding: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,156,96,0.15) 0%, transparent 70%)', filter: 'blur(10px)' }} />
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '4px' }}>Total Reach</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '34px', lineHeight: 1, background: 'linear-gradient(135deg, #FF9C60, #FFD4B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>2.8M</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '9px', color: '#4ade80', fontFamily: "'Space Grotesk', sans-serif" }}>↑ 24.6%</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', fontFamily: "'Space Grotesk', sans-serif" }}>this month</span>
              </div>
              <svg width="100%" height="28" viewBox="0 0 200 28" style={{ marginTop: '8px' }}>
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF9C60" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FF9C60" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <polyline points="0,22 30,18 60,20 80,12 110,14 140,6 170,8 200,2" fill="none" stroke="url(#sparkGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="200" cy="2" r="3" fill="#FF9C60" />
              </svg>
            </div>

            {/* Two mini stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { label: 'Engagement', value: '18.6%', icon: '📈', color: '#60D4FF' },
                { label: 'New Followers', value: '+4.2K', icon: '👥', color: '#A3FF60' },
              ].map((s) => (
                <div key={s.label} style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '10px' }}>
                  <div style={{ fontSize: '11px', marginBottom: '3px' }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.28)', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Reel posts row */}
            <div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '6px' }}>Top Reels</div>
              <div style={{ display: 'flex', gap: '7px' }}>
                {[
                  { bg: 'linear-gradient(135deg, #FF9C60, #FF4500)', views: '840K', emoji: '🔥' },
                  { bg: 'linear-gradient(135deg, #A855F7, #6366F1)', views: '1.2M', emoji: '✨' },
                  { bg: 'linear-gradient(135deg, #0EA5E9, #06B6D4)', views: '620K', emoji: '🚀' },
                ].map((r, i) => (
                  <div key={i} style={{ flex: 1, aspectRatio: '9/16', borderRadius: '10px', background: r.bg, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 5px', overflow: 'hidden' }}>
                    <div style={{ fontSize: '14px', textAlign: 'center' }}>{r.emoji}</div>
                    <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '2px 4px', fontSize: '7px', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center', fontWeight: 700 }}>{r.views}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active campaign pill */}
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

          {/* Home indicator */}
          <div style={{ height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '8px' }}>
            <div style={{
              width: '120px', height: '4px', borderRadius: '2px',
              background: 'rgba(255,255,255,0.22)',
              boxShadow: '0 0 4px rgba(255,255,255,0.1)',
            }} />
          </div>
        </div>

        {/* ── SCANLINE overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '44px',
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px)',
          pointerEvents: 'none', zIndex: 10,
        }} />

        {/* ── INNER SCREEN DEPTH VIGNETTE ── */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '44px',
          background: 'radial-gradient(ellipse at 50% 0%, transparent 60%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none', zIndex: 11,
        }} />
      </div>
    </div>
  );
}

// ========================================
// LEFT PANEL — Brand Story Card
// ========================================
function LeftPanel({ panelRef }) {
  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        left: 'clamp(28px, 5vw, 72px)',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'clamp(240px, 24vw, 340px)',
        zIndex: 14,
        opacity: 0,          // GSAP controls
        willChange: 'transform, opacity',
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
      }}
      data-panel="left"
    >
      {/* Thin orange top accent line — editorial anchor */}
      <div style={{
        width: '40px',
        height: '2px',
        background: 'linear-gradient(90deg, #FF9C60, #FF7030)',
        borderRadius: '1px',
        marginBottom: '22px',
        boxShadow: '0 0 10px rgba(255,156,96,0.5)',
      }} />

      {/* Label pill — floats freely, no card */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        marginBottom: '20px',
      }}>
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#FF9C60',
            display: 'inline-block', flexShrink: 0,
            boxShadow: '0 0 8px rgba(255,156,96,0.7)',
          }}
        />
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '10px',
          color: 'rgba(255,156,96,0.8)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          Premium Social Agency
        </span>
      </div>

      {/* Main heading — large, cinematic, open */}
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(32px, 3.4vw, 52px)',
        lineHeight: 1.0,
        color: '#fff',
        letterSpacing: '0.02em',
        marginBottom: '20px',
      }}>
        Built for brands<br />that demand{' '}
        <span style={{
          background: 'linear-gradient(135deg, #FF9C60 0%, #FFD4B8 50%, #FF7030 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 20px rgba(255,156,96,0.4))',
        }}>
          attention.
        </span>
      </div>

      {/* Body copy — comfortable, premium line-height */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(12px, 1.1vw, 14px)',
        color: 'rgba(255,255,255,0.40)',
        lineHeight: 1.75,
        marginBottom: '28px',
        letterSpacing: '0.01em',
        maxWidth: '300px',
      }}>
        Strategy-first content systems engineered for growth. We don't just post — we architect digital presence that converts.
      </p>

      {/* Service tags — minimal pills, no card background */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '32px',
      }}>
        {['Content Strategy', 'Reel Mastery', 'Brand Scaling'].map((tag) => (
          <span key={tag} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.45)',
            padding: '5px 12px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: '100px',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
          }}>{tag}</span>
        ))}
      </div>

      {/* Stats — open, no border-top card treatment */}
      <div style={{
        display: 'flex',
        gap: '32px',
      }}>
        {[
          { val: '50+',  lbl: 'Brands Scaled' },
          { val: '10M+', lbl: 'Views Generated' },
          { val: '4.9★', lbl: 'Client Rating' },
        ].map((s) => (
          <div key={s.lbl}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(24px, 2.4vw, 36px)',
              background: 'linear-gradient(135deg, #FF9C60, #FFD4B8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}>{s.val}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '9px',
              color: 'rgba(255,255,255,0.28)',
              textTransform: 'uppercase',
              letterSpacing: '0.11em',
              marginTop: '4px',
            }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// RIGHT PANEL — Intelligence System Cards
// ========================================
function RightPanel({ panelRef }) {
  const strips = [
    { label: 'Total Reach',    value: '+2.8M',   unit: 'audience',    w: '100%', delay: 0    },
    { label: 'Engagement',     value: '18.6%',   unit: 'avg rate',    w: '82%',  delay: 0.15 },
    { label: 'Viral Reels',    value: '47',      unit: 'this quarter',w: '90%',  delay: 0.3  },
    { label: 'Followers',      value: '+4.2K',   unit: 'per week',    w: '74%',  delay: 0.45 },
    { label: 'Performance',    value: '9.8',     unit: 'score / 10',  w: '88%',  delay: 0.6  },
  ];

  // Waveform bar heights — cinematic randomish pattern
  const waveBars = [3,6,9,14,10,7,12,16,8,5,11,15,9,6,13,10,4,8,12,7];

  return (
    <div
      ref={panelRef}
      data-panel="right"
      style={{
        position: 'absolute',
        right: 'clamp(20px, 5vw, 68px)',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'clamp(210px, 21vw, 280px)',
        zIndex: 14,
        opacity: 0,           // GSAP controls
        willChange: 'transform, opacity',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0px',
      }}
    >
      {/* ── LIVE SIGNAL LABEL ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        marginBottom: '20px',
      }}>
        <motion.div
          animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#FF9C60',
            boxShadow: '0 0 8px rgba(255,156,96,0.9)',
            flexShrink: 0,
          }}
        />
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '9px',
          color: 'rgba(255,156,96,0.65)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>Live Social Signals</span>
      </div>

      {/* ── CONNECTOR LINE + DOT SYSTEM (top) ── */}
      <div style={{ position: 'relative', width: '100%', height: '28px', marginBottom: '6px' }}>
        {/* Horizontal connector */}
        <div style={{
          position: 'absolute', left: 0, top: '50%',
          width: '85%', height: '1px',
          background: 'linear-gradient(90deg, rgba(255,156,96,0.35), rgba(255,156,96,0.06))',
        }} />
        {/* Traveling pulse dot */}
        <motion.div
          animate={{ left: ['0%', '80%', '0%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '50%',
            transform: 'translateY(-50%)',
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#FF9C60',
            boxShadow: '0 0 8px rgba(255,156,96,0.9)',
          }}
        />
        {/* Static anchor dots */}
        {[0, '40%', '80%'].map((l, i) => (
          <div key={i} style={{
            position: 'absolute', left: l, top: '50%',
            transform: 'translateY(-50%)',
            width: '3px', height: '3px', borderRadius: '50%',
            background: 'rgba(255,156,96,0.4)',
          }} />
        ))}
      </div>

      {/* ── FLOATING METRIC STRIPS ── */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>

        {/* Vertical left accent line connecting strips */}
        <div style={{
          position: 'absolute', left: 0, top: '4px', bottom: '4px',
          width: '1px',
          background: 'linear-gradient(180deg, rgba(255,156,96,0.3), rgba(255,156,96,0.06) 60%, transparent)',
        }} />

        {strips.map((s, i) => (
          <motion.div
            key={s.label}
            animate={{ y: [0, i % 2 === 0 ? -4 : -7, 0] }}
            transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
            style={{
              width: s.w,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 12px 9px 14px',
              // No backdropFilter — eliminates 5 concurrent GPU blur composites
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeft: '1px solid rgba(255,156,96,0.2)',
              borderRadius: '0 10px 10px 0',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'transform',
            }}
          >
            {/* Subtle inner glow on strip hover-feel */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '30%',
              background: 'linear-gradient(90deg, rgba(255,156,96,0.04), transparent)',
              pointerEvents: 'none',
            }} />

            {/* Value */}
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.92)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              flexShrink: 0,
            }}>{s.value}</div>

            {/* Divider */}
            <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

            {/* Labels stacked */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '9px',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{s.label}</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '8px',
                color: 'rgba(255,255,255,0.22)',
                letterSpacing: '0.05em',
                marginTop: '1px',
              }}>{s.unit}</div>
            </div>

            {/* Right micro dot indicator */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8 + i * 0.3, repeat: Infinity }}
              style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: '#FF9C60',
                boxShadow: '0 0 5px rgba(255,156,96,0.7)',
                flexShrink: 0,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── CONNECTOR LINE (bottom) ── */}
      <div style={{ position: 'relative', width: '100%', height: '28px', marginTop: '6px' }}>
        <div style={{
          position: 'absolute', left: 0, top: '50%',
          width: '70%', height: '1px',
          background: 'linear-gradient(90deg, rgba(255,156,96,0.25), transparent)',
        }} />
        <motion.div
          animate={{ left: ['0%', '65%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{
            position: 'absolute', top: '50%',
            transform: 'translateY(-50%)',
            width: '4px', height: '4px', borderRadius: '50%',
            background: 'rgba(255,156,96,0.7)',
            boxShadow: '0 0 6px rgba(255,156,96,0.6)',
          }}
        />
      </div>

      {/* ── LIVE WAVEFORM VISUALIZER ── */}
      <div style={{
        width: '100%',
        marginTop: '4px',
        padding: '10px 12px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Signal Activity</span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: '#4ade80', fontWeight: 700, letterSpacing: '0.1em' }}
          >● LIVE</motion.span>
        </div>
        {/* Waveform — animate opacity instead of height to avoid layout reflow */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2.5px', height: '24px' }}>
          {waveBars.map((h, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 0.3 + (h / 20) * 0.7, 0.3] }}
              transition={{ duration: 0.9 + (i % 5) * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
              style={{
                flex: 1,
                height: `${h}px`,
                borderRadius: '1px',
                background: `rgba(255,156,96,${0.35 + (h / 20) * 0.55})`,
                minHeight: '3px',
                willChange: 'opacity',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── SYSTEM STATUS LINE ── */}
      <div style={{
        marginTop: '14px',
        display: 'flex', alignItems: 'center', gap: '8px',
        width: '100%',
      }}>
        <motion.div
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', flexShrink: 0, boxShadow: '0 0 6px rgba(74,222,128,0.7)' }}
        />
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0 }}>Growth Engine Online</span>
      </div>

      {/* ── VERTICAL WATERMARK TEXT ── */}
      <div style={{
        position: 'absolute',
        right: '-8px',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'center center',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '9px',
        color: 'rgba(255,255,255,0.05)',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        Social Intelligence System
      </div>
    </div>
  );
}

// ========================================
// HERO SECTION MAIN
// ========================================
export default function HeroSection() {
  const wrapperRef    = useRef(null);  // 400vh scroll canvas
  const stickyRef     = useRef(null);  // sticky inner container
  const textRef       = useRef(null);  // headline group
  const phoneRef      = useRef(null);  // phone group
  const bgBlurRef     = useRef(null);  // bg blur overlay
  const ctaRef        = useRef(null);  // cta + tagline group
  const leftPanelRef  = useRef(null);  // left brand card
  const rightPanelRef = useRef(null);  // right metrics panel

  const [particles] = useState(() => generateParticles(20));

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const glowX   = useTransform(springX, [-600, 600], [-40, 40]);
  const glowY   = useTransform(springY, [-400, 400], [-25, 25]);
  const layer1X = useTransform(springX, [-600, 600], [-20, 20]);
  const layer1Y = useTransform(springY, [-400, 400], [-14, 14]);

  // ── GSAP SCROLL TIMELINE ──
  useEffect(() => {
    let idleFloat = null;

    const ctx = gsap.context(() => {
      const ambientGlow = document.getElementById('phone-ambient-glow');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,   // ↓ from 1.2 — halves lag buffer for snappier scrub
          invalidateOnRefresh: true,
          onComplete: () => {
            idleFloat = gsap.to(phoneRef.current, {
              y: -42,
              rotation: 0.5,
              duration: 3,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
            });
          },
          onReverseComplete: () => {
            if (idleFloat) { idleFloat.kill(); idleFloat = null; }
          },
        },
      });

      // ── PHASE 1 (0–25%): text fades back ──
      tl.to(textRef.current, {
        scale: 1.07, opacity: 0, y: -50,
        duration: 0.25, ease: 'none',
      }, 0);

      tl.to(ctaRef.current, {
        opacity: 0, y: -24,
        duration: 0.2, ease: 'none',
      }, 0);

      tl.to(bgBlurRef.current, {
        opacity: 1, duration: 0.22, ease: 'none',
      }, 0);

      // ── PHASE 2 (20–55%): phone rises into center ──
      tl.fromTo(phoneRef.current,
        { opacity: 0, scale: 0.6, y: 160, rotationX: 28, rotationY: -8, transformPerspective: 1200 },
        { opacity: 1, scale: 1, y: -28, rotationX: 0, rotationY: 0, transformPerspective: 1200, duration: 0.38, ease: 'none' },
        0.18
      );

      if (ambientGlow) {
        tl.fromTo(ambientGlow,
          { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'none' }, 0.24
        );
      }

      // ── PHASE 3 (55–65%): phone holds center, subtle settle ──
      tl.to(phoneRef.current, {
        y: -28, duration: 0.1, ease: 'none',
      }, 0.55);

      // ── PHASE 4 (62–82%): left panel slides in from left ──
      tl.fromTo(leftPanelRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'none' },
        0.60
      );

      // ── PHASE 5 (67–87%): right panel slides in from right ──
      tl.fromTo(rightPanelRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'none' },
        0.65
      );

      // ── PHASE 6 (90–100%): everything holds, then bg bg clears for scroll ──
      tl.to({}, { duration: 0.1 }, 0.90); // hold beat — nothing changes, timeline just breathes
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
      window.removeEventListener('mousemove', handleMouseMove, { passive: true });
    };
  }, []);

  const headlineLines = [
    { text: 'WE MAKE', outlined: false },
    { text: 'BRANDS', outlined: false, orange: true },
    { text: 'IMPOSSIBLE', outlined: false },
    { text: 'TO IGNORE', outlined: true },
  ];

  return (
    // ── OUTER WRAPPER: 400vh — extra 100vh for the panel reveal ──
    <div
      ref={wrapperRef}
      style={{ position: 'relative', height: '400vh', background: '#000' }}
    >
      {/* ── STICKY SHELL ── */}
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
          // Force GPU composite layer — prevents scroll jitter
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* BACKGROUND */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6, zIndex: 0 }} />

        <motion.div style={{
          position: 'absolute', top: '15%', left: '50%',
          transform: 'translateX(-50%)',
          width: '700px', height: '500px',
          // No filter:blur — use transparent radial gradient for zero-repaint glow
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.10) 0%, transparent 60%)',
          x: glowX, y: glowY, zIndex: 0,
          willChange: 'transform',
        }} className="animate-pulse-glow" />

        <motion.div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: '500px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(160, 80, 255, 0.06) 0%, transparent 65%)',
          // No filter:blur — eliminates expensive GPU repaint on every mousemove
          x: useTransform(springX, [-600, 600], [10, -10]),
          y: useTransform(springY, [-400, 400], [-7, 7]),
          zIndex: 0,
          willChange: 'transform',
        }} />

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '300px', background: 'linear-gradient(0deg, rgba(255,156,96,0.04) 0%, transparent 100%)', zIndex: 0 }} />

        {/* Particles — simplified to opacity+y only (no scale/x jitter) */}
        {particles.map((p) => (
          <motion.div key={p.id}
            style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: p.color, zIndex: 1, willChange: 'transform, opacity' }}
            animate={{ y: [0, -60, 0], opacity: [0, p.opacity, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)', zIndex: 1, pointerEvents: 'none' }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* BG BLUR OVERLAY — solid rgba, no backdropFilter (GPU expensive) */}
        <div ref={bgBlurRef} style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.62)',
          opacity: 0, zIndex: 3, pointerEvents: 'none', willChange: 'opacity',
        }} />

        {/* ── MAIN TEXT CONTENT (centered, fades out on scroll) ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(6rem, 12vw, 9rem) 32px clamp(4rem, 8vw, 6rem)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}>

          {/* TEXT LAYER */}
          <div ref={textRef} style={{ willChange: 'transform, opacity', transformOrigin: 'center center' }}>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="tag-orange"
              style={{ marginBottom: '40px' }}
            >
              <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ color: '#FF9C60', fontSize: '7px' }}>●</motion.span>
              PREMIUM SOCIAL MEDIA AGENCY — EST. 2023
            </motion.div>

            <motion.div style={{ x: layer1X, y: layer1Y, marginBottom: '28px' }}>
              {headlineLines.map((line, lineIdx) => (
                <div key={lineIdx} style={{ overflow: 'hidden', lineHeight: '0.9' }}>
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, delay: 0.4 + lineIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(3rem, 10vw, 11rem)',
                      lineHeight: '0.9',
                      display: 'block',
                      ...(line.orange ? {
                        background: 'linear-gradient(135deg, #FF9C60 0%, #FFD4B8 40%, #FF7030 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        textShadow: 'none',
                        filter: 'drop-shadow(0 0 40px rgba(255,156,96,0.5))',
                      } : line.outlined ? {
                        WebkitTextStroke: '2px rgba(255,255,255,0.22)', color: 'transparent',
                      } : { color: '#fff' }),
                    }}
                  >{line.text}</motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA LAYER */}
          <div ref={ctaRef} style={{ willChange: 'transform, opacity' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.6vw, 19px)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.15em', marginBottom: '52px', maxWidth: '560px', textTransform: 'uppercase' }}
            >
              We mind your business digitally
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Link to="/contact" className="btn-primary">Start Growing ↗</Link>
              <Link to="/services" className="btn-ghost">View Services</Link>
            </motion.div>
          </div>
        </div>

        {/* ── PHONE LAYER ── */}
        <div ref={phoneRef} style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 15,
          opacity: 0,
          willChange: 'transform, opacity',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%', height: '120%', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,156,96,0.18) 0%, transparent 65%)',
            filter: 'blur(30px)', zIndex: -1,
          }} />
          <div style={{
            position: 'absolute', top: 0, left: '10%',
            width: '40%', height: '100%', borderRadius: '44px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
            pointerEvents: 'none', zIndex: 20,
          }} />
          <PhoneMockup />
        </div>

        {/* ── LEFT PANEL ── */}
        <LeftPanel panelRef={leftPanelRef} />

        {/* ── RIGHT PANEL ── */}
        <RightPanel panelRef={rightPanelRef} />

        {/* AMBIENT GLOW */}
        <div id="phone-ambient-glow" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,156,96,0.06) 0%, transparent 60%)',
          filter: 'blur(60px)', zIndex: 4, pointerEvents: 'none', opacity: 0,
        }} />

      </section>
    </div>
  );
}
