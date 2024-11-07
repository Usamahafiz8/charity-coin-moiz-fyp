import React, { useState } from 'react';

const HospitalRegistration = () => {
  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    address: '',
    phone: '',
    hospitalType: '',
    registrationNumber: '',
    licenseNumber: '',
    email: '',
    numberOfBeds: '',
    ownershipType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hospitalData);
    alert('Hospital registration submitted successfully!');
  };

  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl border border-white">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="hospitalName">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={hospitalData.hospitalName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Hospital Name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={hospitalData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Address"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={hospitalData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Phone Number"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="hospitalType">Hospital Type</label>
          <select
            id="hospitalType"
            name="hospitalType"
            value={hospitalData.hospitalType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          >
            <option value="">Select Hospital Type</option>
            <option value="General">General</option>
            <option value="Specialty">Specialty</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="registrationNumber">Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={hospitalData.registrationNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Registration Number"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="licenseNumber">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={hospitalData.licenseNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter License Number"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={hospitalData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="numberOfBeds">Number of Beds</label>
          <input
            type="number"
            id="numberOfBeds"
            name="numberOfBeds"
            value={hospitalData.numberOfBeds}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
            placeholder="Enter Number of Beds"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="ownershipType">Ownership Type</label>
          <select
            id="ownershipType"
            name="ownershipType"
            value={hospitalData.ownershipType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          >
            <option value="">Select Ownership Type</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
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

export default HospitalRegistration;
