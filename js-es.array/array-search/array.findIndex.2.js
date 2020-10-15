const numbers = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
const isLessThanZero = (number) => number < 0;
numbers.findIndex(isEven); //=> 1
numbers.findIndex(isLessThanZero); //=> -1
