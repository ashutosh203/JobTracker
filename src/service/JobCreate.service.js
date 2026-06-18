/** @format */

import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

export const JobCreate = async (recruiterInputField) => {
 try {
  const token = await localStorage.getItem('recruiter');


  await axios.post(
   `${API_URL}/ReSingUp/jobsCreate`,

   recruiterInputField, // this is a data

   {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   },
  );
  toast.success('Job Post Successfully')
 } catch (error) {
  console.log(error);
 }
};
