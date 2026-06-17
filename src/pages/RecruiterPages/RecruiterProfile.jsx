/** @format */

import { useEffect, useState } from 'react';
import { RecruiterProfileData } from '../../service/RecruiterProfileData.service';
import RecruiterProfileLoader from '../../Loaders/RecruiterProfileLoader';

const RecruiterProfile = () => {
 const [profileData, setProfileData] = useState({
  data: '',
  success: false,
 });
 useEffect(() => {
  RecruiterProfileData(setProfileData);
 }, []);
 return (
  <>
   {!profileData.success ? (
    <RecruiterProfileLoader />
   ) : (
    <div className='w-full p-3 sm:p-4 md:p-8'>
     <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md border overflow-hidden'>
      {/* Header */}
      <div className='p-4 sm:p-6 border-b'>
       <h1 className='text-xl sm:text-2xl font-bold text-gray-800'>
        Recruiter Profile
       </h1>

       <p className='text-sm text-gray-500 mt-1'>
        View your company and contact information.
       </p>
      </div>

      {/* Profile Details */}
      <div className='p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6'>
       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>
         Recruiter Name
        </label>
        <p className='text-base md:text-lg font-semibold capitalize text-gray-800 break-words'>
         {profileData.data?.recruiterName}
        </p>
       </div>

       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>Role</label>
        <p className='text-base md:text-lg capitalize font-semibold text-gray-800 break-words'>
         {profileData.data?.role}
        </p>
       </div>

       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>
         Company Name
        </label>
        <p className='text-base md:text-lg capitalize font-semibold text-gray-800 break-words'>
         {profileData.data?.companyName}
        </p>
       </div>

       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>
         Email Address
        </label>
        <p className='text-base md:text-lg font-semibold text-gray-800 break-all'>
         {profileData.data?.email}
        </p>
       </div>

       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>
         Phone Number
        </label>
        <p className='text-base md:text-lg font-semibold text-gray-800'>
         +91 {profileData.data?.phone}
        </p>
       </div>

       <div className='min-w-0'>
        <label className='text-sm font-medium text-gray-500'>
         Company Location
        </label>
        <p className='text-base md:text-lg capitalize font-semibold text-gray-800 break-words'>
         {profileData.data?.location}
        </p>
       </div>
      </div>

      {/* Address */}
      <div className='px-4 sm:px-6 pb-6'>
       <label className='text-sm font-medium text-gray-500'>
        Company Address
       </label>

       <p className='mt-1 text-gray-800 break-words leading-relaxed'>
        {profileData.data?.address}
       </p>
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default RecruiterProfile;
