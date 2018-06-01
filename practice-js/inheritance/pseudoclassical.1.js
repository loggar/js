Function.prototype.method = function (name, fn) {
	this.prototype[name] = fn;
	return this;
}

Function.method('new', function () {
	var _self = Object.create(this.prototype);
	var other = this.apply(_self, arguments);
	return (typeof other === 'object' && other) || _self;
});

var Mammal = function (name) {
	this.name = name;
}

Mammal.prototype.getName = function () {
	return this.name;
}

var mam = Mammal.new('Lion');
console.log(mam.getName());