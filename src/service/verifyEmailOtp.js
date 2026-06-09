/** @format */

import axios from 'axios';

const verifyEmailOtp = async (event, value, setResponse) => {
 event.preventDefault();

 try {
  const response = await axios.post('http://localhost:45000/verifyOtp', {
   email: value[0],
   otp: value[1],
  });

  console.log(response.data);
  alert(response.data.message);
  setResponse((prev) => ({ ...prev, toggle: true }));
 } catch (error) {
  console.log(error.response?.data || error.message);
  alert(error.data.message);
 }
};

export default verifyEmailOtp;
