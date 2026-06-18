/** @format */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { recruiterJobDetail } from '../../service/recruiterJobDetail.service';
import JobDetailsLoader from '../../Loaders/JobDetailsLoader';

const ViewJobDetails = () => {
 const { id } = useParams();
 const [job, setJob] = useState(null);

 useEffect(() => {
  recruiterJobDetail(id, setJob);
 }, [id]);

 return (
  <>
   {job ? (
    <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden'>
     {/* Header */}
     <div className='bg-blue-600 text-white p-6'>
      <h1 className='text-3xl font-bold'>{job.JobTitle}</h1>
      <p className='text-blue-100 mt-1'>{job.companyName}</p>
     </div>

     {/* Body */}
     <div className='p-6 space-y-6'>
      {/* Basic Info */}
      <div className='grid md:grid-cols-2 gap-6'>
       <div>
        <p className='text-sm text-gray-500'>Company Name</p>
        <p className='font-semibold'>{job.companyName}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Industry</p>
        <p className='font-semibold'>{job.IndustryType}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Job Type</p>
        <p className='font-semibold'>{job.JobType}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Established</p>
        <p className='font-semibold'>{job.Established}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Organization Size</p>
        <p className='font-semibold'>{job.Organization} Employees</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Location</p>
        <p className='font-semibold'>{job.Location}</p>
       </div>
      </div>

      {/* Address */}
      <div>
       <h2 className='text-lg font-semibold mb-2'>Address</h2>
       <p className='text-gray-700'>{job.address}</p>
      </div>

      {/* Job Description */}
      <div>
       <h2 className='text-lg font-semibold mb-2'>Job Description</h2>
       <p className='text-gray-700 leading-relaxed'>{job.JobDetails}</p>
      </div>

      {/* Benefits */}
      <div>
       <h2 className='text-lg font-semibold mb-2'>Perks & Benefits</h2>

       <div className='inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg'>
        {job.PerksBenefits}
       </div>
      </div>

      {/* Footer */}
      <div className='border-t pt-4 flex justify-between items-center'>
       <span className='text-sm text-gray-500'>Posted On:</span>

       <span className='font-medium'>
        {new Date(job.createdAt).toLocaleDateString()}
       </span>
      </div>
     </div>
    </div>
   ) : (
    <JobDetailsLoader />
   )}
  </>
 );
};

export default ViewJobDetails;
