import React from "react";
import Button from "./Button";

const card = [
  {
    id: 1,
    description: "How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)",
    link: "dRXq81Om2a4",
  },
  {
    id: 1,
    description: "$25000 Bug Bounty, $100k Offer as a Solana Engineer",
    link: "PZNgcH2Jtac",
  },
  {
    id: 1,
    description: "How He Cracked A 40Lakhs Remote Coding Job (Complete Story)",
    link: "TbbCJQ4Vbko",
  },
];

const Youtube = () => {
  return (
    <section className=" max-w-7xl mx-auto mt-16 section-animate">
      <div className="bg-[#001959] pt-20 px-6 pb-22 rounded-2xl">
        <div className="text-center md:text-start mb-12">
          <h2 className="tracking-tight text-4xl leading-10 text-white font-bold pb-1  ">
            The 100xdevs Podcast
          </h2>
          <p className="text-sm leading-5 text-[#d1d5dc] md:w-130 ">
            Unfiltered discussions on engineering, startups, and career growth
            with industry experts and successful developers
          </p>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {card.map((item) => (
            <div
              className="card-container bg-white p-5 rounded-2xl  "
              key={item.id}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${item.link}`}
                  title="YouTube video"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-[#4a5565] mt-4 ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youtube;
