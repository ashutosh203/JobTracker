/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CandidateJobDetailsLoader from '../../Loaders/candidateJobDetailLoader';
import { jobsApply } from '../../service/jobsApply.service';

const CandidateJobDetails = () => {
   const { id } = useParams();
   const Navigate = useNavigate()
 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchJobs = async () => {
   try {
    const response = await axios.get(`http://localhost:45000/jobsDetail/${id}`);

    setData(response.data.data);
   } catch (error) {
    console.error('Error fetching jobs:', error);
   }
  };

  fetchJobs();
 }, [id]);
 console.log(data);

 return (
  <>
   {data ? (
    <div className='w-full flex justify-center p-4 md:p-8'>
     <div className='w-full max-w-4xl bg-white rounded-2xl border shadow-sm overflow-hidden'>
      {/* Header */}
      <div className='p-6 border-b bg-gray-50'>
       <h1 className='text-2xl font-bold text-gray-800'>{data?.JobTitle}</h1>

       <p className='text-gray-600 mt-2'>{data?.companyName}</p>

       <div className='flex flex-wrap gap-3 mt-4'>
        <span className='px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm'>
         Open
        </span>

        <span className='px-3 py-1 capitalize rounded-full bg-blue-100 text-blue-700 text-sm'>
         {data.JobType}
        </span>
       </div>
      </div>

      {/* Details */}
      <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
       <div>
        <h3 className='text-sm text-gray-500'>Company Name</h3>
        <p className='font-medium capitalize text-gray-800'>
         {data.companyName}
        </p>
       </div>

       <div>
        <h3 className='text-sm text-gray-500'>Location</h3>
        <p className='font-medium text-gray-800'>{data.Location}</p>
       </div>

       <div>
        <h3 className='text-sm text-gray-500'>Job Type</h3>
        <p className='font-medium capitalize text-gray-800'> {data.JobType}</p>
       </div>

       <div>
        <h3 className='text-sm text-gray-500'>Industry Type</h3>
        <p className='font-medium text-gray-800'>{data.IndustryType}</p>
       </div>

       <div>
        <h3 className='text-sm text-gray-500'>Established</h3>
        <p className='font-medium text-gray-800'>{data.Established}</p>
       </div>

       <div>
        <h3 className='text-sm text-gray-500'>Organization Size</h3>
        <p className='font-medium text-gray-800'>{data.Organization}</p>
       </div>
      </div>

      {/* Benefits */}
      <div className='p-6 border-t'>
       <h2 className='text-lg font-semibold text-gray-800 mb-3'>
        Perks & Benefits
       </h2>

       <p className='text-gray-600 leading-relaxed'>{data.PerksBenefits}</p>
      </div>

      {/* Job Description */}
      <div className='p-6 border-t'>
       <h2 className='text-lg font-semibold text-gray-800 mb-3'>Job Details</h2>

       <p className='text-gray-600 leading-7'>{data.JobDetails}</p>
      </div>
      <div className='p-6 border-t'>
       <h2 className='text-[24px] md:text-2xl lg:text-lg font-semibold text-gray-800 capitalize mb-3'>
        company Address
       </h2>

       <p className='text-gray-600 leading-7'>{data.address}</p>
      </div>

      {/* Footer */}
      <div className='p-6 border-t bg-gray-50 flex justify-between items-center'>
       <span className='text-sm text-gray-500'>
        {' '}
        {new Date(data.createdAt).toLocaleDateString('en-IN', {
         day: 'numeric',
         month: 'short',
         year: 'numeric',
        })}
       </span>

       <button
        className='px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition'
        onClick={() => {
         jobsApply(data._id, Navigate);
        }}>
        Apply Now
       </button>
      </div>
     </div>
    </div>
   ) : (
    <CandidateJobDetailsLoader />
   )}
  </>
 );
};

export default CandidateJobDetails;
