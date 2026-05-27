// ========================================
// IPHONE MOCKUP COMPONENT v2.0
// Massive cinematic iPhone frame — 340×700px base
// Multiple content modes: Reel, Analytics, Feed
// Layered glow system — orange + purple + ambient
// ========================================

import { motion } from 'framer-motion';

// ========================================
// MAIN IPHONE MOCKUP FRAME
// ========================================
export default function IPhoneMockup({ children, glowColor = '#FF9C60', scale = 1, size = 'lg' }) {
  const sizes = {
    sm: { width: 240, height: 490, border: 36, screen: 30 },
    md: { width: 300, height: 620, border: 42, screen: 34 },
    lg: { width: 340, height: 700, border: 46, screen: 38 },
    xl: { width: 380, height: 780, border: 50, screen: 42 },
  };

  const s = sizes[size] || sizes.lg;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      {/* ── GLOW LAYERS ── */}
      {/* Primary orange glow */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          width: `${s.width + 120}px`,
          height: `${s.height + 80}px`,
          background: `radial-gradient(ellipse at 50% 60%, ${glowColor}35 0%, transparent 65%)`,
          filter: 'blur(40px)',
          borderRadius: '60%',
          zIndex: 0,
        }}
      />
      {/* Secondary purple glow */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          width: `${s.width + 80}px`,
          height: `${s.height + 60}px`,
          background: 'radial-gradient(ellipse at 40% 40%, rgba(160,80,255,0.15) 0%, transparent 60%)',
          filter: 'blur(50px)',
          borderRadius: '60%',
          zIndex: 0,
          animationDelay: '1.5s',
        }}
      />
      {/* Rim glow */}
      <div
        className="absolute"
        style={{
          width: `${s.width + 4}px`,
          height: `${s.height + 4}px`,
          background: 'transparent',
          borderRadius: `${s.border + 8}px`,
          boxShadow: `0 0 0 1px ${glowColor}18, 0 40px 100px rgba(0,0,0,0.9)`,
          zIndex: 1,
        }}
      />

      {/* ── IPHONE FRAME ── */}
      <div
        className="relative z-10"
        style={{
          width: `${s.width}px`,
          height: `${s.height}px`,
          background: 'linear-gradient(160deg, #3A3A3A 0%, #242424 25%, #181818 55%, #111111 80%, #0D0D0D 100%)',
          borderRadius: `${s.border}px`,
          padding: '10px',
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.12),
            0 0 0 2px rgba(0,0,0,0.9),
            0 0 0 3px rgba(255,255,255,0.04),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -1px 0 rgba(0,0,0,0.5),
            0 60px 120px rgba(0,0,0,0.95),
            0 0 60px ${glowColor}15
          `,
        }}
      >
        {/* ── PHYSICAL BUTTONS ── */}
        {/* Volume up */}
        <div style={{
          position: 'absolute', left: '-4px', top: '25%',
          width: '4px', height: '38px',
          background: 'linear-gradient(180deg, #3A3A3A 0%, #555 50%, #3A3A3A 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }} />
        {/* Volume down 1 */}
        <div style={{
          position: 'absolute', left: '-4px', top: 'calc(25% + 54px)',
          width: '4px', height: '56px',
          background: 'linear-gradient(180deg, #3A3A3A 0%, #555 50%, #3A3A3A 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }} />
        {/* Volume down 2 */}
        <div style={{
          position: 'absolute', left: '-4px', top: 'calc(25% + 122px)',
          width: '4px', height: '56px',
          background: 'linear-gradient(180deg, #3A3A3A 0%, #555 50%, #3A3A3A 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }} />
        {/* Power button */}
        <div style={{
          position: 'absolute', right: '-4px', top: '28%',
          width: '4px', height: '72px',
          background: 'linear-gradient(180deg, #3A3A3A 0%, #555 50%, #3A3A3A 100%)',
          borderRadius: '0 3px 3px 0',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }} />

        {/* ── SCREEN ── */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#000',
            borderRadius: `${s.screen}px`,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Dynamic Island */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '28px',
            background: '#000',
            borderRadius: '14px',
            zIndex: 20,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.04)',
          }} />

          {/* Tiny camera in island */}
          <div style={{
            position: 'absolute', top: '20px', left: '50%',
            transform: 'translateX(20px)',
            width: '10px', height: '10px',
            background: 'radial-gradient(circle, #1a3a4a 0%, #0a1a2a 100%)',
            borderRadius: '50%',
            zIndex: 21,
            boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.1)',
          }} />

          {/* Screen Content */}
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {children}
          </div>

          {/* Screen Reflection */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(140deg, rgba(255,255,255,0.05) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.02) 100%)',
            pointerEvents: 'none',
            borderRadius: `${s.screen}px`,
            zIndex: 15,
          }} />

          {/* Screen edge inner glow */}
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: `inset 0 0 30px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.04)`,
            borderRadius: `${s.screen}px`,
            pointerEvents: 'none',
            zIndex: 14,
          }} />
        </div>

        {/* Frame specular highlight */}
        <div style={{
          position: 'absolute',
          top: 0, left: '15%', right: '15%', height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
          borderRadius: `${s.border}px ${s.border}px 0 0`,
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}

// ========================================
// REEL CONTENT — Animated social reel inside phone
// ========================================
export function ReelContent({ gradient, label, plays = '2.4M', username = '@social.minds', likes = '48.2K', comments = '1.2K', shares = '8.4K' }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      position: 'relative', overflow: 'hidden',
      background: gradient || 'linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #0f3460 80%, #FF9C60 100%)',
    }}>
      {/* Animated gradient overlay */}
      <motion.div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)' }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Moving visual blocks (fake reel content) */}
      {[
        { top: '12%', h: 50, w: 70, opacity: 0.15 },
        { top: '24%', h: 30, w: 45, opacity: 0.10 },
        { top: '36%', h: 65, w: 60, opacity: 0.12 },
        { top: '52%', h: 25, w: 80, opacity: 0.08 },
      ].map((block, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${10 + Math.sin(i) * 5}%`,
            top: block.top,
            width: `${block.w}%`,
            height: `${block.h}px`,
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            opacity: block.opacity,
          }}
          animate={{ opacity: [block.opacity, block.opacity * 2.5, block.opacity] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}

      {/* Color accent blob */}
      <motion.div
        style={{
          position: 'absolute',
          top: '30%', left: '20%',
          width: '60%', height: '40%',
          background: 'radial-gradient(ellipse, rgba(255,156,96,0.2) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Play button */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '52px', height: '52px',
        background: 'rgba(255,255,255,0.12)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.25)',
      }}>
        <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '16px solid rgba(255,255,255,0.9)', marginLeft: '3px' }} />
      </div>

      {/* Right-side engagement buttons */}
      <div style={{
        position: 'absolute', right: '10px', bottom: '80px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
      }}>
        {[
          { icon: '♥', label: likes, color: '#FF6B9D' },
          { icon: '💬', label: comments, color: '#60D4FF' },
          { icon: '↗', label: shares, color: '#A3FF60' },
        ].map((btn, i) => (
          <motion.div
            key={i}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
          >
            <div style={{
              width: '38px', height: '38px',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px',
              border: `1px solid ${btn.color}30`,
            }}>{btn.icon}</div>
            <span style={{ color: '#fff', fontSize: '8px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{btn.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom overlay — username + label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 12px 24px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
          <div style={{
            width: '22px', height: '22px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
            flexShrink: 0,
          }} />
          <span style={{ color: '#fff', fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>{username}</span>
          <span style={{
            padding: '1px 6px',
            background: 'rgba(255,156,96,0.2)',
            border: '1px solid rgba(255,156,96,0.4)',
            borderRadius: '4px',
            color: '#FF9C60',
            fontSize: '7px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
          }}>Follow</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '9px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, marginBottom: '4px', lineHeight: 1.4 }}>
          {label || 'Brand Growth Strategy 🚀'}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#FF9C60', fontSize: '8px', fontFamily: "'Space Grotesk', sans-serif" }}>◈ {plays} plays</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '8px' }}>• SOCIAL MINDS</span>
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 22px 0 18px',
        zIndex: 10,
      }}>
        <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>9:41</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          {[3, 2.5, 2, 1.5].map((h, i) => (
            <div key={i} style={{ width: '3px', height: `${h * 3}px`, background: '#fff', borderRadius: '1px', opacity: i === 3 ? 0.4 : 1 }} />
          ))}
          <span style={{ color: '#fff', fontSize: '10px', marginLeft: '3px' }}>▲</span>
          <div style={{ display: 'flex', gap: '1px', alignItems: 'center' }}>
            <div style={{ width: '18px', height: '10px', border: '1.5px solid rgba(255,255,255,0.8)', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '1px' }}>
              <div style={{ width: '70%', height: '6px', background: '#A3FF60', borderRadius: '1px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// ANALYTICS CONTENT — Analytics dashboard inside phone
// ========================================
export function AnalyticsContent() {
  const bars = [40, 65, 45, 80, 55, 90, 72, 95];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      padding: '50px 16px 20px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 22px 0 18px',
      }}>
        <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>9:41</span>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: '9px' }}>●●●</span>
          <span style={{ color: '#A3FF60', fontSize: '9px' }}>⬛</span>
        </div>
      </div>

      {/* Analytics UI */}
      <div style={{ marginTop: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ color: '#fff', fontSize: '13px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>Analytics</span>
          <span style={{ color: '#FF9C60', fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif" }}>This Month ▾</span>
        </div>

        {/* Big metric */}
        <div style={{ background: 'rgba(255,156,96,0.06)', border: '1px solid rgba(255,156,96,0.15)', borderRadius: '14px', padding: '14px', marginBottom: '12px' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px', letterSpacing: '0.1em' }}>TOTAL REACH</div>
          <motion.div
            style={{ color: '#fff', fontSize: '26px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', lineHeight: 1 }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            2,847,392
          </motion.div>
          <div style={{ color: '#A3FF60', fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif", marginTop: '4px' }}>↑ +284% vs last month</div>
        </div>

        {/* Bar chart */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '12px', marginBottom: '12px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '10px', letterSpacing: '0.1em' }}>ENGAGEMENT RATE</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '50px' }}>
            {bars.map((h, i) => (
              <motion.div
                key={i}
                style={{ flex: 1, background: i === 7 ? 'linear-gradient(180deg, #FF9C60, #FF7030)' : 'rgba(255,156,96,0.3)', borderRadius: '4px 4px 0 0' }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '7px' }}>Week 1</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '7px' }}>Now</span>
          </div>
        </div>

        {/* Mini stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {[
            { label: 'Followers', value: '+4.2K', color: '#60D4FF' },
            { label: 'Saves', value: '12.8K', color: '#A3FF60' },
            { label: 'Shares', value: '6.4K', color: '#FF9C60' },
            { label: 'Score', value: '9.8', color: '#FF6B9D' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.color}18`,
              borderRadius: '10px',
              padding: '8px',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '8px', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '3px' }}>{item.label}</div>
              <div style={{ color: item.color, fontSize: '15px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// FEED CONTENT — Instagram-like feed inside phone
// ========================================
export function FeedContent() {
  const posts = [
    { gradient: 'linear-gradient(135deg, #FF9C60, #FF4080)', likes: '48.2K', label: 'Brand Collab 🔥' },
    { gradient: 'linear-gradient(135deg, #40D0FF, #8040FF)', likes: '32.1K', label: 'Viral Content ⚡' },
    { gradient: 'linear-gradient(135deg, #40FF80, #40D0FF)', likes: '21.7K', label: 'Growth Hack 📈' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0A0A0A',
      overflowY: 'hidden',
      position: 'relative',
    }}>
      {/* Stories bar */}
      <div style={{
        position: 'absolute', top: '44px', left: 0, right: 0,
        padding: '10px 12px',
        display: 'flex', gap: '10px', overflowX: 'hidden',
        background: 'rgba(0,0,0,0.8)',
        zIndex: 5,
      }}>
        {['You', 'brand1', 'brand2', 'brand3'].map((name, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: i === 0 ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #FF9C60, #FF4080)',
              padding: '2px',
              boxShadow: i !== 0 ? '0 0 0 1.5px #FF9C60' : 'none',
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: `hsl(${i * 60 + 200}, 70%, 30%)` }} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '7px', fontFamily: "'Space Grotesk', sans-serif" }}>{name}</span>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div style={{ marginTop: '100px', overflowY: 'hidden' }}>
        {posts.map((post, i) => (
          <div key={i} style={{ marginBottom: '2px' }}>
            {/* Post header */}
            <div style={{ padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: post.gradient, flexShrink: 0 }} />
              <span style={{ color: '#fff', fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>social.minds</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '8px', marginLeft: 'auto' }}>2h</span>
            </div>
            {/* Post image */}
            <motion.div
              style={{ height: '130px', background: post.gradient, position: 'relative' }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.2)', fontSize: '20px', fontFamily: "'Bebas Neue', sans-serif",
              }}>
                {post.label}
              </div>
            </motion.div>
            {/* Engagement */}
            <div style={{ padding: '6px 12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#FF6B9D', fontSize: '12px' }}>♥</span>
              <span style={{ color: '#fff', fontSize: '8px', fontFamily: "'Space Grotesk', sans-serif" }}>{post.likes} likes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 22px 0 18px',
        background: 'rgba(0,0,0,0.9)',
        zIndex: 10,
      }}>
        <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>9:41</span>
        <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Instagram</span>
        <div style={{ width: '40px' }} />
      </div>
    </div>
  );
}
