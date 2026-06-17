/** @format */

const JobDetailsLoader = () => {
 return (
  <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse'>
   {/* Header */}
   <div className='bg-blue-600 p-6'>
    <div className='h-8 w-64 bg-blue-400 rounded'></div>
    <div className='h-4 w-40 bg-blue-300 rounded mt-3'></div>
   </div>

   {/* Body */}
   <div className='p-6 space-y-8'>
    {/* Basic Info */}
    <div className='grid md:grid-cols-2 gap-6'>
     {[...Array(6)].map((_, index) => (
      <div key={index}>
       <div className='h-4 w-24 bg-gray-200 rounded mb-2'></div>
       <div className='h-5 w-40 bg-gray-300 rounded'></div>
      </div>
     ))}
    </div>

    {/* Address */}
    <div>
     <div className='h-6 w-28 bg-gray-300 rounded mb-3'></div>
     <div className='h-4 w-full bg-gray-200 rounded'></div>
     <div className='h-4 w-4/5 bg-gray-200 rounded mt-2'></div>
    </div>

    {/* Job Description */}
    <div>
     <div className='h-6 w-40 bg-gray-300 rounded mb-3'></div>
     <div className='space-y-2'>
      <div className='h-4 w-full bg-gray-200 rounded'></div>
      <div className='h-4 w-full bg-gray-200 rounded'></div>
      <div className='h-4 w-3/4 bg-gray-200 rounded'></div>
     </div>
    </div>

    {/* Benefits */}
    <div>
     <div className='h-6 w-36 bg-gray-300 rounded mb-3'></div>
     <div className='h-10 w-48 bg-gray-200 rounded-lg'></div>
    </div>

    {/* Footer */}
    <div className='border-t pt-4 flex justify-between items-center'>
     <div className='h-4 w-20 bg-gray-200 rounded'></div>
     <div className='h-5 w-28 bg-gray-300 rounded'></div>
    </div>
   </div>
  </div>
 );
};

export default JobDetailsLoader;
