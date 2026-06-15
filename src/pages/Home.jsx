// ========================================
// HOME PAGE v3.0
// CINEMATIC PREMIUM FULL EXPERIENCE
// ========================================

import HeroSection from '../components/sections/HeroSection';
import BrandMarquee from '../components/sections/BrandMarquee';
import SocialGrowthShowcase from '../components/sections/SocialGrowthShowcase/SocialGrowthShowcase';
import WhySocialMinds from '../components/sections/WhySocialMinds';
import WhyChooseSocialMinds from '../components/sections/WhyChooseSocialMinds';
import Testimonials from '../components/sections/Testimonials';
import SuccessStories from '../components/sections/SuccessStories';
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


      {/* 7. Growth Stories Section */}
      <SocialGrowthShowcase />

      {/* 8. Experience Section */}
      <OurProcessExperience />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* 9. What Brands Say Section */}
      <Testimonials />

      {/* 10. CTA Section */}
      <FinalCTA />
    </main>
  );
}
