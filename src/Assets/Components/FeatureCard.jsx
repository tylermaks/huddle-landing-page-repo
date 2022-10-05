import React from "react";

function FeatureCard({id, img, heading, text}){

    const cardPosition = (id === 0 || id === 2) ? "right" : "left"

    return(
        <div id={id} className={"container feature feature--" + cardPosition}>
            <img src={img} alt="" aria-hidden="true" />
            <article>
                <h2>{heading}</h2>
                <p>{text}</p>
            </article>
        </div>
    )
}

export default FeatureCard;