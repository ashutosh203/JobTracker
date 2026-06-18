/** @format */

import axios from 'axios';
import toast from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;
export const deleteJob = async (id, setData) => {
 try {
  const token = localStorage.getItem('recruiter');

  const response = await axios.delete(`${API_URL}/ReSingUp/jobDelete/${id}`, {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

  setData((prev) => prev.filter((job) => job._id !== id));

  toast.success(response.data.message);

  return response.data;
 } catch (error) {
  console.error('Delete Job Error:', error.response?.data || error.message);

  toast.error('Failed to delete job');
 }
};
