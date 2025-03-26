'use client';
import React, { useState } from 'react';
import axios from 'axios';

const HospitalRegistration = () => {
  const [hospitalData, setHospitalData] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    wallet_address: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/hospitals', hospitalData);
      console.log('Response:', response.data);
      alert('Successfully registered');

      // Reset form
      setHospitalData({
        name: '',
        location: '',
        phone: '',
        email: '',
        wallet_address: '',
        contactNumber: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('There was an error submitting the registration.');
    }
  };

  const inputFields = [
    { id: 'name', label: 'Hospital Name', type: 'text', placeholder: 'Enter Hospital Name' },
    { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter Location' },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter Phone Number' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
    { id: 'wallet_address', label: 'Wallet Address', type: 'text', placeholder: 'Enter Wallet Address' },
    { id: 'contactNumber', label: 'Contact Number', type: 'tel', placeholder: 'Enter Contact Number' },
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
              value={hospitalData[field.id]}
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

export default HospitalRegistration;
