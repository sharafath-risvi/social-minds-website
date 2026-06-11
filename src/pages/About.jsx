// ================================================================
// ABOUT PAGE v2.0
// CINEMATIC PREMIUM STORYTELLING EXPERIENCE
//
// 9 immersive sections — motion-heavy, editorial, luxury
// Section flow:
// 01 — Cinematic Hero
// 02 — About Story (asymmetric split)
// 03 — Mission & Vision (dual cinematic)
// 04 — Founder Experience
// 05 — Journey Timeline (horizontal drag)
// 06 — Creative Process (4-step)
// 07 — Why Brands Trust Us
// 08 — Social Minds Culture (image mosaic)
// 09 — Final Cinematic CTA
// ================================================================

// ── Global CSS for this page's cinematic system
import '../styles/about.css';

// ── Section components
import AboutHero from '../components/about/AboutHero';
import ImmersiveJourney from '../components/about/ImmersiveJourney';
import AboutStory from '../components/about/AboutStory';
import MissionVision from '../components/about/MissionVision';
import FounderExperience from '../components/about/FounderExperience';
import JourneyTimeline from '../components/about/JourneyTimeline';
import SocialMindsCulture from '../components/about/SocialMindsCulture';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

export default function About() {
  return (
    <main>
      {/* ── 01 HERO — Cinematic full-screen with parallax + floating metrics ── */}
      <AboutHero />

      {/* ── 01.5 IMMERSIVE JOURNEY — 6-scene premium scroll storytelling ── */}
      <ImmersiveJourney />

      {/* ── 02 STORY — White asymmetric editorial split + agency narrative ── */}
      <AboutStory />

      {/* ── 03 MISSION & VISION — Dark/light cinematic dual section ── */}
      <MissionVision />

      {/* ── 04 FOUNDER — Dark cinematic portrait + story + quote card ── */}
      <FounderExperience />

      {/* ── 05 TIMELINE — White horizontal drag-scroll milestone story ── */}
      <JourneyTimeline />

      {/* ── 08 CULTURE — Dark cinematic 3-image mosaic + stats ── */}
      <SocialMindsCulture />

      {/* ── 09 CTA — Dark cinematic ending with giant type + button ── */}
      <AboutFinalCTA />
    </main>
  );
}
