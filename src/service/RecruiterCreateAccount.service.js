/** @format */

import axios from 'axios';

export const RecruiterCreateAccount = async (data, setRecruiterToken) => {
 try {
  const response = await axios.post(
   'http://localhost:45000/ReSingUp/recruiterAccountCreate',
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
  console.log(response.data);
  await localStorage.setItem('recruiter', response.data.data.token);
  await setRecruiterToken('recruiter');
 } catch (error) {
  console.log(error);
 }
};
