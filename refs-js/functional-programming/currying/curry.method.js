Function.prototype.method = function (name, fn) {
	this.prototype[name] = fn;
	return this;
}

Function.method('curry', function () {
	console.log("arg outer", arguments);
	var args = Array.prototype.slice.apply(arguments);
	var _self = this;

	return function () {
		console.log("arg inner", arguments);
		return _self.apply(null, args.concat(Array.prototype.slice.apply(arguments)));
	}
});

var fn = function () {
	var args = Array.prototype.slice.apply(arguments);
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
}

console.log(fn.curry(1)(2));