import { Link } from "react-router-dom";
import { FaChartLine, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import about from "../images/about.jpg";

function Jobs() {

  return (
    <>
      <section className="relative w-full h-96">
        {/* Background Image */}
        <img
          src={about}
          alt="Job Posting"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
          {/* Title */}
          <h1 className="text-4xl font-bold">About Us</h1>

          {/* Breadcrumb */}
          <nav className="text-sm">
            <Link to="/" className="text-white hover:underline">
              <span>Home</span>
            </Link>
            <span className="mx-2 text-gray-300">›</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>
      <section className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <FaChartLine className="text-white text-2xl" />
          </div>
          <p className="text-center text-gray-700">
            We consist a core of advisors reliably ready to convey our basic beliefs and capacities,
            supplemented, when expected, by expert skill from our proficient services.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <FaChalkboardTeacher className="text-white text-2xl" />
          </div>
          <p className="text-center text-gray-700">
            Cost-effective services to clients - All our staff is driven by this client-centered custom. We are trusted to ensure our IT Solutions and Services are custom fitted to every client's particular circumstance and infrastructure, ensuring every undertaking is done on schedule, to budget, and with detailed specifications.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <p className="text-center text-gray-700">
            We perceive the worth of authentic experience, holding and continually building on profound involvement in the areas where we operate.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Jobs;
