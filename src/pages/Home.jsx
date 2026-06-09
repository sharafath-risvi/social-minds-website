// ========================================
// HOME PAGE v3.0
// CINEMATIC PREMIUM FULL EXPERIENCE
// ========================================

import HeroSection from '../components/sections/HeroSection';
import BrandMarquee from '../components/sections/BrandMarquee';
import ServicesShowcase from '../components/sections/ServicesShowcase';
import VerticalParallaxStory from '../components/sections/VerticalParallaxStory';
import SocialGrowthShowcase from '../components/sections/SocialGrowthShowcase/SocialGrowthShowcase';
import ContentStrategySection from '../components/sections/ContentStrategySection';
import WhySocialMinds from '../components/sections/WhySocialMinds';
import Testimonials from '../components/sections/Testimonials';
import OurProcessExperience from '../components/sections/OurProcessExperience';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. As Seen Growth With */}
      <BrandMarquee />

      {/* 3. What We Do Section */}
      <ServicesShowcase />

      {/* 4. Why Social Minds Section */}
      <WhySocialMinds />

      {/* 5. Content Intelligence Section */}
      <ContentStrategySection />

      {/* 6. Our Process Section ("How We Make Magic Happen") */}
      <VerticalParallaxStory />

      {/* 7. Growth Stories Section */}
      <SocialGrowthShowcase />

      {/* 8. What Brands Say Section */}
      <Testimonials />

      {/* 9. Experience Section */}
      <OurProcessExperience />

      {/* 10. CTA Section */}
      <FinalCTA />
    </main>
  );
}
