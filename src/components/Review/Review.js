import React, { useEffect, useState } from 'react';
import {getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
const Review = (props) => {

     const [cart,setCart] = useState([]);
   const [orderPlaced,setOderPlaced] = useState(false)
   const handlePlaceoder =()=>{
       setCart([]);
       setOderPlaced(true)
    clearLocalShoppingCart()
   }

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

    let thankyou;
    if(orderPlaced){
        thankyou=<img src={happyImage} alt='' />
    }else{

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

       {thankyou}
       
       </div>
       <div className="cart-container">
           <Cart cart={cart}>
               <button className="add-btn" onClick={handlePlaceoder}>Place Oder</button>
           </Cart>
       </div>
        </div>
    );
};

export default Review;