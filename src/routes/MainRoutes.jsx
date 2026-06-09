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

function MainRoutes() {
    return (
        <>
            <Routes>
                {/* this is a default page layout */}
                <Route path='/' element={<DefaultLayout />}>
                    <Route index element={<CandidateJobCardList />} />
                    <Route path='jobDetail' element={<CandidateJobDetails />} />
                    <Route path='user&role' element={<UserSelectionRole />} />
                    <Route path='SingUp/:role' element={<SingUpPage />} />
                    <Route path='ReSingUp' element={<RecruiterSignup />} />
                    <Route path='login' element={<LogInPage />} />
                </Route>
                {/* this is a Recruiter Routes */}
                <Route
                    path='/recruiter_admin_panel'
                    element={<RecruiterLayout />}>
                    {/* Recruiter Profile route */}

                    <Route path='profile' element={<RecruiterProfile />} />
                    {/* default Dashboard route */}

                    <Route index element={<RecruiterDashboard />} />
                    {/* job post form route */}

                    <Route
                        path='JobPostForm'
                        element={<RecruiterJobPostForm />}
                    />
                    {/* job list route */}

                    <Route path='jobList' element={<RecruiterJobLists />} />
                </Route>
            </Routes>
        </>
    );
}

export default MainRoutes;
