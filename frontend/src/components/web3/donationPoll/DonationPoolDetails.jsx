import React, { useState, useEffect } from "react";

const DonationPoolDetails = ({ web3, poolAddress, poolABI }) => {
  const [details, setDetails] = useState({
    adminAddress: "",
    contractAddress: poolAddress,
    donations: [],
    error: "",
  });

  useEffect(() => {
    fetchDetails();
  }, [poolAddress]);

  const fetchDetails = async () => {
    if (!web3 || !poolAddress) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        error: "Web3 or contract address not provided.",
      }));
      return;
    }

    const poolContract = new web3.eth.Contract(poolABI, poolAddress);
    try {
      const admin = await poolContract.methods.owner().call();
      const tokenAddresses = await poolContract.methods
        .getTokenAddresses()
        .call();
      const donations = await Promise.all(
        tokenAddresses.map(async (token) => {
          const total = await poolContract.methods
            .getTotalDonations(token)
            .call();
          return { token, total: web3.utils.fromWei(total, "ether") };
        })
      );

      setDetails({
        adminAddress: admin,
        donations,
        error: "",
      });
    } catch (error) {
      console.error("Failed to fetch details", error);
      setDetails((prevDetails) => ({
        ...prevDetails,
        error: error.message || "Failed to fetch details",
      }));
    }
  };

  const handleRefresh = () => {
    fetchDetails();
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h5 className="text-lg text-center font-semibold mb-4">
        Donation Pool Details
      </h5>
      <button
        onClick={handleRefresh}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refresh Data
      </button>
      <p>
        <strong>Admin Address:</strong> {details.adminAddress}
      </p>
      <p>
        <strong>Contract Address:</strong> {poolAddress}
      </p>
      {details.donations.length > 0 ? (
        <>
          <h6 className="text-md font-semibold mb-2">Token Donated :</h6>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Token Address</th>
                <th className="py-3 px-6 text-right">Total Donated</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {details.donations.map((donation, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {donation.token}
                  </td>
                  <td className="py-3 px-6 text-right">
                    {donation.total} tokens
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No donations to display.</p>
      )}
      {details.error && <p className="text-red-500 mt-4">{details.error}</p>}
    </div>
  );
};

export default DonationPoolDetails;