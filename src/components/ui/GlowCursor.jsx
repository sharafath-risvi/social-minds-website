// ========================================
// GLOW CURSOR COMPONENT
// Custom animated cursor with mouse-follow glow
// ========================================

import { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let glowX = 0, glowY = 0;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;

      animId = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = '#FF9C60';
      dot.style.opacity = '0';
    };

    const onMouseLeaveInteractive = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = '#FF9C60';
      dot.style.opacity = '1';
    };

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], .magnetic-btn');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    window.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}
      />
      {/* Cursor Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ position: 'fixed', zIndex: 9998, pointerEvents: 'none' }}
      />
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{ position: 'fixed', zIndex: 9997, pointerEvents: 'none' }}
      />
    </>
  );
}
