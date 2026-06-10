import { motion } from 'framer-motion';

export default function SEOVisual({ theme }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subTextColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.75)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.08)';

  const keywords = [
    { name: "Premium Agency", rank: "1", up: true, diff: "+3", vol: "12.4K" },
    { name: "Content Strategy", rank: "2", up: true, diff: "+1", vol: "8.2K" },
    { name: "Growth Marketing", rank: "1", up: true, diff: "+5", vol: "45.1K" },
  ];

  return (
    <div style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '320px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(39,201,63,0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Search Ranking Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '90%',
          background: bgColor,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)' : 'inset 0 1px 1px rgba(255,255,255,0.5), 0 30px 60px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ color: subTextColor, fontSize: '11px', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.1em', fontWeight: 600 }}>ORGANIC KEYWORDS</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27C93F' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }} />
          </div>
        </div>
        
        {/* Table Header */}
        <div style={{ display: 'flex', padding: '0 16px 12px', borderBottom: `1px solid ${borderColor}`, marginBottom: '12px', color: subTextColor, fontSize: '10px', fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <div style={{ flex: 2 }}>Keyword</div>
          <div style={{ flex: 1, textAlign: 'right' }}>Volume</div>
          <div style={{ flex: 1, textAlign: 'right' }}>Pos</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {keywords.map((kw, i) => (
            <motion.div
              key={kw.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)' }}
              transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                background: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'transparent' : 'rgba(0,0,0,0.02)'}`,
                boxShadow: isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.02)',
                borderRadius: '12px',
                cursor: 'default',
              }}
            >
              <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={subTextColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <div style={{ color: textColor, fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500 }}>
                  {kw.name}
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'right', color: subTextColor, fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
                {kw.vol}
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                <div style={{ color: '#27C93F', fontSize: '11px', fontWeight: 600, fontFamily: "'Inter', sans-serif", background: 'rgba(39, 201, 63, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{kw.diff}</div>
                <div style={{ color: textColor, fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600 }}>
                  #{kw.rank}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Traffic Graph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [15, -15, 15] }}
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '5%',
          background: cardBg,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '24px',
          width: '260px',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '11px', color: subTextColor, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em', fontWeight: 600 }}>MONTHLY TRAFFIC</div>
            <div style={{ fontSize: '32px', color: textColor, fontFamily: "'Bebas Neue', sans-serif", marginTop: '4px', marginBottom: '16px', lineHeight: 1, letterSpacing: '1px' }}>248.5K</div>
          </div>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(39, 201, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27C93F' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          </div>
        </div>
        
        {/* Polished SVG Graph */}
        <div style={{ position: 'relative', height: '60px', width: '100%' }}>
          {/* Grid lines */}
          <div style={{ position: 'absolute', bottom: '0', left: 0, right: 0, height: '1px', background: borderColor }} />
          <div style={{ position: 'absolute', bottom: '30px', left: 0, right: 0, height: '1px', background: borderColor, strokeDasharray: '4 4' }} />
          
          <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#27C93F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#27C93F" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 60 L 0 50 C 30 40, 50 45, 90 30 C 130 15, 160 20, 200 5 L 200 60 Z"
              fill="url(#trafficGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.path
              d="M 0 50 C 30 40, 50 45, 90 30 C 130 15, 160 20, 200 5"
              fill="none"
              stroke="#27C93F"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              style={{ filter: 'drop-shadow(0 4px 6px rgba(39,201,63,0.3))' }}
            />
          </svg>
        </div>
      </motion.div>

    </div>
  );
}
