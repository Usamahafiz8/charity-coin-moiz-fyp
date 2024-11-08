import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import AboutUs from './about';

export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrCodeText = "0x2f6764c88Ecc58b73Ca7E477ED95E5099dEe4136"; // Example wallet address

  const handleCopy = () => {
    navigator.clipboard.writeText(qrCodeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-11 min-h-screen overflow-hidden">
      <video
        src="images/Background.mp4" 
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <AnimatePresence>
        <>
          <motion.section
            className="text-center py-12 px-4 z-10" 
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
          >
            <h1 className="md:text-8xl font-bold text-white text-5xl">
              Maximize your token impact<br /> with our no fee model.
            </h1>
            <p className="mt-8 text-2xl font-thin text-white">
              With token for Charity, you can give with confidence knowing that<br /> 
              100% of the net proceeds of your donation support the causes you love.
            </p>
            <motion.a
              className="mt-6 inline-block bg-green-600 font-bold text-xl text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-200"
              onClick={() => setIsVisible(true)} 
            >
              Donate Crypto
            </motion.a>
            <p className="text-green-400 mt-4 text-2xl font-thin">Learn more about our Foundation.</p>
          </motion.section>

          {/* How It Works Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center rounded-lg shadow-lg p-6 z-10">
            <div className="flex flex-col gap-4 text-center md:text-left md:w-1/2">
              <h2 className="text-4xl font-semibold text-white">How it works</h2>
              <p className="text-white text-2xl">
                You can make an impact anytime.
                <br /> nonprofits to support, and we take care of<br /> the rest. token for Charity supports your
                <br /> philanthropy whether that’s through<br /> cryptocurrency, NFTs, or NFT drop proceeds.
              </p>
              <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200" onClick={() => setIsVisible(true)} >
                Donate
              </button>
            </div>
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/images/work.svg"
                alt="Support"
                width={300}  
                height={200} 
                className="rounded-lg md:w-auto md:h-auto" 
              />
            </div>
          </div>

          {/* Why Donate token Section */}
          <div className="bg-gray-600/50 rounded-lg shadow-lg p-6 backdrop-blur-md backdrop-saturate-200 z-10">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/tax.png"
                  alt="Support"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-5">
                  Why donate token <br /> instead of cash?
                </h2>
                <p className="text-white ml-4">
                  Donating token isn’t just for the<br /> greater good, it’s also strategic for<br /> you. When you donate crypto, you...
                </p>
                <div className="flex flex-col space-y-4">
                  {['Support the causes that are important to you', 
                    'May receive a federal income tax deduction equal to the full fair market value', 
                    'Avoid paying capital gains tax on an appreciated asset'].map((text, index) => (
                      <div key={index} className="flex items-center">
                        <div className="relative">
                          <Image
                            src="/images/circle.svg"
                            alt="Support"
                            width={50}
                            height={50}
                            className="rounded-lg mb-2"
                          />
                          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="ml-4 text-white">{text}</p>
                      </div>
                    ))}
                </div>
                <Link href="/about">
                  <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col w-full md:flex-row items-center justify-center">
              <div className="md:w-1/2 flex flex-col gap-10 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-800 text-white" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-800 text-white" 
                />
                <textarea 
                  placeholder="Message" 
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-800 text-white" 
                  rows="4"
                ></textarea>
                <div className="flex justify-center">
                  <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200">
                    Send Message
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img
                src="/images/image_processing.gif"
                alt="Support"
                width={500}
                height={500}
                className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </>
      </AnimatePresence>
      
      {/* Popup Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className="bg-white p-6 rounded-lg max-w-screen-xl text-center">
              <h2 className="text-2xl font-semibold mb-4">Scan to Donate</h2>
              <div className="mb-4">
                <Image 
                  src="/images/QR.jpg" 
                  alt="QR Code" 
                  width={200} 
                  height={200} 
                  className="mx-auto"
                />
              </div>
              <p className="text-xl mb-4">Scan the QR code or use the address below:</p>
              <div className="relative">
                <input 
                  type="text" 
                  value={qrCodeText} 
                  readOnly
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-gray-100 text-gray-800 text-sm"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600"
                  onClick={handleCopy}
                >
                  {copied ? "Done" : "Copy"}
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg
                                hover:bg-green-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>
  );
}
