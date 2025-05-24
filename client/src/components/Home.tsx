import AboutSITM from "./AboutSection";
import CompaniesSlider from "./CompanyTieUps";
import NoticeSection from "./NoticeSection";
import { PlacementSection } from "./PlacementSection";
import SitmCourses from "./SitmCourses";

export default function Home() {
  return (
    <>
    <AboutSITM/>
    <SitmCourses/>
    {/* <NoticeSection/> */}
    <PlacementSection/>
    <CompaniesSlider />

    </>
  )
}
