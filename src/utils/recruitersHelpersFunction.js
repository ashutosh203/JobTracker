/** @format */

export function recruiterInputFieldUpdate(
    e,
    setRecruiterInputField,
    setRecruiterErrors,
) {
    const { name, value } = e.target;

    const error = validation(name, value);

    setRecruiterErrors((prev) => ({ ...prev, [name]: error }));

    setRecruiterInputField((prev) => ({
        ...prev,
        [name]: value,
    }));
}

const validateTextField = (value, fieldName, min = 3, max = 50) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return `${fieldName} is required`;
    }

    if (trimmedValue.length < min) {
        return `${fieldName} must be at least ${min} characters`;
    }

    if (trimmedValue.length > max) {
        return `${fieldName} must not exceed ${max} characters`;
    }

    return '';
};

export function validation(name, value) {
    switch (name) {
        case 'companyName': {
            const error = validateTextField(value, 'Company name', 3, 50);

            if (error) return error;

            if (/\d/.test(value)) {
                return 'Numbers are not allowed';
            }

            if (!/^[A-Za-z\s&.,()-]+$/.test(value)) {
                return 'Invalid company name';
            }

            return '';
        }

        case 'JobTitle': {
            const error = validateTextField(value, 'Job title', 3, 50);

            if (error) return error;

            if (!/^[A-Za-z0-9\s/-]+$/.test(value)) {
                return 'Only letters, numbers, spaces, / and - are allowed';
            }

            return '';
        }

        case 'Location': {
            const error = validateTextField(value, 'Location', 5, 100);

            if (error) return error;

            if (!/^[A-Za-z0-9\s,.-]+$/.test(value)) {
                return 'Invalid location format';
            }

            return '';
        }

        case 'JobType': {
            if (!value.trim()) {
                return 'Job type is required';
            }

            return '';
        }

        case 'IndustryType': {
            const error = validateTextField(value, 'Industry type', 3, 50);

            if (error) return error;

            if (!/^[A-Za-z\s&/-]+$/.test(value)) {
                return 'Invalid industry type';
            }

            return '';
        }

        case 'Established': {
            if (!value.trim()) {
                return 'Established year is required';
            }

            const year = Number(value);

            const currentYear = new Date().getFullYear();

            if (isNaN(year)) {
                return 'Only numbers allowed';
            }

            if (year < 1800 || year > currentYear) {
                return `Year must be between 1800 and ${currentYear}`;
            }

            return '';
        }

        case 'Organization': {
            if (!value.trim()) {
                return 'Organization size is required';
            }

            return '';
        }

        case 'PerksBenefits': {
            const error = validateTextField(value, 'Perks & Benefits', 10, 500);

            if (error) return error;

            return '';
        }

        case 'JobDetails': {
            const error = validateTextField(value, 'Job details', 20, 3000);

            if (error) return error;

            return '';
        }

        default:
            return '';
    }
}



export const refresh = (
    setRecruiterInputField,
    setRecruiterErrors,
    initialFormState,
) => {
    setRecruiterErrors({
        ...initialFormState,
    });
    setRecruiterInputField({
        ...initialFormState,
    });
};
