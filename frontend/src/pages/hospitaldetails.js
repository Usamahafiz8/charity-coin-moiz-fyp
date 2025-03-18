import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HospitalsDetails = () => {
  const [activeTab, setActiveTab] = useState("hospitals");
  const [data, setData] = useState({
    hospitals: [],
    trusties: [],
    patients: [],
    charities: [],
  });

  const [selectedWallet, setSelectedWallet] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fetchData = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/${category}`);
      const result = await response.json();
      setData((prev) => ({ ...prev, [category]: result }));
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const renderTabs = () => (
    <div className="flex justify-center space-x-4 mb-6">
      {["hospitals", "trusty", "patients", "charity"].map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-lg font-semibold text-white ${
            activeTab === category ? "bg-green-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );

  const renderList = () => {
    if (!data[activeTab]?.length) return <p className="text-white">No data found.</p>;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data[activeTab].map((item, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl text-green-400 font-semibold mb-2">{item.name}</h3>
            <p className="text-white">Email: {item.email || "N/A"}</p>
            <p className="text-white">Contact: {item.contact || "N/A"}</p>
            {item.wallet_address && <p className="text-white">Wallet: {item.wallet_address}</p>}
            {item.location && <p className="text-white">Location: {item.location}</p>}
            {item.age && <p className="text-white">Age: {item.age}</p>}
            {item.purpose && <p className="text-white">Purpose: {item.purpose}</p>}
            <motion.button
              className="mt-6 inline-block bg-green-600 font-bold text-xl text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-200"
              onClick={() => setSelectedWallet(item.wallet_address)}
            >
              Donate Here
            </motion.button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Details</h1>

      {renderTabs()}
      {renderList()}

      <AnimatePresence>
        {selectedWallet && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className="bg-white p-6 rounded-lg max-w-screen-xl text-center">
              <h2 className="text-2xl font-semibold mb-4">Scan to Donate</h2>
              <div className="mb-4">
                <Image
                  src="/images/QR.jpg"
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <p className="text-xl mb-4">Scan the QR code or use the address below:</p>
              <div className="relative">
                <input
                  type="text"
                  value={selectedWallet}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-gray-100 text-gray-800 text-sm"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600"
                  onClick={() => handleCopy(selectedWallet)}
                >
                  {copied ? "Done" : "Copy"}
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setSelectedWallet(null)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HospitalsDetails;
