import { Link } from "react-router-dom";

/** @format */
const CandidateJobCard = () => {
    return (
        <div className='w-full bg-white border border-gray-200 rounded-2xl p-4  hover:border-blue-300 hover:shadow-md transition-all duration-200'>
            <div className='flex items-start justify-between'>
                <div>
                    <h2 className='text-base font-semibold text-gray-800'>
                        Frontend Developer
                    </h2>

                    <p className='text-sm text-gray-600'>ABC Technologies</p>
                </div>

                <span className='text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700'>
                    Open
                </span>
            </div>

            <div className='mt-3 flex flex-wrap gap-3 text-sm text-gray-500'>
                <span>📍 Noida</span>
                <span>💰 ₹8-12 LPA</span>
                <span>🕒 Full Time</span>
            </div>

            <div className='mt-4 pt-3 border-t flex items-center justify-between'>
                <span className='text-xs text-gray-400'>Posted 2 days ago</span>

                <Link
                    to={'/jobDetail'}
                    className='text-sm font-medium text-blue-600 hover:text-blue-700'>
                    View Details →
                </Link>
            </div>
        </div>
    );
};
export default CandidateJobCard;
