import React from 'react';
import Lottie from 'react-lottie';
import * as success from "./success.json";
import "./Orders.css";


function Orders() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: success.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="orders">
            <Lottie className="orders__logo" options={defaultOptions} height={200} width={200} />
            <h2>Payment Successful</h2>
            <h1>Thanks for making the World Greener</h1>
            <h6>*This page is under testing, so NO transaction occurred.</h6>
        </div>
    )
}

export default Orders
