/** @format */

import { Outlet } from 'react-router-dom';
import RecruiterNavBar from '../pages/RecruiterPages/RecruiterNavBar';
import RecruiterNavLink from '../components/RecruiterComponents/RecruiterNavLink';
import Footer from '../pages/Footer';

const RecruiterLayout = () => {
    return (
     <>
      <section>
       <header
        className={`sticky bg-gray-100 top-0 z-50 left-0 w-full shadow-md`}>
        <RecruiterNavBar />
       </header>
       <main className='w-full flex flex-nowrap bg-gray-100 min-h-dvh overflow-hidden'>
        <div className='hidden md:block md:w-1/6 bg-gray-100 shadow-2xl border-r border-gray-300 relative z-10'>
         <RecruiterNavLink />
        </div>
        <div className=' w-full md:w-5/6 md:overflow-y-auto'>
         <Outlet />
        </div>
       </main>
       <Footer />
      </section>
     </>
    );
};

export default RecruiterLayout;
