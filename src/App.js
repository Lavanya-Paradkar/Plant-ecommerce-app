import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Tools from "./Tools";
import Home from "./Home";
import Soil from "./Soil";
import Seeds from "./Seeds";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Seller from "./Seller";
import SearchPage from "./SearchPage";
import Faq from "./Faq";
import Footer from "./Footer";
import About from "./About";
import ReactGA from "react-ga";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51Hl7bHAJmjATsBe3tEJ4S2k8XkLXwy0cdh5nrPB2SipF3IdvDEZqibWEDrhlWbeAfB0DN6sJkzXnY3bOnVMixsGf00TYiG9iQh');

function App() {

  const [{user}, dispatch]= useStateValue();

  useEffect(() => {
    ReactGA.initialize('UA-173105030-2');
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return()=>{
      unsubscribe();
    };
  }, []);


  return (
    //
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path = "/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/searchPage">
            <SearchPage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/tools">
            <Header/>
            <Tools/>
            <Footer/>
          </Route>
          <Route path="/soil">
            <Header/>
            <Soil/>
            <Footer/>
          </Route>
          <Route path="/seeds">
          <Header/>
          <Seeds/>
          <Footer/>
          </Route>
          <Route path="/seller">
          <Seller/>
          </Route>
          <Route path="/faqs">
          <Faq/>
          </Route>
          <Route path="/about">
          <About/>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
