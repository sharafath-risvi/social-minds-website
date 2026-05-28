// ========================================
// LENIS SMOOTH SCROLL HOOK
// Initializes ultra-smooth scrolling with lerp
// ========================================

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      // 1.1 → snappier feel than 1.4 while still buttery smooth
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // 0.85 → reduces over-travel jitter on fast wheel flicks
      wheelMultiplier: 0.85,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Store RAF callback reference so cleanup can actually remove it
    const rafCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);

    // Disable GSAP's lag smoothing — prevents stuttery catch-up frames
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);
}
