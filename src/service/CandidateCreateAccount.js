/** @format */

import axios from 'axios';
export const CandidateCreateAccount = async (data, setCandidateToken) => {
 try {
  const response = await axios.post('http://localhost:45000/createAccount', {
   role: data['role'],
   name: data['FullName'],
   email: data['Email'],
   phone: data['PhoneNumber'],
   password: data['password'],
  });
  await localStorage.setItem('candidate', response.data?.data.token);
  await setCandidateToken(localStorage.getItem('candidate'));
 } catch (error) {
  console.log(error);
 }
};
