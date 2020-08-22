import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {img, name, seller,price,stock} = props.product;
    return (
        <div className='product'>
        <div>
         <img src={img} alt=''/>
         </div>
        <div>
        <h4 className="product-name">{name}</h4>
        <br/>
        <p className="product-p"><small>by: {seller}</small></p>
        <p className="product-p">${price}</p>
        <p className="product-p"><small>Only: {stock} left in stock oder soon</small></p>
        <button className="add-btn"><span><FontAwesomeIcon icon={faCartArrowDown} /></span>add 10 cart</button>
        </div>
        
            
      
       
        </div>
    );
};

export default Product;