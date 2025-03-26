import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrCodeText = "0x2f6764c88Ecc58b73Ca7E477ED95E5099dEe4136";

  const handleCopy = () => {
    navigator.clipboard.writeText(qrCodeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 min-h-screen overflow-hidden px-4 md:px-8">
      <video
        src="images/Background.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Header Section */}
      <motion.section className="text-center py-12" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Maximize your token impact with <br/>our no fee model.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white font-light">
          With token for Charity, 100% of the net proceeds of your donation support the causes you love.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <motion.button
            className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-500 transition"
            onClick={() => setIsVisible(true)}
          >
            Donate Crypto
          </motion.button>
          <Link href="/registration" className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-500 transition">
            Register
          </Link>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center bg-gray-700/60 p-6 rounded-lg shadow-lg backdrop-blur-lg w-full max-w-5xl">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-semibold text-white">How it works</h2>
          <p className="mt-4 text-lg text-white">
            You can make an impact anytime. We take care of the rest, supporting philanthropy via cryptocurrency.
          </p>
          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-500 transition" onClick={() => setIsVisible(true)}>
            Donate Directly
          </button>
        </div>
        <Image src="/images/work.svg" alt="Support" width={300} height={200} className="rounded-lg" />
      </section>

      {/* Why Donate Token Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center bg-gray-700/60 p-6 rounded-lg shadow-lg backdrop-blur-lg w-full max-w-5xl">
        <Image src="/images/tax.png" alt="Tax Benefits" width={400} height={300} className="rounded-lg" />
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-semibold text-white">Why donate token instead of cash?</h2>
          <p className="mt-4 text-lg text-white">
            Donating token is not just for the greater good, it’s also strategic for you. You can:
          </p>
          <ul className="mt-4 space-y-2 text-white">
            <li>✅ Support causes that matter to you</li>
            <li>✅ Receive tax deductions</li>
            <li>✅ Avoid capital gains tax</li>
          </ul>
          <Link href="/about" className="mt-4 inline-block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-500 transition">
            Learn more
          </Link>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gray-700/60 p-6 rounded-lg shadow-lg backdrop-blur-lg w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-white text-center">Get in Touch</h2>
        <form className="mt-6 flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
          <input type="email" placeholder="Email" className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
          <textarea placeholder="Message" rows="4" className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-500 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white p-6 rounded-lg text-center max-w-md">
              <h2 className="text-2xl font-semibold">Scan to Donate</h2>
              <Image src="/images/QR.jpg" alt="QR Code" width={200} height={200} className="mx-auto mt-4" />
              <p className="mt-4">Scan the QR code or use the address below:</p>
              <div className="relative mt-2">
                <input type="text" value={qrCodeText} readOnly className="w-full px-4 py-2 bg-gray-100 border rounded-lg" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition" onClick={() => setIsVisible(false)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
