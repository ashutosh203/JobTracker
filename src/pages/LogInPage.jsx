/** @format */

import { useNavigate } from 'react-router-dom';

const LogInPage = () => {
    const Navigate = useNavigate();
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border p-6'>
                <div className='mb-6 text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Welcome Back
                    </h1>
                    <p className='text-sm text-gray-500 mt-2'>
                        Login to continue your job search journey.
                    </p>
                </div>

                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type='button'
                            className='text-sm text-blue-600 hover:underline'>
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type='submit'
                        className='w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
                        Login
                    </button>
                </form>

                <p className='text-center text-sm text-gray-600 mt-5'>
                    Don't have an account?{' '}
                    <button
                        className='text-blue-600 font-medium hover:underline'
                        onClick={() => Navigate('/user&role')}>
                        Create Account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LogInPage;
