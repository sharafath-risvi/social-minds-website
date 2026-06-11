import { useRef, useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { CheckCheck, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { VerticalCutReveal } from "../ui/vertical-cut-reveal";
import { cn } from "../../lib/utils";

const plans = [
  {
    name: "Essential",
    description: "Perfect for brands ready to establish a professional digital presence.",
    price: 14000,
    yearlyPrice: 40000,
    buttonText: "Get Started",
    buttonVariant: "outline",
    includes: [
      "Dedicated 8-Member Team",
      "Instagram, Facebook, GMB",
      "15 Reels with concepts",
      "Promotional Posters",
      "Video Review Templates",
      "Influencer Videos",
      "Dedicated Creative Manager",
      "YouTube",
      "Weekly Zoom Client Meet",
    ],
    notIncludes: [
      "In-House Shoot with Camera Team",
      "Meta Ads",
      "Bi-Monthly Strategy Meetings at Client Location",
      "Performance Marketing",
      "SEO",
    ]
  },
  {
    name: "Advanced",
    description: "Best for growing businesses that need more advanced features.",
    price: 25000,
    yearlyPrice: 70000,
    buttonText: "Get Started",
    buttonVariant: "outline",
    includes: [
      "Dedicated 8-Member Team",
      "Instagram, Facebook, GMB",
      "15 Reels with concepts",
      "Promotional Posters",
      "Video Review Templates",
      "Influencer Videos",
      "Dedicated Creative Manager",
      "YouTube",
      "Weekly Zoom Client Meet",
      "In-House Shoot with Camera Team",
    ],
    notIncludes: [
      "Meta Ads",
      "Bi-Monthly Strategy Meetings at Client Location",
      "Performance Marketing",
      "SEO",
    ]
  },
  {
    name: "Professional",
    description: "Advanced plan with enhanced growth strategy and performance marketing.",
    price: 33000,
    yearlyPrice: 90000,
    buttonText: "Book Consultation",
    buttonVariant: "default",
    popular: true,
    includes: [
      "Dedicated 10-Member Team",
      "Instagram, Facebook, GMB",
      "15 Reels with concepts",
      "Promotional Posters",
      "Video Review Templates",
      "Influencer Videos",
      "Dedicated Creative Manager",
      "YouTube",
      "Weekly Zoom Client Meet",
      "In-House Shoot with Camera Team",
      "Meta Ads",
      "Bi-Monthly Strategy Meetings at Client Location",
      "Performance Marketing",
    ],
    notIncludes: [
      "SEO",
    ]
  },
  {
    name: "Elite",
    description: "Complete domination with full-scale content production and ads.",
    price: 40000,
    yearlyPrice: 108000,
    buttonText: "Scale My Brand",
    buttonVariant: "outline",
    includes: [
      "Dedicated 11-Member Team",
      "Instagram, Facebook, GMB",
      "15 Reels with concepts",
      "Promotional Posters",
      "Meta Ads",
      "Video Review Templates",
      "Influencer Videos",
      "Dedicated Creative Manager",
      "YouTube",
      "Weekly Zoom Client Meet",
      "In-House Shoot with Camera Team",
      "Bi-Monthly Strategy Meetings at Client Location",
      "Performance Marketing",
      "SEO",
    ],
    notIncludes: []
  },
];

const PricingSwitch = ({ onSwitch, className }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0"
              ? "text-white"
              : "text-gray-500 hover:text-black",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-orange-600 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">1 Month Pack</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1"
              ? "text-white"
              : "text-gray-500 hover:text-black",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-orange-600 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            3 Months Pack
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-black">
              Save Up To 12K
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2, // Sped up slightly for better UX
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-20 pb-32 min-h-screen max-w-7xl mx-auto relative bg-white"
      ref={pricingRef}
    >
      <article className="text-left mb-10 space-y-4 max-w-3xl mx-auto text-center">
        <h2 className="md:text-6xl text-4xl capitalize font-medium text-gray-900 mb-4 flex justify-center">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Choose The Perfect Package For Your Brand Growth
          </VerticalCutReveal>
        </h2>

        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="md:text-lg text-base text-gray-600 w-full"
        >
          Transparent pricing designed to help businesses grow through strategic social media marketing, content creation, and performance-driven campaigns.
        </motion.p>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="flex justify-center pt-4"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </motion.div>
      </article>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={2 + index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
          >
            <Card
              className={`relative border flex flex-col h-full ${
                plan.popular
                  ? "ring-2 ring-orange-500 bg-orange-50 border-orange-200"
                  : "bg-white border-neutral-200"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div className="shrink-0 ml-2">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline mt-4">
                  <span className="text-4xl font-semibold text-gray-900 flex">
                    ₹
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-600 ml-1">
                    /{isYearly ? "3 mo" : "mo"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-grow">
                <button
                  className={`w-full mb-6 p-4 text-base font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? "bg-gradient-to-t from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 border border-orange-400 text-white hover:opacity-90"
                      : "bg-gradient-to-t from-neutral-900 to-neutral-800 shadow-lg shadow-neutral-900/20 border border-neutral-700 text-white hover:opacity-90"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-4 border-t border-neutral-200 flex-grow">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
                    Features Included
                  </h2>
                  
                  <ul className="space-y-3 font-medium">
                    {plan.includes.map((feature, featureIndex) => (
                      <li key={`inc-${featureIndex}`} className="flex items-start">
                        <span className="h-5 w-5 bg-white border border-orange-500 rounded-full grid place-content-center mt-0.5 mr-3 shrink-0">
                          <CheckCheck className="h-3 w-3 text-orange-500" />
                        </span>
                        <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                      </li>
                    ))}
                    
                    {plan.notIncludes.map((feature, featureIndex) => (
                      <li key={`not-${featureIndex}`} className="flex items-start opacity-50">
                        <span className="h-5 w-5 bg-neutral-100 border border-neutral-300 rounded-full grid place-content-center mt-0.5 mr-3 shrink-0">
                          <X className="h-3 w-3 text-neutral-400" />
                        </span>
                        <span className="text-sm text-gray-500 leading-tight line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
