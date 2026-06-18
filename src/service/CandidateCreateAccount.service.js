/** @format */

import axios from 'axios';
import toast from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;
export const CandidateCreateAccount = async (
 data,
 setCandidateToken,
 Navigate,
 setError,
) => {
 try {
  const response = await axios.post(`${API_URL}/createAccount`, {
   role: data['role'],
   name: data['FullName'],
   email: data['Email'],
   phone: data['PhoneNumber'],
   password: data['password'],
  });
  await localStorage.setItem('candidate', response.data?.data.token);
  await setCandidateToken(localStorage.getItem('candidate'));
  toast.success(response.data.message);
  Navigate('/');
 } catch (error) {
  const data = error?.response?.data;
  if (data?.email && data?.phone) {
   setError('PhoneNumber', {
    type: 'server',
    message: 'Phone already registered',
   });
   setError('Email', {
    type: 'server',
    message: 'Email already registered',
   });
  } else if (data?.email) {
   setError('Email', {
    type: 'server',
    message: 'Email already registered',
   });
  } else if (data?.phone) {
   setError('PhoneNumber', {
    type: 'server',
    message: 'Phone already registered',
   });
  } else {
   toast.error(data.message);
  }
 }
};
