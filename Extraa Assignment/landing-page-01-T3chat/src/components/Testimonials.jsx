import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Star } from "lucide-react";

const cardDetails = [
  {
    id: "1",
    review:
      "Finally, an AI tool that understands enterprise needs. The reliability and speed are unmatched.",
    button: "60% reduction in response time",
    person: "Emily Watson",
    abbreviation: "EW",
    position: "Product Manager at Notion",
  },
  {
    id: "2",
    review:
      "T3Dotgg became essential to our product development. The insights from multiple models are invaluable.",
    button: "3x faster product iterations",
    person: "Marcus Rodriguez",
    abbreviation: "MR",
    position: "Senior Developer at Stripe",
  },
  {
    id: "3",
    review:
      "The ability to compare responses from different models side-by-side is game-changing for our development workflow.",
    button: "40% improvement in code quality",
    person: "Sarah Chen",
    abbreviation: "SC",
    position: "AI Researcher at Meta",
  },
  {
    id: "4",
    review:
      "T3Dotgg revolutionized how I interact with multiple AI models. The unified interface saves me hours every day.",
    button: "85% faster research iterations",
    person: "David Kim",
    abbreviation: "DK",
    position: "CTO at StartupXYZ",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setActiveIndex((prev) => (prev + 1) % cardDetails.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index) => {
    if (index === activeIndex) return;

    // Determine slide direction based on index
    setDirection(index > activeIndex ? "left" : "right");
    setActiveIndex(index);
  };

  const currentCard = cardDetails[activeIndex];

  return (
    <section className="py-20 px-4">
      <div className="flex items-center justify-center">
        <Button className="text-xs font-medium px-2 py-1 rounded-[8px] tracking-wide">
          Testimonials
        </Button>
      </div>

      <div className="text-3xl text-[#d2c4de] font-semibold text-center my-4">
        <h2 className="lg:text-5xl">Trusted by Innovators</h2>
      </div>
      <div className="text-[16px] text-[#d2c4de] text-center px-10 mb-24">
        <p>
          See how long companies and researches are accelerating their work with
          t3Chat
        </p>
      </div>

      <div className="min-h-[400px] w-full mx-4 flex flex-col items-center overflow-hidden">
        <div className="flex gap-3">
          <Star className="text-[#A3004C] fill-[#A3004C]" />
          <Star className="text-[#A3004C] fill-[#A3004C]" />
          <Star className="text-[#A3004C] fill-[#A3004C]" />
          <Star className="text-[#A3004C] fill-[#A3004C]" />
          <Star className="text-[#A3004C] fill-[#A3004C]" />
        </div>

        <div className="relative w-full max-w-2xl">
          <div key={activeIndex} className={`animate-slide-${direction}`}>
            <h4 className="text-[16px] text-[#d2c4de] w-full max-w-md mx-auto text-center tracking-tight my-8 px-4">
              {currentCard.review}
            </h4>

            <div className="flex justify-center">
              <Button className="text-[16px] font-semibold text-[#dab2ff] px-5 py-2.5 mb-4 bg-[#1E161A] border border-[#342E31]">
                {currentCard.button}
              </Button>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-[#A3004C] p-2 rounded-full size-11 flex items-center justify-center">
                <h4 className="text-sm font-semibold uppercase text-[#fff]">
                  {currentCard.abbreviation}
                </h4>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#fff]">
                  {currentCard.person}
                </h4>
                <p className="text-sm text-[#ffffffb3]">
                  {currentCard.position}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-6 items-center justify-center">
          {cardDetails.map((_, index) => (
            <button
              key={index}
              className={`dots size-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#A3004C] scale-125 w-6"
                  : "bg-[#463753] hover:bg-[#5a4566]"
              }`}
              onClick={() => handleChange(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slideInLeft 0.5s ease-out;
        }

        .animate-slide-right {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
