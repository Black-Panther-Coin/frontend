import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Landing Page</h1>
      <img
        src="/src/assets/landing.png" // Adjust the path if your image is in the public folder
        alt="Hero"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}

export default LandingPage;
