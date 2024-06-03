import React from 'react';
import pantherImage from '../../assets/images/landingpanther.png'; // Adjust the path if necessary

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-lightbaige">
      {/* <div className="absolute top-0 left-0 h-full w-1/3 flex justify-center items-center">
        <img src={pantherImage} alt="Left Side Image" className="h-2/3 object-contain" />
      </div> */}
      
      <div className="flex flex-col justify-center items-center h-full text-center ml-1/3">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-800 px-4">
          Black Panther Token (<span className="text-orange-500">BPNTHR</span>) Pre-Sale is Live
        </h1>
        <p className="mt-2 sm:mt-4 text-base text-purple-800 font-semibold">A MEME COIN WITH PURPOSE!</p>
      </div>

      <div className="absolute bottom-8  bg-purple-800 p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm flex flex-col items-center justify-center">
        <button className="bg-orange-500 text-white py-2 px-4 font-bold rounded hover:bg-orange-600 focus:outline-none relative z-10">
          Connect Wallet
        </button>
        <div className="mt-4 text-center">
          <h2 className="text-white-600 font-bold">JOIN THE BLACK PANTHER <span className="text-orange-500">BPNTHR</span> PRE-SALE</h2>
          <p className="text-sm mt-2 text-purple-200">Please go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by copying the Contract Address inside your wallet in order to view the number of tokens you have bought.</p>
          <div className="mt-4 flex flex-col items-center">
            <label className="text-orange-500 font-bold">How many BPNTHR would you like to buy?</label>
            <div className="flex mt-2">
              <input type="text" className="border rounded-l px-4 py-2 w-40 h-20 bg-lightbaige" placeholder="USD" />
              <input type="text" className="border rounded-r px-4 py-2 w-40 h-20 bg-lightbaige" placeholder="$ BPNTHR" />
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10">
              Proceed to Buy
            </button>
          </div>
          <p className="text-white text-xs mt-2 font-bold"><span className='text-orange-500'>NB:</span> MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK (NOT ETHEREUM)</p>
        </div>
        <div className="absolute inset-0 bg-transparent border-2 border-purple-800 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
}

export default LandingPage;
