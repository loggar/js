// Step 1: wrap our potential null values in Maybe Monads

const R = require('ramda');
const Maybe = require('ramda-fantasy').Maybe;
const curry = R.curry;

let user = null
let discount = null

const maybeUser = Maybe(user);
const maybeDiscount = Maybe(discount);


// Step 2: Rewrite the function and curry it so we can pass one param at a time.

//Rewrite the function and curry it so we can 
//pass one param at a time
var applyDiscount = curry(function (user, discount) {
	user.discount = discount.code;
	return user;
});


// Step 3: let’s pass the first argument(maybeUser) to applyDiscount via “map”.

//pass the first argument to applyDiscount via "map"
const maybeApplyDiscountFunc = maybeUser.map(applyDiscount);

/*
Note, since applyDiscount is "curried", and "map" will only pass 1 parameter, the return result (maybeApplyDiscountFunc) will be a Maybe wrapped "applyDiscount" function that now has maybeUser(1st param) in it's closure.
In other words, we now have a function wrapped in a Monad!
*/


// Step 4: Deal With maybeApplyDiscountFunc

/*
At this stage maybeApplyDiscountFunc can be:
1. If user actually exists, then maybeApplyDiscountFunc is a function wrapped inside a Maybe.
2. If the user does not exist, then maybeApplyDiscountFunc will be “Nothing” (subclass of Maybe)

If user doesn’t exist, then “Nothing” is returned and any further interaction with this are ignore completely. So if we pass 2nd argument, nothing happens. And also no Null errors are thrown.

But in the case where the user actually exists, we can try to pass the 2nd argument to maybeApplyDiscountFunc via “map” to execute the function like below:

maybeDiscount.map(maybeApplyDiscountFunc)! // PROBLEM!

Uh oh! “map” doesn’t know how to run function(maybeApplyDiscountFunc) when the function itself is inside a MayBe!

That’s why we need a different interface to deal with this scenario. It turns out that’s “ap”!
*/