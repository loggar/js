var Mammal = function (name) {
	this.name = name;
}

Mammal.prototype.getName = function () {
	return this.name;
}

var mam = new Mammal('Herb');
console.log(mam.getName());