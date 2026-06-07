/** @format */

import axios from 'axios';

const verifyEmailOtp = async (event, candidateData, setToggle) => {
    event.preventDefault();

    try {
        setToggle((prev) => ({ ...prev, on: 'on' }));
        const response = await axios.post('http://localhost:45000/verifyOtp', {
            email: candidateData.Email.mail,
            otp: candidateData.otp,
        });

        console.log(response.data);
      alert(response.data.message);
      setToggle((prev) => ({ ...prev, verified: true }));
    } catch (error) {
        console.log(error.response?.data || error.message);
      alert(error.data.message);
    } finally {
      setToggle((prev) => ({ ...prev, on: 'Off' }));
      
    }
};

export default verifyEmailOtp;
