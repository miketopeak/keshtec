import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logowithtagline from "../images/logowithtagline.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A1D54] text-white py-10">
      <div className="container mx-auto px-5 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logowithtagline}
            alt="Kesh Tec Inc"
            className="w-[280px] h-[280px] object-contain mb-4"
          />
          <p className="text-lg font-semibold">KESH TEC INC</p>
          <p className="text-sm italic mb-4">
            WHERE TALENT AND OPPORTUNITY MEETS
          </p>
          <p className="text-sm leading-relaxed">
            Kesh Technologies enables you to achieve your business goals by
            scaling up operations, reducing risk, and getting a consistent level
            of success.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">OUR SERVICES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Custom Software Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                IT Staffing & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Managed IT Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT INFO</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">📞 956-366-9666</li>
            <li className="flex items-center gap-2">📧 hr@keshtec.com</li>
            <li className="flex items-center gap-2">
              🏠 Kesh Tec Inc, 1575 Redbud Blvd, Suite #100, McKinney, TX 75069
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center">
        <p className="text-sm">
          Copyright ©2022 Kesh Tec Inc. All rights reserved.
        </p>
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
