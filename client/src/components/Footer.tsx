import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPhoneSquareAlt, FaGavel } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-10 px-5 md:px-20 ">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <h2 className="text-lg font-bold">Saroj Institute of Technology and Management</h2>
          </div>
          <p className="text-sm text-gray-400">Empowering Students Through Quality Education</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><IoIosArrowForward />Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><IoIosArrowForward /> Saroj Institute of Technology & Management</li>
            <li className="flex items-center gap-2"><IoIosArrowForward /> Shivdan Singh Institute of Technology & Management</li>
            <li className="flex items-center gap-2"><IoIosArrowForward /> Saroj Institute of Management & Technology</li>
            <li className="flex items-center gap-2"><IoIosArrowForward /> Lucknow Institute Of Pharmacy</li>
            <li className="flex items-center gap-2"><IoIosArrowForward /> Saroj College Of Pharmacy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaPhoneAlt />Contact Us</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className=" text-white mt-1" />
              <p>
                Ahimamau, Arjunganj, Sultanpur Road,<br />
                Lucknow, Uttar Pradesh, India, 226001
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-white mt-1" />
              <p>
                9555699988
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-white mt-1" />
              <p>
                0522-3116178
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-white mt-1" />
              <p>admission.cell@segiko.org</p>
            </div>
            
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaGavel /> Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><IoIosArrowForward /> <Link to="/privacy-policy">Privacy Policy</Link> </li>
            <li className="flex items-center gap-2"><IoIosArrowForward /> <Link to="/terms-and-conditions" >Terms and Conditions</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © {new Date().getFullYear()} Saroj Educational Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
