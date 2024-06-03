import React from 'react';
import heroImage from './assets/landing.png'; // Import the image if it's in the src/assets folder

function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
            Welcome to the Landing Page
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
