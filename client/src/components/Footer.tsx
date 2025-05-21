import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main content - 3 columns on large screens */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Quick Links Section */}
          <section className="lg:flex-1">
            <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
            <div className="h-px bg-gray-300 w-full mb-4"></div>
            
            <div className="mb-6 text-justify">
              <h3 className="font-semibold mb-2">Saroj Institute of Technology and Management</h3>
              <ul className="space-y-1 text-justify">
                <li>• Saroj Institute of Technology & Management</li>
                <li>• Shivdan Singh Institute of Technology & Management</li>
                <li>• Saroj Institute of Management & Technology</li>
                <li>• Lucknow Institute Of Pharmacy</li>
                <li>• Saroj College Of Pharmacy</li>
              </ul>
            </div>
            
            <div className="h-px bg-gray-300 w-full mb-4"></div>
            
            <h3 className="font-semibold mb-2">Saroj Institute of Technology and Management (SITM)</h3>
            <div className="h-px bg-gray-300 w-full my-4"></div>
          </section>

          {/* Contact Information */}
          <section className="lg:flex-1">
            <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
            <div className="h-px bg-gray-300 w-full mb-4"></div>
            
            <address className="not-italic mb-4">
              <p> Ahimamau, Arjunganj, Sultanpur Road,</p>
              <p>Lucknow, Uttar Pradesh, India, 226001</p>
            </address>
            
            <div className="space-y-2">
              <p className="flex items-center">
                <FaPhone className="mr-2" /> 0522 - 3116178, 9555699988
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> admission.cell@segiko.org
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" /> Toll Free No: 1800-180-7886
              </p>
            </div>
          </section>

          {/* Legal Links */}
          <section className="lg:flex-1">
            <h2 className="text-xl font-bold mb-4">LEGAL</h2>
            <div className="h-px bg-gray-300 w-full mb-4"></div>
            
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms and Conditions</a>
            </div>
          </section>
        </div>

        {/* Copyright - full width below */}
        <section className="text-center pt-6 border-t border-gray-300">
          <p>© Copyright All Rights Reserved @ 2025 Saroj Institute of Technology and Management (SITM)</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;