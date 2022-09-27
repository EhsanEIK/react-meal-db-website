import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const [cart, setCart] = useState([]);
    const addToCart = (selectedMeal) => {
        const newCart = [...cart, selectedMeal];
        setCart(newCart);
    }
    return (
        <div className='main-body'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleMealCart={addToCart}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;