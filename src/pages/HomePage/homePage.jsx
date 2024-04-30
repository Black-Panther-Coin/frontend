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

const HomePage = () => {
  const [value, setValue] = useState("");
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
      toast.error("An Error Occurred while trying to buy PNTHR.");
    },
  });

  const { isLoading } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess: () => {
      toast.success("PNTHR bought successfully, check your wallet address.");
      setValue("");
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
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMobile]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="relative pt-24 pb-28">
        {" "}
        {/* Adjusted pb-20 to pb-28 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <animated.div
          className={`absolute inset-0 flex flex-col items-center justify-center  p-8 bg-transparent font-montserrat ${
            isDesktop ? "md:items-start md:justify-start" : ""
          }`}
          style={{ ...fadeIn }}
        >
          {!isMobile && (
            <h1
              className={`text-4xl mt-${isMobile ? 6 : 12} ${
                isMobile ? "text-center mb-2" : "md:text-6xl lg:text-8xl"
              } leading-tight font-bold text-white ${
                isMobile ? "" : "md:text-left"
              } my-4`}
            >
              Black Panther Token
            </h1>
          )}
          <h1
            className={`text-4xl ${
              isMobile ? "text-center  mt-8" : "md:text-left"
            } md:text-6xl lg:text-8xl leading-tight font-bold text-white my-4`}
          >
            Private Sale is <br /> Live
          </h1>
          <p
            className={`mt-4 text-base ${
              isMobile ? "text-center" : "md:text-left"
            } md:text-lg lg:text-2xl text-white`}
          >
            Participate in the private sale of{" "}
            <span className="font-bold">Black Panther</span>{" "}
            <span className=" font-bold">(BPNTHR)</span>. <br />{" "}
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
          <animated.div
            style={buttonAnimation}
            className="mt-4 flex flex-col md:flex-row items-start md:items-center w-full"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="number"
              placeholder="Enter BNB"
              className="bg-white text-black font-bold py-3 px-6 md:px-8 rounded border border-black my-2 md:my-0 md:mr-4 text-base md:text-lg lg:text-xl w-full md:w-auto"
            />
            <button
              onClick={buyToken}
              className="bg-yellow-500 hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded md:my-0 text-base md:text-lg lg:text-xl w-full md:w-auto"
            >
              {label}
            </button>
          </animated.div>
          <div className="text-white font-bold mt-4">{`Launching in: ${launchTimer}`}</div>
        </animated.div>
        {!isMobile && (
          <animated.div
            style={logoAnimation}
            className="mt-8 flex flex-col items-center"
          >
            <PantherLogo className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
            <span className="text-yellow-500 font-bold mt-2 text-base md:text-lg lg:text-xl">
              BLACK PANTHER (BPNTHR)
            </span>
            <div className="flex mt-4">
              <a href="#" className="mr-4 text-white hover:text-gray-300">
                YouTube
              </a>
              <a
                href="https://www.youtube.com/channel/UCZQnJu5HncWbRJ35Je3y_yQ"
                className="mr-4 text-white hover:text-gray-300"
              >
                Twitter
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x70B6954E4a08BBdE4A27A61876EE6cB1F0f43C15"
                className="mr-4 text-white hover:text-gray-300"
              >
                PancakeSwap
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x70B6954E4a08BBdE4A27A61876EE6cB1F0f43C15"
                className="mr-4 text-white hover:text-gray-300"
              >
                Telegram
              </a>
              <a
                href="https://discord.com/invite/cQHYs5mUwJ"
                className="mr-4 text-white hover:text-gray-300"
              >
                Discord
              </a>
              <a
                href="https://www.tiktok.com/@blackpanthertkn"
                className="text-white hover:text-gray-300"
              >
                TikTok
              </a>
              <a
                href="https://www.tiktok.com/@blackpanthertkn"
                className="text-white hover:text-gray-300"
              ></a>
            </div>
          </animated.div>
        )}
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Footer />
      <NavButtons />
      <Toaster />
    </>
  );
};

export default HomePage;
