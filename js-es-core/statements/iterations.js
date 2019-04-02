/**
 * Local scope of javascript(var) is based on function-scope, not block-scope
 * Value of this is 'undefined' before declaration.
 * 
 * @param count
 * @returns
 */
function iterate_for(count) {
	// console.log(i); // undefined

	count = count || 5;
	for (var i = 0; i < count; i++) {
		console.log("counting " + i);
	}

	return i;
}

/**
 * init array elements
 * 
 * @param arr
 * @returns
 */
function iterate_for_02(arr) {
	arr = arr || new Array(5);
	for (var i = 0; i < arr.length; arr[i++] = i)
		;
	return arr;
}

function iterate_for_in(obj_or_arr) {
	var str = "{";
	for (var prop_or_index in obj_or_arr) {
		str += (prop_or_index + ":" + obj_or_arr[prop_or_index] + ", ");
	}
	return str.substring(0, str.length - 2) + "}";
}

/**
 * for in array : fetch index of array
 * for in object : fetch property-name of object
 * 
 * @returns
 */
function iterate_for_in_test() {
	console.log(iterate_for_in(iterate_for_02()));

	var myObj = {
		p1: "value_01",
		p2: "value_02"
	};
	console.log(iterate_for_in(myObj));
}

/* test code */

// console.log(iterate_for());
// console.log(iterate_for_02());
iterate_for_in_test();
