import React from 'react';
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img, details, owner, title, rating, price,
}) {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon
            className="searchResult__heart"
            />

            <div className="searchResult__info">
                <div className="searchResult__infoTop"> 
                    <h3>{title}</h3>
                    <h5>{details}</h5>
                    <p>_____</p>
                    
                    
                </div>
                <h4>Sold by {owner}</h4>
                <div className="searchResult__infoBottom"> 
    
                    <div className="searchResult__stars" >
                        <StarIcon className="searchResult__star" />
                        <p>
    <strong>{rating}</strong>
                        </p>
                    </div>
                    <div className="searchResult__price" >
    <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
