/** @format */
import { useNavigate, useParams } from 'react-router-dom';
import sandOtp from '../service/sandOtp';
import verifyEmailOtp from '../service/verifyEmailOtp';
import { CandidateCreateAccount } from '../service/CandidateCreateAccount';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import CandidateInputFormLabel from '../components/CandidateComponents/CandidateSingUpAllComponents/CandidateInputFormLabel';
import { candidateInputValidation } from '../logic/candidateInputValidation';
import CandidateErrorShowInForm from '../components/CandidateComponents/CandidateSingUpAllComponents/CandidateErrorShowInForm';
const SingUpPage = () => {
 const { role } = useParams();
 const Navigate = useNavigate();

 const {
  register,
  handleSubmit,
  trigger,
  getValues,
  watch,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });

 const [response, setResponse] = useState({ message: '', toggle: false });

 const onSubmit = (data) => {
  console.log(data);

  if (!response.toggle) {
   const value = getValues(['Email', 'otp']);
   verifyEmailOtp(event, value, setResponse);
  } else {
   console.log('create Account', data);
   data.role = role;
   CandidateCreateAccount(data);
   Navigate('/');
  }
 };
 // eslint-disable-next-line react-hooks/incompatible-library
 const optValue = watch('otp');

 return (
  <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
   <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border p-6'>
    <div className='mb-6 text-center'>
     <h1 className='text-2xl font-bold text-gray-800'>Create Account</h1>
     <p className='text-sm text-gray-500 mt-2'>
      Join JobTracker and start applying for jobs.
     </p>
    </div>

    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
     {/* CandidateFull Name */}
     <div>
      <CandidateInputFormLabel label={'Full Name'} />

      <input
       {...register('FullName', candidateInputValidation.FullName)}
       type='text'
       placeholder='Enter your full name: AshuTheCoder'
       className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2  ${errors.FullName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'}`}
      />
      <CandidateErrorShowInForm errors={errors} Name={'FullName'} />
     </div>

     {/* Email */}
     <div>
      <CandidateInputFormLabel label={'Email Address'} />
      <input
       {...register('Email', candidateInputValidation.Email)}
       type='email'
       placeholder='Enter your email'
       className={`w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2  $${
        errors.Email
         ? 'border-red-500 focus:ring-red-400'
         : 'border-gray-300 focus:ring-blue-500'
       }`}
      />
      <CandidateErrorShowInForm errors={errors} Name={'Email'} />
     </div>
     {/* Phone Number */}
     <div>
      <CandidateInputFormLabel label={'Phone Number'} />
      <input
       type='tel'
       {...register('PhoneNumber', candidateInputValidation.PhoneNumber)}
       placeholder='Enter your phone number'
       className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${'border-gray-300'}`}
      />

      <CandidateErrorShowInForm errors={errors} Name={'PhoneNumber'} />
     </div>
     {/* OTP */}
     {!response.toggle && (
      <div>
       <CandidateInputFormLabel label={' Verify Email'} />
       <div className='flex items-center gap-3'>
        <input
         {...register('otp', candidateInputValidation.otp)}
         type='tel'
         maxLength={6}
         placeholder='Enter OTP'
         className='flex-1 px-4 py-2.5 border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
        />

        <button
         type='button'
         className={`px-5 py-2.5 text-white font-medium rounded-xl transition ${'bg-blue-600 hover:bg-blue-700'}`}
         onClick={async (event) => {
          const isValid = await trigger(['FullName', 'Email', 'PhoneNumber']);
          if (!isValid) {
           return;
          }
          const values = getValues(['FullName', 'Email', 'PhoneNumber']);
          values.unshift(role);
          sandOtp(event, values, setResponse);
         }}>
         Send
        </button>
       </div>

       <p
        className={`mt-2 text-xs ${errors.otp ? 'text-red-500' : 'text-gray-950 '}`}>
        {errors.otp ? errors.otp.message : response.message}
       </p>
      </div>
     )}
     {response.toggle && (
      <div>
       <CandidateInputFormLabel label={' Password'} />
       <input
        {...register('password', candidateInputValidation.password)}
        maxLength={5}
        type='password'
        placeholder='Confirm password'
        className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
       />
       <p
        className={`mt-2 text-xs ${errors.password ? 'text-red-500' : 'text - gray - 800'}`}>
        {errors.password ? errors.password.message : ''}
       </p>
      </div>
     )}
     {response.toggle && (
      <div>
       <CandidateInputFormLabel label={'  Confirm Password'} />
       <input
        maxLength={5}
        {...register(
         'ConfirmPassword',
         candidateInputValidation.ConfirmPassword(watch),
        )}
        type='password'
        placeholder='Confirm password'
        className='w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
       />

       <p
        className={`mt-2 text-xs ${errors.ConfirmPassword ? 'text-red-500' : 'text - gray - 800'}`}>
        {errors.ConfirmPassword ? errors.ConfirmPassword.message : ''}
       </p>
      </div>
     )}
     {
      <button
       type='submit'
       disabled={optValue?.length !== 6}
       className={`w-full capitalize py-2.5 text-white rounded-lg transition ${optValue?.length !== 6 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
       {response.toggle ? 'Create Account' : 'verify Email'}
      </button>
     }
    </form>
    <p className='text-center text-sm text-gray-600 mt-5'>
     Already have an account?{' '}
     <button className='text-blue-600 font-medium hover:underline'>
      Login
     </button>
    </p>
   </div>
  </div>
 );
};

export default SingUpPage;
