import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="h-18 flex justify-between px-4 py-6 items-center  lg:shadow-xl xl:px-30 lg:px-6 rounded-xl lg:w-full ">
      <div className=" flex items-center gap-6 ">
        <p className="font-extrabold font-lato text-[#001049] text-xl tracking-tight">
          100
          <span className="text-[#EB2E37]">x</span>Devs
        </p>
        {/* desktop home and course button */}
        <div className="hidden lg:flex lg:gap-6 lg:items-center ">
          <p className="text-[16px] text-[#001044]">Courses</p>
          <p className="text-[16px] text-[#001044]">Home</p>
        </div>
        {/* menu, input and search */}
      </div>
      <div className="">
        {/* menu button for mobile & tablet */}
        <div className="lg:hidden bg-[#001049]  p-2 rounded-lg h-fit">
          <img src="icons/menu.svg" alt="menu" className="" />
        </div>

        {/* Search and login button only for desktop */}
        <div className="hidden  lg:flex lg:gap-4">
          <div className=" relative">
            <input
              type="text"
              placeholder="Type to search"
              className="border border-[#EFF0F2] shadow-sm h-10 w-62 rounded-lg px-10 placeholder:text-[#4d667f]"
            />
            <img
              src="/icons/search.svg"
              alt="search"
              className="absolute top-3 left-3 text-gray-400 size-5"
            />
          </div>
          <Button className="text-[#00164F] tracking-tight shadow-sm">
            Sign Up
          </Button>
          <Button className="bg-[#00164F] text-white shadow-sm tracking-tight">
            Log in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
