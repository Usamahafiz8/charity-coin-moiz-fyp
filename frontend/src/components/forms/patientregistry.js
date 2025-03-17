import React, { useState } from 'react';

const PatientRegistration = () => {
  const [patientData, setPatientData] = useState({
    fullName: '',
    phone: '',
    email: '',
    medicalCondition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientData);
    alert('Patient registration submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <h3 className="text-xl font-semibold mb-4 text-white">Patient Information</h3>
      </div>
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={patientData.fullName}
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
        <label className="block text-white font-medium mb-2" htmlFor="medicalCondition">
          Medical Condition
        </label>
        <input
          type="text"
          id="medicalCondition"
          name="medicalCondition"
          value={patientData.medicalCondition}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
          placeholder="Enter Medical Condition"
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

export default PatientRegistration;