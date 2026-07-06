// ============================================================================
// ONBOARDING PAGE — PREMIUM CLIENT ONBOARDING PROCESS
// Exactly matched to Social Minds premium design language:
// White background, Orange accent (#ff8c42), Black typography, Rounded cards,
// Soft shadows, Premium spacing, Smooth scroll animations, Modern typography.
// ============================================================================

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import NumberFlow from '@number-flow/react';
import {
  Monitor,
  Compass,
  Video,
  Film,
  Megaphone,
  TrendingUp,
  Clock,
  Calendar,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// ============================================================================
// CUSTOM WHATSAPP ICON (Since Lucide doesn't have official brand logos)
// ============================================================================
function WhatsAppIcon({ className, size = 24, color = "#ff8c42" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// ============================================================================
// CUSTOM INSTAGRAM ICON
// ============================================================================
function InstagramIcon({ className, size = 24, color = "#ff8c42" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// ============================================================================
// DECORATIVE TIMELINE ILLUSTRATIONS (FOR EMPTY SIDE OF DESKTOP TIMELINE ROWS)
// ============================================================================
function KickoffIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="80" stroke="#475569" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6" />
      <circle cx="100" cy="100" r="60" stroke="#64748B" strokeWidth="1.5" opacity="0.7" />
      <path d="M140 100C140 122.091 122.091 140 100 140C92.9328 140 86.2933 138.169 80.5 134.9L60 142L67.5 122.5C62.7758 116.147 60 108.384 60 100C60 77.9086 77.9086 60 100 60C122.091 60 140 77.9086 140 100Z" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 85C90 85 87 85 86 87C85 89 86 95 92 101C98 107 104 108 106 107C108 106 108 103 108 103L103 100L99 103C99 103 95 101 92 98C89 95 87 91 87 91L90 87L90 85Z" stroke="#ff8c42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#ff8c42" fillOpacity="0.25" />
      <circle cx="120" cy="85" r="4" fill="#1E293B" />
      <circle cx="130" cy="70" r="3" fill="#ff8c42" />
      <circle cx="65" cy="80" r="3" fill="#475569" />
    </svg>
  );
}

function AccountSetupIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="30" y="40" width="140" height="95" rx="8" stroke="#1E293B" strokeWidth="4" />
      <line x1="30" y1="65" x2="170" y2="65" stroke="#1E293B" strokeWidth="2" />
      <circle cx="45" cy="52" r="3" fill="#ff8c42" />
      <circle cx="55" cy="52" r="3" fill="#475569" />
      <circle cx="65" cy="52" r="3" fill="#64748B" />
      <rect x="45" y="80" width="45" height="40" rx="4" stroke="#475569" strokeWidth="2.5" strokeDasharray="4 4" />
      <rect x="100" y="80" width="55" height="15" rx="3" fill="#ff8c42" fillOpacity="0.2" stroke="#ff8c42" strokeWidth="2" />
      <rect x="100" y="105" width="55" height="15" rx="3" stroke="#1E293B" strokeWidth="2" />
      <path d="M80 135L75 160H125L120 135" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="160" x2="140" y2="160" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <circle cx="155" cy="45" r="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
      <circle cx="155" cy="45" r="5" fill="#ff8c42" />
      <path d="M155 25V29M155 61V65M175 45H171M139 45H135M169.14 30.86L166.31 33.69M143.69 56.31L140.86 59.14M169.14 59.14L166.31 56.31M143.69 33.69L140.86 30.86" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ProfileOptIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer decorative concentric squircle / ring */}
      <rect x="20" y="20" width="160" height="160" rx="44" stroke="#475569" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6" />
      <circle cx="100" cy="100" r="85" stroke="#64748B" strokeWidth="1.5" opacity="0.6" />

      {/* Iconic Instagram Logo Outer Squircle */}
      <rect x="35" y="35" width="130" height="130" rx="36" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="35" y="35" width="130" height="130" rx="36" fill="#1E293B" fillOpacity="0.06" />

      {/* Main Center Camera Lens Circle */}
      <circle cx="100" cy="100" r="32" stroke="#1E293B" strokeWidth="5" />
      <circle cx="100" cy="100" r="18" stroke="#ff8c42" strokeWidth="2.5" opacity="0.8" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="6" fill="#ff8c42" fillOpacity="0.4" />

      {/* Iconic Top-Right Flash Dot */}
      <circle cx="134" cy="66" r="8" fill="#1E293B" />
      <circle cx="134" cy="66" r="13" stroke="#475569" strokeWidth="2" opacity="0.7" />

      {/* Decorative Brand Accents (Heart / Like & Verified Checkmark) */}
      <path d="M160 35C160 30 165 25 170 25C175 25 180 30 180 35C180 43 170 50 170 50C170 50 160 43 160 35Z" stroke="#ff8c42" strokeWidth="2.5" fill="#ff8c42" fillOpacity="0.25" />
      <circle cx="40" cy="155" r="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
      <path d="M33 155L38 160L47 150" stroke="#ff8c42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Subtle background nodes */}
      <circle cx="25" cy="80" r="4" fill="#475569" opacity="0.7" />
      <circle cx="175" cy="120" r="5" fill="#ff8c42" opacity="0.7" />
      <circle cx="120" cy="180" r="3" fill="#1E293B" opacity="0.6" />
    </svg>
  );
}

function ContentPlanIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M100 40C83.4315 40 70 53.4315 70 70C70 80.4039 75.3129 89.5695 83.3934 94.7077C85.5034 96.0494 87.0373 98.1754 87.6521 100.635L89 106H111L112.348 100.635C112.963 98.1754 114.497 96.0494 116.607 94.7077C124.687 89.5695 130 80.4039 130 70C130 53.4315 116.569 40 100 40Z" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 114H110M93 122H107M96 130H104" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 70L96 60L104 60L110 70" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="70" r="4" fill="#ff8c42" />
      <circle cx="45" cy="50" r="12" stroke="#475569" strokeWidth="2.5" strokeDasharray="3 3" />
      <circle cx="45" cy="50" r="4" fill="#ff8c42" />
      <line x1="56" y1="56" x2="74" y2="65" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="155" cy="50" r="12" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M150 50L153 53L160 46" stroke="#ff8c42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="144" y1="56" x2="126" y2="65" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="40" cy="110" r="14" fill="#1E293B" fillOpacity="0.06" stroke="#1E293B" strokeWidth="2.5" />
      <rect x="34" y="104" width="12" height="12" rx="2" stroke="#ff8c42" strokeWidth="2" />
      <line x1="53" y1="104" x2="83" y2="92" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="160" cy="110" r="14" fill="#ff8c42" fillOpacity="0.1" stroke="#475569" strokeWidth="2.5" />
      <polygon points="156,104 166,110 156,116" fill="#ff8c42" />
      <line x1="147" y1="104" x2="117" y2="92" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="100" y1="20" x2="100" y2="28" stroke="#ff8c42" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="28" x2="64" y2="34" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="142" y1="28" x2="136" y2="34" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ContentShootIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="35" y="70" width="85" height="65" rx="10" stroke="#1E293B" strokeWidth="4" />
      <circle cx="65" cy="102" r="16" stroke="#1E293B" strokeWidth="3" />
      <circle cx="65" cy="102" r="6" fill="#ff8c42" fillOpacity="0.4" />
      <path d="M120 85L150 72V132L120 119V85Z" stroke="#475569" strokeWidth="4" strokeLinejoin="round" fill="#475569" fillOpacity="0.15" />
      <circle cx="55" cy="50" r="18" stroke="#1E293B" strokeWidth="3" />
      <circle cx="55" cy="50" r="5" fill="#ff8c42" />
      <circle cx="95" cy="50" r="18" stroke="#475569" strokeWidth="3" />
      <circle cx="95" cy="50" r="5" fill="#1E293B" />
      <line x1="73" y1="50" x2="77" y2="50" stroke="#64748B" strokeWidth="3" />
      <g transform="rotate(-10 145 150)">
        <rect x="125" y="130" width="55" height="45" rx="6" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
        <path d="M125 142H180" stroke="#1E293B" strokeWidth="3" />
        <line x1="138" y1="130" x2="133" y2="142" stroke="#1E293B" strokeWidth="3" />
        <line x1="153" y1="130" x2="148" y2="142" stroke="#475569" strokeWidth="3" />
        <line x1="168" y1="130" x2="163" y2="142" stroke="#1E293B" strokeWidth="3" />
        <polygon points="148,153 160,159 148,165" fill="#ff8c42" />
      </g>
      <circle cx="103" cy="85" r="5" fill="#ff8c42" />
    </svg>
  );
}

function EditingIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="30" width="160" height="115" rx="10" stroke="#1E293B" strokeWidth="4" />
      <rect x="32" y="42" width="75" height="50" rx="6" fill="#1E293B" fillOpacity="0.08" stroke="#1E293B" strokeWidth="2.5" />
      <polygon points="63,57 77,67 63,77" fill="#ff8c42" />
      <rect x="115" y="42" width="53" height="50" rx="6" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M123 67V59M129 72V54M135 77V49M141 72V54M147 67V59M153 72V54M159 64V62" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="#1E293B" strokeWidth="2" />
      <rect x="32" y="106" width="45" height="12" rx="3" fill="#1E293B" fillOpacity="0.2" stroke="#1E293B" strokeWidth="1.5" />
      <rect x="83" y="106" width="60" height="12" rx="3" stroke="#475569" strokeWidth="1.5" />
      <rect x="149" y="106" width="19" height="12" rx="3" fill="#ff8c42" fillOpacity="0.25" stroke="#ff8c42" strokeWidth="1.5" />
      <rect x="32" y="122" width="65" height="12" rx="3" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
      <rect x="103" y="122" width="65" height="12" rx="3" fill="#ff8c42" fillOpacity="0.2" stroke="#ff8c42" strokeWidth="1.5" />
      <line x1="90" y1="96" x2="90" y2="140" stroke="#ff8c42" strokeWidth="2.5" strokeDasharray="2 2" />
      <polygon points="85,96 95,96 90,103" fill="#ff8c42" />
      <path d="M85 145L78 170H122L115 145" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="170" x2="140" y2="170" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function MarketingIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M40 85L100 60V130L40 105V85Z" stroke="#1E293B" strokeWidth="4" strokeLinejoin="round" fill="#1E293B" fillOpacity="0.08" />
      <path d="M40 85C34.4772 85 30 89.4772 30 95C30 100.523 34.4772 105 40 105" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 120L60 155H80L85 125" stroke="#1E293B" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M115 75C125 83 125 107 115 115" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M130 60C145 73 145 117 130 130" stroke="#ff8c42" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
      <rect x="110" y="25" width="70" height="55" rx="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
      <line x1="120" y1="68" x2="170" y2="68" stroke="#64748B" strokeWidth="2" />
      <rect x="125" y="52" width="8" height="16" rx="2" fill="#64748B" fillOpacity="0.4" stroke="#475569" strokeWidth="1.5" />
      <rect x="138" y="44" width="8" height="24" rx="2" stroke="#1E293B" strokeWidth="1.5" />
      <rect x="151" y="36" width="8" height="32" rx="2" fill="#ff8c42" stroke="#ff8c42" strokeWidth="1.5" />
      <path d="M125 45L139 37L160 30" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="160" cy="30" r="3" fill="#1E293B" />
      <circle cx="155" cy="145" r="22" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="155" cy="145" r="12" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="155" cy="145" r="4" fill="#ff8c42" />
      <path d="M172 128L159 141" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <polygon points="172,128 175,134 166,125" fill="#ff8c42" />
    </svg>
  );
}

function BrandGrowthIllustration({ className, size = 240 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="35" y1="160" x2="175" y2="160" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="35" y1="160" x2="35" y2="35" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <rect x="50" y="125" width="20" height="35" rx="4" stroke="#64748B" strokeWidth="3" />
      <rect x="80" y="95" width="20" height="65" rx="4" fill="#475569" fillOpacity="0.15" stroke="#475569" strokeWidth="3" />
      <rect x="110" y="65" width="20" height="95" rx="4" stroke="#1E293B" strokeWidth="3" />
      <rect x="140" y="35" width="20" height="125" rx="4" fill="#ff8c42" fillOpacity="0.25" stroke="#ff8c42" strokeWidth="3" />
      <path d="M45 130L80 90L110 70L150 25" stroke="#ff8c42" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="150,25 136,28 147,39" fill="#ff8c42" />
      <circle cx="80" cy="90" r="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
      <circle cx="110" cy="70" r="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
      <g transform="translate(45, 35) scale(0.8)">
        <path d="M10 35L5 15L20 25L30 10L40 25L55 15L50 35H10Z" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round" fill="#ff8c42" fillOpacity="0.25" />
        <line x1="10" y1="41" x2="50" y2="41" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="5" cy="13" r="3" fill="#ff8c42" />
        <circle cx="30" cy="8" r="3" fill="#1E293B" />
        <circle cx="55" cy="13" r="3" fill="#ff8c42" />
      </g>
      <path d="M165 65L167 70L172 72L167 74L165 79L163 74L158 72L163 70L165 65Z" fill="#ff8c42" />
      <path d="M100 35L101 38L104 39L101 40L100 43L99 40L96 39L99 38L100 35Z" fill="#475569" opacity="0.8" />
    </svg>
  );
}

// ============================================================================
// ONBOARDING PROCESS STEPS DATA
// ============================================================================
const onboardingSteps = [
  {
    number: "01",
    numInt: 1,
    title: "Project Kickoff",
    description: "After agreement signing, we'll create a dedicated WhatsApp group with our 8-member team to ensure smooth communication throughout the project.",
    icon: <WhatsAppIcon size={28} color="#ff8c42" />,
    badge: "Communication",
    illustration: <KickoffIllustration />
  },
  {
    number: "02",
    numInt: 2,
    title: "Account Setup",
    description: "During the first three days we'll collect social media logins, configure account access and complete Google Business Profile setup wherever required.",
    icon: <Monitor size={28} color="#ff8c42" />,
    badge: "Configuration",
    illustration: <AccountSetupIllustration />
  },
  {
    number: "03",
    numInt: 3,
    title: "Profile Optimization",
    description: "We'll optimize your Instagram profile, bio, highlights and account structure to establish a professional brand presence.",
    icon: <InstagramIcon size={28} color="#ff8c42" />,
    badge: "Branding",
    illustration: <ProfileOptIllustration />
  },
  {
    number: "04",
    numInt: 4,
    title: "Content Planning",
    description: "Content ideas, scripts and creative references will be shared for your approval before scheduling the production.",
    icon: <Compass size={28} color="#ff8c42" />,
    badge: "Strategy",
    illustration: <ContentPlanIllustration />
  },
  {
    number: "05",
    numInt: 5,
    title: "Content Shoot",
    description: "Our creative team will visit your location and capture all required photo and video content professionally.",
    icon: <Video size={28} color="#ff8c42" />,
    badge: "Production",
    illustration: <ContentShootIllustration />
  },
  {
    number: "06",
    numInt: 6,
    title: "Editing & Revisions",
    description: "Edited videos will be delivered on alternate days. Revisions will be made whenever necessary until final approval.",
    icon: <Film size={28} color="#ff8c42" />,
    badge: "Post-Production",
    illustration: <EditingIllustration />
  },
  {
    number: "07",
    numInt: 7,
    title: "Publishing & Marketing",
    description: "After approval, content publishing and Meta advertising campaigns begin. Performance reports are shared every 7–10 days.",
    icon: <Megaphone size={28} color="#ff8c42" />,
    badge: "Execution",
    illustration: <MarketingIllustration />
  },
  {
    number: "08",
    numInt: 8,
    title: "Brand Growth",
    description: "The first two months focus on building your brand presence. Lead generation and business growth continue to improve consistently over time.",
    icon: <TrendingUp size={28} color="#ff8c42" />,
    badge: "Scaling",
    illustration: <BrandGrowthIllustration />
  }
];

// ============================================================================
// SINGLE STEP CARD COMPONENT WITH NUMBER COUNTER & HOVER ANIMATIONS
// ============================================================================
function StepCard({ step, index, isEven }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`onboarding-step-wrapper ${isEven ? 'step-right' : 'step-left'}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        marginBottom: '40px',
      }}
    >
      {/* Timeline Node Dot */}
      <motion.div
        className="timeline-node-dot"
        animate={inView ? {
          scale: [0.8, 1.2, 1],
          boxShadow: [
            "0 0 0 0px rgba(255, 140, 66, 0)",
            "0 0 0 12px rgba(255, 140, 66, 0.25)",
            "0 0 0 6px rgba(255, 140, 66, 0.15)"
          ]
        } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '36px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#ff8c42',
          border: '4px solid #FFFFFF',
          boxShadow: '0 0 0 4px rgba(255, 140, 66, 0.2)',
          zIndex: 10,
        }}
      />

      {/* Decorative Topic Illustration in Empty Side (Right side for step-left, Left side for step-right) */}
      {step.illustration && (
        <div
          className="desktop-only-illustration"
          style={{
            position: 'absolute',
            top: '50%',
            [isEven ? 'right' : 'left']: '100%',
            transform: 'translateY(-50%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.88,
            paddingLeft: isEven ? '0px' : '70px',
            paddingRight: isEven ? '70px' : '0px',
          }}
        >
          {step.illustration}
        </div>
      )}

      {/* Card Body */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.09), 0 0 40px rgba(255, 140, 66, 0.15), 0 0 0 2px #ff8c42",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background: '#FFFFFF',
          borderRadius: '28px',
          padding: '36px',
          boxShadow: hovered
            ? "0 25px 50px rgba(0, 0, 0, 0.09), 0 0 40px rgba(255, 140, 66, 0.15), 0 0 0 2px #ff8c42"
            : "0 15px 35px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0,0,0,0.02)",
          border: hovered ? '1px solid #ff8c42' : '1px solid rgba(0, 0, 0, 0.06)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
        }}
      >
        {/* Top Accent Gradient Glow inside card */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle at top right, rgba(255, 140, 66, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Card Header: Step Number + Icon + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Step Number Badge with NumberFlow Animation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #111111, #222222)',
                color: '#ff8c42',
                padding: '8px 16px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              <span style={{ fontSize: '13px', opacity: 0.7, marginRight: '4px', color: '#FFF' }}>STEP</span>
              <span>0</span>
              <NumberFlow
                value={inView ? step.numInt : 0}
                style={{ color: '#ff8c42', fontWeight: 700 }}
              />
            </div>

            {/* Category Tag */}
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#ff8c42',
              background: 'rgba(255, 140, 66, 0.1)',
              padding: '6px 12px',
              borderRadius: '100px',
            }}>
              {step.badge}
            </span>
          </div>

          {/* Modern Icon Box */}
          <motion.div
            animate={hovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(255, 140, 66, 0.12)',
              border: '1px solid rgba(255, 140, 66, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.8)',
            }}
          >
            {step.icon}
          </motion.div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(28px, 4vw, 36px)',
          color: '#000000',
          letterSpacing: '0.04em',
          lineHeight: 1.1,
          marginBottom: '14px',
          margin: 0,
        }}>
          {step.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          color: '#444444',
          lineHeight: 1.65,
          margin: 0,
          fontWeight: 400,
        }}>
          {step.description}
        </p>

        {/* Bottom subtle check indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          color: hovered ? '#ff8c42' : '#888888',
          transition: 'color 0.3s ease',
        }}>
          <CheckCircle2 size={16} color={hovered ? "#ff8c42" : "#888888"} />
          <span>Verified Social Minds Standard Workflow</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// MAIN ONBOARDING PAGE COMPONENT
// ============================================================================
export default function Onboarding() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 50%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main style={{
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      paddingTop: '140px',
      paddingBottom: '100px',
      color: '#000000',
      overflowX: 'hidden',
      position: 'relative'
    }}>

      {/* Ambient Top Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(255, 140, 66, 0.12) 0%, rgba(255, 140, 66, 0.03) 50%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ================================================================== */}
        {/* PAGE HERO */}
        {/* ================================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 100px auto' }}>

          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 140, 66, 0.15)',
              color: '#ff8c42',
              padding: '8px 20px',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              border: '1px solid rgba(255, 140, 66, 0.3)',
              boxShadow: '0 4px 15px rgba(255, 140, 66, 0.1)'
            }}
          >
            <Sparkles size={14} color="#ff8c42" />
            <span>Client Onboarding Process</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 8.5vw, 92px)',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              marginBottom: '28px',
            }}
          >
            <span style={{ color: '#000000' }}>From Agreement </span>
            <span style={{
              background: 'linear-gradient(135deg, #ff8c42, #ff6b1a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              to Brand Growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(17px, 2vw, 20px)',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '760px',
              margin: '0 auto 40px auto',
              fontWeight: 400
            }}
          >
            Every successful partnership begins with a structured onboarding process. Here's exactly how Social Minds works with every client—from onboarding to content production, campaign execution, and long-term brand growth.
          </motion.p>

          {/* One CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                background: 'linear-gradient(135deg, #ff8c42 0%, #ff6810 100%)',
                color: '#000000',
                textDecoration: 'none',
                boxShadow: '0 12px 30px rgba(255, 140, 66, 0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 140, 66, 0.6)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 140, 66, 0.35)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span>Start Your Journey</span>
              <ArrowRight size={18} color="#000" />
            </Link>
          </motion.div>
        </div>

        {/* ================================================================== */}
        {/* PROCESS TIMELINE SECTION */}
        {/* ================================================================== */}
        <div ref={timelineRef} className="onboarding-timeline-container" style={{ position: 'relative', marginBottom: '120px' }}>

          {/* Vertical Timeline Track background */}
          <div className="timeline-track-bg" style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '4px',
            zIndex: 1,
          }} />

          {/* Vertical Timeline Track Animated Reveal */}
          <motion.div className="timeline-track-fill" style={{
            position: 'absolute',
            top: 0,
            width: '4px',
            height: lineHeight,
            background: 'linear-gradient(180deg, #ff8c42 0%, #ff5500 50%, #ff8c42 100%)',
            borderRadius: '4px',
            boxShadow: '0 0 15px rgba(255, 140, 66, 0.6)',
            zIndex: 2,
          }} />

          {/* Process Cards Grid */}
          <div className="onboarding-steps-list" style={{ position: 'relative', zIndex: 3 }}>
            {onboardingSteps.map((step, index) => {
              const isEven = index % 2 !== 0; // 0-indexed: index 0 is step 1 (left), index 1 is step 2 (right)
              return (
                <StepCard
                  key={step.number}
                  step={step}
                  index={index}
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>

        {/* ================================================================== */}
        {/* BOTTOM SECTION — PREMIUM INFORMATION CARD */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto 120px auto',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)',
            borderRadius: '32px',
            padding: '44px 48px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0,0,0,0.03)',
            border: '1px solid rgba(255, 140, 66, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Accent blob */}
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 140, 66, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(255, 140, 66, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff8c42',
              flexShrink: 0,
            }}>
              <Clock size={28} />
            </div>
            <div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#ff8c42',
                textTransform: 'uppercase',
                display: 'block',
              }}>
                OPERATIONAL TIMINGS
              </span>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '36px',
                color: '#000000',
                margin: 0,
                lineHeight: 1.1,
              }}>
                Business Hours
              </h3>
            </div>
          </div>

          <hr style={{ borderColor: 'rgba(0, 0, 0, 0.08)', margin: '24px 0' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {/* Working Hours */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 24px',
              background: 'rgba(255, 140, 66, 0.05)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 140, 66, 0.15)',
            }}>
              <Clock size={24} color="#ff8c42" />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#666', fontWeight: 500 }}>
                  Working Hours
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', color: '#000', fontWeight: 700 }}>
                  9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            {/* Weekly Off */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 24px',
              background: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
            }}>
              <Calendar size={24} color="#555" />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#666', fontWeight: 500 }}>
                  Weekly Off
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', color: '#000', fontWeight: 700 }}>
                  Sunday
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* FINAL CTA SECTION */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, #0A0A0A 0%, #161616 100%)',
            padding: 'clamp(50px, 8vw, 80px) clamp(24px, 6vw, 60px)',
            borderRadius: '36px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 140, 66, 0.25)',
          }}
        >
          {/* Ambient Glowing Blobs */}
          <div style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: '350px',
            height: '350px',
            background: '#ff8c42',
            filter: 'blur(160px)',
            opacity: 0.25,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-120px',
            right: '-120px',
            width: '350px',
            height: '350px',
            background: '#ff5500',
            filter: 'blur(160px)',
            opacity: 0.2,
            pointerEvents: 'none',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 140, 66, 0.18)',
              color: '#ff8c42',
              padding: '6px 16px',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            NEXT STEPS
          </motion.div>

          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(44px, 7vw, 72px)',
            letterSpacing: '0.03em',
            marginBottom: '20px',
            lineHeight: 1.05,
            position: 'relative',
            zIndex: 1,
          }}>
            Ready to Build Your Brand?
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: '#BBBBBB',
            maxWidth: '640px',
            margin: '0 auto 44px auto',
            lineHeight: 1.65,
            position: 'relative',
            zIndex: 1,
            fontWeight: 400,
          }}>
            Let's transform your business with a proven onboarding process designed for long-term growth.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #ff8c42, #ff6810)',
                color: '#000000',
                padding: '18px 38px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(255, 140, 66, 0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 140, 66, 0.6)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 140, 66, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                padding: '18px 38px',
                borderRadius: '100px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = '#ff8c42';
                e.currentTarget.style.color = '#ff8c42';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>

      </section>

      {/* ================================================================== */}
      {/* RESPONSIVE TIMELINE & LAYOUT CSS */}
      {/* ================================================================== */}
      <style>{`
        .onboarding-timeline-container {
          padding: 20px 0;
        }

        /* Desktop Layout (>= 992px): Center timeline, alternating cards */
        @media (min-width: 992px) {
          .timeline-track-bg, .timeline-track-fill {
            left: 50% !important;
            transform: translateX(-50%);
          }
          .onboarding-step-wrapper {
            width: 50% !important;
          }
          .step-left {
            padding-right: 50px;
            align-self: flex-start;
            margin-left: 0;
          }
          .step-left .timeline-node-dot {
            right: -10px !important;
            left: auto !important;
          }
          .step-right {
            padding-left: 50px;
            align-self: flex-end;
            margin-left: 50%;
          }
          .step-right .timeline-node-dot {
            left: -10px !important;
            right: auto !important;
          }
        }

        /* Tablet & Mobile Layout (< 992px): Left timeline, all cards on right */
        @media (max-width: 991px) {
          .timeline-track-bg, .timeline-track-fill {
            left: 18px !important;
          }
          .onboarding-step-wrapper {
            width: 100% !important;
            padding-left: 54px !important;
          }
          .timeline-node-dot {
            left: 8px !important;
            right: auto !important;
          }
          .desktop-only-illustration {
            display: none !important;
          }
        }
      `}</style>

    </main>
  );
}
