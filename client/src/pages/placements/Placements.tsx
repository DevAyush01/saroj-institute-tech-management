import {
  Calendar,
  Building2,
  IndianRupee,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative pt-8 flex justify-center">
        <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={`${student.photo}?height=300&width=300`}
            alt={student.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
          <IndianRupee className="h-3 w-3 mr-1" />
          {student.package}
        </div>
      </div>      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{student.name}</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Building2 className="h-5 w-5 mr-2 text-blue-500 min-w-[20px]" />
            <span className="text-sm md:text-base truncate">{student.company}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-5 w-5 mr-2 text-purple-500 min-w-[20px]" />
            <span className="text-sm md:text-base">{student.role}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-green-500 min-w-[20px]" />
            <span className="text-sm md:text-base">{student.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlacementPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredStudents = filter === "all" 
    ? placementData 
    : placementData.filter(student => student.company.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white px-4"
          >
            Our <span className="text-yellow-300">Success</span> Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 px-4"
          >
            Class of 2025 Placements
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 px-4"
          >
            <button 
              onClick={() => setFilter("all")}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${filter === "all" ? 'bg-white text-blue-600 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("Max Health Care")}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${filter === "Max Health Care" ? 'bg-white text-blue-600 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Max Health
            </button>
            <button 
              onClick={() => setFilter("Eclat Health")}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${filter === "Eclat Health" ? 'bg-white text-blue-600 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Eclat Health
            </button>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </motion.section>
        
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg inline-block max-w-md mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">No placements found</h3>
              <p className="text-gray-500 text-sm md:text-base">
                No students found for the selected company. Try another filter.
              </p>
            </div>
          </div>
        )}

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-6 md:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Start Your Career Journey?</h3>
            <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
              Join Saroj College and become part of our legacy of successful placements
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a
                href="https://seglko.in8.nopaperforms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Apply Now <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default PlacementPage;