
import React ,{useState, useEffect} from 'react';
import Shopping from './Shopping.css';

const ShoppingCard=()=>{

    const [products, setProducts] =useState([]);
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(error=>console.error(error));
    },[])

   return(
    <div className='shopping-container'>
    {
     products.map((product)=>(
             <div key={product.id} className='productCard'>
                 <img  className ="Shopping-Img" src={product.image} alt='product image'></img>
                 <div className='productDetails'>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                </div>
           </div>
            

     ))
    }
    </div>
  
   )
}

export default ShoppingCard;