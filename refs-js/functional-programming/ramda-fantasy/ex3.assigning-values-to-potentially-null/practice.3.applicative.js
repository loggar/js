/*
Any Class that have a method “ap” and implements the Applicative spec is called an Applicative. Applicatives can be used in functions that are dealing with null values on both left-hand-side(user) and right-hand-side(discount) of the equation.

It turns out “Maybe” Monads (and every Monads) also implement “ap” spec and hence are also “Applicatives” and not just Monads. So we can use “Maybe” Monads to deal with null at function level.
*/

// Step5: Let’s recap “ap” function. “ap” method takes another Maybe monad and passes/applies the function it’s currently storing to that Maybe.

class Maybe {
	constructor(val) {
		this.val = val;
	}
	// ...
	// ...

	//"ap" takes another "maybe" and applies the function it's holding in itself.
	//this.val MUST be a function or Nothing (and can't be some string or int)
	ap(differentMayBe) {
		return differentMayBe.map(this.val);
	}
}