import { motion } from 'framer-motion';

export default function WebDevVisual({ theme }) {
  const isDark = theme === 'dark';
  
  // Premium, ultra-clean aesthetic
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subTextColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.85)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.06)';
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
        background: 'radial-gradient(circle, rgba(255,156,96,0.12) 0%, transparent 65%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Main Panel: Personal Brand Website / Portfolio Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.4 } }}
        style={{
          width: '95%',
          height: '320px',
          background: bgColor,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          boxShadow: isDark ? 'inset 0 1px 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.4)' : 'inset 0 1px 1px rgba(255,255,255,0.5), 0 30px 60px rgba(0,0,0,0.08)',
        }}
      >
        {/* Browser Top Bar - Clean macOS style */}
        <div style={{ height: '36px', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderBottom: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
          
          <div style={{ margin: '0 auto', width: '40%', height: '18px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accentColor, marginRight: '6px', opacity: 0.8 }} />
             <div style={{ fontSize: '9px', color: subTextColor, fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>founder-portfolio.com</div>
          </div>
        </div>

        {/* Website Content Area */}
        <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Hero Section: Profile Identity */}
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '110px', height: '110px', background: isDark ? 'linear-gradient(135deg, #222, #111)' : 'linear-gradient(135deg, #FFF, #F0F0F0)', border: `1px solid ${borderColor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} 
            >
              <div style={{ position: 'absolute', bottom: '-15%', width: '70px', height: '70px', background: accentColor, borderRadius: '50%', opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: '20%', width: '40px', height: '40px', background: accentColor, borderRadius: '50%', opacity: 0.9 }} />
            </motion.div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: '140px' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  style={{ height: '28px', background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', borderRadius: '6px' }} />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
                  style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#27C93F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </motion.div>
              </div>

              <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
                style={{ height: '10px', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', borderRadius: '4px', marginBottom: '8px' }} />
              <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }}
                style={{ height: '10px', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', borderRadius: '4px', marginBottom: '20px' }} />
              
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}
                style={{ display: 'flex', gap: '8px' }}>
                <div style={{ padding: '6px 16px', background: 'linear-gradient(135deg, #FF9C60, #FF5F56)', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255,156,96,0.3)' }}>
                  <div style={{ width: '40px', height: '6px', background: 'rgba(255,255,255,0.8)', borderRadius: '3px' }} />
                </div>
                <div style={{ padding: '6px 16px', border: `1px solid ${borderColor}`, borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '40px', height: '6px', background: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', borderRadius: '3px' }} />
                </div>
              </motion.div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '70px', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '12px', display: 'flex', gap: '12px', alignItems: 'center' }} 
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: i === 0 ? 'rgba(255,156,96,0.1)' : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? accentColor : subTextColor }}>
                   {i === 0 ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ width: '80%', height: '6px', background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', borderRadius: '3px' }} />
                  <div style={{ width: '50%', height: '4px', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', borderRadius: '2px' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Floating Mobile Mockup: Social Media Presence */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-10, 10, -10], rotate: [-4, -2, -4] }}
        style={{
          position: 'absolute',
          bottom: '2%',
          right: '8%',
          width: '120px',
          height: '240px',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `6px solid ${isDark ? '#222' : '#E0E0E0'}`,
          boxShadow: shadow,
          borderRadius: '32px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '35%', height: '10px', background: isDark ? '#222' : '#E0E0E0', borderRadius: '6px', margin: '-8px auto 6px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF9C60, #FF5F56)', padding: '2px' }}>
             <div style={{ width: '100%', height: '100%', background: cardBg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: isDark ? '#333' : '#CCC', borderRadius: '50%' }} />
             </div>
          </div>
          <div style={{ width: '60px', height: '6px', background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', borderRadius: '3px' }} />
          <div style={{ display: 'flex', gap: '8px', width: '100%', justifyContent: 'center', marginTop: '2px' }}>
             <div style={{ width: '25%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
             <div style={{ width: '25%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
             <div style={{ width: '25%', height: '4px', background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
          </div>
        </div>
        
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
           {[1, 2, 3, 4].map(i => (
             <div key={i} style={{ background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)', borderRadius: '6px' }} />
           ))}
        </div>
      </motion.div>


      {/* Floating Indicator 1 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [8, -8, 8] }}
        style={{
          position: 'absolute',
          top: '12%',
          left: '4%',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: shadow,
          borderRadius: '100px',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,156,96,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end' }}>
             {[4, 8, 6, 10, 5, 8].map((h, i) => (
               <motion.div key={i} animate={{ height: [h, h*0.5, h] }} transition={{ duration: 1, repeat: Infinity, delay: i*0.1 }} style={{ width: '2px', background: accentColor, borderRadius: '1px' }} />
             ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Indicator 2: Industry Recognition */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        animate={{ y: [-12, 12, -12] }}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '8%',
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
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(39, 201, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27C93F' }}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ fontSize: '13px', fontWeight: 700, color: textColor, fontFamily: "'Inter', sans-serif" }}>Verified</div>
           <div style={{ fontSize: '10px', color: subTextColor, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Industry Recognition</div>
        </div>
      </motion.div>

    </div>
  );
}
