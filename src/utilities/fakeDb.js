// save data to local storage
const addToDb = (meal) => {
    let foodCart = getDataFromDb();
    let quantity = foodCart[meal.idMeal];
    if (quantity) {
        quantity++;
        foodCart[meal.idMeal] = quantity;
    }
    else {
        foodCart[meal.idMeal] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(foodCart));
}

// get data from local storage
const getDataFromDb = () => {
    let foodCart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    return foodCart;
}
export { addToDb, getDataFromDb }