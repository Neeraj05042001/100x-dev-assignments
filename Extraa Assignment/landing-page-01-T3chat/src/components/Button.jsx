import { ArrowUpRight } from "lucide-react";
import React from "react";
const cn = (...classes) => classes.join(" ");

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "text-[#efc0d8] font-semibold py-2 px-3 rounded-xl bg-[#A3004C] text-[14px] flex gap-1 items-center justify-center",
        className,
      )}
    >
      <span>{children}</span>
     
    </button>
  );
};

export default Button;
