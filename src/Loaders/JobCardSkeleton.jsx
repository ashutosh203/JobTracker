/** @format */

const JobCardSkeleton = () => {
 return (
  <div className='border rounded-3xl p-6 animate-pulse bg-white'>
   {/* Header */}
   <div className='flex justify-between items-start'>
    <div>
     <div className='h-8 w-52 bg-gray-200 rounded mb-3'></div>
     <div className='h-6 w-40 bg-gray-200 rounded'></div>
    </div>

    <div className='h-10 w-20 bg-gray-200 rounded-full'></div>
   </div>

   {/* Location & Type */}
   <div className='flex gap-6 mt-8'>
    <div className='h-6 w-24 bg-gray-200 rounded'></div>
    <div className='h-6 w-24 bg-gray-200 rounded'></div>
   </div>

   {/* Divider */}
   <div className='border-b my-8'></div>

   {/* Footer */}
   <div className='flex justify-between items-center'>
    <div className='h-5 w-32 bg-gray-200 rounded'></div>
    <div className='h-6 w-32 bg-gray-200 rounded'></div>
   </div>
  </div>
 );
};

export default JobCardSkeleton;
