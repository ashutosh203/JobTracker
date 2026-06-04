/** @format */
import { NavLink } from 'react-router-dom';

const RecruiterNavLink = () => {
    const links = [
        {
            name: 'Post Job',
            link: '/recruiter_admin_panel/JobPostForm',
        },
        {
            name: 'Applicants',
            link: '#',
        },
    ];

    return (
        <div className='w-full flex flex-col gap-3 p-3 bg-gray-50'>
            {links.map((e) => (
                <NavLink
                    key={e.name}
                    to={e.link}
                    className={({ isActive }) =>
                        `
            block
            w-full
            text-center
            text-lg
            font-medium
            py-3
            rounded-xl
            transition-all
            duration-300
            border
            ${
                isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 hover:scale-[1.02]'
            }
          `
                    }>
                    {e.name}
                </NavLink>
            ))}
        </div>
    );
};

export default RecruiterNavLink;
