/** @format */

import { useState } from 'react';
import JobContext from './JobContext';
import { initialFormState } from '../utils/recruiterFields';
import { CandidateDetails } from '../utils/LoginSingUpData';

export const JobContextProvider = ({ children }) => {
    const [recruiterInputField, setRecruiterInputField] = useState({
        ...initialFormState,
    });
    const [recruiterErrors, setRecruiterErrors] = useState({
        ...initialFormState,
    });
    const [jobsData, setJobsData] = useState([]);
    const [candidateData, setCandidateData] = useState({ ...CandidateDetails });
    return (
        <JobContext.Provider
            value={{
                candidateData,
                setCandidateData,
                recruiterInputField,
                setRecruiterInputField,
                recruiterErrors,
                setRecruiterErrors,
                initialFormState,
                jobsData,
                setJobsData,
                CandidateDetails,
            }}>
            {children}
        </JobContext.Provider>
    );
};
