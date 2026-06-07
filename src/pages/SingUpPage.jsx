/** @format */
import { useNavigate } from 'react-router-dom';
const SingUpPage = () => {
    const Navigate = useNavigate();
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border p-6'>
                <div className='mb-6 text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Create Account
                    </h1>
                    <p className='text-sm text-gray-500 mt-2'>
                        Join JobTracker and start applying for jobs.
                    </p>
                </div>

                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

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
                            Phone Number
                        </label>
                        <input
                            type='tel'
                            placeholder='Enter your phone number'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm password'
                            className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
                        Create Account
                    </button>
                </form>

                <p className='text-center text-sm text-gray-600 mt-5'>
                    Already have an account?{' '}
                    <button
                        onClick={() => Navigate('/login')}
                        className='text-blue-600 font-medium hover:underline'>
                        Login
                    </button>
                </p>
            </div>
        </div>

    );
};

export default SingUpPage;
