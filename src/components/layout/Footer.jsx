// ========================================
// FOOTER COMPONENT
// Premium dark footer with social links and brand identity
// ========================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Social Media Marketing', path: '/services' },
    { label: 'Branding', path: '/services' },
    { label: 'Personal Branding', path: '/services' },
    { label: 'Reel Growth', path: '/services' },
    { label: 'Content Strategy', path: '/services' },
  ],
  Connect: [
    { label: 'Instagram', path: '#', external: true },
    { label: 'LinkedIn', path: '#', external: true },
    { label: 'WhatsApp', path: 'https://wa.me/917000000000', external: true },
    { label: 'Twitter / X', path: '#', external: true },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid rgba(255, 156, 96, 0.1)',
        padding: '80px 24px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(255, 156, 96, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '60px',
            marginBottom: '80px',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #FF9C60, #FF5E00)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: '#000',
                  fontWeight: 900,
                  boxShadow: '0 0 20px rgba(255, 156, 96, 0.4)',
                }}>
                  S
                </div>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '22px',
                  letterSpacing: '0.1em',
                  color: '#FFFFFF',
                }}>
                  SOCIAL MINDS
                </span>
              </div>
            </Link>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '240px',
            }}>
              We mind your business digitally. Premium social media agency for brands that demand excellence.
            </p>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              color: '#FF9C60',
              letterSpacing: '0.15em',
              borderLeft: '2px solid #FF9C60',
              paddingLeft: '12px',
            }}>
              WE MIND YOUR BUSINESS DIGITALLY
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: 'none',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.5)',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FF9C60'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        style={{
                          textDecoration: 'none',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.5)',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FF9C60'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ marginBottom: '32px' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.25)',
          }}>
            © 2025 Social Minds. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.2)',
            }}>
              CRAFTED WITH
            </span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ color: '#FF9C60', fontSize: '14px' }}
            >
              ◈
            </motion.span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.2)',
            }}>
              FOR BRANDS THAT DARE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
