/** @format */

import axios from 'axios';

export const userLogIn = async (data, Navigate, setCandidateToken) => {
 try {
  const response = await axios.post('http://localhost:45000/login', {
   email: data.email,
   password: data.password,
  });
  console.log(response.data);
  const Role =
   response?.data?.recruiter?.role || response?.data?.candidate?.role;
  if (Role === 'recruiter') {
   localStorage.setItem('recruiter', response.data.token);
   Navigate('/recruiter_admin_panel');
  } else if (Role === 'candidate') {
   localStorage.setItem('candidate', response.data.token);
   setCandidateToken(response.data?.token);
   Navigate('/');
  }
 } catch (error) {
  console.log(error);

  const status = error.response?.status;

  if (status === 404) {
   alert('Email not found');
  } else if (status === 401) {
   alert('Invalid password');
  } else {
   alert(error.message);
  }
 }
};
