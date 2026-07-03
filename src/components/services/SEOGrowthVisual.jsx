import { motion } from 'framer-motion';

export default function SEOGrowthVisual({ theme }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.85)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 15px 35px rgba(0,0,0,0.08)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subTextColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const accentColor = '#FF9C60';
  const greenColor = '#27C93F';

  return (
    <div style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '360px',
        height: '360px',
        background: 'radial-gradient(circle, rgba(39,201,63,0.14) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Main Glass Panel: Search Engine & Google Results */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '78%',
          height: '290px',
          background: bgColor,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '24px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05)' : 'inset 0 1px 1px rgba(255,255,255,0.5)',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`, backgroundSize: '30px 30px', opacity: 0.3, pointerEvents: 'none' }} />
        
        {/* Search Bar with Magnifying Glass */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
          border: `1px solid ${cardBorder}`,
          borderRadius: '100px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '14px', color: accentColor }}>🔍</span>
            <span style={{ fontSize: '12px', color: textColor, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              premium digital growth & seo ranking
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              color: '#FFF',
              background: greenColor,
              padding: '2px 8px',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.05em',
            }}>
              #1 RANKED
            </span>
          </div>
        </div>

        {/* Google Search Results Presentation */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>
            <span style={{ color: greenColor }}>✓ https://socialminds.agency</span>
            <span>› seo-optimization</span>
          </div>

          <div style={{ fontSize: '15px', fontWeight: 700, color: '#4A90E2', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', cursor: 'pointer' }}>
            Social Minds — #1 Website Ranking & Keyword Optimization
          </div>

          <div style={{ fontSize: '11px', color: subTextColor, lineHeight: 1.5, fontFamily: "'Inter', sans-serif", maxWidth: '90%' }}>
            Accelerate organic traffic and search engine dominance with technical SEO audits, targeted keyword optimization, high-authority backlink building, and proven website optimization strategies.
          </div>

          {/* Keyword Optimization Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '8px', borderTop: `1px solid ${borderColor}` }}>
            {[
              { label: 'Keyword Optimization', val: '#1 Position' },
              { label: 'Website Ranking', val: 'Top 3' },
              { label: 'Organic Traffic', val: '+184% YoY' }
            ].map((tag, idx) => (
              <div key={idx} style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${cardBorder}`,
                borderRadius: '6px',
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '10px',
                fontFamily: "'Inter', sans-serif",
              }}>
                <span style={{ color: subTextColor }}>{tag.label}:</span>
                <span style={{ color: idx === 0 ? accentColor : greenColor, fontWeight: 600 }}>{tag.val}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Organic Traffic Graph & Analytics Dashboard (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [6, -6, 6] }}
        style={{
          position: 'absolute',
          top: '5%',
          right: '3%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '14px',
          width: '180px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${cardBorder}`, paddingBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Analytics Dashboard</span>
          <span style={{ fontSize: '9px', color: greenColor, fontWeight: 700 }}>↑ LIVE</span>
        </div>
        <div>
          <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>Organic Traffic Graph</div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: textColor, fontFamily: "'Space Grotesk', sans-serif" }}>142.8K /mo</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '24px', paddingTop: '4px' }}>
          {[35, 45, 40, 60, 55, 75, 85, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + (i * 0.05) }}
              style={{
                flex: 1,
                background: i === 7 ? greenColor : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'),
                borderRadius: '2px 2px 0 0',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Card 2: Performance Metrics & Website Optimization (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-5, 5, -5] }}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '3%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '12px 14px',
          width: '190px',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(39,201,63,0.15)', border: `2px solid ${greenColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: greenColor, fontSize: '10px', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
          100
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Performance Metrics</div>
          <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>Website Optimization ⚡</div>
        </div>
      </motion.div>

    </div>
  );
}
