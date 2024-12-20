import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import ser1 from "../images/ser1.jpg";
import ser2 from "../images/ser2.jpg";
import ser3 from "../images/ser3.jpg";

const services = [
  {
    id: 1,
    title: "Custom Software Solutions",
    image: ser1,
    icon: TbTargetArrow,
  },
  {
    id: 2,
    title: "IT Staffing & Services",
    image: ser2,
    icon: AiOutlineBarChart,
  },
  {
    id: 3,
    title: "Managed IT Services",
    image: ser3,
    icon: GiMagnifyingGlass,
  },
];

const ServiceDetailSection = () => {
  return (
    <section className="auto-container py-[100px] bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-[20px]">
          SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          We are most renowned for our devoted{" "}
          <span className="text-green-600 italic">services</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Kesh Technologies is a leader in cloud readiness and security. We help
          our clients improve their businesses with a client-centric focus,
          understanding and empathizing with your needs. Take a look at our top
          services.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative rounded-lg h-80 bg-cover bg-center group"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg group-hover:bg-opacity-60 transition-all"></div>

            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <div className="text-5xl mb-4">
                {React.createElement(service.icon)}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailSection;
