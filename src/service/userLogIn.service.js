/** @format */

import axios from 'axios';
import toast from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;

export const userLogIn = async (data, Navigate, setCandidateToken) => {
 try {
  const response = await axios.post(`${API_URL}/login`, {
   email: data.email,
   password: data.password,
  });

  const Role = response?.data?.role || response?.data?.role;
  if (Role === 'recruiter') {
   localStorage.setItem('recruiter', response.data.token);
   toast.success(response.data.message);
   Navigate('/recruiter_admin_panel');
  } else if (Role === 'candidate') {
   localStorage.setItem('candidate', response.data.token);
   setCandidateToken(response.data?.token);
   toast.success(response.data.message);
   Navigate('/');
  }
 } catch (error) {
  console.log(error);

  const status = error.response?.status;

  if (status === 404) {
   toast.error('Email not found');
  } else if (status === 401) {
   toast.error('Invalid password');
  } else {
   toast.error(error.response.data.message);
  }
 }
};
