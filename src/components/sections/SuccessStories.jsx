import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, animate, useScroll, useTransform, useSpring } from 'framer-motion';
import './SuccessStories.css';

const CLIENTS = [
  { 
    id: 1, 
    name: 'Afra Modest', 
    start: 3000, 
    end: 92000, 
    detail: '4 Branches', 
    highlight: 'Expanded to 4 Branches in Chennai',
    logo: '/clientlogos/afra.webp'
  },
  { 
    id: 2, 
    name: 'Medwalk', 
    start: 0, 
    end: 42000, 
    detail: '5 Branches', 
    highlight: 'Expanded to 5 Branches across South India',
    logo: '/clientlogos/medwalk.webp',
    logoScale: 1.5
  },
  { 
    id: 3, 
    name: 'Shashijab', 
    start: 0, 
    end: 26000, 
    highlight: 'Organic Growth Masterclass',
    logo: '/clientlogos/Shashijab.webp',
    logoScale: 1.6
  },
  { 
    id: 4, 
    name: 'Bag House', 
    start: 0, 
    end: 36000, 
    highlight: 'Viral Content Strategy Execution',
    logo: '/logos/baghouse.jpeg'
  },
  { 
    id: 5, 
    name: 'SSJ Super Shop', 
    start: 0, 
    end: 25000, 
    highlight: 'Local Community Building',
    logo: '/logos/ssjsupershop.jpeg'
  },
  { 
    id: 6, 
    name: 'Rahman Plaza', 
    start: 3000, 
    end: 56000, 
    highlight: 'Achieved Hyperlocal Dominance',
    logo: '/clientlogos/rahmanplaza.webp'
  },
  { 
    id: 7, 
    name: 'Brita', 
    start: 600, 
    end: 25000, 
    highlight: 'Complete Brand Positioning',
    logo: '/logos/britafootwear.jpeg'
  },
  { 
    id: 8, 
    name: 'Princess Park', 
    start: 0, 
    end: 25000, 
    highlight: 'Premium Aesthetic Makeover',
    logo: '/logos/princesspark.jpeg'
  },
  { 
    id: 9, 
    name: '1Way', 
    start: 0, 
    end: 30000, 
    highlight: 'Maximized Engagement Optimization',
    logo: '/clientlogos/1way.webp'
  },
  { 
    id: 10, 
    name: 'Simco', 
    start: 0, 
    end: 14000, 
    highlight: 'B2B & Retail Expansion Strategy',
    logo: '/logos/simco.jpg'
  },
  { 
    id: 11, 
    name: 'Rainbow Pro Gears', 
    start: 0, 
    end: 9300, 
    highlight: 'Precision Niche Audience Targeting',
    logo: '/clientlogos/rainbow.webp'
  },
  { 
    id: 12, 
    name: 'SS Footwear', 
    start: 0, 
    end: 17000, 
    highlight: 'Aggressive Sales-driven Content',
    logo: '/logos/sssignature.jpeg'
  },
  { 
    id: 13, 
    name: 'Kanchi Plaza', 
    start: 0, 
    end: 17000, 
    highlight: 'Established Regional Authority',
    logo: '/logos/kanchiplaza.jpeg'
  },
];

function formatNumber(num) {
  if (num >= 1000) {
    const k = num / 1000;
    return Number.isInteger(k) ? k + 'K' : k.toFixed(1).replace('.0', '') + 'K';
  }
  return Math.round(num).toString();
}

function AnimatedCounter({ from, to }) {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(value);
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <span>{formatNumber(count)}</span>;
}

function ClientLogo({ client, index, isMobile }) {
  const [imgSrc, setImgSrc] = useState(client.logo);
  const [hasError, setHasError] = useState(!client.logo);

  if (hasError) {
    return (
      <div 
        className={isMobile ? "" : "ss-logo-fallback"} 
        style={isMobile ? { fontSize: '48px', color: '#FF7030', fontFamily: 'Bebas Neue, sans-serif' } : { display: 'block' }}
      >
        {client.name.charAt(0)}
      </div>
    );
  }

  return (
    <img 
      loading={index === 0 ? "eager" : "lazy"}
      src={imgSrc} 
      alt={`${client.name} Logo`} 
      className={isMobile ? "" : "ss-client-logo-img"}
      style={isMobile ? { 
        width: '100%', height: '100%', objectFit: 'contain', 
        borderRadius: '16px', 
        transform: client.logoScale ? `scale(${client.logoScale})` : 'scale(1)'
      } : { 
        transform: client.logoScale ? `scale(${client.logoScale})` : 'scale(1)' 
      }}
      onError={() => {
        if (imgSrc.endsWith('.webp')) {
          setImgSrc(client.logo.replace('.webp', '.png'));
        } else if (imgSrc.endsWith('.png')) {
          setImgSrc(client.logo.replace('.webp', '.jpg'));
        } else {
          setHasError(true);
        }
      }}
    />
  );
}

function TimelineItem({ client, index }) {
  // Odd rows have logo left, text right.
  // We use index % 2 === 0 as "even" in 0-indexed terms (so 0, 2, 4 are left-logo).
  const isLeftLogo = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`ss-timeline-row ${isLeftLogo ? 'ss-row-even' : 'ss-row-odd'}`}
    >
      {/* Left / Right Side: Logo */}
      <div className="ss-timeline-half ss-timeline-logo-side">
        <motion.div 
          className="ss-timeline-logo-box"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ClientLogo client={client} index={index} isMobile={false} />
        </motion.div>
      </div>

      {/* Central Timeline Node */}
      <div className="ss-timeline-center">
        <div className="ss-timeline-node"></div>
      </div>

      {/* Right / Left Side: Content */}
      <div className="ss-timeline-half ss-timeline-content-side">
        <motion.div 
          className="ss-timeline-content-box"
          initial={{ x: isLeftLogo ? 40 : -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <h4 className="ss-node-title">{client.name}</h4>
          
          <div className="ss-node-growth">
            {formatNumber(client.start)} <span className="arrow">→</span> <span className="text-orange">{formatNumber(client.end)}</span> 
            <span className="followers-text">Followers</span>
          </div>
          
          <div className="ss-node-highlight">
            <span className="highlight-dot"></span>
            {client.highlight}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Custom hook to check if mobile view
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

// ----------------------------------------------------
// MOBILE-ONLY HORIZONTAL SCROLL JACKING COMPONENT
// ----------------------------------------------------
function MobileSuccessTimeline() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 13 cards * ~320px = 4160px horizontal scroll distance.
  // We map the vertical scroll progress (0 to 1) to horizontal translation (0% to -80%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  // Smooth out the scroll line fill
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={targetRef} style={{ height: "600vh", position: "relative", backgroundColor: "#FFFFFF" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "10vh", overflow: "hidden" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 20px" }}>
          <div className="tag-orange-dark" style={{ marginBottom: '32px', display: 'inline-block' }}>
            <span style={{ fontSize: '7px', marginRight: '6px' }}>●</span> SUCCESS STORIES
          </div>
          <h2 className="ss-title" style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', marginBottom: '16px' }}>PROVEN <span className="ss-title-accent">RESULTS</span></h2>
          <p className="ss-subtitle" style={{ fontSize: '15px', marginBottom: 0 }}>
            Swipe to see how we've transformed businesses through strategic social media mastery.
          </p>
        </div>

        {/* Horizontal Scroll Track */}
        <div style={{ position: 'relative', height: '440px', display: 'flex', alignItems: 'center' }}>
          
          {/* Horizontal Background Line */}
          <div style={{ position: 'absolute', top: '50%', left: 0, width: '100vw', height: '2px', background: 'rgba(0,0,0,0.05)', zIndex: 0, transform: 'translateY(-50%)' }} />
          
          {/* Progress Fill Line */}
          <motion.div style={{ position: 'absolute', top: '50%', left: 0, width: '100vw', height: '4px', background: 'linear-gradient(to right, #FF9C60, #FF7030)', zIndex: 1, transformOrigin: 'left', scaleX, transform: 'translateY(-50%)' }} />

          {/* Scrolling Cards Container */}
          <motion.div style={{ x, display: "flex", gap: "24px", padding: "0 50vw 0 24px", alignItems: "center" }}>
            {CLIENTS.map((client, index) => (
              <div key={client.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '280px', flexShrink: 0, position: 'relative', zIndex: 2 }}>
                
                {/* Logo Box */}
                <div className="ss-timeline-logo-box" style={{ width: '160px', height: '160px', marginBottom: '32px', borderRadius: '24px', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFF', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <ClientLogo client={client} index={index} isMobile={true} />
                </div>

                {/* Timeline Dot — Perfectly Centered on the Line */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                  <div className="ss-timeline-node" style={{ width: '24px', height: '24px', background: '#FFF', border: '4px solid #FF7030', borderRadius: '50%', boxShadow: '0 0 0 8px rgba(255, 112, 48, 0.1)' }}></div>
                </div>

                {/* Bottom Content Box */}
                <div style={{ textAlign: 'center', marginTop: '32px', width: '100%' }}>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '24px', color: '#111', marginBottom: '12px' }}>{client.name}</h4>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '38px', color: '#111', lineHeight: 0.9, marginBottom: '16px' }}>
                    {formatNumber(client.start)} <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#AAA', margin: '0 8px', verticalAlign: 'middle' }}>→</span> <span style={{ color: '#FF7030' }}>{formatNumber(client.end)}</span>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#888', letterSpacing: '0.02em', textTransform: 'uppercase', marginTop: '8px' }}>Followers</div>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#555', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF9C60', flexShrink: 0 }}></span>
                    {client.highlight}
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function SuccessStories() {
  const featuredClient = CLIENTS[0]; // Static featured client
  const timelineRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Keep line progress tightly bound to scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (isMobile) {
    return <MobileSuccessTimeline />;
  }

  return (
    <section className="ss-section">
      <div className="ss-container">
        
        {/* Section Header */}
        <div className="ss-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-orange-dark"
            style={{ marginBottom: '24px', display: 'inline-block' }}
          >
            <span style={{ fontSize: '7px', marginRight: '6px' }}>●</span> SUCCESS STORIES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="ss-title"
          >
            PROVEN <span className="ss-title-accent">RESULTS</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ss-subtitle"
          >
            See how we've transformed businesses across industries through strategic social media mastery.
          </motion.p>
        </div>

        {/* Central Vertical Timeline */}
        <div className="ss-timeline" ref={timelineRef}>
          {/* Background Line */}
          <div className="ss-timeline-line-bg"></div>
          
          {/* Animated Fill Line */}
          <motion.div 
            className="ss-timeline-line-progress" 
            style={{ scaleY }}
          />

          <div className="ss-timeline-milestones">
            {CLIENTS.map((client, index) => (
              <TimelineItem key={client.id} client={client} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
