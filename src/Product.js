import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{user}, dispatch] = useStateValue();

  const addToBasket = () => {
    if(user)
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price: price,
        rating: rating
      }
    })
    else(
      alert("Please sign in to proceed.")
    )
  };
  
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p className="red__star">&#x2605;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
