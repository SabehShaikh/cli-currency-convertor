import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.92,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    RUB: 92.64,
    CNY: 7.23,
    AED: 3.67,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB", "CNY", "AED"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB", "CNY", "AED"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount; // USD
let convertedAmount = baseAmount * toAmount;
console.log(`${amount} ${answer.from} is equal to ${convertedAmount.toFixed(2)} ${answer.to}`);
