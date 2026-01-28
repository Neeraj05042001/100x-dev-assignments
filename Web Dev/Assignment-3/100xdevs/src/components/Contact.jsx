import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="bg-linear-to-r from-[#010C3A] via-[#0E2968] to-[#3563C6] px-6 pt-12 rounded-t-3xl mt-28 lg:grid lg:grid-cols-2 lg:h-fit pb-6 relative overflow-hidden section-animate soft">
      <div className="lg:col-start-2 ">
        <div className="">
          <h2 className="text-2xl font-bold text-white">
            Having doubts? Let's get in touch!
          </h2>
          <p className="text-[16px] text-[#fffc] py-2">
            Send us your queries and we'll get back to you soon
          </p>
        </div>

        <div className="mt-10">
          <input
            className="border border-white/40 p-3 rounded-xl w-full placeholder:text-white/60 px-6 text-white outline-0 ring-blue-100 focus:ring-2 focus:ring-white/20 bg-linear-to-r from-[#1C2853] via-[#2A447F] to-[#4972CA]"
            type="text"
            placeholder="Your name"
          />

          <input
            className="border border-white/40 p-3 rounded-xl w-full placeholder:text-white/60 px-6 text-white outline-0 ring-blue-100 focus:ring-2 focus:ring-white/20 bg-linear-to-r from-[#1C2853] via-[#2A447F] to-[#4972CA] my-5"
            type="text"
            placeholder="Your email address"
          />

          <input
            className="border border-white/40 p-3 rounded-xl w-full placeholder:text-white/60 px-6 text-white outline-0 ring-blue-100 focus:ring-2 focus:ring-white/20 bg-linear-to-r from-[#1C2853] via-[#2A447F] to-[#4972CA]"
            type="text"
            placeholder="Your contact number "
          />

          <textarea
            className="border border-white/40 p-3 rounded-xl w-full placeholder:text-white/60 px-6 text-white outline-0  ring-blue-100 focus:ring-2 focus:ring-white/20 bg-linear-to-r from-[#1C2853] via-[#2A447F] to-[#4972CA] my-5 h-40"
            type="text"
            placeholder="Type your query here... "
          />
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#00DDB3] text-[16px] font-semibold rounded-xl px-8 py-3 border-none">
            Submit
          </Button>
        </div>
      </div>
      <div className="mt-2 lg:col-start-1 lg:row-start-1 lg:relative ">
        <img
          src="/images/home-globe.svg"
          alt="globe"
          className="
      w-full
      
      lg:absolute
      lg:-bottom-[30%]
      lg:-left-[24%]
      lg:scale-[1.3]
      lg:max-w-none
      xl:scale-[1.2]
      xl:-bottom-[50%]
      
    "
        />
      </div>
    </section>
  );
};

export default Contact;
