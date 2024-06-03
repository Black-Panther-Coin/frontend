import React from 'react';
import heroImage from '../../assets/images/landing.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-500 text-center px-4">
            Welcome to the Landing Page
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
