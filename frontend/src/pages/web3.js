"use client";
// import WalletConnect from "../components/web3/WalletConnect";
import React, { useState } from "react";
import CharityCoinABI from "../components/web3/coin_abi";
import poolABI from "../components/web3/DonationPool_ABI";
import DonateERC20 from "../components/web3/donationPoll/Donate";
import BasicTokenDetails from "../components/web3/tokenDetails/BasicDetails";
import TransferToken from "../components/web3/tokenDetails/TransferToken";
import TransferFromToken from "../components/web3/tokenDetails/TransferForm";
import DonationPoolDetails from "../components/web3/donationPoll/DonationPoolDetails";
import TransferToCharity from "../components/web3/donationPoll/TransferToCharity";
import WalletConnect from "../components/web3/WalletConnect";

const tokenAddress = "0x006cce36399596E6D05bFE04126734b6B3a5F2D9"; // Your Token contract address
const poolAddress = "0x20007fA59093c91f9987D9c0dA60DB3Cba3947a7"; // Your Donation Pool contract address

const TokenList = [
  { name: "Charity Coin", address: tokenAddress, tokenABI: CharityCoinABI },
 
  // { name: "Second Coin", address: "", tokenABI: tokenABI },
  // { name: "Third Coin", address: "", tokenABI: tokenABI },
];

const donations = [
  { address: "0x123...", balance: "100" },
  { address: "0x456...", balance: "200" },

];

const Web3 = () => {
  const [web3, setWeb3] = useState(null);

  return (
    <div className="p-7 space-y-6">
      <div className="xl:w-full lg:w-full md:w-full">
        <WalletConnect setWeb3Instance={setWeb3} />
      </div>
      {web3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <BasicTokenDetails
              web3={web3}
              tokenAddress={tokenAddress}
              tokenABI={CharityCoinABI}
            />

            <TransferToken
              web3={web3}
              tokenAddress={tokenAddress}
              tokenABI={CharityCoinABI}
            />
            <TransferFromToken
              web3={web3}
              tokenAddress={tokenAddress}
              tokenABI={CharityCoinABI}
            />
 
          </div>

          <div className="flex flex-col gap-4">
            <DonationPoolDetails
              web3={web3}
              poolAddress={poolAddress}
              poolABI={poolABI}
            />

            <DonateERC20
              web3={web3}
              poolAddress={poolAddress}
              // poolABI={poolABI}
              tokens={TokenList}
            />
            <TransferToCharity
              web3={web3}
              poolAddress={poolAddress}
              poolABI={poolABI}
              tokens={TokenList}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Web3;