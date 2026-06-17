/** @format */

const CandidateJobDetailsLoader = () => {
 return (
  <div className='w-full flex justify-center p-4 md:p-8 animate-pulse'>
   <div className='w-full max-w-4xl bg-white rounded-2xl border overflow-hidden'>
    {/* Header */}
    <div className='p-6 border-b'>
     <div className='h-8 w-72 bg-gray-200 rounded mb-4'></div>
     <div className='h-5 w-48 bg-gray-200 rounded'></div>

     <div className='flex gap-3 mt-5'>
      <div className='h-8 w-20 bg-gray-200 rounded-full'></div>
      <div className='h-8 w-24 bg-gray-200 rounded-full'></div>
     </div>
    </div>

    {/* Details */}
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
     {[...Array(6)].map((_, index) => (
      <div key={index}>
       <div className='h-4 w-28 bg-gray-200 rounded mb-2'></div>
       <div className='h-5 w-40 bg-gray-200 rounded'></div>
      </div>
     ))}
    </div>

    {/* Benefits */}
    <div className='p-6 border-t'>
     <div className='h-6 w-40 bg-gray-200 rounded mb-4'></div>
     <div className='h-4 w-full bg-gray-200 rounded mb-2'></div>
     <div className='h-4 w-4/5 bg-gray-200 rounded'></div>
    </div>

    {/* Job Description */}
    <div className='p-6 border-t'>
     <div className='h-6 w-32 bg-gray-200 rounded mb-4'></div>
     <div className='h-4 w-full bg-gray-200 rounded mb-2'></div>
     <div className='h-4 w-full bg-gray-200 rounded mb-2'></div>
     <div className='h-4 w-3/4 bg-gray-200 rounded'></div>
    </div>

    {/* Footer */}
    <div className='p-6 border-t flex justify-between items-center'>
     <div className='h-4 w-28 bg-gray-200 rounded'></div>
     <div className='h-10 w-32 bg-gray-200 rounded-lg'></div>
    </div>
   </div>
  </div>
 );
};


export default CandidateJobDetailsLoader;