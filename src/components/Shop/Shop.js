import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager'

const Shop = () => {
    const firs10 =fakeData.slice(0,10);
    const [products, setProducts] = useState(firs10);
    const [cart, setCart] = useState([])
    // console.log(products);

    const handleAddProduct=(product)=>{
       console.log('product added' , product);
       const newCart =[...cart, product];
       setCart(newCart);
       const sameProduct =newCart.filter(pd => pd.key === product.key)
       const count= sameProduct.length;
      addToDatabaseCart(product.key, count);
    }
    

    return (
        <div className="shop-container">
           {/* <h3>{products.length}</h3> */}
           <div className="product-container">
              { 
                  products.map(pd => <Product product={pd} key={pd.key} showAddtoCart={true}
                  handleAddProduct={handleAddProduct}
               />
              )
             }
               
           </div>
         <div className="cart-container">
           <Cart cart={cart}/>
         </div>
           

        </div>
    );
};

export default Shop;