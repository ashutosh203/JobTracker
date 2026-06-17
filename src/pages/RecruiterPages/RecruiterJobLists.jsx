/** @format */

import { Link2, Trash2, Undo2 } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { recruiterJobListing } from '../../service/recruiterJobListing.service';
import { useEffect, useState } from 'react';
import JobListingLoader from '../../Loaders/JobListingLoader';
import { deleteJob } from '../../service/deleteJob.service';

const RecruiterJobLists = () => {
 const [data, setData] = useState(null);
 const navigate = useNavigate();

 useEffect(() => {
  recruiterJobListing(setData);
 }, []);

 return (
  <>
   {data ? (
    <div className='w-full pt-12 sm:pt-10 px-2 sm:px-4 overflow-x-auto rounded-xl shadow-md border border-gray-200 bg-gray-100 relative'>
     {/* Back Button */}
     <div className='absolute top-2 right-2'>
      <button
       className='flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 border cursor-pointer border-gray-200 rounded-full shadow-sm hover:shadow-md bg-gray-50 transition-all duration-300'
       onClick={() => navigate('/recruiter_admin_panel')}>
       <Undo2 size={16} className='text-gray-700' />
       <span className='text-xs sm:text-sm font-medium text-gray-700'>
        Back
       </span>
      </button>
     </div>

     <table className='w-full min-w-[650px] sm:min-w-[750px]'>
      <thead>
       <tr className='bg-blue-600 text-white'>
        <th
         colSpan={3}
         className='px-3 sm:px-6 py-4 text-left text-sm sm:text-lg font-semibold'>
         Job Listings
        </th>

        <th className='px-3 sm:px-6 py-4 text-right text-xs sm:text-base'>
         Total Jobs: {data.length}
        </th>
       </tr>

       <tr className='bg-gray-100 text-gray-700'>
        <th className='px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium'>
         Job Title
        </th>

        <th className='px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium'>
         Job Type
        </th>

        <th className='px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium'>
         Job Details
        </th>

        <th className='px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium'>
         Action
        </th>
       </tr>
      </thead>

      <tbody>
       {data.map((items) => (
        <tr
         key={items._id}
         className='border-t hover:bg-gray-50 transition-colors'>
         <td className='px-3 sm:px-6 py-4 text-center text-sm'>
          {items.JobTitle}
         </td>

         <td className='px-3 sm:px-6 py-4 text-center text-sm'>
          {items.JobType}
         </td>

         <td className='px-3 sm:px-6 py-4 text-center'>
          <NavLink
           to={`/recruiter_admin_panel/ViewJobDetails/${items._id}`}
           className='flex justify-center items-center gap-1 text-blue-600 text-xs sm:text-sm hover:underline'>
           <Link2 size={16} />
           <span>View Details</span>
          </NavLink>
         </td>

         <td className='px-3 py-4'>
          <div className='flex justify-center'>
           <Trash2
            size={20}
            className='text-red-500 cursor-pointer hover:text-red-700 transition-colors'
            onClick={async () => {
             if (confirm('Are you sure you want to delete this job?')) {
              await deleteJob(items._id, setData);
             }
            }}
           />
          </div>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   ) : (
    <JobListingLoader />
   )}
  </>
 );
};

export default RecruiterJobLists;
