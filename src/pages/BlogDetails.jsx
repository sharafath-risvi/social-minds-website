import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';
import { blogPosts } from '../data/blogPosts';

// Custom Portable Text components to match site typography
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div style={{ margin: '48px 0', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
          <img
            alt={value.alt || 'Blog image'}
            loading="lazy"
            src={urlFor(value).width(1000).auto('format').url()}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: 0.95, marginTop: '2.5rem', marginBottom: '1.2rem', color: '#0A0A0A' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: 0.95, marginTop: '2.5rem', marginBottom: '1.2rem', color: '#0A0A0A' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem', color: '#0A0A0A', letterSpacing: '-0.02em' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginTop: '1.8rem', marginBottom: '0.8rem', color: '#0A0A0A' }}>{children}</h4>,
    normal: ({ children }) => <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.85, color: '#444444', marginBottom: '1.6rem' }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '4px solid #FF9C60',
        padding: '24px 28px',
        margin: '36px 0',
        background: 'rgba(255, 156, 96, 0.06)',
        borderRadius: '0 16px 16px 0',
        fontStyle: 'italic',
        color: '#222222',
        fontSize: '20px',
        lineHeight: 1.7,
        fontFamily: "'Inter', sans-serif"
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.85, color: '#444444', marginBottom: '1.6rem', paddingLeft: '24px', listStyleType: 'disc' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.85, color: '#444444', marginBottom: '1.6rem', paddingLeft: '24px', listStyleType: 'decimal' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '10px' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '10px' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#0A0A0A' }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} style={{ color: '#FF9C60', textDecoration: 'underline', textUnderlineOffset: '4px', fontWeight: 600 }}>
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
            body,
            seoTitle,
            seoDescription,
            excerpt
          }
        `;
        const data = await client.fetch(query, { slug });
        if (data) {
          setPost(data);
        } else {
          const fallbackPost = blogPosts.find(p => p.id === slug || p.slug === slug);
          if (fallbackPost) {
            setPost(fallbackPost);
          } else {
            setError("Post not found");
          }
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        const fallbackPost = blogPosts.find(p => p.id === slug || p.slug === slug);
        if (fallbackPost) {
          setPost(fallbackPost);
        } else {
          setError("Failed to load blog post");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Handle Dynamic SEO Meta Title and Description
  useEffect(() => {
    if (!post) return;

    // Save default site values for cleanup when leaving page
    const defaultTitle = 'Social Minds | Premium Digital Growth Agency';
    const defaultDesc = 'SOCIAL MINDS is a premium Gen-Z social media agency specializing in Instagram marketing, reel growth, branding, and content strategy. We mind your business digitally.';

    // 1. Read seoTitle from Sanity, fallback to blog title
    const title = post.seoTitle || post.title || defaultTitle;
    document.title = title;

    // 2. Read seoDescription from Sanity, fallback to blog excerpt
    const desc = post.seoDescription || post.excerpt || defaultDesc;

    // Remove any duplicate meta description tags to avoid duplicate metadata
    const existingDescTags = document.querySelectorAll('meta[name="description"]');
    existingDescTags.forEach((tag, index) => {
      if (index > 0) tag.remove();
    });

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // Also update Open Graph tags dynamically without creating duplicates
    const updateOgTag = (property, content) => {
      const tags = document.querySelectorAll(`meta[property="${property}"], meta[name="${property}"]`);
      tags.forEach((tag, index) => {
        if (index > 0) tag.remove();
      });
      let tag = tags[0];
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (title) updateOgTag('og:title', title);
    if (desc) updateOgTag('og:description', desc);

    // Cleanup: restore default title and meta description when leaving the blog details page
    return () => {
      document.title = defaultTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', defaultDesc);
      }
      updateOgTag('og:title', 'SOCIAL MINDS — We Mind Your Business Digitally');
      updateOgTag('og:description', 'Looking for a trusted digital marketing agency? Social Minds helps businesses grow with social media marketing, branding, Meta Ads, SEO, and content marketing.');
    };
  }, [post]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F5F3' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(255,156,96,0.2)', borderTopColor: '#FF9C60', animation: 'spin 1s linear infinite' }} />
        <style>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F5F5F3', color: '#0A0A0A', textAlign: 'center', padding: '24px' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', marginBottom: '16px' }}>Oops!</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", color: '#666', marginBottom: '32px' }}>{error || "The post you're looking for doesn't exist."}</p>
        <Link to="/blog" style={{
          padding: '12px 28px',
          background: '#0A0A0A',
          borderRadius: '100px',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          transition: 'all 0.3s ease'
        }}>
          ← Back to Insights
        </Link>
      </main>
    );
  }

  return (
    <main style={{ background: '#F5F5F3', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* ── TOP NAV / BACK BUTTON ── */}
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: 'clamp(110px, 14vw, 150px) 24px 32px' }}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            color: '#555555',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.08)',
            padding: '10px 22px',
            borderRadius: '100px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#0A0A0A';
            e.currentTarget.style.borderColor = '#FF9C60';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#555555';
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
          >
            ← Back to Insights
          </Link>
        </motion.div>
      </div>

      {/* ── 1. LARGE LANDSCAPE FEATURED IMAGE ── */}
      <section style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: '100%',
            aspectRatio: '21 / 9',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 25px 70px rgba(0,0,0,0.12)',
            background: post.mainImage ? '#EAEAEA' : 'linear-gradient(135deg, #111 0%, #222 100%)',
            position: 'relative',
          }}
        >
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(1400).height(700).url()}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #FF9C60 0%, #FF5E00 100%)' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', color: 'rgba(255,255,255,0.3)' }}>
                {post.title}
              </span>
            </div>
          )}
        </motion.div>
      </section>

      {/* ── 2. BELOW IMAGE: TITLE AND CONTENT ── */}
      <section style={{ maxWidth: '820px', margin: '48px auto 0', position: 'relative', zIndex: 10, padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Large Title */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            lineHeight: 0.92,
            color: '#0A0A0A',
            marginBottom: '40px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            letterSpacing: '0.01em',
          }}>
            {post.title}
          </h1>

          {/* Blog Content (Rich text formatting, headings, lists, quotes) */}
          <div>
            {post.body ? (
              <div className="portable-text-container">
                <PortableText value={post.body} components={ptComponents} />
              </div>
            ) : (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#666', textAlign: 'center', padding: '40px 0' }}>
                No content available for this post.
              </p>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
