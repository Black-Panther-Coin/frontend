import React from 'react';
import heroImage from '../../assets/images/landing.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex flex-col justify-start items-center h-full pt-10 md:pt-20 lg:pt-28 xl:pt-36">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-500 text-center px-4">
            Black Panther Token (<span className="text-orange-500">BPNTHR</span>) Pre-Sale is live
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;