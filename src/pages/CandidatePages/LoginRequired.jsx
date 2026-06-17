/** @format */

import { useNavigate } from "react-router-dom";

const LoginRequired = () => {
 const navigate = useNavigate();

 return (
  <div className='min-h-[70vh] flex items-center justify-center'>
   <div className='bg-white p-8 rounded-2xl shadow-md border text-center max-w-md'>
    <h2 className='text-2xl font-bold text-slate-800'>Login Required</h2>

    <p className='mt-3 text-slate-600'>
     Please login to view your applied jobs.
    </p>

    <button
     onClick={() => navigate('/login')}
     className='mt-5 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700'>
     Go to Login
    </button>
   </div>
  </div>
 );
};

export default LoginRequired;
