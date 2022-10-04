import React from "react";

import FeatureCard from "./Assets/Components/FeatureCard";
import CtaCard from "./Assets/Components/CtaCard";
import featureData from "./featureData"
import "./Assets/Styles/Features.scss"

function Features(){
    return(
        <section>
            {
                featureData.map(data => {
                    return(
                        <FeatureCard 
                            id={data.key}
                            img={data.img}
                            heading={data.heading}
                            text={data.text}
                        />
                    )
                })
            }
            <CtaCard />
        </section>
    )
}

export default Features;