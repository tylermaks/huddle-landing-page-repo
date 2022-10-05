import React from "react"
import logo from "../Images/logo.svg"

function HeroLogo(){
    return(
        <div className="container hero-logo">
            <img className="logo" src={logo} alt="Huddle Company Logo" />
            <a href="#hero" className="link">Try it Free</a> 
        </div>
    )
}

export default HeroLogo;