import React, { useState } from "react";

const questions = [
  {
    question: " What makes 100xDevs different from other coding platforms?",
    answer:
      "No compromises. With 100xDevs, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.",
  },
  {
    question: " Do I need prior coding experience to join?",
    answer:
      " No prior experience is required. Our courses are designed to take you from beginner to advanced levels with structured learning paths.",
  },

  {
    question: " What kind of support can I expect?",
    answer:
      "You'll get 24/7 community support through our active Discord, weekly study groups, peer code reviews, and direct mentorship opportunities. ",
  },

  {
    question: " Are the courses self-paced or scheduled?",
    answer:
      " We offer both self-paced learning materials and scheduled live sessions, giving you the flexibility to learn at your own pace while staying connected with the community.",
  },

  {
    question: " Will I get a certificate after completion?",
    answer:
      "Yes, you'll receive a certificate of completion for each course you finish, along with portfolio projects that demonstrate your skills to potential employers. ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-[#E5E5E5] mt-10 py-16 section-animate soft">
      <div className="text-center pb-12 ">
        <h2 className="text-5xl font-bold text-[#001044]">FAQs</h2>
        <p className="text-[16px] text-[#4d667f]">
          Get your questions answered
        </p>
      </div>
      <div className="xl:px-52">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="px-4 " key={index}>
              <div
                className="cursor-pointer flex items-start justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-[#001044] mb-4 ">
                  {question.question}
                </h3>
                <span className="">
                  <img
                    src="/icons/key-down.svg"
                    className={`transition-transform duration-500 ease-in-out ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-40  opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[16px] text-[#001044] pb-4 max-w-150">
                  {question.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
