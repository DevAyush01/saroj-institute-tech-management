import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiUsers, FiLayers, FiTool, FiDroplet } from 'react-icons/fi';

type ResearchProject = {
  id: number;
  faculty: string;
  department: string;
  position: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  expanded: boolean;
};

const RDPage: React.FC = () => {
  const [projects, setProjects] = useState<ResearchProject[]>([
    {
      id: 1,
      faculty: "Mr. O.P. Tiwari",
      department: "Mechanical Engineering",
      position: "H.O.D.",
      title: "Automotive Design Innovations",
      description: [
        "R&D aspect Design concept of 3-wheeler Vikram (Scooter's India Ltd. Lucknow)",
        "Design Engineer & Design concept of 3-wheeler GSA Auto Rickshaw in R&D Department"
      ].join(" "),
      icon: <FiTool className="text-blue-500" size={24} />,
      expanded: false
    },
    {
      id: 2,
      faculty: "Mr. Dhirendra Thakurai",
      department: "Mechanical Engineering",
      position: "Faculty",
      title: "Energy Efficient Systems",
      description: "Assistant Project Engineer - Energy Efficient Design of a Milk Processing Plant",
      icon: <FiDroplet className="text-green-500" size={24} />,
      expanded: false
    },
    {
      id: 3,
      faculty: "Prof. (Dr.) D. N. Mishra",
      department: "Management",
      position: "Director MBA",
      title: "Community Development",
      description: "Lucknow community based distribution - The main objective of this project is to distribute certain items through the community in Gosainganj block at a particular and other blocks of the Lucknow District.",
      icon: <FiUsers className="text-purple-500" size={24} />,
      expanded: false
    },
    {
      id: 4,
      faculty: "Pharmacy Department",
      department: "Pharmaceutical Sciences",
      position: "",
      title: "DST FIST Program",
      description: "DST FIST Program 2013 - Funded research initiative to strengthen infrastructure for advanced research in pharmaceutical sciences",
      icon: <FiLayers className="text-orange-500" size={24} />,
      expanded: false
    }
  ]);

  const toggleExpand = (id: number) => {
    setProjects(projects.map(project => 
      project.id === id 
        ? { ...project, expanded: !project.expanded } 
        : project
    ));
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Driving innovation through cutting-edge research across engineering, management, and pharmaceutical sciences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600">Ongoing Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600">4</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600">10+</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600">1</div>
            <div className="text-gray-600">DST Funded Program</div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">Featured Research Projects</h2>
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleExpand(project.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600 gap-2">
                      <span className="font-medium">{project.faculty}</span>
                      {project.position && <span>• {project.position}</span>}
                      <span>• {project.department}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-500">
                  {project.expanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
              </div>

              {project.expanded && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <p className="text-gray-700">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.id === 4 && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">DST Funded</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DST FIST Highlight */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">DST FIST Program 2013</h3>
              <p className="text-gray-700 mb-4">
                Our Pharmacy Department has been recognized under the DST-FIST program, receiving funding to enhance research infrastructure and promote interdisciplinary research in pharmaceutical sciences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Government Funded</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Equipment Grant</span>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500">DST</div>
                  <div className="text-sm text-gray-600 mt-2">FIST Program</div>
                  <div className="text-xs text-gray-500 mt-1">2013 Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Research Collaboration?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We welcome partnerships with industry and academic institutions for innovative research projects.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default RDPage;