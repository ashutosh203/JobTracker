/** @format */
import { useContext } from 'react';
import JobContext from '../context/JobContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const UserSelectionRole = () => {
    const {setCandidateData } = useContext(JobContext);
    const Navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            role: '',
        },
    });

    const onSubmit = (data) => {
        setCandidateData((prev) => ({ ...prev, role: data.role }));
        if (data.role === "candidate") {
            Navigate(`/SingUp/${data.role}`);
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

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    {errors.role && (
                        <p className='text-red-500 text-sm mb-4'>
                            {errors.role.message}
                        </p>
                    )}
                    <label className='flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition'>
                        <input
                            type='radio'
                            {...register('role', {
                                required: 'name is required',
                            })}
                            value='candidate'
                            className='w-4 h-4'
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
                            {...register('role', {
                                required: 'Please select a role to continue',
                            })}
                            value='recruiter'
                            className='w-4 h-4'
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
