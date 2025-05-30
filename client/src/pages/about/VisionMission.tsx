import React from 'react';

const VisionMissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 " >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Vision & Mission
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
            Guiding Principles of Saroj Institute of Technology and Management
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-indigo-700 md:w-1/3 flex items-center justify-center p-8">
                <div className="text-center">
                  <svg className="h-20 w-20 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h2 className="mt-4 text-3xl font-bold text-white">Our Vision</h2>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="prose-lg text-gray-700">
                  <p className="text-xl font-semibold text-indigo-700 mb-4">
                    To be recognized as a premier institute of technology and management that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provides world-class technical education with strong ethical values</li>
                    <li>Fosters innovation, research, and entrepreneurial spirit</li>
                    <li>Develops industry-ready professionals with global competence</li>
                    <li>Contributes to societal development through technology and knowledge</li>
                    <li>Creates an ecosystem for lifelong learning and skill enhancement</li>
                  </ul>
                  <p className="mt-6 italic text-gray-600">
                    "To illuminate minds and empower futures through excellence in technical education."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:flex-shrink-0 bg-indigo-600 md:w-1/3 flex items-center justify-center p-8">
                <div className="text-center">
                  <svg className="h-20 w-20 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h2 className="mt-4 text-3xl font-bold text-white">Our Mission</h2>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="prose-lg text-gray-700">
                  <p className="text-xl font-semibold text-indigo-700 mb-4">
                    Saroj Institute of Technology and Management is committed to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Delivering quality education through innovative teaching methodologies and industry-relevant curriculum</li>
                    <li>Developing competent professionals with technical expertise, leadership skills, and social responsibility</li>
                    <li>Promoting research culture and technology incubation for solving real-world problems</li>
                    <li>Establishing strong industry-academia collaboration for enhanced employability</li>
                    <li>Creating an inclusive learning environment that nurtures creativity and critical thinking</li>
                    <li>Instilling ethical values and sustainable practices in all academic pursuits</li>
                  </ul>
                  <p className="mt-6 italic text-gray-600">
                    "To transform students into technologically proficient, socially responsible, and globally competitive professionals."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-20">
          <div className="bg-indigo-800 p-8 text-center">
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Excellence",
                  description: "Commitment to highest standards in education, research, and innovation"
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Integrity",
                  description: "Upholding ethical standards and transparency in all our actions"
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Innovation",
                  description: "Fostering creativity and embracing new ideas for continuous improvement"
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Global Perspective",
                  description: "Preparing students to thrive in an interconnected world"
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-700 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Join Us in Our Journey</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-indigo-100 mx-auto">
                Become part of an institution that shapes the future of technical education
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/courses-offered"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                  >
                    Explore Admissions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;