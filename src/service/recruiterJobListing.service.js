/** @format */

import axios from 'axios';

export const recruiterJobListing = async (
  setData,

) => {
  try {
    const token = localStorage.getItem('recruiter');

    const response = await axios.get(
      'http://localhost:45000/ReSingUp/jobListing',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const jobs = response.data.jobs;

    if (jobs && jobs.length > 0) {
      setData(jobs);
    } else {
      setData([]);
    }
  } catch (error) {
    console.error(
      'Job Listing Error:',
      error.response?.data || error.message
    );

    setData([]);
  }
};