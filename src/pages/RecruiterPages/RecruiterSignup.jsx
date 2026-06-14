/** @format */

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import sandOtp from '../../service/sandOtp';
import { useContext, useState } from 'react';
import verifyEmailOtp from '../../service/verifyEmailOtp';
import { RecruiterCreateAccount } from '../../service/RecruiterCreateAccount';
import JobContext from '../../context/JobContext';

const RecruiterSignup = () => {
 const Navigate = useNavigate();
 const { setRecruiterToken } = useContext(JobContext);
 const [response, setResponse] = useState({ message: '', toggle: false });
 const { role } = useParams();
 const {
  register,
  handleSubmit,
  // trigger,
  getValues,
  watch,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });

 const onSubmit = async (data) => {
  console.log(data);
  data.role = role;

  await RecruiterCreateAccount(data, setRecruiterToken);
  await Navigate('/recruiter_admin_panel', { replace: true });
 };

 return (
  <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
   <div className='w-full max-w-lg bg-white rounded-2xl border shadow-sm p-6'>
    <div className='text-center mb-6'>
     <h1 className='text-3xl font-bold text-gray-800'>Recruiter Sign Up</h1>

     <p className='text-gray-500 mt-2'>
      Create your recruiter account and start hiring.
     </p>
    </div>

    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Full Name
      </label>

      <input
       type='text'
       {...register('fullName', {
        required: 'Name is required',
        maxLength: {
         value: 25,
         message: 'Name should be between 3 and 25 characters',
        },
        minLength: {
         value: 3,
         message: 'Name should be between 3 and 25 characters',
        },
        pattern: {
         value: /^[a-zA-Z\s]+$/,
         message: 'Name should contain only letters and spaces',
        },
        validate: (value) =>
         (value && value.trim() !== '') || 'Name is required',
       })}
       placeholder='John Doe'
       className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
        errors.fullName
         ? 'border-red-500 focus:ring-red-500'
         : 'focus:ring-blue-500'
       }`}
      />

      {errors.fullName && (
       <p className='mt-1 text-sm text-red-500'>{errors.fullName.message}</p>
      )}
     </div>

     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Company Name
      </label>

      <input
       type='text'
       {...register('companyName', {
        required: 'company name is required',

        validate: (value) =>
         (value && value.trim() !== '') || 'Name is required',
       })}
       placeholder='ABC Technologies'
       className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors.companyName && (
       <p className='mt-1 text-sm text-red-500'>{errors.companyName.message}</p>
      )}
     </div>

     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Phone Number
      </label>

      <input
       type='tel'
       {...register('phoneNumber', {
        required: 'Phone Number is required',
        pattern: {
         value: /^\d{10}$/,
         message: 'Invalid phone number format',
        },
        validate: (value) =>
         (value && value.trim() !== '') || 'Phone Number is required',
        maxLength: {
         value: 10,
         message: 'Phone number is max-10 digit',
        },
       })}
       placeholder='9876543210'
       className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors.phoneNumber && (
       <p className='mt-1 text-sm text-red-500'>{errors.phoneNumber.message}</p>
      )}
     </div>
     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Location
      </label>

      <input
       type='text'
       {...register('companyLocation', {
        required: 'location is required',
        validate: (value) =>
         (value && value.trim() !== '') || 'location is required',
        maxLength: {
         value: 30,
         message: 'only 30 characters',
        },
       })}
       placeholder='Uttam Nagar, New Delhi'
       className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors.companyLocation && (
       <p className='mt-1 text-sm text-red-500'>
        {errors.companyLocation.message}
       </p>
      )}
     </div>
     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Company Address
      </label>

      <textarea
       {...register('Address', {
        required: 'Company Address is required',
        validate: (value) =>
         (value && value.trim() !== '') || 'Company Address is required',
        minLength: {
         value: 10,
         message: 'Address should be at least 10 characters',
        },
        maxLength: {
         value: 200,
         message: 'Address should not exceed 200 characters',
        },
       })}
       rows={4}
       placeholder='Enter complete company address'
       className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
        errors.Address
         ? 'border-red-500 focus:ring-red-500'
         : 'focus:ring-blue-500'
       }`}
      />

      {errors.Address && (
       <p className='mt-1 text-sm text-red-500'>{errors.Address.message}</p>
      )}
     </div>

     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Work Email
      </label>

      <div className='flex gap-2'>
       <input
        type='email'
        {...register('email', {
         required: 'Email is required',
         pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email format',
         },
         validate: (value) =>
          (value && value.trim() !== '') || 'Email is required',
        })}
        placeholder='recruiter@company.com'
        className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
       />

       <button
        onClick={(event) => {
         const value = getValues('email');
         sandOtp(event, value, setResponse);
        }}
        type='button'
        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
        Send OTP
       </button>
      </div>
      {errors.email ||
       (response.message && (
        <p
         className={`mt-1 text-sm ${errors.email ? 'text-red-500' : 'text-green-600'} `}>
         {errors.email?.message || response?.message}
        </p>
       ))}
     </div>

     {!response.toggle && (
      <div>
       <label className='block text-sm font-medium text-gray-700 mb-1'>
        Email Verification Code
       </label>

       <div className='flex gap-2'>
        <input
         type='text'
         {...register('otp')}
         maxLength={6}
         placeholder='Enter OTP'
         className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <button
         type='button'
         onClick={(event) => {
          const value = getValues(['email', 'otp']);
          verifyEmailOtp(event, value, setResponse);
         }}
         className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
         Verify
        </button>
        {errors.otp && (
         <p className='mt-1 text-sm text-red-500'>{errors.otp.message}</p>
        )}
       </div>

       {/* Optional Success Message */}
       {response.toggle ? (
        <p className='text-green-600 text-sm mt-2'>
         Email verified successfully
        </p>
       ) : (
        ''
       )}
      </div>
     )}

     {response.toggle && (
      <div>
       <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
         Password
        </label>

        <input
         type='password'
         {...register('password', {
          required: 'Password is required',
          validate: (value) =>
           (value && value.trim() !== '') || 'Password is required',
          maxLength: {
           value: 5,
           message: 'Password must be 5 Digit',
          },
          minLength: {
           value: 5,
           message: 'Password must be 5 Digit',
          },
          pattern: {
           value: /^[0-9]+$/,
           message: 'Only numbers allowed',
          },
         })}
         placeholder='Enter password'
         className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        {errors.password && (
         <p className='mt-1 text-sm text-red-500'>{errors.password.message}</p>
        )}
       </div>

       <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
         Confirm Password
        </label>

        <input
         type='password'
         {...register('confirmPassword', {
          required: 'Enter your password',
          validate: (value) =>
           // eslint-disable-next-line react-hooks/incompatible-library
           value.trim() !== '' && watch('password') === value
            ? true
            : 'password is not match',
         })}
         placeholder='Confirm password'
         className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        {errors.confirmPassword && (
         <p className='mt-1 text-sm text-red-500'>
          {errors.confirmPassword.message}
         </p>
        )}
       </div>
      </div>
     )}

     <button
      type='submit'
      disabled={!response.toggle}
      className={`w-full py-3  text-white rounded-lg font-medium ${response.toggle ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400'} transition`}>
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
