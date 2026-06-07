/** @format */

import { useNavigate } from 'react-router-dom';

const RecruiterSignup = () => {
    const Navigate = useNavigate();
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-lg bg-white rounded-2xl border shadow-sm p-6'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-bold text-gray-800'>
                        Recruiter Sign Up
                    </h1>

                    <p className='text-gray-500 mt-2'>
                        Create your recruiter account and start hiring.
                    </p>
                </div>

                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Full Name
                        </label>

                        <input
                            type='text'
                            name='fullName'
                            placeholder='John Doe'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Company Name
                        </label>

                        <input
                            type='text'
                            name='companyName'
                            placeholder='ABC Technologies'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Work Email
                        </label>

                        <input
                            type='email'
                            name='email'
                            placeholder='recruiter@company.com'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Phone Number
                        </label>

                        <input
                            type='tel'
                            name='phoneNumber'
                            placeholder='+91 9876543210'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Role
                        </label>

                        <select
                            name='role'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            <option value=''>Select Role</option>
                            <option value='Recruiter'>Recruiter</option>
                            <option value='HR Manager'>HR Manager</option>
                            <option value='Hiring Manager'>
                                Hiring Manager
                            </option>
                            <option value='Talent Acquisition'>
                                Talent Acquisition
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>

                        <input
                            type='password'
                            name='password'
                            placeholder='Enter password'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Confirm Password
                        </label>

                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm password'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <button
              type='submit'
                        className='w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition'>
                        Create Recruiter Account
                    </button>
                </form>

                <p className='text-center text-sm text-gray-600 mt-5'>
                    Already have an account?{' '}
                    <button
                        onClick={() => Navigate('/login')}
                        type='button'
                        className='text-blue-600 hover:underline'>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RecruiterSignup;
