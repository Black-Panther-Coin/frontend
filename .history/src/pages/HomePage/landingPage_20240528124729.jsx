import React from 'react';
import heroImage from '../../assets/images/landing.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: 'fixed' }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white p-4 rounded">
            Welcome to the Landing Page
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
