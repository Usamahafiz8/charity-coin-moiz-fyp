'use client';
import React, { useState } from 'react';
import axios from 'axios';

const PatientRegistration = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    wallet_address: '',
    hospitalId: '',
    medicalHistory: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMedicalHistoryChange = (e) => {
    setPatientData((prevState) => ({
      ...prevState,
      medicalHistory: [e.target.value], // Ensuring it's an array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/patients', patientData);
      console.log('Response:', response.data);
      alert('Successfully registered');

      // Reset form
      setPatientData({
        name: '',
        age: '',
        phone: '',
        email: '',
        wallet_address: '',
        hospitalId: '',
        medicalHistory: [''],
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('There was an error submitting the registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={patientData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Full Name"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={patientData.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Age"
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
          value={patientData.phone}
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
          value={patientData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Email"
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
          value={patientData.wallet_address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Wallet Address"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="hospitalId">
          Hospital ID
        </label>
        <input
          type="text"
          id="hospitalId"
          name="hospitalId"
          value={patientData.hospitalId}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Hospital ID"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-white font-medium mb-2" htmlFor="medicalHistory">
          Medical History
        </label>
        <textarea
          id="medicalHistory"
          name="medicalHistory"
          value={patientData.medicalHistory[0]}
          onChange={handleMedicalHistoryChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Medical History"
        ></textarea>
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

export default PatientRegistration;
