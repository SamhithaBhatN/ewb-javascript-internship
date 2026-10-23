
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initial inventory
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 150 }
];

// Regular function: validate price and determine product category
function getCategory(price) {
    // Validate the price using if...else
    if (!Number.isFinite(price) || price <= 0) {
        return "Invalid";
    }

    // Determine the price range using if...else
    let category;

    if (price < 50) {
        category = 1;
    } else if (price < 200) {
        category = 2;
    } else {
        category = 3;
    }

    // Use switch to return the category name
    switch (category) {
        case 1:
            return "Budget";
        case 2:
            return "Standard";
        case 3:
            return "Premium";
        default:
            return "Unknown";
    }
}

// Arrow function: format a product for display
const formatProduct = (product) => {
    return `${product.name} - $${product.price.toFixed(2)} [${getCategory(product.price)}]`;
};

// Function with parameters and local scope: apply discount and tax
function calculateFinalPrice(price, discount = 0, taxRate = 0) {
    const discountAmount = price * (discount / 100);
    const discountedPrice = price - discountAmount;
    const taxAmount = discountedPrice * (taxRate / 100);
    const finalPrice = discountedPrice + taxAmount;

    return finalPrice;
}

// Arrow function: calculate total inventory value
const calculateInventoryValue = (items) => {
    let total = 0;

    items.forEach((product) => {
        total += product.price;
    });

    return total;
};

// Display dashboard heading
console.log("========================================");
console.log("   PRODUCT INVENTORY & ANALYTICS");
console.log("========================================");

// Display initial inventory
console.log("\nInitial Products:");

products.forEach((product) => {
    console.log(formatProduct(product));
});

// Collect new product details
rl.question(
    "\nEnter a new product name (or press Enter to skip): ",
    (nameInput) => {
        const name = nameInput.trim();

        // Allow the user to skip adding a product
        if (name === "") {
            console.log("\nNo new product added.");
            showAnalytics();
            rl.close();
            return;
        }

        rl.question("Enter the product price: $", (priceInput) => {
            const price = Number(priceInput);

            // Validate user input
            if (
                priceInput.trim() === "" ||
                !Number.isFinite(price) ||
                price <= 0
            ) {
                console.log(
                    "\nInvalid price. Please enter a number greater than 0."
                );
            } else {
                products.push({ name, price });
                console.log("\nProduct added successfully!");
            }

            showAnalytics();
            rl.close();
        });
    }
);

// Display inventory and analytics
function showAnalytics() {
    console.log("\n========================================");
    console.log("             UPDATED INVENTORY");
    console.log("========================================");

    // Display all products
    products.forEach((product) => {
        console.log(formatProduct(product));
    });

    // Calculate total inventory value
    const totalValue = calculateInventoryValue(products);

    console.log("\n========================================");
    console.log("               ANALYTICS");
    console.log("========================================");
    console.log(`Number of products: ${products.length}`);
    console.log(`Total inventory value: $${totalValue.toFixed(2)}`);

    // Filter affordable products
    const affordableProducts = products.filter((product) => {
        return product.price < 200;
    });

    console.log("\nAffordable Products (below $200):");

    if (affordableProducts.length === 0) {
        console.log("No affordable products found.");
    } else {
        affordableProducts.forEach((product) => {
            console.log(`${product.name} - $${product.price.toFixed(2)}`);
        });
    }

    // Map products into formatted report strings
    const report = products.map((product) => {
        return `${product.name} | $${product.price.toFixed(2)} | ${getCategory(product.price)}`;
    });

    console.log("\nFormatted Inventory Report:");

    report.forEach((line) => {
        console.log(line);
    });

    // Demonstrate discount and tax parameters
    const samplePrice = 100;
    const finalPrice = calculateFinalPrice(samplePrice, 10, 5);

    console.log("\nPrice Calculation Example:");
    console.log(`Original price: $${samplePrice.toFixed(2)}`);
    console.log(
        `After 10% discount and 5% tax: $${finalPrice.toFixed(2)}`
    );

    // Demonstrate continue and break in a loop
    console.log("\nInventory Scan:");

    for (const product of products) {
        if (product.price <= 0) {
            continue;
        }

        console.log(`Checking: ${product.name}`);

        if (product.price >= 800) {
            console.log("High-value product found. Stopping scan.");
            break;
        }
    }

    console.log("\nDashboard completed successfully!");
}
