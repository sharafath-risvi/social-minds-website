// ========================================
// HOME PAGE v3.0
// CINEMATIC PREMIUM FULL EXPERIENCE
// ========================================

import HeroSection from '../components/sections/HeroSection';
import BrandMarquee from '../components/sections/BrandMarquee';
import VerticalParallaxStory from '../components/sections/VerticalParallaxStory';
import SocialGrowthShowcase from '../components/sections/SocialGrowthShowcase/SocialGrowthShowcase';
import ContentStrategySection from '../components/sections/ContentStrategySection';
import WhySocialMinds from '../components/sections/WhySocialMinds';
import WhyChooseSocialMinds from '../components/sections/WhyChooseSocialMinds';
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

      {/* 4. Why Social Minds Section */}
      <WhySocialMinds />

      {/* 5. Why Choose Social Minds Section */}
      <WhyChooseSocialMinds />

      {/* 6. Content Intelligence Section */}
      <ContentStrategySection />

      {/* 6. Our Process Section ("How We Make Magic Happen") */}
      <VerticalParallaxStory />

      {/* 7. Growth Stories Section */}
      <SocialGrowthShowcase />

      {/* 8. Experience Section */}
      <OurProcessExperience />

      {/* 9. What Brands Say Section */}
      <Testimonials />

      {/* 10. CTA Section */}
      <FinalCTA />
    </main>
  );
}
