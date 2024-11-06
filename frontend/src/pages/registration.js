import React, { useState } from 'react';  
import TrustyRegistration from './Trusty'; // Import your Trusty form
import HospitalRegistration from './HospitalRegistration';

 // Import your HospitalRegistration form

const CharityRegistration = () => {
  const [charityData, setCharityData] = useState({
    charityName: '',
    address: '',
    phone: '',
    registrationNumber: '',
    email: '',
    missionStatement: '',
    FullName: '',
    donationOptions: '',
  });

  const [activeForm, setActiveForm] = useState('charity'); // Toggle between forms

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
    <div className="flex shadow-lg min-h-screen items-center justify-center p-4 border-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl border border-white">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          {activeForm === 'charity' 
            ? 'Charity Registration' 
            : activeForm === 'trusty' 
            ? 'Trusty Registration' 
            : 'Hospital Registration'}
        </h2>

        <nav className="flex justify-center mb-6 border-b border-gray-200 dark:border-gray-700">
  <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
      <a
        href="#"
        onClick={() => setActiveForm('charity')}
        className={`inline-block p-4 rounded-t-lg ${
          activeForm === 'charity'
            ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
            : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }`}
      >
        Charity Registration
      </a>
    </li>
    <li className="me-2">
      <a
        href="#"
        onClick={() => setActiveForm('trusty')}
        className={`inline-block p-4 rounded-t-lg ${
          activeForm === 'trusty'
            ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
            : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }`}
      >
        Trusty Registration
      </a>
    </li>
    <li className="me-2">
      <a
        href="#"
        onClick={() => setActiveForm('HospitalRegistration')}
        className={`inline-block p-4 rounded-t-lg ${
          activeForm === 'HospitalRegistration'
            ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
            : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }`}
      >
        Hospital Registration
      </a>
    </li>
  </ul>
</nav>



        {/* Form Display */}
        {activeForm === 'charity' ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
            </div>
            <div>
              <label className="block text-white font-medium mb-2" htmlFor="FullName">Full-Name</label>
              <input
                type="text"
                id="FullName"
                name="FullName"
                value={charityData.FullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
                placeholder="Enter Full-Name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2" htmlFor="phone">Phone</label>
              <input
                type="number"
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
              <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={charityData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Email"
              />
            </div>

            {/* Section 2: Organization Information */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Organization Information</h3>
            </div>

            <div>
              <label className="block text-white font-medium mb-2" htmlFor="charityName">Charity Name</label>
              <input
                type="text"
                id="charityName"
                name="charityName"
                value={charityData.charityName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Charity Name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={charityData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Address"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2" htmlFor="registrationNumber">Registration Number</label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={charityData.registrationNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Registration Number"
              />
            </div>

            {/* Section 3: Charity Mission & Donation */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Charity Mission & Donation</h3>
            </div>

            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2" htmlFor="missionStatement">Mission Statement</label>
              <textarea
                id="missionStatement"
                name="missionStatement"
                value={charityData.missionStatement}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Charity Mission Statement"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-white font-medium mb-2" htmlFor="donationOptions">Donation Options</label>
              <input
                type="text"
                id="donationOptions"
                name="donationOptions"
                value={charityData.donationOptions}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter Donation Options (e.g., USDT or other Currency)"
              />
              <input 
                className="w-full px-4 mt-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="ERC-20"  
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition duration-200"
              >
                Donate
              </button>
            </div>
          </form>
        ) : activeForm === 'trusty' ? (
          <TrustyRegistration /> 
        ) : (
          <HospitalRegistration/>
        )}
      </div>
    </div>
  );
};

export default CharityRegistration;
