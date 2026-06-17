/** @format */
import { useEffect, useState } from 'react';
import CandidateJobCard from '../../components/CandidateComponents/CandidateJobCard';
import axios from 'axios';
import JobCardSkeleton from '../../Loaders/JobCardSkeleton';
const CandidateJobCardList = () => {
 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchJobs = async () => {
   try {
    const response = await axios.get('http://localhost:45000/AllJobsDetail');

    setData(response.data.data);
   } catch (error) {
    console.error('Error fetching jobs:', error);
   }
  };

  fetchJobs();
 }, []);

 return (
  <div className='max-w-7xl mx-auto p-5'>
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    {data ? (
     data.map((Element) => (
      <CandidateJobCard key={Element._id} data={Element} />
     ))
    ) : (
     <JobCardSkeleton />
    )}
   </div>
  </div>
 );
};

export default CandidateJobCardList;
