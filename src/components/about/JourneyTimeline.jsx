// ================================================================
// JOURNEY TIMELINE — Section 05
// Horizontal cinematic milestone timeline with pinned parallax scroll
// Alternating layout with images and content blocks
// ================================================================

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SPRING = [0.16, 1, 0.3, 1];

// ── Timeline milestones data
const MILESTONES = [
  {
    year: 'Phase 1',
    title: 'Foundation & Vision',
    desc: 'Social Minds founded with a single mission: make brands impossible to ignore. A new era of premium storytelling begins.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: 'Phase 2',
    title: 'First Brand Partnership',
    desc: 'Secured our first major client and delivered a campaign that set the standard for our signature cinematic approach.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: 'Phase 3',
    title: 'Content Expansion',
    desc: 'Expanded our in-house production capabilities, adding dedicated podcast and short-form video studios.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: 'Phase 4',
    title: 'Performance Marketing Launch',
    desc: 'Integrated data-driven paid media strategies to amplify our organic creative, achieving unprecedented ROAS for partners.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: 'Phase 5',
    title: 'Regional Growth',
    desc: 'Scaled operations and team size, taking on international clients and establishing a multi-city presence.',
    img: '/process/growth.png',
  },
  {
    year: 'Phase 6',
    title: 'Trusted Growth Partner',
    desc: 'Recognized as the definitive premium content studio, partnering with industry leaders for 360° brand transformation.',
    img: '/hero/dashboard.png',
  },
];

export default function JourneyTimeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = trackRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        return Math.max(0, trackWidth - windowWidth);
      };

      const tween = gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: () => `+=${getScrollAmount() + (window.innerHeight * 0.5)}`,
        pin: true,
        animation: tween,
        scrub: 1, // smooth scrubbing
        invalidateOnRefresh: true, // recalculate on resize
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="ab-timeline-section" 
      aria-label="Agency Journey Timeline"
      ref={sectionRef}
    >
      <div className="ab-timeline-wrapper">
        <div className="ab-timeline">
          {/* ── Section header ── */}
          <motion.div
            className="ab-timeline-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: SPRING }}
          >
            <div className="ab-eyebrow" style={{
              background: 'rgba(255,156,96,0.08)',
              borderColor: 'rgba(255,156,96,0.2)',
            }}>
              <span className="ab-eyebrow-dot" aria-hidden="true" />
              Our Journey
            </div>

            <h2 className="ab-timeline-heading">
              The Story So
              <br />
              <span>Far.</span>
            </h2>
          </motion.div>

          {/* ── Horizontal scroll track ── */}
          <div
            className="ab-timeline-scroll-area"
            role="region"
            aria-label="Timeline items"
          >
            <div className="ab-timeline-track" ref={trackRef}>
              {/* Central connecting lines */}
              <div className="ab-timeline-line" aria-hidden="true" />
              <div className="ab-timeline-line-fill" aria-hidden="true" />

              {MILESTONES.map((item, i) => {
                const isImageTop = i % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${i}`}
                  className="ab-tl-item"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: SPRING }}
                >
                  {/* Central Marker */}
                  <div className="ab-tl-marker" />

                  {/* Top Half */}
                  <div className="ab-tl-content-top">
                    {isImageTop && <div className="ab-tl-connector-top" aria-hidden="true" />}
                    {isImageTop ? (
                      <motion.div 
                        className="ab-tl-img-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: SPRING }}
                      >
                        <img src={item.img} alt={item.title} className="ab-tl-img" draggable={false} />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="ab-tl-text-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: SPRING }}
                      >
                        <div className="ab-tl-year">{item.year}</div>
                        <h3 className="ab-tl-title">{item.title}</h3>
                        <p className="ab-tl-desc">{item.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom Half */}
                  <div className="ab-tl-content-bottom">
                    {!isImageTop && <div className="ab-tl-connector-bottom" aria-hidden="true" />}
                    {!isImageTop ? (
                      <motion.div 
                        className="ab-tl-img-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: SPRING }}
                      >
                        <img src={item.img} alt={item.title} className="ab-tl-img" draggable={false} />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="ab-tl-text-card"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: SPRING }}
                      >
                        <div className="ab-tl-year">{item.year}</div>
                        <h3 className="ab-tl-title">{item.title}</h3>
                        <p className="ab-tl-desc">{item.desc}</p>
                      </motion.div>
                    )}
                  </div>

                </motion.div>
              );
            })}
            
            {/* Trailing spacer for last card readability */}
            <div style={{ flexShrink: 0, width: 'clamp(24px, 5vw, 80px)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
