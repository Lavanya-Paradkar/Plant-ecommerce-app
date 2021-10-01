import React, { useState } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import logos from "./logoo.png";
import { useTheme } from "@material-ui/core";
import { auth } from "./firebase";

function Header() {

  const history = useHistory();
  

  const [{basket, user}] = useStateValue();

  const login =()=>{
    if(user)
    {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logos}
          alt=""  
        />
      </Link>

      <div className="header__search">
        <p className="header__searchInput"></p>
        </div>

    
      <div className="header__nav">
        
          <div className="header__option">
          <span className="header__optionLineTwo"><SearchIcon className="header__searchIcon" onClick={()=> history.push('/searchPage')} /></span>

          </div>
        
        <Link to="/tools" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Tools</span>
          </div>
        </Link>

        <Link to="/soil" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Soil</span>
          </div>
        </Link>

        <Link to="/seeds" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Seeds</span>
          </div>
        </Link>

        <Link to="/faqs" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">FAQs</span>
          </div>
        </Link>

        <Link to="/about" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">About Us</span>
          </div>
        </Link>

        
        
      </div>

      <div className="header__navTwo">
      <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            
              <span className="header__optionLineZero">{user ? user?.email : ""}</span>
              <span className="header__optionLineOne">{user? "Sign out": "Sign In"}</span>
          </div>
        </Link>


        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo  header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        <Link to="/seller" className="header__link">
          <div className="header__option">
          
            <span className="header__sellerLineTwo">{user? "": "Sell"}</span>
          </div>
        </Link>
        </div>
    </nav>
  );
}

export default Header;
