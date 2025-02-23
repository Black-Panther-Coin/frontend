import React from 'react';
import { MobileInHand } from '../../assets';

const Hero = () => {
    return (
        <div className='w-full px-6 md:px-10'>
            <div className=" flex flex-col md:flex-row items-center justify-between  w-full">
                <div className="text-left max-w-xl  md:text-left">
                    <h1 className="leading-tight text-4xl md:text-7xl lg:text-8xl">
                        <span className='font-[400]'>Welcome to <br className='hidden md:inline-block' /> the</span>
                        <span className="text-white font-bold"> Black Panther</span>
                        <span className="text-gray-200 font-[400]"> Cryptosphere</span>
                    </h1>
                    <p className="text-gray-400 text-left mt-6 text-base md:text-lg">
                        Join the BPNTHR Revolution & Unleash the Panther’s Power! Step into the
                        Black Panther Cryptosphere—where play-to-earn gaming, the first global
                        crypto lottery, exclusive NFTs, and real-world utilities thrive in a
                        decentralized community.
                    </p>
                    <button type="button" className='border border-[#E9B308] text-[#E9B308] font-semibold shadow-2xl py-2 px-3 rounded-lg my-3'> Play & Earn</button>
                </div>
                <div className="mt-8 md:mt-0">
                    <img src={MobileInHand} alt="Mobile in Hand"
                        className="w-64 h-auto md:w-[800px] lg:w-[800px] object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
