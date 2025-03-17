import React, { useState } from 'react';
import TrustyRegistration from '../components/forms/Trusty'; 
import HospitalRegistration from '../components/forms/HospitalRegistration'; 
import PatientRegistration from '../components/forms/patientregistry'; 
import CharityRegistration from '../components/forms/charityRegistration'; 

const RegistrationForms = () => {
  const [activeForm, setActiveForm] = useState('trusty');

  return (
    <div className="flex shadow-lg min-h-screen items-center justify-center p-4 border-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl border border-white">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          {activeForm === 'trusty'
            ? 'Trusty Registration'
            : activeForm === 'hospital'
            ? 'Hospital Registration'
            : activeForm === 'patient'
            ? 'Patient Registration'
            : 'Charity Registration'}
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

        {/* Render Forms */}
        {activeForm === 'trusty' ? (
          <TrustyRegistration />
        ) : activeForm === 'hospital' ? (
          <HospitalRegistration />
        ) : activeForm === 'patient' ? (
          <PatientRegistration />
        ) : (
          <CharityRegistration />
        )}
      </div>
    </div>
  );
};

export default RegistrationForms;
