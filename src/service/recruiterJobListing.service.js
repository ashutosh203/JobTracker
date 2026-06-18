/** @format */

import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export const recruiterJobListing = async (setData) => {
 try {
  const token = localStorage.getItem('recruiter');

  const response = await axios.get(`${API_URL}/ReSingUp/jobListing`, {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

  const jobs = response.data.jobs;

  if (jobs && jobs.length > 0) {
   setData(jobs);
  } else {
   setData([]);
  }
 } catch (error) {
  console.error('Job Listing Error:', error.response?.data || error.message);

  setData([]);
 }
};
