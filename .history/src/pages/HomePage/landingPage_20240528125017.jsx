import React from 'react';
import heroImage from '../../assets/images/landing.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full  bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex flex-col items-center justify-start w-full h-full bg-black bg-opacity-50 pt-20">
          <h1 className="text-4xl font-bold text-white p-4 rounded">
            Welcome to the Landing Page
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
