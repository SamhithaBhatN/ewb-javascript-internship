
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the bill amount (₹): ", (billInput) => {
    rl.question("Enter the tip percentage (%): ", (tipInput) => {
        const bill = Number(billInput);
        const tipPercentage = Number(tipInput);

        const tipAmount = bill * tipPercentage / 100;
        const totalBill = bill + tipAmount;

        console.log("Tip Amount: ₹" + tipAmount.toFixed(2));
        console.log("Total Bill: ₹" + totalBill.toFixed(2));

        rl.close();
    });
});
