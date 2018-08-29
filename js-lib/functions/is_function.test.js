var isFunction = require("./function-util").isFunction;
var isFn = require("./function-util").isFn;

var f = function () {
	console.log("this is function");
}

var o = (function () {
	return {
		f: function () {
			console.log("function in object");
		}
	}
})();

console.log(isFunction(f));
console.log(isFunction(o.f));
console.log(isFunction({ x: 1 }));

console.log(isFn(f));
console.log(isFn(o.f));
console.log(isFn({ x: 1 }));
