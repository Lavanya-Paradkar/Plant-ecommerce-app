import React from 'react';
import "./AboutCards.css";

function AboutCards({
    img, details, title,
}) {
    return (
        <div className="abResult">
    
            <div className="abResult__info">
                <div className="abResult__infoTop"> 
                    <h3>{title}</h3>
                    <p>_____________</p>
                </div>
                <div className="abResult__infoBottom"> 
                <h5>{details}</h5>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutCards
