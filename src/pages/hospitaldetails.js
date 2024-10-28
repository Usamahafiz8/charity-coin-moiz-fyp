import React, { useState } from "react";
import Image from "next/image"; // Import Image for optimized loading


const HospitalsDetails = () => {
  const [selectedHospital, setSelectedHospital] = useState(null); // State for selected hospital

  const hospitals = [
    {
      name: "City Hospital",
      image: "/images/city.jpg",
      description: "A modern hospital with advanced medical facilities and a highly trained staff.",
      extraInfo: "City Hospital also has specialized units for heart surgery and organ transplants.",
    },
    {
      name: "Green Valley Clinic",
      image: "/images/cornell.jpg",
      description: "A community clinic specializing in primary care and outpatient services.",
      extraInfo: "Green Valley Clinic focuses on providing affordable care to underprivileged communities.",
    },
    {
      name: "lincoln Medical Center",
      image: "/images/lincoln.jpg",
      description: "Well known for its emergency services and intensive care unit.",
      extraInfo: "Sunrise Medical Center has 24/7 emergency care and a top-rated trauma unit.",
    },
    {
      name: "Riverbank General Hospital",
      image: "/images/Queen.png",
      description: "A multispecialty hospital providing comprehensive health services.",
      extraInfo: "Riverbank General Hospital offers specialized treatments in oncology and cardiology.",
    },
  ];

  // Function to open the popup with selected hospital data
  const handleImageClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedHospital(null);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Hospitals Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hospitals.map((hospital, index) => (
          <div key={index} className="hospital-card flex flex-col items-center">
            
            {/* Optimized Image with Next.js <Image /> */}
            <Image
              src={hospital.image}
              alt={hospital.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
              onClick={() => handleImageClick(hospital)} // Open popup when image is clicked
            />
            <h2 className="text-2xl font-semibold mb-2">{hospital.name}</h2>
            <p className="text-gray-700 text-center">{hospital.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Dialog */}
      {selectedHospital && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">{selectedHospital.name}</h2>
            <Image
              src={selectedHospital.image}
              alt={selectedHospital.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedHospital.description}</p>
            <p className="text-gray-600">{selectedHospital.extraInfo}</p>
            <button
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-200"
              onClick={closePopup} // Close the popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalsDetails;

