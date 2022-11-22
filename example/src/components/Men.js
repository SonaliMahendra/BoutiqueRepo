import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import AddToCart from './AddToCart';

export default function Men() {
const [men, setMen] = useState([]);

//const {number} =  useParams();
  useEffect(() => {
    loadMen();
  }, []);
  const loadMen = async () => {
    const result = await axios.get("http://localhost:8080/api/product/category/Men")
    setMen(result.data);
  }
//   const deletebus = async (number) => {
//     const result = await axios.delete(`http://localhost:4000/api/bus/bus/${number}`);
//     loadbuses();
//   }






  return (
    <>
    <div className="products">
 
     {men.map((men, index) => (

     <div class="card">
      
     <img src={men.image} className="productImage" />
     <div class="container">
   
     <div className='product-details-container row text-center'>
                     <label className='font_size_20px'>Name:{men.productName}</label>
                     <label className='font_size_18px'>Price:{men.price}</label>
                     
                     <AddToCart  product={men} qty={1} />  
                 </div>
             </div>
     </div>
     
     ))}
    </div>

   
     </>

    

  );
}

