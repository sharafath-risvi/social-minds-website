// ========================================
// REEL PSYCHOLOGY SECTION — WHITE
// "Why Reels Work" — animated funnel + triggers
// 5 psychological triggers with hover reveals
// Premium editorial white design
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ========================================
// PSYCHOLOGICAL TRIGGERS
// ========================================
const triggers = [
  {
    number: '01',
    trigger: 'Pattern Interrupt',
    description:
      'The human brain is wired to notice change. We design openings that break the expected scroll pattern — forcing the viewer to pause and look.',
    icon: '⚡',
    stat: '94%',
    statLabel: 'of viewers hooked in 2s',
    color: '#FF9C60',
  },
  {
    number: '02',
    trigger: 'Curiosity Gap',
    description:
      `We create information gaps that only resolve by watching the full reel. "You won't believe what happened at 0:52" — psychology drives completion.`,
    icon: '🔍',
    stat: '78%',
    statLabel: 'completion rate achieved',
    color: '#60D4FF',
  },
  {
    number: '03',
    trigger: 'Social Proof Loop',
    description:
      'Reels that show real results activate FOMO and aspiration simultaneously. We layer your wins into content that makes viewers think "I need this."',
    icon: '👥',
    stat: '340%',
    statLabel: 'more shares vs static posts',
    color: '#A3FF60',
  },
  {
    number: '04',
    trigger: 'Dopamine Reward',
    description:
      'Fast cuts, satisfying visuals, and emotional peaks trigger dopamine release — making viewers want to replay and share. We engineer every frame for this.',
    icon: '🎯',
    stat: '3.2M',
    statLabel: 'avg views per reel',
    color: '#FF6B9D',
  },
  {
    number: '05',
    trigger: 'Authority Signal',
    description:
      'Consistent professional content builds perceived expertise. Within 30 days, your audience starts seeing you as THE authority in your niche.',
    icon: '🏆',
    stat: '18.6%',
    statLabel: 'avg engagement rate',
    color: '#C084FC',
  },
];

// ========================================
// FUNNEL VISUALIZATION
// ========================================
function ReelFunnel({ inView }) {
  const stages = [
    { label: 'SCROLL STOP', width: '100%', value: '100%', color: '#FF9C60' },
    { label: 'HOOK WATCH', width: '85%', value: '85%', color: '#FFB83F' },
    { label: 'FULL VIEW', width: '68%', value: '68%', color: '#A3FF60' },
    { label: 'ENGAGE', width: '42%', value: '42%', color: '#60D4FF' },
    { label: 'FOLLOW', width: '22%', value: '22%', color: '#C084FC' },
    { label: 'CONVERT', width: '8%', value: '8%', color: '#FF6B9D' },
  ];

  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: '24px',
      padding: '40px 36px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '10px',
        letterSpacing: '0.2em',
        color: 'rgba(0,0,0,0.35)',
        textTransform: 'uppercase',
        marginBottom: '28px',
      }}>
        REEL CONVERSION FUNNEL
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {stages.map((stage, i) => (
          <div key={stage.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em' }}>
                {stage.label}
              </span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px', color: stage.color, letterSpacing: '0.04em' }}>
                {stage.value}
              </span>
            </div>
            <div style={{ height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <motion.div
                style={{ height: '100%', background: `linear-gradient(90deg, ${stage.color}, ${stage.color}AA)`, borderRadius: '4px' }}
                initial={{ width: 0 }}
                animate={inView ? { width: stage.width } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div style={{
        marginTop: '24px',
        padding: '12px 16px',
        background: 'rgba(255,156,96,0.06)',
        border: '1px solid rgba(255,156,96,0.15)',
        borderRadius: '10px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '11px',
        color: 'rgba(0,0,0,0.45)',
        lineHeight: 1.5,
      }}>
        ⚡ Our reels perform 6.2x better than the platform average — across all stages of this funnel.
      </div>
    </div>
  );
}

// ========================================
// TRIGGER CARD
// ========================================
function TriggerCard({ trigger, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? trigger.color + '35' : 'rgba(0,0,0,0.07)'}`,
        borderRadius: '20px',
        padding: '28px 28px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.1), 0 0 0 1px ${trigger.color}20`
          : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Background color flash on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `${trigger.color}04`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px', height: '40px',
              background: `${trigger.color}12`,
              border: `1px solid ${trigger.color}25`,
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px',
            }}>
              {trigger.icon}
            </div>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '60px',
              color: 'rgba(0,0,0,0.05)',
              lineHeight: 1,
              userSelect: 'none',
            }}>{trigger.number}</span>
          </div>

          {/* Stat on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              textAlign: 'right',
            }}
          >
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: trigger.color, letterSpacing: '0.03em', lineHeight: 1 }}>
              {trigger.stat}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '9px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.06em' }}>
              {trigger.statLabel}
            </div>
          </motion.div>
        </div>

        {/* Trigger name */}
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
          color: '#0D0D0D',
          lineHeight: 1,
          marginBottom: '10px',
        }}>
          {trigger.trigger}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          color: 'rgba(0,0,0,0.45)',
          lineHeight: 1.7,
        }}>
          {trigger.description}
        </p>

        {/* Orange accent line */}
        <motion.div
          animate={{ width: hovered ? '100%' : '24px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            height: '2px',
            background: `linear-gradient(90deg, ${trigger.color}, transparent)`,
            borderRadius: '1px',
            marginTop: '16px',
          }}
        />
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================
export default function ReelPsychologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#FAF9F6',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark BG text */}
      <div style={{
        position: 'absolute',
        bottom: '-40px', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(8rem, 20vw, 20rem)',
        color: 'rgba(0,0,0,0.025)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        PSYCHOLOGY
      </div>

      <div className="dot-bg-white" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tag-orange-dark"
            style={{ marginBottom: '20px' }}
          >
            <span style={{ fontSize: '7px' }}>●</span>
            THE SCIENCE BEHIND VIRALITY
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 9rem)',
                color: '#0D0D0D',
                lineHeight: '0.9',
                marginBottom: '20px',
              }}
            >
              Why Reels<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Actually Work.</span>
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
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            It's not luck. It's not trends. It's psychology applied to pixels. Here's the science we use every day.
          </motion.p>
        </div>

        {/* ── LAYOUT: Funnel + Trigger Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* Left: Funnel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#0D0D0D',
              lineHeight: 1,
              marginBottom: '24px',
            }}>
              The Reel Funnel
            </div>
            <ReelFunnel inView={inView} />
          </motion.div>

          {/* Right: Trigger Cards */}
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#0D0D0D',
              lineHeight: 1,
              marginBottom: '24px',
            }}>
              5 Psychological Triggers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {triggers.map((trigger, i) => (
                <TriggerCard key={trigger.trigger} trigger={trigger} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
