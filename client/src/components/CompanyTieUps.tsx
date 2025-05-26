import { MdOutlineArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,FreeMode, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// logo 

import logoIbm from "../assets/images/companies/ibm.jpg"
import logoTcs from "../assets/images/companies/tcs.jpg"
import logoCisco from "../assets/images/companies/cisco.webp"


export default function CompaniesSlider() {
   
    const companies = [
  {
    name: "TCS",
    logo: "https://marvel-b1-cdn.bc0a.com/f00000000004333/www.zuora.com/wp-content/uploads/2024/03/tcs-p-c.png",
    background: logoTcs,
    description:
      "Tata Consultancy Services (TCS) is a global leader in IT services, consulting, and business solutions. With a vast network of innovation and delivery centers, TCS partners with clients to simplify, strengthen, and transform their businesses.",
    programs: [
      "Global Internship Programs",
      "Industry Collaborative Learning Initiatives",
      "TCS Ignite for Fresh Graduates",
    ],
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    background: logoIbm ,
    description:
      "IBM is a multinational technology and consulting company. It offers a wide range of services including cloud computing, AI, blockchain, and quantum computing, with a strong emphasis on research and development.",
    programs: [
      "IBM Skills Academy",
      "AI and Cloud Integration Bootcamps",
      "Collaborative Research Projects",
    ],
  },
  {
    name: "Cisco",
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png",
    background: logoCisco ,
    description:
      "Cisco is a global leader in networking and cybersecurity solutions. It provides hardware, software, and services that enable businesses to securely connect and collaborate across digital platforms.",
    programs: [
      "Cisco Networking Academy",
      "IoT and Cybersecurity Training Programs",
      "Collaborative University Projects",
    ],
  },
];


    return (
        <div className="mt-16 px-4">
           <Swiper
  modules={[Mousewheel, FreeMode, Pagination]}
  freeMode={true}                     // Enables smooth scrolling
  grabCursor={true}                   // Shows hand cursor
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: true,
    sensitivity: 1,
  }}
  spaceBetween={20}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  navigation={false}
  breakpoints={{
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
>



                {companies.map((company, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row shadow-md rounded-md overflow-hidden bg-white h-[450px]">
                            {/* Text Section */}
                            <div className="md:w-1/2 w-full p-6 relative bg-white flex flex-col justify-around h-full">
                                <MdOutlineArrowRight className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-200 text-6xl" />
                                <div className="flex justify-center">
                                    <img src={company.logo} alt={`${company.name} logo`} className="w-36 mb-4" />
                                </div>
                                <p className="text-[10px] text-gray-800 mb-4 leading-relaxed">{company.description}</p>
                                <div>
                                    <p className="text-[10px] font-semibold text-red-500 mb-2">Programs Offered:</p>
                                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                                        {company.programs.map((program, idx) => (
                                            <li key={idx}>
                                                <span className="text-sm">{program}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="md:w-1/2 w-full grayscale hover:grayscale-0 transition duration-300 h-full">
                                <img
                                    src={company.background}
                                    alt={`${company.name} background`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
