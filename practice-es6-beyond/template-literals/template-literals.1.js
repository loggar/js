function sample_usage(response, account) {
	// Before: 
	let msg = 'Thanks for uploading ' + response.filename + '.jpg. Your account is ' + account.status + '.';

	// After:
	let msg2 = `Thanks for uploading ${response.filename}.jpg. Your account is ${account.status}.`;
}


var name = "Kyle";

var greeting = `Hello ${name}!`;

console.log(greeting);            // "Hello Kyle!"
console.log(typeof greeting);        // "string"


var text = `Now is the time for all good men
to come to the aid of their
country!`;

console.log(text);
// Now is the time for all good men
// to come to the aid of their
// country!


/* Interpolated Expressions */

function upper(s) {
	return s.toUpperCase();
}

var who = "reader";

var text2 =
	`A very ${upper("warm")} welcome
to all of you ${upper(`${who}s`)}!`;

console.log(text2);
// A very WARM welcome
// to all of you READERS!


/* Expression Scope */

function foo(str) {
	var name = "foo";
	console.log(str);
}

function bar() {
	var name = "bar";
	foo(`Hello from ${name}!`);
}

var name = "global";

bar();                    // "Hello from bar!"