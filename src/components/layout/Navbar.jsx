// ========================================
// NAVBAR COMPONENT
// Floating glassmorphism navigation
// ========================================

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { 
    label: 'Pricing', 
    subLinks: [
      { label: 'Onboarding', path: '/onboarding' },
      { label: 'Plan', path: '/plan' }
    ]
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Career', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      // Smart hide/show logic with a 15px threshold to prevent jitter
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY + 15) {
          setIsHidden(true); // Scrolling down
        } else if (currentScrollY < lastScrollY - 15) {
          setIsHidden(false); // Scrolling up
        }
      } else {
        setIsHidden(false); // Always show at the top
      }

      // Only update lastScrollY if we exceeded the threshold
      if (Math.abs(currentScrollY - lastScrollY) > 15) {
        lastScrollY = currentScrollY;
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHoveredPath(location.pathname);
  }, [location.pathname]);

  // Detect white sections for dark nav text
  const isLightPage = false;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          paddingTop: '16px',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 28px',
            borderRadius: '100px',
            background: scrolled
              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(247, 247, 247, 0.9))'
              : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(247, 247, 247, 0.5))',
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: scrolled
              ? '0 15px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
            transform: scrolled ? 'translateY(0)' : 'translateY(4px)',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/socialmindslogowithoutbg.png" 
              alt="Social Minds" 
              style={{ height: 'clamp(50px, 5vw, 50px)', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '4px', position: 'relative' }}
            onMouseLeave={() => {
              setHoveredPath(location.pathname);
              setHoveredDropdown(null);
            }}
          >
            {navLinks.map((link) => {
              const isSubActive = link.subLinks && link.subLinks.some(sub => location.pathname === sub.path || hoveredPath === sub.path);
              const isHovered = (link.path && hoveredPath === link.path) || isSubActive || hoveredDropdown === link.label;
              return (
                <div
                  key={link.label || link.path}
                  style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => {
                    setHoveredPath(link.path || link.label);
                    if (link.subLinks) setHoveredDropdown(link.label);
                  }}
                  onMouseLeave={() => {
                    setHoveredPath(location.pathname);
                    if (link.subLinks) setHoveredDropdown(null);
                  }}
                >
                  {link.subLinks ? (
                    <div
                      style={{
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '13px',
                        fontWeight: isHovered ? 600 : 400,
                        color: isHovered ? '#FF9C60' : '#222',
                        letterSpacing: '0.05em',
                        transition: 'color 0.2s ease, font-weight 0.2s ease',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'default',
                      }}
                    >
                      {isHovered && (
                        <motion.div
                          layoutId="navbar-highlight"
                          transition={{ 
                            type: "tween", 
                            ease: "easeInOut",
                            duration: 0.6 
                          }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(255, 156, 96, 0.1)',
                            border: '1px solid rgba(255, 156, 96, 0.2)',
                            borderRadius: '100px',
                            zIndex: -1,
                          }}
                        />
                      )}
                      <span>{link.label}</span>
                      <span style={{ fontSize: '9px', opacity: 0.6, transform: hoveredDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>▼</span>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: 'none',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '13px',
                        fontWeight: isHovered ? 600 : 400,
                        color: isHovered ? '#FF9C60' : '#222',
                        letterSpacing: '0.05em',
                        transition: 'color 0.2s ease, font-weight 0.2s ease',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isHovered && (
                        <motion.div
                          layoutId="navbar-highlight"
                          transition={{ 
                            type: "tween", 
                            ease: "easeInOut",
                            duration: 0.6 
                          }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(255, 156, 96, 0.1)',
                            border: '1px solid rgba(255, 156, 96, 0.2)',
                            borderRadius: '100px',
                            zIndex: -1,
                          }}
                        />
                      )}
                      <span>{link.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Submenu */}
                  <AnimatePresence>
                    {link.subLinks && hoveredDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '10px',
                          zIndex: 1001,
                        }}
                      >
                        <div
                          style={{
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '16px',
                            padding: '6px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.12), 0 0 0 1px rgba(255, 140, 66, 0.1)',
                            minWidth: '150px',
                          }}
                        >
                          {link.subLinks.map((sub) => {
                            const isCurrentSub = location.pathname === sub.path;
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setHoveredDropdown(null)}
                                style={{
                                  display: 'block',
                                  padding: '10px 16px',
                                  borderRadius: '10px',
                                  textDecoration: 'none',
                                  fontFamily: "'Space Grotesk', sans-serif",
                                  fontSize: '13px',
                                  fontWeight: isCurrentSub ? 600 : 500,
                                  color: isCurrentSub ? '#FF7030' : '#222',
                                  transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = 'rgba(255, 156, 96, 0.12)';
                                  e.currentTarget.style.color = '#FF7030';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.color = isCurrentSub ? '#FF7030' : '#222';
                                }}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA Button + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/contact"
              className="hidden md:flex"
              style={{
                textDecoration: 'none',
                padding: '10px 24px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
                color: '#000',
                boxShadow: '0 0 20px rgba(255, 156, 96, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 156, 96, 0.6)';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 156, 96, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Let's Talk
            </Link>

            {/* Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '10px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px',
              }}
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                style={{ display: 'block', width: '18px', height: '1.5px', background: '#FF9C60', borderRadius: '2px' }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                style={{ display: 'block', width: '18px', height: '1.5px', background: '#FF9C60', borderRadius: '2px' }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                style={{ display: 'block', width: '18px', height: '1.5px', background: '#FF9C60', borderRadius: '2px' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '24px',
              padding: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path || (link.subLinks && link.subLinks.some(sub => location.pathname === sub.path));
              return (
                <motion.div
                  key={link.label || link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                >
                  {link.subLinks ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        textDecoration: 'none',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '16px',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#FF9C60' : '#222',
                        cursor: 'default',
                      }}
                    >
                      <span>{link.label}</span>
                      <span style={{ fontSize: '12px', color: '#FF9C60' }}>▾</span>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        textDecoration: 'none',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '16px',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#FF9C60' : '#222',
                      }}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )}
                  {link.subLinks && (
                    <div style={{ paddingLeft: '24px', paddingBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {link.subLinks.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMenuOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '8px 12px',
                              textDecoration: 'none',
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '14px',
                              fontWeight: isSubActive ? 600 : 400,
                              color: isSubActive ? '#FF7030' : '#555',
                              background: isSubActive ? 'rgba(255, 156, 96, 0.1)' : 'transparent',
                              borderRadius: '8px',
                            }}
                          >
                            <span style={{ color: '#FF7030', fontSize: '12px' }}>└──</span> {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: '16px' }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#000',
                  letterSpacing: '0.08em',
                }}
              >
                Let's Talk ↗
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
