/** @format */

import {  useNavigate } from 'react-router-dom';
import CandidateNavCenter from '../components/CandidateComponents/CandidateNavCenter';
// import CandidateNavRightSide from '../components/CandidateComponents/CandidateNavRightSide';
import JobTrackerLogo from '../components/JobTrackerLogo';

const DefaultNavBar = () => {
    const Navigate = useNavigate();
    return (
        <>
            <nav className='flex items-center justify-between border-slate-700 px-4 md:px-8 h-12 md:h-16 shadow-2xs'>
                <JobTrackerLogo path='/' />
                <CandidateNavCenter />
                {/* <CandidateNavRightSide /> */}
                <div>
                    <button
                        className='px-5 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition'
                        onClick={() => Navigate('/user&role')}>
                        Login / Sign Up
                    </button>
                </div>
            </nav>
        </>
    );
};

export default DefaultNavBar;
