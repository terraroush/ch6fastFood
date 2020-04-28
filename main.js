const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    orders: [],
    getAllOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}
const cowComboMeal = {
    sandwichType: "cow",
    fries: true,
    drinkSize: "medium"
}
const veggieComboMeal = {
    sandwichType: "veggie",
    fries: true,
    drinkSize: "medium"
}


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(cowComboMeal);
restaurant.placeOrder(veggieComboMeal);

// Invoke the function to return the list of all orders
restaurant.getAllOrders();

// Output all orders to the console using console.table()
for (i = 0; i < restaurant.orders.length; i++) {
     console.table(restaurant.orders[i]);
}
