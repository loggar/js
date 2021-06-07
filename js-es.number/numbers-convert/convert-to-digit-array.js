const toArray = (num) => [...`${num}`].map((elem) => parseInt(elem));

console.log(toArray(1234)); // [1, 2, 3, 4]
console.log(toArray(758999)); // [7, 5, 8, 9, 9, 9]
