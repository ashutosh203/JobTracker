/** @format */

const RecruiterWelcome = () => {
 return (
  <div className='min-h-screen flex flex-col items-center justify-center p-8 box-border text-center'>
   <h1 className='text-3xl font-bold mb-4'>Welcome to JobTracker!</h1>
   <p className='mb-6'>
    Manage your job postings and hire the right candidates with ease.
   </p>
   <h3 className='text-xl font-semibold mb-2'>Guidelines:</h3>
   <ul className='list-disc text-left mb-6 space-y-2'>
    <li>Never request money from candidates.</li>
    <li>Treat all applicants with respect and professionalism.</li>
    <li>Ensure clear and fair communication throughout the process.</li>
    <li>Provide honest feedback to candidates when possible.</li>
    <li>Respect data privacy and confidentiality at all times.</li>
   </ul>
   <em>Thank you for connecting with JobTracker!</em>
  </div>
 );
};

export default RecruiterWelcome;
