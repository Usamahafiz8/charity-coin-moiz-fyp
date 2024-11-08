import React, { useEffect, useState } from 'react';
import TrustyRegistration from './Trusty'; // Import your Trusty form
import HospitalRegistration from './HospitalRegistration'; // Import your HospitalRegistration form
import PatientRegistration from './patientregistry'; // Import PatientRegistration form

const CharityRegistration = () => {
  const [charityData, setCharityData] = useState({
    FullName: '',
    phone: '',
    email: '',
    donationOptions: '',
  });




  const [activeForm, setActiveForm] = useState('charity');

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
            : activeForm === 'hospital'
            ? 'Hospital Registration'
            : 'Patient Registration'}
        </h2>

        <nav className="flex justify-center mb-6 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex text-center text-white font-semibold dark:text-gray-400 overflow-x-auto">
            <li className="me-2">
              <a
                href="#"
                onClick={() => setActiveForm('charity')}
                className={`inline-block p-4 rounded-t-lg text-sm md:text-base font-medium ${
                  activeForm === 'charity'
                    ? 'text-green-600 bg-gray-100 dark:bg-gray-800 dark:text-green-600'
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
                className={`inline-block p-4 rounded-t-lg text-sm md:text-base font-medium ${
                  activeForm === 'trusty'
                    ? 'text-green-600 bg-gray-100 dark:bg-gray-800 dark:text-green-600'
                    : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Trusty Registration
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                onClick={() => setActiveForm('hospital')}
                className={`inline-block p-4 rounded-t-lg text-sm md:text-base font-medium ${
                  activeForm === 'hospital'
                    ? 'text-green-600 bg-gray-100 dark:bg-gray-800 dark:text-green-600'
                    : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Hospital Registration
              </a>
            </li>
            {/* Add Patient Registration link */}
            <li className="me-2">
              <a
                href="#"
                onClick={() => setActiveForm('patient')}
                className={`inline-block p-4 rounded-t-lg text-sm md:text-base font-medium ${
                  activeForm === 'patient'
                    ? 'text-green-600 bg-gray-100 dark:bg-gray-800 dark:text-green-600'
                    : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Patient Registration
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

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-8 rounded-lg hover:bg-green-400 transition duration-200"
              >
                Register
              </button>
            </div>
          </form>
        ) : activeForm === 'trusty' ? (
          <TrustyRegistration />
        ) : activeForm === 'hospital' ? (
          <HospitalRegistration />
        ) : (
          <PatientRegistration /> // Render Patient Registration form
        )}
      </div>
    </div>
  );
};

export default CharityRegistration;
