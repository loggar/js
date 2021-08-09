const fruits = [5, 4, 7.8, 9, 2, 7.5, , 10, 9, 8, 7, 6, 5];

// 1
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// 2
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// 3
const uniqueFruits4 = [...new Set(fruits)];
console.log(uniqueFruits4);
