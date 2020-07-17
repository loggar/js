var add_1 = function(x,y) {
	x = x || 0;
	y = y || 0;
	return x+y;
};

var add_2 = function(x,y) {
	x = x || 0;
	y = y || 0;
	return x+y;
}(3,4);

console.log(add_1(1,2));
console.log(add_2);

/* IIFE is not able to invoked after its difinition. */
try {
	console.log(add_2(5,6));
} catch (e) {
	console.log(e);
}