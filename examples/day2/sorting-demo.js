let products = [
    {name : "Laptop", price : 50000, ratings : 5},
    {name : "Mobile", price : 20000, ratings : 4},
    {name : "Tablet", price : 25000, ratings : 4.5},
    {name : "Tea", price : 30000, ratings : 3},
];

let sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
let total = 0;
let totalPrice = products.reduce((previous, current) => previous + current.price, 0);
console.log(sortedProducts);
console.log(totalPrice);