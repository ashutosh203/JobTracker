/** @format */

import axios from 'axios';

export const RecruiterProfileData = async (setProfileData) => {
 try {
  const token = localStorage.getItem('recruiter');

  if (!token) {
   throw new Error('Recruiter token not found');
  }

  const response = await axios.get(
   'http://localhost:45000/ReSingUp/recruiterProfile',
   {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   },
  );

  console.log(response.data.data)
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
