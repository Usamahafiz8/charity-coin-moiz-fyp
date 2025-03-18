import React, { useState } from 'react';
import axios from 'axios';

const TrustyRegistration = () => {
  const [trustyData, setTrustyData] = useState({
    name: '',
    email: '',
    organization: '',
    contact: '',
    wallet_address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrustyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!trustyData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/trusty', trustyData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);
      alert('Trusty registration submitted successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Name */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={trustyData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={trustyData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Email"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={trustyData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Organization Name"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={trustyData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Contact Information"
          />
        </div>

        {/* Wallet Address */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="wallet_address">Wallet Address</label>
          <input
            type="text"
            id="wallet_address"
            name="wallet_address"
            value={trustyData.wallet_address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Wallet Address"
          />
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrustyRegistration;
