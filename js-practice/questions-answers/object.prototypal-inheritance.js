function Dog(name) {
  this.name = name;
  this.speak = function () {
    return "woof";
  };
}

Dog.prototype.speak = function () {
  return "arf";
};

const dog = new Dog("Pogo");

console.log(dog.speak());

// Every time we create a new Dog instance, we set the speak property of that instance to be a function returning the string woof.
// Since this is being set every time we create a new Dog instance, the interpreter never has to look farther up the prototype chain to find a speak property.
// As a result, the speak method on Dog.prototype.speak never gets used.
