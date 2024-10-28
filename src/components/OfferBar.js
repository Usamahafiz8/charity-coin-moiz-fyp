// components/OfferBar.js
import Link from 'next/link';

const OfferBar = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex-1">
        <p className="text-sm">Exclusive Offers! Get 20% off on your first donation!</p>
      </div>
      <div>
        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-400 transition duration-200">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferBar;
