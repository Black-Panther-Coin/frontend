import React from 'react'
import { HeroBackground } from '../../assets'
import HeaderNew from '../../components/Header/HeaderNew'
import { Link } from 'react-router-dom'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'

const Presale = () => {
  return (
    <>
      <HeaderNew />
      <div className="min-h-screen   w-[100vw] overflow-hidden  mt-20" style={{ width: "100%", background: `url(${HeroBackground}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <Hero />
      </div>
    </>
  )
}
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-start px-5 sm:px-3 py-2 sm:pt-10 justify-center md:justify-around' >
      <div className='relative'>
        <h3 className="leading-tight  text-4xl md:text-7xl lg:text-8xl tracking-widest">Black Panther
          <br />
          Token(BPNTHER)
          <br />
          Pre-Sale is
          <br /> Live
        </h3>

        <div className='flex justify-between items-start'>
          <p className='text-white text-left my-5 text-sm font-thin tracking-wider'>A MEME COIN WITH PURPOSE!</p>
          <div className='flex gap-3 '>
            <svg width="1" height="227" viewBox="0 0 1 277" fill="none" xmlns="http://www.w3.org/2000/svg">

              <line x1="0.5" x2="0.5" y2="277.007" stroke="url(#paint0_linear_2194_934)" stroke-opacity="0.8" />


              <circle cx="0.5" cy="277" r="10" fill="white" />

              <defs>

                <linearGradient id="paint0_linear_2194_934" x1="0.212991" y1="247.508" x2="1.99994" y2="0.0144399" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="1" height="227" className='mt-10' viewBox="0 0 1 277" fill="none" xmlns="http://www.w3.org/2000/svg">

              <line x1="0.5" x2="0.5" y2="277.007" stroke="url(#paint0_linear_2194_934)" stroke-opacity="0.8" />


              <circle cx="0.5" cy="277" r="10" fill="white" />

              <defs>

                <linearGradient id="paint0_linear_2194_934" x1="0.212991" y1="247.508" x2="1.99994" y2="0.0144399" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="1" height="227" className='mt-20' viewBox="0 0 1 277" fill="none" xmlns="http://www.w3.org/2000/svg">

              <line x1="0.5" x2="0.5" y2="277.007" stroke="url(#paint0_linear_2194_934)" stroke-opacity="0.8" />


              <circle cx="0.5" cy="277" r="10" fill="white" />

              <defs>

                <linearGradient id="paint0_linear_2194_934" x1="0.212991" y1="247.508" x2="1.99994" y2="0.0144399" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>




        </div>
        <div>
          
        </div>
      </div>
      <div>
        <div className='bg-[#42424080] w-[96%] md:w-[30vw]  p-5 rounded-2xl shadow-md md:mt-10 flex flex-col justify-center  '>
          <p className='text-center text-sm font-bold tracking-widest'>JOIN THE BLACK PANTHER BPNTHR PRE-SALE</p>
          <p className='text-sm mt-5 text-left px-10'>Please go to your Wallet Address and CUSTOM <br /> IMPORT the BPNTHR ticker by copying the <br /> Contract Address inside your wallet in order to <br /> view the number of tokens you have bought.</p>
          <h3 className='text-left px-10 my-4 font-bold text-[#E9B308]'>How many BPNTHR would you like to buy?</h3>
          <p className='text-center my-2'>Calculate tokens</p>
          <div className='flex flex-col gap-3 items-center justify-center my-3'>
            <input type="text" name="" value="USD" className='bg-[#999894] text-black  px-10 py-3 rounded-2xl shadow-2xl text-center font-bold' />
            <input type="text" name="" value="$BPNTHER" className='bg-[#999894] text-black px-10 py-3 rounded-2xl shadow-2xl text-center font-bold' />
          </div>
        </div>
        <div>
          <div className='flex justify-around items-center  my-10'>
            <Link to="/register" className='bg-[#9747FF] rounded-3xl  shadow-sm px-6 md:px-14 py-3 flex items-center justify-center gap-3 md:font-bold' ><span>Register</span> <FaUser /></Link>
            <p>Or</p>
            <Link to="/register" className='bg-[#836504] rounded-3xl shadow-sm px-6 md:px-14 py-3 flex items-center justify-center gap-3 md:font-bold' ><span>Register</span> <FaSignOutAlt /></Link>
          </div>
          <p className='text-center '>to proceed with buying the tokens</p>
        </div>
      </div>

    </div>
  )
}

export default Presale