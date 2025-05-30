

export default function PrivacyPolicy() {

    const policies = [
        {
            policyTitle: "Information We Collect",
            subtitle: "We collect two types of information:",
            bulletPoints: [
                "Personal Information: This includes data such as your name, email address, phone number, and billing details that you provide when registering for courses or other services.",
                "Non-Personal Information: This includes data such as IP address, browser type, device information, and usage statistics collected through cookies and analytics tools."
            ]
        },
        {
            policyTitle: "How We Use Your Information",
            subtitle: "We use the information we collect for the following purposes:",
            bulletPoints: [
                "To process your course enrollment and provide you with access to our educational services.",
                "To communicate with you regarding your account, services, updates, or promotional offers (with your consent).",
                "To improve our website, courses, and services based on user feedback and usage patterns.",
                "To comply with legal obligations and enforce our Terms and Conditions."
            ]
        },
        {
            policyTitle: "How We Protect Your Information",
            subtitle: "We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
            bulletPoints: [
                "These measures include encryption, secure servers, and regular security audits.",
                "However, please note that no method of data transmission over the internet is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security."
            ]
        },
        {
            policyTitle: "Sharing Your Information",
            subtitle: "We may share your information in the following situations:",
            bulletPoints: [
                "With service providers: We may share your information with third-party service providers who help us deliver our services (e.g., payment processors, hosting services).",
                "For legal reasons: We may disclose your information if required by law or to protect our rights, safety, and security, or that of others.",
                "With your consent: We will seek your consent before sharing your information for any other purpose not covered in this Privacy Policy."
            ]
        },
        {
            policyTitle: "Cookies and Tracking Technologies",
            subtitle: "Our website uses cookies and similar technologies to enhance user experience.",
            bulletPoints: [
                "Cookies are small files that are stored on your device to remember your preferences and activities.",
                "You can control cookie settings through your browser. However, disabling cookies may affect the functionality of certain features of our website."
            ]
        },
        {
            policyTitle: "Your Rights and Choices",
            subtitle: "You have the following rights regarding your personal information:",
            bulletPoints: [
                "Access: You may request access to the personal information we have collected about you.",
                "Correction: You can update or correct any inaccurate or incomplete information.",
                "Deletion: You may request the deletion of your personal data, subject to certain legal requirements.",
                "Opt-out: You can opt out of receiving marketing communications by following the unsubscribe link in our emails.",
                "To exercise these rights, please contact us using the contact details below."
            ]
        },
        {
            policyTitle: "Changes to This Privacy Policy",
            subtitle: "Saroj Educational Group reserves the right to update or modify this Privacy Policy at any time.",
            bulletPoints: [
                "Any changes will be posted on this page, and the updated policy will be effective immediately upon posting.",
                "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information."
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
    ]



    return (
        <>
            <div className="relative py-24 p-4">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <h1 className="text-gray-900 font-bold text-4xl">Privacy Policy</h1>
                            <div className="py-5 text-sm font-regular text-gray-900 flex">
                                <span className="mr-3 flex flex-row items-center">
                                    <svg className="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" ><g>
                                        <g>
                                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                                    <span className="ml-1">21 May 2025</span>
                                </span>



                            </div>
                            <hr />
                            <p className="text-base leading-8 my-5">
                                At Saroj Educational Group, we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website, courses, and services.
                            </p>

                            {policies.map(policy =>

                                <>

                                    <h3 className="text-2xl text-blue-700 font-bold my-5">#{policies.indexOf(policy) + 1}. {policy.policyTitle}</h3>


                                    {policy.bulletPoints.map((point, index) => {
                                        if (point.includes(":")) {
                                            const [bold, ...rest] = point.split(/:(.+)/)
                                            return (
                                                <p key={index} className="text-base leading-8 my-5">
                                                    <span className="text-blue-900">• </span>
                                                    <strong>{bold}:</strong> {rest.join('')}
                                                </p>
                                            )
                                        } else {
                                            return (
                                                <p key={index} className="text-base leading-8 my-5">
                                                    <span className="text-blue-900">• </span> {point}
                                                </p>
                                            )
                                        }
                                    })}



                                </>

                            )}


                        </div>

                    </div>
                </div>
            </div>
        </>
    )


}