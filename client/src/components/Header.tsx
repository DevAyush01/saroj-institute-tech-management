import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineEmojiPeople,
  MdSettingsSuggest,
} from "react-icons/md";

import { BsPersonGear } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { SiRoamresearch } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaPeopleGroup, FaPersonCircleCheck } from "react-icons/fa6";
import { FcDocument, FcProcess } from "react-icons/fc";

type DropdownStates = {
  about: boolean;
  programs: boolean;
  admissions: boolean;
  academics: boolean;
  research: boolean;
};

const navLinks = [
  {
    title: "About SEG",
    to: "/",
    subLinks: [
      { title: "History of SEG", to: "/about/history" },
      { title: "Why Join SEG", to: "/about/whyjoin" },
      { title: "Mission and Vision", to: "/mission-vision" },
      { title: "Chairman's Message", to: "/about/chairman-message" },
    ],
  },
  {
    title: "Programs",
    to: "/",
    subLinks: [
      { title: "M.Tech", to: "/programs/master-of-technology" },
      { title: "B.Tech", to: "/programs/bachelor-of-technology" },
      { title: "MBA", to: "/programs/master-of-business-administration" },
      { title: "BBA", to: "/programs/bachelor-of-business-administration" },
      { title: "MCA", to: "/programs/master-of-computer-application" },
      { title: "BCA", to: "/programs/bachelor-of-computer-application" },
      { title: "M.Pharma", to: "/programs/m-pharma" },
      { title: "B.Pharma", to: "/programs/b-pharma" },
      { title: "Diploma in Pharmacy", to: "/programs/d-pharma" },
      { title: "Diploma Programmes", to: "/programs/polytechnic" },
    ],
  },
  {
    title: "Admission",
    to: "/",
    subLinks: [
      { title: "Admission Process", to: "/admission-process" },
      { title: "Eligibility Criteria", to: "/admission/eligibility" },
      { title: "Fee Structure", to: "/" },
    ],
  },
  {
    title: "Academics",
    to: "/",
    subLinks: [
      { title: "Departments", to: "/academics/departments" },
      { title: "Faculty", to: "/academics/faculty" },
      { title: "Curriculum", to: "/academics/curriculum" },
    ],
  },
  {
    title: "Student Zone",
    to: "/",
    subLinks: [
      { title: "Student Login", to: "/studentzone/login" },
      { title: "Student Notice", to: "/studentzone/student-notices" },
      { title: "Student of the Month", to: "/studentzone/student-of-month" },
      { title: "Our Gold Medalist", to: "/studentzone/gold-medalist" },
    ],
  },
  {
    title: "Research",
    to: "/",
    subLinks: [
      { title: "R & D Projects", to: "/research/research-projects" },
      {
        title: "Technologies Developed",
        to: "/research/technologies-developed",
      },
      { title: "Award Winning Projects", to: "/research/award-projects" },
      {
        title: "Research & Publications",
        to: "/research/research-publications",
      },
    ],
  },
  {
    title: "Anti Ragging",
    to: "/",
    subLinks: [
      { title: "Anti-Ragging Policy", to: "/anti-ragging/policy" },
      { title: "Anti-Ragging Committee", to: "/anti-ragging/committee" },
      { title: "Report Incident", to: "/anti-ragging/report" },
    ],
  },
  {
    title: "Our Institutions",
    to: "/",
    subLinks: [
      {
        title: "Shivdan Singh Institute of Technology and Management",
        to: "/",
      },
      { title: "Saroj Institute of Technology and Management", to: "/" },
      { title: "Saroj College of Law", to: "/" },
      { title: "Saroj College of Pharmacy", to: "/" },
      { title: "Saroj College of Engineering and Polytechnic", to: "/" },
    ],
  },
  {
    title: "Placements",
    to: "/placements",
  },
  {
    title: "Explore More",
    to: "/",
    subLinks: [
      { title: "Life @ SEG", to: "/" },
      { title: "Lecture Halls", to: "/" },
      { title: "Library", to: "/" },
      { title: "Gallery", to: "/" },
      { title: "Computer Labs", to: "/" },
      { title: "Cafeteria", to: "/" },
      { title: "Sports", to: "/" },
      { title: "Campus", to: "/" },
      { title: "Transport", to: "/" },
      { title: "Hostel", to: "/" },
    ],
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
  {
    title: "Fee Payment",
    to: "/fees-payment",
  },
  {
    title: "Career",
    to: "/career",
  },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      bounce: 0.25,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

const mobileMenuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    about: false,
    programs: false,
    admissions: false,
    academics: false,
    research: false,
  });

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    // Close all dropdowns when mobile menu is toggled
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    });
  };

  const toggleDropdown = (dropdown: keyof DropdownStates) => {
    setDropdownStates((prevState) => ({
      ...(Object.fromEntries(
        Object.keys(prevState).map((key) => [key, false])
      ) as DropdownStates),
      [dropdown]: !prevState[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      academics: false,
      research: false,
    });
  };

  return (
    <header className="sticky top-0 bg-white z-50 font-josif font-bold shadow-lg py-2">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex lg:justify-evenly justify-between items-center h-16 gap-2">
          <div className="flex items-center">
            <Link to="/" onClick={closeAllDropdowns}>
              <img
                src={logo} // Update with your actual logo path
                height={70}
                width={70}
                alt="SITM Logo"
                loading="lazy"
                className="h-[70px] w-[70px] object-contain"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex">
            <ul className="flex space-x-0">
              <li className="relative group">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={closeAllDropdowns}
                >
                  Home
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() =>
                  setDropdownStates((prev) => ({ ...prev, about: true }))
                }
                onMouseLeave={() =>
                  setDropdownStates((prev) => ({ ...prev, about: false }))
                }
              >
                <button
                  className="flex items-center px-3 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={() => toggleDropdown("about")}
                >
                  About Us
                  <span className="ml-1">
                    {dropdownStates.about ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {dropdownStates.about && (
                    <motion.div
                      className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-2 space-y-1">
                        <Link
                          to="/about"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <MdOutlineEmojiPeople className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">About SITM</p>
                            <p className="text-xs text-gray-500">
                              Our institution's story
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/chairman-message"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <BsPersonGear className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Chairman Message
                            </p>
                            <p className="text-xs text-gray-500">
                              Words from our leader
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/vision-and-mission"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <MdSettingsSuggest className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Vision & Mission
                            </p>
                            <p className="text-xs text-gray-500">
                              Our guiding principles
                            </p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Admission Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() =>
                  setDropdownStates((prev) => ({ ...prev, admissions: true }))
                }
                onMouseLeave={() =>
                  setDropdownStates((prev) => ({ ...prev, admissions: false }))
                }
              >
                <button
                  className="flex items-center px-3 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={() => toggleDropdown("admissions")}
                >
                  Admission
                  <span className="ml-1">
                    {dropdownStates.admissions ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {dropdownStates.admissions && (
                    <motion.div
                      className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-2 space-y-1">
                        <Link
                          to="/admission-process"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <FcProcess className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Admission Process
                            </p>
                            <p className="text-xs text-gray-500">
                              Step-by-step guide
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/admission/eligibility"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <FaPersonCircleCheck className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Eligibility Criteria
                            </p>
                            <p className="text-xs text-gray-500">
                              Requirements
                            </p>
                          </div>
                        </Link>

                        <a
                          href="/pdfs/SITM-2025-26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <FcDocument className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">Fee Structure</p>
                            <p className="text-xs text-gray-500">
                              Cost breakdown
                            </p>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Academics Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() =>
                  setDropdownStates((prev) => ({ ...prev, academics: true }))
                }
                onMouseLeave={() =>
                  setDropdownStates((prev) => ({ ...prev, academics: false }))
                }
              >
                <button
                  className="flex items-center px-4 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={() => toggleDropdown("academics")}
                >
                  Academics
                  <span className="ml-1">
                    {dropdownStates.academics ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {dropdownStates.academics && (
                    <motion.div
                      className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-2 space-y-1">
                        <Link
                          to="/departments"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <HiOutlineBuildingLibrary className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">Departments</p>
                            <p className="text-xs text-gray-500">
                              Explore our faculties
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/academics/faculty"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <FaPeopleGroup className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">Faculty</p>
                            <p className="text-xs text-gray-500">
                              Meet our professors
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/courses-offered"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <IoBookOutline className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Courses Offered
                            </p>
                            <p className="text-xs text-gray-500">
                              Academic programs
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/central-library"
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                          onClick={closeAllDropdowns}
                        >
                          <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
                            <HiOutlineBuildingLibrary className="w-full h-full" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              Central Library
                            </p>
                            <p className="text-xs text-gray-500">
                              Resources and facilities
                            </p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

           {/* Research Dropdown */}
<li
  className="relative group"
  onMouseEnter={() => setDropdownStates(prev => ({...prev, research: true}))}
  onMouseLeave={() => setDropdownStates(prev => ({...prev, research: false}))}
>
  <button
    className="flex items-center px-3 py-2 text-base hover:text-blue-600 transition-colors"
    onClick={() => toggleDropdown("research")}
  >
    Research
    <span className="ml-1">
      {dropdownStates.research ? (
        <MdKeyboardArrowDown />
      ) : (
        <MdKeyboardArrowUp />
      )}
    </span>
  </button>

  <AnimatePresence>
    {dropdownStates.research && (
      <motion.div
        className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="p-2 space-y-1">
        <Link
            to="/awards-projects"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
            onClick={closeAllDropdowns}
          >
            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
              <FcProcess className="w-full h-full" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Award Winning Projects
              </p>
              <p className="text-xs text-gray-500">
                Recognized innovations
              </p>
            </div>
          </Link>
          
          <Link
            to="research-development"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
            onClick={closeAllDropdowns}
          >
            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
              <SiRoamresearch className="w-full h-full" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                R & D Projects
              </p>
              <p className="text-xs text-gray-500">
                Ongoing research
              </p>
            </div>
          </Link>

          <Link
            to="/technologies-developed"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
            onClick={closeAllDropdowns}
          >
            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
              <GrTechnology className="w-full h-full" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Technologies Developed
              </p>
              <p className="text-xs text-gray-500">
                Innovation showcase
              </p>
            </div>
          </Link>

          

          <Link
            to="/research-publications"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
            onClick={closeAllDropdowns}
          >
            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500">
              <IoBookOutline className="w-full h-full" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Research Publications
              </p>
              <p className="text-xs text-gray-500">
                Academic papers and journals
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</li>

              {/* Simple Links */}
              <li className="relative group">
                <Link
                  to="/career"
                  className="flex items-center px-4 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={closeAllDropdowns}
                >
                  Career
                </Link>
              </li>

              <li className="relative group">
                <Link
                  to="/contact-us"
                  className="flex items-center px-4 py-2 text-base hover:text-blue-600 transition-colors"
                  onClick={closeAllDropdowns}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center border-b pb-4">
                <Link to="/" onClick={toggleMenu}>
                  <img
                    src={logo}
                    height={50}
                    width={50}
                    alt="SEG Logo"
                    className="h-[50px] w-[50px] object-contain"
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <motion.div
                className="flex-1 overflow-y-auto py-4"
                variants={containerVars}
                initial="initial"
                animate="open"
              >
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      {link.subLinks ? (
                        <div className="border-b border-gray-100">
                          <button
                            className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                            onClick={() =>
                              toggleDropdown(
                                link.title
                                  .toLowerCase()
                                  .replace(" ", "") as keyof DropdownStates
                              )
                            }
                          >
                            {link.title}
                            {dropdownStates[
                              link.title
                                .toLowerCase()
                                .replace(" ", "") as keyof DropdownStates
                            ] ? (
                              <MdKeyboardArrowDown />
                            ) : (
                              <MdKeyboardArrowUp />
                            )}
                          </button>
                          <AnimatePresence>
                            {dropdownStates[
                              link.title
                                .toLowerCase()
                                .replace(" ", "") as keyof DropdownStates
                            ] && (
                              <motion.div
                                className="pl-6 space-y-2 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {link.subLinks.map((subLink, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subLink.to}
                                    className="block px-4 py-2 text-base text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                                    onClick={toggleMenu}
                                  >
                                    {subLink.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.to}
                          className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors border-b border-gray-100"
                          onClick={toggleMenu}
                        >
                          {link.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
