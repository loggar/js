/*
Higher Order Functions

A higher order function is a function that takes a function as an argument, or returns a function.
*/

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1, 1))); // 2 0 1