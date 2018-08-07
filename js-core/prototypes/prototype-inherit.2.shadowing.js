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

Dog.prototype.sleep = function () {
	console.log(this.name + ': Overriding Zzzz....');
}

var dog = new Dog('Lassie');
dog.makeSound(); // Lassie: Woof woof!
dog.sleep(); // Lassie: Overriding Zzzz....

/*
If we look through the prism of inheritance once again we know that we often need to override properties and methods. In prototypical inheritance this is called shadowing.
*/