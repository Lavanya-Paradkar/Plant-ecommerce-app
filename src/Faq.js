import React, { useState } from 'react';
import "./Faq.css";
import SendIcon from '@material-ui/icons/Send';
import {useHistory} from "react-router-dom";

import HomeBanner from "./banner_faq.jpg";
import { Card } from '@material-ui/core';

function Faq() {
    
    const history = useHistory();
    const [searchItem, setSearchItem] = useState('');

    return (
        <div className="faq">
            <img className="faq__image"
         src={HomeBanner}
        alt=""
        />
      
            <div className="faq__info">
            <div className="faq__optionSearch">
            <input className="faq__input" placeholder="Ask Here..." type="text"  />
            <SendIcon className="faq__sendIcon" onClick={()=> {
                alert("Thanks for your Query... We will get back to you Soon...");
                history.push('/faqs')} }/>

          </div>
            </div>
            <Card className="faq__cards">
                <h2>How do I get started with JoJoBa?</h2>
                <p>________</p>
                <h3>You need to login using the registered email id and password.
                     If your are new to JoJoBa, click on Create new account. Happy planting!!</h3>
            </Card>

            <Card className="faq__cards">
                <h2>How to search for a specific product? </h2>
                <p>________</p>
                   <h3>You get to access different sections for plants, tools and the nutrients. You will find specific products there.</h3> 
                       <h3>You can also use the search bar, to search for a specific product.</h3>
            </Card>

            <Card className="faq__cards">
                <h2>How can I sell plants or related products? </h2>
                <p>________</p>
                   <h3>On the top-right, click on “Sell” option. Fill in your details to post your items for sale. The price should be fixed optimally.</h3>
            </Card>

            <Card className="faq__cards">
                <h2>How do I register my problem ? </h2>
                <p>________</p>
                   <h3>If there are any issues with the product quality, send us your queries in the Query Bar on the top. We will be delighted to answer your queries.</h3>
            </Card>

            <Card className="faq__cards">
                <h2>Can I purchase multiple items from different categories together ?</h2>
                <p>________</p>
                   <h3>Yes, of course. By clicking 'Add to Cart' button below the item, u can move one or more products to your Cart, from any category.</h3>
            </Card>

            <Card className="faq__cards">
                <h2>Can I remove items from Cart if I don't wish to buy them later ?</h2>
                <p>________</p>
                   <h3>Yes. The items can be removed from the Cart, by clicking on 'Remove from Cart'button.</h3>
                   <h3>Also, the subtotal of your Cart will change with removal of every item.</h3>
            </Card>

            <Card className="faq__cards">
                <h2>Will my email Id be stored for future ?</h2>
                <p>________</p>
                   <h3>Yes. Once you create a new account, you will be able to sign in using same email ID and password, every time you visit JoJoBa.</h3>
            </Card>
            

        </div>
    )
}

export default Faq
