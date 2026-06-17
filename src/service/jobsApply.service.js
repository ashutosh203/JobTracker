/** @format */

import axios from 'axios';

export const jobsApply = async (id, navigate) => {
 try {
  const candidateToken = localStorage.getItem('candidate');

  // Login check
  if (!candidateToken) {
   navigate('/login');
   return;
  }

  const response = await axios.post(
   `http://localhost:45000/jobApply/${id}`,
   {},
   {
    headers: {
     Authorization: `Bearer ${candidateToken}`,
    },
   },
  );

  alert(response.data.message);
 } catch (error) {
  alert(error.response.data.message);
 }
};
