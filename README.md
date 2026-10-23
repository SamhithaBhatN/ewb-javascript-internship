# Interactive Product Inventory & Analytics Dashboard

A JavaScript capstone project developed using **Node.js** to manage a small product inventory, validate user input, categorize products, and display inventory analytics in the terminal.

This project was created as part of the **EWB Edu Tech JavaScript Web Development internship** to practise JavaScript fundamentals through practical assignments and a combined capstone application.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
- [Product Categories](#product-categories)
- [JavaScript Concepts Practised](#javascript-concepts-practised)
- [Sample Output](#sample-output)
- [Discount and Tax Calculation](#discount-and-tax-calculation)
- [Testing and Validation](#testing-and-validation)
- [Assignment Guide Alignment](#assignment-guide-alignment)
- [Current Limitations](#current-limitations)
- [Future Improvements](#future-improvements)
- [Learning Outcomes](#learning-outcomes)
- [Author](#author)

## Project Overview

The Interactive Product Inventory & Analytics Dashboard starts with a predefined list of products and allows the user to add one additional product during each execution.

After collecting the product details, the program validates the price, updates the inventory when the input is valid, and displays analytics about the available products.

The application demonstrates how JavaScript functions, conditional statements, loops, objects, and array methods can work together in a practical program.

## Features

- **Product inventory:** Stores product names and prices in an array of objects.
- **Interactive user input:** Accepts a product name and price through the terminal using Node.js `readline`.
- **Input validation:** Rejects empty, non-numeric, zero, and negative prices.
- **Product categorization:** Classifies products as Budget, Standard, or Premium.
- **Inventory analytics:** Displays the product count and total inventory value.
- **Affordable product filtering:** Lists products priced below $200.
- **Formatted inventory report:** Generates a report containing product names, prices, and categories.
- **Discount and tax calculation:** Demonstrates a percentage-based discount followed by tax.
- **Inventory scan:** Demonstrates the use of `break` and `continue`.
- **Skip option:** Allows the user to press Enter without adding a product.

## Technologies Used

- JavaScript
- Node.js
- Node.js `readline` module
- Visual Studio Code
- PowerShell / VS Code Terminal

## Project Structure

```text
JavaScript web development/
├── assignment1.js
├── assignment2.js
├── assignment3.js
├── assignment4.js
├── assignment5.js
├── assignment6.js
├── capstone.js
└── README.md
```

This structure reflects the filenames used throughout the project. Make sure each listed file exists in your folder.

## Prerequisites

Before running the project, install Node.js and use a terminal such as the Visual Studio Code integrated terminal.

Verify your installation with:

```powershell
node --version
```

## How to Run

1. Open the `JavaScript web development` folder in Visual Studio Code.
2. Open the integrated terminal.
3. Run the capstone:

```powershell
node capstone.js
```

4. Review the initial inventory.
5. Enter a product name and price when prompted.
6. Review the updated inventory and analytics.

To run an individual assignment, replace `capstone.js` with the relevant filename. For example:

```powershell
node assignment5.js
node assignment6.js
```

## Product Categories

Products are categorized according to their prices.

| Price Range | Category |
|---|---|
| Below $50 | Budget |
| $50 to below $200 | Standard |
| $200 and above | Premium |

The `getCategory()` function validates the price using `if...else` statements and uses a `switch` statement to return the category name.

Examples:

- Mouse — $25.00 — Budget
- Monitor — $150.00 — Standard
- Laptop — $800.00 — Premium
- Tablet — $200.00 — Premium

## JavaScript Concepts Practised

### 1. Variables and Data Types

Practised in Assignment 1 through variable declarations, data types, arrays, and the `typeof` operator.

### 2. User Input and Type Conversion

Assignment 2 practises collecting bill and tip details. In the capstone, Node.js `readline` collects terminal input, and `Number()` converts the entered price into a number.

### 3. Conditional Statements

Assignment 3 practises `if...else`, `switch`, and the ternary operator. The capstone uses conditional statements for price validation and product categorization.

### 4. Loops

Assignment 4 practises `for`, `while`, and `do...while` loops. The capstone uses loops to display and scan inventory items.

The `break` statement stops the inventory scan when a high-value product is found. The `continue` statement skips products whose prices are not positive.

### 5. Functions and Arrow Functions

Assignment 5 practises regular functions and arrow functions.

The capstone uses functions such as:

- `getCategory()` — determines a product's category.
- `formatProduct()` — formats product details for display.
- `calculateFinalPrice()` — calculates a final price after discount and tax.
- `calculateInventoryValue()` — calculates the combined value of the inventory.
- `showAnalytics()` — displays inventory information and reports.

### 6. Parameters, Default Values, and Scope

The `calculateFinalPrice()` function uses parameters for the original price, discount percentage, and tax rate. Default values are provided for the discount and tax rate.

The assignments also demonstrate function scope, block scope, and the differences between `var` and `let`.

### 7. Array Methods

The capstone uses the following array methods:

- **`forEach()`** — displays products and processes inventory entries.
- **`filter()`** — selects products priced below $200.
- **`map()`** — creates formatted inventory report entries.

Assignment 6 practises these methods using product objects and uppercase formatted output.

### 8. Objects and Arrays

Each product is represented by an object containing a `name` and a `price` property. The `products` array stores these objects.

## Sample Output

The initial inventory contains three products:

```text
========================================
   PRODUCT INVENTORY & ANALYTICS
========================================

Initial Products:
Laptop - $800.00 [Premium]
Mouse - $25.00 [Budget]
Monitor - $150.00 [Standard]
```

### Example: Adding a Product

If the user enters `Tablet` with a price of `200`, the program displays:

```text
Product added successfully!

UPDATED INVENTORY
Laptop - $800.00 [Premium]
Mouse - $25.00 [Budget]
Monitor - $150.00 [Standard]
Tablet - $200.00 [Premium]
```

The analytics include:

```text
Number of products: 4
Total inventory value: $1175.00

Affordable Products (below $200):
Mouse - $25.00
Monitor - $150.00
```

The total is calculated as:

$800 + $25 + $150 + $200 = $1,175

The affordable-products list excludes Tablet because its price is exactly $200, while the filter selects only products priced strictly below $200.

## Discount and Tax Calculation

The capstone demonstrates a calculation using a sample price of $100, a 10% discount, and a 5% tax rate.

| Calculation | Amount |
|---|---:|
| Original price | $100.00 |
| Discount (10%) | −$10.00 |
| Discounted price | $90.00 |
| Tax (5% of $90.00) | +$4.50 |
| **Final price** | **$94.50** |

The program displays:

```text
Price Calculation Example:
Original price: $100.00
After 10% discount and 5% tax: $94.50
```

## Testing and Validation

The capstone was tested through terminal execution with valid and invalid inputs.

| Test Scenario | Observed Result | Status |
|---|---|---|
| Add Tablet at $200 | Four products; total $1,175.00 | Passed |
| Enter a non-numeric price such as `asd` | Input rejected; inventory unchanged | Passed |
| Enter `0` as the price | Input rejected; inventory unchanged | Passed |
| Enter a negative price such as `-12` | Input rejected; inventory unchanged | Passed |
| Press Enter without a product name | Product addition skipped | Passed |
| Calculate inventory value | Correct total displayed | Passed |
| Calculate discount and tax | Final price of $94.50 | Passed |
| Scan inventory | Stops when Laptop is encountered | Passed |

The original inventory contains three products with a total value of $975.00. Invalid input and the skip option leave that inventory unchanged.

These results cover the listed test scenarios; they do not imply that every possible input or edge case has been tested.

## Assignment Guide Alignment

The project contains six JavaScript assignments followed by the inventory dashboard capstone.

| File | Main concepts |
|---|---|
| `assignment1.js` | Variables, data types, arrays, and `typeof` |
| `assignment2.js` | User input, number conversion, bill and tip calculations |
| `assignment3.js` | `if...else`, `switch`, and ternary operator |
| `assignment4.js` | Loops, `break`, and `continue` |
| `assignment5.js` | Regular functions, arrow functions, default parameters, and scope |
| `assignment6.js` | Product objects, `forEach()`, `filter()`, and `map()` |
| `capstone.js` | Inventory management, validation, categorization, analytics, and price calculations |

### Assignment 5: Functions and Scope

The corrected assignment demonstrates:

- Regular function with dimensions `10 × 3`, producing an area of `30`.
- Arrow function with dimensions `10 × 3`, producing an area of `30`.
- Default dimensions `5 × 4`, producing an area of `20`.
- Function-scoped and block-scoped variables.
- A `ReferenceError` when accessing `blockVar` outside its block, handled using `try...catch`.

### Assignment 6: Array Methods

The corrected assignment uses three products:

- Laptop — $800
- Mouse — $25
- Keyboard — $45

It displays all products with `forEach()`, selects Mouse and Keyboard using `filter()` with the condition `price < 50`, and uses `map()` to produce uppercase formatted strings.

### Capstone

The capstone combines the principal concepts practised in the assignments. It uses Node.js `readline` for terminal interaction instead of browser `prompt()`, because the application runs with Node.js.

Its category logic includes both `if...else` and `switch` statements.

## Current Limitations

- The inventory is stored in memory and is not saved after the program exits.
- The user can add only one product per execution.
- Products cannot currently be edited or deleted.
- Inventory data is not stored in a file or database.
- The application uses a terminal interface rather than a browser interface.
- The discount and tax calculation uses a fixed demonstration example.
- Input validation focuses on the product name and price; additional validation rules could be added.

## Future Improvements

Possible extensions include:

- Add multiple products during one execution.
- Implement search, edit, and delete operations.
- Save inventory data in a JSON file or database.
- Sort products by price or name.
- Add automated tests for individual functions and edge cases.
- Build a browser-based dashboard using HTML, CSS, JavaScript, and DOM manipulation.
- Add interactive analytics and inventory summaries.

## Learning Outcomes

Through the assignments and capstone, this project provided practical experience with:

- JavaScript variables and data types.
- Conditional statements and loops.
- Regular functions and arrow functions.
- Parameters, default values, and variable scope.
- Arrays and objects.
- Array iteration, filtering, and transformation.
- Terminal input and validation using Node.js.
- Combining JavaScript fundamentals into a small application.

## Author

**Samhitha Bhat**

BCA Graduate | Python Developer | Flask Developer

GitHub: [SamhithaBhatN](https://github.com/SamhithaBhatN)

---

*Created for learning and internship practice as part of JavaScript Web Development.*
