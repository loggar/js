var counter = (function () {
	var i=0;
	
	return {
		get: function() { return i;},
		set: function(val) {i=val;}
	};
}());

console.log(counter.get());
counter.set(3);
console.log(counter.get());
console.log(counter.i);

/*
0
3
undefined
*/

// how it works?

function helperFunction() {
	var i=0;
	
	return {
		get: function() { return i;},
		set: function(val) {i=val;}
	};
}

var counter_1 = helperFunction();

console.log(counter_1.get());
counter_1.set(3);
console.log(counter_1.get());
console.log(counter_1.i);