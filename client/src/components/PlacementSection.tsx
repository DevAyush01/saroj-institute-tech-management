import { IndianRupee, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

interface Student {
  id: number;
  name: string;
  company: string;
  package: string;
  role: string;
  date?: string;
  photo: string;
}

// Combined data from both your code snippets
const placedStudents: Student[] = [
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

const StudentCard = ({ student }: { student: Student }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100/50"
  >
    <div className="relative pt-10 flex justify-center">
      <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src={student.photo}
          alt={student.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
        <IndianRupee className="h-3 w-3 mr-1" />
        {student.package}
      </div>
    </div>
    <div className="p-6 text-center flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{student.name}</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-center bg-gray-50 px-4 py-2 rounded-full">
          <Building2 className="h-4 w-4 mr-2 text-blue-500" />
          <span className="font-medium">{student.company}</span>
        </div>
        <div className="flex items-center justify-center bg-gray-50 px-4 py-2 rounded-full">
          <GraduationCap className="h-4 w-4 mr-2 text-purple-500" />
          <span className="font-medium">{student.role}</span>
        </div>
        {student.date && (
          <div className="text-sm text-gray-500 mt-2">
            Placed on: {student.date}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const PlacedStudentsSlider = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Placed</span> Students
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating the achievements of our graduates
          </p>
        </motion.div>

        <div className="relative px-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
          >
            {placedStudents.map((student) => (
              <SwiperSlide key={student.id} className="h-auto pb-10">
                <StudentCard student={student} />
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev !left-0 !text-white !w-12 !h-12 !rounded-full !bg-blue-600/80 hover:!bg-blue-600 !shadow-lg after:!text-sm"></div>
            <div className="swiper-button-next !right-0 !text-white !w-12 !h-12 !rounded-full !bg-blue-600/80 hover:!bg-blue-600 !shadow-lg after:!text-sm"></div>
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/placements"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Success Stories <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </motion.div>
      </div>

      <style >{`
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 1rem;
          font-weight: bold;
        }
        .swiper-button-disabled {
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
};

export default PlacedStudentsSlider;