/** @format */
import { LogOut } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Menu } from 'lucide-react';

import JobTrackerLogo from '../../components/JobTrackerLogo';

const RecruiterNavBar = () => {
    return (
        <nav className='flex items-center justify-between border-slate-700 px-4 md:px-8 h-12 md:h-16 shadow-2xs'>
            {/* Logo */}
            <JobTrackerLogo />

            {/* Right Side */}
            <div className='md:flex items-center justify-center gap-3 hidden '>
                <button className='px-3 py-1.5 rounded-lg text-cyan-400 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-cyan-500/20 shadow-2xs bg-cyan-100/20'>
                    <UserRound size={20} />
                </button>

                <button className='px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400  border-red-500/30 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-red-500/20 shadow-2xs'>
                    <LogOut size={20} />
                </button>
            </div>

            <div className='md:hidden '>
                <button className='flex items-center justify-center'>
                    <Menu size={26} />
                </button>
            </div>
        </nav>
    );
};

export default RecruiterNavBar;
