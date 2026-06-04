/** @format */

import { Link } from 'react-router-dom';
import JobTrackerLogo from '../components/JobTrackerLogo';

const DefaultNavBar = () => {
  return (
    <>
      <nav className='bg-amber-200 flex justify-around'>
        <JobTrackerLogo />
        <div>
          <Link to={'/recruiter_admin_panel'}>admin panel</Link>
        </div>
      </nav>
    </>
  );
};

export default DefaultNavBar;
