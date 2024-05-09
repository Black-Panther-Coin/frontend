import React, { useState } from "react";
import WalletApprovalPopup from "../Popups/walletApprovalPopup"; 
import bgImage from "../../assets/images/bg7.png";
import DonationPopup from "../Popups/donationPopup"; 

const Footer = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false); 
  const handleCheckWallet = () => {
   
    setIsApproved(!!walletAddress);
    setIsPopupOpen(true);
  };

  const handleDonate = () => {
    setIsDonationPopupOpen(true); 
  };

  return (
    <footer className="bg-gray-800 py-12 px-4 md:px-8 w-full relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          
          <p className="text-white text-center mb-4">
            Check your wallet approval status
          </p>
          {/* Input Box Section */}
          <div className="flex items-center mb-8">
            <input
              type="text"
              placeholder="Enter Wallet Address"
              className="bg-gray-700 text-white py-4 px-6 rounded-lg focus:outline-none focus:bg-gray-600 w-full"
              style={{ fontSize: "1.5rem" }}
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button
              onClick={handleCheckWallet}
              className="bg-yellow-400 text-black font-bold px-6 py-4 ml-4 rounded-lg"
            >
              Check
            </button>
          </div>
          {/* Donate Button */}
          <button
            onClick={handleDonate}
            className="bg-blue-500 text-white font-bold px-6 py-4 rounded-lg"
          >
            Donate
          </button>
        </div>
        {/* Footer Bottom Section */}
        <div className="text-center mt-8 items-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Black Panther Coin. All rights
            reserved.
          </p>
        </div>
        {/* Render Wallet Approval Popup */}
        <WalletApprovalPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          isApproved={isApproved}
        />
        {/* Render Donation Popup */}
        <DonationPopup
          isOpen={isDonationPopupOpen}
          onClose={() => setIsDonationPopupOpen(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
