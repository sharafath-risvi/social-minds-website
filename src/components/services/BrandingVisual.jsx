import { motion } from 'framer-motion';

export default function BrandingVisual({ theme }) {
  const isDark = theme === 'dark';
  
  // Clean, high-end white aesthetic
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.9)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.08)';
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
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.1) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Main Hero Card: Brand Guidelines Presentation */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '65%',
          height: '280px',
          background: isDark ? '#111' : '#FFFFFF',
          border: `1px solid ${borderColor}`,
          borderRadius: '8px', // Sharper corners for a print/booklet feel
          padding: '32px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          boxShadow: shadow,
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`, backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' }} />
        
        {/* Large Geometric Logo Mark */}
        <div style={{ position: 'relative', zIndex: 2, width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', border: `2px solid ${isDark ? '#333' : '#E0E0E0'}`, borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: '60%', height: '60%', background: 'linear-gradient(135deg, #FF9C60, #FF5F56)', borderRadius: '50%', boxShadow: '0 8px 16px rgba(255,156,96,0.3)' }} />
          <div style={{ position: 'absolute', width: '30%', height: '30%', background: isDark ? '#111' : '#FFF', borderRadius: '50%' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: subTextColor, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.2em', fontWeight: 600, marginBottom: '8px' }}>BRAND GUIDELINES</div>
          <div style={{ fontSize: '18px', color: textColor, fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>Visual Identity System</div>
          <div style={{ width: '24px', height: '2px', background: accentColor, margin: '16px auto 0' }} />
        </div>
      </motion.div>

      {/* Floating Mockup 1: Premium Brand Showcase (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-6, 6, -6] }}
        style={{
          position: 'absolute',
          top: '12%',
          right: '5%',
          width: '150px',
          background: cardBg,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,156,96,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Brand Mark</div>
          <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif" }}>Primary Symbol</div>
        </div>
      </motion.div>

      {/* Floating Mockup 2: Packaging Design Preview (Bottom Left - Moved to balance layout) */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [5, -5, 5] }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%', // Moved to the left side
          width: '120px',
          height: '140px',
          background: isDark ? 'linear-gradient(180deg, #2A2A2A, #1A1A1A)' : 'linear-gradient(180deg, #FAFAFA, #EBEBEB)',
          border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
          borderRadius: '2px',
          boxShadow: shadow,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: isDark ? '#222' : '#FFF', borderBottom: `1px solid ${isDark ? '#333' : '#E0E0E0'}` }} />
        <div style={{ position: 'relative', zIndex: 2, width: '30px', height: '30px', border: `2px solid ${accentColor}`, transform: 'rotate(45deg)' }} />
        
        {/* Floating Label */}
        <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', background: cardBg, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${cardBorder}`, padding: '4px 10px', borderRadius: '100px', fontSize: '9px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif", boxShadow: shadow }}>
          Packaging System
        </div>
      </motion.div>

    </div>
  );
}
