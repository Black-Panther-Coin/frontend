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
//import {  } from 'react-icons/fa';
import {FaCopy, FaRocket, FaCoins, FaHandHoldingHeart, FaCogs, FaExpand, FaBook } from 'react-icons/fa';


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
    <div className="relative min-h-[70vh] overflow-hidden bg-lightbaige">
      <div className="flex flex-col justify-center items-center h-full text-center mt-8">
        <div className="lg:w-1/2 lg:mx-auto mb-4 lg:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
            Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
          </h1>
          <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">A MEME COIN WITH PURPOSE!</p>
        </div>
        <div className="w-full flex justify-center">
          <img src="/src/assets/images/landingpanther.png" alt="Black Panther Token" className="w-full max-w-[90%] h-auto" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-24 lg:translate-x-0 bg-purple-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col items-center justify-center">
        <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none relative z-10 -mt-8">
          Connect Wallet
        </button>

        <div className="mt-4 text-center">
          <h2 className="text-white font-bold">JOIN THE BLACK PANTHER <span className="text-yellow-500">BPNTHR</span> PRE-SALE</h2>
          <p className="text-sm mt-2 text-purple-200">Please go to your Wallet Address and CUSTOM IMPORT the BPNTHR ticker by copying the Contract Address inside your wallet in order to view the number of tokens you have bought.</p>
          <div className="mt-4 flex flex-col items-center">
            <label className="text-yellow-500 font-bold">How many BPNTHR would you like to buy?</label>
            <div className="flex mt-2">
              <input type="text" className="border text-black font-bold rounded-l px-4 py-2 w-full md:w-40 h-12 bg-lightbaige" placeholder="USD" />
              <input type="text" className="border text-black font-bold rounded-r px-4 py-2 w-full md:w-40 h-12 bg-lightbaige" placeholder="$ BPNTHR" />
            </div>
            <button onClick={handleProceedToBuy} className="bg-yellow-500 text-black py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10">
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
  <section className="bg-purple-900 py-16">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">WHY BLACK PANTHER TOKEN?</h2>
        <p className="text-white text-base lg:text-lg leading-relaxed text-justify">
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
);

const PantherSection = () => (
  <div className="bg-purple-800 rounded-lg shadow-md overflow-hidden max-w-7xl mx-auto my-8 p-4 flex flex-col lg:flex-row lg:items-start">
    <div className="lg:w-1/3 p-4 text-center">
      <h3 className="text-2xl font-bold text-white">Black Panther Token Is Set To Rock The Charts With a Whopping 100% ROI (This Year Alone!)</h3>
      <p className="text-base text-white my-4">Each successful trade triggers the purchase and immediate burning of Black panther Tokens, increasing demand, reducing supply, and driving prices to the moon.</p>
      <button className="bg-orange-500 text-black py-2 px-4 font-bold rounded mt-4 hover:bg-purple-800 focus:outline-none">
        GET MY TOKENS
      </button>
      <p className="text-sm text-white mt-4">1 BPNTHR  = $0.0001 USD</p>
      <p className="text-sm text-white">Hurry - Token price increases on July 25th!</p>
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
);








import { FaLightbulb } from 'react-icons/fa';

const RoadMap = () => (
  <section className="roadmap-section bg-gray-100 py-12 px-6 md:px-16 lg:px-24 text-gray-800">
    <h2 className="roadmap-heading text-4xl font-bold text-center text-blue-500 mb-12">Our Roadmap</h2>
    <div className="roadmap-container flex flex-col lg:flex-row justify-center items-stretch space-y-8 lg:space-y-0 lg:space-x-8">

      {/* Phase 1: Initial Traction */}
      <div className="roadmap-phase bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center phase relative mb-8 lg:mb-0">
        <div className="roadmap-phase-number bg-blue-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
          01
        </div>
        <h3 className="roadmap-phase-title text-2xl font-bold mb-4 text-blue-500">VALUES</h3>
        <FaRocket className="roadmap-phase-icon w-16 h-16 text-blue-500 mb-4" />
        <p className="roadmap-phase-subtitle text-lg font-semibold mb-4">Initial Traction</p>
        <p className="roadmap-phase-timeline text-gray-600 mb-4">(Months 1-6)</p>
        <div className="roadmap-phase-text space-y-4">
          <div>
            <h5 className="text-lg font-bold text-blue-500">Meme Coin Launch</h5>
            <p className="text-gray-700">Capture the community's imagination and support through the BPNTHR meme coin launch.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-blue-500">Key Activities:</h5>
            <ul className="list-disc list-inside text-gray-700">
              <li>Deploy BPNTHR meme coin on the Panther website.</li>
              <li>Aggressive social media marketing campaign.</li>
              <li>Develop a user-friendly website.</li>
              <li>Conduct presale to raise funds.</li>
              <li>Implement Social-Fi strategies.</li>
              <li>Develop Play-to-Give Web3 Game.</li>
              <li>Organize community events.</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-blue-500">Charity Wallet</h5>
            <p className="text-gray-700">Empowering communities through the Black Panther Foundation.</p>
          </div>
        </div>
      </div>

      {/* Phase 2: Ecosystem Development */}
      <div className="roadmap-phase bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center phase relative mb-8 lg:mb-0">
        <div className="roadmap-phase-number bg-blue-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
          02
        </div>
        <h3 className="roadmap-phase-title text-2xl font-bold mb-4 text-blue-500">VISION</h3>
        <FaCogs className="roadmap-phase-icon w-16 h-16 text-blue-500 mb-4" />
        <p className="roadmap-phase-subtitle text-lg font-semibold mb-4">Ecosystem Development</p>
        <p className="roadmap-phase-timeline text-gray-600 mb-4">(Months 4-12)</p>
        <div className="roadmap-phase-text space-y-4">
          <div>
            <p className="text-lg font-bold text-blue-500">Solidify the project's foundation and core functionalities:</p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-blue-500">Key Activities:</h5>
            <ul className="list-disc list-inside text-gray-700">
              <li>Conduct initial coin offering (ICO) or Initial DEX Offering (IDO).</li>
              <li>Deploy BPNTHR meme coin on a decentralized exchange (DEX).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Phase 3: Expansion and Sustainability */}
      <div className="roadmap-phase bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center phase relative">
        <div className="roadmap-phase-number bg-blue-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
          03
        </div>
        <h3 className="roadmap-phase-title text-2xl font-bold mb-4 text-blue-500">MISSION</h3>
        <FaLightbulb className="roadmap-phase-icon w-16 h-16 text-blue-500 mb-4" />
        <p className="roadmap-phase-subtitle text-lg font-semibold mb-4">Expansion and Sustainability</p>
        <p className="roadmap-phase-timeline text-gray-600 mb-4">(Months 13-24)</p>
        <div className="roadmap-phase-text space-y-4">
          <div>
            <p className="text-lg font-bold text-blue-500">Expand the Black Panther ecosystem and establish long-term financial viability:</p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-blue-500">Key Activities:</h5>
            <ul className="list-disc list-inside text-gray-700">
              <li>Launch the Black Panther Educational Hub.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);





const Footer = () => (
  <div className="bg-gray-900 py-4 mt-16">
    <div className="container mx-auto text-center">
      <img src={pantherLogo} alt="PantherLogo" className="mx-auto mb-4 w-32" />
      <h4 className="text-white text-lg font-bold">BLACK PANTHER (BPNTHR)</h4>
      <SocialIcons />
    </div>
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
