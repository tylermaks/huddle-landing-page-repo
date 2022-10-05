import React from "react"
import "./Assets/Styles/Footer.scss"

import ContactInfo from "./Assets/Components/ContactInfo";
import Menu from "./Assets/Components/Menu";
import SocialLinks from "./Assets/Components/SocialLinks";
import logo from "./Assets/Images/logo.svg"


function Footer(){
    return(
        <footer>
            <div className="container footer-container">
                <div className="container footer-logo">
                    <img src={logo} alt="Huddle Company Logo" />
                </div>
                <ContactInfo />
                <Menu />
                <SocialLinks />
            </div>
        </footer>
    )
}

export default Footer;