import { FaGraduationCap, FaUserTie, FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const AboutSITM = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-red-700 font-bold text-lg uppercase tracking-wider mb-2">
            About SITM
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shaping The Future Of Technical Education
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Saroj Institute of Technology and Management (SITM) was established with a vision to 
              provide quality technical education and create industry-ready professionals. Founded under 
              the aegis of the Saroj Educational Trust, SITM has been a pioneer in engineering and 
              management education in the region.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our institute combines academic excellence with practical skills development, ensuring our 
              students are well-prepared to meet the challenges of the modern technological landscape. 
              With state-of-the-art infrastructure and experienced faculty, we nurture innovation and 
              entrepreneurship among our students.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
              Learn About Us
            </button>
          </div>

          {/* Stats Section */}
          <div className="lg:w-1/2 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-red-700 text-4xl mb-4 flex justify-center">
                <FaGraduationCap />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-red-700 text-4xl mb-4 flex justify-center">
                <MdOutlineWork />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Placement Assistance</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-red-700 text-4xl mb-4 flex justify-center">
                <FaUserTie />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Expert Faculty</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-red-700 text-4xl mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Alumni Network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSITM;