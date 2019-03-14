// Find an item
let index = items.indexOf(item); // -1 if not found

// Find and remove an item
let index = items.indexOf(item);
if (index > -1) items.splice(index, 1);

// Find last matching item
let index = items.lastIndexOf(item); // -1 if not found

// Sort by natural order
// in-place sort
items.sort();

// Sort with custom comparator
let items = [['a', 10], ['b', 7], ['c', 13], ['d', 1]];
items.sort((a, b) => (a[1] < b[1] ? -1 : 1));
