/** @format */

const CandidateJobDetails = () => {
    return (
        <div className='w-full flex justify-center p-4 md:p-8'>
            <div className='w-full max-w-4xl bg-white rounded-2xl border shadow-sm overflow-hidden'>
                {/* Header */}
                <div className='p-6 border-b bg-gray-50'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Frontend Developer
                    </h1>

                    <p className='text-gray-600 mt-2'>ABC Technologies</p>

                    <div className='flex flex-wrap gap-3 mt-4'>
                        <span className='px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm'>
                            Open
                        </span>

                        <span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm'>
                            Full Time
                        </span>
                    </div>
                </div>

                {/* Details */}
                <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <h3 className='text-sm text-gray-500'>Company Name</h3>
                        <p className='font-medium text-gray-800'>
                            ABC Technologies
                        </p>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-500'>Location</h3>
                        <p className='font-medium text-gray-800'>
                            Noida, India
                        </p>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-500'>Job Type</h3>
                        <p className='font-medium text-gray-800'>Full Time</p>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-500'>Industry Type</h3>
                        <p className='font-medium text-gray-800'>
                            Information Technology
                        </p>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-500'>Established</h3>
                        <p className='font-medium text-gray-800'>2015</p>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-500'>
                            Organization Size
                        </h3>
                        <p className='font-medium text-gray-800'>
                            100 - 500 Employees
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <div className='p-6 border-t'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-3'>
                        Perks & Benefits
                    </h2>

                    <p className='text-gray-600 leading-relaxed'>
                        Health Insurance, Flexible Working Hours, Paid Leave,
                        Learning Budget, Remote Work Support.
                    </p>
                </div>

                {/* Job Description */}
                <div className='p-6 border-t'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-3'>
                        Job Details
                    </h2>

                    <p className='text-gray-600 leading-7'>
                        We are looking for a Frontend Developer with experience
                        in React.js, JavaScript, Tailwind CSS, and REST APIs.
                        The candidate should have strong problem-solving skills
                        and be comfortable working in a collaborative
                        environment.
                    </p>
                </div>

                {/* Footer */}
                <div className='p-6 border-t bg-gray-50 flex justify-between items-center'>
                    <span className='text-sm text-gray-500'>
                        Posted 2 days ago
                    </span>

                    <button className='px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateJobDetails;
