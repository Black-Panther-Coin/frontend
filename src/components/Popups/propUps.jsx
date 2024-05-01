// Popup.js
import React from "react";

const propUps = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div className="p-6 rounded-md shadow-lg max-w-xs md:max-w-sm text-center" style={{backgroundColor: "#F8F5ED"}}>
        <p className="text-md md:text-lg font-semibold text-black">
          “Note: $BPNTHR tokens bought during the discounted Private Sale period
          are subject to a 20% fee if sold within the first 60 days of the
          project Go-live.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default propUps;
