import React, { useLayoutEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LineChart, Sparkles, Target, Zap, LifeBuoy, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOPICS = [
  {
    id: 'data',
    title: 'Data-Driven Strategy',
    description: 'We make decisions based on analytics, audience insights, and market trends.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    angle: -Math.PI / 2, // Top
  },
  {
    id: 'creative',
    title: 'Creative Content',
    description: 'Content designed to stop scrolling and capture attention instantly.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    angle: -Math.PI / 6, // Top Right
  },
  {
    id: 'performance',
    title: 'Performance Focused',
    description: 'Every campaign is optimized for engagement, reach, and conversions.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    angle: Math.PI / 6, // Bottom Right
  },
  {
    id: 'fast',
    title: 'Fast Execution',
    description: 'Quick turnaround times without compromising quality.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    angle: Math.PI / 2, // Bottom
  },
  {
    id: 'support',
    title: 'End-to-End Support',
    description: 'From planning to execution and reporting, we handle everything for you.',
    icon: LifeBuoy,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600',
    angle: (5 * Math.PI) / 6, // Bottom Left
  },
  {
    id: 'results',
    title: 'Proven Results',
    description: 'A track record of growing brands and driving real ROI.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600',
    angle: (7 * Math.PI) / 6, // Top Left
  },
];

// Memoized Desktop Card using pure CSS for all hover states. Zero React re-renders on scroll/hover.
const MemoizedDesktopCard = memo(({ topic, setRef }) => {
  const Icon = topic.icon;
  return (
    <div
      ref={setRef}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      className="absolute left-1/2 top-1/2 w-[300px] z-20 hover:z-30 group/card"
    >
      <div
        className={`w-full bg-white rounded-[24px] p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col cursor-pointer transition-all duration-500 ease-out
          group-hover/card:scale-105 group-hover/card:shadow-[0_20px_50px_-10px_rgba(242,140,56,0.3)] group-hover/card:border-[#F28C38]/40
          group-hover:[&:not(:hover)]:opacity-40 group-hover:[&:not(:hover)]:scale-[0.97]
        `}
      >
        <div className="w-full h-[140px] rounded-[16px] overflow-hidden mb-5 relative shadow-inner">
          <img 
            src={topic.image} 
            alt={topic.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover/card:scale-110" 
          />
          <div className="absolute inset-0 bg-[#F28C38]/20 transition-opacity duration-500 opacity-0 group-hover/card:opacity-100"></div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 bg-[#F28C38]/10 group-hover/card:bg-[#F28C38] group-hover/card:shadow-lg group-hover/card:shadow-[#F28C38]/40">
            <Icon className="w-6 h-6 transition-colors duration-500 text-[#F28C38] group-hover/card:text-white" strokeWidth={2} />
          </div>
          <h3 className="font-bebas text-2xl tracking-wide text-gray-900 leading-none pt-1">
            {topic.title}
          </h3>
        </div>

        <p className="text-gray-500 font-inter text-[14px] leading-relaxed">
          {topic.description}
        </p>
      </div>
    </div>
  );
});
MemoizedDesktopCard.displayName = 'MemoizedDesktopCard';

// Memoized Mobile Card
const MemoizedMobileCard = memo(({ topic }) => {
  const Icon = topic.icon;
  return (
    <div className="w-full bg-white rounded-[24px] p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col">
      <div className="w-full h-[180px] rounded-[16px] overflow-hidden mb-5 relative">
        <img 
          src={topic.image} 
          alt={topic.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#F28C38]/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#F28C38]" strokeWidth={2} />
        </div>
        <h3 className="font-bebas text-[26px] tracking-wide text-gray-900 leading-none pt-1">
          {topic.title}
        </h3>
      </div>

      <p className="text-gray-500 font-inter text-[15px] leading-relaxed">
        {topic.description}
      </p>
    </div>
  );
});
MemoizedMobileCard.displayName = 'MemoizedMobileCard';


export default function WhyChooseSocialMinds() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop/Tablet GSAP Animation
      mm.add("(min-width: 1024px)", () => {
        const radius = Math.min(window.innerWidth * 0.35, 400);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 1, // Smooth scrubbing
            pin: true, // Native GSAP pinning 
            anticipatePin: 1, // Pre-calculate layout shift
            invalidateOnRefresh: false, // Prevent erratic resize measurements
          }
        });

        // Initialize cards in center
        gsap.set(cardsRef.current, {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          xPercent: -50,
          yPercent: -50,
        });

        // Animate cards outwards radially
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          const topic = TOPICS[index];
          const targetX = radius * Math.cos(topic.angle);
          const targetY = radius * Math.sin(topic.angle);

          tl.to(card, {
            x: targetX,
            y: targetY,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          }, 0); // start at 0 so they all animate simultaneously
        });

        return () => tl.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white font-inter w-full relative">
      
      {/* ════════════════════════════════════════
          SECTION HEADING (Normal Flow)
      ════════════════════════════════════════ */}
      <div className="text-center pt-[clamp(5rem,9vw,9rem)] pb-8 px-[clamp(20px,4vw,60px)] max-w-[1440px] mx-auto relative z-20">
        <h2 className="font-bebas text-[clamp(3.5rem,7.5vw,9rem)] leading-[0.88] tracking-[0.01em] text-[#111111] mb-[clamp(14px,1.6vw,20px)] flex flex-col">
          <span className="block">WHY CHOOSE</span>
          <span className="block text-[#F28C38]">SOCIAL MINDS</span>
        </h2>
        <p className="font-inter text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-[#666666] max-w-[850px] mx-auto">
          We combine strategy, creativity, and performance marketing to help brands grow faster, build stronger communities, and achieve measurable results.
        </p>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP RADIAL SHOWCASE (GSAP Pinned)
      ════════════════════════════════════════ */}
      <div className="hidden lg:block relative">
        {/* Removed sticky top-0 to allow native GSAP pinning */}
        <div ref={containerRef} className="h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Central Anchor Dot (Optional visual center point) */}
          <div className="absolute w-4 h-4 rounded-full bg-[#F28C38]/20 z-0 shadow-[0_0_40px_10px_rgba(242,140,56,0.2)]"></div>

          {/* Group wrapper for pure CSS hover states */}
          <div className="relative w-full h-full flex items-center justify-center group">
            {TOPICS.map((topic, i) => (
              <MemoizedDesktopCard
                key={topic.id}
                topic={topic}
                setRef={(el) => (cardsRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE VERTICAL SHOWCASE (Normal Flow)
      ════════════════════════════════════════ */}
      <div className="lg:hidden w-full px-6 pb-24 flex flex-col gap-6 max-w-[500px] mx-auto relative z-10">
        {TOPICS.map((topic) => (
          <MemoizedMobileCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
}
