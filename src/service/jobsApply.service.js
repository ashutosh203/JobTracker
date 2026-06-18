/** @format */

import axios from 'axios';
import toast from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;
export const jobsApply = async (id, navigate) => {
 try {
  const candidateToken = localStorage.getItem('candidate');

  // Login check
  if (!candidateToken) {
   navigate('/login');
   return;
  }

  const response = await axios.post(
   `${API_URL}/jobApply/${id}`,
   {},
   {
    headers: {
     Authorization: `Bearer ${candidateToken}`,
    },
   },
  );

  toast.success(response.data.message);
 } catch (error) {
  toast.error(error.response.data.message);
 }
};
