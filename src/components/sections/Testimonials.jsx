import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// WRITTEN TESTIMONIALS DATA
// ========================================
const writtenReviews = [
  {
    name: 'Raja',
    rating: 5,
    text: '"The video editing and video production team at Social Minds is excellent. They created high-quality videos that improved our social media presence. Very creative, responsive, and easy to work with. Great experience overall."',
  },
  {
    name: 'Mohamed',
    rating: 5,
    text: '"Social Minds helped us with performance marketing and branding. Their team understands business goals and delivers effective campaigns. If you\'re looking for reliable digital marketing services in Nungambakkam, Chennai, I highly recommend them."',
  },
  {
    name: 'Abishek',
    rating: 5,
    text: '"Very happy with the service from Social Minds. Their content marketing strategy and creative designs increased our online visibility. Professional team, quick support, and quality work throughout the project."',
  },
  {
    name: 'Thowfik',
    rating: 5,
    text: '"Working with Social Minds has been a great experience. Their digital marketing, video production, and branding services exceeded my expectations. The team is knowledgeable, friendly, and focused on delivering results."',
  },
  {
    name: 'Priya',
    rating: 5,
    text: '"Excellent service and great support. Social Minds helped us build our brand identity and improve our online presence through effective digital marketing. I would definitely recommend them."',
  },
  {
    name: 'Karthik',
    rating: 5,
    text: '"The performance marketing campaigns managed by Social Minds generated quality enquiries for our business. They are transparent, professional, and always available to help. Great team to work with."',
  },
  {
    name: 'Suresh',
    rating: 5,
    text: '"I was impressed by the quality of their video editing and content marketing services. The team delivered creative content on time and helped our business reach more customers. Highly recommended."',
  },
  {
    name: 'Naveen',
    rating: 5,
    text: '"Social Minds is a trusted digital marketing agency in Nungambakkam, Chennai. Their expertise in branding, performance marketing, content marketing, and video production makes them a great partner for any business looking to grow."',
  },
];

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
          marginBottom: review.company ? '4px' : '0',
        }}>
          {review.name}
        </div>
        {review.company && (
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: '#888',
          }}>
            {review.company}
          </div>
        )}
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

  // Distribute Written Testimonials across rows for a unified marquee
  const row1Data = [
    writtenReviews[0],
    writtenReviews[1],
    writtenReviews[2],
    writtenReviews[3],
    writtenReviews[4],
    writtenReviews[5],
    writtenReviews[6],
    writtenReviews[7],
  ];

  const row2Data = [
    writtenReviews[4],
    writtenReviews[5],
    writtenReviews[6],
    writtenReviews[7],
    writtenReviews[0],
    writtenReviews[1],
    writtenReviews[2],
    writtenReviews[3],
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
          See how we&apos;ve transformed businesses and scaled brands with performance-driven marketing.
        </motion.p>
      </div>

      {/* ── ROW 1 — Left to Right ── */}
      <div style={{ overflow: 'hidden', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-slow" style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '8px 0' }}>
          {[...row1Data, ...row1Data, ...row1Data, ...row1Data].map((review, i) => (
            <ReviewCard key={`r1-w-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* ── ROW 2 — Right to Left ── */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <div className="animate-marquee-reverse" style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '8px 0' }}>
          {[...row2Data, ...row2Data, ...row2Data, ...row2Data].map((review, i) => (
            <ReviewCard key={`r2-w-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
