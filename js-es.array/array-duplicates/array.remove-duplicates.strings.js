const fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];

// 1
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// 2
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// 3
const uniqueFruits3 = fruits.filter(
  (item, idx, arr) => arr.indexOf(item) === idx
);
console.log(uniqueFruits3);

// 4
const uniqueFruits4 = [...new Set(fruits)];
console.log(uniqueFruits4);
