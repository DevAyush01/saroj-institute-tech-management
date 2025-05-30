import React, { useState } from 'react';

const CoursesOffered: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'undergraduate' | 'postgraduate' | 'diploma'>('undergraduate');

  const courseData = {
    undergraduate: [
      {
        title: 'B.Tech',
        courses: [
          { name: 'Information Technology', duration: '4 Years', seats: 120 },
          { name: 'Computer Science And Engineering', duration: '4 Years', seats: 120 },
          { name: 'Electronics And Communication Engineering', duration: '4 Years', seats: 120 },
          { name: 'Bio Technology', duration: '4 Years', seats: 120 },
          { name: 'Electrical And Electronics Engineering', duration: '4 Years', seats: 120 },
          { name: 'Mechanical Engineering', duration: '4 Years', seats: 120 },
          { name: 'Civil Engineering', duration: '4 Years', seats: 60 },
          { name: 'Bio Medical Engineering', duration: '4 Years', seats: 60 },
        ],
      },
      {
        title: 'B.Pharma',
        courses: [
          { name: 'B.Pharma', duration: '4 Years', seats: 60 },
        ],
      },
    ],
    postgraduate: [
      {
        title: 'MBA',
        courses: [
          { name: 'Masters in Human Resources(HR)', duration: '2 Years', seats: 0 },
          { name: 'Masters in Information Technology', duration: '2 Years', seats: 0 },
          { name: 'Masters in Finance', duration: '2 Years', seats: 0 },
          { name: 'Masters in Marketing', duration: '2 Years', seats: 0 },
          { name: 'Masters in International Business', duration: '2 Years', seats: 0 },
        ],
      },
      {
        title: 'MCA & M.Pharma',
        courses: [
          { name: 'MCA', duration: '3 Years', seats: 60 },
          { name: 'M.Pharma (Pharmaceutical Chemistry)', duration: '2 Years', seats: 18 },
          { name: 'M.Pharma (Pharmacognosy)', duration: '2 Years', seats: 18 },
          { name: 'M.Pharma (Pharmaceutics)', duration: '2 Years', seats: 18 },
          { name: 'M.Pharma (Pharmacology)', duration: '2 Years', seats: 18 },
        ],
      },
      {
        title: 'M.Tech',
        courses: [
          { name: 'M.Tech (Power Electronics)', duration: '2 Years', seats: 18 },
          { name: 'M.Tech (Thermal Engineering)', duration: '3 Years', seats: 18 },
          { name: 'M.Tech (Computer Science)', duration: '2 Years', seats: 18 },
          { name: 'M.Tech (Electronic and Communications)', duration: '2 Years', seats: 18 },
        ],
      },
    ],
    diploma : [
      {
        title: 'Diploma Programmes',
        courses: [
          { name: 'Electronics & Communication', duration: '-', seats: 60 },
          { name: 'Civil Engineering', duration: '-', seats: 60 },
          { name: 'Electrical Engineering', duration: '-', seats: 60 },
          { name: 'Mechanical Engineering', duration: '-', seats: 60 },
        ],
      },
    ]
  };

  return (
    <div className="max-w-7xl py-24 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SITM Courses</h1>
        <p className="text-lg text-gray-600">Explore our wide range of undergraduate and postgraduate programs</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b overflow-x-auto border-gray-200 mb-8">
        <button
          className={`py-4 px-6 font-medium text-sm focus:outline-none ${
            activeTab === 'undergraduate'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('undergraduate')}
        >
          Undergraduate Programs
        </button>
        <button
          className={`py-4 px-6 font-medium text-sm focus:outline-none ${
            activeTab === 'postgraduate'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('postgraduate')}
        >
          Postgraduate Programs
        </button>
        <button
          className={`py-4 px-6 font-medium text-sm focus:outline-none ${
            activeTab === 'diploma'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('diploma')}
        >
          Diploma Programs
        </button>
      </div>

      {/* Course Content */}
      <div className="space-y-12">
        {courseData[activeTab].map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              {category.title}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Seats Available
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category.courses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.seats > 0 ? course.seats : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center bg-gray-50 rounded-lg p-6">
        <p className="text-gray-600 mb-4">For more information, please contact the admissions office.</p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CoursesOffered;