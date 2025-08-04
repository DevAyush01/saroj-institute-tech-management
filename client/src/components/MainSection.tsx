import { motion } from "framer-motion";
import { Heart, Award, GraduationCap, BookOpen } from "lucide-react";
import Herobg from "../assets/HeroBanner.jpg";
import HeroImage1 from "../assets/HeroImg1.jpeg";
import HeroImage2 from "../assets/HeroImg2.jpeg";
import HeroImage3 from "../assets/HeroImg3.jpg";
import { Link } from "react-router-dom";

export default function MainSection() {
  return (
    <div
      style={{ backgroundImage: `url(${Herobg})` }}
      className="min-h-screen  lg:py-24 relative overflow-hidden bg-cover bg-center"
    >
      {/* Floating Decorative Orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 hidden sm:block"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating Heart Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 flex flex-col gap-2 sm:gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
        >
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl pt-24  text-gray-700 sm:text-6xl lg:text-6xl xl:text-6xl font-black lg:text-white leading-tight break-words"
            >
                <p className=" text-shadow   " >
              WELCOME TO <span>SAROJ INSTITUTE OF</span> TECHNOLOGY AND MANAGEMENT
              </p>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              
              <Link 
              to="https://seglko.in8.nopaperforms.com/"
              className="bg-gradient-to-r w-fit from-blue-600 via-blue-700 to-indigo-700 hover:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto lg:mx-0">
                Register Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block  "
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="relative w-full h-auto flex flex-col gap-6 items-center lg:items-start">
            {/* Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md relative"
            >
              <div className="group perspective-1000">
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transition-all duration-500"
                >
                  <img
                    src={HeroImage1}
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Our Campus
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm">
                      State-of-the-art facilities for modern education
                    </p>
                  </div>
                </motion.div>

                {/* Award Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-30"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white/30">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-1" />
                      <div className="text-center text-white">
                        <div className="text-[10px] sm:text-xs font-bold">TOP</div>
                        <div className="text-sm sm:text-base font-black">100</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 sm:-bottom-4 text-center left-1/2 w-full transform -translate-x-1/2 bg-white text-purple-900 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold">
                      IN INDIA
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Student Life and Innovation Hub (Side-by-Side) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center lg:justify-start">
              {/* Vibrant Student Life */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-purple-300/30"
              >
                <img src={HeroImage2} alt="Student Life" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/40 flex items-center justify-center">
                  <div className="text-white text-center p-2 sm:p-4">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1" />
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold">Vibrant</h3>
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold">Student Life</h3>
                  </div>
                </div>
              </motion.div>

              {/* Innovation Hub */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative w-64 h-32 lg:w-72 lg:h-36 rounded-2xl overflow-hidden shadow-xl"
              >
                <img src={HeroImage3} alt="Innovation Hub" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 flex items-end p-3 sm:p-4 lg:p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-white" />
                      <h4 className="text-base lg:text-lg font-bold text-white">Innovation Hub</h4>
                    </div>
                    <p className="text-white/90 text-sm">Cutting-edge technology labs</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-2 gap-4 mt-4"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Courses Offered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
