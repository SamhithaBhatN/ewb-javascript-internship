
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// Part A: Display every product using forEach()
console.log("All Products:");

products.forEach((product) => {
    console.log(`${product.name}: $${product.price}`);
});

// Part B: Filter products priced below $50
const affordableProducts = products.filter((product) => {
    return product.price < 50;
});

console.log("\nProducts below $50:");

affordableProducts.forEach((product) => {
    console.log(`${product.name}: $${product.price}`);
});

// Part C: Format products using map()
const formattedProducts = products.map((product) => {
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log("\nFormatted Product List:");

formattedProducts.forEach((product) => {
    console.log(product);
});
