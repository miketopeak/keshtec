import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceGoalSection from "./components/ServiceGoalSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ServiceDetailSection from "./components/ServiceDetailSection";
import VendorSection from "./components/VendorSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceGoalSection />
      <AboutSection />
      <TestimonialSection />
      <ServiceDetailSection />
      <VendorSection />
      <Footer />
    </div>
  );
}

export default App;
