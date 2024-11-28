import React, { useState, useEffect } from "react";
import banner from '../images/banner.png'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'

const slides = [
  {
    id: 1,
    image: banner1,
    heading: "Innovative Solutions",
    subheading: "Delivering tailored IT services for your business.",
  },
  {
    id: 2,
    image: banner2,
    heading: "Expert IT Staffing",
    subheading: "Providing the best talent to meet your needs.",
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

  return (
    <div className="relative h-screen bg-cover bg-center flex" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start text-white p-10">
        <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].heading}</h1>
        <p className="text-lg">{slides[currentSlide].subheading}</p>
      </div>
      <div className="relative z-10 w-1/2 flex items-center justify-end p-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;