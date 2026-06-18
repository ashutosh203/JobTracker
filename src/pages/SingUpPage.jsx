/** @format */
import { useNavigate, useParams } from 'react-router-dom';
import { CandidateCreateAccount } from '../service/CandidateCreateAccount.service';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import CandidateInputFormLabel from '../components/CandidateComponents/CandidateSingUpAllComponents/CandidateInputFormLabel';
import { candidateInputValidation } from '../logic/candidateInputValidation';
import JobContext from '../context/JobContext';
const SingUpPage = () => {
 const { role } = useParams();
 const Navigate = useNavigate();
 const { setCandidateToken } = useContext(JobContext);
 const {
  register,
  handleSubmit,
  watch,
  setError,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });

 const onSubmit = (data) => {
  data.role = role;
  (async () => {
   await CandidateCreateAccount(data, setCandidateToken, Navigate, setError);
  })();
 };

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
      {errors['FullName'] && (
       <p className='mt-1 text-sm text-red-500'>{errors['FullName'].message}</p>
      )}
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

      {errors['PhoneNumber'] && (
       <p className='mt-1 text-sm text-red-500'>
        {errors['PhoneNumber'].message}
       </p>
      )}
     </div>
     {/* Email */}
     <div>
      <CandidateInputFormLabel label={'Email Address'} />
      <input
       {...register('Email', candidateInputValidation.Email)}
       type='email'
       placeholder='Enter your email'
       className={`w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2  ${
        errors.Email
         ? 'border-red-500 focus:ring-red-400'
         : 'border-gray-300 focus:ring-blue-500'
       }`}
      />
      {errors['Email'] && (
       <p className='mt-1 text-sm text-red-500'>{errors['Email'].message}</p>
      )}
     </div>

     {/* this section is password  */}

     <div>
      <CandidateInputFormLabel label={' Password'} />
      <input
       {...register('password', candidateInputValidation.password)}
       maxLength={5}
       type='password'
       placeholder='Enter password'
       className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
      />
      <p
       className={`mt-2 text-xs ${errors.password ? 'text-red-500' : 'text - gray - 800'}`}>
       {errors.password ? errors.password.message : ''}
      </p>
     </div>

     {/* this is a confirm password */}

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
       className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
      />

      <p
       className={`mt-2 text-xs ${errors.ConfirmPassword ? 'text-red-500' : 'text - gray - 800'}`}>
       {errors.ConfirmPassword ? errors.ConfirmPassword.message : ''}
      </p>
     </div>

     {
      <button
       type='submit'
       className={`w-full capitalize py-2.5 text-white rounded-lg transition  bg-blue-600 hover:bg-blue-700`}>
       Create Account
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
