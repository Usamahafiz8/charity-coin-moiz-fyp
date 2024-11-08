import React, { useEffect, useState } from 'react';

import axios from 'axios';




const PatientRegistration = () => {
  const [patientData, setPatientData] = useState({
    FullName: '',
    phone: '',
    email: '',
    age: '',
    medicalHistory: '',
  });


  
  
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/patients');
      console.log('Response from API', response);
      setPatientData(response.data); // Assuming the response contains an array of patients
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);



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
    <div className="flex shadow-lg min-h-screen items-center flex-col justify-center p-4 border-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-4xl border border-white">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Patient Registration</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-medium mb-2" htmlFor="FullName">Full Name</label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              value={patientData.FullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
              placeholder="Enter Full Name"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2" htmlFor="phone">Phone</label>
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
            <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
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
            <label className="block text-white font-medium mb-2" htmlFor="age">Age</label>
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

          <div className="md:col-span-2">
            <label className="block text-white font-medium mb-2" htmlFor="medicalHistory">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={patientData.medicalHistory}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white bg-gray-800"
              placeholder="Enter Medical History"
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
    </div>
  );
};

export default PatientRegistration;
