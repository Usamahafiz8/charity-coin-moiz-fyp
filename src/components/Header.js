import Link from "next/link";    
import React, { useState } from "react";
import OfferBar from "./OfferBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return ( 
    <>
      <OfferBar />
      <div className="bg-gray-950 text-white">
        <div className="font-sans font-bold m-0 p-0 box-border">
          <header className="bg-gray-950 p-4">
            <div className="container mx-auto flex justify-between items-center relative">
              <Link href="/" className="text-white text-xl font-bold hover:cursor-pointer">Charity Foundation</Link>
              
              {/* Hamburger Icon */}
              <button 
                className="text-white block lg:hidden h-10 w-10 flex items-center justify-center" // Fixed size
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:block mt-5`}>
                <ul 
                  className={`absolute left-0 right-0 mt-2 bg-gray-950 ${
                    isOpen ? 'border border-white' : 'border-0'
                  } transition-all duration-300 ease-in-out rounded-md ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden flex flex-col md:items-center list-none gap-2 z-50 lg:static lg:max-h-full lg:opacity-100 lg:flex-row lg:border-0`}
                  style={{ marginLeft: '5px' }} // Move the menu right by 5px
                >
                  {["Pool", "Registration", "About", "EmergencyContact", "Connect Wallet", "Hospitals Details"].map((text, index) => (
                    <li key={index}>
                      <Link 
                        href={`/${text.toLowerCase().replace(' ', '')}`} // Assuming your routes are lowercase and without spaces
                        className="text-white hover:bg-gray-700 rounded-md p-2 transition duration-200"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
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
