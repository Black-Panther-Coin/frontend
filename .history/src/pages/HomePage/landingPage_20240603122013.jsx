import React, { useState } from 'react';
import pantherImage2 from "../../assets/images/new2.png";
import pantherImage from '../../assets/images/new.png';
import buyImage from '../../assets/images/buy.png';
import pantherIcon from '../../assets/images/image.png';
import Tokenomics from '../../components/Tokenmics/tokenmicks';

function LandingPage() {
  const contractAddress = "0x12a55f6aBDfE13a44eF8b29a24964e20D21E0fA5";
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-lightbaige">
        <div className="flex flex-col justify-center items-center h-full text-center ml-1/3 mt-16">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
            Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
          </h1>
          <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">A MEME COIN WITH PURPOSE!</p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-24 lg:translate-x-0 bg-purple-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col items-center justify-center">
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

      <div className="mx-auto w-full px-4 bg-purple-950">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4">
            <img src={buyImage} alt="Black Panther" className="w-32 h-auto" />
          </div>
          <div className="w-full lg:w-auto">
            <p className="text-2xl text-white text-left font-bold">Contract Address:</p>
            <p className="text-2xl cursor-pointer text-center font-bold" onClick={copyToClipboard}>{contractAddress}</p>
            {copySuccess && <span className="text-xs text-green-500">Copied!</span>}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full px-4 bg-purple-600">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">WHY BLACK PANTHER TOKEN?</h2>
            <p className="text-base text-lightbaige-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus ac risus convallis vehicula nec eget nulla. Proin non quam quam. Integer in ex vel ante condimentum placerat. Sed ullamcorper lacus non nibh sagittis, vitae convallis elit ultricies.</p>
            <p className="text-base text-lightbaige-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus ac risus convallis vehicula nec eget nulla. Proin non quam quam. Integer in ex vel ante condimentum placerat. Sed ullamcorper lacus non nibh sagittis, vitae convallis elit ultricies.</p>
            <p className="text-base text-lightbaige-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus ac risus convallis vehicula nec eget nulla. Proin non quam quam. Integer in ex vel ante condimentum placerat. Sed ullamcorper lacus non nibh sagittis, vitae convallis elit ultricies.</p>
          </div>
          <div className="w-1/2">
            <img src={pantherImage2} alt="Black Panther" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="bg-purple-800 rounded-lg shadow-md overflow-hidden max-w-7xl mx-auto my-8 p-4 flex flex-col lg:flex-row lg:items-start">
      <div className="lg:w-1/3 p-4 text-center">
        <h3 className="text-2xl font-bold text-white">Harambe Is Set To Rock The Charts With a Whopping 100% ROI (This Year Alone!)</h3>
        <p className="text-base text-white my-4">Each successful trade triggers the purchase and immediate burning of Harambe Tokens, increasing demand, reducing supply, and driving prices to the moon.</p>
        <button className="bg-orange-500 text-black py-2 px-4 font-bold rounded mt-4 hover:bg-purple-800 focus:outline-none">
          GET MY TOKENS
        </button>
        <p className="text-sm text-white mt-4">1 HARMBE AI = $0.309 USD</p>
        <p className="text-sm text-white">Hurry - Token price increases on May 25th!</p>
      </div>
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">Hassle-Free Profits</h4>
          <p className="text-white">No active trading needed! Simply hold the tokens and watch your gains grow.</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">Decentralized Hedge Fund</h4>
          <p className="text-white">Operates on its own and shares profits directly with the community of token holders.</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">Auto-trading AI Bot</h4>
          <p className="text-white">The AI takes care of it all, essentially doing everything an expert trader would do.</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">Buy Back & Burn Cycle</h4>
          <p className="text-white">It buys back its own tokens, steadily reducing the supply and increasing their value.</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">20x Gain For Pre-Sale</h4>
          <p className="text-white">The pre-sale allows you to get tokens starting at $0.05 each, increasing every 48 hours. They will be publicly listed on Uniswap for $1 per token!</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-xl font-bold text-white">24/7 Blockchain Trading</h4>
          <p className="text-white">The AI bot executes accurate trades round-the-clock on top cryptocurrencies.</p>
        </div>
      </div>
    </div>
    <Tokenomics/>
    <div className="bg-purple-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">ROAD MAP</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">PHASE ONE</h3>
            <div className="bg-purple-800 p-8 rounded-lg shadow-md"></div>
          </div>
          <div className="flex-1 text-center mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">PHASE TWO</h3>
            <div className="bg-purple-800 p-8 rounded-lg shadow-md"></div>
          </div>
          <div className="flex-1 text-center mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">PHASE THREE</h3>
            <div className="bg-purple-800 p-8 rounded-lg shadow-md"></div>
          </div>
          <div className="flex-1 text-center mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">PHASE FOUR</h3>
            <div className="bg-purple-800 p-8 rounded-lg shadow-md"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 mt-16">
        <div className="container mx-auto text-center">
          <img src="path_to_logo.png" alt="Logo" className="mx-auto mb-4" />
          <h4 className="text-white text-lg font-bold">BLACK PANTHER (BPNTHR)</h4>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram text-white text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-white text-2xl"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord text-white text-2xl"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok text-white text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LandingPage;