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
import { motion } from 'framer-motion';
import pantherImage1 from "../../assets/images/new.png";
import pantherImage2 from "../../assets/images/new2.png";
//import roadmapImage from '../../assets/images/roadmap.png';
import buyImage from '../../assets/images/buy.png';
import pantherLogo from "../../assets/panter.png";
import Tokenomics from '../../components/Tokenmics/tokenmicks';
import "./homePage.css";
import { FaCopy, FaRocket, FaCogs, FaLightbulb } from 'react-icons/fa';

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
        <motion.div
          className="lg:w-1/2 lg:mx-auto mb-4 lg:mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-950 px-4">
            Black Panther Token (<span className="text-yellow-500">BPNTHR</span>) Pre-Sale is Live
          </h1>
          <p className="mt-2 sm:mt-4 text-base text-purple-950 font-semibold">A MEME COIN WITH PURPOSE!</p>
        </motion.div>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src="/src/assets/images/landingpanther.png" alt="Black Panther Token" className="w-full max-w-[90%] h-auto" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-24 lg:translate-x-0 bg-purple-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
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
      </motion.div>
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
    <motion.div
      className="mx-auto w-full px-4 bg-purple-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
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
    </motion.div>
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
          Black Panther Token (BPNTHR) is not just a cryptocurrency, it's a movement.
          By focusing on community-driven projects, BPNTHR is set to revolutionize the cryptocurrency space in the continent.
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
  <motion.section
    className="bg-lightbaige py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-purple-950 mb-4">Panther Section</h2>
        <p className="text-black">
          The Panther section is all about showcasing our unique features and benefits.
          This is where we shine the spotlight on what makes our token special.
        </p>
      </div>
      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={pantherImage1} alt="Panther" className="mx-auto w-full max-w-md h-auto rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </motion.section>
);

const RoadmapSection = () => (
  <motion.section
    className="bg-white py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-purple-950 mb-4">Roadmap</h2>
      <p className="text-black mb-8">
        Our roadmap outlines the major milestones we aim to achieve in the coming months and years.
        It's a clear path to our vision of making a significant impact in the crypto space and beyond.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={roadmapImage} alt="Roadmap" className="mx-auto w-full max-w-4xl h-auto rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </motion.section>
);

const HomePage = () => {
  return (
    <div>
      <Header />
      <BuySection />
      <WhySection />
      <PantherSection />
      <RoadmapSection />
      <div className="bg-lightbaige">
        <Tokenomics />
      </div>
      <SocialIcons />
    </div>
  );
};

export default HomePage;
