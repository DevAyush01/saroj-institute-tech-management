import {
  Calendar,
  Building2,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

// Interface for student placement data
interface Student {
  id: number;
  name: string;
  company: string;
  package: string;
  role: string;
  date: string;
  photo: string;
}

const placementData: Student[] = [
  {
    id: 8,
    name: "Shaloni Devi",
    company: "Max Health Care",
    package: "18 LPA",
    role: "B Pharma",
    date: "22/03/2025",
    photo: '/placed-students/shaloni-devi.webp',
  },
  {
    id: 1,
    name: "Harsh Dixit",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: '/placed-students/harsh-dixit.webp',
  },
  {
    id: 2,
    name: "Mansi Sahu",
    company: "Eclat Health",
    package: "3 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-students/mansi-sahu.webp",
  },
  {
    id: 3,
    name: "Surendra Pratap",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-students/surendra-pratap.webp",
  },
  {
    id: 4,
    name: "Pranjali Singh",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-students/pranjali-singh.webp",
  },
  {
    id: 5,
    name: "Ajay Pratap Yadav",
    company: "Max Health Care",
    package: "3 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-students/ajay-pratap-yadav.webp",
  },
  {
    id: 6,
    name: "Piyush Pandey",
    company: "Max Health Care",
    package: "3 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-students/piyush-pandey.webp",
  },
  {
    id: 7,
    name: "Pratit Srivastava",
    company: "Max Health Care",
    package: "4 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-students/pratit-srivastava.webp",
  },
];



function StudentCard({ student }: { student: Student }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={`${student.photo}?height=200&width=200`}
          alt={student.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {student.package}
        </div>
      </div>      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.company}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.role}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <IndianRupee className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold text-green-600">
              {student.package}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlacementPage() {

  return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r pt-10 from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Students Placed
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Placement Success Stories 2025
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
         

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {placementData.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
            {placementData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No students found for the selected company.
                </p>
              </div>
            )}
          </section>

          <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Career?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join Saroj College of Engineering and Polytechnic and become part of our success
              story
            </p>
            <a
              href="https://seglko.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </a>
          </section>
        </main>
      </div>
  );
}

export default PlacementPage;
