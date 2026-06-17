/** @format */

import axios from 'axios';

export const deleteJob = async (id, setData) => {
 try {
  const token = localStorage.getItem('recruiter');

  const response = await axios.delete(
   `http://localhost:45000/ReSingUp/jobDelete/${id}`,
   {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   },
  );

  setData((prev) => prev.filter((job) => job._id !== id));

  alert(response.data.message);

  return response.data;
 } catch (error) {
  console.error('Delete Job Error:', error.response?.data || error.message);

  alert('Failed to delete job');
 }
};
