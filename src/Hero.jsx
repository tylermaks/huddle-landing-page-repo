import React from "react"
import HeroText from "./Assets/Components/HeroText"

import "./Assets/Styles/Hero.scss"
import logo from "./Assets/Images/logo.svg"


function Hero(){
    return(
        <section id="hero">
            <nav>
                <img className="logo" src={logo} alt="logo" />
                <button>Try it Free</button> 
            </nav>
            <HeroText />
        </section>
    )
}

export default Hero;

