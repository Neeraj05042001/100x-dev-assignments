import React, { useRef, useState, useEffect } from "react";

const features = [
  {
    id: "1",
    title: "Live Interaction Sessions",
    description:
      "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
  },
  {
    id: "2",
    title: "Real Engineer, Real Experience",
    description:
      "Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.",
  },
  {
    id: "3",
    title: "Learn by Doing",
    description:
      "Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.",
  },
  {
    id: "4",
    title: "Job-Ready Curriculum",
    description:
      "Master DSA, System Design, DevOps & scalable full-stack skills. From JavaScript to MERN stack & blockchain technologies.",
  },
  {
    id: "5",
    title: "Career Support & Community",
    description:
      "Personalized career guidance, mock interviews, access to top hiring partners & a supportive community of ambitious learners.",
  },
  {
    id: "6",
    title: "Lifetime Access",
    description:
      "Lifetime access to course assignments & one-year access to session recordings for continuous learning at your pace.",
  },
];

const Features = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const velocityRef = useRef(0.5);
  const targetVelocityRef = useRef(0.5);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft || 0;
    let animationId;

    const scroll = () => {
      if (scrollContainer) {
        // Smooth velocity transition
        velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.1;
        
        scrollPosition += velocityRef.current;
        
        // Reset scroll when reaching halfway (seamless loop)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    // Smoothly change target velocity when paused state changes
    targetVelocityRef.current = isPaused ? 0 : 0.5;
  }, [isPaused]);

  const handleMouseEnter = (index) => {
    setIsPaused(true);
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoveredCard(null);
  };

  return (
    <section className="section-animate">
      <div className="mt-20 bg-[#E5E5E5] py-22 px-8 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold leading-10 text-[#001959]">
          Why 100xDevs?
        </h1>
        <p className="text-lg leading-7 text-[#4a5565] tracking-tight py-4">
          Our most comprehensive and impactful learning experiences
        </p>

        {/* Horizontal Scroll */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate features for seamless loop */}
            {[...features, ...features].map((feature, index) => (
              <div
                key={`${feature.id}-${index}`}
                className={`feature-card px-6 pt-8 pb-18 max-w-100 rounded-2xl shadow-xl flex-none 
                  transition-all duration-700 ease-out cursor-pointer
                  ${hoveredCard === index 
                    ? 'bg-[#001959] scale-105 shadow-2xl' 
                    : 'bg-white scale-100'
                  }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Icon */}
                <div className={`flex size-12 items-center justify-center p-2 rounded-full group transition-colors duration-700
                  ${hoveredCard === index ? 'bg-[#38BDF8]' : 'bg-[#2DD4BF]'}`}>
                  <img
                    src="/icons/arrow-b.svg"
                    alt=""
                    className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                  <img
                    src="/icons/arrow-f.svg"
                    alt=""
                    className="size-5 -ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Content */}
                <h3 className={`text-[20px] leading-7 font-bold tracking-tight mt-4 transition-colors duration-700
                  ${hoveredCard === index ? 'text-white' : 'text-[#101828]'}`}>
                  {feature.title}
                </h3>

                <div className={`w-12 h-0.75 mt-2 mb-3 transition-colors duration-700
                  ${hoveredCard === index ? 'bg-[#2DD4BF]' : 'bg-[#38BDF8]'}`} />

                <p className={`text-sm leading-5.5 transition-colors duration-700
                  ${hoveredCard === index ? 'text-gray-200' : 'text-[#364153]'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;