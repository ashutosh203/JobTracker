/** @format */

import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import RecruiterLayout from '../layouts/RecruiterLayout';
// import UserLayout from '../layouts/UserLayout';
import RecruiterJobPostForm from '../pages/RecruiterPages/RecruiterJobPostForm';
import RecruiterJobLists from '../pages/RecruiterPages/RecruiterJobLists';
import RecruiterDashboard from '../pages/RecruiterPages/RecruiterDashboard';
import RecruiterProfile from '../pages/RecruiterPages/RecruiterProfile';
import CandidateJobCardList from '../pages/CandidatePages/CandidateJobsCardList';
import CandidateJobDetails from '../pages/CandidatePages/CandidateJobDetails';
import SingUpPage from '../pages/SingUpPage';
import LogInPage from '../pages/LogInPage';
import UserSelectionRole from '../pages/UserSelectionRole';
import RecruiterSignup from '../pages/RecruiterPages/RecruiterSignup';
import PublicRoute from '../pages/PublicRoute';
import RecruiterProtectedRoute from '../pages/RecruiterPages/RecruiterProtectedRoute';

function MainRoutes() {
 return (
  <>
   <Routes>
    {/* this is a default page layout */}
    <Route path='/' element={<DefaultLayout />}>
     <Route index element={<CandidateJobCardList />} />
     <Route path='jobDetail' element={<CandidateJobDetails />} />
    </Route>
    {/* ------------------------------------------------------------------------------------------- */}
    <Route element={<PublicRoute />}>
     <Route path='user&role' element={<UserSelectionRole />} />
     <Route path='SingUp/:role' element={<SingUpPage />} />
     <Route path='ReSingUp/:role' element={<RecruiterSignup />} />
     <Route path='login' element={<LogInPage />} />
    </Route>
    {/*---------------------------------------------------------------------------------------------*/}
    {/* this is a Recruiter Routes */}
    <Route element={<RecruiterProtectedRoute/>}>
     <Route path='/recruiter_admin_panel' element={<RecruiterLayout />}>
      <Route index element={<RecruiterDashboard />} />
      <Route path='profile' element={<RecruiterProfile />} />
      <Route path='JobPostForm' element={<RecruiterJobPostForm />} />
      <Route path='jobList' element={<RecruiterJobLists />} />
     </Route>
    </Route>
   </Routes>
  </>
 );
}

export default MainRoutes;
