/*
Either Monad provides two constructors: "Either.Left" and "Either.Right".
Think of them as subclasses of Either. Both "Left" and "Right" are Monads!
The idea is to store errors/exceptions in Left and useful values in Right.

i.e. create an instance of Either.Left or Either.Right depending on the value.
Once we do that we can run map, chain and so on on those values to compose them.

While both Left and Right provide "map", "chain" and so on, Left constructor doesn’t do anything as it stored Errors.
Where as the Right constructor implements all the functions as it contains actual result.
*/

/*
"Wrap" means create an instance of some Class. These functions internally call "new" so we don’t have to.
*/

// Step 1: Wrap return values with Left and Right

const R = require('ramda');

var Either = require('ramda-fantasy').Either;
var Left = Either.Left;
var Right = Either.Right;

const tax = R.curry((tax, price) => {
	if (!_.isNumber(price)) return Left(new Error("Price must be numeric")); //<--Wrap Error in Either.Left

	return Right(price + (tax * price)); //<--Wrap result in Either.Right
});

const discount = R.curry((dis, price) => {
	if (!_.isNumber(price)) return Left(new Error("Price must be numeric")); //<--Wrap Error in Either.Left

	if (price < 10) return Left(new Error("discount cant be applied for items priced below 10")); //<--Wrap Error in Either.Left

	return Right(price - (price * dis)); //<--Wrap result in Either.Right
});


// Step 2: Wrap the initial value in Right because it’s a valid value and so we can compose it.

const getItemPrice = (item) => Right(item.price);


// Step 3: Create two functions, one to handle eventual error and another to handle result. And warp them in Either.either (this is from ramda-fantasy.js api).

/*
Either.either takes 3 params. success handler, an error handler and an "Either" Monad.Either is curried. So we can just pass the handlers for now and pass the Either (3rd param) later.
Once Either.either receives all 3 params, it passes the 3rd param "Either" to the success handler or error handler depending of if the Either is "Right" or "Left" respectively.
*/

const displayTotal = (total) => { console.log('Total Price: ' + total) };
const logError = (error) => { console.log('Error: ' + error.message); };
const eitherLogOrShow = Either.either(logError, displayTotal);


// Step 4: Use “chain” method to compose multiple error throwing functions. Pass their result to Either.either (eitherLogOrShow) which will take care of passing the result to success handler or failure handler.

const showTotalPrice = (item) => eitherLogOrShow(getItemPrice(item).chain(apply25PercDisc).chain(addCaliTax));