import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import pantherImage2 from "../../assets/images/new2.png";
import pantherImage from '../../assets/images/new.png';
import buyImage from '../../assets/images/buy.png';
import pantherIcon from '../../assets/images/image.png';
import pantherLogo from "../../assets/panter.png";
import Tokenomics from '../../components/Tokenmics/tokenmicks';
import "./homePage.css";
import { FaCopy } from 'react-icons/fa';

const contractAddress = "0x12a55f6aBDfE13a44eF8b29a24964e20D21E0fA5";

const SocialIcons = () => (
  <div className="flex justify-center mt-4 mb-9 space-x-4">
    <a href="https://t.me/blackpanthertkn" target="_blank" className="text-yellow-500 hover:text-gray-300">
      <FontAwesomeIcon icon={faTelegram} size="2x" />
    </a>
    <a href="https://twitter.com/BlackPanthertkn" target="_blank" className="text-yellow-500 hover:text-gray-300">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://discord.com/invite/cQHYs5mUwJ" target="_blank" className="text-yellow-500 hover:text-gray-300">
      <FontAwesomeIcon icon={faDiscord} size="2x" />
    </a>
    <a href="https://www.tiktok.com/@blackpanthertkn" target="_blank" className="text-yellow-500 hover:text-gray-300">
      <FontAwesomeIcon icon={faTiktok} size="2x" />
    </a>
    <a href="https://www.instagram.com/blackpanthertkn/" target="_blank" className="text-yellow-500 hover:text-gray-300">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
  </div>
);

const Header = () => (
  <div className="relative min-h-[70vh] overflow-hidden bg-lightbaige">
    <div className="flex flex-col justify-center items-center h-full text-center mt-8">
      <div className="lg:w-1/2 lg:mx-auto mb-4 lg:mb-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
          Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
        </h1>
        <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">A MEME COIN WITH PURPOSE!</p>
      </div>
      <div className="w-full lg:w-full flex justify-center">
        <img src="/src/assets/images/landingpanther.png" alt="Black Panther Token" className="w-full max-w-[90%] h-auto"/>
      </div>
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
            <input type="text" className="border text-black font-bold rounded-l px-4 py-2 w-full md:w-40 h-12 bg-lightbaige" placeholder="USD" />
            <input type="text" className="border text-black font-bold rounded-r px-4 py-2 w-full md:w-40 h-12 bg-lightbaige" placeholder="$ BPNTHR" />
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

const BuySection = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="mx-auto w-full px-4 bg-purple-950 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4 flex justify-center">
          <img src={buyImage} alt="Black Panther" className="w-32 h-auto" />
        </div>
        <div className="lg:ml-4 text-center lg:text-left">
          <h2 className="text-yellow-500 font-bold text-3xl lg:text-4xl">BPNTHR</h2>
          <p className="text-2xl text-white text-left font-bold">Contract Address:</p>
          <p className="text-yellow-500 font-semibold" onClick={copyToClipboard}>
            {contractAddress}
            <button onClick={copyToClipboard} className="text-white bg-yellow-500 p-2 rounded-full">
            <FaCopy />
            </button>
            {copySuccess && <span className="text-xs text-green-500">Copied!</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhySection = () => (
  <section className="bg-purple-900 py-16">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">WHY BLACK PANTHER TOKEN?</h2>
        <p className="text-white text-base lg:text-lg leading-relaxed text-justify">
          Black Panther Coin is created to offer a Web3/Blockchain Crypto platform that helps bring new people to the space with a meme coin.
          We believe the strength of the powerful symbol of the Black Panther will draw people to the project's purpose.
          We wish to leverage the awareness of the meme coin project to create awareness about health and wellness, help educate people on
          alternative treatments including food as medicine, as well as educate and bring new people to the incredibly versatile crypto, Web3/Blockchain space
          to build and create solutions around a myriad range of issues.
        </p>
      </div>
      <div className="lg:w-1/2 text-center">
        <img src={pantherImage2} alt="Black Panther" className="w-full max-w-sm mx-auto lg:max-w-full h-auto" />
      </div>
    </div>
  </section>
);

const PantherSection = () => (
  <div className="bg-purple-800 rounded-lg shadow-lg py-12 px-6 text-center relative">
    <div className="absolute top-4 left-4">
      <img src={pantherIcon} alt="Panther Icon" className="w-12 h-12" />
    </div>
    <div className="relative z-10">
      <h2 className="text-3xl text-yellow-500 font-bold mb-6">The Black Panther Token Community!</h2>
      <p className="text-white text-lg mb-6">
        Join the Black Panther Token community and stay updated on the latest developments, news, and events.
      </p>
      <SocialIcons />
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <WhySection />
        <BuySection />
        <PantherSection />
        <Tokenomics />
      </main>
    </div>
  );
};

export default HomePage;
