import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// VIDEO TESTIMONIALS DATA
// ========================================
const videoTestimonials = [
  {
    name: 'Rohan Mehta',
    role: 'Founder, FashionBrand.in',
    thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600',
    result: '6,050% growth',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, TechStartup Co.',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    result: '+5,150% followers',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Director, FoodBrand PVT',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    result: '2.1M reel views',
  },
  {
    name: 'Sneha Gupta',
    role: 'Personal Brand Coach',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    result: '200+ weekly DMs',
  },
  {
    name: 'Vivek Nair',
    role: 'Co-founder, EduTech App',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    result: '9x ROI',
  },
  {
    name: 'Ananya Das',
    role: 'Fashion Influencer',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    result: '0 → 384K followers',
  },
];

// ========================================
// VIDEO TESTIMONIAL CARD
// ========================================
function VideoTestimonialCard({ t, i }) {
  return (
    <motion.div
      whileHover="hover"
      style={{
        flexShrink: 0,
        width: 'clamp(280px, 25vw, 340px)',
        height: 'clamp(420px, 40vw, 520px)', // Vertical video format
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        background: '#111',
      }}
    >
      {/* Thumbnail */}
      <motion.div
        variants={{ hover: { scale: 1.05 } }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${t.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 100%)',
      }} />

      {/* Play Button Overlay */}
      <motion.div
        variants={{
          hover: { scale: 1.1, backgroundColor: '#FF7030', borderColor: '#FF7030' }
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          zIndex: 2,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
          <path d="M6 4L20 12L6 20V4Z" fill="white" />
        </svg>
      </motion.div>

      {/* Content Bottom */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '28px 24px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Result Badge */}
        <div style={{
          display: 'inline-flex',
          padding: '6px 14px',
          background: 'rgba(255, 156, 96, 0.95)',
          borderRadius: '100px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          color: '#000',
          marginBottom: '16px',
          alignSelf: 'flex-start',
        }}>
          {t.result}
        </div>

        <div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '4px',
          }}>{t.name}</div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.7)',
          }}>{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = videoTestimonials.slice(0, 3);
  const row2 = videoTestimonials.slice(3, 6);

  return (
    <section
      ref={ref}
      style={{
        background: '#F8F7F4',
        padding: 'clamp(6rem, 12vw, 10rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* ── HEADER ── */}
      <div style={{
        textAlign: 'center',
        padding: '0 clamp(24px, 4vw, 60px)',
        marginBottom: '64px',
        position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="tag-orange-dark"
          style={{ marginBottom: '20px' }}
        >
          <span style={{ fontSize: '7px' }}>●</span>
          CLIENT SUCCESS
        </motion.div>

        {/* Subtle eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(10px, 1.2vw, 13px)',
            fontWeight: 500,
            letterSpacing: '0.22em',
            color: 'rgba(0,0,0,0.3)',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          Real Stories. Real Results.
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              color: '#0D0D0D',
              lineHeight: '0.92',
              marginBottom: '24px',
              whiteSpace: 'nowrap',
              letterSpacing: '0.01em',
            }}
          >
            Brands Don&apos;t{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Lie.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: 'rgba(0,0,0,0.45)',
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          Watch how we've transformed businesses and scaled brands with performance-driven marketing.
        </motion.p>
      </div>

      {/* ── ROW 1 — Left to Right ── */}
      <div style={{ overflow: 'hidden', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-slow" style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '8px 0' }}>
          {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
            <VideoTestimonialCard key={`r1-${i}`} t={t} i={i} />
          ))}
        </div>
      </div>

      {/* ── ROW 2 — Right to Left ── */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-reverse" style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '8px 0' }}>
          {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
            <VideoTestimonialCard key={`r2-${i}`} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
