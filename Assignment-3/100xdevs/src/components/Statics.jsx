import React from "react";

const grid1 = [
  {
    icon: "/icons/user.svg",
    title: "27",
    subtitle: "Students cracked GSoC 2025",
  },
  {
    icon: "/icons/trophy.svg",
    title: "$150K",
    subtitle: "Highest International package",
  },
  {
    icon: "/icons/bag.svg",
    title: "200+",
    subtitle: "High paying internships       confirmed",
  },
];

const categories = [
  "Full Stack Development",
  "Real World Projects",
  "Open Source Contributions",
  "Production Ready",
  "DevOps & Deployment",
  "Job Ready Portfolio",
];

const Statics = () => {
  return (
    <section className="mt-16 section-animate ">
      <div className="md:grid md:grid-cols-3 md:gap-6  ">
        <div className="bg-[#001959] w-full  col-span-3 px-6 py-16 rounded-xl rounded-tr-[130px] md:flex ">
          {grid1.map((item, index) => (
            <div
              key={item.title}
              className={`${index === 0 || index === 1 ? " md:border-white md:border-r-2" : ""} `}
            >
              <div className="flex  gap-3  mb-2 px-6  md:items-center m-2 ">
                <div className="bg-[#828ACD] w-fit md:w-20 h-fit p-2.5   rounded-bl-xl rounded-tr-xl">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="size-8 md:size-10"
                  />
                </div>
                <div>
                  <p className="text-[#e5e5e5] text-4xl font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[#e5e5e5b3] text-[17px] font-normal tracking-wide">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              {index < 2 ? (
                <div className="h-0.5 bg-white w-full rounded-2xl my-4 md:hidden" />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#00AB93]  md:col-span-2 p-4 lg:p-8 rounded-tl-xl rounded-tr-[50px] rounded-br-xl rounded-bl-[50px] my-6 md:m-0 ">
          <h2 className="md:text-4xl md:tracking-wide text-3xl leading-9 font-semibold text-[#fafafa] tracking-tight">
            Job ready skills that matter
          </h2>
          <p className="text-lg md:tracking-wider leading-7 text-[#fafafa] tracking-wide py-2">
            Master development through real-world applications, not tutorials
          </p>
          <div className="py-2 flex   flex-wrap gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white py-2 px-2.5  md:px-6 md:text-lg text-[#29AB93] rounded-full w-fit "
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#001959]  md:col-span-1 p-8 rounded-tl-xl rounded-tr-[50px] rounded-br-xl rounded-bl-[50px]">
          <h2 className="text-3xl leading-9 font-semibold text-[#fafafa] tracking-wide lg:tracking-tight ">
            Personally mentoring India's next 100x engineers
          </h2>
          <p className="text-lg leading-7 text-[#fafafa] my-4 tracking-wide md:-tracking-tighter md:text-sm">
            Taking you from 1z to 100x through practical projects and real-world
            open source
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statics;
