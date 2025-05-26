import { motion } from "framer-motion"
import { Heart, Award, GraduationCap, BookOpen } from "lucide-react"
import Herobg from "../assets/HeroBanner.jpg";
import HeroImage1 from "../assets/HeroImg1.jpeg";
import HeroImage2 from "../assets/HeroImg2.jpeg";
import HeroImage3 from "../assets/HeroImg3.jpg";

export default function Component() {
  return (
    <div  style={{ backgroundImage: `url(${Herobg})` }} className="min-h-screen lg:py-10  relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20" /> */}
      
      {/* Reduced floating dots on mobile */}
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

      {/* Floating icons - Adjusted for mobile */}
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

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
            >
              WELCOME
              <br />
              TO
              <br />
              <span className="">
                SAROJ INSTITUTE OF
              </span>
              <br />
              TECHNOLOGY AND
              <br />
              MANAGEMENT
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Register Now
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity
                  }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          </div>

          {/* Right side - Responsive floating images section */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Main Image - Modern 3D Card Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute z-20 top-0 left-0 w-[280px] sm:w-[350px] lg:w-[400px]"
            >
              <div className="relative group perspective-1000">
                <motion.div 
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  className="relative h-[200px] sm:h-[250px] lg:h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform-style-preserve-3d transition-all duration-500"
                  style={{
                    transformOrigin: 'center center',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <img 
                    src={HeroImage1} 
                    alt="Campus Building" 
                    className="w-full h-full object-cover absolute inset-0 backface-hidden" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2"
                    >
                      Our Campus
                    </motion.h3>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-white/90 text-xs sm:text-sm"
                    >
                      State-of-the-art facilities for modern education
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Floating badge - Top College */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-30"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white/30 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white mb-1" />
                      <div className="text-center text-white">
                        <div className="text-[10px] sm:text-xs font-bold">TOP</div>
                        <div className="text-sm sm:text-base lg:text-lg font-black">100</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-purple-900 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold whitespace-nowrap">
                      IN INDIA
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Circular Image - Student Life */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute z-10 top-8 sm:top-10 right-4 sm:right-10"
            >
              <div className="relative group">
                <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-300/30 hover:border-purple-300/60 transition-all duration-500">
                  <img
                    src={HeroImage2}
                    alt="Students"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/40 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-white text-center p-2 sm:p-4"
                    >
                      <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-sm sm:text-base lg:text-xl font-bold">Vibrant</h3>
                      <h3 className="text-sm sm:text-base lg:text-xl font-bold">Student Life</h3>
                    </motion.div>
                  </div>
                </div>
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-300/30 animate-spin-slow -z-10" />
              </div>
            </motion.div>

            {/* Tech Lab Image - Geometric Shape */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute z-20 bottom-12 sm:bottom-20 left-4 sm:left-10"
            >
              <div className="relative group">
                <div className="w-48 h-32 sm:w-64 sm:h-40 lg:w-72 lg:h-48 rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-purple-500/40">
                  <img
                    src={HeroImage3}
                    alt="Technology Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 flex items-end p-3 sm:p-4 lg:p-6">
                    <div>
                      <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white">Innovation Hub</h4>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">Cutting-edge technology labs</p>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-0 right-0 z-30"
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-white text-center">
                    <div className="text-2xl sm:text-3xl font-bold">25+</div>
                    <div className="text-xs sm:text-sm opacity-80">Years of Excellence</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-white text-center">
                    <div className="text-2xl sm:text-3xl font-bold">50+</div>
                    <div className="text-xs sm:text-sm opacity-80">Courses Offered</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements - Hidden on mobile */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className=" sm:block absolute top-1/3 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-300 rounded-full" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="hidden sm:block absolute bottom-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300/40 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}