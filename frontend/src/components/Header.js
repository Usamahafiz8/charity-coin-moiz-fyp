import Link from "next/link"; 
import React, { useState } from "react";
import Web3Connection from "../utils/web3Connection";

// @ts-ignore

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-950 text-white">
        <div className="font-sans font-bold text-sm m-0 p-2 box-border">
          <header className="bg-gray-950 p-2">
            <div className="container mx-auto flex justify-between items-center">
              <Link
                href="/"
                className="text-white text-lg font-bold hover:cursor-pointer"
              >
                Charity Foundation
              </Link>

              {/* Hamburger Icon */}
              <button
                className="text-white block lg:hidden md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex">
                <ul className="flex flex-row items-center list-none space-x-5">
                <li><Link href="/" className="text-white">Home</Link></li>
                  <li><Link href="/registration" className="text-white">Registration</Link></li>
                  <li><Link href="/hospitaldetails" className="text-white">Hospitals Details</Link></li>
                  <li><Link href="/about" className="text-white">About</Link></li>
                  <li><Link href="/emergencycontact" className="text-red-600 rounded-xl hover:text-red-400">Emergency Contact</Link></li>
                  <li><Web3Connection /></li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Mobile Dropdown Navigation */}
          {isOpen && (
            <div className="bg-gray-950 lg:hidden">
              <nav>
                <ul className="flex flex-col items-center list-none space-y-4 py-4">
                  <li><Link href="/Pool" className="text-white">Pool</Link></li>
                  <li><Link href="/registration" className="text-white">Registration</Link></li>
                  <li><Link href="/hospitaldetails" className="text-white">Hospitals Details</Link></li>
                  <li><Link href="/about" className="text-white">About</Link></li>
                  <li><Link href="/contact" className="text-red-600 rounded-xl hover:text-red-400">Emergency Contact</Link></li>
                  <li><Web3Connection /></li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
