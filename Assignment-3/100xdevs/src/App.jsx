import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statics from "./components/Statics";

const App = () => {
  return (
    <main className="min-h-screen max-w-400 mx-auto   relative font-lato">
      <Navbar />
      <div className="px-4 xl:px-30 mt-20 lg:px-6">
        <Hero />
        <Statics/>
      </div>
    </main>
  );
};

export default App;
