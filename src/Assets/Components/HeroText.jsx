import React from "react"

import heroImg from "../Images/illustration-mockups.svg"

function HeroText(){
    return(
        <div className="grid">
            <article className="hero-inner">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion.  
                </p>
                <button className="hero-btn">Get Started For Free</button>
            </article>
            <div className="hero-inner">
                <img className="hero-img" src={heroImg} alt="Mockups" />
            </div>
        </div>     
    )
}

export default HeroText;