var Mammal = function (name) {
	this.name = name;
	this.saying = 'mammal!';
}

Mammal.prototype.getName = function () {
	return this.name;
}

Mammal.prototype.says = function () {
	return this.saying || '';
}

var Cat = function (name) {
	this.name = name;
	this.saying = 'meow!';
}

// replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

Cat.prototype.purr = function () {
	return "purr-";
}

Cat.prototype.getName = function () {
	return this.name + ' ' + this.says();
}

var cat_1 = new Cat('cat_1');
console.log(cat_1.getName());
console.log(cat_1.says());
console.log(cat_1.purr());

var mammal_1 = new Mammal('mammal_1');
// console.log(mammal_1.purr());  // TypeError: mammal_1.purr is not a function
