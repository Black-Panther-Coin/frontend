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
            <div className="min-h-screen p-2" style={{ background: `url(${HeroBackground}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <HeaderNew />

                <Hero />

            </div>
            <Theme />
            <div className="min-h-screen w-full bg-[#F8F5ED] py-3  px-4 md:px-10 ">
                <div className='max-w-3xl h-auto'>
                    <p className='text-black tracking-wider leading-tight text-3xl md:text-[70px] font-semibold'>
                        Unleash the Power Within</p>
                </div>
                <div className='bg-black rounded-lg shadow-lg  max-w-[90vw] p-10 flex flex-col md:flex-row gap-5 justify-around'>
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



        <div className="flex flex-col md:flex-row items-center justify-center py-12 bg-[#F8F5ED]">
            {/* Left Section - Steps */}
            <div className="flex flex-col gap-8">
                {steps.map((step) => (
                    <div key={step.number} className=" relative flex items-center gap-4">
                        <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 bg-[#571C86] text-white rounded-full shadow-lg">
                            <img src={step.icon} alt={step.title} className='h-6 w-6' />
                        </div>
                        <div className="bg-white shadow-lg rounded-xl h-24 p-4 w-64">
                            <h3 className="font-bold text-sm text-black"> {step.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <svg width="129" height="702" viewBox="0 0 129 702" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <p className="text-gray-700 font-semibold text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}





const data = [
    { name: 'DEXs', value: 50, color: '#D4A017' },
    { name: 'CEXs', value: 10, color: '#1ABC9C' },
    { name: 'Treasury', value: 10, color: '#A0522D' },
    { name: 'Marketing', value: 10, color: '#D3D3D3' },
    { name: 'Charity', value: 10, color: '#F5F5F5' },
    { name: 'Dev', value: 10, color: '#8B4513' }
];

const TokenomicsChart = () => {
    return (
        <div className="w-full mx-2 bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 shadow-lg text-white flex flex-col md:flex-row items-center gap-8">
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
            <div className="flex-1 w-full h-80 relative">
                <ResponsiveContainer width="100%" height="100%">
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
                </ResponsiveContainer>

                {/* Center Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-white to-gray-200 rounded-full flex flex-col justify-center items-center border-4 border-[#2E0854] shadow-lg">
                    <p className="text-sm font-bold text-black">BPNTHR</p>
                    <p className="text-xs text-gray-600">TOKENOMICS</p>
                </div>
            </div>
        </div>
    );
};




export default NewHome