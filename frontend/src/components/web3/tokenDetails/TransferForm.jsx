// import React, { useState, useEffect } from "react";

// const TransferFromToken = ({ web3, tokenAddress, tokenABI }) => {
//   const [recipient, setRecipient] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleTransfer = async () => {
//     const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
//     try {
//       await tokenContract.methods
//         .transfer(recipient, web3.utils.toWei(amount, "ether"))
//         .send({ from: await web3.eth.getCoinbase() });

//       // Clear input fields after successful transfer
//       setRecipient("");
//       setAmount("");
//     } catch (error) {
//       console.error("Failed to transfer tokens:", error);
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded-lg relative">
//       <div className="font-bold mb-2">TransferFrom </div>
//       <div className="mt-2 gap-4 flex flex-col gap-4">
//         <input
//           type="text"
//           value={recipient}
//           onChange={(e) => setRecipient(e.target.value)}
//           placeholder="From Address"
//           className="border border-gray-300 rounded-md p-2 mb-2"
//         />
//         <input
//           type="text"
//           value={recipient}
//           onChange={(e) => setRecipient(e.target.value)}
//           placeholder="Recipient Address"
//           className="border border-gray-300 rounded-md p-2 mb-2"
//         />
//         <input
//           type="text"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount"
//           className="border border-gray-300 rounded-md p-2 mb-2"
//         />
//         <button
//           onClick={handleTransfer}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Transfer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TransferFromToken;















import React, { useState } from "react";

const TransferFromToken = ({ web3, tokenAddress, tokenABI }) => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [approver, setApprover] = useState("");

  const handleApprove = async () => {
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    try {
      const accounts = await web3.eth.getAccounts();
      await tokenContract.methods
        .approve(sender, web3.utils.toWei(amount, "ether"))
        .send({ from: accounts[0] });
      console.log("Approval granted to transfer tokens.");
    } catch (error) {
      console.error("Failed to approve tokens:", error);
    }
  };

  const handleTransferFrom = async () => {
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    try {
      const accounts = await web3.eth.getAccounts();
      await tokenContract.methods
        .transferFrom(approver, recipient, web3.utils.toWei(amount, "ether"))
        .send({ from: accounts[0] });
      console.log("Tokens transferred successfully.");

      // Clear input fields after successful transfer
      setApprover("");
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error("Failed to transfer tokens from:", error);
    }
  };



  
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="font-bold mb-4"> TransferFrom Functionality</h2>
      <h2 className="font-bold ">Note: connect account2 (token holder)with matamask </h2>
      <p>   </p>
      <div className="mb-6 flex flex-col gap-4">
        <div className="font-bold mb-2 ">Token holder (Account2) will approve spender(Account4) to transfer that amount.   </div>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Spender Address"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to Approve"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          onClick={handleApprove}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Approve
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-4 mt-8" >
        <h2 className="font-bold ">Note: connect account4 (spender account) with matamask </h2>
        <div className="font-bold mb-2"> Spender(Account4) will  call this function on the behalf of the (Account2) for the approve  amount .  </div>
        <input
          type="text"
          value={approver}
          onChange={(e) => setApprover(e.target.value)}
          placeholder="Token Holder Address"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
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
          placeholder="Amount to Transfer"
          className="border border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          onClick={handleTransferFrom}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Transfer From
        </button>
      </div>
    </div>
  );
};

export default TransferFromToken;
