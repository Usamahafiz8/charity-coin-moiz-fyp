'use client';
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
        },
        body: JSON.stringify(charityData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Successfully registered');
        setCharityData({
          name: '',
          purpose: '',
          email: '',
          organization: '',
          contact: '',
          wallet_address: '',
        });
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  };

  const inputFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter Full Name' },
    { id: 'purpose', label: 'Purpose', type: 'text', placeholder: 'Purpose of Donation' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
    { id: 'organization', label: 'Organization Name', type: 'text', placeholder: 'Enter Organization Name' },
    { id: 'contact', label: 'Phone', type: 'tel', placeholder: 'Enter Phone Number' },
    { id: 'wallet_address', label: 'Wallet Address', type: 'text', placeholder: 'Enter Wallet Address' },
  ];

  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inputFields.map((field) => (
          <div key={field.id}>
            <label className="block text-white font-medium mb-2" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={charityData[field.id]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
              placeholder={field.placeholder}
            />
          </div>
        ))}

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

export default CharityRegistration;
