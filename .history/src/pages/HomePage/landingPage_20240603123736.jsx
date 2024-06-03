import React, { useState } from 'react';
import pantherImage2 from "../../assets/images/new2.png";
import pantherImage from '../../assets/images/new.png';
import buyImage from '../../assets/images/buy.png';
import pantherIcon from '../../assets/images/image.png';
import Tokenomics from '../../components/Tokenmics/tokenmicks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
      <section className="bg-yellow-50 py-8">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <h1 className="text-purple-700 font-bold text-4xl lg:text-6xl mb-4">
          Black Panther Token <span className="text-yellow-500">(BPNTHR)</span> Pre-Sale is Live
        </h1>
        <p className="text-purple-500 text-lg lg:text-2xl mb-8">
          A MEME COIN WITH PURPOSE!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <img src="../../assets/images/new.png" alt="Black Panther" className="mx-auto" />
          </div>
          <div className="bg-purple-900 text-white p-8 rounded-lg shadow-lg lg:w-1/2">
            <button className="bg-yellow-500 text-purple-900 font-bold py-2 px-4 rounded-full mb-4">
              Connect wallet
            </button>
            <h2 className="text-2xl font-bold mb-4">JOIN THE BLACK PANTHER BPNTHR PRE-SALE</h2>
            <p className="text-sm mb-4">
              Please Go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by Copy pasting Contract Address
              inside your wallet in order to view the number of tokens you have bought.
            </p>
            <div className="mb-4">
              <label className="block text-lg mb-2">How many BPNTHR would you like to buy?</label>
              <div className="flex">
                <input type="number" className="flex-1 py-2 px-4 rounded-l-lg text-black" placeholder="USD" />
                <input type="number" className="flex-1 py-2 px-4 rounded-r-lg text-black" placeholder="$ BPNTHR" />
              </div>
            </div>
            <button className="bg-yellow-500 text-purple-900 font-bold py-2 px-4 rounded-full w-full">
              PROCEED TO BUY
            </button>
            <p className="text-xs mt-4">
              NB: MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK (NOT ETHERIUM)
            </p>
          </div>
        </div>
      </div>
    </section>

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

      <section className="bg-purple-900 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">WHY BLACK PANTHER TOKEN?</h2>
          <p className="text-white text-base lg:text-lg leading-relaxed">
            Black Panther Coin is created to offer a Web3/Blockchain Crypto platform that helps bring new people to the space with a meme coin.
            We believe the strength of the powerful symbol of the Black Panther will draw people to the project's purpose.
            We wish to leverage the awareness of the meme coin project to create awareness about health and wellness, help educate people on
            alternative treatments including food as medicine, as well as educate and bring new people to the incredibly versatile crypto, Web3/Blockchain space
            to build and create solutions around a myriad range of issues.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-center">
          <img src={pantherImage2} alt="Black Panther" className="w-full max-w-sm mx-auto lg:max-w-full h-auto" />
        </div>
      </div>
      
    </section>

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
          <div className="flex mt-4 mb-9 space-x-4">
          <a
            href="https://t.me/blackpanthertkn"
            target="_blank"
            className="text-yellow-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a
            href="https://twitter.com/BlackPanthertkn"
            target="_blank"
            className="text-yellow-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://discord.com/invite/cQHYs5mUwJ"
            target="_blank"
            className="text-yellow-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a
            href="https://www.tiktok.com/@blackpanthertkn"
            target="_blank"
            className="text-yellow-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/blackpanthertkn/"
            target="_blank"
            className="text-yellow-500 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LandingPage;
