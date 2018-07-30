let numbers = [1, 1, 3, 5, 5, 5];
let filtered = [...new Set(numbers)];

console.log(filtered); // [1, 3, 5]