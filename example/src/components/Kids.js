import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import AddToCart from './AddToCart';
export default function Kids() {
const [kids, setKids] = useState([]);
//const {number} =  useParams();
  useEffect(() => {
   loadKids();
  }, []);
  const loadKids = async () => {
    const result = await axios.get("http://localhost:8080/api/product/category/Kids")
    setKids(result.data);
  }
//   const deletebus = async (number) => {
//     const result = await axios.delete(`http://localhost:4000/api/bus/bus/${number}`);
//     loadbuses();
//   }

  return (
    <>
   <div className="products">

    {kids.map((kids, index) => (
    <div class="card">
    <img src={kids.image} className="productImage" />
    <div class="container">
    <div className='product-details-container row text-center'>
                    <label className='font_size_20px'>Name:{kids.productName}</label>
                    <label className='font_size_18px'>Price:{kids.price}</label>
                   
                    <AddToCart  product={kids} qty={1} />      
                
                </div>
            </div>
    </div>
    
    ))}
   
  </div>
    </>
    
  )
}

