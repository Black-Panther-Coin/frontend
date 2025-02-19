import React from "react";

const WalletApprovalPopup = ({ isOpen, onClose, isApproved }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            Wallet Approval Status
          </h2>
          <p className="mb-4">
            The wallet address is {isApproved ? "approved" : "not approved"}.
          </p>
          <button
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default WalletApprovalPopup;
