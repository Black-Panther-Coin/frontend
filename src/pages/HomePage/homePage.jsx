import React from "react";
import NavButtons from "../../components/Buttons/navButtons";
import PantherLogo from "../../components/PantherLogo/panther";

const HomePage = () => {
  const backgroundImageUrl = "/src/assets/images/bg.png";

  return (
    <div
      className="relative flex flex-col items-start justify-center min-h-screen w-full bg-gray-100 p-8 bg-cover bg-center font-montserrat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <NavButtons />
      <h1 className="text-6xl md:text-9xl leading-tight font-bold text-white text-left my-4">
        Black Panther Coin
      </h1>
      <h1 className="text-6xl md:text-9xl leading-tight font-bold text-white text-left my-4">
        Private Sale is <br /> Live
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-white text-left">
        Participate in the private sale of the <br />{" "}
        <span className="font-bold"> A MEME COIN WITH PURPOSE!</span> <br />{" "}
        Connect your wallet and buy Black Panther&nbsp;coin&nbsp;(PNTHR)
      </p>
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center">
        <button className="bg-transparent hover:bg-white text-white font-bold py-3 px-6 md:px-8 rounded border border-white my-2 md:my-0 md:mr-4 text-lg md:text-xl">
          View Contract
        </button>
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded md:my-0 text-lg md:text-xl">
          Buy Now
        </button>
        <div className="absolute bottom-0 right-0 mb-8 mr-8 flex flex-col items-center">
          <PantherLogo className="w-16 h-16 md:w-24 md:h-24" />
          <span className="text-yellow-500 font-bold mt-2 text-lg">
            BLACKPANTHER(PNTHR)
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
