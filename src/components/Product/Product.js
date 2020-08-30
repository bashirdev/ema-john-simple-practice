import React, { useState } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const {img, name, seller,price,stock, key} = props.product;
   
    return (
        <div className='product'>
        <div>
         <img src={img} alt=''/>
         </div>
        <div>
        <h4 className="product-name"><Link to={'/product/'+key}>{name}</Link> </h4>
        <br/>
        <p className="product-p"><small>by: {seller}</small></p>
        <p className="product-p">${price}</p>
        <p className="product-p"><small>Only: {stock} left in stock oder soon</small></p>
      {props.showAddtoCart && <button 
        className="add-btn" 
        onClick={()=> props.handleAddProduct(props.product)}>
        <span><FontAwesomeIcon icon={faCartArrowDown} /></span>add 10 cart</button>}
        </div>
        
            
      
       
        </div>
    );
};

export default Product;