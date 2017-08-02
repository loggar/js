/* jshint ignore:start */

var a = function(arg) {
	var b = function(arg_b) {
		var nested_var = arg;
		console.log(nested_var);
		
		return arg_b +1;
	};
	
	try {
		console.log(nested_var);
	} catch (e) {
		console.log(e);
	}
	
	return "result a : " + b(arg);
};

console.log(a(1));

/* nested function is not able to invoked outside of its wrapper function. */
try{
	console.log(b(2));
} catch (e) {
	console.log(e);
}

