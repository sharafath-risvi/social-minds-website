import { motion } from 'framer-motion';

export default function SocialMediaVisual({ theme }) {
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

      {/* Main Glass Panel (Chart Hero) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '75%',
          height: '280px',
          background: bgColor,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '28px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05)' : 'inset 0 1px 1px rgba(255,255,255,0.5)',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`, backgroundSize: '30px 30px', opacity: 0.3, pointerEvents: 'none' }} />
        
        {/* Header Label inside Chart */}
        <div style={{ position: 'relative', zIndex: 2, marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accentColor }} />
             <div style={{ fontSize: '12px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Growth Mapping</div>
           </div>
           <div style={{ width: '40px', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
        </div>

        {/* High-end Smooth Bar Chart */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '1px', background: borderColor, opacity: 0.5 }} />
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: borderColor, opacity: 0.5 }} />
          <div style={{ position: 'absolute', top: '75%', left: 0, right: 0, height: '1px', background: borderColor, opacity: 0.5 }} />

          {[20, 35, 30, 50, 45, 65, 60, 85, 75, 100].map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', position: 'relative', zIndex: 2 }}>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${h}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.04), ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  maxWidth: '40px',
                  background: i === 9 ? 'linear-gradient(180deg, #FF9C60 0%, #FF7030 100%)' : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'),
                  borderRadius: '6px 6px 0 0',
                  alignSelf: 'flex-end',
                  boxShadow: i === 9 ? '0 0 20px rgba(255,156,96,0.2)' : 'none',
                  borderTop: i === 9 ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Supporting Element 1: Market Research (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-5, 5, -5] }}
        style={{
          position: 'absolute',
          top: '5%',
          left: '2%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '16px',
          width: '180px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6A9FD8' }}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Market Research</div>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
           <div style={{ flex: 1, height: '4px', background: '#6A9FD8', borderRadius: '2px' }} />
           <div style={{ flex: 1.5, height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
           <div style={{ flex: 0.8, height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
        </div>
      </motion.div>

      {/* Supporting Element 2: Strategic Planning (Top Right - Moved slightly upward) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [6, -6, 6] }}
        style={{
          position: 'absolute',
          top: '3%', // Moved up from 12% to 3%
          right: '5%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '16px',
          width: '160px',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF9C60, #FF5F56)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Strategic Planning</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '100%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
          <div style={{ width: '70%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
        </div>
      </motion.div>

      {/* Supporting Element 3: Audience Insights (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-4, 4, -4] }}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '6%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '100px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(39, 201, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27C93F' }}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Audience Insights</div>
           <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif", marginTop: '2px' }}>Competitor Analysis</div>
        </div>
      </motion.div>

    </div>
  );
}
