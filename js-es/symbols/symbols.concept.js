var sym = Symbol("some optional description");

typeof sym;        // "symbol"

typeof Symbol();        // "symbol"

sym.toString();        // "Symbol(some optional description)"



sym instanceof Symbol;        // false

var symObj = Object(sym);
symObj instanceof Symbol;    // true

symObj.valueOf() === sym;    // true


/* The main point of a symbol is to create a string-like value that can't collide with any other value. So, for example, consider using a symbol as a constant representing an event name: */

const EVT_LOGIN = Symbol("event.login");

evthub.listen(EVT_LOGIN, function (data) {
	// ..
});


/* Consider this module that implements the singleton pattern behavior -- that is, it only allows itself to be created once: */

const INSTANCE = Symbol("instance");

function HappyFace() {
	if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];

	function smile() {
		// ..
	}

	return HappyFace[INSTANCE] = {
		smile: smile
	};
}

var me = HappyFace(),
	you = HappyFace();

me === you;            // true