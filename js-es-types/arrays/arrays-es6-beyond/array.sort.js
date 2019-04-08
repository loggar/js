var fruit = [
  { name: 'Apple', count: 13 },
  { name: 'Pear', count: 12 },
  { name: 'Banana', count: 12 },
  { name: 'Strawberry', count: 11 },
  { name: 'Cherry', count: 11 },
  { name: 'Blackberry', count: 10 },
  { name: 'Pineapple', count: 10 }
];
// Create our own sort criteria function:
let my_sort = (a, b) => a.count - b.count;
// Perform stable ES10 sort:
let sorted = fruit.sort(my_sort);
console.log(sorted);
