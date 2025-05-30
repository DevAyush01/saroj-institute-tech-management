"use client"

import { motion, useInView } from "framer-motion"
import {
  GraduationCap,
  Users,
  Briefcase,
  FlaskConical,
  Rocket,
  Globe,
  BookOpen,
  ShieldCheck,
  Network,
} from "lucide-react"
import { useRef } from "react"
import HeroBg from "../assets/HeroBanner1.jpg"
import { Link } from "react-router-dom"

export default function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { icon: GraduationCap, value: "25+", label: "Years of Experience", color: "text-blue-500" },
    { icon: Briefcase, value: "100%", label: "Placement Assistance", color: "text-emerald-500" },
    { icon: Users, value: "5000+", label: "Expert Faculty", color: "text-purple-500" },
    { icon: Globe, value: "34,000+", label: "Alumni Network", color: "text-orange-500" },
    { icon: FlaskConical, value: "15+", label: "Research Labs", color: "text-indigo-500" },
    { icon: Rocket, value: "30+", label: "Startups Incubated", color: "text-yellow-500" },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Innovative Teaching",
      description: "Project-based learning and flipped classrooms for practical education.",
      color: "bg-blue-500/90",
    },
    {
      icon: ShieldCheck,
      title: "Research Excellence",
      description: "Industry-partnered research projects with government funding.",
      color: "bg-emerald-500/90",
    },
    {
      icon: Network,
      title: "Innovation Hub",
      description: "Startup incubation with mentorship and funding support.",
      color: "bg-orange-500/90",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.7)), url(${HeroBg})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-white font-semibold text-lg mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            WELCOME TO SITM
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Shaping The Future of <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Education
            </span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-lg">
              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                <span className="font-bold text-white">Saroj Institute of Technology and Management (SITM)</span> was 
                established with a vision to provide quality technical education and create industry-ready professionals. 
                Founded under the Saroj Educational Trust, SITM has been a pioneer in engineering and management education.
              </p>

              <p className="text-lg text-gray-100 leading-relaxed">
                Our institute combines academic excellence with practical skills development, ensuring our students are 
                well-prepared to meet modern technological challenges.
              </p>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow-lg transition-all"
            >
              <Link to="/about" className="flex items-center gap-2">
              Learn More About Us
              </Link>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${stat.color} bg-white/10 group-hover:bg-white/20`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-gray-200 text-sm">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Key Strengths</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine academic rigor with practical experience to prepare students for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}