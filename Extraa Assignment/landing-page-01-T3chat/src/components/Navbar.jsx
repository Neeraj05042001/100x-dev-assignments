import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const onscroll = "text-[16px] transition-all duration-700 ease-out";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`max-[1440px] sticky top-12  z-50 px-4 md:px-8 font-fig-tree `}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center transition-all backdrop-blur-3xl duration-300 ease-in-out    ${scrolled ? "bg-[#241d27] max-w-4xl  rounded-xl md:rounded-2xl backdrop-blur-xl py-1.5 px-2.5 shadow-lg shadow-black/10 -translate-y-5" : "bg-transparent"}`}
      >
        <div className=" flex  items-center justify-center gap-2 md:gap-4 ">
          <img
            src="/message-circle.svg"
            alt="message"
            className="bg-[#C71A6D] p-1.5 rounded-xl sh"
          />
          <h3
            className={`text-[#DED2C4] text-sm font-semibold font-fig-tree  ${scrolled ? onscroll : ""}`}
          >
            T3Chat{" "}
          </h3>
        </div>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-8 ">
          <h3
            className={`text-[#DED2C4] text-sm font-semibold  ${scrolled ? onscroll : ""}`}
          >
            Pricing{" "}
          </h3>
          <h3
            className={`text-[#DED2C4] text-sm font-semibold  ${scrolled ? onscroll : ""}`}
          >
            Testimonials
          </h3>
          <Button
            className={`text-[#DED2C4] text-sm font-semibold   ${scrolled ? onscroll : ""}`}
          >
            <div className="flex items-center gap-1 ">
              <p>CHat with T3</p>
              <ArrowUpRight className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
