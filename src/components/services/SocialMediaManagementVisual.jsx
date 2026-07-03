import { motion } from 'framer-motion';

export default function SocialMediaManagementVisual({ theme }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.85)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 15px 35px rgba(0,0,0,0.08)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subTextColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const accentColor = '#FF9C60';

  return (
    <div style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Main Glass Panel: Social Media Dashboard */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '75%',
          height: '290px',
          background: bgColor,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '26px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05)' : 'inset 0 1px 1px rgba(255,255,255,0.5)',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`, backgroundSize: '30px 30px', opacity: 0.3, pointerEvents: 'none' }} />
        
        {/* Dashboard Header with Platform Selector Pills */}
        <div style={{ position: 'relative', zIndex: 2, marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accentColor }} />
            <div style={{ fontSize: '13px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Social Media Dashboard</div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['Instagram', 'Facebook', 'LinkedIn'].map((platform, idx) => (
              <span key={platform} style={{
                fontSize: '10px',
                fontWeight: 600,
                color: idx === 0 ? '#000' : textColor,
                background: idx === 0 ? accentColor : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'),
                padding: '3px 8px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '0.05em',
              }}>
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Analytics & Content Calendar Grid */}
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '14px', marginBottom: '18px' }}>
          {/* Analytics Stat Box */}
          <div style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
            border: `1px solid ${cardBorder}`,
            borderRadius: '16px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '11px', color: subTextColor, fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>Avg. Engagement Rate</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '24px', fontWeight: 700, color: textColor, fontFamily: "'Space Grotesk', sans-serif" }}>+48.2%</span>
              <span style={{ fontSize: '11px', color: '#27C93F', fontWeight: 600 }}>↑ 12.4% vs last week</span>
            </div>
          </div>

          {/* Content Calendar Status Box */}
          <div style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
            border: `1px solid ${cardBorder}`,
            borderRadius: '16px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '11px', color: subTextColor, fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>Content Calendar</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: accentColor, fontFamily: "'Space Grotesk', sans-serif" }}>14 Posts</span>
              <span style={{ fontSize: '11px', color: subTextColor }}>Scheduled this week</span>
            </div>
          </div>
        </div>

        {/* Daily Engagement Activity Bars */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '8px', zIndex: 2 }}>
          <div style={{ fontSize: '10px', color: subTextColor, position: 'absolute', top: '-18px', left: 0, fontFamily: "'Inter', sans-serif" }}>Daily Posting & Engagement Growth</div>
          {[40, 55, 45, 70, 65, 85, 95, 80, 100].map((val, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'flex-end' }}>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${val}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.04), ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  maxWidth: '32px',
                  background: i === 8 ? 'linear-gradient(180deg, #FF9C60 0%, #FF7030 100%)' : (isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)'),
                  borderRadius: '4px 4px 0 0',
                  boxShadow: i === 8 ? '0 0 16px rgba(255,156,96,0.3)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Card 1: Mobile Phone / Social Feed Mockup (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [6, -6, 6] }}
        style={{
          position: 'absolute',
          top: '6%',
          right: '3%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '14px',
          width: '175px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: `1px solid ${cardBorder}`, paddingBottom: '8px' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px', fontWeight: 'bold' }}>
            IG
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Mobile Feed Live</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>
          <span>❤️ Likes</span>
          <span>💬 Comments</span>
        </div>
        <div style={{ width: '100%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: '85%', height: '100%', background: accentColor }} />
        </div>
      </motion.div>

      {/* Floating Card 2: Live Notifications (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-5, 5, -5] }}
        style={{
          position: 'absolute',
          top: '8%',
          left: '3%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '12px 14px',
          width: '185px',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(39,201,63,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27C93F', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>New Followers</div>
          <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>Community Engagement</div>
        </div>
      </motion.div>

      {/* Floating Card 3: Digital Marketing & Platforms Sync (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [4, -4, 4] }}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '6%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '12px 16px',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1877F2' }}>FB</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#0A66C2' }}>IN</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#E4405F' }}>IG</span>
        </div>
        <div style={{ height: '16px', width: '1px', background: cardBorder }} />
        <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>
          Digital Marketing Sync
        </div>
      </motion.div>

    </div>
  );
}
