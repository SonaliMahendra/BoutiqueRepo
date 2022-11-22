import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [product_name,setProductName] = useState();
  const [price,setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [image, setImage] = useState([]);
  const [category,setCategory]=useState();
  

  const saveProduct= (e)=>{
    e.preventDefault();
      let product = {
        productName:product_name,
        price:price, 
        quantity:quantity,
        image:image,
        category:category
      }
      
    
      console.log(product)
      axios.post("http://localhost:8080/api/product/save",product).catch(err=>console.log(err))
      console.log(product);
      alert("Product Added SucessFully")
      navigate('/')
  }


  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {
    
      setImage(oFREvent.target.result);
    };
  }


  


  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <>
        <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <form>
      <label for="product_name" >Name of Product</label>
      <input type="text" name="product_name" onChange={e=>setProductName(e.target.value)}></input> 
            
            <label for="quantity" >Select quantity</label>
            <input type="number" name="quantity" value={quantity} onChange={e=>setQuantity(e.target.value)}
             min = "1" max="100" step="1"></input> 

            <label for="image">Select a file:</label>
            <input type="file" id="image" name="image"  onChange={(e) =>{ PreviewImage(e) }}
            accept="image/*" 
            className="hidden"></input>  
            <p ></p><br></br>
           
            <div className="border w-full h-auto flex items-center justify-center p-4">
          {image && (
            <img src={image} alt="images"  className="w-1/2 h-auto" />
          )}
        </div>

            <label for="price" value={price} >Enter price</label>
            <input type="text" id="price" name="price" onChange={e=>setPrice(e.target.value)}></input>
            
            <p ></p><br></br>
            
            <label for="category" >Select category</label>
            <input type="text" name="category" value={category} onChange={e=>setCategory(e.target.value)}></input> 
            <br /><br />
            <button type="submit" value="Submit" onClick={e => saveProduct(e)}>ADD PRODUCT</button>
      </form>
      
    </div>
    </>
  );
};

export default BoardAdmin;

    


