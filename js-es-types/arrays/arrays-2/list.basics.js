// Create a list
let items = [];

// Add element to the front or back
let newLength = items.unshift('abc');
let newLength = items.push('def');

// Pop element off front or back
let start = items.shift();
let end = items.pop();

// Forward iterate over elements
for (const item of items) console.log(item);

// Also works
items.forEach(item => console.log(item));

// Get the length of a list
let length = items.length;

// Test if empty. May need extra logic for special cases,
// such as null, undefined, or not iterable
if (items.length == 0) console.log('list is empty');

// Also works
console.log(items.length == 0 ? 'list is empty' : 'list is not empty');
