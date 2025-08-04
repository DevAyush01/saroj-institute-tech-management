import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function TopInfoBar() {
  return (
    <div className="w-full bg-blue-700 -mt-2 text-white text-sm hidden md:block">
      <div className="max-full mx-auto flex justify-between items-center py-2 px-8">
        {/* Left Side Info */}
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1">
            <Mail size={16} />
            <span>admission.cell@segiko.org</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} />
            <span>+91 95556-99988</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>Ahimamau, Arjunganj, Sultanpur Road,
Lucknow, Uttar Pradesh, India, 226001</span>
          </div>
        </div>

        {/* Right Side Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/SEGofficial/" aria-label="Facebook" className="hover:text-gray-300">
            <Facebook size={18} />
          </a>
          <a href="https://in.linkedin.com/company/saroj-educational-group" aria-label="LinkedIn" className="hover:text-gray-300">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/segindia/?hl=en" aria-label="Instagram" className="hover:text-gray-300">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
