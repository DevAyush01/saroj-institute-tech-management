import AboutSITM from "./AboutSection";
import CompaniesSlider from "./CompanyTieUps";
import MainSection from "./MainSection";
import NoticeSection from "./NoticeSection";
import { PlacementSection } from "./PlacementSection";
import SitmCourses from "./SitmCourses";

export default function Home() {
  return (
    <>
    <MainSection />
    <AboutSITM/>
    <SitmCourses/>
    {/* <NoticeSection/> */}
    <PlacementSection/>
    <CompaniesSlider />

    </>
  )
}
