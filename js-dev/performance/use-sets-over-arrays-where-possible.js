// Searching for an Item
// Using indexOf() or includes() to check whether an item exists in an array is slow. In a Set you can find an item really easy using has():
const mySet = new Set([1, 1, 2]);
console.log(mySet.has(2)); // true

// Deleting an Item
// In a Set, you can delete an item by its value. In an array, the equivalent is using splice() based on an element’s index. As in the previous point, depending on indices is slow.
const mySet = new Set([1, 2, 3, 4, 5]);
mySet.delete(1);

// Insert an Item
// It is much faster to add an item to a Set than to an array using push() or unshift().
const mySet = new Set([1, 2]);
mySet.add(3); // Successfully added

// Storing NaN
// You cannot use indexOf() to find the value NaN, while a Set is able to store this value.

// Removing Duplicates
// Set objects only store unique values. If you want to avoid storing duplicates, this is a significant advantage over arrays, where additional code would be required to deal with duplicates.
const mySet = new Set([1, 1, 2]);
mySet.add(3); // Successfully added
console.log(mySet.values()); // 1,2,3
