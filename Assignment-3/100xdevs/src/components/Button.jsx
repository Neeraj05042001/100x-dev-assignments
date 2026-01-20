import React from "react";
import { cn } from "../lib/utils";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn("border border-[#AFB7CA] px-6 py-2 rounded-lg shadow-lg", className)}
    >
      {children}
    </button>
  );
};

export default Button;
