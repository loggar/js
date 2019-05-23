var marks = { physics: 98, maths: 95, chemistry: 91 };
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

Object.isFrozen(finalizedMarks); // returns true