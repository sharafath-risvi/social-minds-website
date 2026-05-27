// ========================================
// FAQ SECTION — WHITE BACKGROUND
// Accordion-style with smooth expand animation
// 8 questions about services, pricing, results
// Giant "FAQ" watermark + orange accent
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ========================================
// FAQ DATA
// ========================================
const faqs = [
  {
    q: 'How quickly will I see results from Social Minds?',
    a: 'Most clients see measurable growth within the first 30 days. Significant results — follower growth, reach spikes, and engagement jumps — typically appear within 60-90 days as our content strategy compounds. We set clear milestones in week 1 so you always know what to expect.',
  },
  {
    q: 'What platforms do you work on?',
    a: 'We specialize in Instagram (Reels + Feed + Stories), YouTube (Shorts + Long-form), LinkedIn, and TikTok. Each platform has a dedicated strategy — we don\'t copy-paste content across platforms. Every piece is native to where it lives.',
  },
  {
    q: 'How are your services priced?',
    a: 'We offer three tiers: Starter (₹15,000/month — ideal for personal brands), Growth (₹35,000/month — for growing businesses), and Scale (₹65,000/month — for aggressive expansion). Custom enterprise packages are also available. All plans include strategy, content production, and analytics reporting.',
  },
  {
    q: 'Do you guarantee a specific number of followers?',
    a: 'We don\'t promise vanity metrics — we promise strategic growth. Our average client sees 200-500% growth in the first 90 days, but we focus on building the right audience: people who convert, not just people who follow. Quality over quantity.',
  },
  {
    q: 'What is your reel production process?',
    a: 'Week 1: Niche audit + strategy session. Week 2: Script writing + hook development. Week 3: Production + editing + platform optimization. Week 4: Publish + monitor + iterate. We produce 8-20 pieces of content per month depending on your plan — all from scratch, all unique.',
  },
  {
    q: 'Will I own the content you create?',
    a: 'Absolutely. 100% of the content we create is owned by you. We transfer all files, raw footage, and assets at the end of each month. There are no licensing fees or usage restrictions.',
  },
  {
    q: 'How do you measure success?',
    a: 'We track 50+ metrics including reach, engagement rate, saves, shares, follower growth, story views, profile visits, website clicks, and DM volume. You receive a detailed monthly report with actionable insights — not just vanity numbers.',
  },
  {
    q: 'Can we start with just one platform?',
    a: 'Yes, and we actually recommend this for new clients. Mastering one platform before expanding ensures deeper penetration and better results. We\'ll build a strong foundation on your primary platform before scaling to others.',
  },
];

// ========================================
// ACCORDION ITEM
// ========================================
function AccordionItem({ faq, index, isOpen, onToggle, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        background: '#fff',
        border: `1px solid ${isOpen ? 'rgba(255,156,96,0.3)' : 'rgba(0,0,0,0.07)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        boxShadow: isOpen ? '0 8px 32px rgba(255,156,96,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Question header */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          {/* Number */}
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '20px',
            color: isOpen ? '#FF9C60' : 'rgba(0,0,0,0.2)',
            lineHeight: 1,
            flexShrink: 0,
            transition: 'color 0.3s ease',
            paddingTop: '2px',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: 600,
            color: isOpen ? '#0D0D0D' : 'rgba(0,0,0,0.7)',
            lineHeight: 1.4,
            transition: 'color 0.3s ease',
          }}>
            {faq.q}
          </span>
        </div>

        {/* Toggle icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            width: '32px', height: '32px',
            borderRadius: '50%',
            background: isOpen ? 'linear-gradient(135deg, #FF9C60, #FF7030)' : 'rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.3s ease',
          }}
        >
          <span style={{
            fontSize: '18px',
            color: isOpen ? '#fff' : 'rgba(0,0,0,0.4)',
            lineHeight: 1,
            transition: 'color 0.3s ease',
          }}>+</span>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 28px 24px 60px' }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: 'rgba(0,0,0,0.5)',
                lineHeight: 1.75,
              }}>
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant FAQ watermark */}
      <div style={{
        position: 'absolute',
        top: '-40px', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(10rem, 22vw, 24rem)',
        color: 'rgba(0,0,0,0.025)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.03em',
      }}>
        FAQ
      </div>

      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tag-orange-dark"
            style={{ marginBottom: '20px' }}
          >
            <span style={{ fontSize: '7px' }}>●</span>
            FREQUENTLY ASKED
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 8rem)',
                color: '#0D0D0D',
                lineHeight: '0.9',
                marginBottom: '20px',
              }}
            >
              Got Questions?<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>We Got Answers.</span>
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
              maxWidth: '420px',
              margin: '0 auto',
            }}
          >
            Everything you need to know before working with us.
          </motion.p>
        </div>

        {/* ── ACCORDION ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              inView={inView}
            />
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '64px',
            padding: '40px',
            background: '#0D0D0D',
            borderRadius: '24px',
          }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Still have questions?
          </p>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: '#fff',
            marginBottom: '24px',
            lineHeight: 1,
          }}>
            Let's Talk. We Don't Bite.
          </h3>
          <a href="/contact" className="btn-primary">
            Book a Free Call ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
