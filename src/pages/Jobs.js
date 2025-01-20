import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import jobposting from "../images/jobposting.jpg";
import jobcontact from "../images/jobcontact.jpg";

function Jobs() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Tab contents
  const tabContents = {
    1: "Update soon ....",
    2: "Update soon ....",
    3: "Update soon ....",
  };

  return (
    <>
      <section className="relative w-full h-96">
        {/* Background Image */}
        <img
          src={jobposting}
          alt="Job Posting"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
          {/* Title */}
          <h1 className="text-4xl font-bold">Job Posting</h1>

          {/* Breadcrumb */}
          <nav className="text-sm">
            <Link to="/" className="text-white hover:underline">
              <span>Home</span>
            </Link>
            <span className="mx-2 text-gray-300">›</span>
            <span className="text-white">Job Posting</span>
          </nav>
        </div>
      </section>
      <section className="bg-white py-12 my-[100px]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">
          {/* Left Section */}
          <div className="space-y-9">
            <h2 className="text-3xl font-bold">
              Do you have{" "}
              <span className="text-[#45a401] italic">questions?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nor is there anyone who loves or pursues or desires to obtain pain
              of itself, because it is pain, but occasionally circumstances
              occur in which toil and pain can procure him some great pleasure.
              Creation timelines for the digital consulting business theme 2021
              bstandard lorem ipsum passage vary, with some citing the 15th
              century and others the 20th.
            </p>
            <button className="bg-gradient-to-b from-[#9EE213] to-[#45a401] text-white px-6 py-2 rounded">
              Contact us
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {/* Tab Links */}
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded shadow ${
                  activeTab === 1
                    ? "bg-gradient-to-b from-[#9EE213] to-[#45a401] text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Job Posting 1
              </button>
              <button
                className={`px-4 py-2 rounded shadow ${
                  activeTab === 2
                    ? "bg-gradient-to-b from-[#9EE213] to-[#45a401] text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Job Posting 2
              </button>
              <button
                className={`px-4 py-2 rounded shadow ${
                  activeTab === 3
                    ? "bg-gradient-to-b from-[#9EE213] to-[#45a401] text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
                onClick={() => setActiveTab(3)}
              >
                Job Posting 3
              </button>
            </div>

            {/* Tab Content */}
            <div className="border-t pt-4">
              <p className="text-gray-600">{tabContents[activeTab]}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${jobcontact})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            If you need help !{" "}
            <span className="text-[#45a401] italic">contact us</span>
          </h2>
          <p className="text-lg text-[#45a401] mb-8">
            Objectively innovate your empowered manufactured products whereas
            parallel platforms for your ideas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-200">
            {/* Address */}
            <div className="flex items-start gap-2">
              <FaMapLocation className="mt-1 text-[#45a401]" />
              <div>
                <p>Kesh Tec Inc</p>
                <p>1575 Redbud Blvd, Suite # 100,</p>
                <p>McKinney, TX 75069</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="text-[#45a401] mt-1" />
              <div>
                <p>956-366-9666</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-2">
              <BsEnvelope className="text-[#45a401] mt-1" />
              <div>
                <p>hr@keshtec.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;
