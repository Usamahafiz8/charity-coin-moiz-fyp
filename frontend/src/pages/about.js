import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="p-8 rounded-lg w-screen text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">About Charity Foundation</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <th className="p-4 text-left bg-gray-700">Introduction</th>
                <td className="p-4">
                  Welcome to <strong>Charity Foundation</strong>, where we believe that everyone has the power to make a difference in the world. Our organization is centered around the idea of creating a positive impact through the power of digital currency.
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <th className="p-4 text-left bg-gray-700">Our Mission</th>
                <td className="p-4">
                  Our mission is to empower individuals and communities worldwide to give and receive support through innovative blockchain technology. <strong>Charity Coin</strong> provides a secure and decentralized platform for seamless donations.
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <th className="p-4 text-left bg-gray-700">What is Charity Coin?</th>
                <td className="p-4">
                  <strong>Charity Coin</strong> is a cryptocurrency specifically designed for charitable donations. Using blockchain technology, it ensures fast, transparent, and secure transactions to eliminate barriers in charitable giving.
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <th className="p-4 text-left bg-gray-700">Our Values</th>
                <td className="p-4">
                  <ul className="list-disc pl-5">
                    <li><strong>Transparency</strong>: Every transaction is visible on the blockchain for full accountability.</li>
                    <li><strong>Accessibility</strong>: Making charitable giving available to everyone, anywhere.</li>
                    <li><strong>Impact</strong>: Ensuring maximum donations reach those in need.</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <th className="p-4 text-left bg-gray-700">Join Us</th>
                <td className="p-4">
                  Whether you are a donor, a charity organization, or just interested, join us in revolutionizing charitable giving through <strong>Charity Coin</strong>.
                </td>
              </tr>

              <tr>
                <th className="p-4 text-left bg-gray-700">Final Words</th>
                <td className="p-4 text-center">
                  Thank you for being a part of Charity Foundation. Let's build a brighter future, one donation at a time.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
