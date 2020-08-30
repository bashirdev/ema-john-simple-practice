import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total =cart.reduce((total, prd) => total + prd.price, 0)
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total =total + product.price * product.quantity;
       
    }
    let shippingCost=0;

    if(total > 35){
        shippingCost=0;
    }
    else if(total > 15){
        shippingCost=4.99;
    }else if(total > 0){
        shippingCost=12.99;
    }

    const tax= (total / 10).toFixed(2);
    const GrandTotal =(total + shippingCost + Number(tax)).toFixed(2);
    const formatNumber =num =>{
        const precision =num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h4>Oder Summary</h4>
            <p>Items ordered : {cart.length}</p>
            <p>Product Price : {formatNumber(total)}</p>
            <p><small>Shpping Cost: {shippingCost}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total price : {GrandTotal}</p>
            <br/>
            <Link to='/review'><button className="add-btn">Review oder</button></Link>
       
        </div>
    );
};

export default Cart;