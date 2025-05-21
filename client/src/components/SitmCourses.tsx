import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BtechImg } from "../assets/images";

const SitmCourses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "undergraduate" | "postgraduate" | "diploma"
  >("undergraduate");

  const courseData = {
    undergraduate: [
      {
        title: "B.Tech (Bachelor of Technology)",
        img: BtechImg,
        path: "/courses/btech",
      },
      {
        title: "B.Pharma (Bachelor of Pharmacy)",
        img: BtechImg,
        path: "/courses/bpharma",
      },
    ],
    postgraduate: [
      {
        title: "M.Tech (Master of Technology)",
        img: BtechImg,
        path: "/courses/mtech",
      },
      {
        title: "M.Pharm (Master of Pharmacy)",
        img: BtechImg,
        path: "/courses/mpharm",
      },
      {
        title: "MBA (Master of Business Administration)",
        img: BtechImg,
        path: "/courses/mba",
      },
      {
        title: "MCA (Master of Computer Application)",
        img: BtechImg,
        path: "/courses/mca",
      },
    ],
    diploma: [
      {
        title: "Diploma Programme",
        img: BtechImg,
        path: "/courses/diploma",
      },
    ],
  };


  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-red-700 font-bold text-lg uppercase tracking-wider mb-2">
            Courses Offered @SITM
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center  mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`sm:px-2 md:px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "undergraduate"
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("undergraduate")}
            >
              Undergraduate
            </button>
            <button
              type="button"
              className={`sm:px-2 md:px-6 py-3 text-sm font-medium ${
                activeTab === "postgraduate"
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("postgraduate")}
            >
              Postgraduate
            </button>
            <button
              type="button"
              className={`sm:px-2 md:px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "diploma"
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("diploma")}
            >
              Diploma
            </button>
          </div>
        </div>

        {/* Courses Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData[activeTab].map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <Link
                 to={course.path}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitmCourses;