import React from 'react';

type Project = {
  researcher?: string;
  title: string;
  description: string;
  position?: string;
};

type ProjectCategory = {
  title: string;
  projects: Project[];
};

const AwardWinningProjects: React.FC = () => {
  const projectCategories: ProjectCategory[] = [
    {
      title: "Prof. (Dr.) S.N. Pandeya, Dean Pharmacy",
      projects: [
        {
          title: "Synthesis and biological activity of fluoroquinolones – as Anti-tubercular Agent",
          description: "Investigating novel fluoroquinolone derivatives for enhanced anti-tubercular activity with reduced resistance development."
        },
        {
          title: "Synthesis of Novel Semicarbazones as Anticonvulsant",
          description: "Designing and synthesizing new semicarbazone derivatives for potential anticonvulsant applications."
        },
        {
          title: "Potential anti-HIV Agent-Manrich",
          description: "Development of novel compounds targeting HIV replication mechanisms."
        },
        {
          title: "Novel Anticancer Agents, Isatindenvanhvers",
          description: "Exploration of isatin derivatives as potential anticancer therapeutics."
        }
      ]
    },
    {
      title: "Dr. D.N. Mishra",
      projects: [
        {
          title: "Community Based Distribution Project",
          description: "Improving healthcare access through community-based distribution systems."
        },
        {
          title: "Upgrade Primary Health Care services in Mohanlal Ganj Block",
          description: "Enhancing primary healthcare infrastructure and services in rural communities."
        },
        {
          title: "Study of NHRM (National Rural Health Mission) Asha in Gosaiganj Block",
          description: "Evaluating the impact of ASHA workers in rural healthcare delivery under NHRM."
        }
      ]
    },
    {
      title: "Dr. Pramod Kr. Pandey, Director (Admin)",
      projects: [
        {
          title: "Task allocation using B2B e-commerce",
          description: "Developing algorithms for efficient task allocation in B2B e-commerce platforms.",
          position: "Under the guidance of Prof. Dr. R.B. Mishra (Dept. of Computer Engg., IT BHU)"
        }
      ]
    },
    {
      title: "Er. D.K. Singh (Assistant Director)",
      projects: [
        {
          title: "Task allocation using B2B e-commerce",
          description: "Optimizing workflow management systems for B2B e-commerce applications.",
          position: "Under the guidance of Prof. Dr. R.B. Mishra (Dept. of Computer Engg., IT BHU)"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Award Winning Projects
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research initiatives recognized for their innovation and impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projectCategories.map((category, catIndex) => (
            <div key={catIndex} className="group">
              {/* Researcher Header */}
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 text-2xl font-bold">
                    {category.title.charAt(0)}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                  <div className="w-16 h-1 bg-blue-300 mt-2"></div>
                </div>
              </div>

              {/* Projects List */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {category.projects.map((project, projIndex) => (
                  <div 
                    key={projIndex} 
                    className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 overflow-hidden"
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 rounded-tr-full"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.position && (
                        <p className="text-sm text-blue-600 font-medium">
                          {project.position}
                        </p>
                      )}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Ongoing Research
                        </span>
                        <span className="ml-auto text-xs text-gray-500">
                          Award Winning
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </div>
  );
};

export default AwardWinningProjects;