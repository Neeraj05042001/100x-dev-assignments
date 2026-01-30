// CallToAction.jsx
import React from "react";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl xl:max-w-7xl mx-auto">
        <div className="relative rounded-xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a1942] via-[#2d1028] to-[#1a0a15]"></div>

          {/* Radial glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,0,76,0.3)_0%,_transparent_70%)]"></div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8  flex flex-col items-center justify-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-[#d2c4de] mb-4 tracking-tight md:max-w-md">
              Just Signup and write your first question to T3 :)
            </h2>

            <p className="text-[#c2b6cf] text-base mb-8">
              We promise , we dont spam with useless mails
            </p>

            <Button className="bg-[#A3004C] hover:bg-[#8a0040] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Chat with T3
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
