import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureCard from "./components/FeatureCard";
import PricingCards from "./components/PriceCard";

const App = () => {
  return (
    <div className="bg-[#120A0E] min-h-screen ">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <main className="mt-[125px] ">
          <Hero />
          <Features/>
          {/* <FeatureCard/> */}
          <PricingCards/>
        </main>
      </div>
    </div>
  );
};

export default App;
