
import { LogOut, UserRound } from 'lucide-react';
// import { useContext } from 'react';
// import JobContext from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';

const CandidateNavRightSide = ({ setCandidateToken }) => {
 const Navigate = useNavigate();
 const LogOutOnclick = async () => {
  const removeToken = await localStorage.removeItem('candidate');
  await setCandidateToken(removeToken);
   Navigate('/');
 };
 return (
  <div className='md:flex items-center justify-center gap-3 hidden'>
   {/* this is a Recruiter profile icon */}
   <button className='px-3 py-1.5 rounded-lg text-cyan-400 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-cyan-500/20 shadow-2xs bg-cyan-100/20'>
    <UserRound size={20} />
   </button>

   <button
    className='px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400  border-red-500/30 hover:scale-110 transition-all cursor-pointer ease-in-out duration-150 shadow-red-500/20 shadow-2xs'
    onClick={LogOutOnclick}>
    <LogOut size={20} />
   </button>
  </div>
 );
};

export default CandidateNavRightSide
