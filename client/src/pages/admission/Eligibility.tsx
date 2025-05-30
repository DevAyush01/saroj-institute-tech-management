import React from "react";

const EligibilityCriteria = () => {
  const programs = [
    {
      name: "Bachelor of Pharmacy (B.Pharm)",
      duration: "4 years (8 semesters)",
      criteria: [
        "Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology",
        "Minimum 50% marks (45% for SC/ST candidates) in the above subjects combined",
        "Qualified in UPSEE or other state/national level pharmacy entrance exams (if applicable)",
        "Minimum age limit: 17 years as on 31st December of admission year"
      ]
    },
    {
      name: "Diploma in Pharmacy (D.Pharm)",
      duration: "2 years (4 semesters)",
      criteria: [
        "Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology",
        "Minimum 45% marks (40% for SC/ST candidates) in the above subjects combined",
        "Direct admission based on merit or through state counseling (varies by state)",
        "Minimum age limit: 17 years as on 31st December of admission year"
      ]
    },
    {
      name: "Master of Pharmacy (M.Pharm)",
      duration: "2 years (4 semesters)",
      criteria: [
        "Bachelor's degree in Pharmacy (B.Pharm) from a PCI approved institution",
        "Minimum 55% marks (50% for SC/ST candidates) in B.Pharm",
        "Qualified GPAT/UPSEE-PG or other relevant entrance examination",
        "Specializations available: Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy"
      ]
    },
    {
      name: "Pharmacy Doctoral Program (Pharm.D)",
      duration: "6 years (5 years study + 1 year internship)",
      criteria: [
        "For entry after 10+2: Passed with Physics, Chemistry and Biology/Mathematics",
        "Minimum 50% marks (45% for SC/ST candidates)",
        "For lateral entry: D.Pharm holders with minimum 50% marks",
        "Approved by Pharmacy Council of India (PCI)"
      ]
    }
  ];

  const importantNotes = [
    "All admissions are subject to approval by Pharmacy Council of India (PCI)",
    "Relaxation in marks for reserved categories as per Government of Uttar Pradesh norms",
    "Foreign/NRI candidates must have equivalent qualifications approved by AIU",
    "Documents required: 10th & 12th mark sheets, transfer certificate, migration certificate, character certificate, category certificate (if applicable), entrance exam scorecard"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lucknow Institute of Pharmacy
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-blue-600">
            Eligibility Criteria
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Admission requirements for our pharmacy programs
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <h3 className="text-lg font-medium text-white">
              Programs Offered
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                >
                  <dt className="text-sm font-medium text-gray-900">
                    {program.name}
                    <span className="block text-xs text-gray-500 mt-1">
                      Duration: {program.duration}
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {program.criteria.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <h3 className="text-lg font-medium text-white">
              Important Notes
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="list-disc pl-5 space-y-2">
              {importantNotes.map((note, index) => (
                <li key={index} className="text-sm text-gray-800">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Need more information?
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Contact our admission office at <a href="mailto:admission.cell@seglko.org" className="font-medium underline">admission.cell@seglko.org</a> or call <a href="tel:+9105223116178" className="font-medium underline">+91 05223116178</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;