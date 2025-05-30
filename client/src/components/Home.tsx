import AboutSITM from "./AboutSection";
import Chatbot from "./ChatBot";
import CompaniesSlider from "./CompanyTieUps";
import MainSection from "./MainSection";
import { PlacementSection } from "./PlacementSection";
import SitmCourses from "./SitmCourses";

export default function Home() {
  return (
    <>
    <MainSection />
    <Chatbot/>
    <AboutSITM/>
    <CompaniesSlider />
    <SitmCourses/>
    <PlacementSection/>

    </>
  )
}
