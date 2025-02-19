import React from 'react'
import HeaderNew from '../../components/Header/HeaderNew'
import Hero from '../../components/specfic/Hero'
import { HeroBackground } from '../../assets'

const NewHome = () => {
    return (
        <div className="">
            {/* Navbar */}
            <div className="min-h-screen p-2" style={{ background: `url(${HeroBackground}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <HeaderNew />

                <Hero />
            </div>

        </div>
    )
}

export default NewHome