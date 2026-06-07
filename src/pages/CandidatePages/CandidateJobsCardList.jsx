/** @format */
import CandidateJobCard from '../../components/CandidateComponents/CandidateJobCard';
const CandidateJobCardList = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <CandidateJobCard />
                <CandidateJobCard />
                <CandidateJobCard />
                <CandidateJobCard />
            </div>
        </div>
    );
};

export default CandidateJobCardList;
