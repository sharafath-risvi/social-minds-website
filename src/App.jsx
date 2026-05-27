// ========================================
// APP ROOT
// Router setup with smooth scroll initialization,
// global cursor, and layout shell
// ========================================

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useLenis } from './hooks/useLenis';
import GlowCursor from './components/ui/GlowCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// ========================================
// PAGE TRANSITION WRAPPER
// ========================================
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.5,
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// MAIN APP SHELL
// ========================================
function AppShell() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      {/* Custom Glow Cursor (desktop only) */}
      <GlowCursor />

      {/* Floating Navbar */}
      <Navbar />

      {/* Page Content with transitions */}
      <AnimatedRoutes />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917000000000?text=Hi! I'd like to know more about Social Minds."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          zIndex: 998,
        }}
      >
        💬
      </motion.a>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}
