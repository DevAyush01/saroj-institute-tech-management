import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import instituteLogo from '../../assets/logo.png'; // Update with your actual logo path

interface Pill {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: 'blue' | 'green' | 'orange';
}

export default function NotFoundPage() {
  const [bouncingPills, setBouncingPills] = useState<Pill[]>([]);
  const [funFact, setFunFact] = useState<string | null>(null);

  const facts: string[] = [
    "The first pharmacy in the US opened in 1729 in Philadelphia.",
    "Aspirin was first developed from a compound found in willow bark.",
    "The symbol 'Rx' comes from the Latin word 'recipe' meaning 'take'.",
    "Pharmacists are trained to recognize over 12,000 drug names and products.",
  ];

  // Create bouncing pills
  useEffect(() => {
    const pills: Pill[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      rotation: Math.random() * 360,
      color: ['blue', 'green', 'orange'][Math.floor(Math.random() * 3)] as Pill['color'],
    }));
    setBouncingPills(pills);
  }, []);

  const handlePillClick = (id: number) => {
    setBouncingPills(prev => prev.filter(pill => pill.id !== id));

    setTimeout(() => {
      setBouncingPills(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          rotation: Math.random() * 360,
          color: ['blue', 'green', 'orange'][Math.floor(Math.random() * 3)] as Pill['color'],
        }
      ]);
    }, 300);

    if (Math.random() > 0.8) {
      setFunFact(facts[Math.floor(Math.random() * facts.length)]);
      setTimeout(() => setFunFact(null), 5000);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50 flex flex-col">
      

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Floating pills */}
        {bouncingPills.map((pill) => (
          <div
            key={pill.id}
            className={`absolute w-8 h-4 rounded-full bg-${pill.color}-500 opacity-20 cursor-pointer transition-transform duration-300 hover:opacity-40 hover:scale-110`}
            style={{
              left: `${pill.x}%`,
              top: `${pill.y}%`,
              transform: `rotate(${pill.rotation}deg)`,
            }}
            onClick={() => handlePillClick(pill.id)}
          />
        ))}

        {/* Fun fact popup */}
        {funFact && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs animate-fadeIn">
            <p className="text-sm text-gray-700">{funFact}</p>
          </div>
        )}

        {/* 404 Content */}
        <div className="text-center relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md max-w-2xl">
          <h1 className="text-9xl font-bold text-blue-600 mb-2 animate-pulse">
            4<span className="text-green-500">0</span>4
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for has moved or doesn't exist.
          </p>

          

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
            >
              Go to Homepage
            </Link>
            <Link
              to="/courses-offered"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition transform hover:scale-105 shadow-md"
            >
              Browse Courses
            </Link>
            <Link
              to="/contact-us"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition transform hover:scale-105 shadow-md"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      
    </div>
  );
}
