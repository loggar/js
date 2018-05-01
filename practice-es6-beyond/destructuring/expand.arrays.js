let numbers = [1, 5, 20];

// Before:
let result = sum(numbers[0], numbers[1], numbers[2]);

// After:
let result2 = sum(...numbers);


var even = [2, 4, 6];
var odd = [1, 3, 5];

var all = [...odd, ...even]; // [1, 3, 5, 2, 4, 6]