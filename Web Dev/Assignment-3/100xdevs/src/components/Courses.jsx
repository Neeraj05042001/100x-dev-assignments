import React from "react";
import Button from "./Button";

const course = [
  {
    img: "/images/bootcamp.jpg",
    title: "100xSchool Combined Bootcamp",
    description:
      "Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every ",
    offerPrice: "5,999",
    originalPrice: "5,999",
  },

  {
    img: "/images/bootcamp-1.jpg",
    title: "Web Dev + Devops Bootcamp",
    description: "Web dev Devops",
    offerPrice: "3,999",
    originalPrice: "5,999",
  },

  {
    img: "/images/web3boot.jpg",
    title: "Web3 Bootcamp",
    description: "Complete Solana and Web3 Bootcamp",
    offerPrice: "3,999",
    originalPrice: "5,999",
  },

  {
    img: "/images/ai-boot.jpeg",
    title: "AI and ML Bootcamp",
    description: "AI and ML Syllabus",
    offerPrice: "3,999",
    originalPrice: "5,999",
  },
];

const Courses = () => {
  return (
    <section className="section-animate">
      <div className="bg-[#001959] pt-20 px-6 pb-22 ">
        <div className="text-center mb-12">
          <h2 className="tracking-tight text-4xl leading-10 text-white font-bold pb-1 ">
            Featured Cohorts
          </h2>
          <p className="text-sm leading-5 text-[#d1d5dc] ">
            Continue From Where You Left Off
          </p>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {course.map((item) => (
            <div
              className="card-container bg-white p-4 rounded-2xl  "
              key={item.title}
            >
              <div className="card ">
                <img src={item.img} alt={item.img} className="rounded-2xl" />
                <h3 className="text-[20px] leading-7 font-semibold tracking-tight mt-4">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#4a5565] mt-8 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-baseline ">
                    <p className="text-2xl font-bold text-[#001044] ">
                      ₹{item.offerPrice}
                    </p>
                    <p className="text-lg text-[#4d667f] line-through ">
                      ₹{item.originalPrice}
                    </p>
                  </div>
                  <Button className="flex px-4 justify-between">
                    <span className="text-sm text-[#001044]">INR</span>
                    <img src="/icons/keydown.svg" />
                  </Button>
                </div>
                <Button className="bg-[#001959] w-full text-white font-semibold mt-4">
                  View Content
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
