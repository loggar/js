/* jshint ignore:start */

function iterate_for_in(obj_or_arr) {
	var str = "{";
	for(prop_or_index in obj_or_arr) {
		str += (prop_or_index + ":" + obj_or_arr[prop_or_index] + ", ");
	}
	return str.substring(0, str.length-2) + "}";
}

/**
 * in function, arguments is an object for the function's delivered arguments.
 * in function, arguments.callee is an function which refer function itself.
 * @returns
 */
function factorialFunc() {
	return function(x) {
		console.log("call functino(" + x + ")");
		console.log(typeof arguments + " " + arguments + " " + iterate_for_in(arguments));
		console.log(typeof arguments.callee + " " + arguments.callee);
		if(x <= 1) return 1;
		return x * arguments.callee(x-1);
	}
}

/* test code */
//console.log(factorialFunc()(5));

function publicVariableScope() {
	var obj = new Object();
	obj.desc = "I am object";
	console.log(typeof obj + ": " + obj + ": " + iterate_for_in(obj));
	
	var add = function(x,y) {
		try {
			console.log("add.desc: " + add.desc); // ReferenceError 예상.
			console.log("arguments.callee.desc: " + arguments.callee.desc); // Runtime referencing. it is working.
		} catch(e) {
			// ? ReferenceError 예상했으나 발생하지 않았음.
			console.log(e);
		}
		
		return x+y;
	}
	add.desc = "i am function";
	console.log(typeof add + ": " + add);
	
	console.log(add(1,2));
	
}

/* test code */
publicVariableScope();