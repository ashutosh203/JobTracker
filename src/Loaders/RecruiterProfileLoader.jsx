/** @format */

const RecruiterProfileLoader = () => {
 return (
  <div className='bg-white   shadow-md overflow-hidden animate-pulse'>
   {/* Header */}
   <div className='p-10 border-b'>
    <div className='h-10 w-64 bg-gray-200 rounded mb-4'></div>
    <div className='h-5 w-80 bg-gray-200 rounded'></div>
   </div>

   {/* Content */}
   <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20'>
    {[...Array(7)].map((_, index) => (
     <div key={index}>
      <div className='h-5 w-32 bg-gray-200 rounded mb-3'></div>
      <div className='h-8 w-56 bg-gray-300 rounded'></div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default RecruiterProfileLoader;
