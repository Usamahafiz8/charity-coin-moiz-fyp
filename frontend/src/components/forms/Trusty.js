import React, { useState } from 'react';

const TrustyRegistration = () => {
  const [trustyData, setTrustyData] = useState({
    trustyName: '',
    address: '',
    phone: '',
    email: '',
    trustObjectives: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrustyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trustyData);
    alert('Trusty registration submitted successfully!');
  };

  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl ">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trusty Name Field */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="trustyName">Trusty Name</label>
          <input
            type="text"
            id="trustyName"
            name="trustyName"
            value={trustyData.trustyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Trusty Name"
          />
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={trustyData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={trustyData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Email Field */}
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
        
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrustyRegistration;
