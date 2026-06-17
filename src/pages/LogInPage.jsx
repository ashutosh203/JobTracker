/** @format */

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLogIn } from '../service/userLogIn.service';
import { useContext } from 'react';
import JobContext from '../context/JobContext';

const LogInPage = () => {
  const Navigate = useNavigate();
  const { setCandidateToken } = useContext(JobContext);
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });

 const onSubmit = (data) => {
  console.log(data);
  userLogIn(data, Navigate, setCandidateToken);
 };

 return (
  <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
   <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border p-6'>
    <div className='mb-6 text-center'>
     <h1 className='text-2xl font-bold text-gray-800'>Welcome Back</h1>
     <p className='text-sm text-gray-500 mt-2'>
      Login to continue your job search journey.
     </p>
    </div>

    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Email Address
      </label>
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
       placeholder='Enter your email'
       className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors['email'] && (
       <p className='mt-1 text-sm text-red-500'>{errors['email']?.message}</p>
      )}
     </div>

     <div>
      <label className='block text-sm font-medium text-gray-700 mb-1'>
       Password
      </label>
      <input
       {...register('password', {
        required: 'Password is required',
        validate: (value) =>
         (value && value.trim() !== '') || 'Password is required',
        pattern: {
         value: /^[0-9]+$/,
         message: 'Only numbers allowed',
        },
       })}
       type='password'
       placeholder='Enter your password'
       className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors['password'] && (
       <p className='mt-1 text-sm text-red-500'>
        {errors['password']?.message}
       </p>
      )}
     </div>

     <div className='flex justify-end'>
      <button type='button' className='text-sm text-blue-600 hover:underline'>
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
