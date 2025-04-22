// components/WalletConnect.js
// import { div, Button, h1 } from "@mui/material";
import React, { useState, useEffect } from "react";
import Web3 from "web3";

const WalletConnect = ({ setWeb3Instance }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      // Initialize web3 instance with the provided provider from the browser (MetaMask)
      const web3 = new Web3(window.ethereum);

      const loadAccountData = async () => {
        try {
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setIsConnected(true);
            setAccount(accounts[0]);
            setWeb3Instance(web3); // Pass the web3 instance back to the parent component
            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(balance, "ether"));
          } else {
            setIsConnected(false);
            setAccount("");
            setBalance("0");
          }
        } catch (err) {
          console.error("Error fetching accounts", err);
        }
      };

      loadAccountData();

      // Event listener for account changes
      window.ethereum.on("accountsChanged", function (accounts) {
        if (accounts.length > 0) {
          setIsConnected(true);
          setAccount(accounts[0]);
          setWeb3Instance(web3); // Re-set the web3 instance in case of account change
          loadAccountData();
        } else {
          setIsConnected(false);
          setAccount("");
          setBalance("0");
          setWeb3Instance(null);
        }
      });
    } else {
      console.error("MetaMask is not installed.");
    }
  }, [setWeb3Instance]);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setIsConnected(true);
          setAccount(accounts[0]);
          setWeb3Instance(web3);
          const balance = await web3.eth.getBalance(accounts[0]);
          setBalance(web3.utils.fromWei(balance, "ether"));
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        console.error("User denied account access", error);
      }
    }
  };
  return (
    <div>
      {isConnected ? (
        <div
          styles={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>
            Wallet Connected: <strong>{account}</strong>
          </h1>
          <h1>
            Balance: <strong> {balance} ETH </strong>
          </h1>
        </div>
      ) : (
        <div
          styles={{
            textAlign: "center",
          }}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;