import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';


export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-gray-950 flex flex-col items-center justify-center gap-11 min-h-screen">
      <AnimatePresence>
        <motion.section
          className="text-center py-12 px-4"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-6xl font-bold text-white">
            Maximize your crypto impact<br /> with our no fee model.
          </h1>
          <p className="mt-8 text-2xl text-white">
            With Crypto for Charity, you can give with confidence knowing that<br /> 
            100% of the net proceeds of your donation support the causes you love.
          </p>
          <motion.a
            href="/registration"
            className="mt-6 inline-block bg-green-600 font-bold text-xl text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-200"
          >
            Donate Crypto
          </motion.a>
          <p className="text-green-400 mt-4 text-2xl">Learn more about our Foundation.</p>
        </motion.section>

        <div className="w-48 h-52">
          <video
            src="/images/Animation.webm"
            width="100%"
            height="100%"
            
            loop
            muted
            autoPlay
            className=" "
           
          />
        </div>

        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly bg-gray-950 rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">How it works</h2>
            <p className="text-white">
              You can make an impact anytime.<br /> Choose from more than 55,000 501(c)(3)
              <br /> nonprofits to support, and we take care of<br /> the rest. Crypto for Charity supports your
              <br /> philanthropy whether that’s through<br /> cryptocurrency, NFTs, or NFT drop proceeds.
            </p>
            <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200">
              Donate
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/work.svg"
              alt="Support"
              width={400}
              height={300}
              className="rounded-lg"
            />
            
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-950 p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/crypto.svg"
              alt="Support"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-5">
              Why donate crypto <br /> instead of cash?
            </h2>
            <p className="text-white">
              Donating crypto isn’t just for the<br /> greater good, it’s also strategic for<br /> you. When you donate crypto, you...
            </p>
            <div className="flex flex-col space-y-4">
         {/* Image 1 */}
        <div className="flex items-center">
          <div className="relative">
            <Image
              src="/images/circle.svg"
              alt="Support"
              width={50}
              height={50}
              className="rounded-lg mb-2"
            />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
        1
      </span>
    </div>
    <p className="ml-4 text-white">Support the causes that are important to<br/> you</p>
  </div>

  {/* Image 2 */}
  <div className="flex items-center">
    <div className="relative">
      <Image
        src="/images/circle.svg"
        alt="Support"
        width={50}
        height={50}
        className="rounded-lg mb-2"
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
        2
      </span>
    </div>
    <p className="ml-4 text-white">May receive a federal income tax<br/> deduction equal to the full fair market<br/> value</p>
  </div>

  {/* Image 3 */}
  <div className="flex items-center">
    <div className="relative">
      <Image
        src="/images/circle.svg"
        alt="Support"
        width={50}
        height={50}
        className="rounded-lg mb-2"
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
        3
          </span>
        </div>
        <p className="ml-4 text-white">Avoid paying capital gains tax on an<br/> appreciated asset</p>
      </div>
   </div>
          <Link href="/about">
          <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200">
               Learn more
           </button>
          </Link>
          </div>
       </div>

       <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly bg-gray-950 rounded-lg shadow-lg p-6">
  {/* Left Side: Text and Button */}
  <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
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
    >
      
    </textarea>

    <button className="w-32 h-10 bg-green-600 text-white font-bold rounded-full hover:bg-green-400 transition duration-200">
      Send Message
    </button>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2 flex justify-center">
    <Image
      src="/images/image_processing.gif"
      alt="Support"
      width={500}
      height={500}
      className="rounded-lg"
    />
  </div>
</div>



    </AnimatePresence>
    </div>
          );
          }
