import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <h2 className="text-lg font-semibold leading-tight">
              Saroj Institute of Technology & Management
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering Students Through Quality Education.
          </p>
          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/SarojGroupLucknow" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/school/saroj-institute-of-technology-management/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.instagram.com/sarojgroup/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Institutes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Institutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="https://seglko.org/sitm/" className="hover:text-white transition">Saroj Institute of Technology & Management</a></li>
            <li><a href="https://seglko.org/ssitm/" className="hover:text-white transition">Shivdan Singh Institute of Technology & Management</a></li>
            <li><a href="https://seglko.org/lip/" className="hover:text-white transition">Lucknow Institute Of Pharmacy</a></li>
            <li><a href="https://seglko.org/scp/" className="hover:text-white transition">Saroj College Of Pharmacy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt size={16} className="mt-1" />
              <span>
                Ahimamau, Arjunganj, Sultanpur Road, <br />Lucknow, Uttar Pradesh, India, 226001
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} />
              <span>9555699988</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope size={16} />
              <span>admission.cell@segiko.org</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Saroj Educational Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
