import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let quantity = 0;
    for (const meal of cart) {
        quantity += meal.quantity;
    }
    return (
        <div className='cart'>
            <h1>Meal Cart</h1>
            <p>Selected Items: {quantity}</p>
            {
                cart.map(meal => <li key={meal.idMeal}>{meal.strMeal} {meal.quantity ? meal.quantity : ''}</li>)
            }
            <button className='btn-confirm'>Confirm Order</button>
        </div>
    );
};

export default Cart;