import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

const BuyToken = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightbaige">
      <div className="flex w-full max-w-5xl">
        <div className="w-1/2 bg-white p-8 rounded-l shadow-lg">
          <div className="mb-4">
            <div className="text-lg font-semibold text-center">ORDER DETAILS</div>
            <div className="text-2xl font-bold text-center mt-2">1 HARAMBEAI = $0.342 USD</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-gray-700">$HarambeAI Tokens</div>
            <div className="font-semibold">1,461.9883</div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-700">$USD To Pay</div>
            <div className="font-semibold">$500</div>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 w-full focus:outline-none">
            EDIT PURCHASE AMOUNT
          </button>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-r shadow-lg">
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
            <div className="flex items-center mb-2">
              <FaEthereum className="text-xl mr-2" /> ETH (0.143638)
            </div>
            <div className="flex items-center mb-2">
              <FaDollarSign className="text-xl mr-2" /> USDT (500.000000)
            </div>
            <div className="flex items-center">
              <FaDollarSign className="text-xl mr-2" /> USDC (500.000000)
            </div>
          </div>
          <button className="w-full bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 focus:outline-none">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
