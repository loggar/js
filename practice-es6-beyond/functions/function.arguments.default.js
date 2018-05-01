// Basic usage
function greet(name = 'Anon') {
	console.log(`Hello ${name}!`);
}
greet(); // Hello Anon!

// You can have a function too!
function greet(name = 'Anon', callback = function () { }) {
	console.log(`Hello ${name}!`);

	// No more "callback && callback()" (no conditional)
	callback();
}

// Only set a default for one parameter
function greet(name, callback = function () { }) { }


/*
Other languages may throw a warning if arguments without a default value aren't provided but JavaScript will continue to set those argument values to undefined.
*/