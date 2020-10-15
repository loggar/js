const numbers = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
const isLessThanZero = (number) => number < 0;
numbers.find(isEven); //=> 2
numbers.find(isLessThanZero); //=> undefined
