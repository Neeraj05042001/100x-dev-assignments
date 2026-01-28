import React from "react";
import Button from "./Button";

import FeatureCard from "./FeatureCard";
import { ZapIcon } from "lucide-react";

const cardData = [
  {
    title: "Multi-Model Chat",
    description:
      "Talk to multiple AI models from different providers — all in one place.",
  },
  {
    title: "Sync & Sign-In",
    description:
      "Secure authentication with chat history saved across sessions.",
  },
  {
    title: "Web-First Experience",
    description:
      "No setup, no downloads — everything runs smoothly in your browser.",
  },
];

const Features = () => {
  return (
    <section className=" relative  mt-32 mb-24 ">
      <div className="flex items-center justify-center">
        <Button className="text-xs font-medium px-2 py-1 rounded-[8px] tracking-wide">
          Features
        </Button>
      </div>

      <div className="text-3xl text-[#d2c4de] font-semibold text-center my-4">
        <h2>Features which</h2>
        <h2>everyone craves for</h2>
      </div>
      <div className="text-[16px] text-[#d2c4de] text-center px-10">
        <p>
          We have created the most simpler way of using the AI chat which makes
          it very use to use
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2 mt-12 max-w-xl mx-auto lg:max-w-[1440px] overflow-hidden ">
        {cardData.map((feature) => (
          <div className="relative  bg-[#160F14] border border-[#1F1820] rounded-2xl mx-14 pt-16 pb-6 lg:w-[75%] ">
            <div className=" flex items-center justify-center ">
              <div className="h-28 w-28 relative flex items-center ">
                <div
                  className="absolute inset-0 "
                  style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(163, 0, 76, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(163, 0, 76, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "28px 28px",
                    maskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 20%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
                  }}
                >
                  <div className="bg-[#A3004C] w-fit p-3 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                    <ZapIcon className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-[20px] text-[#d4c7e1] my-4 text-center font-semibold">
              {feature.title}
            </h3>

            <p className="text-xs text-[#c2b6cfcc] text-center max-w-[220px] mx-auto ">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
