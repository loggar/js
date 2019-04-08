// Before:
var Person = function (name) {
	this.name = name;
}

Person.prototype.sayHi = function () {
	console.log(`hi, I'm ${this.name}!`);
}

var jack = new Person('Jack');
jack.sayHi();

// After - this produces exactly the same as above:
class Person2 {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(`hi, I'm ${this.name}!`);
	}
}

// Let's test it:
var jack2 = new Person2('Jack2');
jack2.sayHi();