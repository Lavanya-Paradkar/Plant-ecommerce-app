import React from 'react';
import "./AuthorCard.css";

function AuthorCard({
    img, details, title,
}) {
    return (
        <div className="authorResult">
            <img src={img} alt=""/>

            <div className="authorResult__info">
                <div className="authorResult__infoTop"> 
                    <h3>{title}</h3>
                    <p>___________________</p>
                </div>
                <div className="authorResult__infoBottom"> 
                <h5>{details}</h5>
                    
                </div>
            </div>
        </div>
    )
}

export default AuthorCard
