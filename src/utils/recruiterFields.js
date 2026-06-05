/** @format */
import { v4 as uuidv4 } from 'uuid';

const recruiterFields = [
    {
        name: 'companyName',
        Title: 'Company Name',
        placeholder: 'Enter company name',
        key: uuidv4(),
    },
    {
        name: 'JobTitle',
        Title: 'Job Title',
        placeholder: 'Frontend Developer',
        key: uuidv4(),
    },
    {
        name: 'Location',
        Title: 'Location',
        placeholder: 'Noida, India',
        key: uuidv4(),
    },
    {
        name: 'JobType',
        Title: 'Job Type',
        placeholder: 'Full Time',
        key: uuidv4(),
    },
    {
        name: 'IndustryType',
        Title: 'Industry Type',
        placeholder: 'Software Development',
        key: uuidv4(),
    },
    {
        name: 'Established',
        Title: 'Established',
        placeholder: '2015',
        key: uuidv4(),
    },
    {
        name: 'Organization',
        Title: 'Organization',
        placeholder: '100-500 Employees',
        key: uuidv4(),
    },
    {
        name: 'PerksBenefits',
        Title: 'Perks & Benefits',
        placeholder: 'Health Insurance, WFH',
        key: uuidv4(),
    },
];

export { recruiterFields };
