/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CandidateJobDetailsLoader from '../../Loaders/candidateJobDetailLoader';
import { jobsApply } from '../../service/jobsApply.service';
const API_URL = import.meta.env.VITE_API_URL;

const CandidateJobDetails = () => {
 const { id } = useParams();
 const Navigate = useNavigate();

 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchJobs = async () => {
   try {
    const response = await axios.get(`${API_URL}/jobsDetail/${id}`);

    setData(response.data.data);
   } catch (error) {
    console.error('Error fetching jobs:', error);
   }
  };

  fetchJobs();
 }, [id]);

 return (
  <>
   {data ? (
    <div className='max-w-5xl mx-auto p-4 md:p-6'>
     <div className='bg-white rounded-2xl shadow-lg overflow-hidden border'>
      {/* Header */}
      <div className='bg-blue-600 text-white p-6'>
       <h1 className='text-2xl md:text-3xl font-bold'>{data.JobTitle}</h1>

       <p className='text-blue-100 mt-2'>{data.companyName}</p>

       <div className='flex flex-wrap gap-3 mt-4'>
        <span className='px-3 py-1 rounded-full bg-white/20 text-white text-sm'>
         Open
        </span>

        <span className='px-3 py-1 rounded-full bg-white/20 text-white text-sm capitalize'>
         {data.JobType}
        </span>
       </div>
      </div>

      {/* Details */}
      <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
       <div>
        <p className='text-sm text-gray-500'>Company Name</p>
        <p className='font-semibold text-gray-800'>{data.companyName}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Location</p>
        <p className='font-semibold text-gray-800'>{data.Location}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Job Type</p>
        <p className='font-semibold text-gray-800 capitalize'>{data.JobType}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Industry Type</p>
        <p className='font-semibold text-gray-800'>{data.IndustryType}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Established</p>
        <p className='font-semibold text-gray-800'>{data.Established}</p>
       </div>

       <div>
        <p className='text-sm text-gray-500'>Organization Size</p>
        <p className='font-semibold text-gray-800'>{data.Organization}</p>
       </div>
      </div>

      {/* Address */}
      <div className='p-6 border-t'>
       <h2 className='text-lg font-semibold text-gray-800 mb-2'>
        Company Address
       </h2>

       <p className='text-gray-600 leading-relaxed'>{data.address}</p>
      </div>

      {/* Benefits */}
      <div className='p-6 border-t'>
       <h2 className='text-lg font-semibold text-gray-800 mb-3'>
        Perks & Benefits
       </h2>

       <div className='inline-block px-4 py-2 rounded-lg bg-green-100 text-green-700'>
        {data.PerksBenefits}
       </div>
      </div>

      {/* Job Details */}
      <div className='p-6 border-t'>
       <h2 className='text-lg font-semibold text-gray-800 mb-3'>Job Details</h2>

       <p className='text-gray-600 leading-7'>{data.JobDetails}</p>
      </div>

      {/* Footer */}
      <div className='p-6 border-t bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4'>
       <span className='text-sm text-gray-500'>
        Posted On:{' '}
        {new Date(data.createdAt).toLocaleDateString('en-IN', {
         day: 'numeric',
         month: 'short',
         year: 'numeric',
        })}
       </span>

       <button
        onClick={() => jobsApply(data._id, Navigate)}
        className='px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition'>
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
