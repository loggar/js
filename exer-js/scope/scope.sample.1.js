/* test code 1 */

var someGlobalVal = null;

function f() {
	if(true) var b = 2;
	var c = {name: "c", scope: "function_local"};
	someGlobalVal = {name: "someGlobalVal", scope: "global"}; // someGlobalVal will be added after f() called at least once.
	return b;
}

console.log(f());

try { console.log(b); } catch (e) { console.error(e); }
//ReferenceError: b is not defined

try { console.log(c); } catch (e) { console.error(e); }
//ReferenceError: c is not defined

console.log(someGlobalVal);