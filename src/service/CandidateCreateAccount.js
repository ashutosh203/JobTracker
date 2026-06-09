/** @format */

import axios from 'axios';
export const CandidateCreateAccount =async (data) => {
 try {
  const response = await axios.post('http://localhost:45000/createAccount', {
   role: data['role'],
   name: data['FullName'],
   email: data['Email'],
   phone: data['PhoneNumber'],
   password: data['password'],
  });


   alert(response.data.message);

 } catch (error) {
  console.log(error);
 }
};
