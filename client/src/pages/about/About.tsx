import React from 'react';
import chairmanImg from '../../assets/ChairmanImg.jpg';

const About: React.FC = () => {
  const date = new Date()
  let year = date.getFullYear();
  return (
    <div className="bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative bg-blue-800 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Saroj Institute of</span>
                    <span className="block text-blue-200">Technology & Management</span>
                  </h1>
                  <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Empowering futures through excellence in technical education and innovation since 2008.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="SITM Campus"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About SITM</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shaping the Future of Technical Education
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Saroj Institute of Technology and Management (SITM) is a premier institution committed to providing quality education in engineering, technology, and management.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base text-gray-500">
                  To emerge as a center of excellence in technical education that nurtures talent and fosters innovation, research, and entrepreneurial skills to meet global challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  To provide quality education through innovative teaching methodologies, state-of-the-art infrastructure, and industry collaborations that prepare students to become competent professionals and responsible citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SITM?
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Industry-Aligned Curriculum',
                  description: 'Regularly updated programs designed in consultation with industry experts to ensure relevance.',
                  icon: '📚',
                },
                {
                  name: 'Experienced Faculty',
                  description: 'Highly qualified professors and industry veterans with extensive teaching and research experience.',
                  icon: '👨‍🏫',
                },
                {
                  name: 'Modern Infrastructure',
                  description: 'State-of-the-art laboratories, well-equipped classrooms, and extensive learning resources.',
                  icon: '🏛️',
                },
                {
                  name: 'Placement Support',
                  description: 'Dedicated placement cell with strong industry connections and 90%+ placement record.',
                  icon: '💼',
                },
                {
                  name: 'Research Focus',
                  description: 'Encouragement and support for student research projects and publications.',
                  icon: '🔬',
                },
                {
                  name: 'Holistic Development',
                  description: 'Various clubs, sports, and cultural activities for overall personality development.',
                  icon: '🏆',
                },
              ].map((feature) => (
                <div key={feature.name} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Leadership
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Guided by visionary leaders committed to educational excellence
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-1">
            {[
              {
                name: 'Mr. Sunil Singh',
                role: 'Chairman',
                description: 'Education visionary with 25+ years in academic leadership',
                img: chairmanImg,
              }
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <img className="h-64 w-64 rounded-2xl object-cover" src={person.img} alt={person.name} />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{person.name}</h3>
                <p className="text-blue-600">{person.role}</p>
                <p className="mt-2 text-gray-500">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditation */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Accreditations & Affiliations
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {[
                { name: 'AICTE', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png' },
                { name: 'UGC', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4e/UGC_India_Logo.png' },
                { name: 'NAAC Accredited', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png' },
                { name: 'Affiliated to AKTU', logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png' },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                  <div className="text-4xl mb-2  "> <img className='h-16' src={item.logo} ></img> </div>
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to begin your journey?</span>
            <span className="block">Join SITM today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Applications for the date academic year {year} - {year+1} are now open.
          </p>
          <a
            href="https://seglko.in8.nopaperforms.com/"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;