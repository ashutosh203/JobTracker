/** @format */

import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export const recruiterJobDetail = async (id, setJob) => {
 try {
  const token = localStorage.getItem('recruiter');

  const response = await axios.get(`${API_URL}/ReSingUp/jobDetails/${id}`, {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

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
