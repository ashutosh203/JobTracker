/** @format */

import DefaultNavBar from '../pages/DefaultNavBar';
import { Outlet } from 'react-router-dom';
function DefaultLayout() {
    return (
        <>
            <section>
                <header>
                    <DefaultNavBar />
                </header>

                <main>
                    <div>
                        <p>list</p>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </main>

                <footer>
                    <p>this is a footer</p>
                </footer>
            </section>
        </>
    );
}

export default DefaultLayout;
