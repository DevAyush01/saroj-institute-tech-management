
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { logo } from "../assets/images"

// Icons
import { MdKeyboardArrowDown, MdOutlineEmojiPeople, MdSettingsSuggest } from "react-icons/md"
import { BsPersonGear } from "react-icons/bs"
import { HiOutlineBuildingLibrary } from "react-icons/hi2"
import { IoBookOutline } from "react-icons/io5"
import { SiRoamresearch } from "react-icons/si"
import { GrTechnology } from "react-icons/gr"
import { FaPersonCircleCheck } from "react-icons/fa6"
import { FcDocument, FcProcess } from "react-icons/fc"
import { FiMenu, FiX } from "react-icons/fi"
import TopInfoBar from "./TopInfoBar"



// Types
type DropdownStates = {
  about: boolean
  programs: boolean
  admissions: boolean
  academics: boolean
  research: boolean
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    about: false,
    programs: false,
    admissions: false,
    academics: false,
    research: false,
  })
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const location = useLocation()
  const { scrollY } = useScroll()

  // Header scroll effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10)
  })

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    })
  }, [location.pathname])

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    })
  }

  const toggleDropdown = (dropdown: keyof DropdownStates) => {
    setDropdownStates((prevState) => ({
      ...(Object.fromEntries(Object.keys(prevState).map((key) => [key, false])) as DropdownStates),
      [dropdown]: !prevState[dropdown],
    }))
  }

  const closeAllDropdowns = () => {
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    })
    setHoveredItem(null)
  }

  const handleMouseEnter = (dropdown: keyof DropdownStates) => {
    setHoveredItem(dropdown)
    setDropdownStates((prevState) => ({
      ...(Object.fromEntries(Object.keys(prevState).map((key) => [key, false])) as DropdownStates),
      [dropdown]: true,
    }))
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    })
  }

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.15 },
    },
  }

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, x: -20 },
  }

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  const navItems = [
    {
      title: "Home",
      to: "/",
      simple: true,
    },
    {
      title: "About Us",
      key: "about",
      to: "/about",
      subLinks: [
        {
          title: "About SITM",
          to: "/about",
          icon: <MdOutlineEmojiPeople className="text-blue-500" />,
          desc: "Our institution's story",
        },
        {
          title: "Chairman Message",
          to: "/chairman-message",
          icon: <BsPersonGear className="text-blue-500" />,
          desc: "Words from our leader",
        },
        {
          title: "Vision & Mission",
          to: "/vision-and-mission",
          icon: <MdSettingsSuggest className="text-blue-500" />,
          desc: "Our guiding principles",
        },
      ],
    },
    {
      title: "Admission",
      key: "admissions",
      to: "/admission",
      subLinks: [
        {
          title: "Admission Process",
          to: "/admission-process",
          icon: <FcProcess />,
          desc: "Step-by-step guide",
        },
        {
          title: "Eligibility Criteria",
          to: "/eligibility",
          icon: <FaPersonCircleCheck className="text-blue-500" />,
          desc: "Requirements",
        },
        {
          title: "Fee Structure",
          to: '/fee-structure',
          icon: <FcDocument />,
          desc: "Cost breakdown",
        },
      ],
    },
    {
      title: "Academics",
      key: "academics",
      to: "/academics",
      subLinks: [
        {
          title: "Departments",
          to: "/departments",
          icon: <HiOutlineBuildingLibrary className="text-blue-500" />,
          desc: "Explore our faculties",
        },
        {
          title: "Courses Offered",
          to: "/courses-offered",
          icon: <IoBookOutline className="text-blue-500" />,
          desc: "Academic programs",
        },
        {
          title: "Central Library",
          to: "/central-library",
          icon: <HiOutlineBuildingLibrary className="text-blue-500" />,
          desc: "Resources and facilities",
        },
      ],
    },
    {
      title: "Research",
      key: "research",
      to: "/research",
      subLinks: [
        {
          title: "Award Winning Projects",
          to: "/awards-projects",
          icon: <FcProcess />,
          desc: "Recognized innovations",
        },
        {
          title: "R & D Projects",
          to: "/research-development",
          icon: <SiRoamresearch className="text-blue-500" />,
          desc: "Ongoing research",
        },
        {
          title: "Technologies Developed",
          to: "/technologies-developed",
          icon: <GrTechnology className="text-blue-500" />,
          desc: "Innovation showcase",
        },
      ],
    },
    {
      title: "Placements",
      to: "/placements",
      simple: true,
    },
    {
      title: "Contact",
      to: "/contact-us",
      simple: true,
    },
  ]

  return (
    <header
      className={`fixed w-full  z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-xl border-b border-gray-100 py-1"
          : "bg-white backdrop-blur-sm py-2"
      }`}
    >
       <TopInfoBar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div  whileTap={{ scale: 0.95 }} className="flex items-center">
            <Link to="/" onClick={closeAllDropdowns}>
              <motion.img
                src={logo}
                height={60}
                width={60}
                alt="SITM Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.simple ? (
                  <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Link
                      to={item.to}
                      className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 relative group ${
                        location.pathname === item.to
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                    >
                      {item.title}
                      {location.pathname === item.to && (
                        <motion.span
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                          layoutId="activeNavDot"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ) : (
                  <div
                    onMouseEnter={() => handleMouseEnter(item.key as keyof DropdownStates)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <button
                        className={`flex items-center px-4 py-2 font-medium rounded-xl transition-all duration-300 ${
                          hoveredItem === item.key || dropdownStates[item.key as keyof DropdownStates]
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                      >
                        {item.title}
                        <motion.span
                          animate={{
                            rotate: dropdownStates[item.key as keyof DropdownStates] ? 180 : 0,
                            scale: hoveredItem === item.key ? 1.1 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="ml-1"
                        >
                          <MdKeyboardArrowDown />
                        </motion.span>
                      </button>
                    </motion.div>

                    <AnimatePresence>
                      {dropdownStates[item.key as keyof DropdownStates] && (
                        <motion.div
                          className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="p-3 space-y-1">
                            {item.subLinks?.map((subItem, subIndex) => (
                              <motion.div key={subIndex} variants={dropdownItemVariants}>
                                <Link
                                  to={subItem.to}
                                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-300 group"
                                  onClick={closeAllDropdowns}
                                >
                                  <motion.div
                                    className="flex-shrink-0 w-6 h-6"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  >
                                    {subItem.icon}
                                  </motion.div>
                                  <div className="ml-3">
                                    <p className="text-sm font-semibold group-hover:text-blue-600 transition-colors">
                                      {subItem.title}
                                    </p>
                                    <p className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                                      {subItem.desc}
                                    </p>
                                  </div>
                                  <motion.div
                                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                  >
                                    <svg
                                      className="w-4 h-4 text-blue-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </motion.div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}

          

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="ml-2">
              <Link
                to="https://seglko.in8.nopaperforms.com/"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Apply Now</span>
               
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-4">
          

            <motion.button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-blue-600 rounded-full focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-18 left-0 h-[100vh] right-0 bottom-0 bg-white backdrop-blur-md z-30 xl:hidden overflow-y-auto pb-10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.simple ? (
                    <Link
                      to={item.to}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.key as keyof DropdownStates)}
                        className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                      >
                        {item.title}
                        <motion.span
                          animate={{ rotate: dropdownStates[item.key as keyof DropdownStates] ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <MdKeyboardArrowDown />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {dropdownStates[item.key as keyof DropdownStates] && (
                          <motion.div
                            className="pl-6 space-y-2 mt-1 mb-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.subLinks?.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subItem.to}
                                  className="flex items-center px-4 py-2 text-base text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                                  onClick={toggleMenu}
                                >
                                  <div className="flex-shrink-0 w-5 h-5 mr-3">{subItem.icon}</div>
                                  <div>
                                    <p className="font-medium">{subItem.title}</p>
                                    <p className="text-xs text-gray-500">{subItem.desc}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}

              <motion.div
                className="pt-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  to="/apply-now"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
