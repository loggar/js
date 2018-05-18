var marks = { physics: 98, maths: 95, chemistry: 91 };
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property

Object.isSealed(marks); // returns true