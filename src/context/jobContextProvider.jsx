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
    const [recruiterErrors, setRecruiterErrors] = useState({ ...initialFormState });
    return (
        <JobContext.Provider
            value={{
                recruiterInputField,
                setRecruiterInputField,
                recruiterErrors,
                setRecruiterErrors,
            }}>
            {children}
        </JobContext.Provider>
    );
};
