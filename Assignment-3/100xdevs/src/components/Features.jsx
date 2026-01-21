import React from "react";

const features = [
  {
    title: "Live Interaction Sessions",
    description:
      "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
  },
  {
    title: "Real Engineer, Real Experience",
    description:
      "Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.",
  },
  {
    title: "Learn by Doing",
    description:
      "Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.",
  },
  {
    title: "Job-Ready Curriculum",
    description:
      "Master DSA, System Design, DevOps & scalable full-stack skills. From JavaScript to MERN stack & blockchain technologies.",
  },
  {
    title: "Career Support & Community",
    description:
      "Personalized career guidance, mock interviews, access to top hiring partners & a supportive community of ambitious learners.",
  },
  {
    title: "Lifetime Access",
    description:
      "Lifetime access to course assignments & one-year access to session recordings for continuous learning at your pace.",
  },
];

const Features = () => {
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
          <div className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide scroll-smooth [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card bg-white px-6 pt-8 pb-18 max-w-100 rounded-2xl shadow-xl flex-none transition-transform duration-300"
                style={{ "--i": index }}
              >
                {/* Icon */}
                <div className="flex bg-[#2DD4BF] size-12 items-center justify-center p-2 rounded-full group">
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
                <h3 className="text-[20px] leading-7 font-bold text-[#101828] tracking-tight mt-4">
                  {feature.title}
                </h3>

                <div className="bg-[#38BDF8] w-12 h-0.75 mt-2 mb-3" />

                <p className="text-sm leading-5.5 text-[#364153]">
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
