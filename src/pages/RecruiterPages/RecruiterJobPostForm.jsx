/** @format */
import { useContext } from 'react';
import InputFieldset from '../../components/RecruiterComponents/InputFieldset';
import JobContext from '../../context/JobContext';
import { recruiterInputFieldUpdate } from '../../utils/recruitersHelpersFunction';

const RecruiterJobPostForm = () => {
    const {
        recruiterInputField,
        setRecruiterInputField,
        setRecruiterErrors,
        recruiterErrors,
    } = useContext(JobContext);
    const isFormValid = Object.values(recruiterErrors).every(
        (error) => error === '',
    );
    return (
        <div className='w-full flex justify-center py-8 px-4 bg-gray-100'>
            <form className='w-full max-w-5xl bg-white border border-gray-200 rounded-2xl p-6 shadow-lg'>
                <h2 className='text-center text-3xl font-bold text-gray-800 mb-8'>
                    New Job Post
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <InputFieldset
                        name={'companyName'}
                        Title='Company Name'
                        placeholder='Enter company name'
                        value={recruiterInputField.companyName}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['companyName']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'JobTitle'}
                        Title='Job Title'
                        placeholder='Frontend Developer'
                        value={recruiterInputField.JobTitle}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['JobTitle']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'Location'}
                        Title='Location'
                        placeholder='Noida, India'
                        value={recruiterInputField.Location}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['Location']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'JobType'}
                        Title='Job Type'
                        placeholder='Full Time'
                        value={recruiterInputField.JobType}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['JobType']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'IndustryType'}
                        Title='Industry Type'
                        placeholder='Software Development'
                        value={recruiterInputField.IndustryType}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['IndustryType']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'Established'}
                        Title='Established'
                        placeholder='2015'
                        value={recruiterInputField.Established}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['Established']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'Organization'}
                        Title='Organization'
                        placeholder='100-500 Employees'
                        value={recruiterInputField.Organization}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['Organization']}
                        setRecruiterErrors={setRecruiterErrors}
                    />

                    <InputFieldset
                        name={'PerksBenefits'}
                        Title='Perks & Benefits'
                        placeholder='Health Insurance, WFH'
                        value={recruiterInputField.PerksBenefits}
                        setRecruiterInputField={setRecruiterInputField}
                        recruiterErrors={recruiterErrors['PerksBenefits']}
                        setRecruiterErrors={setRecruiterErrors}
                    />
                </div>

                <fieldset className='border border-gray-300 rounded-xl px-3 py-2 bg-white mt-5'>
                    <legend className='px-2 text-sm text-blue-600 font-medium'>
                        Job Details
                    </legend>

                    <textarea
                        required={!recruiterErrors.JobDetails && true}
                        name={'JobDetails'}
                        placeholder='Write detailed job description...'
                        className='w-full min-h-40 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 resize-none'
                        value={recruiterInputField.JobDetails}
                        onChange={(e) =>
                            recruiterInputFieldUpdate(
                                e,
                                setRecruiterInputField,
                                setRecruiterErrors,
                            )
                        }
                    />
                    {recruiterErrors.JobDetails && (
                        <p className='text-red-500 text-xs mt-1 ml-1'>
                            {recruiterErrors.JobDetails}
                        </p>
                    )}
                </fieldset>

                <button
                    disabled={!isFormValid}
                    type='submit'
                    className={`w-full mt-6 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md ${
                        !isFormValid
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]'
                    }`}>
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default RecruiterJobPostForm;
