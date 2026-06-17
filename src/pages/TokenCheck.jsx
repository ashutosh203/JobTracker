import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom"

const TokenCheck = () => {
  useEffect(() => {
   (async () => {
    const recruiterToken = localStorage.getItem('recruiter');
 
    const candidateToken = localStorage.getItem('candidate');
 
    if (recruiterToken) {
     try {
      const response = await axios.post('http://localhost:45000/tokenExpires', {
       token: recruiterToken,
      });
      console.log(response.data);
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
      const response = await axios.post('http://localhost:45000/tokenExpires', {
       token: candidateToken,
      });
      if (response.status === 200) {
       // console.log(response.data);
       return null;
      }
     } catch (error) {
      if (error.response.status === 401) {
       localStorage.removeItem('candidate');
      }
     }
    }
   })();
  }, []);
  return <Outlet />    
}

export default TokenCheck
