/** @format */

import axios from 'axios';

const sandOtp = async (event, values, setResponse) => {
 event.preventDefault();

 try {
  if (values[0] === 'candidate') {
   const response = await axios.post('http://localhost:45000/emailVerify', {
    role: values[0],
    name: values[1],
    email: values[2],
    phone: values[3],
   });

   console.log(response.data);
   setResponse((prev) => ({ ...prev, message: response.data.message }));
  } else {
   const response = await axios.post(
    'http://localhost:45000/ReSingUp/emailVerify',
    {
     email: values,
    },
   );

      console.log(response.data);
      setResponse((prev) => ({ ...prev, message: response.data.message }));
  }
 } catch (error) {
  console.log(error.response?.data || error.message);
 }
};

export default sandOtp;
