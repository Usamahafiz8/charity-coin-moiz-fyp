import React, { useState } from 'react';
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import { FaClipboard, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons

const Web3Connection = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const connectWallet = async () => {
    if (isRequesting) return;

    if (window.ethereum) {
      try {
        setLoading(true);
        setIsRequesting(true);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        setWalletAddress(accounts[0]);

        // Show success notification
        toast.success("Connected to MetaMask!", {
          position: "top-right",
          autoClose: 3000,
        });
      } catch (error) {
        console.error("Connection error:", error);
        toast.error("Failed to connect MetaMask Wallet.", {
          position: "top-right",
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
        setIsRequesting(false);
      }
    } else {
      toast.error("MetaMask is not installed.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    toast.info("Disconnected from MetaMask.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const shortenAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';
  };

  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress).then(() => {
        toast.success("Address copied to clipboard!", {
          position: "top-right",
          autoClose: 3000,
        });
      }).catch(err => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy address.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
    }
  };

  return (
    <div>
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          disabled={loading || isRequesting}
          className="
            text-green-600 p-2 hover:text-green-300 rounded-2xl
            transition duration-200 cursor-pointer
          "
        >
          {loading ? 'Connecting...' : 'Connect MetaMask'}
        </button>
      ) : (
        <div className="flex items-center relative">
          <p
            onClick={copyToClipboard}
            className="text-green-600 p-2 hover:text-green-300 rounded-2xl transition duration-200 cursor-pointer"
            title="Click to copy address"
          >
            {shortenAddress(walletAddress)}
          </p>
          <span className="tooltip-text absolute left-1/2 transform -translate-x-1/2 mt-1 hidden bg-gray-700 text-white text-xs rounded p-1">
            Copy Address
          </span>
          <button 
            onClick={disconnectWallet} 
            className="text-red-600 p-2 rounded-2xl hover:bg-red-500 hover:text-white transition duration-200"
            title="Disconnect Wallet"
          >
            <FaSignOutAlt />
          </button>
        </div>
      )}
      <ToastContainer /> {/* Include ToastContainer for notifications */}
    </div>
  );
};

export default Web3Connection;
