import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection.js";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
    </div>
  );
}

export default App;
