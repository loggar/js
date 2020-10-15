const numbers = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
const isGreaterThanZero = (number) => number > 0;
numbers.every(isEven); //=> false
numbers.every(isGreaterThanZero); //=> true
