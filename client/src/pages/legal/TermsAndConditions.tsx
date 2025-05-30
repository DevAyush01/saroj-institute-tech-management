export default function TermsAndConditions() {
    const termsAndConditions = [
        {
            policyTitle: "Acceptance of Terms",
            subtitle: "By accessing and using the services provided by Saroj Educational Group, you acknowledge and accept these Terms and any future modifications.",
            bulletPoints: [
                "If you do not accept the Terms, you should not use our services."
            ]
        },
        {
            policyTitle: "Services Provided",
            subtitle: "Saroj Educational Group provides a wide range of educational services, including but not limited to:",
            bulletPoints: [
                "Online courses, tutorials, and classes",
                "Educational resources, guides, and materials",
                "Workshops, webinars, and seminars",
                "Personalized tutoring and academic support",
                "We aim to offer high-quality educational services that support students' learning and academic growth."
            ]
        },
        {
            policyTitle: "User Responsibilities",
            subtitle: "As a user of our services, you agree to:",
            bulletPoints: [
                "Provide accurate, truthful, and complete information during registration and course enrollment.",
                "Maintain the confidentiality of your account credentials and not share your login details with others.",
                "Comply with all applicable local, state, and national laws and regulations while using our services.",
                "Use our services for lawful purposes and refrain from any activities that may harm, disrupt, or interfere with the operation of our services.",
                "Respect intellectual property rights and not engage in unauthorized copying or distribution of course materials."
            ]
        },
        {
            policyTitle: "Payment and Refund Policy",
            subtitle: "To access certain courses and services, you must pay the applicable fees. These fees must be paid in full at the time of registration.",
            bulletPoints: [
                "Refund requests must be made according to the specific course’s refund policy. Refunds will be processed based on the terms outlined in the individual course description.",
                "Refunds will be issued only if requested within 7 days of enrollment.",
                "No refunds will be given after accessing course materials.",
                "Refunds for group programs or workshops may be subject to additional conditions outlined at the time of registration."
            ]
        },
        {
            policyTitle: "Intellectual Property",
            subtitle: "All content provided by Saroj Educational Group is protected by copyright and intellectual property laws.",
            bulletPoints: [
                "This includes but is not limited to text, images, videos, course materials, and other media.",
                "These materials are provided for personal, non-commercial use only.",
                "You may not copy, reproduce, distribute, or otherwise use any materials for commercial purposes without explicit permission from Saroj Educational Group."
            ]
        },
        {
            policyTitle: "Privacy Policy",
            subtitle: "We value your privacy and are committed to protecting your personal information.",
            bulletPoints: [
                "Please review our Privacy Policy to understand how we collect, use, and protect your data."
            ]
        },
        {
            policyTitle: "Limitation of Liability",
            subtitle: "Saroj Educational Group will not be held liable for any indirect, incidental, special, or consequential damages arising from your use of our services.",
            bulletPoints: [
                "You agree to assume all risks associated with your use of the platform.",
                "In no event will Saroj Educational Group’s total liability exceed the amount paid by you for the course or service in question."
            ]
        },
        {
            policyTitle: "Modification of Terms",
            subtitle: "Saroj Educational Group reserves the right to modify or update these Terms at any time.",
            bulletPoints: [
                "Changes will be posted on this page and will become effective immediately upon posting.",
                "It is your responsibility to review the Terms regularly."
            ]
        },
        {
            policyTitle: "Governing Law",
            subtitle: "These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which Saroj Educational Group is based.",
            bulletPoints: [
                "Any disputes arising from these Terms will be resolved in the appropriate courts of that jurisdiction."
            ]
        },
        {
            policyTitle: "Contact Information",
            subtitle: "If you have any questions or concerns regarding these Terms and Conditions, please contact us at:",
            bulletPoints: [
                "Email: admission.cell@seglko.org",
                "Phone: 09555699988, 09810054878",
                "Address: L-5, First Floor, Lajpat Nagar - II, Delhi, Delhi, India, 110024"
            ]
        }
    ];

    return (
        <div className="relative py-24 p-4">
            <div className="max-w-3xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div>
                        <h1 className="text-gray-900 font-bold text-4xl">Terms and Conditions</h1>
                        <div className="py-5 text-sm font-regular text-gray-900 flex">
                            <span className="mr-3 flex flex-row items-center">
                                <svg className="text-indigo-600" fill="currentColor" height="13px" width="13px" viewBox="0 0 512 512">
                                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                                        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                                        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                    </path>
                                </svg>
                                <span className="ml-1">21 May 2025</span>
                            </span>
                        </div>
                        <hr />
                        <p className="text-base leading-8 my-5">
                            Welcome to Saroj Educational Group! These Terms and Conditions ("Terms") govern your access to and use of our services. By using our website, enrolling in courses, or accessing any other services offered by Saroj Educational Group, you agree to be bound by these Terms.
                        </p>
                        <p className="text-base leading-8 my-5">
                            If you do not agree with these Terms, please refrain from using our services.
                        </p>

                        {termsAndConditions.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h3 className="text-2xl text-blue-700 font-bold my-5">
                                    #{sectionIndex + 1}. {section.policyTitle}
                                </h3>
                                {section.subtitle && (
                                    <p className="text-base leading-8 my-3">
                                        {section.subtitle}
                                    </p>
                                )}
                                {section.bulletPoints.map((point, bulletIndex) => {
                                    if (point.includes(":")) {
                                        const [bold, ...rest] = point.split(/:(.+)/);
                                        return (
                                            <p key={bulletIndex} className="text-base leading-8 my-5">
                                                <span className="text-blue-900">• </span>
                                                <strong>{bold}:</strong> {rest.join('')}
                                            </p>
                                        );
                                    } else {
                                        return (
                                            <p key={bulletIndex} className="text-base leading-8 my-5">
                                                <span className="text-blue-900">• </span> {point}
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
