import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="px-4 flex flex-col items-center justify-center font-fig-tree ">
        <div className="border border-[#3B3237] rounded-md px-2 py-0.5 w-fit flex items-center justify-center gap-1">
          <div className="bg-[#A3004C] size-2 rounded-full animate-pulse  " />
          <p className="text-[#d2c4de] font-medium text-xs">Always up 24/7</p>
        </div>

        <div className="  pt-3 ">
          <div className="max-w-sm md:max-w-2xl mx-auto text-4xl font-bold text-[#d2c4de] py-4  ">
            <p className="text-center md:hidden">Your Ordinary</p>
            <p className="text-center md:hidden">AI chat app but</p>
            <p className="text-center md:hidden">with better UI/UX</p>

            {/* for md devices */}
            <h1 className="text-5xl text-center">Your Ordinary AI chat</h1>
            <h1 className="text-5xl text-center">app but with better UI/UX</h1>
          </div>
          <div className="text-[16px] text-[#c2b6cf] px-2  text-center pb-8 md:mt-2 ">
            <p className="tracking-wide">
              T3 Chat is a fast, simple and secure AI chat app
            </p>
            <p>that is built to make AI accessible to everyone</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4  w-full px-2">
          <Button className="px-6 py-2.5">Chat with T3</Button>
          <Button className="px-6 py-2.5 bg-[#20171C] border border-[#322930] ">
            Send Feedback
          </Button>
        </div>
        <p className="text-xs text-[#c2b6cf] pt-2 pb-12">
          No credit card required to get started
        </p>

        <div className="relative w-full max-w-5xl mx-auto mt-24">
          {/* Gradient glow - positioned behind */}
          <div className="absolute top-1.5/2 md:top-[5%] left-1/2 -translate-x-1/2 md:-translate-y-5-32 -translate-y-1/2 h-40 w-[24rem] bg-gradient-to-br from-pink-600 to-transparent blur-[4em] drop-shadow-2xl rounded-full z-0"></div>

          <div className="bg-[#1E141C] p-2 rounded-xl">
            <img
              src="/image.png"
              alt="App Preview"
              className="relative z-10 w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
