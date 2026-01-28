import React from "react";

const Community = () => {
  return (
    <section className="mt-12 section-animate">
      <div>
        <div className="bg-linear-to-r  from-blue-950 via-[#293963] to-[#315197] rounded-2xl p-8 pb-0 flex flex-col gap-2 md:px-16 md:pt-16 lg:flex-row lg:justify-between lg:pr-0">
          <div className=" lg:w-1/2">
            <h2 className="text-3xl md:text-4xl md:tracking-wide leading-9.5 text-white font-bold lg:text-5xl lg:leading-15 lg:tracking-wide xl:tracking-tight xl:w-[70%]  ">
              A Community That Has Your Back
            </h2>

            <div className="flex flex-col gap-2.5 mt-4">
              <div className="text-sm text-[#ffffffe6] flex items-center gap-3 mt-2">
                <div className="size-1.5 bg-white rounded-full" />
                <span className="text-white/90 md:text-[16px]">
                  {" "}
                  Activate Discord with 24/7 community support
                </span>
              </div>

              <div className="text-sm text-[#ffffffe6] flex items-center gap-3">
                <div className="size-1.5 bg-white rounded-full" />
                <span className="text-white/90 md:text-[16px]">
                  {" "}
                  Collaborate on open source and build together
                </span>
              </div>
              <div className=" flex items-center gap-3">
                <div className="size-1.5 bg-white rounded-full" />
                <span className="text-sm text-white/90 md:text-[16px]">
                  {" "}
                  Weekly study groups and peer code reviews
                </span>
              </div>
              <div className="text-sm text-[#ffffffe6] flex items-center gap-3">
                <div className="size-1.5 bg-white rounded-full" />
                <span className="text-white/90 md:text-[16px]">
                  {" "}
                  Job referrals and opportunity sharing
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 ">
            <img
              src="/images/community1.png"
              alt="community-1"
              className="mt-20"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 lg:grid-cols-4 lg:gap-4">
          <img
            src="/images/community2.png"
            alt="community-2"
            className="rounded-2xl size-full"
          />
          <img
            src="/images/community3.png"
            alt="community-3"
            className="rounded-2xl size-full"
          />
          <img
            src="/images/community4.png"
            alt="community-4"
            className="rounded-2xl size-full"
          />
          <img
            src="/images/community5.png"
            alt="community-5"
            className="rounded-2xl size-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
