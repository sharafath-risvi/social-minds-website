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
  }
];

// ========================================
// WRITTEN TESTIMONIALS DATA
// ========================================
const writtenReviews = [
  {
    name: 'Karan Patel',
    company: 'TechFlow Solutions',
    rating: 5,
    text: '"Social Minds completely revamped our digital presence. Within 3 months, our inbound leads doubled, and our brand authority skyrocketed. They truly understand modern performance marketing."',
  },
  {
    name: 'Simran Kaur',
    company: 'Glow Cosmetics',
    rating: 5,
    text: '"The team’s creative strategy and data-driven approach are unmatched. They didn’t just run ads; they built a community around our brand. Absolutely exceptional experience!"',
  },
  {
    name: 'Rahul Desai',
    company: 'Urban Fit Apparel',
    rating: 5,
    text: '"Working with Social Minds has been the best ROI decision we made this year. Their execution is flawless, and the transparent communication keeps us always in the loop."',
  },
  {
    name: 'Emily Chen',
    company: 'NextGen SaaS',
    rating: 5,
    text: '"We struggled with lead generation for months. Social Minds stepped in, optimized our funnels, and our conversion rate jumped by 400%. The results speak for themselves."',
  },
  {
    name: 'David Okafor',
    company: 'Apex Fitness',
    rating: 5,
    text: '"What sets them apart is their speed and attention to detail. Every campaign feels custom-tailored, and they are constantly A/B testing to ensure we get the lowest CPA possible."',
  },
  {
    name: 'Sophia Martinez',
    company: 'Luxe Interiors',
    rating: 5,
    text: '"They have a brilliant eye for aesthetics. Not only did our ad performance improve, but our entire brand perception became significantly more premium. Highly recommended."',
  },
  {
    name: 'Michael Chang',
    company: 'FinTech Innovators',
    rating: 5,
    text: '"Their ability to take complex B2B concepts and turn them into highly engaging, viral content is incredible. Our LinkedIn presence has never been stronger."',
  }
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
// WRITTEN REVIEW CARD
// ========================================
function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}
      style={{
        flexShrink: 0,
        width: 'clamp(280px, 25vw, 340px)',
        height: 'clamp(420px, 40vw, 520px)',
        background: '#FFF',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid #EAEAEA',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        transition: 'all 0.4s ease',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
      }}
    >
      {/* 5 Stars */}
      <div style={{ display: 'flex', gap: '6px' }}>
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF7030" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '16px',
        lineHeight: 1.7,
        color: '#555',
        flexGrow: 1,
        fontStyle: 'italic',
      }}>
        {review.text}
      </p>

      <div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '18px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '4px',
        }}>
          {review.name}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: '#888',
        }}>
          {review.company}
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

  // Mix Video & Written Testimonials for a unified marquee (Written dominant)
  const row1Data = [
    { type: 'written', data: writtenReviews[0] },
    { type: 'written', data: writtenReviews[1] },
    { type: 'video', data: videoTestimonials[0] },
    { type: 'written', data: writtenReviews[2] },
    { type: 'written', data: writtenReviews[3] },
  ];

  const row2Data = [
    { type: 'written', data: writtenReviews[4] },
    { type: 'video', data: videoTestimonials[1] },
    { type: 'written', data: writtenReviews[5] },
    { type: 'written', data: writtenReviews[6] },
    { type: 'video', data: videoTestimonials[2] },
  ];

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
          {[...row1Data, ...row1Data, ...row1Data, ...row1Data].map((item, i) => (
            item.type === 'video' ? <VideoTestimonialCard key={`r1-v-${i}`} t={item.data} /> : <ReviewCard key={`r1-w-${i}`} review={item.data} />
          ))}
        </div>
      </div>

      {/* ── ROW 2 — Right to Left ── */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-reverse" style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '8px 0' }}>
          {[...row2Data, ...row2Data, ...row2Data, ...row2Data].map((item, i) => (
            item.type === 'video' ? <VideoTestimonialCard key={`r2-v-${i}`} t={item.data} /> : <ReviewCard key={`r2-w-${i}`} review={item.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
