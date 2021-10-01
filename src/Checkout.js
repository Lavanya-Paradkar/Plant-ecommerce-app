import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import bannerCart from "./banner_cart.png"
function Checkout() {

    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout__ad"
                src = {bannerCart}
                alt =""
                
                />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is Empty</h2>
                    <p>You have no items in your cart. To buy one or more, click "Add to Cart" next to the item.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    
                    {basket.map(item => (
                        
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                        />
                    ))}
                </div>

            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>

                </div>
            )}
        </div>
    );
}

export default Checkout
