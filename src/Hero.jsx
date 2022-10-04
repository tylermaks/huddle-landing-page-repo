import React from "react"
import HeroText from "./Assets/Components/HeroText"

import "./Assets/Styles/Hero.scss"
import NavBar from "./Assets/Components/NavBar"


function Hero(){
    return(
        <section id="hero">
            <NavBar />
            <HeroText />
        </section>
    )
}

export default Hero;

