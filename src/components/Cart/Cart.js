import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='cart'>
            <h1>Meal Cart</h1>
            <p>{cart.length}</p>
        </div>
    );
};

export default Cart;