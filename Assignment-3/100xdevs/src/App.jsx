import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statics from "./components/Statics";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Youtube from "./components/Youtube";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen max-w-400 mx-auto   relative font-lato">
      <Navbar />
      <div className="px-4 xl:px-30 mt-20 lg:px-6">
        <Hero />
        <Statics />
      </div>
      <Features />
      <Courses />
      <Youtube />
      <Community />
      <FAQ />
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
