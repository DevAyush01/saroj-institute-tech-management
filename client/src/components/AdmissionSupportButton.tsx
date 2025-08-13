import { Phone } from 'lucide-react';

const AdmissionSupportButton = () => {
  const phoneNumber = '1800-180-7686';
  
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-50"
      aria-label="Contact Admission Support"
    >
      <Phone className="w-5 h-5" />
      <span>Admission Support</span>
    </button>
  );
};

export default AdmissionSupportButton;