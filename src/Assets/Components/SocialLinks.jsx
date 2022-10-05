import React from "react"

import facebook from "../Images/icon-facebook.svg"
import twitter from "../Images/icon-twitter.svg"
import instagram from "../Images/icon-instagram.svg"

const links=[facebook, twitter, instagram]

function SocialLinks(){
    return(
        <div className="social container">
            {
                links.map(data => {
                    return(
                        <img className="social-icon" src={data} alt="social icon"/>
                    )
                })
            }
        </div>
    )
}

export default SocialLinks;