import React from 'react';
import chairmanImg from '../../assets/ChairmanImg.jpg';

interface ChairmanMessageProps {
  chairmanName?: string;
  chairmanTitle?: string;
  instituteName?: string;
  message?: string[];
  imageUrl?: string;
}

const ChairmanMessage: React.FC<ChairmanMessageProps> = ({
  chairmanName = "Mr. Sunil Singh",
  chairmanTitle = "Chairman",
  instituteName = "Saroj Institute of Technology and Management (SITM)",
  message = [
    "It is my privilege to welcome you to Saroj Institute of Technology and Management, an institution that stands as a beacon of quality education and innovation in the field of technical and management education.",
    "At SITM, we are committed to creating an environment that fosters academic excellence, research, and holistic development. Our focus extends beyond textbooks to include practical skills, industry exposure, and value-based education that prepares students for real-world challenges.",
    "With state-of-the-art infrastructure, experienced faculty members, and strong industry collaborations, we aim to provide our students with the best possible platform to launch successful careers. Our curriculum is designed to meet global standards while addressing local industry needs.",
    "As Chairman, my vision for SITM is to establish it as a premier institution that not only produces skilled professionals but also nurtures responsible citizens who contribute positively to society. I invite all students to join us in this transformative educational journey."
  ],
  imageUrl = chairmanImg
}) => {
  return (
    <div className="min-h-screen py-24 bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Chairman's Message
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Words from our visionary leader
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img 
                className="h-full w-full object-cover md:h-full md:w-full" 
                src={imageUrl} 
                alt={`${chairmanName}, ${chairmanTitle}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/default-chairman.jpg';
                }}
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                {chairmanTitle}
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                {chairmanName}
              </h2>
              <p className="mt-1 text-lg text-gray-600">
                {instituteName}
              </p>
              
              <div className="mt-8 space-y-4">
                {message.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-12 w-12 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Vision Statement</p>
                    <p className="text-gray-600">
                      "To transform SITM into a center of academic excellence that produces industry-ready professionals with strong ethical values and leadership qualities."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 rounded-lg p-6">
          <blockquote className="text-center">
            <svg className="h-12 w-12 mx-auto text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="mt-4 text-xl font-medium text-gray-900">
              "True education is about lighting minds, not just filling them. At SITM, we strive to ignite the spark of curiosity and innovation in every student."
            </p>
            <footer className="mt-4">
              <p className="text-base font-medium text-indigo-600">
                — Mr. Sunil Singh, Chairman
              </p>
              <p className="text-base font-medium text-gray-500">
                Saroj Institute of Technology and Management
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;