import AboutSITM from "./AboutSection";
import Chatbot from "./ChatBot";
import CompaniesSlider from "./CompanyTieUps";
import FloatingAdmissionBanner from "./FloatingTimer";

import InstagramFeed from "./InstagramFeed";
import MainSection from "./MainSection";
import PlacementSection from "./PlacementSection";
import SitmCourses from "./SitmCourses";
import TopInfoBar from "./TopInfoBar";

export default function Home() {
  return (
    <>

    <FloatingAdmissionBanner />
    <MainSection />
    <Chatbot/>
    <AboutSITM/>
    <CompaniesSlider />
    <SitmCourses/>
    <PlacementSection/>
    <InstagramFeed />

    </>
  )
}
