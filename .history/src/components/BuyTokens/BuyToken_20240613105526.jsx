import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { SiTether, SiUsd } from 'react-icons/si'; // Importing additional icons

const BuyToken = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f5f5dc]"> {/* light beige background */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-[#f5f5dc] p-8 flex flex-col items-center"> {/* light beige background */}
          <div className="text-center mb-4">
            <div className="font-semibold text-lg text-purple-950">ORDER DETAILS</div>
            <div className="text-2xl font-bold text-[#00bfa5] mt-2 mb-4">1 HARAMBEAI = $0.342 USD</div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-700">$HarambeAI Tokens</div>
              <div className="font-semibold text-purple-950">1,461.9883</div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-700">$USD To Pay</div>
              <div className="font-semibold text-purple-950">$500</div>
            </div>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 font-bold rounded hover:bg-yellow-600 w-full focus:outline-none">
            EDIT PURCHASE AMOUNT
          </button>
        </div>
        <div className="w-1/2 p-8 bg-white">
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
              <FaEthereum className="text-xl mr-2 text-purple-950" /> ETH (0.143638)
            </div>
            <div className="flex items-center mb-2">
              <SiTether className="text-xl mr-2 text-green-500" /> USDT (500.000000)
            </div>
            <div className="flex items-center">
              <SiUsd className="text-xl mr-2 text-blue-500" /> USDC (500.000000)
            </div>
          </div>
          <button className="w-full bg-[#f97316] text-white py-2 px-4 font-bold rounded hover:bg-orange-600 focus:outline-none"> {/* Continue button with orange background */}
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
