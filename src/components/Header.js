import Link from "next/link"; 
import React, { useState } from "react";
import OfferBar from "./OfferBar";
// import WalletConnectComponent from "./WalletConnectComponent";






const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return ( 
    <>
    <OfferBar/>
    <div className="bg-gray-950 text-white">
    <div className="font-sans font-bold m-0 p-6 box-border">
      <header className="bg-gray-950 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Charity Foundtion</div>
          
          

           {/* Hamburger Icon */}
            <button 
            className="text-white block md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
            >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
             </svg>
             </button>

             {/* Navigation Links */}
             <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
             <ul className="flex flex-col md:flex-row md:items-center list-none space-y-4 md:space-y-0 md:space-x-5">
              <li className="mr-2.5">
                <Link href="/Pool" className="text-white" >Pool</Link>
              </li>
              <li className="mr-2.5">
                <Link href="/registration" className="text-white ">Registration</Link>
              </li>

              <li className="mr-2.5">
                <Link href="/about" className="text-white">About</Link>
              </li>

              <li className="mr-2.5  bg-red-600 rounded-2xl p-2">
                <Link href="/contact" className="text-white bg-red-600  rounded-xl ">EmergencyContact</Link>
              </li>

              <li className="mr-2.5">
              <button
              // onClick={() => connectWallet("walletconnect")}
              className="bg-green-600 text-white py-2 px-4 rounded-2xl  hover:bg-green-400 transition duration-200"
              >
              Connect Wallet
              </button>

              {/* <WalletConnectComponent/> */}
              </li>
              <li className="mr-2.5">
              <Link href="/hospitaldetails">
         <button className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-400 duration-200">
            Hospitals Details
          </button>
              
            </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
  </>
  );
};

export default Header;

