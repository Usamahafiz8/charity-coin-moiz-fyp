// // import React, { useState } from "react";
// // import { ethers } from "ethers";
// // import WalletConnectProvider from "@walletconnect/web3-provider";

// // const WalletConnectComponent = () => {
// //   const [account, setAccount] = useState(null);
// //   const [provider, setProvider] = useState(null);

// //   const connectWallet = async (walletType) => {
// //     try {
// //       let web3Provider;
      
// //       // Handle MetaMask connection
// //       if (walletType === "metamask") {
// //         if (typeof window.ethereum !== "undefined") {
// //           await window.ethereum.request({ method: "eth_requestAccounts" });
// //           web3Provider = new ethers.providers.Web3Provider(window.ethereum);
// //         } else {
// //           alert("MetaMask not detected. Please install MetaMask.");
// //           return;
// //         }
// //       }
      
// //       // Handle WalletConnect connection
// //       if (walletType === "walletconnect") {
// //         const walletConnectProvider = new WalletConnectProvider({
// //           infuraId: "YOUR_INFURA_PROJECT_ID", // You can also use your own Infura project ID
// //         });

// //         // Enable session (triggers QR Code modal)
// //         await walletConnectProvider.enable();
// //         web3Provider = new ethers.providers.Web3Provider(walletConnectProvider);
// //       }

// //       // Use the provider for Ethereum interaction
// //       const signer = web3Provider.getSigner();
// //       const accounts = await signer.getAddress();
// //       setAccount(accounts);
// //       setProvider(web3Provider);
// //       console.log("Wallet connected: ", accounts);
// //     } catch (error) {
// //       console.error("Error connecting wallet: ", error);
// //       alert("Failed to connect wallet. Check the console for more details.");
// //     }
// //   };

// //   return (
// //     <div className="wallet-connect">
// //       {/* Button to trigger MetaMask connection */}
// //       <button
// //         onClick={() => connectWallet("metamask")}
// //         className="bg-blue-500 text-white py-2 px-4 rounded ml-2 hover:bg-blue-600 transition duration-200"
// //       >
// //         Connect MetaMask
// //       </button>

// //       {/* Button to trigger WalletConnect connection */}
// //       <button
// //         onClick={() => connectWallet("walletconnect")}
// //         className="bg-green-500 text-white py-2 px-4 rounded ml-2 hover:bg-green-600 transition duration-200"
// //       >
// //         Connect WalletConnect
// //       </button>

// //       {/* Show connected account if available */}
// //       {account && <p className="mt-4">Connected Account: {account}</p>}
// //     </div>
// //   );
// // };

// // export default WalletConnectComponent;
// import React, { useState } from "react"; 
// import { ethers } from "ethers";
// import WalletConnectProvider from "@walletconnect/web3-provider";

// const WalletConnectComponent = () => {
//   const [account, setAccount] = useState(null);
//   const [provider, setProvider] = useState(null);

//   // Function to connect wallet (MetaMask, Trust Wallet, etc.)
//   const connectWallet = async (walletType) => {
//     if (account) {
//       alert("Wallet already connected.");
//       return;
//     }

//     try {
//       let web3Provider;

//       // Handle MetaMask connection
//       if (walletType === "metamask") {
//         if (typeof window.ethereum !== "undefined") {
//           await window.ethereum.request({ method: "eth_requestAccounts" });
//           web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//         } else {
//           alert("MetaMask not detected. Please install MetaMask.");
//           return;
//         }
//       }

//       // Handle WalletConnect connection
//       if (walletType === "walletconnect") {
//         const walletConnectProvider = new WalletConnectProvider({
//           infuraId: "06de5b4c6675408b868e43e5f1916af0", // Your Infura Project ID
//           bridge: "https://bridge.walletconnect.org", // Use this bridge URL
//         });

//         // Enable session (triggers QR Code modal)
//         await walletConnectProvider.enable();
//         web3Provider = new ethers.providers.Web3Provider(walletConnectProvider);
//       }

//       // Use the provider for Ethereum interaction
//       const signer = web3Provider.getSigner();
//       const accounts = await signer.getAddress();
//       setAccount(accounts);
//       setProvider(web3Provider);
//       console.log("Wallet connected: ", accounts);
//     } catch (error) {
//       console.error("Error connecting wallet: ", error);
//       alert("Failed to connect wallet. Try again.");
//     }
//   };

//   return (
//     <div className="wallet-connect">
//       {/* Buttons to connect different wallets */}
//       <button
//         onClick={() => connectWallet("metamask")}
//         className="bg-blue-500 text-white py-2 px-4 rounded ml-2 hover:bg-blue-600 transition duration-200"
//       >
//         Connect MetaMask
//       </button>

//       <button
//         onClick={() => connectWallet("walletconnect")}
//         className="bg-green-500 text-white py-2 px-4 rounded ml-2 hover:bg-green-600 transition duration-200"
//       >
//         Connect WalletConnect 
//       </button>

//       {/* Show connected account if available */}
//       {account && <p className="mt-4">Connected Account: {account}</p>}
//     </div>
//   );
// };

// export default WalletConnectComponent;
