/**
 * return any true (left priority)
 * @returns
 */
function operand_or() {
	var result;

	result = (1 + 2) || {};
	console.log(result);

	result = (1 + 2) || { strName: "Charly" };
	console.log(result);

	result = (2 - 2) || { strName: "Charly" };
	console.log(result);
}

/**
 * return every true (left priority)
 * @returns
 */
function validateField(oEvent) {
	/* in browser */
	// oEvent = oEvent || window.event; // if(!oEvent) oEvent = window.event;
}

/**
 * return first false (left priority)
 * return true if all true
 * 
 * @returns
 */
function operand_and() {
	var result_1 = null && true;
	console.log(result_1); // null

	var result_2 = false && "Charly";
	console.log(result_2); // false

}

function operand_not() {
	console.log(!"Charly");
}

function make_arr(arr) {
	arr = arr || [];
	if (arr.length === 0) { arr[0] = "first value"; }

	return arr;
}

/* test code */

operand_or();
operand_and();
operand_not();
console.log(make_arr());

