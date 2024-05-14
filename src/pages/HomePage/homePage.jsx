import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import NavButtons from "../../components/Buttons/navButtons";
import PantherLogo from "../../components/PantherLogo/panther";
import backgroundImage from "../../assets/images/bg2.jpg";
import { useAccount, useContractWrite } from "wagmi";
import { preSaleABI, preSaleAddress } from "../../constants/constants";
import { parseEther } from "viem";
import toast, { Toaster } from "react-hot-toast";
import { useWaitForTransaction } from "wagmi";
import Footer from "../../components/Footer/footer";
import Popup from "../../components/Popups/propUps";
import "./homePage.css";
import { ConvertFromBNBToUSD } from "../../components/utils/convertFromBNBToUSD";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [usdValue, setUsdValue] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [launchDate, setLaunchDate] = useState(new Date("2024-05-01T00:00:00"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  const { address } = useAccount();

  const timeUntilLaunch = launchDate - new Date();
  const daysRemaining = Math.floor(timeUntilLaunch / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (timeUntilLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesRemaining = Math.floor(
    (timeUntilLaunch % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsRemaining = Math.floor((timeUntilLaunch % (1000 * 60)) / 1000);

  const launchTimer = `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;

  const { write, data: writeData } = useContractWrite({
    address: preSaleAddress,
    abi: preSaleABI,
    functionName: "buyToken",
    onError: (error) => {
      console.log("Error", error);
      toast.error("An Error Occurred while trying to buy BPNTHR.");
    },
  });

  const { isLoading } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess: () => {
      toast.success("BPNTHR bought successfully, check your wallet address.");
      setValue("");
      window.reload();
    },
    onError: () => toast.error("An Error Occurred"),
  });

  function buyToken() {
    if (address && value !== "") {
      write({ value: parseEther(value.toString()) });
    } else {
      toast.error(
        "Ensure you are connected and you have entered a BNB amount."
      );
    }
  }

  const label = isLoading ? "Buying.." : "Buy Now";

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  const logoAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000, delay: 1000 },
  });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowY = "auto"; // Set body overflow to auto to allow scrolling
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMobile]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const onSetValue = async (val) => {
    setValue(val);
    const usdVal = await ConvertFromBNBToUSD(val);
    console.log("usdVal", usdVal);
    setUsdValue(usdVal);
  };

  return (
    <>
      <div className="relative pt-24 pb-28 min-h-screen bg-bg2 bg-no-repeat bg-contain md:bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        {/* <img
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-cover"
        /> */}
        <animated.div
          className={`absolute inset-0 flex flex-col items-center justify-center  p-8 bg-transparent font-montserrat ${
            isDesktop ? "md:items-start md:justify-start" : ""
          }`}
          style={{ ...fadeIn }}
        >
          <h1 className="mt-4 text-xl md:mt-16 md:text-4xl leading-tight font-bold text-white text-center md:text-left">
            Black Panther Token <span>(BPNTHR)</span>
          </h1>
          <h1 className="text-xl text-center md:text-left md:text-4xl leading-tight font-bold text-white my-4">
            Private Sale is <br /> Live
          </h1>

          <p
            className={`mt-4 text-sm text-center  md:text-left md:text-md text-white`}
          >
            <span className="font-bold">
              {" "}
              <span className="text-yellow-500">
                {" "}
                A MEME COIN WITH PURPOSE!
              </span>
            </span>{" "}
            <br /> Connect your wallet and buy{" "}
            <span className="font-bold">Black Panther Token</span>
            &nbsp;&nbsp;(BPNTHR)
          </p>

          <p
            className={`mt-4 text-sm text-center  md:text-left md:text-md text-white`}
          >
            Please Go to your Wallet Address and{" "}
            <span className="font-bold text-yellow-500">CUSTOM IMPORT</span> the{" "}
            <br /> <span className="font-bold text-yellow-500">BPNTHR</span>{" "}
            ticker by{" "}
            <span className="font-bold text-yellow-500">Copy pasting</span>{" "}
            Contract Address inside <br /> your wallet in order to view the
            number of tokens you have bought. <br />{" "}
          </p>

          <p
            className={`mt-4 text-sm text-center  md:text-left md:text-md text-white`}
          >
            <span className="font-bold text-yellow-500">
              Contract Address :
            </span>{" "}
            <br /> <span>0x12a55f6aBDfE13a44eF8b29a24964e20D21E0fA5</span>
          </p>

          <p className="font-bold">
            NB: MAKE SURE YOUR WALLET IS SET TO BNB SMARTCHAIN NETWORK(NOT
            ETHERIUM MAI)
          </p>

          <animated.div
            style={buttonAnimation}
            className="mt-4 mb-2 flex flex-col md:flex-row items-start md:items-center w-full"
          >
            <div className="flex md:w-1/4">
              <span className="text-white mt-4 py-2 px-4">BNB</span>
              <input
                value={value}
                onChange={(e) => onSetValue(e.target.value)}
                type="number"
                placeholder="Enter BNB"
                className="text-white bg-black font-bold py-3 px-6 md:px-8 rounded border border-black my-2 md:my-0 mr-3 text-sm md:text-md w-full"
              />
            </div>

            <button
              onClick={buyToken}
              className="bg-yellow-500 hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded-full md:my-0 text-sm md:text-md w-full md:w-auto"
            >
              {label}
            </button>
          </animated.div>
          {value !== "" && (
            <>
              <div>
                <span className="text-white mt-4 py-2 px-4">
                  Equivalent in USD:{" "}
                  <span className="font-bold text-yellow-500">${usdValue}</span>
                </span>
              </div>
            </>
          )}
          <div className="text-center mt-3">
            <ul>
              <li>
                {isMobile && (
                  <a
                    className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://bscscan.com/address/0x12a55f6aBDfE13a44eF8b29a24964e20D21E0fA5",
                        "_blank"
                      )
                    }
                    aria-current="page"
                  >
                    Click to View Contract
                  </a>
                )}
              </li>
            </ul>
          </div>
        </animated.div>
      </div>

      <animated.div
        style={logoAnimation}
        className="mt-8 flex flex-col items-center"
      >
        <PantherLogo className="w-12 h-12 md:w-16 md:h-16" />
        <span className="text-yellow-500 font-bold mt-2 text-base md:text-lg">
          BLACK PANTHER (BPNTHR)
        </span>
        {/* social Media */}
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
      </animated.div>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div className="overflow-y-scroll">
        <Footer />
      </div>
      <NavButtons />
      <Toaster />
    </>
  );
};

export default HomePage;
