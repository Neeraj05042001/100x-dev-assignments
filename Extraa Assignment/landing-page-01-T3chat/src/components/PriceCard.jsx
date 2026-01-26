import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

const pricingData = [
  {
    id: 1,
    tier: "FREE",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI aggregation",
    features: [
      "100 queries per month",
      "Access to 3 AI models",
      "Basic analytics",
      "Community support",
      "Standard response time",
      "API access",
      "Custom integrations",
    ],
    buttonText: "Get Started",
    buttonStyle: "primary", // pink button
    cardStyle: "dark", // dark background
    highlighted: false,
  },
  {
    id: 2,
    tier: "PRO",
    price: "$8",
    period: "monthly",
    description: "Ideal for professionals and growing teams",
    features: [
      "Unlimited queries",
      "Access to all AI models",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
      "Team collaboration",
    ],
    buttonText: "Get Started",
    buttonStyle: "dark", // black button
    cardStyle: "gradient", // pink gradient background
    highlighted: true,
  },
  {
    id: 3,
    tier: "ENTERPRISE",
    price: "contact us",
    period: null,
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "SLA guarantees",
      "Custom model training",
      "On-premise deployment",
      "Dedicated support team",
      "Advanced security features",
    ],
    buttonText: "Contact Sales",
    buttonStyle: "primary", // pink button
    cardStyle: "dark", // dark background
    highlighted: false,
  },
];

const PricingCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="flex items-center justify-center">
        <Button className="text-xs font-medium px-2 py-1 rounded-[8px] tracking-wide">
          Features
        </Button>
      </div>

      <div className="text-3xl text-[#d2c4de] font-semibold text-center my-4">
        <h2 className="lg:text-5xl">Simple Pricing</h2>
      </div>
      <div className="text-[16px] text-[#d2c4de] text-center px-10">
        <p>
          These are our most simple and affordable pricing for this application
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-6  ">
          {pricingData.map((plan, id) => (
            <div
              key={plan.id}
              className={`
                rounded-3xl p-8 max-w-[280px]  mx-auto mb-5 
                ${
                  plan.cardStyle === "gradient"
                    ? "bg-[#A3004C]"
                    : "bg-[#2C2632]"
                }
                ${plan.highlighted ? "scale-105 shadow-2xl" : ""}
              `}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-[#d2c4de] text-lg font-semibold tracking-wider mb-4">
                  {plan.tier}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className={`text-5xl font-bold text-white ${plan.id === 3 ? "items-baseline text-lg text-[#c2b6cf]" : "text-5xl "}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#c2b6cf] text-lg">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-[#c2b6cf] text-sm">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-[#c2b6cf] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`
                  w-full py-3 px-6 rounded-xl font-medium transition-all
                  ${
                    plan.buttonStyle === "primary"
                      ? "bg-[#A3004C] hover:bg-[#8B0040] text-white"
                      : "bg-black hover:bg-black/80 text-white"
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
