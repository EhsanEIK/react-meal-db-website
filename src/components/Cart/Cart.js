import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className='cart'>
            <h1>Meal Cart</h1>
            <p>Selected Items: {cart.length}</p>
            {
                cart.map(meal => <li key={meal.idMeal}>{meal.strMeal}</li>)
            }
        </div>
    );
};

export default Cart;