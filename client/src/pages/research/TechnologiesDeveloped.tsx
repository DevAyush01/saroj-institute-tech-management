import React, { useState } from 'react';

type Technology = {
  id: number;
  title: string;
  description: string;
  faculty: string;
  department: string;
  status: 'transferred' | 'ready';
};

const TechnologiesPage: React.FC = () => {
  const technologies : Technology[] = [
    {
      id: 1,
      title: "Generation of Concave Surfaces with GUI",
      description: "Innovative mathematical modeling technique for creating complex concave surfaces with user-friendly graphical interface",
      faculty: "Dr. Sunil Singh",
      department: "Mathematics",
      status: 'transferred'
    },
    {
      id: 2,
      title: "Graphs Theoretic Algorithms for Equations",
      description: "Advanced algorithmic solutions using graph theory for solving complex mathematical equations",
      faculty: "Dr. Sunil Singh",
      department: "Mathematics",
      status: 'ready'
    },
    {
      id: 3,
      title: "Energy Efficient Design of a Milk Processing Plant",
      description: "Sustainable engineering solution reducing energy consumption in dairy processing facilities by up to 30%",
      faculty: "Dr. Dhirendra Thakurai",
      department: "Mechanical Engineering",
      status: 'transferred'
    },
    {
      id: 4,
      title: "R&D Aspect Design Concept of 3-Wheeler Vikram",
      description: "Innovative automotive design concept for three-wheelers developed in collaboration with Scooter's India Ltd.",
      faculty: "Dr. O. P. Tiwari",
      department: "Mechanical Engineering",
      status: 'transferred'
    },
    {
      id: 5,
      title: "Fubeceh Agent Anti Technology",
      description: "Pharmaceutical breakthrough in anti-microbial technology with broad-spectrum applications",
      faculty: "Dr. S.N Pandyaa",
      department: "Pharmacy",
      status: 'ready'
    },
    {
      id: 6,
      title: "Potential Anti-HIV Agent-Man Rich",
      description: "Promising pharmacological compound showing significant potential in HIV treatment research",
      faculty: "Prof. (Dr.S.N. Pandyaa)",
      department: "Pharmacy",
      status: 'ready'
    },
    {
      id: 7,
      title: "Laser Displacement Transducer",
      description: "High-precision measurement device for accurate displacement measurements in industrial applications",
      faculty: "M. U. Khan",
      department: "Electrical Engineering",
      status: 'transferred'
    }
  ];

  const [filter, setFilter] = useState<'all' | 'transferred' | 'ready'>('all');

  const filteredTech = technologies.filter(tech =>
    filter === 'all' || tech.status === filter
  );

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technologies Developed</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Cutting-edge innovations bridging academia and industry
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <p className="text-lg text-gray-700">
            Saroj Institute of Technology & Management places special emphasis on Research and Development (R&D)
            to emerge as a global leader in advanced technology as well as to reach out to the national and
            social needs of the country.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All Technologies
          </button>
          <button
            onClick={() => setFilter('transferred')}
            className={`px-4 py-2 rounded-full ${filter === 'transferred' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          >
            Transferred
          </button>
          <button
            onClick={() => setFilter('ready')}
            className={`px-4 py-2 rounded-full ${filter === 'ready' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            Ready for Transfer
          </button>
        </div>

        {/* Technologies Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-xl shadow-sm">
            <thead className="bg-gray-100 text-gray-700 text-left text-sm md:text-base">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Faculty</th>
                <th className="py-3 px-6">Department</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm md:text-base">
              {filteredTech.map((tech, index) => (
                <tr key={tech.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6 font-semibold">{tech.title}</td>
                  <td className="py-3 px-6">{tech.faculty}</td>
                  <td className="py-3 px-6">{tech.department}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tech.status === 'transferred' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tech.status === 'transferred' ? 'Transferred' : 'Ready for Transfer'}
                    </span>
                  </td>
                  <td className="py-3 px-6 max-w-xs">{tech.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Our Technologies?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We welcome industry partners for technology transfer and collaborative development.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Technology Transfer Office
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
