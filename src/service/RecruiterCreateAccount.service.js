/** @format */

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const RecruiterCreateAccount = async (
 data,
 setRecruiterToken,
 setError,
 Navigate,
) => {
 try {
  const response = await axios.post(
   `${API_URL}/ReSingUp/recruiterAccountCreate`,
   {
    role: data.role,
    companyName: data.companyName,
    email: data.email,
    fullName: data.fullName,
    password: data.password,
    phoneNumber: data.phoneNumber,
    location: data.companyLocation,
    address: data.Address,
   },
  );
  await localStorage.setItem('recruiter', response.data.data.token);
  await setRecruiterToken('recruiter');
  await Navigate('/recruiter_admin_panel', { replace: true });
 } catch (error) {
  console.log(error.response.data);
  const data = error.response.data;
  if (data?.email) {
   setError('email', {
    type: 'server',
    message: 'Email already registered',
   });
  }
 }
};
