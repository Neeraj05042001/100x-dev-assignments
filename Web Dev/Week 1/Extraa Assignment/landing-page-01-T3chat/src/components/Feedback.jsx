// Feedback.jsx
import React, { useState } from "react";
import Button from "./Button";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 px-8 ">
      <div className="max-w-6xl xl:max-w-7xl mx-auto grid  gap-12 items-start lg:grid-cols-2">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Share Your Feedback
          </h2>
          <p className="text-[#d2c4de] text-base leading-relaxed">
            We would love to hear your thoughts and suggestions. Your feedback
            helps us improve and create better experiences for everyone.
          </p>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#d2c4de] mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#1a0a15] border border-[#342E31] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#A3004C] transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#d2c4de] mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts with us..."
                rows="5"
                className="w-full px-4 py-3 bg-[#1a0a15] border border-[#342E31] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#A3004C] transition-colors resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#A3004C] hover:bg-[#8a0040] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
