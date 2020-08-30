import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const firs10 =fakeData.slice(0,10);
    const [products, setProducts] = useState(firs10);
    const [cart, setCart] = useState([])
   useEffect(()=>{
          const saveCart= getDatabaseCart();
          const productKeys=Object.keys(saveCart)
          const previousCart =productKeys.map( existingKey => {
            const product=fakeData.find(pd => pd.key === existingKey);
            product.quantity=saveCart[existingKey];
            return product;
          })
        setCart(previousCart)
   },[]);

    const handleAddProduct=(product)=>{
       console.log('product added' , product);
       const toBeAddedkey=product.key;
       const sameProduct =cart.find(pd => pd.key === toBeAddedkey);
       let counts =1;
       let newCarts;
       if(sameProduct){
         counts =sameProduct.quantity + 1;
         sameProduct.quantity = counts;
         const others =cart.filter(pd =>pd.key !==toBeAddedkey );
         newCarts =[...others, sameProduct];
       }else{
         product.quantity=1;
         newCarts=[...cart, product]
       }
       setCart(newCarts);
       addToDatabaseCart(product.key, counts);
    }
    

    return (
        <div className="shop-container">
        
           <div className="product-container">
              { 
                  products.map(pd => <Product product={pd} key={pd.key} showAddtoCart={true}
                  handleAddProduct={handleAddProduct}
               />
              )
             }
               
           </div>
         <div className="cart-container">
           <Cart cart={cart}>
           <Link to='/review'><button className="add-btn">Review oder</button></Link>
           </Cart>
         </div>
           

        </div>
    );
};

export default Shop;