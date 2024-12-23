import { HiMiniCalculator } from "react-icons/hi2";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";

const ServiceGoalSection = () => {
  return (
    <div className="auto-container">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
          <div className="service-box flex flex-col h-full bg-white p-6 shadow-lg rounded-lg relative">
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
              <div className="w-[118px] h-[118px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#45A401] to-[#9EE213]">
                <HiMiniCalculator  className="text-white text-6xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold py-[18px] mt-[70px]">Vision</h1>
            <div className="text-base text-[#1a1e66] flex-grow">
              We create consistently and develop as a significant IT provider to
              become the main performer in giving quality Web and Software
              Development solutions in the global market.
            </div>
            <div className="flex justify-center mt-6">
              <button className="flex items-center justify-center w-[50px] h-[50px] bg-[#45a401] rounded-full text-white text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
          <div className="service-box flex flex-col h-full bg-white p-6 shadow-lg rounded-lg relative">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
              <div className="w-[118px] h-[118px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#45A401] to-[#9EE213]">
                <AiOutlineBarChart  className="text-white text-6xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold py-[18px] mt-[70px]">Mission</h1>
            <div className="text-base text-[#1a1e66] flex-grow">
              We enhance the business development of our clients with innovative
              Design and Development to convey market-defining top high-quality
              services that make esteem for our clients.
            </div>
            <div className="flex justify-center mt-6">
              <button className="flex items-center justify-center w-[50px] h-[50px] bg-[#45a401] rounded-full text-white text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
          <div className="service-box flex flex-col h-full bg-white p-6 shadow-lg rounded-lg relative">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
              <div className="w-[118px] h-[118px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#45A401] to-[#9EE213]">
                <GiBrain  className="text-white text-6xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold py-[18px] mt-[70px]">Philosophy</h1>
            <div className="text-base text-[#1a1e66] flex-grow">
              Our way to deal with business and programming improvement is
              relatively simple and adaptable enough to support any client,
              connect profoundly with clients to understand their necessities,
              give the most ideal turn of events, and remain on top of clients.
            </div>
            <div className="flex justify-center mt-6">
              <button className="flex items-center justify-center w-[50px] h-[50px] bg-[#45a401] rounded-full text-white text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGoalSection;
