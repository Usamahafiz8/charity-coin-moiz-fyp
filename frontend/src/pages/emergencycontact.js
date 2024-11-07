import { useState } from 'react';

const Contact = () => {
  const [isEmergency, setIsEmergency] = useState(true);

  return (
    <>
    <div  className="flex items-center justify-center min-h-screen">
      <div className="p-16 rounded-lg shadow-lg w-full max-w-3xl text-center items-center border border-white">
      <EmergencyContactForm />
      </div>
     </div>

    </>
  );
};

const EmergencyContactForm = () => (
  <form className="space-y-4">
    <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded" required />
    <input type="tel" placeholder="Your Phone Number" className="w-full p-3 bg-gray-800 text-white rounded" required />
    <textarea placeholder="Urgent Message" className="w-full p-3 bg-gray-800 text-white rounded" rows="4" required />
    <button type="submit" className="bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded transition">Send Urgent Message</button>
  </form>
);

export default Contact;
