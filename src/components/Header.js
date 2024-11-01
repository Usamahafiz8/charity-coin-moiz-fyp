import Link from "next/link";
import React, { useState } from "react";
import OfferBar from "./OfferBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { text: "Pool", path: "/pool" },
    { text: "Registration", path: "/registration" },
    { text: "About", path: "/about" },
    { text: "Emergency Contact", path: "/emergencycontact" },
    { text: "Connect Wallet", path: "/connectwallet" },
    { text: "Hospitals Details", path: "/hospitaldetails" },
  ];

  return ( 
    <>
      <OfferBar /> 
      <div className="bg-gray-950 text-white">
        <header className="bg-gray-950 p-4">
          <div className="container mx-auto flex justify-between items-center relative">
            <Link href="/" className="text-white text-xl font-bold">Charity Foundation</Link>
            
            {/* Hamburger Icon */}
            <button 
              className="text-white lg:hidden h-10 w-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:block mt-5 lg:mt-0`}>
              <div className="space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row">
                {navItems.map(({ text, path }, index) => (
                  <Link 
                    key={index}
                    href={path}
                    className={`text-white py-2 px-4 rounded-lg font-semibold 
                      ${text === "Emergency Contact" ? 
                        "hover:ring-green-600 bg-red-600" : 
                        "hover:ring-green-400 bg-green-600"} 
                      hover:ring-2 transition-all duration-200`}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
