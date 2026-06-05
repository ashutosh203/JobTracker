/** @format */

const RecruiterProfile = () => {
    return (
        <div className='w-full p-4 md:p-8'>
            <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md border'>
                {/* Header */}
                <div className='p-6 border-b'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Recruiter Profile
                    </h1>
                    <p className='text-sm text-gray-500 mt-1'>
                        View your company and contact information.
                    </p>
                </div>

                {/* Profile Details */}
                <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Recruiter Name
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            Ashu Sharma
                        </p>
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Role
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            Senior Recruiter
                        </p>
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Company Name
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            JobTracker Technologies
                        </p>
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Email Address
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            recruiter@jobtracker.com
                        </p>
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Phone Number
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            +91 9876543210
                        </p>
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-500'>
                            Company Location
                        </label>
                        <p className='text-lg font-semibold text-gray-800'>
                            New Delhi, India
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className='px-6 pb-6'>
                    <label className='text-sm font-medium text-gray-500'>
                        Company Address
                    </label>
                    <p className='mt-1 text-gray-800'>
                        101 Business Park, Sector 62, Noida, Uttar Pradesh,
                        India
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RecruiterProfile;
