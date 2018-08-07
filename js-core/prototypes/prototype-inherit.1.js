function Animal(name) {
	this.name = name;
}

Animal.prototype.sleep = function () {
	console.log(this.name + ': Zzz...');
}

function Dog(name) {
	this.name = name;
}

// Create a reference for the prototype
Dog.prototype = Object.create(new Animal());

Dog.prototype.makeSound = function () {
	console.log(this.name + ': Woof woof!');
}

var dog = new Dog('Lassie');
dog.makeSound(); // Lassie: Woof woof!
dog.sleep(); // Lassie: Zzz...
dog.missing(); // Throws Error

/*
This is returning the Animal function because it is attached to the Dog property upon object creation. This once again shows that those methods and properties weren’t implemented with OO design in mind.
*/
console.log(dog.constructor); // [Function: Animal]
