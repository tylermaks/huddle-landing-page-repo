import React from "react"
import HeroText from "./Assets/Components/HeroText"

import "./Assets/Styles/Hero.scss"
import HeroLogo from "./Assets/Components/HeroLogo"


function Hero(){
    return(
        <section id="hero">
            <HeroLogo />
            <HeroText />
        </section>
    )
}

export default Hero;

