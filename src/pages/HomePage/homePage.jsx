import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import NavButtons from "../../components/Buttons/navButtons";
import PantherLogo from "../../components/PantherLogo/panther";
import backgroundImage from "../../assets/images/bg2.jpg";
import { useAccount, useContractWrite } from "wagmi";
import { preSaleABI, preSaleAddress } from "../../constants/constants";
import { parseEther } from "viem";
import toast, { Toaster } from "react-hot-toast";
import { useWaitForTransaction } from "wagmi";
import Footer from "../../components/Footer/footer";
import "./homePage.css";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [launchDate, setLaunchDate] = useState(new Date("2024-05-01T00:00:00"));

  useEffect(() => {
    // Hide the pop-up after 30 seconds
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  const { address } = useAccount();

  // Remaining time until launch
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

  // Define animations
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

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <animated.div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-transparent font-montserrat md:items-start md:justify-start"
          style={{ ...fadeIn }}
        >
          <NavButtons />
          <h1 className="text-4xl mt-12 md:text-6xl lg:text-8xl leading-tight font-bold text-white text-center md:text-left my-4">
            Black Panther Token
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight font-bold text-white text-center md:text-left my-4">
            Private Sale is <br /> Live
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-2xl text-white text-center md:text-left">
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
          <div className="flex mt-4 flex-col md:flex-row">
            <button className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 md:px-8 rounded border border-yellow-500 mr-4 mb-2 md:mb-0 text-base md:text-lg lg:text-xl">
              View Contract
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdS8WXf6paOKK-nAn-BVN6zt4IcJ205Hipj7wIsB5G_9sW-mQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 md:px-8 rounded border border-yellow-500 text-base md:text-lg lg:text-xl"
            >
              Presale Form
            </a>
          </div>
          <animated.div
            style={logoAnimation}
            className="absolute bottom-0 right-0 mb-8 mr-8 flex flex-col items-center"
          >
            <PantherLogo className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
            <span className="text-yellow-500 font-bold mt-2 text-base md:text-lg lg:text-xl">
              BLACK PANTHER (BPNTHR)
            </span>
          </animated.div>
          <div className="text-white font-bold mt-4">{`Launching in: ${launchTimer}`}</div>
          <animated.div className="absolute bottom-4 right-4 text-white font-bold marquee">
            Note: $BPNTHR tokens bought during the discounted Private Sale
            period are subject to a 20% fee if sold within the first 60 days of
            the project Go-live.
          </animated.div>
          {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70 text-white">
              <div className="p-6 bg-gray-900 rounded-md shadow-lg max-w-sm text-center">
                <p className="text-lg font-semibold">
                  Click on the Presale Form button to fill your wallet details
                  for the private sales.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Got it!
                </button>
              </div>
            </div>
          )}

          <Toaster />
        </animated.div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
