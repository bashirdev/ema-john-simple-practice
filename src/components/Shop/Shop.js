import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const firs10 =fakeData.slice(0,10);
    const [products, setProducts]=useState(firs10);
    console.log(products);
    return (
        <div className="shop-container">
           {/* <h3>{products.length}</h3> */}
           <div className="product-container">
              { products.map(pd => <Product product={pd} />)}
                 
           </div>
         <div className="cart-container">
             <h3>This is cart</h3>
         </div>
           

        </div>
    );
};

export default Shop;