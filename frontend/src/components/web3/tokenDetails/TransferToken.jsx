import React, { useState, useEffect } from "react";

const TransferToken = ({ web3, tokenAddress, tokenABI }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    try {
      await tokenContract.methods
        .transfer(recipient, web3.utils.toWei(amount, "ether"))
        .send({ from: await web3.eth.getCoinbase() });

      // Clear input fields after successful transfer
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error("Failed to transfer tokens:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg relative">
      <div className="font-bold mb-2">Transfer  Functionality  </div>
      <div className="mt-2 gap-4 flex flex-col gap-4">
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient Address"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          onClick={handleTransfer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferToken;