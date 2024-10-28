// components/OfferBar.js
import Link from 'next/link';

const OfferBar = () => {
  return (
    
    
    <div className="bg-gray-800 ">
      <div className='container mx-auto text-white   text-sm py-2 px-2 lg:px-0 flex justify-between items-center'> 
        <p className="">Exclusive Offers! Get 20% off on your first donation!</p>
      <div>
        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-400 transition duration-200">
            Login
          </button>
        </Link>
    </div>
      </div>
    </div>
  );
};

export default OfferBar;
