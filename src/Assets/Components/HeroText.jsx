import React from "react"

import heroImg from "../Images/illustration-mockups.svg"

function HeroText(){
    return(
        <div className="container grid">
            <article className="hero-inner">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion.  
                </p>
                <a href="#hero" className="link link--cta">Get Started For Free</a>
            </article>
            <div className="hero-inner">
                <img className="hero-img" src={heroImg} alt="Mockups" />
            </div>
        </div>     
    )
}

export default HeroText;