/** @format */

import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import RecruiterLayout from '../layouts/RecruiterLayout';
import UserLayout from '../layouts/UserLayout';
import RecruiterJobPostForm from '../pages/RecruiterPages/RecruiterJobPostForm';
import RecruiterJobLists from '../pages/RecruiterPages/RecruiterJobLists';

function MainRoutes() {
    return (
        <>
            <Routes>
                {/* this is a default page layout */}
                <Route path='/' element={<DefaultLayout />}></Route>
                {/* this is a Recruiter Routes */}
                <Route
                    path='/recruiter_admin_panel'
                    element={<RecruiterLayout />}>
                    {/* <Route index element={<RecruiterDashboard />} /> */}
                    <Route
                        path='JobPostForm'
                        element={<RecruiterJobPostForm />}
                    />
                    <Route path='jobList' element={ <RecruiterJobLists/>} />
                </Route>
                {/* this is  a UserLayout */}
                <Route path='/jobs' element={<UserLayout />} />
            </Routes>
        </>
    );
}

export default MainRoutes;
