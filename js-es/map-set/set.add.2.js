const mySet = new Set([1, 2, 3, 4, 4]);

console.log(mySet.has(1));
// Output: true

console.log(mySet.has(6));
// Output: false

var json = {
  key: "value1",
  key1: "value2"
};

mySet.add(json);
mySet.add(1);
// Value will not be added

var items = mySet.values();
// Creating iterable object

console.log(items.next().value);
// Output: 1

console.log(items.next().value);
// Output: 2

console.log(items.next().value);
// Output: 3

console.log(items.next().value);
// Output: 4

console.log(items.next().value);
// Output: The JSON stored
