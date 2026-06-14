/** @format */

import axios from 'axios';

export const JobCreate = async (recruiterInputField) => {
 try { 
  const token = await localStorage.getItem('recruiter');

  console.log(recruiterInputField);

   await axios.post(
   'http://localhost:45000/ReSingUp/jobsCreate',

   recruiterInputField, // this is a data

   {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   },
  );
 } catch (error) {
 console.log(error)
}
};
