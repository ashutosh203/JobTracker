/** @format */

import axios from 'axios';

export const recruiterJobDetail = async (id, setJob) => {
 try {
  const token = localStorage.getItem('recruiter');

  const response = await axios.get(
   `http://localhost:45000/ReSingUp/jobDetails/${id}`,
   {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   },
  );

  setJob(response.data.job);

  return response.data;
 } catch (error) {
  console.error(
   'Error fetching job details:',
   error.response?.data || error.message,
  );

  throw error;
 }
};
