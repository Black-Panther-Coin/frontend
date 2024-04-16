import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import NavButtons from "../../components/Buttons/navButtons";
import PantherLogo from "../../components/PantherLogo/panther";

import { useAccount, useContractWrite } from "wagmi";
import { preSaleABI, preSaleAddress } from "../../constants/constants";
import { parseEther } from "viem";
import toast, { Toaster } from "react-hot-toast";
import { useWaitForTransaction } from "wagmi";

const HomePage = () => {
  const backgroundImageUrl = "/src/assets/images/bg.png";
  const [value, setValue] = useState("");

  const { address } = useAccount();

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
    <animated.div
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-8 bg-cover bg-center font-montserrat md:items-start md:justify-start"
      style={{ ...fadeIn, backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <NavButtons />
      <h1 className="text-4xl mt-12 md:text-6xl lg:text-9xl leading-tight font-bold text-white text-center md:text-left my-4">
        Black Panther Coin
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-9xl leading-tight font-bold text-white text-center md:text-left my-4">
        Private Sale is <br /> Live
      </h1>
      <p className="mt-4 text-base md:text-lg lg:text-2xl text-white text-center md:text-left">
        Participate in the private sale of{" "}
        <span className="font-bold">Black Panther</span>{" "}
        <span className="text-yellow-500 font-bold">($PNTHR)</span>. <br />{" "}
        <span className="font-bold">
          {" "}
          <span className="text-yellow-500"> A MEME COIN WITH PURPOSE!</span>
        </span>{" "}
        <br /> Connect your wallet and buy{" "}
        <span className="font-bold">Black Panther</span>&nbsp;coin&nbsp;(PNTHR)
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
      <button
        className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 md:px-8 rounded border border-yellow-500 my-2 md:my-0 md:mr-4 text-base md:text-lg lg:text-xl"
        style={{ marginTop: "20px" }}
      >
        View Contract
      </button>
      <animated.div
        style={logoAnimation}
        className="absolute bottom-0 right-0 mb-8 mr-8 flex flex-col items-center"
      >
        <PantherLogo className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
        <span className="text-yellow-500 font-bold mt-2 text-base md:text-lg lg:text-xl">
          BLACK PANTHER ($PNTHR)
        </span>
      </animated.div>
      <Toaster />
    </animated.div>
  );
};

export default HomePage;
