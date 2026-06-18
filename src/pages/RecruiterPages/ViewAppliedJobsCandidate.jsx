/** @format */

import axios from 'axios';
import { Undo2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const ViewJobCandidateDetails = () => {
 const { id } = useParams();
 const navigate = useNavigate();

 const [data, setData] = useState([]);
 const [statusData, setStatusData] = useState({});
 const token = localStorage.getItem('recruiter');
 useEffect(() => {
  const callApi = async () => {
   try {
    const response = await axios.get(
     `${API_URL}/ReSingUp/viewAppliedJobsCandidateDetails/${id}`,
     {
      headers: {
       Authorization: `Bearer ${token}`,
      },
     },
    );


    setData(response.data.candidates);
   } catch (error) {
    console.log(error.response?.data || error.message);
   }
  };

  callApi();
 }, [id, token]);

 const updateAction = async (candidateApplyId, defaultStatus) => {
  try {
   const response = await axios.patch(
    `${API_URL}/ReSingUp/upDataCandidateStatus`,
    {
     id: candidateApplyId,
     status: statusData[candidateApplyId] || defaultStatus,
    },
    {
     headers: {
      Authorization: `Bearer ${token}`,
     },
    },
   );

   toast.success(response.data.message);
  } catch (error) {
   console.log(error.response?.data || error.message);
  }
 };




 return (
  <div className='w-full pt-12 sm:pt-10 px-2 sm:px-4 overflow-x-auto rounded-xl shadow-md border border-gray-200 bg-gray-100 relative'>
   {/* Back Button */}
   <div className='absolute top-2 right-2'>
    <button
     className='flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 border cursor-pointer border-gray-200 rounded-full shadow-sm hover:shadow-md bg-gray-50 transition-all duration-300'
     onClick={() => navigate(-1)}>
     <Undo2 size={16} className='text-gray-700' />
     <span className='text-xs sm:text-sm font-medium text-gray-700'>Back</span>
    </button>
   </div>

   <div className='hidden md:block'>
    <table className='w-full min-w-250'>
     <thead>
      <tr className='bg-blue-600 text-white'>
       <th
        colSpan={6}
        className='px-6 py-4 text-left text-sm sm:text-lg font-semibold'>
        Candidate Details
       </th>

       <th className='px-6 py-4 text-right text-xs sm:text-base'>
        Total Applicants: {data.length}
       </th>
      </tr>

      <tr className='bg-gray-100 text-gray-700'>
       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Job Title
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Candidate
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Email
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Phone
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Applied On
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Status
       </th>

       <th className='px-4 py-3 text-center text-xs sm:text-sm font-medium'>
        Action
       </th>
      </tr>
     </thead>

     <tbody>
      {data?.length > 0 ? (
       data?.map((item) => (
        <tr
         key={item._id}
         className='border-t hover:bg-gray-50 transition-colors'>
         <td className='px-4 py-4 text-center text-sm'>
          {item?.JobsId?.JobTitle}
         </td>

         <td className='px-4 py-4 text-center text-sm'>
          {item?.candidateId?.Name}
         </td>

         <td className='px-4 py-4 text-center text-sm'>
          {item?.candidateId?.email}
         </td>

         <td className='px-4 py-4 text-center text-sm'>
          {item?.candidateId?.phone}
         </td>

         <td className='px-4 py-4 text-center text-sm'>
          {new Date(item.createdAt).toLocaleDateString('en-IN', {
           day: 'numeric',
           month: 'short',
           year: 'numeric',
          })}
         </td>

         <td className='px-4 py-4 text-center'>
          <select
           value={statusData[item._id] || item.status}
           onChange={(e) => {
            setStatusData((prev) => ({
             ...prev,
             [item._id]: e.target.value,
            }));
           }}
           className='border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500'>
           <option value='Applied'>Applied</option>
           <option value='Under Review'>Under Review</option>
           <option value='Shortlisted'>Shortlisted</option>
           <option value='Interview Scheduled'>Interview Scheduled</option>
           <option value='Rejected'>Rejected</option>
           <option value='Selected'>Selected</option>
          </select>
         </td>

         <td className='px-4 py-4 text-center'>
          <button
           className='px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition'
           onClick={() => updateAction(item?._id, item.status)}>
           Update
          </button>
         </td>
        </tr>
       ))
      ) : (
       <tr>
        <td colSpan={7} className='text-center py-10 text-gray-500 text-sm'>
         No candidates have applied yet.
        </td>
       </tr>
      )}
     </tbody>
    </table>
   </div>
   {/* this is phone */}
   <div className='md:hidden'>
    {data.map((item) => (
     <div key={item._id} className='bg-white rounded-xl p-4 mb-4 shadow'>
      <p>
       <strong>Job:</strong> {item?.JobsId?.JobTitle}
      </p>

      <p>
       <strong>Candidate:</strong> {item?.candidateId?.Name}
      </p>

      <p>
       <strong>Email:</strong> {item?.candidateId?.email}
      </p>

      <p>
       <strong>Phone:</strong> {item?.candidateId?.phone}
      </p>

      <select
       value={statusData[item._id] || item.status}
       onChange={(e) =>
        setStatusData((prev) => ({
         ...prev,
         [item._id]: e.target.value,
        }))
       }
       className='w-full mt-3 border rounded-lg p-2'>
       <option value='Applied'>Applied</option>
       <option value='Under Review'>Under Review</option>
       <option value='Shortlisted'>Shortlisted</option>
       <option value='Interview Scheduled'>Interview Scheduled</option>
       <option value='Rejected'>Rejected</option>
       <option value='Selected'>Selected</option>
      </select>

      <button
       className='w-full mt-3 bg-blue-600 text-white rounded-lg py-2'
       onClick={() => updateAction(item._id, item.status)}>
       Update
      </button>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ViewJobCandidateDetails;
