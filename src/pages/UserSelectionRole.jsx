/** @format */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import JobContext from '../context/JobContext';

const UserSelectionRole = () => {
    const { candidateData, setCandidateData } = useContext(JobContext);

    const Navigate = useNavigate();

    const onchange = (event) => {
        setCandidateData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    const handler = (event) => {
        event.preventDefault();
        if (candidateData.role === 'candidate') {
            Navigate('/SingUp');
        } else {
            Navigate('/ReSingUp');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border p-8'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-gray-800'>
                        Welcome to JobTracker
                    </h2>
                    <p className='text-gray-500 mt-2'>
                        Choose how you want to continue
                    </p>
                </div>

                <form onSubmit={handler} className='space-y-4'>
                    <label className='flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition'>
                        <input
                            type='radio'
                            name='role'
                            value='candidate'
                            className='w-4 h-4'
                            onChange={onchange}
                        />
                        <div>
                            <h3 className='font-medium text-gray-800'>
                                Candidate
                            </h3>
                            <p className='text-sm text-gray-500'>
                                Find and apply for jobs
                            </p>
                        </div>
                    </label>

                    <label className='flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition'>
                        <input
                            type='radio'
                            name='role'
                            value='recruiter'
                            className='w-4 h-4'
                            onChange={onchange}
                        />
                        <div>
                            <h3 className='font-medium text-gray-800'>
                                Recruiter
                            </h3>
                            <p className='text-sm text-gray-500'>
                                Post jobs and manage applicants
                            </p>
                        </div>
                    </label>

                    <button
                        type='submit'
                        className='w-full mt-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserSelectionRole;
