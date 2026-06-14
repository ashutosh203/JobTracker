/** @format */

import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
 const candidateToken = localStorage.getItem('candidate');
 const recruiterToken = localStorage.getItem('recruiter');

 if (recruiterToken) {
  return <Navigate to='/recruiter_admin_panel' replace />;
 }

 if (candidateToken) {
  return <Navigate to='/' replace />;
 }

 return <Outlet />;
}

export default PublicRoute;
