import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/", key: "home" },
    { name: "Services", href: "/services", key: "services", isDropdown: true },
    { name: "About Us", href: "/about-us", key: "about-us" },
    { name: "Jobs", href: "/jobs", key: "jobs" },
    { name: "Careers", href: "/careers", key: "careers" },
    { name: "Contact Us", href: "/contact-us", key: "contact-us" },
  ];

  const dropdownLinks = [
    { name: "Custom Software Solution", href: "#custom-software" },
    { name: "IT Staffing & Services", href: "#it-staffing" },
    { name: "Managed IT Services", href: "#managed-it" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
            {navLinks.map((link) => (
              <div key={link.key} className="relative group">
                {link.isDropdown ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={handleDropdownToggle}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={`text-[16px] leading-[30px] font-semibold ${
                        activeLink === link.key ? "text-white" : "text-white"
                      } hover:text-blue-300`}
                    >
                      {link.name}
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-10 left-0 bg-white text-gray-500 shadow-md z-10 w-[230px] border-4 border-[#45a401]"
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        {dropdownLinks.map((dropdownLink) => (
                          <a
                            key={dropdownLink.name}
                            href={dropdownLink.href}
                            className="block px-4 py-2 text-[16px] leading-[30px] hover:bg-[#45a401] hover:text-white"
                            onClick={() => {
                              setActiveLink("services");
                              setDropdownOpen(false);
                            }}
                          >
                            {dropdownLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.key)}
                    className={`text-[16px] leading-[30px] font-semibold ${
                      activeLink === link.key ? "text-white" : "text-white"
                    } hover:text-blue-300`}
                  >
                    {link.name}
                  </a>
                )}
                {/* Line */}
                <div
                  className={`absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[20px] h-[4px] ${
                    activeLink === link.key
                      ? "bg-[#2280ff] opacity-100"
                      : "bg-[#2280ff] opacity-0"
                  } group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
