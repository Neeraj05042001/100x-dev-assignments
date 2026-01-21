import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#000000] px-8 py-14">
      <div className="md:flex md:justify-between items-center lg:px-16">
        <p className="font-extrabold font-lato text-white text-3xl tracking-tight">
          100
          <span className="text-[#EB2E37]">x</span>Devs
        </p>

        <div className=" pt-4 ">
          <h3 className="text-sm lg:text-lg text-[#d1d5dc]">Terms & Conditions</h3>
          <h3 className="text-sm lg:text-lg text-[#d1d5dc] my-3">Privacy Policy</h3>
          <h3 className="text-sm lg:text-lg text-[#d1d5dc]">Refund & Cancellation</h3>
        </div>
        <div>
          <div className="flex gap-3 mt-6">
            <div className="bg-[#222222] w-fit  rounded-lg flex items-center justify-center p-3">
              <img src="/icons/youtube.svg" alt="youtube" className="size-8" />
            </div>
            <div className="bg-[#222222] w-fit rounded-lg flex items-center justify-center p-3">
              <img src="/icons/twitter.svg" alt="twitter" className="size-8" />
            </div>
            <div className="bg-[#222222] w-fit  rounded-lg flex items-center justify-center p-3">
              <img
                src="/icons/instagram.svg"
                alt="instagram"
                className="size-8"
              />
            </div>
            <div className="bg-[#222222] w-fit  rounded-lg flex items-center justify-center p-3">
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="size-8"
              />
            </div>
          </div>
          <p className="text-[12px] text-[#99a1af]  mt-2.5">
            © 2026 100xDevs. All rights reserved.
          </p>
        </div>
      </div>
      <p className="bg-linear-to-b from-[#585858] to-[#000000] bg-clip-text text-transparent text-[60px] font-black text-center mt-12 md:text-[130px] lg:text-[160px] xl:text-[240px]">100xDEVS</p>
    </section>
  );
};

export default Footer;
