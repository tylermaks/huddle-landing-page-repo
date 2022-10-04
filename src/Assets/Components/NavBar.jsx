import React from "react"
import logo from "../Images/logo.svg"

function NavBar(){
    return(
        <nav className="container">
            <img className="logo" src={logo} alt="logo" />
            <button>Try it Free</button> 
        </nav>
    )
}

export default NavBar;