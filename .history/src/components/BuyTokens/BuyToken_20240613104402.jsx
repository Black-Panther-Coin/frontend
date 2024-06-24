import React, { useState } from 'react';
import { FaEthereum } from 'react-icons/fa'; // Importing the Ethereum icon
import { FaDollarSign } from 'react-icons/fa'; // Importing the Dollar Sign icon as an alternative

const BuyToken = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightbaige">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Order Details</div>
          <div className="text-sm text-gray-500">Quote expires in 59:42</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl font-bold mb-2">1 HARAMBEAI = $0.342 USD</div>
          <div className="flex justify-between items-center mb-2">
            <div>$HarambeAI Tokens</div>
            <div className="font-semibold">1,461.9883</div>
          </div>
          <div className="flex justify-between items-center">
            <div>$USD To Pay</div>
            <div className="font-semibold">$500</div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
            Choose Network
          </label>
          <select id="network" name="network" className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Ethereum</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coin">
            Choose Coin
          </label>
          <div className="flex items-center">
            <FaEthereum className="text-xl mr-2" /> ETH (0.143638)
          </div>
          <div className="flex items-center mt-2">
            <FaDollarSign className="text-xl mr-2" /> USDT (500.000000)
          </div>
          <div className="flex items-center mt-2">
            <FaDollarSign className="text-xl mr-2" /> USDC (500.000000)
          </div>
        </div>
        <button className="w-full bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none">
          Continue
        </button>
      </div>
    </div>
  );
};

export default BuyToken;
