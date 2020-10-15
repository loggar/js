const numbers = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
const isLessThanThanZero = (number) => number < 0;
numbers.some(isEven); //=> true
numbers.some(isLessThanThanZero); //=> false
