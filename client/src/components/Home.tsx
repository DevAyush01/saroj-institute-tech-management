import AboutSITM from "./AboutSection";
import MainSection from "./MainSection";
import { PlacementSection } from "./PlacementSection";
import SitmCourses from "./SitmCourses";

export default function Home() {
  return (
    <>
    <MainSection/>
    <AboutSITM/>
    <SitmCourses/>
    {/* <NoticeSection/> */}
    <PlacementSection/>

    </>
  )
}
