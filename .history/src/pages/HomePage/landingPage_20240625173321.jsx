import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { motion } from 'framer-motion'
import { FaWallet } from 'react-icons/fa';
import {FaCopy, FaRocket, FaCoins, FaHandHoldingHeart, FaCogs, FaExpand, FaBook } from 'react-icons/fa';
import { FaLightbulb, } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

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



const Header = () => {
  const navigate = useNavigate();

  const handleProceedToBuy = () => {
    navigate('/buytoken');
  };

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-[#FFFAE1]">
      <div className="flex flex-col justify-center items-center h-full text-center mt-8">
        <div className="lg:w-1/2 lg:mx-auto mb-4 lg:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
            Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
          </h1>
          <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">
            A MEME COIN WITH PURPOSE!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="/src/assets/images/langing1.png"
            alt="Black Panther Token"
            className="w-full max-w-[90%] h-auto"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-24 lg:translate-x-0 bg-purple-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col items-center justify-center">
        <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none relative z-10 -mt-8 flex items-center space-x-2">
          <FaWallet /> <span>Connect Wallet</span>
        </button>

        <div className="mt-4 text-center">
          <h2 className="text-white font-bold">
            JOIN THE BLACK PANTHER <span className="text-yellow-500">BPNTHR</span> PRE-SALE
          </h2>
          <p className="text-sm mt-2 text-purple-200">
            Please go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by copying the Contract Address inside your wallet in order to view the number of tokens you have bought.
          </p>
          <div className="mt-4 flex flex-col items-center">
            <label className="text-yellow-500 font-bold">How many BPNTHR would you like to buy?</label>
            <div className="flex mt-2">
              <input
                type="text"
                className="border text-black font-bold rounded-l px-4 py-2 w-full md:w-40 h-12 bg-[#FFFAE1]"
                placeholder="USD"
              />
              <input
                type="text"
                className="border text-black font-bold rounded-r px-4 py-2 w-full md:w-40 h-12 bg-[#FFFAE1]"
                placeholder="$ BPNTHR"
              />
            </div>
            <button
              onClick={handleProceedToBuy}
              className="bg-yellow-500 text-black py-2 px-4 font-bold rounded mt-6 hover:bg-yellow-600 focus:outline-none relative z-10"
            >
              Proceed to Buy
            </button>
          </div>
          <p className="text-white text-xs mt-2 font-bold">
            <span className="text-yellow-500">NB:</span> MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK (NOT ETHEREUM)
          </p>
        </div>
        <button className="bg-[#FFFAE1] text-black py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10">
          White Paper
        </button>

        <div className="absolute inset-0 bg-transparent border-2 border-purple-800 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};





const BuySection = () => {
  
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="mx-auto w-full px-4 bg-purple-950">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4">
          <img src={buyImage} alt="Black Panther" className="w-32 h-auto" />
        </div>
        <div className="ml-4">
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
  <motion.section
    className="bg-purple-900 py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">WHY BLACK PANTHER TOKEN?</h2>
        <p className="text-white">
        The Black Panther Token is not just a digital asset; it represents a movement towards a more inclusive and financially empowered Africa. With its strategic roadmap and the backing of tangible assets, BPNTHR is poised to be a significant player in the crypto space.
        </p>
        <ul className="mt-8 space-y-4 text-white text-left">
          <li className="flex items-center space-x-2">
            <FaRocket className="text-yellow-500" />
            <span>Support for African Development Projects</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCogs className="text-yellow-500" />
            <span>Technological Advancements in Blockchain</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaLightbulb className="text-yellow-500" />
            <span>Empowering Young Entrepreneurs</span>
          </li>
        </ul>
      </div>
      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={pantherImage2} alt="Black Panther" className="mx-auto w-full max-w-md h-auto rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </motion.section>
);

const PantherSection = () => (
  <div className="bg-purple-800 rounded-lg shadow-md overflow-hidden max-w-7xl mx-auto my-8 p-4 flex flex-col lg:flex-row lg:items-start">
    <div className="lg:w-1/3 p-4 text-center">
      <h3 className="text-2xl font-bold text-white animate-slideIn">
        Black Panther Token Is Set To Rock The Charts With a Whopping 100% ROI (This Year Alone!)
      </h3>
      <p className="text-base text-white my-4 animate-slideIn">
        Each successful trade triggers the purchase and immediate burning of Black panther Tokens, increasing demand, reducing supply, and driving prices to the moon.
      </p>
      <button className="bg-orange-500 text-black py-2 px-4 font-bold rounded mt-4 hover:bg-purple-800 focus:outline-none animate-slideIn">
        GET MY TOKENS
      </button>
      <p className="text-sm text-white mt-4 animate-slideIn">1 BPNTHR  = $0.0001 USD</p>
      <p className="text-sm text-white animate-slideIn">Expected Price at launch $0.01!</p>
    </div>
    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Hassle-Free Profits</h4>
        <p className="text-white">No active trading needed! Simply hold the tokens and watch your gains grow.</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Decentralized Hedge Fund</h4>
        <p className="text-white">Operates on its own and shares profits directly with the community of token holders.</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Auto-trading AI Bot</h4>
        <p className="text-white">The AI takes care of it all, essentially doing everything an expert trader would do.</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Buy Back & Burn Cycle</h4>
        <p className="text-white">It buys back its own tokens, steadily reducing the supply and increasing their value.</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">20x Gain For Pre-Sale</h4>
        <p className="text-white">The pre-sale allows you to get tokens starting at $0.05 each, increasing every 48 hours. They will be publicly listed on Uniswap for $1 per token!</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">24/7 Blockchain Trading</h4>
        <p className="text-white">The AI bot executes accurate trades round-the-clock on top cryptocurrencies.</p>
      </div>
    </div>
  </div>
);

const RoadMap = () => {
  const currentStage = 1; //this value to mark the current stage

  return (
    <section className="bg-purple-950 py-12 px-6 md:px-16 lg:px-24 text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12 animate-slideInRight">
        Our Roadmap
      </h2>
      <div className="relative flex flex-col lg:flex-row justify-center items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Connecting lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-1/3 lg:h-full border-l-2 border-yellow-400 lg:border-l-0 lg:border-t-2 w-full lg:w-1/3 z-0" />

        {/* Phase 1: Initial Traction */}
        <div
          className={`bg-purple-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center relative mb-8 lg:mb-0 z-10 transform transition-transform duration-200 hover:scale-105 animate-slideInLeft ${currentStage === 1 && 'border-4 border-yellow-500'}`}
        >
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-800 text-2xl font-bold mb-4 animate-rotate">
            01
          </div>
          <FaRocket className="w-16 h-16 text-yellow-400 mb-4" />
          <p className="text-lg font-semibold mb-4">Initial Traction</p>
          <p className="text-yellow-300 mb-4">(Months 1-6)</p>
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-bold text-yellow-200">Meme Coin Launch</h5>
              <p>Capture the community's imagination and support through the BPNTHR meme coin launch.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-yellow-200">Key Activities:</h5>
              <p>Deploy BPNTHR meme coin on the Panther website.</p>
              <p>Aggressive social media marketing campaign.</p>
              <p>Develop a user-friendly website.</p>
              <p>Conduct presale to raise funds.</p>
              <p>Implement Social-Fi strategies.</p>
              <p>Develop Play-to-Give Web3 Game.</p>
              <p>Organize community events.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-yellow-200">Charity Wallet</h5>
              <p>Empowering communities through the Black Panther Foundation.</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 lg:hidden">
            <MdArrowForward className="w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
        </div>

        {/* Phase 2: Ecosystem Development */}
        <div
          className={`bg-purple-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center relative mb-8 lg:mb-0 z-10 transform transition-transform duration-200 hover:scale-105 animate-slideInRight ${currentStage === 2 && 'border-4 border-yellow-500'}`}
        >
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-800 text-2xl font-bold mb-4">
            02
          </div>
          <FaCogs className="w-16 h-16 text-yellow-400 mb-4" />
          <p className="text-lg font-semibold mb-4">Ecosystem Development</p>
          <p className="text-yellow-300 mb-4">(Months 4-12)</p>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold text-yellow-200">Solidify the project's foundation and core functionalities:</p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-yellow-200">Key Activities:</h5>
              <p>Conduct initial coin offering (ICO) or Initial DEX Offering (IDO).</p>
              <p>Deploy BPNTHR meme coin on a decentralized exchange (DEX).</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 lg:hidden">
            <MdArrowForward className="w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
        </div>

        {/* Phase 3: Expansion and Sustainability */}
        <div
          className={`bg-purple-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center relative z-10 transform transition-transform duration-200 hover:scale-105 animate-slideInLeft ${currentStage === 3 && 'border-4 border-yellow-500'}`}
        >
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-800 text-2xl font-bold mb-4">
            03
          </div>
          <FaLightbulb className="w-16 h-16 text-yellow-400 mb-4" />
          <p className="text-lg font-semibold mb-4">Expansion and Sustainability</p>
          <p className="text-yellow-300 mb-4">(Months 13-24)</p>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold text-yellow-200">Expand the Black Panther ecosystem and establish long-term financial viability:</p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-yellow-200">Key Activities:</h5>
              <p>Launch the Black Panther Educational Hub.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <div className="bg-gray-900 py-4 mt-16">
    <div className="container mx-auto text-center">
      <img src={pantherLogo} alt="PantherLogo" className="mx-auto mb-4 w-32" />
      <h4 className="text-white text-lg font-bold">BLACK PANTHER (BPNTHR)</h4>
      <SocialIcons />
    </div>
    <chatComponent />
  </div>
);



function LandingPage() {
  return (
    <>
      <Header />
      <BuySection />
      <WhySection />
      <PantherSection />
      <Tokenomics />
      <RoadMap/>
      <Footer />
    </>
  );
}

export default LandingPage;
