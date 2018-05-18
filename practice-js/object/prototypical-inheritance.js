var animalGroups = {
	MAMMAL: 1,
	REPTILE: 2,
	AMPHIBIAN: 3,
	INVERTEBRATE: 4
};

function Animal(name, type) {
	this.name = name;
	this.type = type;
}

var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

console.log(dog);
console.log(crocodile);

Animal.prototype.shout = function () {
	console.log(this.name + ' is making sound ' + this.sound);
}

function Dog(name, type) {
	Animal.call(this, name, type);
	this.sound = "bow";
}

/*
var pet = Dog("germanShepard", animalGroups.MAMMAL);
console.log(pet);
pet.shout();  //TypeError: Cannot read property 'shout' of undefined
*/

// Link prototype chains
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// Now shout method is available
pet.shout();


console.log(pet.constructor);
console.log(Dog.prototype.constructor);

Dog.prototype.constructor = Dog;

console.log(Dog.prototype.constructor);

var pet2 = new Dog("germanShepard", animalGroups.MAMMAL);
pet2.shout();
console.log(pet.constructor);


/*
Class properties are bound using this
Class methods are bound using prototype object
To inherit properties, use call function passing this object
To inherit methods, use Object.create to link prototypes of parent and child
Always set child class constructor to itself for getting the right identity of its objects
*/