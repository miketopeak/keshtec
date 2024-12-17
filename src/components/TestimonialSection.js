import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "We are so a delightful experience with Kesh Technologies   Custom Software Solutions I highly recommend this excellent team to everyone.",
  },
  {
    id: 2,
    text: "Very Good IT staffing and services with the best support",
  },
  {
    id: 3,
    text: "Wonderful experience for choosing this Kesh Technologies. They helped me to grow my company",
  },
  {
    id: 4,
    text: "I highly appreciate Kesh Tec Inc for this customer satisfaction. ",
  },
  {
    id: 5,
    text: "Kesh Technologies Services was exceptional and for my company Managed services are so helpful to enhance my business. ",
  },
  {
    id: 6,
    text: "Kesh Technologies is a very talented and passionate team that always flourishes the best.6 ",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Go to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white text-center py-10 px-5 mt-[95px]">
      <div className="relative mb-5">
        <div className="text-6xl font-bold text-white">“</div>
        <p className="text-lg mt-2 mx-5 max-w-4xl">
          {testimonials[currentIndex].text}
        </p>
      </div>

      <div className="flex gap-5">
        <button
          className="text-white text-2xl transition-colors duration-300 hover:text-gray-400"
          onClick={handlePrev}
        >
          ←
        </button>
        <button
          className="text-white text-2xl transition-colors duration-300 hover:text-gray-400"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
