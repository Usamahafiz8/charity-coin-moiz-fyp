import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="p-8 rounded-lg w-screen text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">About Charity Foundation</h2>

        <p className="text-lg mb-6">
          Welcome to <strong>Charity Foundation</strong>, where we believe that everyone has the power to make a difference in the world. Our organization is centered around the idea of creating a positive impact through the power of digital currency. Our main initiative, <strong>Charity Coin</strong>, is designed to revolutionize the way people donate to causes they care about, making it easier, more transparent, and more accessible for all.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          At Charity Foundation, our mission is simple: to empower individuals and communities around the world to give and receive support through innovative blockchain technology. <strong>Charity Coin</strong> provides a secure and decentralized platform that allows users to make donations with minimal fees, ensuring that more funds go directly to those in need.
        </p>

        <h3 className="text-2xl font-bold mb-4">What is Charity Coin?</h3>
        <p className="text-lg mb-6">
          <strong>Charity Coin</strong> is a cryptocurrency specifically designed for charitable donations. Through the use of blockchain technology, Charity Coin enables fast, transparent, and secure transactions. Our goal is to eliminate barriers to charitable giving, so anyone, anywhere in the world, can easily contribute to causes that matter to them.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-lg mb-6">
          <li><strong>Transparency</strong>: Every transaction made with Charity Coin is visible on the blockchain, ensuring full transparency and accountability for donors.</li>
          <li><strong>Accessibility</strong>: We aim to make charitable giving available to everyone, no matter where they are located or their financial situation.</li>
          <li><strong>Impact</strong>: We are committed to ensuring that the maximum amount of donations go directly to the people and organizations that need them the most.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Join Us in Making a Difference</h3>
        <p className="text-lg mb-6">
          Whether you are a donor, a charity organization, or simply someone who wants to learn more, we invite you to join us in our mission to create a better, more connected world through <strong>Charity Coin</strong>. Together, we can break down barriers and make charitable giving a part of everyday life for everyone.
        </p>

        <p className="text-lg text-center">
          Thank you for being a part of the Charity Foundation. Let's build a brighter future, one donation at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;