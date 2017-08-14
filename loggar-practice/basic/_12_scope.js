/* jshint ignore:start */
/* test code 1 */
var a = 1;

function f() {
	if(true) var b = 2;
	var c = {name: "c", scope: "function_local"};
	someGlobalVal = {name: "d", scope: "function_global"};  // someGlobalVal will be added after f() called at least once.
	return b;
}

console.log(f());

try { console.log(b); } catch (e) { logger.error(e); }
try { console.log(c); } catch (e) { logger.error(e); }

console.log(someGlobalVal);



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

/* global scope 에서의 this 는 생성자가 없이 기본으로 생성되어있다. */
console.log(this); // object [object Object] {prop1:prop1_value}
console.log(this.a); // undefined
console.log(this.init); // undefined
