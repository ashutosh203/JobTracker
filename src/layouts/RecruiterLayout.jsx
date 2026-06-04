/** @format */

import { Outlet } from 'react-router-dom';
import RecruiterNavBar from '../pages/RecruiterPages/RecruiterNavBar';
import RecruiterNavLink from '../components/RecruiterComponents/RecruiterNavLink';

const RecruiterLayout = () => {
    return (
        <>
            <section>
                <header className='sticky bg-gray-100 top-0 z-50 left-0 w-full '>
                    <RecruiterNavBar />
                </header>
                <main className='w-full flex flex-nowrap bg-gray-100 min-h-dvh overflow-hidden'>
                    <div className='border hidden md:w-1/6 md:block'>
                        <RecruiterNavLink />
                    </div>
                    <div className='md:border w-full md:w-5/6 md:overflow-y-auto'>
                        <Outlet />
                    </div>
                </main>
                <footer>hello</footer>
            </section>
        </>
    );
};

export default RecruiterLayout;
