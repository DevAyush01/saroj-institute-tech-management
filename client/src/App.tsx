import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import { Layout } from "./layout/Layout";
import Home from "./components/Home";
import CoursesOffered from "./pages/academics/CoursesOffered";
import ChairmanMessage from "./pages/about/ChairmanMessage";
import VisionMissionPage from "./pages/about/VisionMission";
import DepartmentPage from "./pages/academics/Department";
import CentralLibraryPage from "./pages/academics/CentralLibrary";
import RDPage from "./pages/research/ResearchDevelopment";
import TechnologiesPage from "./pages/research/TechnologiesDeveloped";
import ResearchPublications from "./pages/research/ResearchPublication";
import AwardWinningProjects from "./pages/research/AwardProjects";
import ContactPage from "./pages/contact/ContactUs";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions"
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import PlacementPage from "./pages/placements/Placements";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import EligibilityCriteria from "./pages/admission/eligibility";
import FeeStructure from "./pages/admission/FeeStructure";
import Chatbot from "./components/ChatBot";



export default function App() {
  return (
    <>
    <Chatbot />
    <Routes>
      <Route path="/" element={<Layout />} >

        <Route index element={<Home />} />
        {/* About us  */}
        <Route path="/about" element={<About />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/vision-and-mission" element={<VisionMissionPage />} />
        

        {/* Error Page */}
        <Route path="*" element={ <NotFoundPage /> } />
        

        {/* Academics  */}
        <Route path="/courses-offered" element={<CoursesOffered />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/central-library" element={<CentralLibraryPage />} />

        {/* R & D  */}

        <Route path="/research-development" element={<RDPage />} />
        <Route path="/technologies-developed" element={<TechnologiesPage />} />
        <Route path="/awards-projects" element={<ResearchPublications />} />
        <Route path="/research-publications" element={<AwardWinningProjects />} />

        {/* Contact us  */}
        <Route path="/contact-us" element={<ContactPage />} />

        {/* Legal  */}
        <Route path="/privacy-policy" element={ <PrivacyPolicy /> } />
         <Route path="/terms-and-conditions" element={ <TermsAndConditions /> } />
         

         {/* Admission  */}
         <Route path="/admission-process" element={ <AdmissionProcess/> } />
         <Route path="/eligibility" element={ <EligibilityCriteria /> } />
         <Route path="/fee-structure" element={ <FeeStructure /> } />



         {/* Placements */}
         <Route path="/placements" element={<PlacementPage />} />

         
        



      </Route>
    </Routes>
    </>
  )
}
