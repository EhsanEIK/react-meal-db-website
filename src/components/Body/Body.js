import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    return (
        <div className='main-body'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                        meal={meal}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <h1>Meal Cart</h1>
            </div>
        </div>
    );
};

export default Body;