import React from 'react';

function LandingPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src="/src/assets/images/landing.png" // Adjust the path if your image is in the public folder
        alt="Hero"
        className="w-full h-auto object-cover"
      />
      <h1 className="absolute text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
        Welcome to the Landing Page
      </h1>
    </div>
  );
}

export default LandingPage;
