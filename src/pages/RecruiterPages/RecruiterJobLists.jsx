/** @format */
import { Filter } from 'lucide-react';
import { Trash2 } from 'lucide-react';
const RecruiterJobLists = () => {
    return (
        <div className='w-full mt-3.5 flex items-center justify-center overflow-x-auto rounded-xl shadow-md border border-gray-200 bg-white'>
            <table className='w-full min-w-175'>
                <thead>
                    <tr className='bg-blue-600 text-white'>
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
                    <tr className='border-t hover:bg-gray-50 transition-colors'>
                        <td className='px-6 py-4'>Frontend Developer</td>
                        <td className='px-6 py-4'>Full Time</td>
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

                    <tr className='border-t hover:bg-gray-50 transition-colors'>
                        <td className='px-6 py-4'>React Developer</td>
                        <td className='px-6 py-4'>Remote</td>
                        <td className='px-6 py-4'>18 Applied</td>
                        <td className='px-6 py-4'>
                            <button className='px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                                View
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecruiterJobLists;
