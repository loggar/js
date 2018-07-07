const R = require('ramda');
const Maybe = require('ramda-fantasy').Maybe;
const curry = R.curry;

let user = null
let discount = null

const maybeUser = Maybe(user);
const maybeDiscount = Maybe(discount);

var applyDiscount = curry(function (user, discount) {
	user.discount = discount.code;
	return user;
});

const maybeApplyDiscountFunc = maybeUser.map(applyDiscount);

maybeApplyDiscountFunc.ap(maybeDiscount)
//Internally it is doing the following because applyDiscount is store in the this.val of maybeApplyDiscountFunc wrapper:
maybeDiscount.map(applyDiscount)
//Now, if maybeDiscount actually has the discount, then the function is is run.If maybeDiscount is Null, then nothing happens.


/*
FYI: Apparently there is a change in the FL spec, The old version has (eg): `Just(f).ap(Just(x))` (where `f` is a function and `x` is a value) but the new version would have you write `Just(x).ap(Just(f))`But the implementations mostly haven’t changed yet. Thanks keithalexander
*/

/*
To summarize, if you have a function that deals with multiple parameters that might all be null, you curry it first, then put it inside a Maybe. Further, also put all params in a Maybe and then use “ap” to run the function.
*/
