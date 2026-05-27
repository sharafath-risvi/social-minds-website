// ========================================
// PRICING DATA
// Social Minds three-tier pricing system
// ========================================

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Launch Your Presence',
    price: '₹15,000',
    period: '/month',
    description: 'Perfect for personal brands and small businesses ready to establish a professional digital presence.',
    featured: false,
    tag: 'GET STARTED',
    features: [
      { text: '12 Posts per month', included: true },
      { text: '8 Instagram Reels', included: true },
      { text: 'Basic Content Strategy', included: true },
      { text: 'Instagram Management', included: true },
      { text: 'Monthly Analytics Report', included: true },
      { text: 'Caption Copywriting', included: true },
      { text: 'Brand Visual Templates', included: false },
      { text: 'Paid Ad Management', included: false },
      { text: 'Personal Branding Strategy', included: false },
      { text: 'Priority Support', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Accelerate Your Brand',
    price: '₹30,000',
    period: '/month',
    description: 'For brands serious about scaling their social media presence with data-driven strategy and premium content.',
    featured: true,
    tag: 'MOST POPULAR',
    features: [
      { text: '20 Posts per month', included: true },
      { text: '16 Instagram Reels', included: true },
      { text: 'Full Content Strategy', included: true },
      { text: 'Instagram + Facebook Management', included: true },
      { text: 'Weekly Analytics Reports', included: true },
      { text: 'Premium Copywriting', included: true },
      { text: 'Custom Brand Visual System', included: true },
      { text: 'Meta Ads Management (₹10K budget)', included: true },
      { text: 'Personal Branding Strategy', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
  },
  {
    id: 'dominate',
    name: 'Dominate',
    subtitle: 'Own Your Market',
    price: '₹55,000',
    period: '/month',
    description: 'Full-scale social media domination with performance marketing, personal branding, and dedicated strategy.',
    featured: false,
    tag: 'ULTIMATE',
    features: [
      { text: 'Unlimited Posts', included: true },
      { text: '30+ Instagram Reels', included: true },
      { text: 'Advanced Content Strategy', included: true },
      { text: 'All Platforms Management', included: true },
      { text: 'Real-time Analytics Dashboard', included: true },
      { text: 'Premium Conversion Copywriting', included: true },
      { text: 'Full Brand Identity System', included: true },
      { text: 'Meta Ads Management (₹30K budget)', included: true },
      { text: 'Personal Branding Strategy', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
  },
];

export const faqs = [
  {
    question: 'How soon will I see results?',
    answer: 'Most clients start seeing measurable growth — increased reach, followers, and engagement — within the first 30–45 days. Significant ROI typically appears at the 60–90 day mark as the algorithm learns and your content momentum builds.',
  },
  {
    question: 'Do you handle content creation?',
    answer: 'Yes, completely. We handle strategy, scripting, design, editing, caption writing, posting, and reporting. You just need to approve content before it goes live.',
  },
  {
    question: 'What platforms do you manage?',
    answer: 'We specialize in Instagram and Facebook. Our Growth and Dominate plans include multi-platform management. We also support LinkedIn personal branding on request.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer: 'Absolutely. You can upgrade at any time. Most clients start on Starter or Growth and move to Dominate as their brand scales. Upgrades take effect in the next billing cycle.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes. If your needs don\'t fit our standard plans, contact us for a custom proposal. We work with D2C brands, agencies, founders, and enterprises with bespoke requirements.',
  },
  {
    question: 'How do we get started?',
    answer: 'Book a free 30-minute strategy call. We\'ll audit your current presence, understand your goals, and recommend the right plan. Onboarding takes 48 hours after sign-up.',
  },
];
