import React from "react"

import contactData from "../../contactData.js"


function ContactInfo(){
    return(
        <article className="container container--footer">
           
            {
                contactData.map(data => {
                    return(
                        <div className="contact">
                            <img src={data.img} alt="icon" />
                            <p>{data.text}</p>
                        </div>
                    )     
                })
            }
        </article>
    )
}

export default ContactInfo;