import { useState } from 'react';

interface PlacementRecord {
  id: number;
  company: string;
  logo: string;
  date: string;
  studentsPlaced: number;
  highestPackage: string;
  averagePackage: string;
  description: string;
  isFeatured?: boolean;
}

interface PlacementStat {
  title: string;
  value: string;
  icon: string;
}

export const PlacementSection = () => {
  const [selectedPlacement, setSelectedPlacement] = useState<PlacementRecord | null>(null);

  const placementStats: PlacementStat[] = [
    { title: "Placement Rate", value: "92%", icon: "📈" },
    { title: "Highest Package", value: "₹42 LPA", icon: "💰" },
    { title: "Companies Visited", value: "85+", icon: "🏢" },
    { title: "Students Placed", value: "650+", icon: "🎓" },
  ];



  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Institute Info */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-sky-600">
          <h1 className="text-3xl font-bold text-center text-sky-600 mb-4">
            SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT (SITM), LUCKNOW
          </h1>
          <p className="text-center text-gray-600 mb-2">
            Ahimamau, Arjunganj, Sultanpur Road, Lucknow, Uttar Pradesh, India, 226001
          </p>
          <p className="text-center text-gray-600">
            <span className=' font-bold ' >Phone no:</span> 0522-3116178, 9555699988 |  <span className=' font-bold ' >E-mail:</span> admission.cell@seglko.org
          </p>
        </div>

        {/* Placement Section Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-600">Placement Records</h2>
          
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {placementStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className="text-2xl font-bold text-sky-600">{stat.value}</p>
            </div>
          ))}
        </div>

       

        

        {/* Upcoming Drives Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-600 mb-6">Upcoming Placement Drives</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png" alt="Google" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Accenture</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CGPA ≥ 8.0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Software Engineer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                     <button disabled className="text-gray-400">Register <span>(Sarting Soon)</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 object-contain" src="https://discover.give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png" alt="Adobe" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">TCS</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CGPA ≥ 7.5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Product Developer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                     <button disabled className="text-gray-400">Register <span>(Sarting Soon)</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Placement Detail Modal */}
        {selectedPlacement && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-600">{selectedPlacement.company}</h2>
                    <p className="text-gray-500">{selectedPlacement.date}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedPlacement(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row mb-6">
                  <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                    <img 
                      src={selectedPlacement.logo} 
                      alt={selectedPlacement.company} 
                      className="h-32 object-contain"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-sky-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Students Placed</p>
                        <p className="text-xl font-bold">{selectedPlacement.studentsPlaced}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Highest Package</p>
                        <p className="text-xl font-bold text-green-600">{selectedPlacement.highestPackage}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Average Package</p>
                        <p className="text-xl font-bold">{selectedPlacement.averagePackage}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none mb-6">
                  <h3 className="text-lg font-bold mb-2">Placement Details</h3>
                  <p className="text-gray-700">{selectedPlacement.description}</p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="font-bold text-yellow-600 mb-2">Student Testimonials</h3>
                  <p className="text-gray-700 italic">"The placement process was very well organized. The training sessions conducted by the placement cell helped me prepare thoroughly for the interviews."</p>
                  <p className="text-sm text-gray-500 mt-2">- Rahul Sharma, Placed at {selectedPlacement.company}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};