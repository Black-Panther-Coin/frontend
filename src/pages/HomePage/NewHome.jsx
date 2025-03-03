import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import HeaderNew from '../../components/Header/HeaderNew'
import Hero from '../../components/specfic/Hero'
import { BlockChain2, BlockImage, CenterImage, Charity, CharityWhite, Coin, Dao, Expand, FacePeople, HeroBackground, Launch, Lottery, Lottery2, Network, NewProduct, Nft, OldManImage, PeopleSmile, PlayStation, Transaction, Win, World } from '../../assets'
import { FiAlignLeft, FiArrowLeft, FiArrowRight, FiAtSign } from 'react-icons/fi'
import { ExecutionRevertedError } from 'viem';

const NewHome = () => {
    return (
        <div className="">
            {/* Navbar */}
            <HeaderNew />
            <div className="min-h-screen  max-h-[100vh] w-[100vw] overflow-hidden  mt-20" style={{ width: "100%", background: `url(${HeroBackground}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center" }}>


                <Hero />

            </div>
            <Theme />
            <div className="min-h-screen w-full bg-[#F8F5ED] py-3  px-4 md:px-10 ">
                <div className='max-w-3xl h-auto'>
                    <p className='text-black tracking-wider leading-tight text-3xl md:text-[70px] font-semibold'>
                        Unleash the Power Within</p>
                </div>
                <div className='bg-black rounded-lg shadow-lg  sm:max-w-[96vw] p-10 flex flex-col md:flex-row gap-5 justify-around'>
                    <div className="max-w-xs bg-[#424240] h-[500px] flex flex-col justify-around rounded-2xl p-2 shadow-xl text-white  overflow-hidden">

                        <div className="relative ml-10">
                            <div className="w-60 h-40 overflow-hidden relative">

                                <div className="w-60 h-60 rounded-full border-t border-[#FFFFFF] opacity-50 absolute top-0 left-0"></div>


                                <div className="w-44 h-44 rounded-full border-t border-[#FFFFFF] opacity-40 absolute top-4 left-8"></div>


                                <div className="w-28 h-28 rounded-full border-t border-[#FFFFFF] opacity-30 absolute top-8 left-16"></div>

                                <div className="relative flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 shadow-lg border border-transparent mx-auto mt-12">

                                    <div className="absolute inset-0 -top-1 rounded-full border-t-2 border-yellow-500"></div>


                                    <div className="absolute inset-0 -bottom-1 rounded-full border-b-2 border-yellow-500"></div>


                                    <div className="absolute inset-0 rounded-full border border-yellow-500 opacity-50"></div>


                                    <img src={Lottery2} alt="Lottery Icon" className="w-8 h-8 text-yellow-500" />
                                </div>




                            </div>
                            <div className='ml-6'>


                                <svg width="181" height="56" viewBox="0 0 181 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="180" height="55" rx="19.5" stroke="url(#paint0_linear_1988_3684)" />
                                    <g filter="url(#filter0_d_1988_3684)">
                                        <rect x="19" y="12" width="132" height="30" rx="15" fill="black" fill-opacity="0.2" shape-rendering="crispEdges" />
                                        <rect x="19.5" y="12.5" width="131" height="29" rx="14.5" stroke="#E9B308" stroke-opacity="0.5" shape-rendering="crispEdges" />
                                    </g>
                                    <rect x="54" y="23" width="62" height="10" rx="5" fill="#F9F2A3" />
                                    <defs>
                                        <filter id="filter0_d_1988_3684" x="19" y="12" width="140" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="4" dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1988_3684" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1988_3684" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1988_3684" x1="61" y1="-42.9767" x2="73.671" y2="86.7507" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.190296" stop-color="#E1AB0D" />
                                            <stop offset="0.708921" stop-color="#7B5D07" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>



                        {/* Text Content */}
                        <div className=" text-left px-10">
                            <h3 className="text-lg font-semibold">Enter to Win</h3>
                            <p className="text-sm mt-2 text-gray-400">
                                Win big in the global Black Panther Lottery!
                            </p>

                            {/* Button */}
                            <button className="mt-4 w-full py-2 rounded-full border border-gray-600 text-white hover:bg-yellow-500 hover:text-black transition duration-300">
                                Join the lottery
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-[#424240] max-w-xs rounded-xl p-3'>
                            <div className='bg-black p-2 rounded-md w-10'>
                                <img src={PlayStation} alt="Play Station " />
                            </div>

                            <div className=" text-left px-2 my-4">
                                <h3 className="text-lg font-semibold">Play & Earn </h3>
                                <p className="text-sm mt-2 text-gray-400">
                                    Earn BPNTHR tokens by playing the Black Panther game
                                </p>

                                {/* Button */}
                                <button className="mt-4 w-full py-2 rounded-full border border-gray-600 text-white hover:bg-yellow-500 hover:text-black transition duration-300">
                                    Play & Earn
                                </button>
                            </div>
                        </div>
                        <div className='bg-[#424240] max-w-xs rounded-xl p-3'>
                            <div className='bg-black p-2 rounded-md w-10'>
                                <img src={BlockChain2} alt="Play Station " />
                            </div>

                            <div className=" text-left px-2 my-4">
                                <h3 className="text-lg font-semibold">DAO Governance</h3>
                                <p className="text-sm mt-2 text-gray-400">
                                    Help steer the future of the ecosystem with your votes.
                                </p>

                                {/* Button */}

                                <button className="mt-4 w-full py-2 rounded-full border-t border-[#7B5D07] text-white hover:bg-yellow-500 hover:text-black transition duration-300">
                                    DAO Governance
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#424240] max-w-xs rounded-xl p-3 relative flex flex-col justify-around">
                        {/* Image with Blend Effect */}
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src={BlockImage}
                                className="w-full h-full object-cover mix-blend-lighten opacity-80"
                                alt="Blended Image"
                            />
                        </div>
                        <div className=" text-left px-12">
                            <h3 className="text-lg font-semibold">NFT Integration</h3>
                            <p className="text-sm mt-2 text-gray-400">
                                Mint, collect and trade exclusive NFTs tied to your game progress
                            </p>


                        </div>
                    </div>

                </div>
            </div>
            <CryptoShpere />
            <TokenomicsChart />
        </div>
    )
}

const Theme = () => {
    return (
        <>
            <div className="min-h-screen w-full bg-[#F8F5ED] py-3   px-4 md:px-10">
                <div className='max-w-3xl h-auto'>
                    <p className='text-black tracking-wider leading-tight text-3xl md:text-[70px] font-semibold'>More Than a Theme, It’s a Movement!</p>
                </div>
                <div className='h-auto w-full md:max-w-[70%] my-3 flex justify-between gap-3'>
                    <div className='flex-1'>
                        <div className='bg-black p-2 shadow-2xl rounded-md'>
                            <div className="bg-[#42424080] p-4 shadow-2xl rounded-md grid grid-cols-3 gap-4">

                                <div className="relative bg-[#42424033] rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Network} alt="network png" className="h-3/4 sm:h-full object-contain" />


                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#83650400] to-[#E9B308] rounded-bl-full rounded-br-full"></span>


                                    <span className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#836504] to-[#E9B308] rounded-tr-full rounded-br-full"></span>
                                </div>


                                <div className="relative bg-[#42424033] rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Charity} alt="charity png" className="h-3/4 sm:h-full object-contain" />


                                    <span className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-t to-[#83650400] from-[#E9B308] rounded-tl-full rounded-bl-full"></span>


                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#836504] to-[#E9B308] rounded-bl-full rounded-br-full"></span>


                                    <span className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#83650400] to-[#E9B308] rounded-tr-full rounded-br-full"></span>
                                </div>


                                <div className="relative bg-[#42424033] rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Nft} alt="network png" className="h-3/4 sm:h-full object-contain" />


                                    <span className="absolute bottom-0 left-0 w-5/6 h-[2px] bg-gradient-to-l from-[#83650400] to-[#E9B308] rounded-bl-full rounded-br-full"></span>


                                    <span className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-t to-[#83650400] from-[#E9B308] rounded-tr-full rounded-br-full"></span>
                                </div>
                                <div className="relative bg-[#42424033] rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Lottery} alt="network png" className="h-3/4 sm:h-full object-contain" />


                                    <span className="absolute top-0 right-0 w-3/5 h-[2px] bg-gradient-to-r from-[#83650400] to-[#E9B308] rounded-bl-full rounded-br-full"></span>


                                    <span className="absolute top-0 right-0 h-4/5 w-[2px] bg-gradient-to-t from-[#83650400] to-[#E9B308] rounded-tr-full rounded-br-full"></span>
                                </div>
                                <div className="relative bg-gradient-to-b from-[#F9F2A3] to-[#EBAA37]  rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Dao} alt="network png" className="h-3/4 sm:h-full object-contain" />

                                </div>
                                <div className="relative bg-[#42424033] rounded-xl shadow-2xl p-2 h-24 sm:h-28 md:h-32 w-full flex justify-center items-center">
                                    <img src={Win} alt="network png" className="h-3/4 sm:h-full object-contain" />


                                    <span className="absolute top-0 left-0 w-3/5 h-[2px] bg-gradient-to-l from-[#83650400] to-[#E9B308] rounded-bl-full rounded-br-full"></span>


                                    <span className="absolute top-0 left-0 h-4/5 w-[2px] bg-gradient-to-t from-[#83650400] to-[#E9B308] rounded-tr-full rounded-br-full"></span>
                                </div>
                            </div>



                        </div>
                        <div className='my-4 flex flex-col md:flex-row gap-3'>
                            <CommunityCard />
                            <div className=' '>
                                <BinanceCard />
                                <button type="button" className='bg-[#E1AB0D] flex my-4 ml-2 font-bold  shadow-2xl rounded-full items-center gap-3 py-1 px-2'>
                                    Learn More <span> <FiArrowRight className='font-bold' /> </span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute  top-0 left-20 hidden md:inline-block min-h-[70vh] w-[1px] bg-gradient-to-t from-[#571C86] via-[#571C86] to-[#15072000]' />
                        <div className='absolute  top-0 left-28 hidden md:inline-block min-h-[70vh] w-[1px] bg-gradient-to-t from-[#571C86] via-[#571C86] to-[#15072000]' />
                        <div className='absolute  top-0 left-36 hidden md:inline-block min-h-[70vh] w-[1px] bg-gradient-to-t from-[#571C86] via-[#571C86] to-[#15072000]' />
                    </div>
                </div>
            </div>
        </>
    )
}

const CommunityCard = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-2xl shadow-2xl p-4 w-[360px] h-[295px] text-white flex flex-col items-center justify-center">
            <div className="relative w-[240px] h-[240px] flex items-center justify-center">
                {/* Outer Circle with Top Yellow Shadow */}
                <div className=" relative w-full h-full rounded-full  flex items-center justify-center ">
                    {/* Middle Circle */}

                    {/* Inner Circle */}
                    <div className=" w-[210px] h-[210px] rounded-full bg-[#555553] flex items-center justify-center shadow-[0_-10px_20px_-5px_#E9B308]">
                        {/* Smaller Circle */}
                        <div className="relative w-[170px] h-[170px] rounded-full bg-[#424240] flex items-center justify-center">

                            <div className="w-[140px] h-[140px] rounded-full overflow-hidden flex items-center justify-center border-2 border-[#E9B308]">
                                <img
                                    src={CenterImage}
                                    alt="Community Group"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className='absolute right-4 top-2 rounded-full h-10 w-10 bg-[#571C86] flex justify-center items-center'>
                                <img src={CharityWhite} className='h-7 w-7' alt="charity white image" />
                            </div>
                            <div className='absolute -right-2 top-20 rounded-full overflow-hidden h-8 w-8  flex justify-center items-center'>
                                <img src={OldManImage} className='h-full w-full' alt="charity white image" />
                            </div>
                        </div>

                    </div>
                    <div className='absolute left-4 top-0 rounded-full overflow-hidden h-12 w-12  flex justify-center items-center'>
                        <img src={PeopleSmile} className='h-full w-full' alt="charity white image" />
                    </div>
                    <div className='absolute left-4 bottom-0 rounded-full overflow-hidden h-12 w-12  flex justify-center items-center'>
                        <img src={FacePeople} className='h-full w-full' alt="charity white image" />
                    </div>
                </div>
            </div>


            <p className="mt-6 text-center text-sm leading-5 px-4">
                Join a decentralized community where you can contribute to governance
                and charitable causes.
            </p>
        </div>
    );
};
const BinanceCard = () => {
    return (
        <div className="w-[360px] h-60 bg-gradient-to-br bg-black from-[#7E828200] to-[#7E828280] rounded-2xl p-4 shadow-lg text-white relative overflow-hidden flex ">
            {/* Side Panel */}
            <div className="absolute bottom-0 -left-36 w-60 rotate-6 h-60 bg-gradient-to-tr from-[#42424000] to-[#A8A8A380] opacity-30 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
            <div className="relative  h-40 w-36 bg-[#424240] rounded-l-2xl flex flex-col items-center py-4">
                <div className="mb-2">
                    <img
                        src={Coin}
                        alt="Binance Logo"
                        className="h-8 w-8"
                    />
                </div>
                <p className="text-xs text-left ">Binance  Smart Chain</p>
                <div className='absolute top-28 h-20 w-20 bg-[#424240] border-[4px] border-white rounded-full p-2'>
                    <img src={Transaction} alt="Transaction image" />
                </div>
            </div>

            {/* Half Circle Background */}


            {/* Main Content */}
            <div className=" ml-10 mt-10">
                <p className="text-xs tracking-wider font-medium">
                    Powered by <br />
                    <span className="font-bold">Binance Smart Chain (BSC)</span> for fast,
                    low-cost transactions
                </p>


            </div>
        </div>
    );
};

const CryptoShpere = () => {
    const steps = [
        {
            number: 1,
            title: "Foundation & Community Growth",
            description: "Global Lottery & Stablecoin Launch, Community Building",
            icon: NewProduct,
        },
        {
            number: 2,
            title: "Gaming & Deployment",
            description: "Game Launch, NFT Mint, DAO Activation, Partnerships",
            icon: Launch,
        },
        {
            number: 3,
            title: "Expansion & Innovation",
            description: "Ecosystem Expansion, Metaverse Integration, Charitable & Investment Initiatives",
            icon: Expand,
        },
        {
            number: 4,
            title: "Global Adoption & Real-World Integration",
            description: "Africa & Worldwide marketing, adoption & integration into the daily lives of Africans & people worldwide.",
            icon: World,
        },
    ];
    return (

        <>
            <div className='max-w-3xl h-auto mx-2 md:ml-20 py-5'>
                <p className='text-black tracking-wider leading-tight text-3xl md:text-[70px] font-semibold'>
                    Road to the Black Panther Cryptosphere          </p>
            </div>
            <div className="flex  items-start justify-center  bg-[#F8F5ED]">


                <div className="flex flex-col gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className=" relative flex items-center gap-0 md:gap-4">
                            <div className="absolute top-0 right-0 flex items-center justify-center h-10 w-10 md:w-12 md:h-12 bg-[#571C86] text-white rounded-full shadow-lg">
                                <img src={step.icon} alt={step.title} className='md:h-6  md:w-6 h-4 w-4' />
                            </div>
                            <div className="bg-white shadow-lg rounded-xl h-16 md:h-24 p-4  md:w-64">
                                <h3 className="font-bold text-[13px] md:text-sm text-black"> {step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <svg width="129" className='-mt-40 sm:mt-0' height="702" viewBox="0 0 129 702" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M127 1C127 1 30.9418 118.725 25 209C18.1222 313.496 130.951 352.353 127 457C122.954 564.167 1 701 1 701" stroke="url(#paint0_linear_1996_10)" stroke-width="2" />
                    <defs>
                        <linearGradient id="paint0_linear_1996_10" x1="64.0507" y1="1" x2="64.0507" y2="701" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#571C86" />
                            <stop offset="1" stop-color="#150720" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>


                {/* Right Section - Descriptions */}
                <div className="flex flex-col gap-8 min-h-[70vh]">
                    {steps.map((step) => (
                        <div key={step.number} className="max-w-xs">
                            <p className="text-gray-700 font-semibold text-xs md:text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}





const data = [
    { name: 'DEXs', value: 40, color: '#D4A017' },
    { name: 'CEXs', value: 10, color: '#1ABC9C' },
    { name: 'Treasury', value: 10, color: '#A0522D' },
    { name: 'Marketing', value: 10, color: '#D3D3D3' },
    { name: 'Charity', value: 10, color: '#F5F5F5' },
    { name: 'Dev', value: 10, color: '#8B4513' }
];

const TokenomicsChart = () => {
    return (
        <div className="w-full  h-full mx-2 bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 shadow-lg text-white flex flex-col md:flex-row items-center gap-8 justify-between">
            {/* Left Section - Text Content */}
            <div className='flex justify-between'>


                <div className="">
                    <h2 className="text-3xl font-bold">
                        BPNTHR <br />
                        <span className="underline decoration-blue-500">TOKENOMICS</span>
                    </h2>
                    <p className="text-sm mt-4">Understanding the distribution of BPNTHR tokens</p>

                </div>

                <ul className="mt-10 ml-20 space-y-2 text-sm">
                    {data.map((entry) => (
                        <li key={entry.name} className="flex items-center">
                            <span
                                className="inline-block w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: entry.color }}
                            ></span>
                            {entry.value}% {entry.name}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Right Section - Pie Chart */}
            <div className="   ">
                {/* <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            startAngle={90}
                            endAngle={-270}
                            stroke="#2E0854"
                            strokeWidth={6}
                        >
                            {data.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer> */}
                <svg width="504" height="300" viewBox="0 0 504 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M254 500C320.304 500 383.893 473.661 430.777 426.777C477.661 379.893 504 316.304 504 250C504 183.696 477.661 120.107 430.777 73.2233C383.893 26.3392 320.304 1.29099e-05 254 0L254 250L254 500Z" fill="url(#paint0_linear_2062_692)" />
                    <path d="M121.748 432.028C160.144 459.925 206.378 474.966 253.839 475L254 250L121.748 432.028Z" fill="url(#paint1_linear_2062_692)" />
                    <g filter="url(#filter0_d_2062_692)">
                        <path d="M15.5278 325.04C31.3747 375.4 62.7579 419.451 105.179 450.879L254 250L15.5278 325.04Z" fill="url(#paint2_linear_2062_692)" />
                    </g>
                    <path d="M40.3433 179.46C25.4468 224.58 25.2167 273.258 39.686 318.517L254 250L40.3433 179.46Z" fill="url(#paint3_linear_2062_692)" />
                    <g filter="url(#filter1_d_2062_692)">
                        <path d="M107.614 47.3399C64.8163 78.2536 32.9039 121.923 16.4506 172.088L254 250L107.614 47.3399Z" fill="url(#paint4_linear_2062_692)" />
                    </g>
                    <path d="M254 25C206.485 25 160.189 40.0424 121.748 67.9712L254 250V25Z" fill="url(#paint5_linear_2062_692)" />
                    <circle cx="255" cy="250" r="100" fill="url(#paint6_linear_2062_692)" />
                    <circle cx="254" cy="250" r="85" fill="url(#paint7_linear_2062_692)" />
                    <circle cx="254" cy="250" r="70" fill="url(#paint8_linear_2062_692)" />
                    <path d="M199.836 49.92V48.094H203.972V64H201.948V49.92H199.836ZM207.411 55.882C207.411 53.3593 207.822 51.394 208.643 49.986C209.464 48.5633 210.902 47.852 212.955 47.852C214.994 47.852 216.424 48.5633 217.245 49.986C218.066 51.394 218.477 53.3593 218.477 55.882C218.477 58.4487 218.066 60.4433 217.245 61.866C216.424 63.2887 214.994 64 212.955 64C210.902 64 209.464 63.2887 208.643 61.866C207.822 60.4433 207.411 58.4487 207.411 55.882ZM216.497 55.882C216.497 54.606 216.409 53.528 216.233 52.648C216.072 51.7533 215.727 51.0347 215.199 50.492C214.686 49.9493 213.938 49.678 212.955 49.678C211.958 49.678 211.195 49.9493 210.667 50.492C210.154 51.0347 209.809 51.7533 209.633 52.648C209.472 53.528 209.391 54.606 209.391 55.882C209.391 57.202 209.472 58.3093 209.633 59.204C209.809 60.0987 210.154 60.8173 210.667 61.36C211.195 61.9027 211.958 62.174 212.955 62.174C213.938 62.174 214.686 61.9027 215.199 61.36C215.727 60.8173 216.072 60.0987 216.233 59.204C216.409 58.3093 216.497 57.202 216.497 55.882ZM220.785 51.68C220.785 50.6827 221.086 49.8907 221.687 49.304C222.289 48.7027 223.059 48.402 223.997 48.402C224.936 48.402 225.706 48.7027 226.307 49.304C226.909 49.8907 227.209 50.6827 227.209 51.68C227.209 52.692 226.909 53.4987 226.307 54.1C225.706 54.6867 224.936 54.98 223.997 54.98C223.059 54.98 222.289 54.6867 221.687 54.1C221.086 53.4987 220.785 52.692 220.785 51.68ZM233.633 48.644L224.723 64H222.743L231.653 48.644H233.633ZM223.997 49.634C223.499 49.634 223.103 49.81 222.809 50.162C222.531 50.4993 222.391 51.0053 222.391 51.68C222.391 52.3547 222.531 52.868 222.809 53.22C223.103 53.572 223.499 53.748 223.997 53.748C224.496 53.748 224.892 53.572 225.185 53.22C225.479 52.8533 225.625 52.34 225.625 51.68C225.625 51.0053 225.479 50.4993 225.185 50.162C224.892 49.81 224.496 49.634 223.997 49.634ZM229.211 60.964C229.211 59.952 229.512 59.1527 230.113 58.566C230.715 57.9647 231.485 57.664 232.423 57.664C233.362 57.664 234.125 57.9647 234.711 58.566C235.313 59.1527 235.613 59.952 235.613 60.964C235.613 61.9613 235.313 62.7607 234.711 63.362C234.125 63.9633 233.362 64.264 232.423 64.264C231.485 64.264 230.715 63.9707 230.113 63.384C229.512 62.7827 229.211 61.976 229.211 60.964ZM232.401 58.918C231.903 58.918 231.507 59.094 231.213 59.446C230.92 59.7833 230.773 60.2893 230.773 60.964C230.773 61.624 230.92 62.13 231.213 62.482C231.507 62.8193 231.903 62.988 232.401 62.988C232.9 62.988 233.296 62.8193 233.589 62.482C233.883 62.13 234.029 61.624 234.029 60.964C234.029 60.2893 233.883 59.7833 233.589 59.446C233.296 59.094 232.9 58.918 232.401 58.918Z" fill="white" />
                    <path d="M78.836 95.92V94.094H82.972V110H80.948V95.92H78.836ZM86.4109 101.882C86.4109 99.3593 86.8215 97.394 87.6429 95.986C88.4642 94.5633 89.9015 93.852 91.9549 93.852C93.9935 93.852 95.4235 94.5633 96.2449 95.986C97.0662 97.394 97.4769 99.3593 97.4769 101.882C97.4769 104.449 97.0662 106.443 96.2449 107.866C95.4235 109.289 93.9935 110 91.9549 110C89.9015 110 88.4642 109.289 87.6429 107.866C86.8215 106.443 86.4109 104.449 86.4109 101.882ZM95.4969 101.882C95.4969 100.606 95.4089 99.528 95.2329 98.648C95.0715 97.7533 94.7269 97.0347 94.1989 96.492C93.6855 95.9493 92.9375 95.678 91.9549 95.678C90.9575 95.678 90.1949 95.9493 89.6669 96.492C89.1535 97.0347 88.8089 97.7533 88.6329 98.648C88.4715 99.528 88.3909 100.606 88.3909 101.882C88.3909 103.202 88.4715 104.309 88.6329 105.204C88.8089 106.099 89.1535 106.817 89.6669 107.36C90.1949 107.903 90.9575 108.174 91.9549 108.174C92.9375 108.174 93.6855 107.903 94.1989 107.36C94.7269 106.817 95.0715 106.099 95.2329 105.204C95.4089 104.309 95.4969 103.202 95.4969 101.882ZM99.7853 97.68C99.7853 96.6827 100.086 95.8907 100.687 95.304C101.289 94.7027 102.059 94.402 102.997 94.402C103.936 94.402 104.706 94.7027 105.307 95.304C105.909 95.8907 106.209 96.6827 106.209 97.68C106.209 98.692 105.909 99.4987 105.307 100.1C104.706 100.687 103.936 100.98 102.997 100.98C102.059 100.98 101.289 100.687 100.687 100.1C100.086 99.4987 99.7853 98.692 99.7853 97.68ZM112.633 94.644L103.723 110H101.743L110.653 94.644H112.633ZM102.997 95.634C102.499 95.634 102.103 95.81 101.809 96.162C101.531 96.4993 101.391 97.0053 101.391 97.68C101.391 98.3547 101.531 98.868 101.809 99.22C102.103 99.572 102.499 99.748 102.997 99.748C103.496 99.748 103.892 99.572 104.185 99.22C104.479 98.8533 104.625 98.34 104.625 97.68C104.625 97.0053 104.479 96.4993 104.185 96.162C103.892 95.81 103.496 95.634 102.997 95.634ZM108.211 106.964C108.211 105.952 108.512 105.153 109.113 104.566C109.715 103.965 110.485 103.664 111.423 103.664C112.362 103.664 113.125 103.965 113.711 104.566C114.313 105.153 114.613 105.952 114.613 106.964C114.613 107.961 114.313 108.761 113.711 109.362C113.125 109.963 112.362 110.264 111.423 110.264C110.485 110.264 109.715 109.971 109.113 109.384C108.512 108.783 108.211 107.976 108.211 106.964ZM111.401 104.918C110.903 104.918 110.507 105.094 110.213 105.446C109.92 105.783 109.773 106.289 109.773 106.964C109.773 107.624 109.92 108.13 110.213 108.482C110.507 108.819 110.903 108.988 111.401 108.988C111.9 108.988 112.296 108.819 112.589 108.482C112.883 108.13 113.029 107.624 113.029 106.964C113.029 106.289 112.883 105.783 112.589 105.446C112.296 105.094 111.9 104.918 111.401 104.918Z" fill="white" />
                    <path d="M52.836 212.92V211.094H56.972V227H54.948V212.92H52.836ZM60.4109 218.882C60.4109 216.359 60.8215 214.394 61.6429 212.986C62.4642 211.563 63.9015 210.852 65.9549 210.852C67.9935 210.852 69.4235 211.563 70.2449 212.986C71.0662 214.394 71.4769 216.359 71.4769 218.882C71.4769 221.449 71.0662 223.443 70.2449 224.866C69.4235 226.289 67.9935 227 65.9549 227C63.9015 227 62.4642 226.289 61.6429 224.866C60.8215 223.443 60.4109 221.449 60.4109 218.882ZM69.4969 218.882C69.4969 217.606 69.4089 216.528 69.2329 215.648C69.0715 214.753 68.7269 214.035 68.1989 213.492C67.6855 212.949 66.9375 212.678 65.9549 212.678C64.9575 212.678 64.1949 212.949 63.6669 213.492C63.1535 214.035 62.8089 214.753 62.6329 215.648C62.4715 216.528 62.3909 217.606 62.3909 218.882C62.3909 220.202 62.4715 221.309 62.6329 222.204C62.8089 223.099 63.1535 223.817 63.6669 224.36C64.1949 224.903 64.9575 225.174 65.9549 225.174C66.9375 225.174 67.6855 224.903 68.1989 224.36C68.7269 223.817 69.0715 223.099 69.2329 222.204C69.4089 221.309 69.4969 220.202 69.4969 218.882ZM73.7853 214.68C73.7853 213.683 74.086 212.891 74.6873 212.304C75.2887 211.703 76.0587 211.402 76.9973 211.402C77.936 211.402 78.706 211.703 79.3073 212.304C79.9087 212.891 80.2093 213.683 80.2093 214.68C80.2093 215.692 79.9087 216.499 79.3073 217.1C78.706 217.687 77.936 217.98 76.9973 217.98C76.0587 217.98 75.2887 217.687 74.6873 217.1C74.086 216.499 73.7853 215.692 73.7853 214.68ZM86.6333 211.644L77.7233 227H75.7433L84.6533 211.644H86.6333ZM76.9973 212.634C76.4987 212.634 76.1027 212.81 75.8093 213.162C75.5307 213.499 75.3913 214.005 75.3913 214.68C75.3913 215.355 75.5307 215.868 75.8093 216.22C76.1027 216.572 76.4987 216.748 76.9973 216.748C77.496 216.748 77.892 216.572 78.1853 216.22C78.4787 215.853 78.6253 215.34 78.6253 214.68C78.6253 214.005 78.4787 213.499 78.1853 213.162C77.892 212.81 77.496 212.634 76.9973 212.634ZM82.2113 223.964C82.2113 222.952 82.512 222.153 83.1133 221.566C83.7147 220.965 84.4847 220.664 85.4233 220.664C86.362 220.664 87.1247 220.965 87.7113 221.566C88.3127 222.153 88.6133 222.952 88.6133 223.964C88.6133 224.961 88.3127 225.761 87.7113 226.362C87.1247 226.963 86.362 227.264 85.4233 227.264C84.4847 227.264 83.7147 226.971 83.1133 226.384C82.512 225.783 82.2113 224.976 82.2113 223.964ZM85.4013 221.918C84.9027 221.918 84.5067 222.094 84.2133 222.446C83.92 222.783 83.7733 223.289 83.7733 223.964C83.7733 224.624 83.92 225.13 84.2133 225.482C84.5067 225.819 84.9027 225.988 85.4013 225.988C85.9 225.988 86.296 225.819 86.5893 225.482C86.8827 225.13 87.0293 224.624 87.0293 223.964C87.0293 223.289 86.8827 222.783 86.5893 222.446C86.296 222.094 85.9 221.918 85.4013 221.918Z" fill="white" />
                    <path d="M52.836 347.92V346.094H56.972V362H54.948V347.92H52.836ZM60.4109 353.882C60.4109 351.359 60.8215 349.394 61.6429 347.986C62.4642 346.563 63.9015 345.852 65.9549 345.852C67.9935 345.852 69.4235 346.563 70.2449 347.986C71.0662 349.394 71.4769 351.359 71.4769 353.882C71.4769 356.449 71.0662 358.443 70.2449 359.866C69.4235 361.289 67.9935 362 65.9549 362C63.9015 362 62.4642 361.289 61.6429 359.866C60.8215 358.443 60.4109 356.449 60.4109 353.882ZM69.4969 353.882C69.4969 352.606 69.4089 351.528 69.2329 350.648C69.0715 349.753 68.7269 349.035 68.1989 348.492C67.6855 347.949 66.9375 347.678 65.9549 347.678C64.9575 347.678 64.1949 347.949 63.6669 348.492C63.1535 349.035 62.8089 349.753 62.6329 350.648C62.4715 351.528 62.3909 352.606 62.3909 353.882C62.3909 355.202 62.4715 356.309 62.6329 357.204C62.8089 358.099 63.1535 358.817 63.6669 359.36C64.1949 359.903 64.9575 360.174 65.9549 360.174C66.9375 360.174 67.6855 359.903 68.1989 359.36C68.7269 358.817 69.0715 358.099 69.2329 357.204C69.4089 356.309 69.4969 355.202 69.4969 353.882ZM73.7853 349.68C73.7853 348.683 74.086 347.891 74.6873 347.304C75.2887 346.703 76.0587 346.402 76.9973 346.402C77.936 346.402 78.706 346.703 79.3073 347.304C79.9087 347.891 80.2093 348.683 80.2093 349.68C80.2093 350.692 79.9087 351.499 79.3073 352.1C78.706 352.687 77.936 352.98 76.9973 352.98C76.0587 352.98 75.2887 352.687 74.6873 352.1C74.086 351.499 73.7853 350.692 73.7853 349.68ZM86.6333 346.644L77.7233 362H75.7433L84.6533 346.644H86.6333ZM76.9973 347.634C76.4987 347.634 76.1027 347.81 75.8093 348.162C75.5307 348.499 75.3913 349.005 75.3913 349.68C75.3913 350.355 75.5307 350.868 75.8093 351.22C76.1027 351.572 76.4987 351.748 76.9973 351.748C77.496 351.748 77.892 351.572 78.1853 351.22C78.4787 350.853 78.6253 350.34 78.6253 349.68C78.6253 349.005 78.4787 348.499 78.1853 348.162C77.892 347.81 77.496 347.634 76.9973 347.634ZM82.2113 358.964C82.2113 357.952 82.512 357.153 83.1133 356.566C83.7147 355.965 84.4847 355.664 85.4233 355.664C86.362 355.664 87.1247 355.965 87.7113 356.566C88.3127 357.153 88.6133 357.952 88.6133 358.964C88.6133 359.961 88.3127 360.761 87.7113 361.362C87.1247 361.963 86.362 362.264 85.4233 362.264C84.4847 362.264 83.7147 361.971 83.1133 361.384C82.512 360.783 82.2113 359.976 82.2113 358.964ZM85.4013 356.918C84.9027 356.918 84.5067 357.094 84.2133 357.446C83.92 357.783 83.7733 358.289 83.7733 358.964C83.7733 359.624 83.92 360.13 84.2133 360.482C84.5067 360.819 84.9027 360.988 85.4013 360.988C85.9 360.988 86.296 360.819 86.5893 360.482C86.8827 360.13 87.0293 359.624 87.0293 358.964C87.0293 358.289 86.8827 357.783 86.5893 357.446C86.296 357.094 85.9 356.918 85.4013 356.918Z" fill="#7E8282" />
                    <path d="M171.836 412.92V411.094H175.972V427H173.948V412.92H171.836ZM179.411 418.882C179.411 416.359 179.822 414.394 180.643 412.986C181.464 411.563 182.902 410.852 184.955 410.852C186.994 410.852 188.424 411.563 189.245 412.986C190.066 414.394 190.477 416.359 190.477 418.882C190.477 421.449 190.066 423.443 189.245 424.866C188.424 426.289 186.994 427 184.955 427C182.902 427 181.464 426.289 180.643 424.866C179.822 423.443 179.411 421.449 179.411 418.882ZM188.497 418.882C188.497 417.606 188.409 416.528 188.233 415.648C188.072 414.753 187.727 414.035 187.199 413.492C186.686 412.949 185.938 412.678 184.955 412.678C183.958 412.678 183.195 412.949 182.667 413.492C182.154 414.035 181.809 414.753 181.633 415.648C181.472 416.528 181.391 417.606 181.391 418.882C181.391 420.202 181.472 421.309 181.633 422.204C181.809 423.099 182.154 423.817 182.667 424.36C183.195 424.903 183.958 425.174 184.955 425.174C185.938 425.174 186.686 424.903 187.199 424.36C187.727 423.817 188.072 423.099 188.233 422.204C188.409 421.309 188.497 420.202 188.497 418.882ZM192.785 414.68C192.785 413.683 193.086 412.891 193.687 412.304C194.289 411.703 195.059 411.402 195.997 411.402C196.936 411.402 197.706 411.703 198.307 412.304C198.909 412.891 199.209 413.683 199.209 414.68C199.209 415.692 198.909 416.499 198.307 417.1C197.706 417.687 196.936 417.98 195.997 417.98C195.059 417.98 194.289 417.687 193.687 417.1C193.086 416.499 192.785 415.692 192.785 414.68ZM205.633 411.644L196.723 427H194.743L203.653 411.644H205.633ZM195.997 412.634C195.499 412.634 195.103 412.81 194.809 413.162C194.531 413.499 194.391 414.005 194.391 414.68C194.391 415.355 194.531 415.868 194.809 416.22C195.103 416.572 195.499 416.748 195.997 416.748C196.496 416.748 196.892 416.572 197.185 416.22C197.479 415.853 197.625 415.34 197.625 414.68C197.625 414.005 197.479 413.499 197.185 413.162C196.892 412.81 196.496 412.634 195.997 412.634ZM201.211 423.964C201.211 422.952 201.512 422.153 202.113 421.566C202.715 420.965 203.485 420.664 204.423 420.664C205.362 420.664 206.125 420.965 206.711 421.566C207.313 422.153 207.613 422.952 207.613 423.964C207.613 424.961 207.313 425.761 206.711 426.362C206.125 426.963 205.362 427.264 204.423 427.264C203.485 427.264 202.715 426.971 202.113 426.384C201.512 425.783 201.211 424.976 201.211 423.964ZM204.401 421.918C203.903 421.918 203.507 422.094 203.213 422.446C202.92 422.783 202.773 423.289 202.773 423.964C202.773 424.624 202.92 425.13 203.213 425.482C203.507 425.819 203.903 425.988 204.401 425.988C204.9 425.988 205.296 425.819 205.589 425.482C205.883 425.13 206.029 424.624 206.029 423.964C206.029 423.289 205.883 422.783 205.589 422.446C205.296 422.094 204.9 421.918 204.401 421.918Z" fill="white" />
                    <path d="M334.506 84.832H326.784V89.848C327.121 89.3787 327.62 88.9973 328.28 88.704C328.94 88.396 329.651 88.242 330.414 88.242C331.631 88.242 332.621 88.4987 333.384 89.012C334.147 89.5107 334.689 90.1633 335.012 90.97C335.349 91.762 335.518 92.6053 335.518 93.5C335.518 94.556 335.32 95.502 334.924 96.338C334.528 97.174 333.919 97.834 333.098 98.318C332.291 98.802 331.287 99.044 330.084 99.044C328.544 99.044 327.297 98.648 326.344 97.856C325.391 97.064 324.811 96.008 324.606 94.688H326.564C326.755 95.524 327.158 96.1767 327.774 96.646C328.39 97.1153 329.167 97.35 330.106 97.35C331.265 97.35 332.137 97.0053 332.724 96.316C333.311 95.612 333.604 94.688 333.604 93.544C333.604 92.4 333.311 91.52 332.724 90.904C332.137 90.2733 331.272 89.958 330.128 89.958C329.351 89.958 328.669 90.1487 328.082 90.53C327.51 90.8967 327.092 91.4027 326.828 92.048H324.936V83.072H334.506V84.832ZM338.178 90.882C338.178 88.3593 338.589 86.394 339.41 84.986C340.232 83.5633 341.669 82.852 343.722 82.852C345.761 82.852 347.191 83.5633 348.012 84.986C348.834 86.394 349.244 88.3593 349.244 90.882C349.244 93.4487 348.834 95.4433 348.012 96.866C347.191 98.2887 345.761 99 343.722 99C341.669 99 340.232 98.2887 339.41 96.866C338.589 95.4433 338.178 93.4487 338.178 90.882ZM347.264 90.882C347.264 89.606 347.176 88.528 347 87.648C346.839 86.7533 346.494 86.0347 345.966 85.492C345.453 84.9493 344.705 84.678 343.722 84.678C342.725 84.678 341.962 84.9493 341.434 85.492C340.921 86.0347 340.576 86.7533 340.4 87.648C340.239 88.528 340.158 89.606 340.158 90.882C340.158 92.202 340.239 93.3093 340.4 94.204C340.576 95.0987 340.921 95.8173 341.434 96.36C341.962 96.9027 342.725 97.174 343.722 97.174C344.705 97.174 345.453 96.9027 345.966 96.36C346.494 95.8173 346.839 95.0987 347 94.204C347.176 93.3093 347.264 92.202 347.264 90.882ZM351.553 86.68C351.553 85.6827 351.854 84.8907 352.455 84.304C353.056 83.7027 353.826 83.402 354.765 83.402C355.704 83.402 356.474 83.7027 357.075 84.304C357.676 84.8907 357.977 85.6827 357.977 86.68C357.977 87.692 357.676 88.4987 357.075 89.1C356.474 89.6867 355.704 89.98 354.765 89.98C353.826 89.98 353.056 89.6867 352.455 89.1C351.854 88.4987 351.553 87.692 351.553 86.68ZM364.401 83.644L355.491 99H353.511L362.421 83.644H364.401ZM354.765 84.634C354.266 84.634 353.87 84.81 353.577 85.162C353.298 85.4993 353.159 86.0053 353.159 86.68C353.159 87.3547 353.298 87.868 353.577 88.22C353.87 88.572 354.266 88.748 354.765 88.748C355.264 88.748 355.66 88.572 355.953 88.22C356.246 87.8533 356.393 87.34 356.393 86.68C356.393 86.0053 356.246 85.4993 355.953 85.162C355.66 84.81 355.264 84.634 354.765 84.634ZM359.979 95.964C359.979 94.952 360.28 94.1527 360.881 93.566C361.482 92.9647 362.252 92.664 363.191 92.664C364.13 92.664 364.892 92.9647 365.479 93.566C366.08 94.1527 366.381 94.952 366.381 95.964C366.381 96.9613 366.08 97.7607 365.479 98.362C364.892 98.9633 364.13 99.264 363.191 99.264C362.252 99.264 361.482 98.9707 360.881 98.384C360.28 97.7827 359.979 96.976 359.979 95.964ZM363.169 93.918C362.67 93.918 362.274 94.094 361.981 94.446C361.688 94.7833 361.541 95.2893 361.541 95.964C361.541 96.624 361.688 97.13 361.981 97.482C362.274 97.8193 362.67 97.988 363.169 97.988C363.668 97.988 364.064 97.8193 364.357 97.482C364.65 97.13 364.797 96.624 364.797 95.964C364.797 95.2893 364.65 94.7833 364.357 94.446C364.064 94.094 363.668 93.918 363.169 93.918Z" fill="white" />
                    <path d="M171.86 91.02C171.86 89.66 172.167 88.44 172.78 87.36C173.393 86.2667 174.227 85.4133 175.28 84.8C176.347 84.1867 177.527 83.88 178.82 83.88C180.34 83.88 181.667 84.2467 182.8 84.98C183.933 85.7133 184.76 86.7533 185.28 88.1H183.1C182.713 87.26 182.153 86.6133 181.42 86.16C180.7 85.7067 179.833 85.48 178.82 85.48C177.847 85.48 176.973 85.7067 176.2 86.16C175.427 86.6133 174.82 87.26 174.38 88.1C173.94 88.9267 173.72 89.9 173.72 91.02C173.72 92.1267 173.94 93.1 174.38 93.94C174.82 94.7667 175.427 95.4067 176.2 95.86C176.973 96.3133 177.847 96.54 178.82 96.54C179.833 96.54 180.7 96.32 181.42 95.88C182.153 95.4267 182.713 94.78 183.1 93.94H185.28C184.76 95.2733 183.933 96.3067 182.8 97.04C181.667 97.76 180.34 98.12 178.82 98.12C177.527 98.12 176.347 97.82 175.28 97.22C174.227 96.6067 173.393 95.76 172.78 94.68C172.167 93.6 171.86 92.38 171.86 91.02ZM189.809 85.54V90.2H194.889V91.7H189.809V96.5H195.489V98H187.989V84.04H195.489V85.54H189.809ZM203.943 91.04L208.223 98H206.163L202.823 92.56L199.643 98H197.623L201.883 91.04L197.603 84.06H199.643L203.003 89.52L206.203 84.06H208.243L203.943 91.04ZM214.545 98.18C213.705 98.18 212.952 98.04 212.285 97.76C211.618 97.4667 211.092 97.0667 210.705 96.56C210.318 96.04 210.105 95.4467 210.065 94.78H211.945C211.998 95.3267 212.252 95.7733 212.705 96.12C213.172 96.4667 213.778 96.64 214.525 96.64C215.218 96.64 215.765 96.4867 216.165 96.18C216.565 95.8733 216.765 95.4867 216.765 95.02C216.765 94.54 216.552 94.1867 216.125 93.96C215.698 93.72 215.038 93.4867 214.145 93.26C213.332 93.0467 212.665 92.8333 212.145 92.62C211.638 92.3933 211.198 92.0667 210.825 91.64C210.465 91.2 210.285 90.6267 210.285 89.92C210.285 89.36 210.452 88.8467 210.785 88.38C211.118 87.9133 211.592 87.5467 212.205 87.28C212.818 87 213.518 86.86 214.305 86.86C215.518 86.86 216.498 87.1667 217.245 87.78C217.992 88.3933 218.392 89.2333 218.445 90.3H216.625C216.585 89.7267 216.352 89.2667 215.925 88.92C215.512 88.5733 214.952 88.4 214.245 88.4C213.592 88.4 213.072 88.54 212.685 88.82C212.298 89.1 212.105 89.4667 212.105 89.92C212.105 90.28 212.218 90.58 212.445 90.82C212.685 91.0467 212.978 91.2333 213.325 91.38C213.685 91.5133 214.178 91.6667 214.805 91.84C215.592 92.0533 216.232 92.2667 216.725 92.48C217.218 92.68 217.638 92.9867 217.985 93.4C218.345 93.8133 218.532 94.3533 218.545 95.02C218.545 95.62 218.378 96.16 218.045 96.64C217.712 97.12 217.238 97.5 216.625 97.78C216.025 98.0467 215.332 98.18 214.545 98.18Z" fill="white" />
                    <path d="M74.12 132.06V133.54H70.32V146H68.5V133.54H64.68V132.06H74.12ZM78.1803 136.82C78.5003 136.193 78.9536 135.707 79.5403 135.36C80.1403 135.013 80.867 134.84 81.7203 134.84V136.72H81.2403C79.2003 136.72 78.1803 137.827 78.1803 140.04V146H76.3603V135.04H78.1803V136.82ZM93.8213 140.1C93.8213 140.447 93.8013 140.813 93.7613 141.2H85.0013C85.0679 142.28 85.4346 143.127 86.1013 143.74C86.7813 144.34 87.6013 144.64 88.5613 144.64C89.3479 144.64 90.0013 144.46 90.5213 144.1C91.0546 143.727 91.4279 143.233 91.6413 142.62H93.6013C93.3079 143.673 92.7213 144.533 91.8413 145.2C90.9613 145.853 89.8679 146.18 88.5613 146.18C87.5213 146.18 86.5879 145.947 85.7613 145.48C84.9479 145.013 84.3079 144.353 83.8413 143.5C83.3746 142.633 83.1413 141.633 83.1413 140.5C83.1413 139.367 83.3679 138.373 83.8213 137.52C84.2746 136.667 84.9079 136.013 85.7213 135.56C86.5479 135.093 87.4946 134.86 88.5613 134.86C89.6013 134.86 90.5213 135.087 91.3213 135.54C92.1213 135.993 92.7346 136.62 93.1613 137.42C93.6013 138.207 93.8213 139.1 93.8213 140.1ZM91.9413 139.72C91.9413 139.027 91.7879 138.433 91.4813 137.94C91.1746 137.433 90.7546 137.053 90.2213 136.8C89.7013 136.533 89.1213 136.4 88.4813 136.4C87.5613 136.4 86.7746 136.693 86.1213 137.28C85.4813 137.867 85.1146 138.68 85.0213 139.72H91.9413ZM95.5436 140.48C95.5436 139.36 95.7703 138.38 96.2236 137.54C96.6769 136.687 97.2969 136.027 98.0836 135.56C98.8836 135.093 99.7703 134.86 100.744 134.86C101.704 134.86 102.537 135.067 103.244 135.48C103.95 135.893 104.477 136.413 104.824 137.04V135.04H106.664V146H104.824V143.96C104.464 144.6 103.924 145.133 103.204 145.56C102.497 145.973 101.67 146.18 100.724 146.18C99.7503 146.18 98.8703 145.94 98.0836 145.46C97.2969 144.98 96.6769 144.307 96.2236 143.44C95.7703 142.573 95.5436 141.587 95.5436 140.48ZM104.824 140.5C104.824 139.673 104.657 138.953 104.324 138.34C103.99 137.727 103.537 137.26 102.964 136.94C102.404 136.607 101.784 136.44 101.104 136.44C100.424 136.44 99.8036 136.6 99.2436 136.92C98.6836 137.24 98.2369 137.707 97.9036 138.32C97.5703 138.933 97.4036 139.653 97.4036 140.48C97.4036 141.32 97.5703 142.053 97.9036 142.68C98.2369 143.293 98.6836 143.767 99.2436 144.1C99.8036 144.42 100.424 144.58 101.104 144.58C101.784 144.58 102.404 144.42 102.964 144.1C103.537 143.767 103.99 143.293 104.324 142.68C104.657 142.053 104.824 141.327 104.824 140.5ZM113.619 146.18C112.779 146.18 112.026 146.04 111.359 145.76C110.693 145.467 110.166 145.067 109.779 144.56C109.393 144.04 109.179 143.447 109.139 142.78H111.019C111.073 143.327 111.326 143.773 111.779 144.12C112.246 144.467 112.853 144.64 113.599 144.64C114.293 144.64 114.839 144.487 115.239 144.18C115.639 143.873 115.839 143.487 115.839 143.02C115.839 142.54 115.626 142.187 115.199 141.96C114.773 141.72 114.113 141.487 113.219 141.26C112.406 141.047 111.739 140.833 111.219 140.62C110.713 140.393 110.273 140.067 109.899 139.64C109.539 139.2 109.359 138.627 109.359 137.92C109.359 137.36 109.526 136.847 109.859 136.38C110.193 135.913 110.666 135.547 111.279 135.28C111.893 135 112.593 134.86 113.379 134.86C114.593 134.86 115.573 135.167 116.319 135.78C117.066 136.393 117.466 137.233 117.519 138.3H115.699C115.659 137.727 115.426 137.267 114.999 136.92C114.586 136.573 114.026 136.4 113.319 136.4C112.666 136.4 112.146 136.54 111.759 136.82C111.373 137.1 111.179 137.467 111.179 137.92C111.179 138.28 111.293 138.58 111.519 138.82C111.759 139.047 112.053 139.233 112.399 139.38C112.759 139.513 113.253 139.667 113.879 139.84C114.666 140.053 115.306 140.267 115.799 140.48C116.293 140.68 116.713 140.987 117.059 141.4C117.419 141.813 117.606 142.353 117.619 143.02C117.619 143.62 117.453 144.16 117.119 144.64C116.786 145.12 116.313 145.5 115.699 145.78C115.099 146.047 114.406 146.18 113.619 146.18ZM129.908 135.04V146H128.088V144.38C127.742 144.94 127.255 145.38 126.628 145.7C126.015 146.007 125.335 146.16 124.588 146.16C123.735 146.16 122.968 145.987 122.288 145.64C121.608 145.28 121.068 144.747 120.668 144.04C120.282 143.333 120.088 142.473 120.088 141.46V135.04H121.888V141.22C121.888 142.3 122.162 143.133 122.708 143.72C123.255 144.293 124.002 144.58 124.948 144.58C125.922 144.58 126.688 144.28 127.248 143.68C127.808 143.08 128.088 142.207 128.088 141.06V135.04H129.908ZM134.801 136.82C135.121 136.193 135.575 135.707 136.161 135.36C136.761 135.013 137.488 134.84 138.341 134.84V136.72H137.861C135.821 136.72 134.801 137.827 134.801 140.04V146H132.981V135.04H134.801V136.82ZM149.882 135.04L143.282 151.16H141.402L143.562 145.88L139.142 135.04H141.162L144.602 143.92L148.002 135.04H149.882Z" fill="white" />
                    <path d="M56.68 246.16V260H54.86V249.68L50.26 260H48.98L44.36 249.66V260H42.54V246.16H44.5L49.62 257.6L54.74 246.16H56.68ZM59.0866 254.48C59.0866 253.36 59.3132 252.38 59.7666 251.54C60.2199 250.687 60.8399 250.027 61.6266 249.56C62.4266 249.093 63.3132 248.86 64.2866 248.86C65.2466 248.86 66.0799 249.067 66.7866 249.48C67.4932 249.893 68.0199 250.413 68.3666 251.04V249.04H70.2066V260H68.3666V257.96C68.0066 258.6 67.4666 259.133 66.7466 259.56C66.0399 259.973 65.2132 260.18 64.2666 260.18C63.2932 260.18 62.4132 259.94 61.6266 259.46C60.8399 258.98 60.2199 258.307 59.7666 257.44C59.3132 256.573 59.0866 255.587 59.0866 254.48ZM68.3666 254.5C68.3666 253.673 68.1999 252.953 67.8666 252.34C67.5332 251.727 67.0799 251.26 66.5066 250.94C65.9466 250.607 65.3266 250.44 64.6466 250.44C63.9666 250.44 63.3466 250.6 62.7866 250.92C62.2266 251.24 61.7799 251.707 61.4466 252.32C61.1132 252.933 60.9466 253.653 60.9466 254.48C60.9466 255.32 61.1132 256.053 61.4466 256.68C61.7799 257.293 62.2266 257.767 62.7866 258.1C63.3466 258.42 63.9666 258.58 64.6466 258.58C65.3266 258.58 65.9466 258.42 66.5066 258.1C67.0799 257.767 67.5332 257.293 67.8666 256.68C68.1999 256.053 68.3666 255.327 68.3666 254.5ZM75.1022 250.82C75.4222 250.193 75.8755 249.707 76.4622 249.36C77.0622 249.013 77.7889 248.84 78.6422 248.84V250.72H78.1622C76.1222 250.72 75.1022 251.827 75.1022 254.04V260H73.2822V249.04H75.1022V250.82ZM86.8631 260L82.5631 255.16V260H80.7431V245.2H82.5631V253.9L86.7831 249.04H89.3231L84.1631 254.5L89.3431 260H86.8631ZM101.036 254.1C101.036 254.447 101.016 254.813 100.976 255.2H92.2161C92.2828 256.28 92.6494 257.127 93.3161 257.74C93.9961 258.34 94.8161 258.64 95.7761 258.64C96.5628 258.64 97.2161 258.46 97.7361 258.1C98.2694 257.727 98.6428 257.233 98.8561 256.62H100.816C100.523 257.673 99.9361 258.533 99.0561 259.2C98.1761 259.853 97.0828 260.18 95.7761 260.18C94.7361 260.18 93.8028 259.947 92.9761 259.48C92.1628 259.013 91.5228 258.353 91.0561 257.5C90.5894 256.633 90.3561 255.633 90.3561 254.5C90.3561 253.367 90.5828 252.373 91.0361 251.52C91.4894 250.667 92.1228 250.013 92.9361 249.56C93.7628 249.093 94.7094 248.86 95.7761 248.86C96.8161 248.86 97.7361 249.087 98.5361 249.54C99.3361 249.993 99.9494 250.62 100.376 251.42C100.816 252.207 101.036 253.1 101.036 254.1ZM99.1561 253.72C99.1561 253.027 99.0028 252.433 98.6961 251.94C98.3894 251.433 97.9694 251.053 97.4361 250.8C96.9161 250.533 96.3361 250.4 95.6961 250.4C94.7761 250.4 93.9894 250.693 93.3361 251.28C92.6961 251.867 92.3294 252.68 92.2361 253.72H99.1561ZM105.658 250.54V257C105.658 257.533 105.772 257.913 105.998 258.14C106.225 258.353 106.618 258.46 107.178 258.46H108.518V260H106.878C105.865 260 105.105 259.767 104.598 259.3C104.092 258.833 103.838 258.067 103.838 257V250.54H102.418V249.04H103.838V246.28H105.658V249.04H108.518V250.54H105.658ZM111.664 247.26C111.317 247.26 111.024 247.14 110.784 246.9C110.544 246.66 110.424 246.367 110.424 246.02C110.424 245.673 110.544 245.38 110.784 245.14C111.024 244.9 111.317 244.78 111.664 244.78C111.997 244.78 112.277 244.9 112.504 245.14C112.744 245.38 112.864 245.673 112.864 246.02C112.864 246.367 112.744 246.66 112.504 246.9C112.277 247.14 111.997 247.26 111.664 247.26ZM112.544 249.04V260H110.724V249.04H112.544ZM120.985 248.84C122.319 248.84 123.399 249.247 124.225 250.06C125.052 250.86 125.465 252.02 125.465 253.54V260H123.665V253.8C123.665 252.707 123.392 251.873 122.845 251.3C122.299 250.713 121.552 250.42 120.605 250.42C119.645 250.42 118.879 250.72 118.305 251.32C117.745 251.92 117.465 252.793 117.465 253.94V260H115.645V249.04H117.465V250.6C117.825 250.04 118.312 249.607 118.925 249.3C119.552 248.993 120.239 248.84 120.985 248.84ZM132.958 248.86C133.905 248.86 134.732 249.067 135.438 249.48C136.158 249.893 136.692 250.413 137.038 251.04V249.04H138.878V260.24C138.878 261.24 138.665 262.127 138.238 262.9C137.812 263.687 137.198 264.3 136.398 264.74C135.612 265.18 134.692 265.4 133.638 265.4C132.198 265.4 130.998 265.06 130.038 264.38C129.078 263.7 128.512 262.773 128.338 261.6H130.138C130.338 262.267 130.752 262.8 131.378 263.2C132.005 263.613 132.758 263.82 133.638 263.82C134.638 263.82 135.452 263.507 136.078 262.88C136.718 262.253 137.038 261.373 137.038 260.24V257.94C136.678 258.58 136.145 259.113 135.438 259.54C134.732 259.967 133.905 260.18 132.958 260.18C131.985 260.18 131.098 259.94 130.298 259.46C129.512 258.98 128.892 258.307 128.438 257.44C127.985 256.573 127.758 255.587 127.758 254.48C127.758 253.36 127.985 252.38 128.438 251.54C128.892 250.687 129.512 250.027 130.298 249.56C131.098 249.093 131.985 248.86 132.958 248.86ZM137.038 254.5C137.038 253.673 136.872 252.953 136.538 252.34C136.205 251.727 135.752 251.26 135.178 250.94C134.618 250.607 133.998 250.44 133.318 250.44C132.638 250.44 132.018 250.6 131.458 250.92C130.898 251.24 130.452 251.707 130.118 252.32C129.785 252.933 129.618 253.653 129.618 254.48C129.618 255.32 129.785 256.053 130.118 256.68C130.452 257.293 130.898 257.767 131.458 258.1C132.018 258.42 132.638 258.58 133.318 258.58C133.998 258.58 134.618 258.42 135.178 258.1C135.752 257.767 136.205 257.293 136.538 256.68C136.872 256.053 137.038 255.327 137.038 254.5Z" fill="white" />
                    <path d="M59.86 385.02C59.86 383.66 60.1667 382.44 60.78 381.36C61.3933 380.267 62.2267 379.413 63.28 378.8C64.3467 378.187 65.5267 377.88 66.82 377.88C68.34 377.88 69.6667 378.247 70.8 378.98C71.9333 379.713 72.76 380.753 73.28 382.1H71.1C70.7133 381.26 70.1533 380.613 69.42 380.16C68.7 379.707 67.8333 379.48 66.82 379.48C65.8467 379.48 64.9733 379.707 64.2 380.16C63.4267 380.613 62.82 381.26 62.38 382.1C61.94 382.927 61.72 383.9 61.72 385.02C61.72 386.127 61.94 387.1 62.38 387.94C62.82 388.767 63.4267 389.407 64.2 389.86C64.9733 390.313 65.8467 390.54 66.82 390.54C67.8333 390.54 68.7 390.32 69.42 389.88C70.1533 389.427 70.7133 388.78 71.1 387.94H73.28C72.76 389.273 71.9333 390.307 70.8 391.04C69.6667 391.76 68.34 392.12 66.82 392.12C65.5267 392.12 64.3467 391.82 63.28 391.22C62.2267 390.607 61.3933 389.76 60.78 388.68C60.1667 387.6 59.86 386.38 59.86 385.02ZM81.4292 380.84C82.2559 380.84 83.0026 381.02 83.6692 381.38C84.3359 381.727 84.8559 382.253 85.2292 382.96C85.6159 383.667 85.8092 384.527 85.8092 385.54V392H84.0092V385.8C84.0092 384.707 83.7359 383.873 83.1892 383.3C82.6426 382.713 81.8959 382.42 80.9492 382.42C79.9892 382.42 79.2226 382.72 78.6492 383.32C78.0892 383.92 77.8092 384.793 77.8092 385.94V392H75.9892V377.2H77.8092V382.6C78.1692 382.04 78.6626 381.607 79.2892 381.3C79.9292 380.993 80.6426 380.84 81.4292 380.84ZM88.1022 386.48C88.1022 385.36 88.3289 384.38 88.7822 383.54C89.2355 382.687 89.8555 382.027 90.6422 381.56C91.4422 381.093 92.3289 380.86 93.3022 380.86C94.2622 380.86 95.0955 381.067 95.8022 381.48C96.5089 381.893 97.0355 382.413 97.3822 383.04V381.04H99.2222V392H97.3822V389.96C97.0222 390.6 96.4822 391.133 95.7622 391.56C95.0555 391.973 94.2289 392.18 93.2822 392.18C92.3089 392.18 91.4289 391.94 90.6422 391.46C89.8555 390.98 89.2355 390.307 88.7822 389.44C88.3289 388.573 88.1022 387.587 88.1022 386.48ZM97.3822 386.5C97.3822 385.673 97.2155 384.953 96.8822 384.34C96.5489 383.727 96.0955 383.26 95.5222 382.94C94.9622 382.607 94.3422 382.44 93.6622 382.44C92.9822 382.44 92.3622 382.6 91.8022 382.92C91.2422 383.24 90.7955 383.707 90.4622 384.32C90.1289 384.933 89.9622 385.653 89.9622 386.48C89.9622 387.32 90.1289 388.053 90.4622 388.68C90.7955 389.293 91.2422 389.767 91.8022 390.1C92.3622 390.42 92.9822 390.58 93.6622 390.58C94.3422 390.58 94.9622 390.42 95.5222 390.1C96.0955 389.767 96.5489 389.293 96.8822 388.68C97.2155 388.053 97.3822 387.327 97.3822 386.5ZM104.118 382.82C104.438 382.193 104.891 381.707 105.478 381.36C106.078 381.013 106.804 380.84 107.658 380.84V382.72H107.178C105.138 382.72 104.118 383.827 104.118 386.04V392H102.298V381.04H104.118V382.82ZM110.699 379.26C110.352 379.26 110.059 379.14 109.819 378.9C109.579 378.66 109.459 378.367 109.459 378.02C109.459 377.673 109.579 377.38 109.819 377.14C110.059 376.9 110.352 376.78 110.699 376.78C111.032 376.78 111.312 376.9 111.539 377.14C111.779 377.38 111.899 377.673 111.899 378.02C111.899 378.367 111.779 378.66 111.539 378.9C111.312 379.14 111.032 379.26 110.699 379.26ZM111.579 381.04V392H109.759V381.04H111.579ZM116.901 382.54V389C116.901 389.533 117.014 389.913 117.241 390.14C117.467 390.353 117.861 390.46 118.421 390.46H119.761V392H118.121C117.107 392 116.347 391.767 115.841 391.3C115.334 390.833 115.081 390.067 115.081 389V382.54H113.661V381.04H115.081V378.28H116.901V381.04H119.761V382.54H116.901ZM131.406 381.04L124.806 397.16H122.926L125.086 391.88L120.666 381.04H122.686L126.126 389.92L129.526 381.04H131.406Z" fill="#7E8282" />
                    <path d="M194.88 442.06C196.4 442.06 197.713 442.347 198.82 442.92C199.94 443.48 200.793 444.287 201.38 445.34C201.98 446.393 202.28 447.633 202.28 449.06C202.28 450.487 201.98 451.727 201.38 452.78C200.793 453.82 199.94 454.62 198.82 455.18C197.713 455.727 196.4 456 194.88 456H190.54V442.06H194.88ZM194.88 454.5C196.68 454.5 198.053 454.027 199 453.08C199.947 452.12 200.42 450.78 200.42 449.06C200.42 447.327 199.94 445.973 198.98 445C198.033 444.027 196.667 443.54 194.88 443.54H192.36V454.5H194.88ZM214.681 450.1C214.681 450.447 214.661 450.813 214.621 451.2H205.861C205.927 452.28 206.294 453.127 206.961 453.74C207.641 454.34 208.461 454.64 209.421 454.64C210.207 454.64 210.861 454.46 211.381 454.1C211.914 453.727 212.287 453.233 212.501 452.62H214.461C214.167 453.673 213.581 454.533 212.701 455.2C211.821 455.853 210.727 456.18 209.421 456.18C208.381 456.18 207.447 455.947 206.621 455.48C205.807 455.013 205.167 454.353 204.701 453.5C204.234 452.633 204.001 451.633 204.001 450.5C204.001 449.367 204.227 448.373 204.681 447.52C205.134 446.667 205.767 446.013 206.581 445.56C207.407 445.093 208.354 444.86 209.421 444.86C210.461 444.86 211.381 445.087 212.181 445.54C212.981 445.993 213.594 446.62 214.021 447.42C214.461 448.207 214.681 449.1 214.681 450.1ZM212.801 449.72C212.801 449.027 212.647 448.433 212.341 447.94C212.034 447.433 211.614 447.053 211.081 446.8C210.561 446.533 209.981 446.4 209.341 446.4C208.421 446.4 207.634 446.693 206.981 447.28C206.341 447.867 205.974 448.68 205.881 449.72H212.801ZM221.163 454.32L224.563 445.04H226.503L222.203 456H220.083L215.783 445.04H217.743L221.163 454.32Z" fill="white" />
                    <path d="M334.468 117.666C336.14 117.666 337.585 117.981 338.802 118.612C340.034 119.228 340.973 120.115 341.618 121.274C342.278 122.433 342.608 123.797 342.608 125.366C342.608 126.935 342.278 128.299 341.618 129.458C340.973 130.602 340.034 131.482 338.802 132.098C337.585 132.699 336.14 133 334.468 133H329.694V117.666H334.468ZM334.468 131.35C336.448 131.35 337.959 130.829 339 129.788C340.041 128.732 340.562 127.258 340.562 125.366C340.562 123.459 340.034 121.971 338.978 120.9C337.937 119.829 336.433 119.294 334.468 119.294H331.696V131.35H334.468ZM347.251 119.294V124.42H352.839V126.07H347.251V131.35H353.499V133H345.249V117.644H353.499V119.294H347.251ZM362.798 125.344L367.506 133H365.24L361.566 127.016L358.068 133H355.846L360.532 125.344L355.824 117.666H358.068L361.764 123.672L365.284 117.666H367.528L362.798 125.344ZM374.46 133.198C373.536 133.198 372.707 133.044 371.974 132.736C371.241 132.413 370.661 131.973 370.236 131.416C369.811 130.844 369.576 130.191 369.532 129.458H371.6C371.659 130.059 371.937 130.551 372.436 130.932C372.949 131.313 373.617 131.504 374.438 131.504C375.201 131.504 375.802 131.335 376.242 130.998C376.682 130.661 376.902 130.235 376.902 129.722C376.902 129.194 376.667 128.805 376.198 128.556C375.729 128.292 375.003 128.035 374.02 127.786C373.125 127.551 372.392 127.317 371.82 127.082C371.263 126.833 370.779 126.473 370.368 126.004C369.972 125.52 369.774 124.889 369.774 124.112C369.774 123.496 369.957 122.931 370.324 122.418C370.691 121.905 371.211 121.501 371.886 121.208C372.561 120.9 373.331 120.746 374.196 120.746C375.531 120.746 376.609 121.083 377.43 121.758C378.251 122.433 378.691 123.357 378.75 124.53H376.748C376.704 123.899 376.447 123.393 375.978 123.012C375.523 122.631 374.907 122.44 374.13 122.44C373.411 122.44 372.839 122.594 372.414 122.902C371.989 123.21 371.776 123.613 371.776 124.112C371.776 124.508 371.901 124.838 372.15 125.102C372.414 125.351 372.737 125.557 373.118 125.718C373.514 125.865 374.057 126.033 374.746 126.224C375.611 126.459 376.315 126.693 376.858 126.928C377.401 127.148 377.863 127.485 378.244 127.94C378.64 128.395 378.845 128.989 378.86 129.722C378.86 130.382 378.677 130.976 378.31 131.504C377.943 132.032 377.423 132.45 376.748 132.758C376.088 133.051 375.325 133.198 374.46 133.198Z" fill="white" />
                    <path d="M217.728 239.432C218.624 239.592 219.384 240.064 220.008 240.848C220.632 241.632 220.944 242.52 220.944 243.512C220.944 244.36 220.72 245.128 220.272 245.816C219.84 246.488 219.208 247.024 218.376 247.424C217.544 247.808 216.576 248 215.472 248H208.8V231.32H215.16C216.296 231.32 217.272 231.512 218.088 231.896C218.904 232.28 219.52 232.8 219.936 233.456C220.352 234.096 220.56 234.816 220.56 235.616C220.56 236.576 220.304 237.376 219.792 238.016C219.28 238.656 218.592 239.128 217.728 239.432ZM211.536 238.328H214.92C215.816 238.328 216.512 238.128 217.008 237.728C217.52 237.312 217.776 236.72 217.776 235.952C217.776 235.2 217.52 234.616 217.008 234.2C216.512 233.768 215.816 233.552 214.92 233.552H211.536V238.328ZM215.232 245.768C216.16 245.768 216.888 245.544 217.416 245.096C217.944 244.648 218.208 244.024 218.208 243.224C218.208 242.408 217.928 241.76 217.368 241.28C216.808 240.8 216.064 240.56 215.136 240.56H211.536V245.768H215.232ZM235.581 236.288C235.581 237.136 235.381 237.936 234.981 238.688C234.581 239.44 233.941 240.056 233.061 240.536C232.181 241 231.053 241.232 229.677 241.232H226.653V248H223.917V231.32H229.677C230.957 231.32 232.037 231.544 232.917 231.992C233.813 232.424 234.477 233.016 234.909 233.768C235.357 234.52 235.581 235.36 235.581 236.288ZM229.677 239C230.717 239 231.493 238.768 232.005 238.304C232.517 237.824 232.773 237.152 232.773 236.288C232.773 234.464 231.741 233.552 229.677 233.552H226.653V239H229.677ZM251.895 248H249.159L240.927 235.544V248H238.191V231.296H240.927L249.159 243.728V231.296H251.895V248ZM266.264 231.32V233.552H261.824V248H259.088V233.552H254.624V231.32H266.264ZM282.354 231.32V248H279.618V240.704H271.77V248H269.034V231.32H271.77V238.472H279.618V231.32H282.354ZM294.62 248L290.78 241.328H288.692V248H285.956V231.32H291.716C292.996 231.32 294.076 231.544 294.956 231.992C295.852 232.44 296.516 233.04 296.948 233.792C297.396 234.544 297.62 235.384 297.62 236.312C297.62 237.4 297.3 238.392 296.66 239.288C296.036 240.168 295.068 240.768 293.756 241.088L297.884 248H294.62ZM288.692 239.144H291.716C292.74 239.144 293.508 238.888 294.02 238.376C294.548 237.864 294.812 237.176 294.812 236.312C294.812 235.448 294.556 234.776 294.044 234.296C293.532 233.8 292.756 233.552 291.716 233.552H288.692V239.144Z" fill="black" />
                    <path d="M210.384 262.88V264.368H207.424V274H205.6V264.368H202.624V262.88H210.384ZM217.303 274.112C216.269 274.112 215.314 273.872 214.439 273.392C213.575 272.901 212.887 272.224 212.375 271.36C211.874 270.485 211.623 269.504 211.623 268.416C211.623 267.328 211.874 266.352 212.375 265.488C212.887 264.624 213.575 263.952 214.439 263.472C215.314 262.981 216.269 262.736 217.303 262.736C218.349 262.736 219.303 262.981 220.167 263.472C221.042 263.952 221.73 264.624 222.231 265.488C222.733 266.352 222.983 267.328 222.983 268.416C222.983 269.504 222.733 270.485 222.231 271.36C221.73 272.224 221.042 272.901 220.167 273.392C219.303 273.872 218.349 274.112 217.303 274.112ZM217.303 272.528C218.039 272.528 218.695 272.363 219.271 272.032C219.847 271.691 220.295 271.211 220.615 270.592C220.946 269.963 221.111 269.237 221.111 268.416C221.111 267.595 220.946 266.875 220.615 266.256C220.295 265.637 219.847 265.163 219.271 264.832C218.695 264.501 218.039 264.336 217.303 264.336C216.567 264.336 215.911 264.501 215.335 264.832C214.759 265.163 214.306 265.637 213.975 266.256C213.655 266.875 213.495 267.595 213.495 268.416C213.495 269.237 213.655 269.963 213.975 270.592C214.306 271.211 214.759 271.691 215.335 272.032C215.911 272.363 216.567 272.528 217.303 272.528ZM230.906 274L226.602 269.024V274H224.778V262.88H226.602V267.952L230.922 262.88H233.21L228.378 268.448L233.29 274H230.906ZM236.727 264.352V267.616H240.567V269.104H236.727V272.512H241.047V274H234.903V262.864H241.047V264.352H236.727ZM252.43 274H250.606L245.118 265.696V274H243.294V262.864H245.118L250.606 271.152V262.864H252.43V274ZM259.897 274.112C258.862 274.112 257.908 273.872 257.033 273.392C256.169 272.901 255.481 272.224 254.969 271.36C254.468 270.485 254.217 269.504 254.217 268.416C254.217 267.328 254.468 266.352 254.969 265.488C255.481 264.624 256.169 263.952 257.033 263.472C257.908 262.981 258.862 262.736 259.897 262.736C260.942 262.736 261.897 262.981 262.761 263.472C263.636 263.952 264.324 264.624 264.825 265.488C265.326 266.352 265.577 267.328 265.577 268.416C265.577 269.504 265.326 270.485 264.825 271.36C264.324 272.224 263.636 272.901 262.761 273.392C261.897 273.872 260.942 274.112 259.897 274.112ZM259.897 272.528C260.633 272.528 261.289 272.363 261.865 272.032C262.441 271.691 262.889 271.211 263.209 270.592C263.54 269.963 263.705 269.237 263.705 268.416C263.705 267.595 263.54 266.875 263.209 266.256C262.889 265.637 262.441 265.163 261.865 264.832C261.289 264.501 260.633 264.336 259.897 264.336C259.161 264.336 258.505 264.501 257.929 264.832C257.353 265.163 256.9 265.637 256.569 266.256C256.249 266.875 256.089 267.595 256.089 268.416C256.089 269.237 256.249 269.963 256.569 270.592C256.9 271.211 257.353 271.691 257.929 272.032C258.505 272.363 259.161 272.528 259.897 272.528ZM279.084 262.88V274H277.26V266.384L273.868 274H272.604L269.196 266.384V274H267.372V262.88H269.34L273.244 271.6L277.132 262.88H279.084ZM283.305 262.88V274H281.481V262.88H283.305ZM285.092 268.416C285.092 267.328 285.343 266.352 285.844 265.488C286.356 264.624 287.044 263.952 287.908 263.472C288.783 262.981 289.737 262.736 290.772 262.736C291.956 262.736 293.007 263.029 293.924 263.616C294.852 264.192 295.524 265.013 295.94 266.08H293.748C293.46 265.493 293.06 265.056 292.548 264.768C292.036 264.48 291.444 264.336 290.772 264.336C290.036 264.336 289.38 264.501 288.804 264.832C288.228 265.163 287.775 265.637 287.444 266.256C287.124 266.875 286.964 267.595 286.964 268.416C286.964 269.237 287.124 269.957 287.444 270.576C287.775 271.195 288.228 271.675 288.804 272.016C289.38 272.347 290.036 272.512 290.772 272.512C291.444 272.512 292.036 272.368 292.548 272.08C293.06 271.792 293.46 271.355 293.748 270.768H295.94C295.524 271.835 294.852 272.656 293.924 273.232C293.007 273.808 291.956 274.096 290.772 274.096C289.727 274.096 288.772 273.856 287.908 273.376C287.044 272.885 286.356 272.208 285.844 271.344C285.343 270.48 285.092 269.504 285.092 268.416ZM301.739 274.112C300.992 274.112 300.32 273.984 299.723 273.728C299.126 273.461 298.656 273.088 298.315 272.608C297.974 272.128 297.803 271.568 297.803 270.928H299.755C299.798 271.408 299.984 271.803 300.315 272.112C300.656 272.421 301.131 272.576 301.739 272.576C302.368 272.576 302.859 272.427 303.211 272.128C303.563 271.819 303.739 271.424 303.739 270.944C303.739 270.571 303.627 270.267 303.403 270.032C303.19 269.797 302.918 269.616 302.587 269.488C302.267 269.36 301.819 269.221 301.243 269.072C300.518 268.88 299.926 268.688 299.467 268.496C299.019 268.293 298.635 267.984 298.315 267.568C297.995 267.152 297.835 266.597 297.835 265.904C297.835 265.264 297.995 264.704 298.315 264.224C298.635 263.744 299.083 263.376 299.659 263.12C300.235 262.864 300.902 262.736 301.659 262.736C302.736 262.736 303.616 263.008 304.299 263.552C304.992 264.085 305.376 264.821 305.451 265.76H303.435C303.403 265.355 303.211 265.008 302.859 264.72C302.507 264.432 302.043 264.288 301.467 264.288C300.944 264.288 300.518 264.421 300.187 264.688C299.856 264.955 299.691 265.339 299.691 265.84C299.691 266.181 299.792 266.464 299.995 266.688C300.208 266.901 300.475 267.072 300.795 267.2C301.115 267.328 301.552 267.467 302.107 267.616C302.843 267.819 303.44 268.021 303.899 268.224C304.368 268.427 304.763 268.741 305.083 269.168C305.414 269.584 305.579 270.144 305.579 270.848C305.579 271.413 305.424 271.947 305.115 272.448C304.816 272.949 304.374 273.355 303.787 273.664C303.211 273.963 302.528 274.112 301.739 274.112Z" fill="#7E8282" />
                    <defs>
                        <filter id="filter0_d_2062_692" x="0.527344" y="245" width="268.473" height="230.879" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="10" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2062_692" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2062_692" result="shape" />
                        </filter>
                        <filter id="filter1_d_2062_692" x="1.45117" y="42.3398" width="267.549" height="232.66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="10" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2062_692" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2062_692" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_2062_692" x1="504" y1="238" x2="238" y2="250" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E1AB0D" />
                            <stop offset="1" stop-color="#836504" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2062_692" x1="176" y1="494" x2="236" y2="338" gradientUnits="userSpaceOnUse">
                            <stop offset="0.02" stop-color="#A48E65" />
                            <stop offset="1" stop-color="#3E3626" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_2062_692" x1="38" y1="402" x2="284" y2="234" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF8EE" />
                            <stop offset="1" stop-color="#99958F" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_2062_692" x1="29" y1="250" x2="206" y2="250" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#DFE0DF" />
                            <stop offset="1" stop-color="#797A79" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_2062_692" x1="198" y1="204" x2="40" y2="104" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4B2800" />
                            <stop offset="1" stop-color="#B15E00" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_2062_692" x1="244" y1="162" x2="192" y2="-74" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#006E61" />
                            <stop offset="0.682877" stop-color="#00D4BB" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_2062_692" x1="208" y1="162" x2="292" y2="378" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#571C86" />
                            <stop offset="1" stop-color="#150720" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_2062_692" x1="254" y1="165" x2="254" y2="335" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#D9D9D9" />
                            <stop offset="1" stop-color="#ABA5A5" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_2062_692" x1="254" y1="180" x2="254" y2="320" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#E2E2E2" />
                        </linearGradient>
                    </defs>
                </svg>


            </div>
        </div>
    );
};




export default NewHome