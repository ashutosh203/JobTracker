/** @format */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobContext from '../context/JobContext';
import {
    buttonDisabled,
    ValidationName,
} from '../logic/candidateInputValidation';
import sandOtp from '../service/sandOtp';
import verifyEmailOtp from '../service/verifyEmailOtp';
const SingUpPage = () => {
    const { candidateData, setCandidateData } = useContext(JobContext);
    const Navigate = useNavigate();
    const [responseData, setResponseData] = useState({
        errorMessage: '',
        successMessage: '',
        verified: false,
    });
    const [toggle, setToggle] = useState({ value: false, on: 'Off' });

    useEffect(() => {
        (() => {
            setToggle((prev) => ({
                ...prev,
                value: buttonDisabled(candidateData),
            }));
        })();
    }, [candidateData]);
    useEffect(() => {
        if (candidateData.role === '') {
            Navigate('/user&role');
        } else {
            setCandidateData((prev) => ({
                ...prev,
                FullName: {
                    name: '',
                    error: '',
                },
                Email: {
                    mail: '',
                    error: '',
                },
                PhoneNumber: {
                    number: '',
                    error: '',
                },
            }));
        }
    }, [candidateData.role, Navigate, setCandidateData]);
    useEffect(
        () => console.log(candidateData.Email.mail, candidateData.Email.error),
        [candidateData.Email.mail, candidateData.Email.error],
    );
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

                <form
                    className='space-y-4'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                    {/* Full Name */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Full Name
                        </label>

                        <input
                            type='text'
                            onChange={(event) =>
                                ValidationName(event, setCandidateData)
                            }
                            disabled={toggle.on === 'on' ? true : false}
                            name='candidateFullName'
                            value={candidateData.FullName.name}
                            placeholder='Enter your full name'
                            className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${
                                candidateData.FullName.error
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                        />

                        {candidateData.FullName.error && (
                            <p className='mt-1 text-sm text-red-500'>
                                {candidateData.FullName.error}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Email Address
                        </label>

                        <input
                            disabled={toggle.on === 'on' ? true : false}
                            type='email'
                            onChange={(event) =>
                                ValidationName(event, setCandidateData)
                            }
                            name='Email'
                            value={candidateData.Email.mail}
                            placeholder='Enter your email'
                            className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${
                                candidateData.Email.error
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                        />

                        {candidateData.Email.error && (
                            <p className='mt-1 text-sm text-red-500'>
                                {candidateData.Email.error}
                            </p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Phone Number
                        </label>

                        <input
                            disabled={toggle.on === 'on' ? true : false}
                            type='tel'
                            maxLength={10}
                            onChange={(event) =>
                                ValidationName(event, setCandidateData)
                            }
                            name='PhoneNumber'
                            value={candidateData.PhoneNumber.number}
                            placeholder='Enter your phone number'
                            className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${
                                candidateData.PhoneNumber.error
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                        />

                        {candidateData.PhoneNumber.error && (
                            <p className='mt-1 text-sm text-red-500'>
                                {candidateData.PhoneNumber.error}
                            </p>
                        )}
                    </div>

                    {/* OTP */}
                    {!toggle.verified && (
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Verify Email
                            </label>

                            <div className='flex items-center gap-3'>
                                <input
                                    disabled={toggle.on === 'on' ? true : false}
                                    type='text'
                                    maxLength={6}
                                    placeholder='Enter OTP'
                                    className='flex-1 px-4 py-2.5 border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                                    value={candidateData.otp}
                                    onChange={(event) => {
                                        console.log(event.target.value);
                                        setCandidateData((prev) => ({
                                            ...prev,
                                            otp: event.target.value,
                                        }));
                                    }}
                                />

                                <button
                                    onClick={(event) =>
                                        sandOtp(
                                            event,
                                            candidateData,
                                            setResponseData,
                                        )
                                    }
                                    type='button'
                                    disabled={toggle.value}
                                    className={`px-5 py-2.5 text-white font-medium rounded-xl transition ${
                                        toggle.value
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700'
                                    }`}>
                                    Send
                                </button>
                            </div>

                            <p className='mt-2 text-xs text-gray-800'>
                                {responseData.errorMessage ||
                                    responseData.successMessage ||
                                    'Enter the 6-digit OTP'}
                            </p>
                        </div>
                    )}

                    {toggle.verified && (
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Password
                            </label>
                            <input
                                maxLength={5}
                                type='password'
                                placeholder='Confirm password'
                                className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    )}
                    {toggle.verified && (
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Confirm Password
                            </label>
                            <input
                                maxLength={5}
                                type='password'
                                placeholder='Confirm password'
                                className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    )}

                    <button
                        disabled={toggle.on === 'on' ? true : false}
                        type='submit'
                        disabled={toggle.value}
                        onClick={async (event) => {
                            await verifyEmailOtp(
                                event,
                                candidateData,
                                setToggle,
                            );
                        }}
                        className={`w-full py-2.5 text-white rounded-lg transition ${
                            toggle.value
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}>
                        {toggle.on === 'on'
                            ? 'Verifying OTP'
                            : toggle.on === 'Off'
                              ? 'Verify Email'
                              : toggle.verified === false
                                ? 'Create Account'
                                : 'Creating Account'}
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
