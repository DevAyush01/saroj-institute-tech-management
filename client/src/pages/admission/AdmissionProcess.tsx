

const AdmissionProcess = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto pt-24 px-4 sm:px-24 lg:px-24 flex flex-col justify-between">

        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            STEPS
          </p>
          <h3  className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            Admission Process <span className="text-indigo-600">@ SITM</span>
          </h3>
        </div>

        <div className="mt-20">
          <ul className="">
            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    1
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Online Registration</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Visit seglko.org/sitm and fill the online registration form with accurate academic and personal details.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    2
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Document Upload</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Upload scanned copies of required documents such as mark sheets, ID proof, and recent photograph.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    3
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Application Review</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The admission team verifies your application and documents for eligibility.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    4
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Confirmation Email</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    If approved, you receive a confirmation email with login credentials and next steps.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    5
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Fee Payment</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Pay the admission fees online through the payment portal as instructed in the confirmation email.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    6
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">Print Admission Receipt</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Download and print the final admission confirmation receipt for record and joining formalities.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className=" pb-20">
          <h3  className="text-2xl font-bold text-gray-900 mb-4">Admission Criteria</h3>
          <div className="bg-gray-100 p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Minimum 45% marks in 10+2 with PCM (Physics, Chemistry, Mathematics) for B.Tech programs.</li>
              <li>Valid scores in JEE Main / UPSEE or institute entrance test.</li>
              <li>Direct admission available under management quota as per eligibility.</li>
              <li>Postgraduate applicants must have a relevant undergraduate degree.</li>
            </ul>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default AdmissionProcess;
