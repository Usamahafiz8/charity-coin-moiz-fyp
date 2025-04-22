import React, { useState, useEffect } from "react";

const TransferToCharity = ({ web3, poolAddress, poolABI }) => {
  const [tokens, setTokens] = useState([]);
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTokenAddresses();
  }, [web3]);

  const fetchTokenAddresses = async () => {
    if (!web3) {
      setMessage("Web3 not initialized.");
      return;
    }

    const poolContract = new web3.eth.Contract(poolABI, poolAddress);
    try {
      const tokenAddresses = await poolContract.methods
        .getTokenAddresses()
        .call();
      setTokens(tokenAddresses.map((address) => ({ address })));
    } catch (error) {
      console.error("Failed to fetch token addresses:", error);
      setMessage(
        "Failed to fetch token addresses. Check the console for more details."
      );
    }
  };

  // useEffect(() => {
  //   if (tokens.length > 0) {
  //     fetchTokenBalance();
  //   }
  // }, [selectedTokenIndex, tokens]);

  // const fetchTokenBalance = async () => {
  //   if (!web3 || tokens.length === 0) {
  //     return;
  //   }

  //   const accounts = await web3.eth.getAccounts();
  //   if (accounts.length === 0) {
  //     setMessage("No accounts found. Connect your wallet.");
  //     return;
  //   }

  //   const poolContract = new web3.eth.Contract(poolABI, poolAddress);
  //   try {
  //     const balance = await poolContract.methods.getDonationBalance(tokens[selectedTokenIndex].address, accounts[0]).call();
  //     setTokenBalance(web3.utils.fromWei(balance, "ether"));
  //   } catch (error) {
  //     console.error("Failed to fetch donation balance:", error);
  //     setMessage("Failed to fetch balance. Check the console for more details.");
  //   }
  // };

  const approveAndDonate = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }
    if (!recipientAddress) {
      setMessage("Please enter a valid recipient address.");
      return;
    }

    if (!web3) {
      setMessage("Web3 not initialized. Connect to a wallet.");
      return;
    }

    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      setMessage("No accounts found. Make sure your wallet is connected.");
      return;
    }

    const poolContract = new web3.eth.Contract(poolABI, poolAddress);
    const amountToSend = web3.utils.toWei(amount, "ether");

    try {
      setIsLoading(true);
      await poolContract.methods
        .approveSpending(tokens[selectedTokenIndex].address, amountToSend)
        .send({ from: accounts[0] });
      setMessage("Approval successful, proceeding with donation...");

      await poolContract.methods
        .transferToCharity(
          tokens[selectedTokenIndex].address,
          recipientAddress,
          amountToSend
        )
        .send({ from: accounts[0] });
      setMessage("Donation successful!");
      setAmount("");
      fetchTokenBalance();
    } catch (error) {
      console.error("Operation failed:", error);
      setMessage("Operation failed. Check the console for more details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 w-full mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h3 className="text-lg text-center font-semibold mb-4">
        Transfer To Charity
      </h3>
      <div>
        <label
          htmlFor="token-select"
          className="text-lg text-center font-semibold mb-4"
        >
          Select Token
        </label>
        <select
          id="token-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedTokenIndex}
          onChange={(e) => setSelectedTokenIndex(e.target.value)}
        >
          {tokens.map((token, index) => (
            <option key={token.address} value={index}>
              {token.address}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="recipient-address"
          className="text-lg text-center font-semibold mb-4"
        >
          Recipient Address
        </label>
        <input
          type="text"
          id="recipient-address"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter recipient address"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </div>
      <div>
        {/* <p className="font-semibold mb-4">
          Your Donation Balance: {tokenBalance || "Loading..."}
        </p> */}
      </div>
      <div>
        <label htmlFor="amount" className="font-semibold mb-4">
          Amount to Donate
        </label>
        <input
          type="number"
          id="amount"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        onClick={approveAndDonate}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading || !amount || !recipientAddress}
      >
        {isLoading ? "Processing..." : "Approve & Donate"}
      </button>
      {message && (
        <p className="text-center text-sm font-medium text-red-500">
          {message}
        </p>
      )}
    </div>
  );
};

export default TransferToCharity;