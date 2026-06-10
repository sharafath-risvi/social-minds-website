import { motion } from 'framer-motion';

export default function ContentVisual({ theme }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subTextColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.75)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.08)';

  const columns = [
    { name: 'TRENDS', color: '#888', count: 12 },
    { name: 'EDITING', color: '#FF9C60', count: 4 },
    { name: 'DISTRIBUTION', color: '#27C93F', count: 2 }
  ];

  return (
    <div style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '250px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.12) 0%, transparent 65%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Kanban Board Container: Reel Growth Engine Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '95%',
          height: '360px',
          background: bgColor,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          gap: '20px',
          position: 'relative',
          zIndex: 1,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)' : 'inset 0 1px 1px rgba(255,255,255,0.5), 0 30px 60px rgba(0,0,0,0.05)',
        }}
      >
        {columns.map((col, i) => (
          <div key={col.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', borderRadius: '16px', padding: '16px', border: `1px solid ${isDark ? 'transparent' : 'rgba(0,0,0,0.02)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '11px', color: textColor, fontFamily: "'Inter', sans-serif", fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color, boxShadow: `0 0 8px ${col.color}` }} />
                {col.name}
              </div>
              <div style={{ fontSize: '11px', color: subTextColor, fontFamily: "'Inter', sans-serif", fontWeight: 600, background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '100px' }}>
                {col.count}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.3 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.03)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ background: `${col.color}20`, color: col.color, fontSize: '9px', fontFamily: "'Inter', sans-serif", fontWeight: 700, padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>
                  {i === 0 ? 'HOOK TESTING' : i === 1 ? 'FAST PACED' : 'MULTI-PLATFORM'}
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                   <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5F56' }} />
                   <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6A9FD8' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                 <div style={{ width: '30px', height: '50px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: '6px', border: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '0', height: '0', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #FF9C60', marginLeft: '2px' }} />
                 </div>
                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ height: '6px', background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', borderRadius: '3px', width: '90%' }} />
                    <div style={{ height: '6px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '3px', width: '60%' }} />
                 </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#27C93F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  <div style={{ fontSize: '10px', color: '#27C93F', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Viral Trajectory</div>
                </div>
                <div style={{ fontSize: '10px', color: subTextColor, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  Vol: High
                </div>
              </div>
            </motion.div>

            {i === 0 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 0.5, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : '#F9F9F9',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}`,
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ width: '24px', height: '40px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '4px', border: `1px solid ${borderColor}` }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ height: '6px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '3px', width: '80%' }} />
                  <div style={{ height: '6px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '3px', width: '50%' }} />
                </div>
              </motion.div>
            )}

          </div>
        ))}
      </motion.div>

      {/* Floating Asset (Viral Distribution) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-12, 12, -12] }}
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '22%',
          background: cardBg,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '16px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #FF9C60, #FF5F56)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', boxShadow: '0 8px 16px rgba(255,95,86,0.25)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
        <div style={{ paddingRight: '12px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>Viral Distribution</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27C93F', boxShadow: '0 0 6px #27C93F' }} />
            <div style={{ fontSize: '11px', color: '#27C93F', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>Content Momentum</div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
