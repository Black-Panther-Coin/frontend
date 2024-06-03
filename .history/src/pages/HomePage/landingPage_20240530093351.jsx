import React from 'react';
import leftImage from '../../assets/images/image.pn.png'; 

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-yellow-500">
      <div className="absolute top-0 left-0 h-full">
        <img src={leftImage} alt="Left Side Image" className="h-full object-cover" />
      </div>

      <div className="flex flex-col justify-start items-center h-full pt-10 md:pt-16 lg:pt-24 xl:pt-32">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-500 text-center px-4">
          Black Panther Token (<span className="text-orange-500">BPNTHR</span>) Pre-Sale is live
        </h1>
        <p className="mt-2 sm:mt-4 text-base text-purple-600 font-semibold">A MEME COIN WITH PURPOSE</p>
      </div>

      <div className="absolute bottom-4 right-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm flex items-center justify-center">
        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
