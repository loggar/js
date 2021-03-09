const drinks = 4.99;
const food = 6.65;
const total = drinks + food;

const result = `The total bill is ${total}. ${
  total > 10
    ? `Your card payment will be declined`
    : `Your card payment will be accepted`
}.`;

console.log(result);
