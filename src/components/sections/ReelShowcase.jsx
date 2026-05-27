// ========================================
// REEL SHOWCASE SECTION
// Horizontal scrolling reel cards with cinematic
// overlays, hover play effects, and premium UI
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const reels = [
  {
    id: 1,
    title: 'Brand Launch Strategy',
    category: 'Branding',
    plays: '2.4M',
    gradient: 'linear-gradient(135deg, #1a0030 0%, #4d0080 50%, #FF9C60 100%)',
    aspectRatio: '9/16',
    color: '#B08BFF',
  },
  {
    id: 2,
    title: '30-Day Reel Growth',
    category: 'Reel Growth',
    plays: '1.8M',
    gradient: 'linear-gradient(135deg, #001a10 0%, #003d25 50%, #60D4FF 100%)',
    aspectRatio: '9/16',
    color: '#60D4FF',
  },
  {
    id: 3,
    title: 'Content Hook Formula',
    category: 'Content Strategy',
    plays: '3.1M',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #FF9C60 100%)',
    aspectRatio: '9/16',
    color: '#FF9C60',
  },
  {
    id: 4,
    title: 'Personal Brand Blueprint',
    category: 'Personal Branding',
    plays: '980K',
    gradient: 'linear-gradient(135deg, #001020 0%, #003060 50%, #FF6B9D 100%)',
    aspectRatio: '9/16',
    color: '#FF6B9D',
  },
  {
    id: 5,
    title: 'Viral Caption Writing',
    category: 'Copywriting',
    plays: '1.5M',
    gradient: 'linear-gradient(135deg, #0a1a00 0%, #1a4000 50%, #A3FF60 100%)',
    aspectRatio: '9/16',
    color: '#A3FF60',
  },
];

function ReelCard({ reel, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: '220px',
        height: '380px',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        background: reel.gradient,
        cursor: 'pointer',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${reel.color}30`
          : '0 8px 30px rgba(0,0,0,0.4)',
        transform: hovered ? 'scale(1.04) translateY(-8px)' : 'scale(1) translateY(0)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Animated background pattern */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: '10%',
            right: '10%',
            height: '30px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '6px',
            top: `${20 + i * 20}%`,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* Play button overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '56px',
          height: '56px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.3)',
          fontSize: '20px',
          color: '#fff',
        }}
      >
        ▶
      </motion.div>

      {/* Top tag */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '14px',
        padding: '4px 10px',
        background: `${reel.color}20`,
        border: `1px solid ${reel.color}40`,
        borderRadius: '100px',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '9px',
          color: reel.color,
          letterSpacing: '0.1em',
          fontWeight: 600,
        }}>
          {reel.category.toUpperCase()}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px 16px',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '6px',
          lineHeight: 1.3,
        }}>
          {reel.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: reel.color, fontSize: '10px' }}>▶</span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
          }}>
            {reel.plays} plays
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReelShowcase() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#F5F5F3',
        padding: 'clamp(5rem, 10vw, 8rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 156, 96, 0.3), transparent)',
      }} />

      {/* Header */}
      <div style={{ padding: '0 24px', maxWidth: '1400px', margin: '0 auto 48px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
            >
              <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#FF9C60',
                fontWeight: 700,
              }}>
                REEL SHOWCASE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                color: '#0A0A0A',
                lineHeight: 0.95,
              }}
            >
              CONTENT THAT<br />
              <span style={{ WebkitTextStroke: '2px #0A0A0A', color: 'transparent' }}>GOES VIRAL</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              color: '#838383',
              maxWidth: '280px',
              lineHeight: 1.7,
            }}
          >
            Every reel engineered for maximum reach, engagement, and brand authority.
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '20px',
          padding: '20px 24px 40px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbarWidth: 'none',
          cursor: 'grab',
        }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          el.style.cursor = 'grabbing';
          const startX = e.clientX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (e2) => { el.scrollLeft = scrollLeft - (e2.clientX - el.offsetLeft - startX); };
          const onUp = () => { el.style.cursor = 'grab'; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        }}
      >
        <style>{`.reel-scroll::-webkit-scrollbar { display: none; }`}</style>
        {reels.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} inView={inView} />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 24px',
          justifyContent: 'center',
        }}
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span style={{ fontSize: '20px', opacity: 0.3 }}>→</span>
        </motion.div>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          color: '#838383',
          letterSpacing: '0.1em',
        }}>
          DRAG TO EXPLORE
        </span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        >
          <span style={{ fontSize: '20px', opacity: 0.3 }}>→</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
