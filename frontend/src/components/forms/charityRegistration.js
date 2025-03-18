import React, { useState } from 'react';

const CharityRegistration = () => {
  const [charityData, setCharityData] = useState({
    name: '',
    purpose: '',
    email: '',
    organization: '',
    contact: '',
    wallet_address: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/charity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify(charityData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Charity registration submitted successfully!' });
        setCharityData({ name: '', purpose: '', email: '', organization: '', contact: '', wallet_address: '' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {message && (
        <div
          className={`text-center py-2 mb-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={charityData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Full Name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="purpose">
            Purpose
          </label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            value={charityData.purpose}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Purpose of Charity"
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
          <label className="block text-white font-medium mb-2" htmlFor="organization">
            Organization Name
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={charityData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Organization Name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="contact">
            Phone
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={charityData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Phone Number"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="wallet_address">
            Wallet Address
          </label>
          <input
            type="text"
            id="wallet_address"
            name="wallet_address"
            value={charityData.wallet_address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Wallet Address"
          />
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-8 rounded-lg hover:bg-green-400 transition duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharityRegistration;
