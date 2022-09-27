const addToDb = (meal) => {
    let foodCart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
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

export { addToDb }