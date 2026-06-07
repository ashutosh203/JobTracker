
import { LogOut, UserRound } from 'lucide-react';

const CandidateNavRightSide = () => {
  return (
      <div className='md:flex items-center justify-center gap-3 hidden'>
          {/* this is a Recruiter profile icon */}
          <button className='px-3 py-1.5 rounded-lg text-cyan-400 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-cyan-500/20 shadow-2xs bg-cyan-100/20'>
              <UserRound size={20} />
          </button>

          <button className='px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400  border-red-500/30 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-red-500/20 shadow-2xs'>
              <LogOut size={20} />
          </button>
      </div>
  );
}

export default CandidateNavRightSide
