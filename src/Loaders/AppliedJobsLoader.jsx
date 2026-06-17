/** @format */

const AppliedJobsLoader = () => {
 return (
  <section className='max-w-7xl mx-auto px-4 py-6 animate-pulse'>
   <div className='flex justify-between items-center mb-6'>
    <div className='h-8 w-48 bg-slate-200 rounded'></div>
    <div className='h-10 w-40 bg-slate-200 rounded-lg'></div>
   </div>

   <div className='grid gap-5'>
    {[...Array(5)].map((_, index) => (
     <div
      key={index}
      className='bg-white border border-slate-200 rounded-2xl p-5'>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-4'>
       <div className='flex-1'>
        <div className='h-6 w-52 bg-slate-200 rounded mb-3'></div>

        <div className='h-4 w-40 bg-slate-200 rounded mb-4'></div>

        <div className='flex gap-3 flex-wrap mb-4'>
         <div className='h-4 w-20 bg-slate-200 rounded'></div>
         <div className='h-4 w-24 bg-slate-200 rounded'></div>
         <div className='h-4 w-28 bg-slate-200 rounded'></div>
        </div>

        <div className='h-4 w-36 bg-slate-200 rounded'></div>
       </div>

       <div className='flex flex-col gap-3'>
        <div className='h-9 w-28 bg-slate-200 rounded-full'></div>
        <div className='h-10 w-32 bg-slate-200 rounded-xl'></div>
       </div>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
};

export default AppliedJobsLoader;
