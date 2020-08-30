import React, { useEffect, useState } from 'react';
import {getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
const Review = (props) => {

     const [cart,setCart] = useState([]);

   

     useEffect(() => {
          const saveCart = getDatabaseCart();
          const productKeys = Object.keys(saveCart);
         const cartProducts= productKeys.map(key => {
             const product= fakeData.find(pd => pd.key === key);
             product.quantity=saveCart[key];
             return product;
             
         });

        setCart(cartProducts);
     },[]);

     const handleRemoveProduct = (productKey)=>{
        
        const newCart =cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    return (
        <div className='shop-container'>
         <div className='product-container'>
      {
       cart.map(pd => <ReviewItem 
       key={pd.kay}
       product={pd} 
       handleRemoveProduct={handleRemoveProduct}> 
       </ReviewItem>)
       }
       </div>
       <div className="cart-container">
           <Cart cart={cart}></Cart>
       </div>
        </div>
    );
};

export default Review;