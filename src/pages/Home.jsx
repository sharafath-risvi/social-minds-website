// ========================================
// HOME PAGE v3.0
// CINEMATIC PREMIUM FULL EXPERIENCE
// 12 immersive sections — motion-heavy
// Alternating black / white / orange sections
// ========================================

// ── Section 01 — Cinematic Hero
import HeroSection from '../components/sections/HeroSection';
// ── Section 02 — Brand Marquee
import BrandMarquee from '../components/sections/BrandMarquee';
// ── Section 03 — Animated Stats (WHITE)
import StatsSection from '../components/sections/StatsSection';
// ── Section 04 — Services Showcase (DARK)
import ServicesShowcase from '../components/sections/ServicesShowcase';
// ── Section 05 — Vertical Parallax Story (WHITE)
import VerticalParallaxStory from '../components/sections/VerticalParallaxStory';
// ── Section 07 — Social Growth Showcase (WHITE)
import SocialGrowthShowcase from '../components/sections/SocialGrowthShowcase/SocialGrowthShowcase';
// ── Section 07b — Growth Ecosystem — Social Minds OS (WHITE)
import GrowthEcosystemSection from '../components/sections/GrowthEcosystemSection';
// ── Section 08 — Content Strategy (DARK)
import ContentStrategySection from '../components/sections/ContentStrategySection';

// ── Section 10 — Why Social Minds (ORANGE)
import WhySocialMinds from '../components/sections/WhySocialMinds';
// ── Section 11 — Our Process Experience (DARK — CINEMATIC INTERACTIVE)
import OurProcessExperience from '../components/sections/OurProcessExperience';
// ── Section 12 — Testimonials (WHITE)
import Testimonials from '../components/sections/Testimonials';
// ── Section 13 — Final Cinematic CTA (DARK)
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      {/* ── 01 HERO — Cinematic full-screen, particles, giant type ── */}
      <HeroSection />

      {/* ── 02 BRAND MARQUEE — Dual-row infinite scroll ── */}
      <BrandMarquee />

      {/* ── 03 STATS — White, animated counting numbers ── */}
      <StatsSection />

      {/* ── 04 SERVICES — Dark, horizontal scroll cards ── */}
      <ServicesShowcase />

      {/* ── 05 VERTICAL PARALLAX — White, 3-chapter storytelling ── */}
      <VerticalParallaxStory />

      {/* ── 07 GROWTH SHOWCASE — White, case studies + before/after ── */}
      <SocialGrowthShowcase />

      {/* ── 07b GROWTH ECOSYSTEM — White, Social Minds OS two-column iPhone ── */}
      <GrowthEcosystemSection />

      {/* ── 08 CONTENT STRATEGY — Dark, 3 content type cards ── */}
      <ContentStrategySection />

      {/* ── 10 WHY SOCIAL MINDS — Orange gradient, 6 reasons ── */}
      <WhySocialMinds />

      {/* ── 11 OUR PROCESS EXPERIENCE — Cinematic 3-column interactive storytelling ── */}
      <OurProcessExperience />

      {/* ── 12 TESTIMONIALS — White, infinite dual carousel ── */}
      <Testimonials />

      {/* ── 13 FINAL CTA — Dark cinematic, particles, giant type ── */}
      <FinalCTA />
    </main>
  );
}
