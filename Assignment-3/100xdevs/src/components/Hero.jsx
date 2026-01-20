import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-20">
      <div className="lg:col-span-1 flex flex-col lg:justify-center items-center lg:place-items-start  pr-4  mb-10">
        <div className="flex items-center gap-2 border border-dashed w-fit px-4.5 py-1.5 rounded-full ">
          <div className="bg-[#10B0A7] size-3 rounded-full" />
          <p className="font-normal tracking-tight text-sm text-[#171717]">
            Join 100,000+ enrolled students today
          </p>
        </div>
        <div>
          <h1 className=" text-4xl md:text-5xl lg:text-7xl tracking-tighter  text-[#001959] font-semibold my-6 w-90 lg:w-full  md:leading-13
           leading-10 text-center lg:text-start lg:leading-20">
            Master Full Stack <span>Development</span>
          </h1>
        </div>

        {/* <h1 className=" text-4xl lg:text-7xl tracking-tighter  text-[#001959] font-semibold my-6 w-70 ">
          <span>Master</span> <span className="">Full</span> <span>Stack </span>
          <span className="">Development</span>
        </h1> */}
        <p className="text-[16px] text-[#4d667f] font-medium text-center leading-6 md:w-140 lg:w-full lg:text-start tracking-wide ">
          Master Full Stack Development through hands-on open Source projects.
          Join a community of developers transforming their careers with
          practical, real-world programming skills.
        </p>
        <div className="flex gap-4 mt-5">
          <Button className="text-[16px] tracking-tight font-normal text-[#001959] px-5 py-2.5">
            Learn More
          </Button>
          <Button className="text-[16px] tracking-tight font-normal text-white px-5 py-2.5 bg-[#001959]">
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="lg:col-span-1 lg:place-items-end md:place-items-center">
        <img
          src="/images/hero-img.webp"
          alt="hero-image"
          className="lg:100 md:size-115 xl:size-125 "
        />
      </div>
    </section>
  );
};

export default Hero;
