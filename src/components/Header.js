import Link from "next/link";
import React, { useState } from "react";
import OfferBar from "./OfferBar";
import Web3Connection from "@/utils/web3Connection";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OfferBar />
      <div className="bg-gray-950 text-white">
        <div className="font-sans font-bold text-sm m-0 p-6 box-border">
          <header className="bg-gray-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link
                href="/"
                className="text-white text-lg font-bold hover:cursor-pointer"
              >
                Charity Foundtion
              </Link>

              {/* Hamburger Icon */}
              <button
                className="text-white block lg:hidden"
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

              {/* Navigation Links */}
              <nav
                className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}
              >
                <ul className="flex flex-col md:flex-row md:items-center list-none space-y-4 md:space-y-0 md:space-x-5">
                  <li className="">
                    <Link href="/Pool" className="text-white">
                      Pool
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/registration" className="text-white ">
                      Registration
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/hospitaldetails">
                      Hospitals Details
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/about" className="text-white">
                      About
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/contact"
                      className="text-red-600  rounded-xl hover:text-red-400 "
                    >
                      EmergencyContact
                    </Link>
                  </li>
                  <li className="">
                    <Web3Connection />
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
