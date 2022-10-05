import React from "react"

const link = ["About Us", "What We Do", "FAQ", "Career", "Blog", "Contact Us"]

function Menu(){
    return(
        <div className="container menu">
            {
                link.map(data =>{
                    return(
                        <p>
                            {data}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Menu;