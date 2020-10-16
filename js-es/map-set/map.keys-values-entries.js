const map1 = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["John", 10],
  ["Sam", 9],
]);

// returns true, if map has an element with the key, 'John'
console.log(map1.has("John"));

// returns false, if map doesn't have an element with the key, 'Tapas'
console.log(map1.has("Tapas"));

map1.delete("Sam"); // removes the element with key, 'Sam'.

// Clear the map by removing all the elements
map1.clear();

console.log(map1.size); // It will return, 0

const map2 = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["John", 10],
  ["Sam", 9],
]);

console.log(map2.keys());
console.log(map2.values());
console.log(map2.entries());
