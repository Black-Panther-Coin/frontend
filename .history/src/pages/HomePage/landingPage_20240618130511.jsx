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
);




const RoadMap = () => (
  <section className="bg-purple-950 py-12 px-6 md:px-16 lg:px-24 text-white">
    <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">Our Roadmap</h2>
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">

      {/* Phase 1: Initial Traction */}
      <div className="bg-purple-800 rounded-lg p-6 shadow-md relative phase">
        <h3 className="text-2xl font-bold mb-4 text-center">Phase 1</h3> 
        <h4 className="text-xl font-semibold mb-4 text-center">Initial Traction (Months 1-3)</h4> 
        <ul className="pl-4 text-justify">
          <li className="mb-2">🔸 Deploy Black Panther (BPNTHR) meme coin on a decentralized exchange (DEX) within 90 days.</li>
          <li className="mb-2">🔸 Launch the Black Panther Non-Profit Foundation (BPNPF) to employ project personnel and manage charitable giving.</li>
          <li className="mb-2">🔸 Aggressive social media marketing campaign to build a strong online community.</li>
          <li className="mb-2">🔸 Develop a user-friendly website outlining the project's mission, roadmap, and team.</li>
          <li className="mb-2">🔸 Organize online & offline community events to spread awareness and engage potential users (e.g., webinars, meetups in African countries with large diasporas).</li>
          <li className="mb-2">🔸Conduct initial coin offering (ICO) or Initial DEX Offering (IDO) to raise funds for project development.</li>
        </ul>
      </div>

      {/* Phase 2: Ecosystem Development */}
      <div className="bg-purple-800 rounded-lg p-6 shadow-md relative phase">
        <h3 className="text-2xl font-bold mb-4 text-center">Phase 2</h3> 
        <h4 className="text-xl font-semibold mb-4 text-center">Ecosystem Development (Months 4-12)</h4> 
        <ul className="pl-4 text-justify">
          <li className="mb-2">🔸 Develop the Black Panther Charity Wallet on the blockchain for transparent donation tracking and fund allocation.</li>
          <li className="mb-2">🔸 Launch the Black Panther Educational Hub with tiered educational programs on crypto, blockchain, and Web3 concepts, with a focus on African languages.</li>
          <li className="mb-2">🔸 Integrate the BPNTHR token with existing mobile money platforms in Africa to facilitate seamless mobile transactions.</li>
          <li className="mb-2">🔸 Begin development of the African Stablecoin pegged to a reliable basket of assets.</li>
          <li className="mb-2">🔸 Design and develop the Play-to-Give Web3 Game with a focus on user engagement and sustainable charity integration.</li>
        </ul>
      </div>

      {/* Phase 3: Expansion and Sustainability */}
      <div className="bg-purple-800 rounded-lg p-6 shadow-md relative phase">
        <h3 className="text-2xl font-bold mb-4 text-center">Phase 3</h3> 
        <h4 className="text-xl font-semibold mb-4 text-center">Expansion and Sustainability (Months 13-24)</h4> 
        <ul className="pl-4 text-justify">
          <li className="mb-2">🔸 Pilot launch of the Black Panther Communications App with secure global cash transfer functionalities.</li>
          <li className="mb-2">🔸 Release the Black Panther Secure Crypto Wallet with multi-currency support and optional offline storage.</li>
          <li className="mb-2">🔸 Explore the feasibility of building a dedicated Black Panther Blockchain or leverage existing solutions.</li>
          <li className="mb-2">🔸 Secure strategic partnerships with established organizations in Africa and the crypto industry.</li>
          <li className="mb-2">🔸 Continuously monitor and adapt based on market feedback, regulatory changes, and community needs.</li>
          <li className="mb-2">🔸Implement long-term sustainability strategies through a combination of token sales, transaction fees, and ongoing fundraising efforts.</li>
        </ul>
      </div>

      {/* Arrow linking phases */}
      
      
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
