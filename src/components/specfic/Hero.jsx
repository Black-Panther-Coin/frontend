import React from 'react';
import { CenterMobile, MobileInHand } from '../../assets';

const Hero = () => {
    return (
        <div className=" px-6 md:px-5 w-screen overflow-hidden flex items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                {/* Left Side Text Content */}
                <div className="text-left max-w-xl">
                    <h1 className="leading-tight text-4xl md:text-6xl lg:text-7xl">
                        <span className="font-[400]">Welcome to <br className="hidden md:inline-block" /> the</span>
                        <span className="text-white font-bold"> Black Panther</span>
                        <span className="text-gray-200 font-[400]"> Cryptosphere</span>
                    </h1>
                    <p className="text-gray-400 mt-6 text-base md:text-lg">
                        Join the BPNTHR Revolution & Unleash the Panther’s Power! Step into the
                        Black Panther Cryptosphere—where play-to-earn gaming, the first global
                        crypto lottery, exclusive NFTs, and real-world utilities thrive in a
                        decentralized community.
                    </p>
                    <button type="button" className="border border-[#E9B308] text-[#E9B308] font-semibold shadow-2xl py-2 px-3 rounded-lg my-3">
                        Play & Earn
                    </button>
                </div>

                {/* Right Side Image - Always at Bottom */}
                <div className="relative md:h-screen   w-full">
                    {/* Background Image */}
                    <img src={MobileInHand} alt="Mobile in Hand" className=" w-full h-full mt-24 md:mt-20" />

                    {/* Center Image (Properly Centered) */}
                    <div className="absolute inset-x-0 bottom-[40%] md:bottom-[45%] flex justify-center">
                        <img
                            src={CenterMobile}
                            alt="Center Mobile"
                            className="h-16 sm:h-36  w-auto rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
