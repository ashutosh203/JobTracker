
const CandidateErrorShowInForm = ({ errors, Name }) => {
 return (
  <>
   {errors[Name] && (
    <p className='mt-1 text-sm text-red-500'>{errors[Name]?.message}</p>
   )}
  </>
 );
};

export default CandidateErrorShowInForm
