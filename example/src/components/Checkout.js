//import { useState } from 'react';
//import Button from '../Button/ButtonBody';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Top from './Top/Top';
import Footer from './Footer/Footer';
import { Placeholder } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Header from './Header/Header';



const Checkout = () => {
    const {
       
        emptyCart,
    } = useCart();
    

    const PlaceOrder=()=>{

        alert("order placed succesfully");
        emptyCart();
      


    }


    return(
        <div>
           
            <h1>Enter Card details</h1>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>
        
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input>
            <button onClick={e => PlaceOrder(e)}>Submit</button>
           
            
        </div>
    )
}

export default Checkout;