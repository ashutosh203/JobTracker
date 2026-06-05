/** @format */
import { Filter, Undo2 } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useContext } from 'react';
import JobContext from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';
const RecruiterJobLists = () => {
    const { jobsData } = useContext(JobContext);
    const navigate = useNavigate();
    return (
        <div className='w-full pt-10 px-2 overflow-x-auto rounded-xl shadow-md border border-gray-200 bg-gray-100 relative'>
            <div className='absolute top-0.5 right-2'>
                <button
                    className='flex items-center gap-2 px-3.5 py-1.5 border cursor-pointer border-gray-200 rounded-full shadow-sm hover:shadow-md bg-gray-50 transition-all duration-300'
                    onClick={() => navigate('/recruiter_admin_panel')}>
                    <Undo2 size={18} className='text-gray-700' />
                    <span className='text-sm font-medium text-gray-700'>
                        Back
                    </span>
                </button>
            </div>
            <table className='w-full min-w-175'>
                <thead>
                    <tr className='bg-blue-600 text-white '>
                        <th
                            colSpan={4}
                            className='px-6 py-4 text-left text-lg font-semibold'>
                            Job Listings
                        </th>
                        <th className='px-6 py-4 text-right'>Total Jobs: 12</th>
                    </tr>

                    <tr className='bg-gray-100 text-gray-700'>
                        <th className='px-6 py-3 text-left font-medium'>
                            Job Title
                        </th>
                        <th className='px-6 py-3 text-left font-medium'>
                            Job Type
                        </th>
                        <th className='px-6 py-3 text-left font-medium'>
                            Candidates Details
                        </th>
                        <th className='px-6 py-3 text-left font-medium'>
                            Action
                        </th>
                        <th className='px-6 py-3 flex items-center justify-center text-left font-medium'>
                            <Filter size={20} className='inline' /> filter
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {jobsData.map((items) => (
                        <tr
                            key={items.companyName}
                            className='border-t hover:bg-gray-50 transition-colors'>
                            <td className='px-6 py-4'>{items.JobTitle}</td>
                            <td className='px-6 py-4'>{items.JobType}</td>
                            <td className='px-6 py-4'>25 Applied</td>
                            <td className='px-6 py-4'>
                                <button className='px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                                    View
                                </button>
                            </td>
                            <td className='flex items-center justify-center px-3 pt-4'>
                                <Trash2 size={24} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecruiterJobLists;
