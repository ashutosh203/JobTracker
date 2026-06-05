/** @format */
import { LogOut } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Menu } from 'lucide-react';

import JobTrackerLogo from '../../components/JobTrackerLogo';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RecruiterNavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <nav className='flex items-center justify-between border-slate-700 px-4 md:px-8 h-12 md:h-16 shadow-2xs'>
            {/* Logo */}
            <JobTrackerLogo />
            {/* Right Side */}
            <div className='md:flex items-center justify-center gap-3 hidden '>
                <button
                    onClick={() => navigate('/recruiter_admin_panel/profile')}
                    className='px-3 py-1.5 rounded-lg text-cyan-400 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-cyan-500/20 shadow-2xs bg-cyan-100/20'>
                    <UserRound size={20} />
                </button>

                <button className='px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400  border-red-500/30 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-red-500/20 shadow-2xs'>
                    <LogOut size={20} />
                </button>
            </div>
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
                    className='md:hidden absolute top-12 right-0 w-full h-[calc(100vh-48px)] bg-transparent'>
                    <div
                        className='absolute top-0 right-0 flex flex-col gap-2.5 w-2/4 h-full p-6 bg-white/55 backdrop-blur-md shadow-2xl '
                        onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-xl font-semibold text-gray-800 mb-0 '>
                            Menu
                        </h2>
                        <Link
                            to='/recruiter_admin_panel/profile'
                            className='px-5 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border '
                            onClick={closeMenu}>
                            Profile
                        </Link>
                        <Link
                            to='/recruiter_admin_panel/JobPostForm'
                            className='px-5 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border '
                            onClick={closeMenu}>
                            Post Job
                        </Link>

                        <Link
                            to='/recruiter_admin_panel/jobList'
                            className='px-4 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border'
                            onClick={closeMenu}>
                            Job Lists
                        </Link>

                        <Link
                            to='#'
                            className='px-4 py-1 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border'
                            onClick={closeMenu}>
                            Applicants
                        </Link>
                        <button className='text-center w-full relative px-1 py-1.5 rounded-lg bg-red-500/80 text-black-600 border-red-500/30 flex items-center'>
                            <LogOut className= "relative left-2/5" size={20} />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default RecruiterNavBar;
