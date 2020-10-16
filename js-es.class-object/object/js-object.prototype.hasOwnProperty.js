var marks = { physics: 98, maths: 95, chemistry: 91, falsyValue: false };

console.log(marks.hasOwnProperty("physics")); // returns true
console.log(marks.hasOwnProperty("greek")); // returns false
console.log(marks.hasOwnProperty("falsyValue")); // returns true
