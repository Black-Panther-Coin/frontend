import React, { useState, useEffect } from 'react';
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
import { FaLock, FaSpinner, FaWallet } from 'react-icons/fa';
import {FaCopy, FaRocket, FaCoins, FaHandHoldingHeart, FaCogs, FaExpand, FaBook } from 'react-icons/fa';
import { FaLightbulb, } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import ChatComponent from "../../components/Chat/chatComponent"
import { toast } from 'react-toastify'


import axios from "axios";
import { useAuthentication } from '../../components/utils/provider';
import AuthModal from '../../components/Popups/authModal'



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
  const [usdInputValue, setUsdInputValue] = useState('');
  const [bpnthrInputValue, setBpnthrInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const { currentUser, setPointsToSave, PointsToSave, onSavePointsLocally } = useAuthentication();

  const onSetUSDInput = async (val) => {
    setUsdInputValue(val);
    const bnthr = await calculateBNTHRToGet(val);
    setBpnthrInputValue(bnthr);
    setPointsToSave(bnthr);
    onSavePointsLocally(bnthr);
  };

  const onSetBpnthr = async (val) => {
    setBpnthrInputValue(val);
    setPointsToSave(val);
    onSavePointsLocally(val);
    const usd = await calculateUSDToPay(val);
    setUsdInputValue(usd);
  };

  const calculateBNTHRToGet = async (val) => {
    const target = 1000000;
    const totalSupply = 10000000000;
    return val / (target / totalSupply);
  };

  const calculateUSDToPay = async (val) => {
    const target = 1000000;
    const totalSupply = 10000000000;
    return val * (target / totalSupply);
  };

  const handleProceedToBuy = () => {
    // Ensure the user is authenticated
    if (!currentUser) {
      toggleModal();
      return;
    }

    setIsLoading(true)

    const options = {
      method: 'POST',
      url: 'https://api.radom.com/product/create',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJhZGRyZXNzIjpudWxsLCJvcmdhbml6YXRpb25faWQiOiJmNzhlMjMxYS04OTVmLTRiNDMtYjVhNy1iYzA5OWNmODAwNzMiLCJzZXNzaW9uX2lkIjoiN2I2NTIxMjEtYjZlYi00MjVkLTllYzMtOWQ5NjAzZGY5OTk2IiwiZXhwaXJlZF9hdCI6IjIwMjUtMDYtMjhUMTE6MDk6NDYuMDI2NzkzNDQzWiIsImlzX2FwaV90b2tlbiI6dHJ1ZX0='
      },
      data: {
        currency: 'USD',
        description: 'Black panther token, meme coin with purpose',
        name: `You are going to recieve ${PointsToSave} BPNTHR Points`,
        price: usdInputValue,
        addOns: [],
        image: "https://blackpanthertkn.com/blackpanther.png",
        sendSubscriptionEmails: true,
        productType: {
          Presale: {
            Token: {
              ticker: "BPNTHR",
              decimals: 18,
              totalRaiseAmount: 10000000
            }
          }
        }
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      const options = {
        method: 'POST',
        url: 'https://api.radom.com/checkout_session',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'eyJhZGRyZXNzIjpudWxsLCJvcmdhbml6YXRpb25faWQiOiJmNzhlMjMxYS04OTVmLTRiNDMtYjVhNy1iYzA5OWNmODAwNzMiLCJzZXNzaW9uX2lkIjoiN2I2NTIxMjEtYjZlYi00MjVkLTllYzMtOWQ5NjAzZGY5OTk2IiwiZXhwaXJlZF9hdCI6IjIwMjUtMDYtMjhUMTE6MDk6NDYuMDI2NzkzNDQzWiIsImlzX2FwaV90b2tlbiI6dHJ1ZX0='
        },
        data: {
          lineItems: [
            {
              productId: response.data.id,
              itemData: {
                name: 'Black panther Token',
                description: 'Black panther token, meme coin with purpose',
                chargingIntervalSeconds: 0,
                price: usdInputValue,
                imageUrl: 'https://blackpanthertkn.com/blackpanther.png',
                isMetered: false,
                currency: 'USD',
                sendSubscriptionEmails: true
              }
            }
          ],
          currency: 'USD',
          gateway: {
            managed: { methods: [
              { network: 'SepoliaTestnet', token: null, discountPercentOff: 0 }, // show this for testing
              { network: 'BNB', token: null, discountPercentOff: 0 },
              { network: 'BNB', token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", discountPercentOff: 0 },
              { network: 'BNB', token: "0x55d398326f99059ff775485246999027b3197955", discountPercentOff: 0 },
              { network: 'BNB', token: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", discountPercentOff: 0 }
            ] }
          },
          successUrl: import.meta.env.VITE_SUCCESS_URL,
          cancelUrl: import.meta.env.VITE_CANCEL_URL,
          metadata: [{ key: 'string', value: 'string' }],
          expiresAt: getFutureTimestamp(1), // Set expiration time to 1 minute from now
          customizations: {
            leftPanelColor: '#F8F5ED',
            primaryButtonColor: 'blue',
            slantedEdge: true,
            allowDiscountCodes: false
          },
          chargeCustomerNetworkFee: true
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        setIsLoading(false)
        window.location.href = response.data.checkoutSessionUrl;
      }).catch(function (error) {
        console.error(error);
      });
    }).catch(function (error) {
      console.error(error);
    });
  };

  // Function to get a future Unix timestamp in seconds
  const getFutureTimestamp = (minutes) => {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    return now + (minutes * 60); // Add the specified number of minutes
  };

  const toggleModal = () => {
    console.log("Modal toggled");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
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
          <button
            onClick={toggleModal}
            className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none relative z-10 -mt-8 flex items-center space-x-2"
          >
            <FaWallet /> <span>{currentUser ? 'Logged In' : 'Login / Sign up'}</span>
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
                  value={usdInputValue}
                  onChange={(e) => onSetUSDInput(e.target.value)}
                />
                <input
                  type="text"
                  className="border text-black font-bold rounded-r px-4 py-2 w-full md:w-40 h-12 bg-[#FFFAE1] ml-1"
                  placeholder="$ BPNTHR"
                  value={bpnthrInputValue}
                  onChange={(e) => onSetBpnthr(e.target.value)}
                />
              </div>
              {isLoading ? (<>
                <button
                  className={`bg-yellow-500 text-black py-2 px-4 font-bold rounded mt-6 hover:bg-yellow-600 focus:outline-none relative z-10 ${!currentUser && 'opacity-50 cursor-not-allowed'}`}
                  disabled={!currentUser}
                >
                  <FaSpinner />
                </button>
              </>) : (<>
                <button
                  onClick={handleProceedToBuy}
                  className={`bg-yellow-500 text-black py-2 px-4 font-bold rounded mt-6 hover:bg-yellow-600 focus:outline-none relative z-10 ${!currentUser && 'opacity-50 cursor-not-allowed'}`}
                  disabled={!currentUser}
                >
                  Proceed to Buy
                </button>
              </>)}
            </div>
            <p className="text-white text-xs mt-2 font-bold">
              <span className="text-yellow-500">NB:</span> ADDRESS TO RECEIVE POINTS IS <span className='text-yellow-500'>{currentUser?.walletAddress}</span>
            </p>
          </div>
          <div>
            <button
              onClick={() => window.open("bpc.clawpaper.v1.1.pdf", "_blank")}
              className="bg-[#FFFAE1] text-black py-2 px-4 font-bold rounded mt-6 hover:bg-purple-800 focus:outline-none relative z-10"
            >
              Claw Paper
            </button>
            <button
              onClick={() => {
                if (!currentUser) {
                  toggleModal();
                  return;
                }
                navigate('/my_points');
              }}
              className={`bg-orange-500 ml-2 text-black py-2 px-4 font-bold rounded mt-4 hover:bg-purple-800 focus:outline-none animate-slideIn ${!currentUser && 'opacity-50 cursor-not-allowed'}`}
              disabled={!currentUser}
            >
              See Points
            </button>
          </div>

          <div className="absolute inset-0 bg-transparent border-2 border-purple-800 rounded-lg pointer-events-none"></div>
        </div>
      </div>

      <AuthModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
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
            <button onClick={copyToClipboard} className="text-white bg-yellow-500 p-2 ml-2 rounded-full">
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
      The Black Panther Token (BPNTHR) transcends the typical crypto narrative;  
      </h3>
      <p className="text-base text-white my-4 animate-slideIn">
      it’s a beacon of hope and empowerment in the digital realm.This isn’t just another meme token—it’s a potent symbol of change and a harbinger of a new era in finance across the African continent.
      </p>
      <button className="bg-orange-500 text-black py-2 px-4 font-bold rounded mt-4 hover:bg-purple-800 focus:outline-none animate-slideIn">
        BUY TOKENS
      </button>
      <p className="text-sm text-white mt-4 animate-slideIn">1 BPNTHR  = $0.0001 USD</p>
      <p className="text-sm text-white animate-slideIn">Expected Price at launch $0.01!</p>
    </div>
    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Charity Funds</h4>
        <p className="text-white">funds health education, awareness, treatment, and research for diseases affecting African people globally, and supports education in crypto, Web3/blockchain
        .</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Transactions Token</h4>
        <p className="text-white">designed to slash fees on mobile money transactions.
        </p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Stable Coin</h4>
        <p className="text-white">akin to Tether, (USDT) BUSD, or USDC offering a stable coin alternative that is authentically African. </p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Web3 Texting & Money Transfer App</h4>
        <p className="text-white">he texting app that uses phone numbers will be developed, doubling as a Web3 money transfer application
        </p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Secure Crypto Wallet</h4>
        <p className="text-white">We will deploy a crypto wallet with multi-currency support & optional offline storage!</p>
      </div>
      <div className="bg-purple-700 p-4 rounded-lg text-center transform transition-transform duration-200 hover:scale-105 animate-slideIn">
        <h4 className="text-xl font-bold text-white">Black Panther Blockchain/Protocol</h4>
        <p className="text-white">Our Blockchain seeks to offer real world solutions harnessing the power of Web3 as well as AI & ML. 
       </p>
      </div>
    </div>
  </div>
);

const RoadMap = () => {
  const currentStage = 1; //this value to mark the current stage

  return (
    <>
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


    
    </>
  );
};

const Footer = () => (
  <div className="bg-gray-900 py-4 mt-16">
    <div className="container mx-auto text-center">
      <img src={pantherLogo} alt="PantherLogo" className="mx-auto mb-4 w-32" />
      <h4 className="text-white text-lg font-bold">BLACK PANTHER (BPNTHR)</h4>
      <SocialIcons />
    </div>
    <ChatComponent />
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
