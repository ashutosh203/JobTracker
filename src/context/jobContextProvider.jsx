/** @format */

import { useState } from 'react';
import JobContext from './JobContext';
import { initialFormState } from '../utils/recruiterFields';

export const JobContextProvider = ({ children }) => {
 const [recruiterInputField, setRecruiterInputField] = useState({
  ...initialFormState,
 });
 const [recruiterErrors, setRecruiterErrors] = useState({
  ...initialFormState,
 });
 const [jobsData, setJobsData] = useState([]);
 {
  /*all data here*/
 }
 const [candidateToken, setCandidateToken] = useState(
  localStorage.getItem('candidate'),
 );
 const [recruiterToken, setRecruiterToken] = useState(
  localStorage.getItem('recruiter'),
 );
 return (
  <JobContext.Provider
   value={{
    recruiterToken,
    setRecruiterToken,
    candidateToken,
    setCandidateToken,
    recruiterInputField,
    setRecruiterInputField,
    recruiterErrors,
    setRecruiterErrors,
    initialFormState,
    jobsData,
    setJobsData,
   }}>
   {children}
  </JobContext.Provider>
 );
};
