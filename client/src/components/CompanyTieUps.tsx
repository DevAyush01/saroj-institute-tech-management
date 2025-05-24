import { MdOutlineArrowRight } from "react-icons/md";

export default function CompanyTieUps() {


    const companies = [
        {
            name: "RabbitAI",
            logo: "https://via.placeholder.com/120x40?text=RabbitAI", // Replace with actual logo if needed
            background: "https://static.ambitionbox.com/api/v2/photo/bTBLMjFleW44ZHNuZ2I4aFlqUUQ1UT09", // Add the correct image path
            description:
                "Founded in 2020 and originating from the Heidelberg Collaboratory for Image Processing, RabbitAI specialises in high-quality training data solutions, creating ultra-realistic 3D models and image cases for enhanced AI training.",
            programs: [
                "Center of Excellence (CoE) in Artificial Intelligence",
                "AI Centers of Excellence (CoEs) in Healthcare, Agriculture, Defense, Digital Marketing",
            ],
        },
        {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
            background: "https://static.ambitionbox.com/api/v2/photo/bTBLMjFleW44ZHNuZ2I4aFlqUUQ1UT09",
            description:
                "A multinational conglomerate and a major player in the tech industry, Microsoft is a pioneer in personal computing, offering hardware, software, and cloud computing services.",
            programs: [
                "B.Tech. CSE (AI & ML)",
                "Assured Internship and Placement",
                "Free Microsoft Certifications",
            ],
        },
        {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            background: "https://static.ambitionbox.com/api/v2/photo/bTBLMjFleW44ZHNuZ2I4aFlqUUQ1UT09",
            description:
                "Google, a global leader in internet search, has transformed the way we access information while also shaping the future of digital advertising, cloud computing, artificial intelligence, and mobile technology.",
            programs: [
                "B.Tech Computer Science & Engineering—Cloud Computing",
                "B.Tech Computer Science & Engineering—Data Science",
                "Google Cloud Certification Programs",
                "Exclusive Google Cloud Hackathon",
            ],
        },
    ];

    return (
        <div className="bg-red-500 h-[450px] mt-20">
            {/* Single Company */}
            <div className="flex h-full   ">
                {/* Text / Logo */}
                <div className="w-2/12 flex flex-col items-start p-5 pt-20 justify-center bg-gray-100 ">
                    <img className="w-8/12 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" />
                    <p className=" text-sm " >
                        TCS is here to make a difference through technology. Leading the way in innovation for over 55 years, we build greater futures for businesses across multiple
                    </p>

                    <p className=" mt-5 text-sm text-red-500 " >
                        Programs Offered
                    </p>

                    <p className=" mt-5 text font-bold text-gray-900 " >
                        B.Tech Computer Science 
                    </p>



                </div>


                {/* Image */}
                <div className="w-2/12 h-full items-center bg-pink-500 overflow-hidden">
                <MdOutlineArrowRight />
                    <img
                        className="h-full w-full object-cover"
                        src="https://static.ambitionbox.com/api/v2/photo/bTBLMjFleW44ZHNuZ2I4aFlqUUQ1UT09"
                        alt="Background"
                    />
                </div>
            </div>
        </div>
    );
}
