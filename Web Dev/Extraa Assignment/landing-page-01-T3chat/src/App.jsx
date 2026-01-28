import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureCard from "./components/FeatureCard";
import PricingCards from "./components/PriceCard";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CTA";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#120A0E] min-h-screen pb-16">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <main className="mt-[125px] ">
          <Hero />
          <Features/>
          {/* <FeatureCard/> */}
          <PricingCards/>
          <Testimonials/>
          <CallToAction/>
          <Feedback/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
