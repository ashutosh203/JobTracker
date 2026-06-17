/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import AppliedJobsLoader from '../../Loaders/AppliedJobsLoader';
import LoginRequired from './LoginRequired';
import { useNavigate } from 'react-router-dom';

const AppliedJobs = () => {
  const [data, setData] = useState(null);
  const Navigate = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem('candidate');
  if (token) {
   const fetchAppliedJobs = async () => {
    try {
     const response = await axios.get(
      'http://localhost:45000/candidateAppliedJobsDetails',
      {
       headers: {
        Authorization: `Bearer ${token}`,
       },
      },
     );

     console.log(response.data);
     setData(response.data);
    } catch (error) {
     console.log(error);
    }
   };
   fetchAppliedJobs();
  }
 }, []);

 if (!localStorage.getItem('candidate')) {
  return <LoginRequired />;
 }

 const getStatusStyle = (status) => {
  switch (status) {
   case 'Applied':
    return 'bg-blue-100 text-blue-700';
   case 'Under Review':
    return 'bg-yellow-100 text-yellow-700';
   case 'Shortlisted':
    return 'bg-green-100 text-green-700';
   case 'Rejected':
    return 'bg-red-100 text-red-700';
   default:
    return 'bg-gray-100 text-gray-700';
  }
 };

 return (
  <>
   {data ? (
    <section className='max-w-7xl mx-auto px-4 py-6'>
     <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
      <h1 className='text-2xl font-bold text-slate-800'>Applied Jobs</h1>

      <div className='mt-3 md:mt-0'>
       <span className='px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium'>
        Total Applications: {data?.totalJobs}
       </span>
      </div>
     </div>

     <div className='grid gap-5'>
      {data?.jobs?.map((job) => (
       <div
        key={job._id}
        className='bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
         <div>
          <h2 className='text-xl font-semibold text-slate-800'>
           {job?.JobsId?.JobTitle}
          </h2>

          <p className='text-slate-600 mt-1'>{job?.JobsId?.companyName}</p>

          <div className='flex flex-wrap gap-4 mt-3 text-sm text-slate-500'>
           <span>📍 {job?.JobsId?.Location}</span>
           <span>💼 {job?.JobsId?.JobType}</span>
           {/* <span>💰 {job.salary}</span> */}
          </div>

          <p className='mt-3 text-sm text-slate-500'>
           Applied on:{' '}
           {new Date(job.createdAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
           })}
          </p>
         </div>

         <div className='flex flex-col items-start lg:items-end gap-3'>
          <span
           className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
            job.status,
           )}`}>
           {job.status}
          </span>

              <button className='px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition'
                onClick={() => {
                  Navigate(`/jobDetail/${job?.JobsId?._id}`);
              }}
              >
           View Details
          </button>
         </div>
        </div>
       </div>
      ))}
     </div>
    </section>
   ) : (
    <AppliedJobsLoader />
   )}
  </>
 );
};

export default AppliedJobs;
