/** @format */

const JobListingLoader = () => {
 return (
  <div className='w-full bg-white rounded-xl shadow animate-pulse overflow-hidden'>
   {/* Header */}
   <div className='flex justify-between items-center bg-blue-600 p-6'>
    <div className='h-8 w-40 bg-blue-400 rounded'></div>
    <div className='h-8 w-28 bg-blue-400 rounded'></div>
   </div>

   {/* Table Header */}
   <div className='grid grid-cols-4 gap-4 p-6 border-b'>
    <div className='h-6 bg-gray-300 rounded w-28 mx-auto'></div>
    <div className='h-6 bg-gray-300 rounded w-24 mx-auto'></div>
    <div className='h-6 bg-gray-300 rounded w-40 mx-auto'></div>
    <div className='h-6 bg-gray-300 rounded w-20 mx-auto'></div>
   </div>

   {/* Rows */}
   {[...Array(5)].map((_, index) => (
    <div
     key={index}
     className='grid grid-cols-4 gap-4 p-6 border-b items-center'>
     <div className='h-6 bg-gray-200 rounded w-40 mx-auto'></div>
     <div className='h-6 bg-gray-200 rounded w-24 mx-auto'></div>
     <div className='h-6 bg-gray-200 rounded w-32 mx-auto'></div>
     <div className='h-8 w-8 bg-gray-200 rounded mx-auto'></div>
    </div>
   ))}
  </div>
 );
};

export default JobListingLoader;
