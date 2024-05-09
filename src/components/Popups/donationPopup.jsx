import React, { useState } from "react";

const DonationPopup = ({ isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = () => {
   
    console.log("Donation amount:", donationAmount);
    onClose(); 
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Donate with Love</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter the Amount"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg focus:outline-none w-full"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleDonate}
          >
            Donate
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default DonationPopup;
