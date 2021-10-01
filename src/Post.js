import React from 'react';
import './Post.css';
import { useStateValue } from "./StateProvider";

function Post({key, plantName, price, imgUrl}) {

  const [{user}, dispatch] = useStateValue();

  const addToBasket = () => {
    if(user)
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:key,
        title:plantName,
        image:imgUrl,
        price: price,
        rating: 0
      }
    })
    else(
      alert("Please sign in to proceed.")
    )
  };

    return (
        <div className="post">
            <div className="post__info"><p>{plantName}</p></div>
            <div className="post__text"><p><small>₹ </small><strong>{price}</strong></p></div>
            <img className="post__image" src={imgUrl}/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Post
