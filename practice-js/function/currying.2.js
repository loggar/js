function curry(func) {
	return function (a) {
		return function (b) {
			return function (c) {
				return func(a, b, c);
			};
		};
	};
}

function log(date, importance, message) {
	console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

// Let’s curry it!

log = curry(log);

// Underscore Way
// log = _.curry(log);

// After that log still works the normal way:

log(new Date(), "DEBUG", "some debug");

// …But also can be called in the curried form:

log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// Let’s get a convenience function for today’s logs:

// todayLog will be the partial of log with fixed first argument
let todayLog = log(new Date());

// use it
todayLog("INFO", "message"); // [HH:mm] INFO message

// And now a convenience function for today’s debug messages:

let todayDebug = todayLog("DEBUG");

todayDebug("message"); // [HH:mm] DEBUG message