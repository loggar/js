// Create from a static list of items
let items = ['abc', 'def', 'ghi'];

// Create a range of numbers
// a list of numbers from 10..20 (exclusive)
let numbers = [...Array(10).keys()].map(n => n + 10);

// Also works
let numbers = [];
for (let i = 10; i < 20; i++) numbers.push(i);
