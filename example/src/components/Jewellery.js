import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import AddToCart from './AddToCart';
export default function Jewellery() {
const [jewellery, setJewellery] = useState([]);
//const {number} =  useParams();
  useEffect(() => {
   loadJewellery();
  }, []);
  const loadJewellery = async () => {
    const result = await axios.get("http://localhost:8080/api/product/category/Jewellery")
    setJewellery(result.data);
  }
//   const deletebus = async (number) => {
//     const result = await axios.delete(`http://localhost:4000/api/bus/bus/${number}`);
//     loadbuses();
//   }


  return (
    <>
   <div className="products">

    {jewellery?.map((jewellery, index) => (
    <div class="card">
    <img src={jewellery.image} className="productImage" />
    <div class="container">
    <div className='product-details-container row text-center'>
                    <label className='font_size_20px'>Name:{jewellery.productName}</label>
                    <label className='font_size_18px'>Price:{jewellery.price}</label>
                   
                        
                    <AddToCart  product={jewellery} qty={1} />  
                </div>
            </div>
    </div>


    
    ))}
   </div>
   
    </>
  )
}