/* test code 2 */
var global_1 = "gloval_value_1";

function lexical_variable_test_1() {
	console.log(global_1); // string gloval_value_1
}
lexical_variable_test_1();

var global_2 = "gloval_value_2";

//global scope variable is lexical. it depends on wether the function has local variable(same name).
function lexical_variable_test_2() {
	console.log(global_2); // undefined undefined 
	var global_2 = "local_value_2";
}
lexical_variable_test_2();


/* test code 3 */
this.prop1 = "prop1_value";

function init(obj) {
	var c = "c_value";
}

/* global scope : this has been created without constructor by default. */
console.log(this); // object [object Object] {prop1:prop1_value}
console.log(this.a); // undefined
console.log(this.init); // undefined
