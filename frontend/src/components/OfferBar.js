// import Link from 'next/link'; 
// import React, { useState, useEffect } from 'react';

// const OfferBar = () => {
//   const [showFirstText, setShowFirstText] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirstText(prev => !prev);
//     }, 4000); // Switch every 4 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="bg-gray-800">
//       <div className='container mx-auto text-white text-xs sm:text-sm py-1 sm:py-2 px-2 lg:px-0 flex justify-between items-center'> 
//         {/* Conditional Rendering */}
//         {showFirstText ? (
//           <p className="text-center sm:text-left opacity-100 transition-opacity font-bold duration-1000 ml-3 ease-in-out">Exclusive Offers! Get 20% off on your first donation!</p>
//         ) : (
//           <p className="text-center sm:text-left opacity-100 transition-opacity font-bold duration-1000 ml-3 ease-in-out">Donate in token to save lives</p>
//         )}
        
//       </div>
//     </div>
//   );
// };

// export default OfferBar;
