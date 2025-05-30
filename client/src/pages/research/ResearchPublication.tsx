
import React from 'react';
import { motion } from 'framer-motion';

type Publication = {
  authors: string;
  title: string;
  journalOrConference: string;
  date?: string;
  location?: string;
  url?: string;
  notes?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const getTagColor = (authorCount: number) => {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-yellow-100 text-yellow-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
  ];
  return colors[authorCount % colors.length];
};

const ResearchPublications: React.FC = () => {
  const publications: Publication[] = [
    {
      authors: 'Ravendra Ratan Singh Jandail',
      title: 'A Proposed Nobel Approach for Sentiment Analysis and Opinion Mining',
      journalOrConference: 'International Journal Ubicomp',
      date: 'April 2014',
      notes: 'Unpaid journal'
    },
    {
      authors: 'Ritu Sindhu, Ravendra Ratan Singh Jandail and Abdul Wahid',
      title: 'A Multi Agent Framework for Immediate Messaging',
      journalOrConference: 'International Annual Conference On Electrical, Electronics, Mechanical and Computer Science and Engineering',
      date: '29 December 2013',
      location: 'Pune'
    },
    {
      authors: 'Ravendra Ratan Singh Jandailand Ritu Sindhu',
      title: 'Globalised Telecom Revolution: A Survey of Wireless Communication Technology',
      journalOrConference: 'International Journal of Advance Research in Computer Science and Communication Engineering',
      date: 'October 2013'
    },
    {
      authors: 'Ravendra Ratan Singh Jandail, Pradeep Sharma & Chetan Agrawal',
      title: 'A Survey of Sentiment Analysis and Opinion Mining: A Need for an Organization and Requirement of a Customer',
      journalOrConference: 'International conference on emerging technology and advance in engineering',
      date: 'February 2014',
      location: 'Tamjhin Tamilnadu',
      notes: 'Accepted'
    },
    {
      authors: 'Pinki, Nida',
      title: 'A Comprehensive Analysis of Existing Load Balancing Algorithms in Cloud Network',
      journalOrConference: 'International Journal of Science and Research (IJSR)',
      date: 'May 2014',
      notes: 'Volume 3 Issue 5'
    },
    {
      authors: 'Rahul Verma, Joydip Dhar',
      title: 'Online Spam Filter for Duplicate or Near Duplicate Message Content Detection Scheme',
      journalOrConference: 'JCIT: Journal of Convergence Information Technology',
      date: '2014',
      notes: 'Vol. 9, No. 4, pp. 23 ~ 30'
    },
    {
      authors: 'Neeraj Mishra and Lalit Kumar Singh',
      title: 'Comparative studies to determine the effect of the media constituents for acid protease production by submerged fermentation',
      journalOrConference: 'Asian Jr of Microbial Biotech Env Sc',
      date: '2008',
      notes: 'Vol. 10(3): 21-25'
    },
    {
      authors: 'Neeraj Mishra, Akhilesh Dubey, Shashikant & Gopal Tewari',
      title: 'Environmental Control: A Nano Technological Approach',
      journalOrConference: 'NATIONAL SEMINAR on "Recent Strategies of Management, Technology & Environmental Control"',
      date: '2008',
      location: 'S. D. College of Engineering and Technology'
    },
    {
      authors: 'Neeraj Mishra, Gopal Tewari, Akhilesh Dubey & Shashikant',
      title: 'Nanotechnology: An Advance Approach To Food And Medical Industry',
      journalOrConference: 'NATIONAL CONFERENCE on Emerging Technologies',
      date: '2008',
      location: 'Integral University'
    },
    {
      authors: 'Shri Ram Chaurasia and Shashikant',
      title: 'Removal Basic Dye From Aqueous Solution Using Natural Adsorbents: Equilibrium And Diffusion Studies',
      journalOrConference: 'Indian Journal Of Environmental Protection',
      date: '2007',
      notes: 'Vol.27, No.6, pp 538-544'
    },
    {
      authors: 'Shri Ram Chaurasia and Shashikant',
      title: 'Removal Basic Dye From Aqueous Solution Using Natural Adsorbents: Kinetic Studies',
      journalOrConference: 'Indian Journal Of Environmental Protection',
      date: '2007',
      notes: 'Vol.27, No.9, pp 782-788'
    },
    {
      authors: 'Neeraj Mishra',
      title: 'Medicinal Nano biotechnology Robots',
      journalOrConference: 'Genesis H.B.T.I., Kanpur',
      date: '2006'
    },
    {
      authors: 'Neeraj Mishra',
      title: 'Immobilized Antibody Based Bio-Electronic Sensor(IABBES)',
      journalOrConference: 'Genesis H.B.T.I., Kanpur',
      date: '2006'
    },
    {
      authors: 'Neeraj Mishra',
      title: 'Applying Cancerous Glycol tic Deregulation Blueprint (CGDB) for Metabolite Overproduction in Microorganism',
      journalOrConference: 'Genesis H.B.T.I., Kanpur',
      date: '2006'
    },
    {
      authors: 'Vinod Bihari, Vandana Praveen, Divya Tripathi & C.K.M. Tripathi',
      title: 'Nutrirional regulation of Actinomycin-D production by a new isolate of Streptomycin sindenensis using statistical methods',
      journalOrConference: 'Indian J. Exp. Biol.',
      date: '2008',
      notes: '46, 60-65'
    },
    {
      authors: 'Dr. Sarveshwar pande',
      title: 'How to have an effective advertising?',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Dr. Sarveshwar pande',
      title: 'Credit Management- strategies to improve your rating',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'Women entrepreneur- New face of a woman',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'Retail-through Indian Perspective',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'Stress management an Spice of Life',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'Changing Dimensions of Rural Health',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'National Customer Relation Management',
      journalOrConference: 'Conference & Seminar on Management Beyond Repertoire',
      location: 'School of Management Sciences, Varanasi'
    },
    {
      authors: 'Mrs. Shilpee Adhikari',
      title: 'Advancement in Executive Development Program',
      journalOrConference: 'National Seminar on Advancement In Management',
      location: 'Sagar Institute of Technology & Management, Lucknow'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Is Indian Economy A Factor For the Growth of Retail Business in India?',
      journalOrConference: 'A National Journal "Management Today"'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Child Labor in Industries',
      journalOrConference: 'A National Journal "Urban Panorama"'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Have a positive Attitude',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'The Food for an Organization',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Managing The Time Effectively',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Contract Farming: An Implication For The Corporate World',
      journalOrConference: 'International Conference on Land Use Land Cover & Agro Biodiversity',
      location: 'National PG College, Lucknow'
    },
    {
      authors: 'Ms. Surabhi Agarwal',
      title: 'Changing Trends of Retail Scenario Towards Modernization in India',
      journalOrConference: 'National Seminar on Organized Retailing in India: Issues & Concerns',
      location: 'University of Lucknow, Lucknow'
    },
    {
      authors: 'Ms. Pooja Sinha',
      title: 'Growth of Retailing in India',
      journalOrConference: 'National Seminar on Retailing in India',
      location: 'Mahatma Gandhi Kashi Vidyapeeth University, Varanasi'
    },
    {
      authors: 'Ms. Pooja Sinha',
      title: 'Role of E-CRM in present Business Scenario',
      journalOrConference: 'National Seminar on Role of Information Technology in Present Scenario',
      location: 'School of Management Sciences, Varanasi'
    },
    {
      authors: 'Ms. Pooja Sinha',
      title: 'Benchmarking approach to step ahead',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Ms. Pooja Sinha',
      title: 'Rural health management in present scenario',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mr. Gaurav Bajpai & Ms. Rashmi Chaudhary',
      title: 'Working groups that succeed in a Dynamic Environment',
      journalOrConference: 'www.indianmba.com'
    },
    {
      authors: 'Mr. Ashish Kumar Trivedi, Dr. S. Q. Abbas, Mr. Bhawesh Kumar Thakur, Mr. U.K. Farooqui., Mr. Sheenu Rizavi, Mr. S. Hadi',
      title: 'Integration of Event-Driven Web Services into Data Intensive Websites',
      journalOrConference: 'National Conference on Emerging Technologies(NCET-08)',
      location: 'Integral University, Lucknow'
    },
    {
      authors: 'Mr. Bhawesh Kumar Thakur, Dr. S. Q. Abbas, Mr. Ashish Kumar Trivedi',
      title: 'An Efficient Approach to Personalize the Web Usage Data through Recommendation logic',
      journalOrConference: 'National Conference on Emerging Technologies(NCET-08)',
      location: 'Integral University, Lucknow'
    },
    {
      authors: 'Mr. Amit Saxena',
      title: 'An Infrastructure Multimedia Meta Data Management',
      journalOrConference: 'National Conference on Emerging Technologies (NCET-08)',
      location: 'Integral University, Lucknow'
    },
    {
      authors: 'Mr. D. D. Verma',
      title: 'An Identity of English August By Upmanyu Chatterjee',
      journalOrConference: 'Literature and Identity',
      location: 'Lucknow University, Lucknow'
    }
  ];


  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-white via-sky-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight drop-shadow-sm">
            Research Publications
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore scholarly contributions made by our researchers in various domains.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => {
            const authorCount = pub.authors.split(',').length;
            return (
              <motion.article
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow transition-all duration-300 hover:shadow-xl"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{pub.title}</h2>
                <p className="text-sm text-gray-500 italic">{pub.authors}</p>

                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getTagColor(
                      authorCount
                    )}`}
                  >
                    {pub.journalOrConference}
                  </span>
                  {pub.date && (
                    <p>
                      <span className="font-medium text-gray-700">Date:</span> {pub.date}
                    </p>
                  )}
                  {pub.location && (
                    <p>
                      <span className="font-medium text-gray-700">Location:</span> {pub.location}
                    </p>
                  )}
                  {pub.notes && (
                    <p>
                      <span className="font-medium text-gray-700">Notes:</span> {pub.notes}
                    </p>
                  )}
                </div>

                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Publication &rarr;
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;