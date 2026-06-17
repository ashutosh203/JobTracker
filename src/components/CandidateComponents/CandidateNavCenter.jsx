/** @format */

import { NavLink } from 'react-router-dom';

const CandidateNavCenter = () => {
 return (
  <div className='flex items-center gap-7'>
   <NavLink
    to='/'
    className={({ isActive }) =>
     `pb-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
      isActive
       ? 'border-blue-600 text-blue-600'
       : 'border-transparent text-gray-700 hover:text-blue-600'
     }`
    }>
    home
   </NavLink>

   <NavLink
    to='/applyJobs'
    className={({ isActive }) =>
     `pb-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
      isActive
       ? 'border-blue-600 text-blue-600'
       : 'border-transparent text-gray-700 hover:text-blue-600'
     }`
    }>
    Applied Jobs
   </NavLink>
   {/* <NavLink
    to='/a'
    className={({ isActive }) =>
     `pb-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
      isActive
       ? 'border-blue-600 text-blue-600'
       : 'border-transparent text-gray-700 hover:text-blue-600'
     }`
    }>
    Favorites
   </NavLink> */}
  </div>
 );
};

export default CandidateNavCenter;
