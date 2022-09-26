import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
    console.log(meal)
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
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Meal;