import { useState, useEffect } from 'react';
import { X, Clock, School, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const COUNTDOWN_DAYS = 12;
const MOBILE_BREAKPOINT = 640;

const FloatingAdmissionBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      // Auto-expand if window becomes large enough
      if (window.innerWidth >= MOBILE_BREAKPOINT && isMinimized) {
        setIsMinimized(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMinimized]);

  // Initialize and manage countdown timer
  const initializeCountdown = (): Date => {
    const now = new Date();
    const resetTime = localStorage.getItem('countdownResetTime');

    if (!resetTime) {
      const newResetTime = new Date();
      newResetTime.setDate(newResetTime.getDate() + COUNTDOWN_DAYS);
      localStorage.setItem('countdownResetTime', newResetTime.toISOString());
      return newResetTime;
    } else {
      const resetDate = new Date(resetTime);
      if (now >= resetDate) {
        const newResetTime = new Date();
        newResetTime.setDate(newResetTime.getDate() + COUNTDOWN_DAYS);
        localStorage.setItem('countdownResetTime', newResetTime.toISOString());
        return newResetTime;
      }
      return resetDate;
    }
  };

  // Update countdown every second
  useEffect(() => {
    const closingDate = initializeCountdown();

    const updateCountdown = () => {
      const now = new Date();
      const diff = closingDate.getTime() - now.getTime();

      if (diff <= 0) {
        initializeCountdown();
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleApplyNow = () => {
    window.open('https://seglko.in8.nopaperforms.com/', '_blank');
  };

  if (!isVisible) return null;

  // Mobile minimized view
  if (isMobile && isMinimized) {
    return (
      <div className="fixed left-2 bottom-2 z-50 w-[calc(60%-16px)] max-w-[300px] animate-fade-in">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-2 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <School className="text-white" size={16} />
            <span className="text-white text-xs font-medium whitespace-nowrap">
              Admissions Closing!
            </span>
          </div>
          <div className="flex gap-1">
            <button 
              onClick={() => setIsMinimized(false)}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Expand"
            >
              <ChevronUp size={16} />
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Mobile expanded view
  if (isMobile) {
    return (
      <div className="fixed left-2 bottom-2 z-50 w-[calc(80%-16px)] max-w-[250px] animate-fade-in">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <School className="text-white" size={18} />
              <div>
                <h3 className="text-white font-bold text-sm">Saroj Institute</h3>
                <p className="text-white/90 text-xs">Admissions closing soon!</p>
              </div>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => setIsMinimized(true)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Minimize"
              >
                <ChevronDown size={18} />
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Compact Timer */}
          <div className="bg-white/10 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-white/90">
                <Clock size={14} />
                <span className="text-xs font-medium">Ending in:</span>
              </div>
              <div className="flex gap-1">
                <div className="bg-white/20 rounded px-2 py-1">
                  <span className="font-bold text-white text-xs">
                    {timeLeft.days}d {timeLeft.hours}h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="p-3 pt-2 border-t border-white/10">
            <button
              onClick={handleApplyNow}
              className="w-full bg-white text-red-700 hover:bg-gray-50 font-bold py-2 text-xs rounded-md transition-all flex items-center justify-center gap-1 active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="fixed left-6 bottom-6 z-50 w-80 animate-fade-in">
      {isMinimized ? (
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-xl p-3 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <School className="text-white" size={18} />
            <span className="text-white text-sm font-medium">Admissions Closing Soon</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsMinimized(false)}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Expand"
            >
              <ChevronUp size={18} />
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <School className="text-white" size={20} />
              <div>
                <h3 className="text-white font-bold text-lg">Saroj Institute</h3>
                <p className="text-white/90 text-sm">Admissions closing soon!</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsMinimized(true)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Minimize"
              >
                <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Timer */}
          <div className="bg-white/10 p-4">
            <div className="flex items-center gap-2 text-white/90 mb-3">
              <Clock size={16} />
              <span className="text-sm font-medium">Hurry! Only</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 rounded-lg py-2 px-1">
                    <span className="font-bold text-white text-lg">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs text-white/80 mt-1 block">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="p-4 pt-3 border-t border-white/10">
            <button
              onClick={handleApplyNow}
              className="w-full bg-white text-red-700 hover:bg-gray-50 font-bold py-3 text-sm rounded-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingAdmissionBanner;