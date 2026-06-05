/** @format */

import { useState } from 'react';
import JobContext from './JobContext';

export const JobContextProvider = ({ children }) => {
    const initialFormState = {
        companyName: '',
        JobTitle: '',
        Location: '',
        JobType: '',
        IndustryType: '',
        Established: '',
        Organization: '',
        PerksBenefits: '',
        JobDetails: '',
    };
    const [recruiterInputField, setRecruiterInputField] = useState({
        ...initialFormState,
    });
    const [recruiterErrors, setRecruiterErrors] = useState({
        ...initialFormState,
    });
    const [jobsData, setJobsData] = useState([]);
    return (
        <JobContext.Provider
            value={{
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
