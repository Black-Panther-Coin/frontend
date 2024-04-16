import React from "react";

const NavButtons = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center w-full p-4">
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded text-base md:text-lg mb-2 md:mb-0">
        Read ClawPaper
      </button>
      <w3m-button />
    </div>
  );
};

export default NavButtons;
