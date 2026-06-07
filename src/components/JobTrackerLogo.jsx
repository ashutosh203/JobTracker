/** @format */

import { useNavigate } from 'react-router-dom';

const JobTrackerLogo = ({path}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1
                className='text-3xl font-bold cursor-pointer tracking-wide'
                onClick={() => navigate(path)}>
                <span className='text-cyan-400 text-4xl'>J</span>ob
                <span className='text-cyan-400 text-4xl ml-1'>T</span>racker
            </h1>
        </div>
    );
};

export default JobTrackerLogo;
