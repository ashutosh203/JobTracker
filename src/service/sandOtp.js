/** @format */

import axios from 'axios';

const sandOtp = async (event, candidateData, setResponseData) => {
    event.preventDefault();

    try {
        const response = await axios.post(
            'http://localhost:45000/emailVerify',
            {
                role: candidateData['role'],
                name: candidateData['FullName'].name,
                email: candidateData['Email'].mail,
                phone: candidateData['PhoneNumber'].number,
            },
        );

        console.log(response.data);
        setResponseData((prev) => ({
            ...prev,
            successMessage: response.data.message,
        }));
    } catch (error) {
        console.log(error.response?.data || error.message);
        setResponseData((prev) => ({
            ...prev,
            errorMessage: error.response.data.message,
        }));
    }
};

export default sandOtp;
