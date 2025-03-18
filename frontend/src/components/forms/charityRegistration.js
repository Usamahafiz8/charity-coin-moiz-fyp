import React, { useState } from 'react';

const CharityRegistration = () => {
  const [charityData, setCharityData] = useState({
    FullName: '',
    phone: '',
    email: '',
    donationOptions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(charityData);
    alert('Charity registration submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        
      </div>
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="FullName">
          Full Name
        </label>
        <input
          type="text"
          id="FullName"
          name="FullName"
          value={charityData.FullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Full Name"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={charityData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Phone Number"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={charityData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Email"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="donationOptions">
          Donation Options
        </label>
        <input
          type="text"
          id="donationOptions"
          name="donationOptions"
          value={charityData.donationOptions}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Donating in (ETH or USDT)"
        />
      </div>

      <div className="md:col-span-2 text-center mt-4">
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-8 rounded-lg hover:bg-green-400 transition duration-200"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default CharityRegistration;
