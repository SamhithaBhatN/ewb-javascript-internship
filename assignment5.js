
function calculateArea(length, width) {
    return length * width;
}

// Regular function with custom values
const area = calculateArea(10, 3);
console.log("Area of rectangle:", area);


// Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

console.log("Arrow function area:", calculateAreaArrow(10, 3));
console.log("Area using default values:", calculateAreaArrow());


// Demonstrating function scope and block scope
function scopeExample() {
    var functionScoped = "I belong to the function";

    if (true) {
        var functionVariable = "var is function-scoped";
        let blockVar = "let is block-scoped";

        console.log(blockVar);
    }

    console.log(functionScoped);
    console.log(functionVariable);

    // Accessing blockVar outside its block causes a ReferenceError
    try {
        console.log(blockVar);
    } catch (error) {
        console.log(error.name + ": blockVar is not accessible outside its block");
    }
}

scopeExample();
