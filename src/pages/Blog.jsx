// ========================================
// BLOG PAGE
// Editorial content showcasing social media insights
// Categories: Viral Reels / Branding / Growth Psychology
// Content Strategy / Personal Branding
// ========================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import FinalCTA from '../components/sections/FinalCTA';
import { client, urlFor } from '../lib/sanity';

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

function BlogCard({ post, index }) {
  const navigate = useNavigate();
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10 }}
      className="group"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '28px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onClick={() => navigate(`/blog/${post.slug || post.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12)';
        e.currentTarget.style.borderColor = 'rgba(255,156,96,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
      }}
    >
      {/* ── Large Image (~65-70% height / wide landscape style) ── */}
      <div style={{
        aspectRatio: '16 / 10',
        width: '100%',
        background: post.mainImage ? '#EAEAEA' : post.gradient,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(800).height(500).url()}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-108"
            style={{ background: post.gradient, width: '100%', height: '100%' }}
          >
            {/* Animated content lines placeholder */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  left: '10%',
                  right: '10%',
                  height: '20px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  top: `${28 + i * 22}%`,
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        )}

        {/* Category Badge on Top-Left */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '6px 16px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '100px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.5)',
          zIndex: 2,
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: post.categoryColor || '#FF9C60',
            textTransform: 'uppercase',
          }}>
            {post.category}
          </span>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div style={{ padding: '32px 30px 36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Author / Published Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            color: '#FF9C60',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            {post.date}
          </span>
          <span style={{ color: '#D0D0D0' }}>•</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: '#888888',
          }}>
            {post.readTime}
          </span>
        </div>

        {/* Title (Max 2 lines) */}
        <h3 className="group-hover:text-[#FF9C60] transition-colors duration-300" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(20px, 1.3vw, 24px)',
          fontWeight: 700,
          color: '#0A0A0A',
          lineHeight: 1.35,
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.title}
        </h3>

        {/* Short Description (Max 2-3 lines) */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15.5px',
          color: '#666666',
          lineHeight: 1.7,
          marginBottom: '28px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1,
        }}>
          {post.excerpt}
        </p>

        {/* Read Article CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '20px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          marginTop: 'auto',
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            color: '#0A0A0A',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }} className="group-hover:text-[#FF9C60] transition-colors duration-300">
            Read Article
          </span>
          <span className="transform group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F5F3] group-hover:bg-[#FF9C60] group-hover:text-white text-[#FF9C60] font-bold text-sm">
            ↗
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sanityPosts, setSanityPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "post"] | order(publishedAt desc) {
            "id": _id,
            title,
            "slug": slug.current,
            mainImage,
            "excerptText": pt::text(body),
            "date": publishedAt,
            "category": categories[0]->title,
            "tags": categories[]->title
          }
        `);

        const formattedPosts = data.map((post, index) => {
          // Find matching category in static array to inherit colors, or use fallback
          const defaultCat = blogPosts[0];
          const matchedStaticPost = post.category 
            ? blogPosts.find(p => p.category.toLowerCase() === post.category.toLowerCase()) 
            : defaultCat;
            
          const catPost = matchedStaticPost || defaultCat;

          const plainText = post.excerptText || '';
          const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
          const wordCount = plainText.split(/\s+/).length;

          return {
            id: post.id,
            slug: post.slug,
            category: post.category || 'Uncategorized',
            categoryColor: catPost.categoryColor,
            title: post.title,
            excerpt: excerpt,
            readTime: Math.max(1, Math.round(wordCount / 200)) + ' min read',
            date: new Date(post.date || new Date()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            featured: index === 0,
            tags: post.tags || [],
            gradient: catPost.gradient,
            mainImage: post.mainImage,
          };
        });

        setSanityPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch Sanity posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const currentPosts = sanityPosts.length > 0 ? sanityPosts : blogPosts;

  const filteredPosts = activeCategory === 'All'
    ? currentPosts
    : currentPosts.filter(p => p.category === activeCategory);

  // Combine static categories with any dynamic categories found in posts
  const allCategories = ['All', ...new Set([
    ...categories.filter(c => c !== 'All'),
    ...currentPosts.map(p => p.category).filter(Boolean)
  ])];

  return (
    <main style={{ background: '#F5F5F3', minHeight: '100vh' }}>
      {/* ── 1. HERO SECTION ── */}
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

      {/* ── 2. CATEGORIES + 3. BLOG CARDS GRID ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Categories Horizontal Filter Tabs */}
          <AnimatedSection>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '64px' }}>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '100px',
                    border: `1px solid ${activeCategory === cat ? '#0A0A0A' : 'rgba(0,0,0,0.08)'}`,
                    background: activeCategory === cat ? '#0A0A0A' : '#FFFFFF',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: activeCategory === cat ? 700 : 500,
                    color: activeCategory === cat ? '#FFFFFF' : '#555555',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    letterSpacing: '0.04em',
                    boxShadow: activeCategory === cat ? '0 8px 25px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.borderColor = '#FF9C60';
                      e.currentTarget.style.color = '#0A0A0A';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                      e.currentTarget.style.color = '#555555';
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* 3. Articles Grid (3 per row desktop, 2 tablet, 1 mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} style={{ height: '520px', background: 'rgba(0,0,0,0.04)', borderRadius: '28px', animation: 'pulse 1.5s infinite' }} />
              ))
            ) : filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
            <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
          </div>
        </div>
      </section>

      {/* ── 4. READY TO GO VIRAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
