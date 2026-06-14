// ========================================
// FOOTER COMPONENT
// Premium modern white footer with glassmorphism touches
// ========================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Social Media Marketing', path: '/services#social-media-marketing' },
    { label: 'Branding', path: '/services#branding' },
    { label: 'Personal Branding', path: '/services#personal-branding' },
    { label: 'Reel Growth', path: '/services#reel-growth' },
    { label: 'Content Strategy', path: '/services#content-strategy' },
  ],
};

const socialLinks = [
  { label: 'Instagram', path: 'https://www.instagram.com/social.minds.chennai', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
  { label: 'Facebook', path: 'https://www.facebook.com/profile.php?id=61584545852599', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
  { label: 'WhatsApp', path: 'https://wa.me/917200323181', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
  { label: 'Phone', path: 'tel:7200323181', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8F8F8 100%)',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '70px 24px 30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[60px] mb-12 md:mb-[60px]">
          {/* Brand */}
          <div className="flex-1 w-full md:max-w-[340px] flex flex-col gap-5">
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <img 
                src="/socialmindslogowithoutbg.png" 
                alt="Social Minds" 
                style={{ height: 'clamp(40px, 5vw, 48px)', width: 'auto', objectFit: 'contain' }} 
              />
            </Link>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: 1.6,
            }}>
              We mind your business digitally. A premium social media agency for brands that demand excellence and scalable growth.
            </p>
          </div>

          {/* Links & Connect Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[80px] w-full md:w-auto md:flex-[2_1_600px] md:justify-end">
            {/* Company & Services */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} style={{ minWidth: '120px' }}>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#222222',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}>
                  {category}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        style={{
                          textDecoration: 'none',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          color: '#555555',
                          transition: 'all 0.2s ease',
                          display: 'inline-block',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#FF9C60';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#555555';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect Section */}
            <div style={{ minWidth: '140px' }}>
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#222222',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}>
                Connect
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '100px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0,0,0,0.05)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      color: '#555555',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FF9C60';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,156,96,0.15)';
                      e.currentTarget.style.borderColor = 'rgba(255,156,96,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#555555';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.05) 90%, transparent)',
          marginBottom: '32px' 
        }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-0 md:px-6 text-center md:text-left mt-6 md:mt-0">
          <p className="justify-center md:justify-start" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            color: '#888888',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}>
            © 2026 Social Minds. All rights reserved. <span style={{ opacity: 0.5 }}>|</span> Developed by 
            <a 
              href="https://thajiratechworks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#888888',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF9C60'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
            >
              Thajira Techworks
            </a>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              color: '#aaaaaa',
              letterSpacing: '0.05em',
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
              color: '#aaaaaa',
              letterSpacing: '0.05em',
            }}>
              FOR BRANDS THAT DARE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
