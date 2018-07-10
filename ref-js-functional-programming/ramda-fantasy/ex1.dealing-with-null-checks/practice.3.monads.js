/*
Monads are also Functors, i.e. they have “map” method but implements more methods than just “map”.
If you look at the spec dependency graph again, you’ll see that also need to implement various other
features in different specs like: “Apply” (ap method), “Applicative” (ap and of method), and “Chain” (chain method).
*/

/*
Simplified Explanation:
In JS, Monads are classes or constructor functions that store some data and implements “map”, “ap”, “of” and “chain” methods
that do something with the stored data as per spec.
*/

//Monad - a sample implementation
class Monad {
	constructor(val) {
		this.__value = val;
	}
	static of(val) {//Monad.of is simpler than "new Monad(val)
		return new Monad(val);
	};
	map(f) {//Applies the function but returns another Monad!
		return Monad.of(f(this.__value));
	};
	join() { // used to get the value out of the Monad
		return this.__value;
	};
	chain(f) {//Helper func that maps and then gets the value out
		return this.map(f).join();
	};
	ap(someOtherMonad) {//Used to deal w/ multiple Monads
		return someOtherMonad.map(this.__value);
	}
}
