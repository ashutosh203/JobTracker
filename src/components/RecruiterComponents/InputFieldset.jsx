/** @format */

import { memo } from 'react';
import { recruiterInputFieldUpdate } from '../../utils/recruitersHelpersFunction';

const InputFieldset = ({
    Title,
    placeholder,
    value,
    setRecruiterInputField,
    name,
    setRecruiterErrors,
    recruiterErrors,
}) => {
    return (
        <fieldset className='border border-gray-300 rounded-xl px-3 py-2 bg-white'>
            <legend className='px-2 text-sm text-blue-600 font-medium capitalize'>
                {Title}
                {/* {recruiterErrors && (
                    <span className='text-red-500 text-[9px]'>
                        {recruiterErrors}
                    </span>
                )} */}
            </legend>
            <input
                required
                type='text'
                placeholder={placeholder}
                className={`w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400 `}
                value={value}
                name={name}
                onChange={(e) =>
                    recruiterInputFieldUpdate(
                        e,
                        setRecruiterInputField,
                        setRecruiterErrors,
                    )
                }
            />

            {recruiterErrors && (
                <p className='text-red-500 text-xs mt-1 ml-1'>
                    {recruiterErrors}
                </p>
            )}
        </fieldset>
    );
};

export default memo(InputFieldset);
