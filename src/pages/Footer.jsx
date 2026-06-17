/** @format */

const Footer = () => {
 return (
  <footer className='w-full border-t border-slate-300 bg-gray-300/30'>
   <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6'>
    <div className='flex flex-col items-center text-center gap-2'>
     <h3 className='text-base sm:text-lg font-semibold text-slate-800'>
      JobTracker
     </h3>

     <p className='text-xs sm:text-sm text-slate-500 max-w-md'>
      A simple job portal platform connecting candidates with recruiters.
     </p>

     <p className='text-xs text-slate-400'>
      © {new Date().getFullYear()} JobTracker. All Rights Reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
