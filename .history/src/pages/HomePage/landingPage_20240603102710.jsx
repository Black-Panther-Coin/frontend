import React from 'react';
import pantherImage from '../../assets/images/new.png';

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-lightbaige">
      <div className="flex flex-col justify-center items-center h-full text-center mt-16">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
          Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
        </h1>
        <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">A MEME COIN WITH PURPOSE!</p>
      </div>

      <div className="absolute left-0 bottom-8 flex items-end">
        <img src={pantherImage} alt="Black Panther" className="w-1/3 h-auto" /> {/* Reduced image size */}
      </div>

      <div className="absolute bottom-8 right-24 bg-purple-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[600px]"> {/* Increased card height */}
        <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none relative z-10 -mt-8">
          Connect Wallet
        </button>

        <div className="mt-4 text-center">
          <h2 className="text-white-600 font-bold">JOIN THE BLACK PANTHER <span className="text-yellow-500">BPNTHR</span> PRE-SALE</h2>
          <p className="text-sm mt-2 text-purple-200">Please go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by copying the Contract Address inside your wallet in order to view the number of tokens you have bought.</p>
          <div className="mt-4 flex flex-col items-center">
            <label className="text-yellow-500 font-bold">How many BPNTHR would you like to buy?</label>
            <div className="flex mt-2">
              <input type="text" className="border text-black font-bold rounded-l px-4 py-2 w-full md:w-40 h-20 bg-lightbaige" placeholder="USD" />
              <input type="text" className="border text-black font-bold rounded-r px-4 py-2 w-full md:w-40 h-20 bg-lightbaige" placeholder="$ BPNTHR" />
            </div>
            <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10">
              Proceed to Buy
            </button>
          </div>
          <p className="text-white text-xs mt-2 font-bold"><span className='text-yellow-500'>NB:</span> MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK (NOT ETHEREUM)</p>
        </div>
        <button className="bg-lightbaige text-black py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10">
          White Paper
        </button>

        <div className="absolute inset-0 bg-transparent border-2 border-purple-800 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
}

export default LandingPage;