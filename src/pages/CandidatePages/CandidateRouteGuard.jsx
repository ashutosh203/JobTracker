/** @format */

import { Navigate, Outlet } from 'react-router-dom';

const CandidateRouteGuard = () => {
 const recruiterToken = localStorage.getItem('recruiter');

 return recruiterToken ? (
  <Navigate to='/recruiter_admin_panel' replace />
 ) : (
  <Outlet />
 );
};

export default CandidateRouteGuard;
