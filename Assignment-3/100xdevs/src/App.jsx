import React from "react";
// import "./styles/animations.css"; // Import animations
import "./styles/animation.css"
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
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  return (
    <main className="min-h-screen max-w-400 mx-auto relative font-lato">
    <ScrollProgress/>
      <Navbar />
      
      <div className="px-4 xl:px-30 mt-20 lg:px-6">
        <section id="hero-section">
          <Hero />
        </section>
        
        <section id="statics-section">
          <Statics />
        </section>
      </div>
      
      <section id="features-section">
        <Features />
      </section>
      
      <section id="courses-section">
        <Courses />
      </section>
      
      <section id="youtube-section">
        <Youtube />
      </section>
      
      <section id="community-section">
        <Community />
      </section>
      
      <section id="faq-section">
        <FAQ />
      </section>
      
      <section id="contact-section">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
};

export default App;