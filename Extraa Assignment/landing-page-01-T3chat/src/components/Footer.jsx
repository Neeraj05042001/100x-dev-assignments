// Footer.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-[#1B141A] border rounded-xl border-[#342E31] mb-8 max-w-7xl mx-auto ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Logo/Icon */}
          <div className="flex items-center justify-center">
            <div className="bg-[#A3004C] p-2 rounded-xl sh">
              <MessageCircle className="text-white size-6" />
            </div>
          </div>

          {/* Brand Name */}
          <h3 className="text-[#d2c4de] font-semibold text-[16px]">T3Chat</h3>

          {/* Copyright */}
          <p className="text-[#d2c4de] text-sm">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
