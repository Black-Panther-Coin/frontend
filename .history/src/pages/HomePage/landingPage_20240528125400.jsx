import React from 'react';
import heroImage from '../../assets/images/landing.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex flex-col items-center justify-start w-full h-full pt-20">
          <h1 className="text-4xl font-bold text-purple-500 mb-8">
            Welcome to the Landing Page
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
