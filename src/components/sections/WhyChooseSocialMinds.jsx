import React from 'react';
import { motion } from 'framer-motion';

const TOPICS = [
  {
    id: '01',
    title: 'Data-Driven Strategy',
    description: 'We make decisions based on analytics, audience insights, and market trends to ensure every campaign delivers measurable results.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '02',
    title: 'Creative Content',
    description: 'Scroll-stopping content crafted to capture attention, build engagement, and strengthen brand presence.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '03',
    title: 'Performance Focused',
    description: 'Every campaign is optimized for reach, engagement, leads, and business growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '04',
    title: 'Fast Execution',
    description: 'Efficient workflows and quick turnaround times without compromising quality.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '05',
    title: 'End-to-End Support',
    description: 'From planning and production to publishing and optimization, we handle everything.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '06',
    title: 'Proven Results',
    description: 'Helping brands increase visibility, engagement, conversions, and long-term growth.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function WhyChooseSocialMinds() {
  return (
    <section className="bg-white pt-24 pb-[350px] md:pt-32 md:pb-[500px] lg:pb-[700px] overflow-hidden w-full relative -mt-[2px] z-10">
      {/* HEADER SECTION */}
      <div style={{ textAlign: 'center', padding: '0 clamp(24px, 4vw, 60px)', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="tag-orange-dark"
          style={{ marginBottom: '20px' }}
        >
          <span style={{ fontSize: '7px' }}>●</span>
          WHY CHOOSE US
        </motion.div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 9.5rem)',
              color: '#0D0D0D',
              lineHeight: '0.9',
              marginBottom: '40px',
              letterSpacing: '0.01em',
              textTransform: 'uppercase'
            }}
          >
            WHY CHOOSE<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>SOCIAL MINDS</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: 'rgba(0,0,0,0.45)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.85
          }}
        >
          We combine strategy, creativity, and performance marketing to help brands attract attention, build trust, and achieve measurable business growth.
        </motion.p>
      </div>

      {/* ROWS SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 lg:gap-32">
        {TOPICS.map((topic, index) => {
          const isEven = index % 2 === 1; // 0-indexed, so 1,3,5 are "even" in layout meaning right aligned content, wait...
          // User: 
          // Row 01: Left (Heading/Desc), Right (Number)
          // Row 02: Left (Number), Right (Heading/Desc)
          // This means:
          // index 0 (Row 01): Content Left, Number Right.
          // index 1 (Row 02): Number Left, Content Right.
          const isImageLeft = index % 2 !== 0;

          return (
            <div
              key={topic.id}
              className={`w-full py-24 md:py-40 lg:py-56 flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-32 group ${isImageLeft ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full md:w-[45%] flex ${!isImageLeft ? 'md:justify-end' : 'md:justify-start'}`}
              >
                <div className="w-full max-w-[520px] flex flex-col items-start text-left -mt-6 md:-mt-8">
                  {/* Eyebrow + number row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '28px',
                  }}>
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
                      {topic.id}
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
                        SOCIAL MINDS
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
                    <h3 style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(2.8rem, 5.5vw, 7rem)',
                      color: '#080808',
                      lineHeight: '0.92',
                      letterSpacing: '-0.01em',
                      whiteSpace: 'pre-line',
                      margin: 0,
                      textTransform: 'uppercase'
                    }}>
                      {topic.title}
                    </h3>
                  </div>

                  {/* Divider line */}
                  <div
                    style={{
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #FF7030 0%, #FF9C60 30%, transparent 100%)',
                      opacity: 0.85,
                      marginBottom: '24px',
                    }}
                  />

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(15px, 1.6vw, 18px)',
                    color: 'rgba(0,0,0,0.5)',
                    lineHeight: 1.9,
                    marginBottom: '10px',
                    maxWidth: '440px'
                  }}>
                    {topic.description}
                  </p>
                </div>
              </motion.div>

              {/* NUMBER SIDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: isImageLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-[45%] flex justify-center md:justify-end items-center"
                style={{ justifyContent: isImageLeft ? 'flex-start' : 'flex-end' }}
              >
                <div className="relative overflow-hidden w-full max-w-[500px] lg:max-w-[600px] flex justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(180px, 28vw, 400px)',
                      lineHeight: 0.8,
                      letterSpacing: '-0.03em',
                      backgroundImage: `url(${topic.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      width: '100%',
                      textAlign: 'center',
                      userSelect: 'none'
                    }}
                  >
                    {topic.id}
                  </motion.div>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
