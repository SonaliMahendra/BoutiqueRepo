import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
const AddToCart = ({product,qty}) => {
  
    
  
    const navigate = useNavigate();
    const addToCart = async()=>{
     
      let user = AuthService.getCurrentUser()
      if(user){
        let cartItem ={
          productId:product.id,
          image:product.image,
          productName:product.productName,
          quantity:qty,
          price:qty * product.price
        }
       

        const res= await axios.post("http://localhost:8080/api/cart/saveCart",cartItem).catch(err=>alert("already in a cart"))
        // if(res){
         
        //   window.location.reload()
        // }
        
        console.log(cartItem);
        alert("Item Added to cart");
        
        
      }
  
  
     
    }
  
    return (
      <>
    <button className="btn btn-secondary btnproduct"
              onClick={()=>{
                
                addToCart()
              }}
                          >
                  Add To Cart      
      </button>
     
       
     
    </>
    )
  }
  
  export default AddToCart;