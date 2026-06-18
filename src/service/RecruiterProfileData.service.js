/** @format */

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const RecruiterProfileData = async (setProfileData) => {
 try {
  const token = localStorage.getItem('recruiter');

  if (!token) {
   throw new Error('Recruiter token not found');
  }

  const response = await axios.get(`${API_URL}/ReSingUp/recruiterProfile`, {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

  setProfileData({
   data: response.data.data,
   success: true,
  });
 } catch (error) {
  console.error('Recruiter Profile Error:', error);

  setProfileData({
   data: null,
   success: false,
  });
 }
};
