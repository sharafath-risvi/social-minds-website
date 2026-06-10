import { motion } from 'framer-motion';

export default function HeroDashboardVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background glowing orb */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,156,96,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Main Dashboard Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative',
          width: '85%',
          height: '380px',
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 24px 40px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        }}
      >
        {/* Top Window Bar */}
        <div style={{ display: 'flex', gap: '8px', padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: '24px', display: 'flex', gap: '20px', height: '100%' }}>
          
          {/* Left Column (Chart) */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.1em' }}>TOTAL REVENUE</div>
                <div style={{ color: '#FFF', fontSize: '28px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px', marginTop: '4px' }}>$482,950</div>
              </div>
              <div style={{ background: 'rgba(39, 201, 63, 0.1)', color: '#27C93F', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                +24.8%
              </div>
            </div>

            {/* Simulated Bar Chart */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '12px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                  style={{
                    flex: 1,
                    background: i === 5 ? 'linear-gradient(180deg, #FF9C60 0%, rgba(255,156,96,0.2) 100%)' : 'rgba(255,255,255,0.08)',
                    borderRadius: '4px 4px 0 0',
                    position: 'relative'
                  }}
                >
                  {i === 5 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', background: '#FF9C60', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}
                    >
                      MAX
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Metrics) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['CONVERSIONS', 'ENGAGEMENT', 'TRAFFIC'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (i * 0.15) }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '16px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.1em' }}>{label}</div>
                <div style={{ color: '#FF9C60', fontSize: '20px', fontFamily: "'Bebas Neue', sans-serif", marginTop: '4px' }}>
                  {i === 0 ? '12,408' : i === 1 ? '98.2%' : '4.2M'}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Floating Elements Overlapping the Dashboard */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          background: 'rgba(255,255,255,0.95)',
          padding: '16px 20px',
          borderRadius: '16px',
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3,
        }}
      >
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF9C60', fontSize: '16px' }}>
          ★
        </div>
        <div>
          <div style={{ fontSize: '11px', color: '#666', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}>NEW LEAD</div>
          <div style={{ fontSize: '14px', color: '#0A0A0A', fontWeight: 'bold' }}>Enterprise Deal</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          background: '#FF9C60',
          padding: '12px 16px',
          borderRadius: '12px',
          boxShadow: '0 12px 24px rgba(255,156,96,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 3,
        }}
      >
        <span style={{ color: '#0A0A0A', fontSize: '16px' }}>🚀</span>
        <span style={{ fontSize: '13px', color: '#0A0A0A', fontWeight: 'bold' }}>Campaign Live</span>
      </motion.div>

    </div>
  );
}
