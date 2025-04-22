import React, { useState, useEffect } from 'react';

const DonateERC20 = ({ web3, poolAddress, tokens }) => {
    const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);
    const selectedToken = tokens[selectedTokenIndex];
    const [tokenBalance, setTokenBalance] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchTokenBalance().finally(() => setIsLoading(false));
      }, [selectedTokenIndex, web3, poolAddress]);
    
    const fetchTokenBalance = async () => {
        if (!web3) {
            setMessage('Web3 not initialized.');
            return;
        }

        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            setMessage('No accounts found. Connect your wallet.');
            return;
        }

        const tokenContract = new web3.eth.Contract(selectedToken.tokenABI, selectedToken.address);
        try {
            const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
            setTokenBalance(web3.utils.fromWei(balance, 'ether'));
        } catch (error) {
            console.error('Failed to fetch token balance:', error);
            setMessage('Failed to fetch balance');
        }
    };





    const handleTransfer = async () => {
        if (!web3) {
            setMessage('Web3 is not initialized.');
            return;
        }
    
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            setMessage('No accounts found. Connect your wallet.');
            return;
        }
    
        const fromAddress = accounts[0]; // typically the user's primary account
        const tokenContract = new web3.eth.Contract(selectedToken.tokenABI, selectedToken.address);
    
        try {
            const weiAmount = web3.utils.toWei(amount, "ether");
            console.log(`Transferring ${weiAmount} Wei to ${poolAddress} from ${fromAddress}`);
    
            await tokenContract.methods
                .transfer(poolAddress, weiAmount)
                .send({ from: fromAddress });
    
            setMessage('Donation successful!');
            setAmount(""); // Reset the amount after successful transfer
        } catch (error) {
            console.error("Failed to transfer tokens:", error);
            setMessage('Failed to transfer tokens: ' + error.message);
        }
    };
    

    return (
        <div className="p-5 w-full mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h3 className="text-center text-lg font-medium leading-6 text-gray-900">Donate Tokens</h3>
            <div>
                <label htmlFor="token-select" className="block text-sm font-medium text-gray-700">Select Token</label>
                <select
                    id="token-select"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={selectedTokenIndex}
                    onChange={e => setSelectedTokenIndex(parseInt(e.target.value))}
                >
                    {tokens.map((token, index) => (
                        <option key={token.address} value={index}>
                            {token.name}    
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p className="text-sm font-medium">Your Balance: {tokenBalance || 'Loading...'}</p>
            </div>
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount to Donate</label>
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
                onClick={handleTransfer}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isLoading || !amount}
            >
                {isLoading ? 'Processing...' : 'Donate'}
            </button>
            {message && (
                <p className="text-center text-sm font-medium text-red-500">{message}</p>
            )}
        </div>
    );
};

export default DonateERC20;