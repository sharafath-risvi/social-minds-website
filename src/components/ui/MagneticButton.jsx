// ========================================
// MAGNETIC BUTTON COMPONENT
// CTA button with magnetic hover effect and orange glow
// ========================================

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'orange', // 'orange' | 'outline' | 'white'
  size = 'md',
  className = '',
  external = false,
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
  };

  const variantStyles = {
    orange: {
      background: 'linear-gradient(135deg, #FF9C60 0%, #FF7030 100%)',
      color: '#000',
      border: 'none',
      boxShadow: '0 0 30px rgba(255, 156, 96, 0.4), 0 4px 20px rgba(255, 156, 96, 0.3)',
    },
    outline: {
      background: 'transparent',
      color: '#FF9C60',
      border: '1px solid rgba(255, 156, 96, 0.5)',
      boxShadow: 'none',
    },
    white: {
      background: '#FFFFFF',
      color: '#0A0A0A',
      border: 'none',
      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
    },
    dark: {
      background: 'rgba(255,255,255,0.05)',
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.15)',
      boxShadow: 'none',
    },
  };

  const style = variantStyles[variant] || variantStyles.orange;

  const Tag = href ? motion.a : motion.button;
  const linkProps = href ? {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  } : { onClick };

  return (
    <Tag
      ref={btnRef}
      {...linkProps}
      className={`magnetic-btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold overflow-hidden transition-all ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: '0.05em',
        textDecoration: 'none',
        ...style,
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === 'orange'
          ? '0 0 50px rgba(255, 156, 96, 0.7), 0 8px 40px rgba(255, 156, 96, 0.4)'
          : variant === 'outline'
          ? '0 0 30px rgba(255, 156, 96, 0.3)'
          : style.boxShadow,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        whileHover={{ opacity: 1, backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
