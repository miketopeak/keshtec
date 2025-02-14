import React, { useState, useEffect } from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";

const slides = [
  {
    id: 1,
    image: banner1,
    heading: (
      <>
        Innovative technology engages the world,
        <br /> empowering you to grow your{" "}
        <span className="text-[#45a401] slider-custom-font italic">
          business
        </span>
      </>
    ),
    subheading:
      "We are focused on giving excellent software services. We are searching for skilled, talented, and devoted people to join us.",
  },
  {
    id: 2,
    image: banner2,
    heading: (
      <>
        Our finance can give more
        <br /> possiblities of{" "}
        <span className="text-[#45a401] slider-custom-font italic">
          business
        </span>
      </>
    ),
    subheading:
      "The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach ",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-[44px] font-bold mb-4">{slide.heading}</h1>
            <p className="text-lg mb-[50px]">{slide.subheading}</p>
            <a href="contact.html" className="theme-btn btn-style-one">
              Let’s start now{" "}
              <span className="icon">
                <i className="fi fi-rr-link-alt"></i>
              </span>
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#8592; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
};

export default HeroSection;
