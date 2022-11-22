import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import AddToCart from './AddToCart';
// import Card from './Card';
import './card.css';
export default function Women() {
const [womens, setWomen] = useState([]);
const [qty,setQty]=useState();

//const {number} =  useParams();
  useEffect(() => {
    loadWomen();
  }, []);


  const loadWomen = async () => {
      const result = await axios.get("http://localhost:8080/api/product/category/Women")
      setWomen(result.data);
    
    //console.log(result.data);
    
  }
  

//   const deletebus = async (number) => {
//     const result = await axios.delete(`http://localhost:4000/api/bus/bus/${number}`);
//     loadbuses();
//   }


  return (
    <>
   <div className="products">

    {womens?.map((women, index) => (
    <div class="card" >
    <div women={women} key={women.id}/>
    <img src={women.image} className="productImage" />
    <div class="container">
    <div className='product-details-container row text-center'>
                    <label className='font_size_20px'>Name:{women.productName}</label>
                    <label className='font_size_18px'>Price:{women.price}</label>
                   
                    
                    <AddToCart  product={women} qty={1} />  
                        
                
                </div>
            </div>
    </div>
    
    ))}
   </div>
 

    </>
  )
}

