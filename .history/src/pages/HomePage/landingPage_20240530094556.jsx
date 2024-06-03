import React from 'react';
import leftImage from '../../assets/images/landingpanther.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-lightbaige flex items-center">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center p-4 md:p-0">
          <img src={leftImage} alt="Left Side Image" className="h-64 md:h-80 object-contain" />
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left px-4 md:px-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-500">
            Black Panther Token (<span className="text-orange-500">BPNTHR</span>) Pre-Sale is Live
          </h1>
          <p className="mt-2 sm:mt-4 text-base text-purple-600 font-semibold">A MEME COIN WITH PURPOSE!</p>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0">
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none w-full">
              Connect Wallet
            </button>
            <div className="mt-4 text-center">
              <h2 className="text-purple-600 font-bold">JOIN THE BLACK PANTHER <span className="text-orange-500">BPNTHR</span> PRE-SALE</h2>
              <p className="text-sm mt-2">Please go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by copying the Contract Address inside your wallet in order to view the number of tokens you have bought.</p>
              <div className="mt-4 flex flex-col items-center">
                <label className="text-gray-600 mb-1">How many BPNTHR would you like to buy?</label>
                <div className="flex w-full">
                  <input type="text" className="border rounded-l px-4 py-2 w-1/2" placeholder="USD" />
                  <input type="text" className="border rounded-r px-4 py-2 w-1/2" placeholder="$ BPNTHR" />
                </div>
                <button className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-purple-600 focus:outline-none w-full">
                  Proceed to Buy
                </button>
              </div>
              <p className="text-red-500 text-xs mt-2">NB: MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK (NOT ETHEREUM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
