// ========================================
// PRICING PAGE
// Premium glassmorphism pricing cards
// Starter / Growth / Dominate tiers
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pricingPlans, faqs } from '../data/pricing';
import FinalCTA from '../components/sections/FinalCTA';

function AnimatedSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.12 }}
      whileHover={{ y: -8 }}
      style={{
        position: 'relative',
        background: plan.featured
          ? 'linear-gradient(145deg, rgba(255, 156, 96, 0.08) 0%, rgba(255, 112, 48, 0.04) 100%)'
          : 'rgba(255,255,255,0.03)',
        border: plan.featured
          ? '1px solid rgba(255, 156, 96, 0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '28px',
        padding: '40px 36px',
        overflow: 'hidden',
        boxShadow: plan.featured
          ? '0 0 60px rgba(255, 156, 96, 0.1), 0 20px 60px rgba(0,0,0,0.3)'
          : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Featured glow */}
      {plan.featured && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #FF9C60, transparent)',
        }} />
      )}

      {/* Tag */}
      <div style={{
        display: 'inline-flex',
        padding: '4px 12px',
        background: plan.featured ? 'rgba(255, 156, 96, 0.15)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${plan.featured ? 'rgba(255, 156, 96, 0.3)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '100px',
        marginBottom: '24px',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          color: plan.featured ? '#FF9C60' : 'rgba(255,255,255,0.4)',
        }}>
          {plan.tag}
        </span>
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '2.5rem',
        color: '#FFFFFF',
        lineHeight: 1,
        letterSpacing: '0.04em',
        marginBottom: '4px',
      }}>
        {plan.name}
      </h3>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '13px',
        color: '#838383',
        marginBottom: '24px',
      }}>
        {plan.subtitle}
      </p>

      {/* Price */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: plan.featured ? '#FF9C60' : '#FFFFFF',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>
            {plan.price}
          </span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: '#838383',
            marginBottom: '6px',
          }}>
            {plan.period}
          </span>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        color: 'rgba(255,255,255,0.4)',
        lineHeight: 1.7,
        marginBottom: '32px',
        paddingBottom: '32px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {plan.description}
      </p>

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
        {plan.features.map((feature) => (
          <li key={feature.text} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: feature.included
              ? 'rgba(255,255,255,0.7)'
              : 'rgba(255,255,255,0.2)',
          }}>
            <span style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              flexShrink: 0,
              background: feature.included ? 'rgba(255, 156, 96, 0.15)' : 'rgba(255,255,255,0.05)',
              color: feature.included ? '#FF9C60' : 'rgba(255,255,255,0.2)',
            }}>
              {feature.included ? '✓' : '×'}
            </span>
            <span style={{ textDecoration: feature.included ? 'none' : 'line-through' }}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/contact"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '14px',
          borderRadius: '100px',
          textDecoration: 'none',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          background: plan.featured
            ? 'linear-gradient(135deg, #FF9C60, #FF7030)'
            : 'rgba(255,255,255,0.06)',
          color: plan.featured ? '#000' : 'rgba(255,255,255,0.7)',
          border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
          boxShadow: plan.featured ? '0 0 30px rgba(255, 156, 96, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!plan.featured) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          } else {
            e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 156, 96, 0.5)';
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.featured) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          } else {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 156, 96, 0.3)';
          }
        }}
      >
        Get Started ↗
      </Link>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          gap: '24px',
        }}
      >
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          fontWeight: 600,
          color: open ? '#FF9C60' : '#FFFFFF',
          transition: 'color 0.2s ease',
          flex: 1,
        }}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '32px',
            height: '32px',
            background: open ? 'rgba(255, 156, 96, 0.15)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${open ? 'rgba(255, 156, 96, 0.3)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: open ? '#FF9C60' : 'rgba(255,255,255,0.4)',
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              paddingBottom: '28px',
              paddingRight: '56px',
            }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        background: '#000',
        padding: 'clamp(8rem, 15vw, 12rem) 24px clamp(4rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255, 156, 96, 0.08)',
              border: '1px solid rgba(255, 156, 96, 0.2)',
              borderRadius: '100px',
              marginBottom: '32px',
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.15em', color: '#FF9C60', fontWeight: 600 }}>
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 11rem)', lineHeight: 0.9, marginBottom: '24px' }}
          >
            <span style={{ color: '#FFFFFF' }}>INVEST IN</span><br />
            <span className="gradient-text-orange glow-text-orange">YOUR GROWTH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
          >
            No surprises. No hidden fees. Just premium social media marketing at three investment levels.
          </motion.p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(5rem, 10vw, 8rem) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          {/* Fine print */}
          <AnimatedSection delay={0.5} style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
              All plans include a free 30-minute strategy session. Prices exclude GST. No lock-in contracts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F5F5F3', padding: 'clamp(5rem, 10vw, 8rem) 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
                COMMON QUESTIONS
              </span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#0A0A0A', lineHeight: 0.92, marginBottom: '64px' }}>
              FREQUENTLY<br />
              <span style={{ WebkitTextStroke: '2px #0A0A0A', color: 'transparent' }}>ASKED</span>
            </h2>
          </AnimatedSection>

          {/* FAQ items — on dark background within white section */}
          <div style={{
            background: '#0A0A0A',
            borderRadius: '28px',
            padding: 'clamp(2rem, 4vw, 4rem)',
          }}>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
