// ========================================
// BLOG PAGE
// Editorial content showcasing social media insights
// Categories: Viral Reels / Branding / Growth Psychology
// Content Strategy / Personal Branding
// ========================================

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts, categories } from '../data/blogPosts';
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

function BlogCard({ post, index, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
      onHoverStart={(e) => e.target.style && (e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)')}
    >
      {/* Gradient preview thumbnail */}
      <div style={{
        height: featured ? '260px' : '180px',
        background: post.gradient,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated content lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: '10%',
              right: '10%',
              height: '20px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '6px',
              top: `${25 + i * 22}%`,
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Category tag */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          padding: '5px 12px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '100px',
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: post.categoryColor,
          }}>
            {post.category.toUpperCase()}
          </span>
        </div>

        {/* Read time */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          padding: '4px 10px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '100px',
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.7)',
          }}>
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            color: '#838383',
            letterSpacing: '0.05em',
          }}>
            {post.date}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: featured ? '22px' : '17px',
          fontWeight: 700,
          color: '#0A0A0A',
          lineHeight: 1.3,
          marginBottom: '10px',
        }}>
          {post.title}
        </h3>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: '#838383',
          lineHeight: 1.7,
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              padding: '3px 10px',
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '10px',
              color: '#838383',
              letterSpacing: '0.05em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            color: '#FF9C60',
            letterSpacing: '0.06em',
          }}>
            READ ARTICLE
          </span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: '#FF9C60', fontSize: '14px' }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featuredPost = blogPosts.find(p => p.featured);
  const remainingPosts = blogPosts.filter(p => !p.featured);

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        background: '#000',
        padding: 'clamp(8rem, 15vw, 12rem) 24px clamp(4rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '400px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
          >
            <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
              THE SOCIAL MINDS BLOG
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 11rem)', lineHeight: 0.9, marginBottom: '32px' }}
          >
            <span style={{ color: '#FFFFFF' }}>INSIGHTS</span><br />
            <span className="gradient-text-orange glow-text-orange">& STRATEGY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', lineHeight: 1.7 }}
          >
            The playbook for brands that refuse to be invisible. Real strategies, real data, real results.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section style={{ background: '#F5F5F3', padding: 'clamp(4rem, 8vw, 6rem) 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
              <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
                FEATURED
              </span>
            </div>
          </AnimatedSection>

          {featuredPost && (
            <AnimatedSection delay={0.1}>
              <BlogCard post={featuredPost} index={0} featured />
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ── CATEGORY FILTER + ARTICLES ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(4rem, 8vw, 6rem) 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Categories */}
          <AnimatedSection>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '56px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '100px',
                    border: `1px solid ${activeCategory === cat ? 'rgba(255, 156, 96, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                    background: activeCategory === cat ? 'rgba(255, 156, 96, 0.1)' : 'transparent',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    fontWeight: activeCategory === cat ? 600 : 400,
                    color: activeCategory === cat ? '#FF9C60' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.05em',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Articles grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section style={{ background: '#F5F5F3', padding: 'clamp(5rem, 10vw, 7rem) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#FF9C60', fontWeight: 700 }}>
                STAY AHEAD
              </span>
              <div style={{ width: '32px', height: '1px', background: '#FF9C60' }} />
            </div>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#0A0A0A', lineHeight: 0.92, marginBottom: '16px' }}>
              GET THE WEEKLY<br />
              <span style={{ WebkitTextStroke: '2px #0A0A0A', color: 'transparent' }}>PLAYBOOK</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#838383', marginBottom: '40px', lineHeight: 1.7 }}>
              Every week: one viral strategy, one content tip, one growth insight. Straight to your inbox.
            </p>

            <div style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '14px 20px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '100px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  color: '#0A0A0A',
                  outline: 'none',
                }}
              />
              <button style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                border: 'none',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 700,
                color: '#000',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(255, 156, 96, 0.35)',
              }}>
                Subscribe ↗
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
