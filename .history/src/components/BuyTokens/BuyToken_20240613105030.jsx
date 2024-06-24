import React, { useState } from 'react';
import { FaEthereum, FaRegEdit, FaCoins } from 'react-icons/fa';
import { SiTether, SiUsd, SiUsdc } from 'react-icons/si';

const BuyToken = () => {
  const [network, setNetwork] = useState('Ethereum');
  const [coin, setCoin] = useState('ETH');
  const [amount, setAmount] = useState(500);

  const handleNetworkChange = (e) => setNetwork(e.target.value);
  const handleCoinChange = (e) => setCoin(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section - Order Details */}
        <div className="w-full md:w-1/2 bg-lightbeige p-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">
              <FaCoins />
            </div>
            <h2 className="text-purple-600 font-bold mb-2">ORDER DETAILS</h2>
            <div className="bg-teal-500 text-white rounded-full px-4 py-1 mb-4">
              1 HARAMBEAI = $0.342 USD
            </div>
            <div className="w-full border-t border-gray-300 py-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-bold">$HarambeAI Tokens</span>
                <span className="text-2xl font-bold"><FaCoins /> 1461.9883</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600 font-bold">$USD To Pay</span>
                <span className="text-2xl font-bold">$ {amount}</span>
              </div>
              <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center">
                <FaRegEdit className="mr-2" /> EDIT PURCHASE AMOUNT
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Choose Method */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-lg font-bold text-purple-600 mb-4">Step 1</h2>
          <h3 className="text-2xl font-bold mb-6">Choose Method</h3>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">Choose Network</label>
            <select value={network} onChange={handleNetworkChange} className="w-full p-2 border rounded">
              <option value="Ethereum">Ethereum</option>
              <option value="Binance">Binance</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">Choose Coin</label>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input type="radio" value="ETH" checked={coin === 'ETH'} onChange={handleCoinChange} className="mr-2" />
                <FaEthereum className="mr-2" /> ETH (0.143638)
              </label>
              <label className="flex items-center">
                <input type="radio" value="USDT" checked={coin === 'USDT'} onChange={handleCoinChange} className="mr-2" />
                <SiTether className="mr-2" /> USDT (500.000000)
              </label>
              <label className="flex items-center">
                <input type="radio" value="USDC" checked={coin === 'USDC'} onChange={handleCoinChange} className="mr-2" />
                <SiUsdc className="mr-2" /> USDC (500.000000)
              </label>
            </div>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-full">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
