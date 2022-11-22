

import {  useEffect,useState } from "react";

//import { useDispatch, useSelector } from "react-redux";
import AuthService from "../services/auth.service.js";

import axios from "axios";
import "./card.css"

function remove(id) {
  axios.delete(`http://localhost:8080/api/cart/deleteByIdCart/${id}`)
}
const Cart = () => {
  const [cart,setCart]=useState([]);
  useEffect(() => {
    loadCart();
  }, [cart]);

  function subtotal() {
    
    let subtotal =cart.reduce((value,item)=>{
      return item.price + value;
      
    },0);
   
    alert(subtotal)
  }
  const loadCart = async () => {
    const result = await axios.get("http://localhost:8080/api/cart/allCartItems")
    setCart(result.data);
    console.log(cart);
    
  }
  function checkout(){
    <a href="/checkout"  ><button variant="success"
    className="m-2"
>
   
    Check Out</button></a>
  }

  return (
    <>
   <div className="cart">

    {/* {cart?.map((cart, index) => (
    <div class="container">
    <img src={cart.image} className="justify-content-center" />
    <div class="">
    <div className=''>
                    <label className="font_size_20px">{cart.productName}</label>
                    <label className='font_size_20px'>{cart.productId}</label>
                    <label className='font_size_18px'>Price:{cart.price}</label>
                    <button className="btn btn-secondary btnproduct" onClick={()=>{remove(cart.cartId)}}>Remove</button>
                </div>
            </div>

    </div> */}
    
    {/* ))} */}
    

    
    
   
  </div>
  <div className="products">

    {cart.map((cart, index) => (
    <div class="card">
    <img src={cart.image} className="productImage" />
    <div class="container">
    <div className='product-details-container row text-center'>
                    <label className='font_size_20px'>Name:{cart.productName}</label>
                    <label className='font_size_18px'>Price:{cart.price}</label>
                    <button className="btn btn-secondary btnproduct" onClick={()=>{remove(cart.cartId)}}>Remove</button>
                      
                
                </div>
            </div>
    </div>
    
    ))}
   
  </div>
  <button className="btn btn-secondary btnproduct" onClick={subtotal}>Subtotal</button>
  <button className="btn btn-secondary btnproduct" onClick={checkout}></button>
  
    </>
    
  )

  
};

export default Cart;