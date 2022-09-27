import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Meal = ({ meal, handleMealCart }) => {
    // console.log(meal);
    const { strMeal, strMealThumb, strInstructions, strArea, strCategory } = meal;
    return (
        <div className='meal'>
            <div className='meal-info'>
                <img src={strMealThumb} alt={strMealThumb} />
                <h2>{strMeal}</h2>
                <p><b><i>Country:</i></b> {strArea}</p>
                <p><b><i>Category:</i></b> {strCategory}</p>
                <p>{strInstructions.slice(0, 100)}...</p>
            </div>
            <button onClick={() => handleMealCart(meal)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Meal;