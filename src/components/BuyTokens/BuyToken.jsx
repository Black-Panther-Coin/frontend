import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign, faCoins } from '@fortawesome/free-solid-svg-icons';
import pantherHoldCoinImage from "../../assets/images/img2.png"
import { useAuthentication } from '../utils/provider';
import httpClient from '../httpClient/httpClient';

const BuyToken = () => {
  const { currentUser, ensureLogin, PointsToSave, getCurrentUser } = useAuthentication()

  useEffect(() => {
    const checkingForLogin = async () => {
      await ensureLogin()
    }

    checkingForLogin()

    const savePointsToDbAsunc = async () => {
      let info = {
        points: PointsToSave
      }
      const response = await httpClient.put("user/update_points", info)
      if(response?.status === 201) {
        localStorage.removeItem("Bpnthr_pt_sv");
        await getCurrentUser()
      } else {
        console.log("Something went wrong, contact Administration")
      }
    }

    if(currentUser) {
      if(PointsToSave > 0) {
        savePointsToDbAsunc()
      }
    }
  }, [currentUser?._id])



   return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f5f5dc]">
      <div className="w-full flex justify-center items-center bg-[#f97316] text-white py-2">
        <span className='mx-2 text-center'>
          <span className="font-bold">Congratulations! Be ready to claim your tokens when we launch.</span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-4">
        <div className="w-[100%] md:w-1/2 bg-[#f5f5dc] p-8 flex flex-col items-center">
          <img src={pantherHoldCoinImage} />
        </div>
        <div className="w-[100%] md:w-1/2 p-8 bg-white">
          <div className="text-right text-sm text-gray-500 mb-6">
            My points: <span className="font-bold text-[#f97316]">{currentUser?.points}</span>
          </div>
          <div className="mb-6">
            <div className="text-purple-950 font-bold mb-2">Ways to share BPNTHR</div>
            <hr className="border-t-2 border-purple-950 mt-2 mb-6" />
          </div>
          <div className="mb-1 flex items-center">
            <p className='text-red-500 text-2xl mr-2'>*</p>
            <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
              Talk about BPNTHR on your socials.
            </p>
          </div>

          <div className="mb-1 flex items-center">
            <p className='text-red-500 text-2xl mr-2'>*</p>
            <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
              Share with family and friends.
            </p>
          </div>

          <div className="mb-1 flex items-center">
            <p className='text-red-500 text-2xl mr-2'>*</p>
            <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
              Join BPNTHR social handles to stay informed.
            </p>
          </div>

          <div className="mb-6">
            <div className="text-purple-950 font-bold mb-2">Up coming steps</div>
            <hr className="border-t-2 border-purple-950 mt-2 mb-6" />
          </div>

          <div className="mb-1 flex items-center">
            <p className='text-red-500 text-2xl mr-2'>*</p>
            <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
              Referal Links.
            </p>
          </div>

          <div className="mb-3 flex items-center">
            <p className='text-red-500 text-2xl mr-2'>*</p>
            <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="network">
              BPNTHR Game.
            </p>
          </div>
          
          <button onClick={() => window.location.href = "/"} className="w-full bg-[#f97316] text-white py-2 px-4 font-bold rounded hover:bg-orange-600 focus:outline-none">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
