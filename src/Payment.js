import { Link, useHistory} from 'react-router-dom';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
import axios from './axios';

function Payment() {

    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) *100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("the server is >>>>>>", clientSecret);
    console.log("HEYYY MANNN",user);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        //temporary//
        setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
            //*temporary*//
        /* const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                
                })
                

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })*/
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error? e.error.message: "");

    }


    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>User Address</p>
                        <p>(permission not provided)</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                            
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <h6>*under testing, use 4242 4242 4242 4242 -- 04/24 242 42424</h6>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText = {(value)=>(
                                        <h3>Amount: <strong>{`${value}`}</strong></h3>
                                )}

                                decimalScale ={2}
                                value = {getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹ "}
                            
                            
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
