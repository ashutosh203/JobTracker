/** @format */
import { memo, useContext, useEffect } from 'react';
import InputFieldset from '../../components/RecruiterComponents/InputFieldset';
import JobContext from '../../context/JobContext';
import {
    recruiterInputFieldUpdate,
    recruiterOnsubmitForm,
    refresh,
} from '../../utils/recruitersHelpersFunction';
import { RefreshCcw } from 'lucide-react';
import { recruiterFields } from '../../utils/recruiterFields';
import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecruiterJobPostForm = memo(() => {
    const {
        recruiterInputField,
        setRecruiterInputField,
        setRecruiterErrors,
        recruiterErrors,
        initialFormState,
        setJobsData,
        jobsData,
    } = useContext(JobContext);
    const isFormValid = Object.values(recruiterErrors).every(
        (error) => error === '',
    );

    useEffect(() => console.log(jobsData), [jobsData]);
    const navigate = useNavigate();
    return (
        <div className='w-full flex justify-center py-10 px-4 flex-wrap bg-gray-100 relative'>
            <div className='absolute top-1 right-6'>
                <button
                    className='flex items-center gap-2 px-3.5 py-1.5 border cursor-pointer border-gray-200 rounded-full shadow-sm hover:shadow-md bg-gray-50 transition-all duration-300'
                    onClick={() => navigate(-1)}>
                    <Undo2 size={18} className='text-gray-700' />
                    <span className='text-sm font-medium text-gray-700'>
                        Back
                    </span>
                </button>
            </div>
            <form
                onSubmit={(event) =>
                    recruiterOnsubmitForm(
                        event,
                        setJobsData,
                        recruiterInputField,
                        recruiterErrors,
                        () => {
                            refresh(
                                setRecruiterInputField,
                                setRecruiterErrors,
                                initialFormState,
                            );
                        },
                    )
                }
                className='w-full max-w-5xl bg-white border border-gray-200 rounded-2xl p-4 shadow-lg'>
                <h2 className='text-center text-3xl font-bold text-gray-800 mb-8 relative'>
                    New Job Post
                    <RefreshCcw
                        className='absolute right-0 top-0 cursor-pointer'
                        size={20}
                        onClick={() =>
                            refresh(
                                setRecruiterInputField,
                                setRecruiterErrors,
                                initialFormState,
                            )
                        }
                    />
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {recruiterFields.map((field) => (
                        <InputFieldset
                            key={field.key}
                            name={field.name}
                            Title={field.Title}
                            placeholder={field.placeholder}
                            value={recruiterInputField[field.name]}
                            setRecruiterInputField={setRecruiterInputField}
                            recruiterErrors={recruiterErrors[field.name]}
                            setRecruiterErrors={setRecruiterErrors}
                        />
                    ))}
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
});

export default RecruiterJobPostForm;
