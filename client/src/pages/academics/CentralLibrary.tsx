import React, { useState } from 'react';

const CentralLibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const journalCategories = [
    {
      title: 'Applied Sciences',
      journals: [
        'Applied Mathematics and Computation',
        'Indian Journal of Applied Mathematics',
        'Indian Journal of Biochemistry and Biophysics',
        'Indian Journal of Biotechnology',
      ],
    },
    {
      title: 'Engineering',
      journals: [
        'Journal of Heat Transfer',
        'Journal of Engineering Gas Turbines',
        'Journal of Industry Application',
        'Indian Foundry Journal',
      ],
    },
    {
      title: 'Computer Science',
      journals: [
        'Journal of Computer Science',
        'Journal of Computer Graphics',
        'Journal of C/C++ User',
        'Journal of Computational Electronics',
      ],
    },
  ];

  const services = [
    {
      title: 'Document Scanning',
      description: 'CIC has one HP Laser Scanner of high resolution for scanning of document by students and faculty members free of cost.',
      icon: '📄',
    },
    {
      title: 'Internet Access',
      description: 'CIC is fully connected with INTERNET at all nodes of the library for accessing e-Journals and educational resources during working hours.',
      icon: '🌐',
    },
    {
      title: 'Photocopy Facility',
      description: 'Xeroxing facility is available at all levels of the CIC. Students can photocopy desired materials.',
      icon: '🖨️',
    },
    {
      title: 'Web OPAC',
      description: 'Available locally within the campus to get information about book availability, status, overdue, and return dates using Library Management Software.',
      icon: '🔍',
    },
  ];

  const staffMembers = [
    { name: 'Ms. Rachana Dwivedi', position: 'Assistant Library' },
    { name: 'Mr. Suryakant Awasthi', position: 'Assistant Librarian' },
    { name: 'Mr. Rupesh Kumar Bind', position: 'Assistant Librarian' },
    { name: 'Mr. Bachaan Prasad Yadav', position: 'Library Assistant' },
    { name: 'Mr. Ram Lakhan Sharma', position: 'Library Xerox Operator' },
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Central Information Center</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The heart of SITM Lucknow's academic excellence, fostering discovery and scholarship
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          {['about', 'resources', 'services', 'hours', 'staff'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">About Our Library</h2>
              <p className="mb-6 text-gray-700">
                The Central Library occupies a place of pride in SITM Lucknow and is an essential component of the institute's outstanding research and education mission. It is the most lively place on campus, providing a safe, comfortable, and friendly environment that enables learning and advancement of knowledge.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h3>
                  <p className="text-gray-700">
                    To facilitate the creation of new knowledge through acquisition, organization, and dissemination of knowledge resources while providing value-added services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Facilities</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>12,000 sq ft area accommodating 250 students</li>
                    <li>Fully air-conditioned with internet/intranet access</li>
                    <li>Wide collection of latest books and journals</li>
                    <li>Access to digital libraries and e-journals</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Library Resources</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Book Collection</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700">Total Titles</h4>
                    <p className="text-3xl font-bold mt-2">4,800+</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700">Reference Books</h4>
                    <p className="text-3xl font-bold mt-2">2,000+</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700">Total Volumes</h4>
                    <p className="text-3xl font-bold mt-2">45,000+</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Journal Collections</h3>
                <div className="space-y-6">
                  {journalCategories.map((category, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full text-left bg-gray-100 hover:bg-gray-200 p-4 font-semibold flex justify-between items-center"
                        onClick={() => toggleService(index)}
                      >
                        <span>{category.title}</span>
                        <span>{expandedService === index ? '−' : '+'}</span>
                      </button>
                      {expandedService === index && (
                        <div className="p-4 bg-white">
                          <ul className="grid md:grid-cols-2 gap-2">
                            {category.journals.map((journal, jIndex) => (
                              <li key={jIndex} className="py-1 text-gray-700">• {journal}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Online Journal Access</h3>
                <div className="flex flex-wrap gap-4">
                  {['IEEE/IEE', 'ICFAI', 'SPRINGER LINK', 'ASME', 'Digital Library'].map((provider, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Library Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-indigo-100 p-4 flex items-center">
                      <span className="text-2xl mr-4">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Circulation Rules</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-indigo-600 text-white">
                          <th className="py-2 px-4 text-left">Category</th>
                          <th className="py-2 px-4 text-left">Books Allowed</th>
                          <th className="py-2 px-4 text-left">Loan Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-2 px-4">Teaching Faculty</td>
                          <td className="py-2 px-4">15</td>
                          <td className="py-2 px-4">One Semester</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Non-Teaching Staff</td>
                          <td className="py-2 px-4">4</td>
                          <td className="py-2 px-4">3 Months</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Students</td>
                          <td className="py-2 px-4">4</td>
                          <td className="py-2 px-4">14 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hours Tab */}
          {activeTab === 'hours' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Library Hours</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Regular Hours</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between py-2 border-b">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Sunday & Holidays</span>
                      <span className="font-medium">10:00 AM - 12:30 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Circulation Hours</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between py-2 border-b">
                      <span>Book Issue</span>
                      <span className="font-medium">1:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Book Return</span>
                      <span className="font-medium">9:00 AM - 12:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Staff Tab */}
          {activeTab === 'staff' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Library Staff</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffMembers.map((staff, index) => (
                  <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 h-32 flex items-center justify-center">
                      <span className="text-5xl">👤</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800">{staff.name}</h3>
                      <p className="text-indigo-600">{staff.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CentralLibraryPage;