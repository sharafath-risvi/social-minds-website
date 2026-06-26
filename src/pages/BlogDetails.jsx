import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';
import FinalCTA from '../components/sections/FinalCTA';

// Custom Portable Text components to match site typography
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div style={{ margin: '40px 0', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            alt={value.alt || 'Blog image'}
            loading="lazy"
            src={urlFor(value).width(800).auto('format').url()}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginTop: '2rem', marginBottom: '1rem', color: '#0A0A0A' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1, marginTop: '2rem', marginBottom: '1rem', color: '#0A0A0A' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '1rem', color: '#0A0A0A' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '1rem', color: '#0A0A0A' }}>{children}</h4>,
    normal: ({ children }) => <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: 1.8, color: '#333333', marginBottom: '1.5rem' }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '4px solid #FF9C60', paddingLeft: '20px', margin: '30px 0', fontStyle: 'italic', color: '#555555', fontSize: '19px', fontFamily: "'Inter', sans-serif" }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: 1.8, color: '#333333', marginBottom: '1.5rem', paddingLeft: '20px', listStyleType: 'disc' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: 1.8, color: '#333333', marginBottom: '1.5rem', paddingLeft: '20px', listStyleType: 'decimal' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '8px' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '8px' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#0A0A0A' }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} style={{ color: '#FF9C60', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
          {children}
        </a>
      );
    },
  },
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const query = `
          *[_type == "post" && slug.current == $slug][0]{
            title,
            mainImage,
            publishedAt,
            body,
            "authorName": author->name,
            "categories": categories[]->title
          }
        `;
        const data = await client.fetch(query, { slug });
        if (data) {
          setPost(data);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(255,156,96,0.2)', borderTopColor: '#FF9C60', animation: 'spin 1s linear infinite' }} />
        <style>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', textAlign: 'center', padding: '24px' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', marginBottom: '16px' }}>Oops!</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>{error || "The post you're looking for doesn't exist."}</p>
        <Link to="/blog" style={{
          padding: '12px 24px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '100px',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  // Format date
  const formattedDate = new Date(post.publishedAt || new Date()).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main style={{ background: '#F5F5F3' }}>
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

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '32px' }}
          >
            <Link to="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '100px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#fff';
              e.target.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'rgba(255,255,255,0.6)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
            >
              ← Back to Insights
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}
          >
            {(post.categories || []).map((cat, i) => (
              <span key={i} style={{
                padding: '6px 14px',
                background: 'rgba(255,156,96,0.1)',
                border: '1px solid rgba(255,156,96,0.2)',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                color: '#FF9C60',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {cat}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: 0.9,
              color: '#FFFFFF',
              marginBottom: '32px',
            }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            {post.authorName && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '14px' }}>
                  {post.authorName.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#fff' }}>{post.authorName}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Author</div>
                </div>
              </div>
            )}
            {post.authorName && <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />}
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#fff' }}>{formattedDate}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Published</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      {post.mainImage && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', marginTop: '-60px', position: 'relative', zIndex: 20 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              width: '100%',
              aspectRatio: '21/9',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              background: '#EAEAEA'
            }}
          >
            <img
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </section>
      )}

      {/* ── CONTENT ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {post.body ? (
            <div className="portable-text-container">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          ) : (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#555', textAlign: 'center' }}>
              No content available for this post.
            </p>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FinalCTA />
    </main>
  );
}
