import React from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let quantity = 0;
    for (const meal of cart) {
        quantity += meal.quantity;
    }

    // toastify message
    const notify = () => toast.success("Your order is on the way!")

    return (
        <div className='cart'>
            <h1>Meal Cart</h1>
            <p>Selected Items: {quantity}</p>
            {
                cart.map(meal => <li key={meal.idMeal}>{meal.strMeal} {meal.quantity ? meal.quantity : ''}</li>)
            }
            <button onClick={notify} className='btn-confirm'>Confirm Order</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;