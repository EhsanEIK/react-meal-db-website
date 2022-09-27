import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    // save data to local storage and display selected meal on UI when click on the button 
    const addToCart = (selectedMeal) => {
        let newCart = [];
        const exists = cart.find(m => m.idMeal === selectedMeal.idMeal);
        if (!exists) {
            selectedMeal.quantity = 1;
            newCart = [...cart, selectedMeal];
        }
        else {
            const rest = cart.filter(m => m.idMeal !== exists.idMeal);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedMeal.idMeal);
    }

    // get data from local storage and diplay data on UI after 1st time loading
    useEffect(() => {
        const storedCart = getDataFromDb();
        let newCart = [];
        for (const id in storedCart) {
            const addedMeal = meals.find(meal => meal.idMeal === id);
            if (addedMeal) {
                addedMeal.quantity = storedCart[id];
                newCart.push(addedMeal);
            }
        }
        setCart(newCart);
    }, [meals])

    console.log(cart)
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