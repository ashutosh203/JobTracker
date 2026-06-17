/** @format */

import { Link, useNavigate } from 'react-router-dom';
import CandidateNavCenter from '../components/CandidateComponents/CandidateNavCenter';
import CandidateNavRightSide from '../components/CandidateComponents/CandidateNavRightSide';
import JobTrackerLogo from '../components/JobTrackerLogo';
import { LogOut, Menu, UserPlus } from 'lucide-react';
import { useContext, useState } from 'react';
import JobContext from '../context/JobContext';

const DefaultNavBar = () => {
 const Navigate = useNavigate();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const closeMenu = () => setIsMenuOpen(false);
 const { candidateToken, setCandidateToken } = useContext(JobContext);
 return (
  <>
   <nav className='sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 md:h-18 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'>
    <JobTrackerLogo path='/' />

    <div className='hidden md:block'>
     <CandidateNavCenter />
    </div>

    <div className='hidden md:flex items-center '>
     {candidateToken ? (
      <CandidateNavRightSide setCandidateToken={setCandidateToken} />
     ) : (
      <button
       className='px-5 md:px-6 py-2 md:py-2.5 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex  justify-center items-center gap-1'
       onClick={() => Navigate('/login')}>
       <UserPlus size={20} />
       Login/SignUp
      </button>
     )}
    </div>
    {/* this is a phone size */}
    <div className='md:hidden '>
     <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className='flex items-center justify-center'>
      <Menu size={26} />
     </button>
    </div>
    {isMenuOpen && (
     <div
      onClick={closeMenu}
      className='md:hidden absolute top-16 right-0 w-full h-[calc(100vh-48px)] bg-gray-50/50'>
      <div
       className='absolute top-0 right-0 flex flex-col gap-2.5 w-2/4 h-full p-6 bg-white backdrop-blur-md shadow-2xl '
       onClick={(e) => e.stopPropagation()}>
       <h2 className='text-xl font-semibold text-gray-800 mb-0 '>Menu</h2>
       <Link
        to='/'
        className='px-5 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border '
        onClick={closeMenu}>
        Home
       </Link>
       <Link
        to='/applyJobs'
        className='px-5 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border '
        onClick={closeMenu}>
        Applied Jobs
       </Link>

       {candidateToken ? (
        <button
         className='text-center w-full relative px-1 py-1.5 rounded-lg bg-red-500/80 text-black-600 border-red-500/30 flex items-center'
         onClick={() => {
          const removeToken = localStorage.removeItem('candidate');
          setCandidateToken(removeToken);
          Navigate('/');
         }}>
         <LogOut className='relative left-2/5' size={20} />
        </button>
       ) : (
        <button
         className='text-center w-full relative px-1 py-1.5 rounded-lg bg-red-500/80 text-black-600 border-red-500/30 flex items-center'
         onClick={() => Navigate('/login')}>
         <UserPlus className='relative left-2/5' size={20} />
        </button>
       )}
      </div>
     </div>
    )}
   </nav>
  </>
 );
};

export default DefaultNavBar;
