Function.prototype.method = function (name, fn) {
	this.prototype[name] = fn;
	return this;
}

Function.method('inherits', function (Parent) {
	this.prototype = new Parent();
	return this;
});

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
	.inherits(Mammal)
	.method('purr', function () {
		return "purr-";
	}).method('getName', function () {
		return this.name + ' ' + this.says();
	});

var cat_1 = new Cat('cat_1');
console.log(cat_1.getName());
console.log(cat_1.says());
console.log(cat_1.purr());

var mammal_1 = new Mammal('mammal_1');
// console.log(mammal_1.purr());  // TypeError: mammal_1.purr is not a function