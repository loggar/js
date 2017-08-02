/* jshint ignore:start */

function f() {}
f.prop1 = "p";
f.method1 = function() {return this.prop1;};

// just like object.
console.log(f.prop1);
console.log(f.method1());

/*
 * function definition
 */
function add_1(x,y) {
	x = x||1;
	y = y||2;
	
	return x+y;
}

console.log(add_1());
console.log(typeof add_1.prototype);
console.log(add_1.prototype);

/*
 * function literal
 */
var add_2 = function(x,y) {
	x = x||1;
	y = y||2;
	
	return x+y;
};

console.log(add_2());
console.log(typeof add_2.prototype);
console.log(add_2.prototype);

/*
 * function constructor
 */
var add_3 = new Function("x", "y", "x = x||1;y = y||2;return x+y;");

console.log(add_3());
console.log(typeof add_3.prototype);
console.log(add_3.prototype);

function sumof() {
	var total = 0;
	for(var i=0; i<arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

console.log(sumof(1,2,3,4));

function object_array_function() {
	var obj_1 = new Object();
	var obj_2 = {};
	
	var arr_1 = new Array(3);
	var arr_2 = [1,2,3];
	
	console.log(typeof obj_1 + ": " + obj_1);
	console.log(typeof obj_2 + ": " + obj_2);
	console.log(typeof arr_1 + ": " + arr_1);
	console.log(typeof arr_2 + ": " + arr_2);
}

object_array_function();