/** @format */

const ValidationName = (event, setCandidateData) => {
    const { name, value } = event.target;

    switch (name) {
        case 'candidateFullName':
            if (value.trim() === '') {
                setCandidateData((prevData) => ({
                    ...prevData,
                    FullName: {
                        name: value,
                        error: 'name is required',
                    },
                }));
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                setCandidateData((prevData) => ({
                    ...prevData,
                    FullName: {
                        name: value,
                        error: 'only letters and spaces',
                    },
                }));
            } else if (value.length < 3 || value.length > 30) {
                setCandidateData((prevData) => ({
                    ...prevData,
                    FullName: {
                        name: value,
                        error: 'Name should be between 3 and 30 characters',
                    },
                }));
            } else {
                setCandidateData((prevData) => ({
                    ...prevData,
                    FullName: {
                        name: value,
                        error: '',
                    },
                }));
            }

            break;
        case 'Email':
            if (value.trim() === '') {
                setCandidateData((prevData) => ({
                    ...prevData,
                    Email: {
                        mail: value,
                        error: 'Email is required',
                    },
                }));
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setCandidateData((prevData) => ({
                    ...prevData,
                    Email: {
                        mail: value,
                        error: 'Invalid email format',
                    },
                }));
            } else {
                setCandidateData((prevData) => ({
                    ...prevData,
                    Email: {
                        mail: value,
                        error: '',
                    },
                }));
            }

            break;
        case 'PhoneNumber':
            if (value.trim() === '') {
                setCandidateData((prevData) => ({
                    ...prevData,
                    PhoneNumber: {
                        number: value,
                        error: 'Phone Number is required',
                    },
                }));
            } else if (!/^\d{10}$/.test(value)) {
                setCandidateData((prevData) => ({
                    ...prevData,
                    PhoneNumber: {
                        number: value,
                        error: 'Invalid phone number format',
                    },
                }));
            } else {
                setCandidateData((prevData) => ({
                    ...prevData,
                    PhoneNumber: {
                        number: value,
                        error: '',
                    },
                }));
            }

            break;
        case 'Password':
            break;
        default:
            break;
    }
};

export { ValidationName };

export const buttonDisabled = (candidateData) => {
     return !(
        candidateData.FullName.name.trim() &&
        candidateData.Email.mail.trim() &&
        candidateData.PhoneNumber.number.trim() &&
        candidateData.FullName.error === '' &&
        candidateData.Email.error === '' &&
        candidateData.PhoneNumber.error === ''
    );
};
