import React, { useState, useEffect } from "react";

const BasicTokenDetails = ({ web3, tokenAddress, tokenABI }) => {
  const [totalSupply, setTotalSupply] = useState("Loading...");
  const [userBalance, setUserBalance] = useState("Loading...");
  const [tokenName, setTokenName] = useState("Loading...");
  const [tokenSymbol, setTokenSymbol] = useState("Loading...");
  const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
    if (web3 && tokenAddress && tokenABI) {
      const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
      loadTokenData(tokenContract);
    }
  }, [web3, tokenAddress, tokenABI]);

  const loadTokenData = async (tokenContract) => {
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        console.error("No accounts found. Ensure MetaMask is connected.");
        return;
      }
      const supply = await tokenContract.methods.totalSupply().call();
      const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
      const name = await tokenContract.methods.name().call();
      const symbol = await tokenContract.methods.symbol().call();

      setTotalSupply(web3.utils.fromWei(supply, "ether"));
      setUserBalance(web3.utils.fromWei(balance, "ether"));
      setTokenName(name);
      setTokenSymbol(symbol);
    } catch (error) {
      console.error("Failed to fetch token data:", error);
      setTotalSupply("Failed to load");
      setUserBalance("Failed to load");
      setTokenName("Error");
      setTokenSymbol("Error");
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    await loadTokenData(tokenContract);
  };



  return (
    <div className="p-4 bg-white shadow rounded-lg relative">
      <button
        onClick={handleRefresh}
        disabled={refreshing}
        className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full inline-flex items-center justify-center"
        title="Refresh"
      >
        {refreshing ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm16 0a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h5M4 4l10 10m6 6v-5h-5m5 5L10 10m0 10v-5H5m5 5L5 5"
            ></path>
          </svg>
        )}
      </button>
      <div className="font-bold mb-2">Charity Coin Details</div>
      <div>Name: {tokenName}</div>
      <div>Symbol: {tokenSymbol}</div>
      <div>Token Address: {tokenAddress}</div>
      <div>Total Supply: {totalSupply}</div>
      <div>Your Balance: {userBalance}</div>

    </div>
  );
};

export default BasicTokenDetails;