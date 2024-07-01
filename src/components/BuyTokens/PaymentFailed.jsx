import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PaymentFailed = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 text-center p-6">
      <div className="flex justify-center items-center mb-6 animate-pulse">
        <FaExclamationTriangle className="text-red-500 text-8xl" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Payment Failed</h1>
      <p className="text-lg mb-8">Something went wrong. Please try again.</p>
      <button
        className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
        onClick={handleRetry}
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentFailed;
