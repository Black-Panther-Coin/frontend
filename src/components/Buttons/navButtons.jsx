import React from "react";

const NavButtons = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center w-full p-4">
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded text-xl">
        Read ClawPaper
      </button>
      {/* <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded text-xl">
        Connect Wallet
      </button> */}
      <w3m-button />
    </div>
  );
};

export default NavButtons;
