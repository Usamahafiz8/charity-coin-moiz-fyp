// components/ContactButton.js
import { useRouter } from 'next/router';

const ContactButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded transition"
    >
      Contact 
    </button>
  );
};

export default ContactButton;
