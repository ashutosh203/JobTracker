/** @format */

import DefaultNavBar from '../pages/DefaultNavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
function DefaultLayout() {
    
    return (
        <>
            <section>
                <header
                    className={`sticky bg-gray-100 top-0 z-50 left-0 w-full shadow-md`}>
                    <DefaultNavBar />
                </header>

                <main className='w-full min-h-screen'>
                    <Outlet />
                </main>

                <Footer />
            </section>
        </>
    );
}

export default DefaultLayout;
