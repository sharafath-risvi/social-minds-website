// ========================================
// GROWTH ECOSYSTEM SECTION — WHITE BG
// Two-column: 40% left content / 60% right iPhone
// Static premium device — no floating, no parallax
// Apple-style SaaS presentation
// ========================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// ========================================
// FEATURE POINTS DATA
// ========================================
const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content Strategy',
    desc: "Precision-crafted content calendars that match your audience's psychology.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Performance Analytics',
    desc: 'Real-time dashboards tracking every metric that drives growth.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: 'Campaign Tracking',
    desc: 'End-to-end visibility on campaigns from launch to last impression.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Audience Growth',
    desc: 'Systematic community building that turns followers into loyal customers.',
  },
];

// ========================================
// PHONE SCREEN CONTENT — 5 rotating screens
// Pure CSS opacity transitions — GPU composited
// ========================================

// Shared status-bar shown on every screen
function PhoneStatusBar({ dark = true }) {
  const fg = dark ? 'rgba(255,255,255,0.88)' : 'rgba(0,0,0,0.75)';
  const fgDim = dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)';
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '40px 20px 0', flexShrink: 0,
    }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 700, color: fg, letterSpacing: '0.02em' }}>9:41</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '11px' }}>
          {[4, 6, 8, 11].map((h, i) => (
            <div key={i} style={{ width: '3px', height: `${h}px`, borderRadius: '1px', background: i < 3 ? fg : fgDim }} />
          ))}
        </div>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M7 8.5a1 1 0 1 1 0 .001z" fill={fg} />
          <path d="M4.5 6.8a3.5 3.5 0 0 1 5 0" stroke={fg} strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M2 4.5a6.5 6.5 0 0 1 10 0" stroke={fgDim} strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '23px', height: '11px', border: `1px solid ${fgDim}`, borderRadius: '3px', padding: '1.5px' }}>
            <div style={{ width: '75%', height: '100%', borderRadius: '1.5px', background: '#4ade80' }} />
          </div>
          <div style={{ width: '2px', height: '5px', background: fgDim, borderRadius: '0 1px 1px 0' }} />
        </div>
      </div>
    </div>
  );
}

// Bottom nav dots indicator
function PhoneNavDots({ active }) {
  return (
    <div style={{
      height: '38px', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
    }}>
      {[0,1,2,3,4].map(i => (
        <div key={i} style={{
          width: i === active ? '16px' : '6px',
          height: '6px',
          borderRadius: '3px',
          background: i === active ? '#FF9C60' : 'rgba(255,255,255,0.18)',
          transition: 'width 0.4s cubic-bezier(0.25,0.46,0.45,0.94), background 0.4s ease',
          willChange: 'width',
        }} />
      ))}
    </div>
  );
}

// ── SCREEN 1: Intro / Brand splash ──────────────────────
function Screen1Intro() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, #080808 0%, #0d0d10 60%, #060608 100%)',
      overflow: 'hidden',
    }}>
      <PhoneStatusBar dark={true} />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '16px 20px',
        gap: '0',
      }}>
        {/* Brand mark */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '22px',
          background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '32px',
          boxShadow: '0 0 40px rgba(255,156,96,0.5), 0 0 80px rgba(255,156,96,0.2)',
          marginBottom: '22px',
        }}>⚡</div>
        {/* Word mark */}
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '32px', letterSpacing: '0.18em',
          color: '#fff', textAlign: 'center', lineHeight: 1,
          marginBottom: '10px',
        }}>SOCIAL MINDS</div>
        {/* Tagline */}
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '10px', letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.38)', textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '36px',
        }}>We Mind Your Business Digitally</div>
        {/* Animated ring */}
        <div style={{
          width: '100px', height: '100px', borderRadius: '50%',
          border: '1px solid rgba(255,156,96,0.15)',
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            width: '76px', height: '76px', borderRadius: '50%',
            border: '1px solid rgba(255,156,96,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,156,96,0.12) 0%, transparent 70%)',
              border: '1px solid rgba(255,156,96,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF9C60', boxShadow: '0 0 12px rgba(255,156,96,0.9)' }} />
            </div>
          </div>
        </div>
        {/* Feature strip */}
        <div style={{
          marginTop: '28px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {['Content', 'Analytics', 'Campaigns', 'Growth'].map(t => (
            <div key={t} style={{
              padding: '5px 10px',
              background: 'rgba(255,156,96,0.07)',
              border: '1px solid rgba(255,156,96,0.16)',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '8px', color: 'rgba(255,156,96,0.7)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{t}</div>
          ))}
        </div>
      </div>
      <PhoneNavDots active={0} />
    </div>
  );
}

// ── SCREEN 2: Content Strategy ───────────────────────────
function Screen2Content() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const posts = [
    { day: 0, type: 'Reel', color: '#FF9C60', emoji: '🎬' },
    { day: 1, type: 'Story', color: '#60D4FF', emoji: '📸' },
    { day: 2, type: 'Reel', color: '#FF9C60', emoji: '🎬' },
    { day: 3, type: 'Post', color: '#A3FF60', emoji: '🖼️' },
    { day: 4, type: 'Reel', color: '#FF9C60', emoji: '🎬' },
    { day: 5, type: 'Story', color: '#60D4FF', emoji: '📸' },
    { day: 6, type: 'Post', color: '#A3FF60', emoji: '🖼️' },
  ];
  const timeline = [
    { time: '9:00 AM', label: 'Morning Reel', tag: 'PUBLISHED', tagColor: '#4ade80' },
    { time: '1:00 PM', label: 'Brand Story',  tag: 'SCHEDULED', tagColor: '#FF9C60' },
    { time: '7:00 PM', label: 'Engagement Post', tag: 'DRAFT', tagColor: 'rgba(255,255,255,0.3)' },
  ];
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
      overflow: 'hidden',
    }}>
      <PhoneStatusBar />
      <div style={{ flex: 1, padding: '10px 14px 0', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Social Minds OS</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Content Strategy</div>
          </div>
          <div style={{ padding: '5px 10px', background: 'rgba(255,156,96,0.12)', border: '1px solid rgba(255,156,96,0.25)', borderRadius: '8px' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: '#FF9C60', fontWeight: 700 }}>This Week</span>
          </div>
        </div>
        {/* Weekly calendar */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Weekly Planner</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '4px' }}>
            {days.map((d, i) => {
              const post = posts[i];
              return (
                <div key={d} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '6px', color: 'rgba(255,255,255,0.25)', marginBottom: '4px', letterSpacing: '0.06em' }}>{d}</div>
                  <div style={{
                    height: '32px', borderRadius: '8px',
                    background: `${post.color}18`,
                    border: `1px solid ${post.color}30`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '1px',
                  }}>
                    <div style={{ fontSize: '10px' }}>{post.emoji}</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '5px', color: post.color, letterSpacing: '0.05em' }}>{post.type}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Publishing timeline */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 12px',
          flex: 1, overflow: 'hidden',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Today's Timeline</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', width: '42px', flexShrink: 0 }}>{t.time}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: i === 0 ? '100%' : i === 1 ? '0%' : '0%', height: '100%', background: '#FF9C60', borderRadius: '2px' }} />
                  </div>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', fontWeight: 700, color: t.tagColor, flexShrink: 0, letterSpacing: '0.08em' }}>{t.tag}</div>
              </div>
            ))}
          </div>
          {/* Content types legend */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            {[{ label: 'Reels', color: '#FF9C60', count: '3' }, { label: 'Stories', color: '#60D4FF', count: '2' }, { label: 'Posts', color: '#A3FF60', count: '2' }].map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '2px', background: c.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.4)' }}>{c.count} {c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhoneNavDots active={1} />
    </div>
  );
}

// ── SCREEN 3: Performance Analytics ─────────────────────
function Screen3Analytics() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
      overflow: 'hidden',
    }}>
      <PhoneStatusBar />
      <div style={{ flex: 1, padding: '10px 14px 0', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Social Minds OS</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Performance Analytics</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.8)' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: '#4ade80', fontWeight: 700 }}>LIVE</span>
          </div>
        </div>
        {/* Reach hero */}
        <div style={{
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(255,156,96,0.12) 0%, rgba(255,112,48,0.06) 100%)',
          border: '1px solid rgba(255,156,96,0.2)',
          padding: '14px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,156,96,0.15) 0%, transparent 70%)', filter: 'blur(8px)' }} />
          <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.32)', letterSpacing: '0.14em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '3px' }}>Total Reach</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '34px', lineHeight: 1, background: 'linear-gradient(135deg, #FF9C60, #FFD4B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>4.2M</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
            <span style={{ fontSize: '9px', color: '#4ade80', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>↑ 34.8%</span>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)', fontFamily: "'Space Grotesk', sans-serif" }}>vs last month</span>
          </div>
          {/* Reach chart */}
          <svg width="100%" height="26" viewBox="0 0 200 26" style={{ marginTop: '8px' }}>
            <defs>
              <linearGradient id="s3-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF9C60" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF9C60" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="s3-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,156,96,0.22)" />
                <stop offset="100%" stopColor="rgba(255,156,96,0)" />
              </linearGradient>
            </defs>
            <path d="M0,22 L25,20 L50,18 L75,14 L100,12 L125,8 L150,6 L175,3 L200,1 L200,26 L0,26 Z" fill="url(#s3-fill)" />
            <polyline points="0,22 25,20 50,18 75,14 100,12 125,8 150,6 175,3 200,1" fill="none" stroke="url(#s3-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="200" cy="1" r="3" fill="#FF9C60" />
          </svg>
        </div>
        {/* Engagement + Audience mini cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {[
            { label: 'Avg Engagement', value: '18.6%', sub: 'Industry avg 3.2%', color: '#60D4FF', bars: [40,55,48,70,62,80,74,90] },
            { label: 'New Followers', value: '+6.4K', sub: 'This week', color: '#A3FF60', bars: [30,45,38,58,50,70,65,85] },
          ].map(m => (
            <div key={m.label} style={{
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '10px',
            }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{m.label}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: m.color, lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.22)', marginTop: '3px', marginBottom: '8px' }}>{m.sub}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '22px' }}>
                {m.bars.map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '1.5px 1.5px 0 0', background: i === m.bars.length - 1 ? m.color : `${m.color}40` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Live indicators */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 12px',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Live Performance Indicators</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {[
              { label: 'Content Score', val: 94, color: '#FF9C60' },
              { label: 'Virality Index', val: 78, color: '#A3FF60' },
              { label: 'Brand Sentiment', val: 88, color: '#60D4FF' },
            ].map(r => (
              <div key={r.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: r.color, fontWeight: 700 }}>{r.val}</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${r.val}%`, height: '100%', background: `linear-gradient(90deg, ${r.color}60, ${r.color})`, borderRadius: '2px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhoneNavDots active={2} />
    </div>
  );
}

// ── SCREEN 4: Campaign Tracking ───────────────────────────
function Screen4Campaigns() {
  const campaigns = [
    { name: 'Brand Awareness Q2', status: 'LIVE', prog: 78, roi: '3.4x', color: '#FF9C60', spend: '₹48K' },
    { name: 'Reel Growth Drive',  status: 'LIVE', prog: 91, roi: '5.1x', color: '#A3FF60', spend: '₹32K' },
    { name: 'Lead Gen Campaign',  status: 'LIVE', prog: 54, roi: '2.8x', color: '#60D4FF', spend: '₹26K' },
  ];
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
      overflow: 'hidden',
    }}>
      <PhoneStatusBar />
      <div style={{ flex: 1, padding: '10px 14px 0', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Social Minds OS</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Campaign Tracking</div>
          </div>
          <div style={{ padding: '5px 10px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '8px' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: '#4ade80', fontWeight: 700 }}>3 LIVE</span>
          </div>
        </div>
        {/* ROI summary card */}
        <div style={{
          borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(255,156,96,0.1) 0%, rgba(255,112,48,0.05) 100%)',
          border: '1px solid rgba(255,156,96,0.18)',
          padding: '12px 14px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '3px' }}>Total Ad Spend</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', lineHeight: 1, color: '#fff' }}>₹1.06L</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '3px' }}>Avg ROI</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', lineHeight: 1, color: '#FF9C60' }}>3.8x</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', marginBottom: '3px' }}>Revenue</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', lineHeight: 1, color: '#4ade80' }}>₹4.02L</div>
          </div>
        </div>
        {/* Campaign cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflow: 'hidden' }}>
          {campaigns.map((c, i) => (
            <div key={i} style={{
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${c.color}20`,
              padding: '10px 12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ flex: 1, paddingRight: '8px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: '#4ade80', letterSpacing: '0.1em', fontWeight: 600 }}>{c.status}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: c.color, lineHeight: 1 }}>{c.roi}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.25)' }}>ROI</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.3)' }}>Spend: {c.spend}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: c.color, fontWeight: 700 }}>{c.prog}%</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${c.prog}%`, height: '100%', background: `linear-gradient(90deg, ${c.color}60, ${c.color})`, borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PhoneNavDots active={3} />
    </div>
  );
}

// ── SCREEN 5: Audience Growth ────────────────────────────
function Screen5Audience() {
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const vals =   [18, 24, 22, 32, 28, 42, 38, 58, 52, 74, 68, 100];
  const insights = [
    { label: 'Age 18–24',   pct: 38, color: '#FF9C60' },
    { label: 'Age 25–34',   pct: 44, color: '#60D4FF' },
    { label: 'Age 35+',     pct: 18, color: '#A3FF60' },
  ];
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
      overflow: 'hidden',
    }}>
      <PhoneStatusBar />
      <div style={{ flex: 1, padding: '10px 14px 0', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>Social Minds OS</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Audience Growth</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#4ade80', lineHeight: 1 }}>+34.8%</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.08em' }}>vs last month</div>
          </div>
        </div>
        {/* Growth graph */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '12px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Follower Growth</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#FF9C60', lineHeight: 1 }}>148K</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '48px' }}>
            {vals.map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                <div style={{
                  width: '100%',
                  height: `${h}%`,
                  borderRadius: '2px 2px 0 0',
                  background: i === vals.length - 1
                    ? 'linear-gradient(180deg, #FF9C60, #FF7030)'
                    : `rgba(255,156,96,${0.12 + (h / 120)})`,
                }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
            {months.map(m => (
              <div key={m} style={{ flex: 1, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: '5.5px', color: 'rgba(255,255,255,0.18)' }}>{m}</div>
            ))}
          </div>
        </div>
        {/* Audience insights */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 12px',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Audience Insights</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {insights.map(g => (
              <div key={g.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.45)' }}>{g.label}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8px', color: g.color, fontWeight: 700 }}>{g.pct}%</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${g.pct}%`, height: '100%', background: `linear-gradient(90deg, ${g.color}60, ${g.color})`, borderRadius: '2px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Retention card */}
        <div style={{
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 12px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          {[
            { label: 'New Followers', val: '+6.4K', color: '#A3FF60' },
            { label: 'Retention Rate', val: '91%',  color: '#FF9C60' },
            { label: 'Community Size', val: '148K', color: '#60D4FF' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: s.color, lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.07em', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <PhoneNavDots active={4} />
    </div>
  );
}

// Screen components array — index matches cycle order
const SCREENS = [Screen1Intro, Screen2Content, Screen3Analytics, Screen4Campaigns, Screen5Audience];
// Durations per screen (ms)
const DURATIONS = [2500, 3500, 3500, 3500, 3500];

// ========================================
// ANALYTICS IPHONE MOCKUP — viewport-gated cycling
// All timing logic lives inside a single useEffect closure.
// No React state drives timers → no stale-closure flash.
// IntersectionObserver gates start / pause.
// 3-step crossfade: fade-out → content-swap → rAF → fade-in
// ========================================
function AnalyticsPhoneMockup() {
  // React state only for what the DOM actually needs to render
  const [screenIdx, setScreenIdx] = useState(0);
  const [opacity, setOpacity]     = useState(1);

  // Stable ref for the outermost wrapper — used by IntersectionObserver
  const wrapperRef = useRef(null);

  useEffect(() => {
    // ── Local closure state (no stale-closure risk) ──────────
    let currentIdx   = 0;   // mirrors screenIdx but lives in closure
    let timer        = null; // single active timeout handle
    let visible      = false;
    let transitioning = false;

    function clearTimer() {
      if (timer !== null) { clearTimeout(timer); timer = null; }
    }

    // Step 3 of 3: content is already painted at opacity 0 → fade back in
    function fadeIn() {
      if (!visible) { transitioning = false; return; }
      setOpacity(1);
      transitioning = false;
      // Queue next transition
      timer = setTimeout(startTransition, DURATIONS[currentIdx]);
    }

    // Step 2 of 3: screen is invisible → swap content, then trigger fade-in
    // on the next two animation frames so the browser has painted new content
    function swapAndFadeIn() {
      currentIdx = (currentIdx + 1) % SCREENS.length;
      setScreenIdx(currentIdx);                // React re-renders with new screen at opacity 0
      requestAnimationFrame(() => {            // frame 1: React commits the new children
        requestAnimationFrame(fadeIn);         // frame 2: browser has painted → fade in
      });
    }

    // Step 1 of 3: trigger fade-out, then swap after CSS transition completes
    function startTransition() {
      if (!visible || transitioning) return;
      transitioning = true;
      setOpacity(0);                           // CSS transition: opacity → 0 over 300ms
      timer = setTimeout(swapAndFadeIn, 320);  // 320ms > 300ms CSS duration for safety
    }

    // ── IntersectionObserver ─────────────────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          // Section entered viewport — start cycling
          visible = true;
          // Reset to intro screen each time section enters view
          currentIdx = 0;
          setScreenIdx(0);
          setOpacity(1);
          // Wait for the intro screen's full display duration, then begin cycling
          timer = setTimeout(startTransition, DURATIONS[0]);
        } else if (!entry.isIntersecting && visible) {
          // Section left viewport — pause everything cleanly
          visible = false;
          transitioning = false;
          clearTimer();
          // Restore full opacity so there's no frozen semi-transparent state
          setOpacity(1);
        }
      },
      { threshold: 0.25 } // trigger when at least 25% of the phone is visible
    );

    const el = wrapperRef.current;
    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimer();
    };
  }, []); // ← empty deps: effect runs once; all mutable state is in the closure

  const ActiveScreen = SCREENS[screenIdx];

  return (
    <div ref={wrapperRef} style={{ position: 'relative', display: 'inline-flex' }}>

      {/* ── LEFT SIDE BUTTONS ── */}
      <div style={{
        position: 'absolute', left: '-3px', top: '17%',
        width: '3px', height: '28px', borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #c8c8cc 0%, #b0b0b5 40%, #c2c2c6 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.15), inset 1px 0 0 rgba(255,255,255,0.5)',
        zIndex: 5,
      }} />
      <div style={{
        position: 'absolute', left: '-3px', top: '26%',
        width: '3px', height: '52px', borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #c8c8cc 0%, #b0b0b5 40%, #c2c2c6 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.15), inset 1px 0 0 rgba(255,255,255,0.5)',
        zIndex: 5,
      }} />
      <div style={{
        position: 'absolute', left: '-3px', top: '38%',
        width: '3px', height: '52px', borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(180deg, #c8c8cc 0%, #b0b0b5 40%, #c2c2c6 100%)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.15), inset 1px 0 0 rgba(255,255,255,0.5)',
        zIndex: 5,
      }} />

      {/* ── RIGHT SIDE BUTTON — Power ── */}
      <div style={{
        position: 'absolute', right: '-3px', top: '28%',
        width: '3px', height: '72px', borderRadius: '0 2px 2px 0',
        background: 'linear-gradient(180deg, #c8c8cc 0%, #b0b0b5 40%, #c2c2c6 100%)',
        boxShadow: '1px 0 3px rgba(0,0,0,0.15), inset -1px 0 0 rgba(255,255,255,0.5)',
        zIndex: 5,
      }} />

      {/* ── PHONE FRAME — Natural Titanium ── */}
      <div style={{
        width: 'clamp(260px, 28vw, 320px)',
        height: 'clamp(530px, 56vw, 640px)',
        borderRadius: '50px',
        background: 'linear-gradient(160deg, #f5f5f7 0%, #e8e8ed 45%, #f0f0f5 100%)',
        boxShadow: `
          0 0 0 1.5px rgba(0,0,0,0.12),
          0 0 0 3px rgba(255,255,255,0.8),
          0 0 0 4px rgba(0,0,0,0.08),
          0 40px 100px rgba(0,0,0,0.18),
          0 16px 40px rgba(0,0,0,0.10),
          0 4px 12px rgba(0,0,0,0.06),
          inset 0 1px 0 rgba(255,255,255,0.9),
          inset 0 -1px 0 rgba(0,0,0,0.1)
        `,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── GLASS SHINE — top specular ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '60%', height: '45%',
          borderRadius: '50px 0 60% 0',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 60%)',
          pointerEvents: 'none', zIndex: 30,
        }} />

        {/* ── TOP EDGE METALLIC HIGHLIGHT ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px', borderRadius: '50px 50px 0 0',
          background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, transparent 95%)',
          pointerEvents: 'none', zIndex: 30,
        }} />

        {/* ── DYNAMIC ISLAND / NOTCH ── */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '120px', height: '36px',
          background: '#0a0a0a',
          borderRadius: '0 0 24px 24px',
          zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px',
          boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.15)',
        }}>
          <div style={{
            width: '12px', height: '12px', borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #1e1e1e, #060606)',
            border: '1px solid rgba(255,255,255,0.06)',
          }} />
          <div style={{
            width: '56px', height: '8px', borderRadius: '4px',
            background: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.04)',
          }} />
          <div style={{
            position: 'absolute', right: '10px', top: '50%',
            transform: 'translateY(-50%)',
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#FF9C60',
            boxShadow: '0 0 6px rgba(255,156,96,0.9), 0 0 12px rgba(255,156,96,0.4)',
          }} />
        </div>

        {/* ── SCREEN CONTENT
            opacity is plain React state (0 or 1).
            CSS transition handles the 300ms ease — GPU composited,
            no layout/paint triggered, maintains 60fps. ── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            opacity,
            transition: 'opacity 0.3s ease',
            willChange: 'opacity',
          }}
        >
          <ActiveScreen />
        </div>

        {/* ── SCANLINE overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50px',
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.008) 3px, rgba(0,0,0,0.008) 4px)',
          pointerEvents: 'none', zIndex: 10,
        }} />

        {/* ── SCREEN DEPTH VIGNETTE ── */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50px',
          background: 'radial-gradient(ellipse at 50% 0%, transparent 55%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none', zIndex: 11,
        }} />
      </div>

      {/* ── AMBIENT GLOW BELOW PHONE ── */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70%',
        height: '60px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.18) 0%, transparent 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </div>
  );
}

// ========================================
// MAIN SECTION
// ========================================
export default function GrowthEcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="growth-ecosystem"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(7rem, 13vw, 11rem) clamp(24px, 6vw, 100px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Subtle dot texture ── */}
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.55 }} />

      {/* ── Soft radial gradient top-right accent ── */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,156,96,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Soft radial gradient bottom-left ── */}
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,156,96,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Divider line top ── */}
      <div className="section-divider-white" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'center',
        }}>

          {/* ════════════════════════════════════
              LEFT COLUMN — 40%
          ════════════════════════════════════ */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px 6px 12px',
                background: 'rgba(255,156,96,0.08)',
                border: '1px solid rgba(255,156,96,0.22)',
                borderRadius: '100px',
                marginBottom: '32px',
              }}
            >
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#FF9C60',
                boxShadow: '0 0 8px rgba(255,156,96,0.7)',
                display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px', fontWeight: 700,
                color: '#FF7030',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                Social Minds OS
              </span>
            </motion.div>

            {/* Heading */}
            <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
              <motion.h2
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2.6rem, 5vw, 5.5rem)',
                  lineHeight: 0.95,
                  color: '#0D0D0D',
                  letterSpacing: '0.02em',
                }}
              >
                The System Behind{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Viral Growth
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 1.1vw, 17px)',
                color: 'rgba(0,0,0,0.5)',
                lineHeight: 1.75,
                marginBottom: '44px',
                maxWidth: '440px',
              }}
            >
              Social Minds manages content, analytics, campaigns, and growth from one unified process — so every decision is backed by data, and every post moves the needle.
            </motion.p>

            {/* Feature points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '52px' }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                >
                  {/* Icon circle */}
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: 'rgba(255,156,96,0.08)',
                    border: '1px solid rgba(255,156,96,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    color: '#FF7030',
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '15px', fontWeight: 700,
                      color: '#0D0D0D',
                      marginBottom: '4px',
                    }}>
                      {f.title}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: 'rgba(0,0,0,0.45)',
                      lineHeight: 1.6,
                    }}>
                      {f.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                style={{ display: 'inline-flex', fontSize: '14px', padding: '16px 36px' }}
              >
                Start Growing Today ↗
              </Link>
            </motion.div>
          </div>

          {/* ════════════════════════════════════
              RIGHT COLUMN — 60% — Static iPhone
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Faint glass background halo behind the phone */}
            <div style={{
              position: 'absolute',
              width: 'clamp(300px, 40vw, 480px)',
              height: 'clamp(300px, 40vw, 480px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,156,96,0.06) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />

            {/* Premium frosted card backdrop */}
            <div style={{
              position: 'absolute',
              inset: '-20px 0',
              borderRadius: '32px',
              background: 'rgba(248,247,244,0.6)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.05)',
              pointerEvents: 'none',
            }} />

            {/* The static iPhone mockup */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <AnalyticsPhoneMockup />
            </div>

            {/* Floating stat badge — top-right of the phone area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              style={{
                position: 'absolute',
                top: '8%',
                right: '0%',
                zIndex: 10,
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '16px',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(255,156,96,0.12), rgba(255,112,48,0.07))',
                border: '1px solid rgba(255,156,96,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px',
              }}>📈</div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#0D0D0D', lineHeight: 1 }}>
                  +34.8%
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Monthly Growth
                </div>
              </div>
            </motion.div>

            {/* Floating engagement badge — bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '0%',
                zIndex: 10,
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '16px',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 10px rgba(74,222,128,0.7)',
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: '#0D0D0D' }}>
                  12 Live Campaigns
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(0,0,0,0.38)', letterSpacing: '0.05em' }}>
                  All systems active
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Divider line bottom ── */}
      <div className="section-divider-white" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
