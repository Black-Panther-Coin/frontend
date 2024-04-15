import React from "react";
import NavButtons from "../../components/Buttons/navButtons";

// logo component
import PantherLogo from "../../components/PantherLogo/panther";

const HomePage = () => {
  // background image URL
  const backgroundImageUrl = "/src/assets/images/bg.png";

  return (
    <div
      className="relative flex flex-col items-start justify-center h-screen w-full bg-gray-100 p-8"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <NavButtons />
      <h1 className="text-9xl leading-tight font-bold text-white text-left mb-2">
        Black Panther Coin
      </h1>
      <h1 className="text-9xl leading-tight font-bold text-white text-left mb-2">
        Private Sale is <br /> Live
      </h1>
      <p className="mt-4 text-2xl text-white text-left">
        Participate in the private sale of the <br />{" "}
        <span className="font-bold"> A MEME COIN WITH PURPOSE!</span> <br />{" "}
        Connect your wallet and buy Black Panther&nbsp;coin&nbsp;(PNTHR)
      </p>
      <div className="mt-4 flex items-center">
        <button className="bg-transparent hover:bg-white text-white font-bold py-3 px-6 rounded border border-white mr-4 text-xl">
          View Contract
        </button>
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded mr-4 text-xl">
          Buy Now
        </button>
        <div className="absolute bottom-0 right-0 mr-8 mb-8 flex flex-col items-center">
          <PantherLogo className="w-24 h-24" />
          <span className="text-yellow-500 font-bold mt-2 text-lg">
            BLACKPANTHER(PNTHR)
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
