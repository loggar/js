var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple"
];
fruits.splice(0, 2, "potato", "tomato");
console.log(fruits); // returns ["potato", "tomato", "orange", "watermelon", "apple", "orange", "grape", "apple"]
