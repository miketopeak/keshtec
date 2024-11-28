import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent text-white z-10">
      <div className="max-w-7xl mx-auto px-4 pt-[40px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-[100px]" src={logo} alt="Company Logo" />
          </div>

          {/* Navlinks */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-white text-base leading-[30px] font-semibold"
            >
              Home
            </a>
            <div className="relative">
              <button
                className="text-white text-base leading-[30px] font-semibold"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md z-10">
                  <a
                    href="#custom-software"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Custom Software Solution
                  </a>
                  <a
                    href="#it-staffing"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    IT Staffing & Services
                  </a>
                  <a
                    href="#managed-it"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Managed IT Services
                  </a>
                </div>
              )}
            </div>
            <a href="#about-us" className="text-white text-base leading-[30px] font-semibold">
              About Us
            </a>
            <a href="#jobs" className="text-white text-base leading-[30px] font-semibold">
              Jobs
            </a>
            <a href="#careers" className="text-white text-base leading-[30px] font-semibold">
              Careers
            </a>
            <a href="#contact-us" className="text-white text-base leading-[30px] font-semibold">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => alert("Implement mobile menu")}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
