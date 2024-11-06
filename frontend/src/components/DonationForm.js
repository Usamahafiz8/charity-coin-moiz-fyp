import React, { useState } from "react";

const DonationForm = () => {
  const [isDonor, setIsDonor] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cryptoType: "",
    walletAddress: "0xb123123435364567567889999",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-950 p-6 rounded-lg max-w-screen-md mx-auto border text-white">
      <h2 className="text-2xl font-semibold mb-4">Donation Form</h2>
      
        <form className="space-y-4 mt-4">
          <div>
            <label className="block font-semibold">Name:</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-semibold">Cryptocurrency Type:</label>
            <select 
              name="cryptoType"
              value={formData.cryptoType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select Cryptocurrency</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Litecoin">Litecoin</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Wallet Address:</label>
            <input 
              type="text"
              name="walletAddress"
              value={formData.walletAddress}
              readOnly
              className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 rounded font-bold hover:bg-green-400 transition duration-200"
          >
            Submit Donation
          </button>
        </form>
      
    </div>
  );
};

export default DonationForm;
