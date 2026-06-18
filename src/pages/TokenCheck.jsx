/** @format */

import axios from 'axios';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const TokenCheck = () => {
 useEffect(() => {
  (async () => {
   const recruiterToken = localStorage.getItem('recruiter');

   const candidateToken = localStorage.getItem('candidate');

   if (recruiterToken) {
    try {
     const response = await axios.post(`${API_URL}/tokenExpires`, {
      token: recruiterToken,
     });
     if (response.status === 200) {
      return null;
     }
    } catch (error) {
     if (error.response.status === 401) {
      localStorage.removeItem('recruiter');
     }
    }
   }
   if (candidateToken) {
    try {
     const response = await axios.post(`${API_URL}/tokenExpires`, {
      token: candidateToken,
     });
     if (response?.status === 200) {
      return null;
     }
    } catch (error) {
     if (error?.response?.status === 401) {
      localStorage.removeItem('candidate');
     }
    }
   }
  })();
 }, []);
 return <Outlet />;
};

export default TokenCheck;
