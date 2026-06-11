// ========================================
// HOW WE MAKE MAGIC HAPPEN — v4.0
// CINEMATIC EDITORIAL REDESIGN
// Dark background | Slanted image panels
// Premium alternating split layout
// Netflix/F1 editorial visual style
// ========================================

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// ========================================
// CHAPTER DATA
// ========================================
const CHAPTERS = [
  {
    number: '01',
    eyebrow: 'DISCOVERY',
    title: 'We Study\nYour Audience',
    description:
      'Before we create a single post, we go deep. We analyze your niche, dissect your competitors, and identify the exact triggers that make your audience act. This intelligence becomes the foundation of every move we make.',
    details: [
      { label: 'Competitor Analysis', value: '360°' },
      { label: 'Audience Psychographics', value: 'Deep' },
      { label: 'Algorithm Study', value: 'Live' },
      { label: 'Opportunity Mapping', value: 'Niche' },
    ],
    stat: '12,847',
    statLabel: 'Data points per brand audit',
    image: '/process-discovery.png',
    imageAlt: 'Discovery — filming and analytics',
    flip: false,
  },
  {
    number: '02',
    eyebrow: 'CREATION',
    title: 'We Craft\nViral Content',
    description:
      'Every hook, every cut, every caption — engineered to perform. We don\'t post for the sake of posting. We produce content that earns attention, builds trust, and drives measurable action from the first frame.',
    details: [
      { label: 'Hook-First Scripting', value: 'Sharp' },
      { label: 'Cinematic Production', value: 'Pro' },
      { label: 'Trending Audio Pairing', value: 'Live' },
      { label: 'Platform-Native Editing', value: 'Native' },
    ],
    stat: '3.2M',
    statLabel: 'Average reel views per post',
    image: '/process-creation.png',
    imageAlt: 'Creation — editing workflow',
    flip: true,
  },
  {
    number: '03',
    eyebrow: 'SCALING',
    title: 'We Scale\nYour Brand',
    description:
      'When a content system works, we double down ruthlessly. We optimize what performs, eliminate what doesn\'t, and compound your growth week after week until your brand becomes impossible to ignore in your space.',
    details: [
      { label: 'Weekly Performance Review', value: 'Live' },
      { label: 'Content Iteration Loops', value: 'Fast' },
      { label: 'Growth Lever Identification', value: 'Data' },
      { label: 'Compound Audience Building', value: 'Long' },
    ],
    stat: '284%',
    statLabel: 'Average brand growth boost',
    image: '/process-scaling.png',
    imageAlt: 'Scaling — analytics dashboard',
    flip: false,
  },
];

// ========================================
// CINEMATIC IMAGE PANEL
// A slanted, layered editorial image composition
// ========================================
function CinematicImagePanel({ chapter, scrollY }) {
  const panelRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  });

  // Reduced range from [30,-30] to [15,-15] — halves transform update distance per tick
  const imgY    = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.0, 1.02]);

  return (
    <div
      ref={panelRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/5',
        maxHeight: '600px',
      }}
    >
      {/* Outer glow halo */}
      <div style={{
        position: 'absolute',
        inset: '-20px',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,156,96,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Main slanted image frame */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        borderRadius: '4px',
        clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
        zIndex: 1,
        boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)',
      }}>
        <motion.img
          src={chapter.image}
          alt={chapter.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            y: imgY,
            scale: imgScale,
            filter: 'brightness(0.88) contrast(1.06) saturate(0.92)',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
        {/* Cinematic dark vignette overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.28) 0%, transparent 40%, rgba(0,0,0,0.45) 100%)',
          pointerEvents: 'none',
        }} />
        {/* Left edge fade */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8,8,8,0.55) 0%, transparent 35%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Slanted overlay accent strip — left edge */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, bottom: 0,
        width: '3px',
        background: 'linear-gradient(180deg, transparent 0%, #FF9C60 35%, #FF7030 65%, transparent 100%)',
        zIndex: 2,
        opacity: 0.8,
      }} />

      {/* Top-right corner accent */}
      <div style={{
        position: 'absolute',
        top: '20px', right: '20px',
        width: '48px', height: '2px',
        background: 'rgba(255,255,255,0.15)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        top: '20px', right: '20px',
        width: '2px', height: '48px',
        background: 'rgba(255,255,255,0.15)',
        zIndex: 3,
      }} />

      {/* Bottom-left corner accent */}
      <div style={{
        position: 'absolute',
        bottom: '20px', left: '20px',
        width: '48px', height: '2px',
        background: 'rgba(255,156,96,0.4)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px', left: '20px',
        width: '2px', height: '48px',
        background: 'rgba(255,156,96,0.4)',
        zIndex: 3,
      }} />

      {/* Chapter number watermark on image */}
      <div style={{
        position: 'absolute',
        bottom: '28px', right: '28px',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '120px',
        color: 'rgba(255,255,255,0.06)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.02em',
        zIndex: 2,
      }}>
        {chapter.number}
      </div>
    </div>
  );
}

// ========================================
// TEXT CONTENT BLOCK
// ========================================
function ContentBlock({ chapter, inView }) {
  return (
    <div style={{ position: 'relative' }}>

      {/* Oversized background number */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        left: '-20px',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(8rem, 16vw, 18rem)',
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.03em',
        zIndex: 0,
      }}>
        {chapter.number}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow + number row */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '28px',
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            border: '1px solid rgba(255,156,96,0.35)',
            background: 'rgba(255,156,96,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            color: '#FF9C60',
            letterSpacing: '0.05em',
          }}>
            {chapter.number}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{
              width: '24px',
              height: '1.5px',
              background: 'linear-gradient(90deg, #FF9C60, rgba(255,156,96,0.3))',
            }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: '#FF9C60',
              textTransform: 'uppercase',
            }}>
              {chapter.eyebrow}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 7rem)',
              color: '#ffffff',
              lineHeight: '0.92',
              letterSpacing: '-0.01em',
              whiteSpace: 'pre-line',
              margin: 0,
            }}
          >
            {chapter.title}
          </motion.h2>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,156,96,0.5) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
            marginBottom: '24px',
            transformOrigin: 'left',
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.26 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.48)',
            lineHeight: 1.8,
            marginBottom: '36px',
            maxWidth: '520px',
          }}
        >
          {chapter.description}
        </motion.p>

        {/* Detail grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '36px',
        }}>
          {chapter.details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.07 }}
              style={{
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Tiny left accent */}
              <div style={{
                position: 'absolute',
                left: 0, top: '20%', bottom: '20%',
                width: '2px',
                background: 'linear-gradient(180deg, transparent, #FF9C60, transparent)',
                opacity: 0.5,
                borderRadius: '1px',
              }} />
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '18px',
                color: '#FF9C60',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}>
                {d.value}
              </span>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '9px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.38)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {d.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '14px',
            padding: '20px 24px',
            background: 'linear-gradient(120deg, rgba(255,156,96,0.07) 0%, rgba(255,255,255,0.025) 100%)',
            border: '1px solid rgba(255,156,96,0.2)',
            borderRadius: '14px',
          }}
        >
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
            color: '#FF9C60',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>
            {chapter.stat}
          </span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            maxWidth: '180px',
          }}>
            {chapter.statLabel}
          </span>
        </motion.div>

      </div>
    </div>
  );
}

// ========================================
// CHAPTER ROW — split layout
// ========================================
function ChapterRow({ chapter, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const panelY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const isFlipped = chapter.flip;

  return (
    <div
      ref={ref}
      style={{
        padding: 'clamp(5rem, 9vw, 8rem) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle horizontal rule between chapters (not for first) */}
      {index > 0 && (
        <div style={{
          position: 'absolute',
          top: 0, left: '10%', right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
        }} />
      )}

      {/* Ambient glow per chapter */}
      <div style={{
        position: 'absolute',
        top: '50%', left: isFlipped ? 'auto' : '30%', right: isFlipped ? '30%' : 'auto',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,156,96,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: 'clamp(40px, 7vw, 100px)',
        alignItems: 'center',
      }}>

        {/* Content */}
        <div style={{ order: isFlipped ? 2 : 1 }}>
          <ContentBlock chapter={chapter} inView={inView} />
        </div>

        {/* Image Panel */}
        <motion.div
          style={{ order: isFlipped ? 1 : 2, y: panelY, willChange: 'transform', transform: 'translateZ(0)' }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <CinematicImagePanel chapter={chapter} />
        </motion.div>

      </div>

      {/* Step progress line — right edge */}
      <div style={{
        position: 'absolute',
        right: '24px', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}>
        {CHAPTERS.map((_, i) => (
          <div key={i} style={{
            width: '2px',
            height: i === index ? '32px' : '14px',
            background: i === index
              ? 'linear-gradient(180deg, #FF9C60, #FF7030)'
              : 'rgba(255,255,255,0.1)',
            borderRadius: '1px',
            transition: 'height 0.4s ease',
          }} />
        ))}
      </div>
    </div>
  );
}

// ========================================
// MAIN EXPORT
// ========================================
export default function VerticalParallaxStory() {
  return (
    <section style={{
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Noise texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.025,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Top gradient — blends from Services section */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(180deg, #060606 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* INTRO HEADER */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(2rem, 4vw, 4rem) clamp(24px, 5vw, 80px) clamp(1.5rem, 3vw, 2.5rem)',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="tag-orange"
          style={{ marginBottom: '24px', display: 'inline-flex' }}
        >
          <span style={{ fontSize: '7px' }}>●</span>
          OUR PROCESS
        </motion.div>

        {/* Heading — no overflow clip, simple fade+slide */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 10rem)',
            color: '#ffffff',
            lineHeight: '0.92',
            letterSpacing: '-0.01em',
            margin: '0 0 28px 0',
          }}
        >
          How We Make<br />
          <span style={{
            background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}>
            Magic Happen.
          </span>
        </motion.h2>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 auto 32px',
          }}
        >
          A refined creative system engineered to transform brands into
          unforgettable digital experiences. Three phases. One relentless engine.
        </motion.p>

        {/* Feature tags row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
        >
          {['Strategy First', 'Cinematic Content', 'Growth Driven'].map((tag, i) => (
            <div key={tag} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 18px',
              background: 'rgba(30,30,30,0.90)',
              border: '1px solid rgba(255,156,96,0.22)',
              borderRadius: '100px',
              // Removed backdropFilter:blur(8px) — solid dark bg is equivalent on #080808
              boxShadow: '0 0 16px rgba(255,156,96,0.08)',
            }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: '#FF9C60',
                boxShadow: '0 0 6px rgba(255,156,96,0.7)',
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
              }}>{tag}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* CHAPTER ROWS */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {CHAPTERS.map((chapter, i) => (
          <ChapterRow key={chapter.number} chapter={chapter} index={i} />
        ))}
      </div>

      {/* Bottom gradient — blends to next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(0deg, rgba(248,247,244,0.06) 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
    </section>
  );
}
