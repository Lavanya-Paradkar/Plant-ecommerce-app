import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value)=>(

                    <p>
                        Subtotal ({basket.length} item(s)):<br></br>
                        <h2><strong>{`${value}`}</strong></h2>
                    </p>

                )}

                decimalScale ={2}
                value = {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            
            
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
