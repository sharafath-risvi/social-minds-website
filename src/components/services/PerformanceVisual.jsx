import { motion } from 'framer-motion';

export default function PerformanceVisual({ theme }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const cardBg = isDark ? 'rgba(15,15,15,0.65)' : 'rgba(255,255,255,0.85)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  const shadow = isDark ? '0 10px 20px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.05)';
  const accentColor = '#FF9C60';

  // Network Nodes distributed perfectly evenly in an expansive ring
  const nodes = [
    { id: 0, label: 'Audience Targeting', x: 22, y: 22 },
    { id: 1, label: 'Lead Generation', x: 50, y: 12 },
    { id: 2, label: 'Campaign Strategy', x: 78, y: 22 },
    { id: 3, label: 'Conversion Optimization', x: 88, y: 50 },
    { id: 4, label: 'Funnel Optimization', x: 78, y: 78 },
    { id: 5, label: 'Creative Testing', x: 50, y: 88 },
    { id: 6, label: 'Retargeting', x: 22, y: 78 },
    { id: 7, label: 'Multi-Platform Ads', x: 12, y: 50 },
  ];

  // Create a stunning, complex mesh of connections (Mandala / Neural Net pattern)
  const connections = [
    // Outer Ring
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    // Star Diagonals (intersecting through the empty center)
    [0, 4], [1, 5], [2, 6], [3, 7],
    // Inner Square 1
    [0, 2], [2, 4], [4, 6], [6, 0],
    // Inner Square 2
    [1, 3], [3, 5], [5, 7], [7, 1]
  ];

  return (
    <div style={{ position: 'relative', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      
      {/* Expansive Ambient Background Glow for the Network */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,156,96,0.12) 0%, transparent 65%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Network Connections Layer (SVG) */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.15" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.7" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.15" />
          </linearGradient>
          
          <linearGradient id="faintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor={isDark ? '#FFF' : '#000'} stopOpacity="0.08" />
             <stop offset="50%" stopColor={isDark ? '#FFF' : '#000'} stopOpacity="0.25" />
             <stop offset="100%" stopColor={isDark ? '#FFF' : '#000'} stopOpacity="0.08" />
          </linearGradient>

          {/* Glowing particle dots moving along paths */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Flow Direction Arrow Markers */}
          <marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={accentColor} opacity="0.6" />
          </marker>
        </defs>

        {/* Draw all connection lines */}
        {connections.map((conn, i) => {
          const n1 = nodes[conn[0]];
          const n2 = nodes[conn[1]];
          
          // Outer ring lines get orange gradient, inner mesh gets faint theme color
          const isOuterRing = i < 8;
          const strokeColor = isOuterRing ? "url(#lineGrad)" : "url(#faintGrad)";
          const strokeWidth = isOuterRing ? "2" : "1.5"; // Thicker, more premium lines
          const dash = isOuterRing ? "4 6" : "2 6";
          
          return (
            <motion.line
              key={`conn-${i}`}
              x1={`${n1.x}%`} y1={`${n1.y}%`}
              x2={`${n2.x}%`} y2={`${n2.y}%`}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={dash}
              markerEnd={isOuterRing ? "url(#arrowHead)" : "none"} // Add directional arrows to outer ring
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.05, ease: "easeInOut" }}
            />
          );
        })}

        {/* Traveling Data Flow Packets on key paths */}
        {[0, 2, 4, 6, 8, 9, 10, 11].map((connIndex, i) => {
          const conn = connections[connIndex];
          const n1 = nodes[conn[0]];
          const n2 = nodes[conn[1]];
          return (
            <g key={`dataflow-${i}`}>
              <motion.circle cx="0" cy="0" r="3.5" fill={accentColor} filter="url(#glow)">
                <animateMotion dur={`${3 + (i % 3)}s`} repeatCount="indefinite" path={`M ${n1.x}% ${n1.y}% L ${n2.x}% ${n2.y}%`} calcMode="linear" />
              </motion.circle>
              {/* Secondary trailing particle for "data packet" effect */}
              <motion.circle cx="0" cy="0" r="1.5" fill={isDark ? '#FFF' : '#000'} opacity="0.5">
                <animateMotion dur={`${3 + (i % 3)}s`} begin="0.2s" repeatCount="indefinite" path={`M ${n1.x}% ${n1.y}% L ${n2.x}% ${n2.y}%`} calcMode="linear" />
              </motion.circle>
            </g>
          );
        })}
        
        {/* Subtle glowing intersections at the exact center of the mesh where diagonals cross */}
        <motion.circle cx="50%" cy="50%" r="24" fill={accentColor} opacity="0.06" filter="url(#glow)" 
           animate={{ scale: [1, 1.4, 1], opacity: [0.03, 0.1, 0.03] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.circle cx="50%" cy="50%" r="8" fill={isDark ? '#FFF' : '#000'} opacity="0.05" 
           animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>

      {/* Distributed Network Nodes (Tags) - Scaled Down */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
            whileInView={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), type: 'spring', bounce: 0.4 }}
            animate={{
              y: [`calc(-50% - ${i % 2 === 0 ? 4 : -4}px)`, `calc(-50% + ${i % 2 === 0 ? 4 : -4}px)`]
            }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 } }}
            style={{
              position: 'absolute',
              left: `${node.x}%`,
              top: `${node.y}%`,
              background: cardBg,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${cardBorder}`,
              boxShadow: shadow,
              borderRadius: '100px',
              padding: '8px 14px', // Reduced padding to make cards smaller
              display: 'flex',
              alignItems: 'center',
              gap: '8px', // Reduced gap
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              maxWidth: 'none', // Ensure no cropping
            }}
            whileHover={{ scale: 1.05, border: `1px solid rgba(255,156,96,0.4)` }}
          >
             {/* Premium glowing connection node dot */}
             <div style={{ position: 'relative', width: '6px', height: '6px' }}>
                <motion.div 
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.9, 0.4] }} 
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: accentColor, filter: 'blur(2px)' }} 
                />
                <div style={{ position: 'absolute', inset: '1px', borderRadius: '50%', background: accentColor }} />
             </div>
             
             {/* Reduced font size for cleaner presentation */}
             <span style={{ fontSize: '10.5px', fontWeight: 600, color: textColor, fontFamily: "'Inter', sans-serif" }}>
                {node.label}
             </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
