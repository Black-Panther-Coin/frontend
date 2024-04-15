import React from "react";
import { useSpring, animated } from "react-spring";
import NavButtons from "../../components/Buttons/navButtons";
import PantherLogo from "../../components/PantherLogo/panther";

const HomePage = () => {
  const backgroundImageUrl = "/src/assets/images/bg.png";

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
      style={fadeIn}
      className="relative flex flex-col items-start justify-center min-h-screen w-full bg-gray-100 p-8 bg-cover bg-center font-montserrat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <NavButtons />
      <h1 className="text-4xl md:text-6xl lg:text-9xl leading-tight font-bold text-white text-left my-4">
        Black Panther Coin
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-9xl leading-tight font-bold text-white text-left my-4">
        Private Sale is <br /> Live
      </h1>
      <p className="mt-4 text-base md:text-lg lg:text-2xl text-white text-left">
        Participate in the private sale of the <br />{" "}
        <span className="font-bold"> A MEME COIN WITH PURPOSE!</span> <br />{" "}
        Connect your wallet and buy Black Panther&nbsp;coin&nbsp;(PNTHR)
      </p>
      <animated.div
        style={buttonAnimation}
        className="mt-4 flex flex-col md:flex-row items-start md:items-center"
      >
        <button className="bg-transparent hover:bg-white text-white font-bold py-3 px-6 md:px-8 rounded border border-white my-2 md:my-0 md:mr-4 text-base md:text-lg lg:text-xl">
          View Contract
        </button>
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded md:my-0 text-base md:text-lg lg:text-xl">
          Buy Now
        </button>
      </animated.div>
      <animated.div
        style={logoAnimation}
        className="absolute bottom-0 right-0 mb-8 mr-8 flex flex-col items-center"
      >
        <PantherLogo className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
        <span className="text-yellow-500 font-bold mt-2 text-base md:text-lg lg:text-xl">
          BLACKPANTHER(PNTHR)
        </span>
      </animated.div>
    </animated.div>
  );
};

export default HomePage;
