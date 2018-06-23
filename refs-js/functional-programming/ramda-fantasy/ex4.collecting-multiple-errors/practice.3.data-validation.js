/*
Validations are commonly referred as Validation Applicative because it is commonly used for validation using it’s “ap”(apply) function.
*/

/*
Validations are similar to Either Monads and used to work with composing multiple error-throwing functions. But unlike with Either Monad, where we typically use its “chain” method to compose, in Validation Monads, we typically use “ap” method to compose. And unlike either’s “chain” method, where we only collect the 1st error, “ap” method, especially in Validation Monads allows us to collect all the errors in an Array.

They are typically used in form validation where we may want to show all the errors at the same time.
*/

/*
We’ll use data.validation lib from folktalejs because ramda-fantasy doesn’t implement it yet.

Similar to “Either” Monad, it has two constructors: Success and Failure. These are like subclasses that each implement Either’s specs.
*/


// Step1: In order to use Validation, all we need to do is to wrap valid values and errors inside Success and Failure constructors (i.e. create instances of those classes).

const Validation = require('data.validation') //from folktalejs
const Success = Validation.Success
const Failure = Validation.Failure
const R = require('ramda');

//Instead Of:
/*
function isUsernameValid(a) {
	return /^(0|[1-9][0-9]*)$/.test(a) ?
		["Username can't be a number"] : a
}
*/

//Use:
function isUsernameValid(a) {
	return /^(0|[1-9][0-9]*)$/.test(a) ?
		Failure(["Username can't be a number"]) : Success(a)
}

function isPwdLengthCorrect(a) {
	return /^.{8-16}$/.test(a) ?
		Failure(["Err msg for isPwdLengthCorrect"]) : Success(a)
}

function isEmailValid(a) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a) ?
		Failure(["Err msg for isEmailValid"]) : Success(a)
}

// Step 2: Create a dummy function to hold validation success.

const returnSuccess = () => 'success'; //simply returns success


// Step 3: Use curryN to repeatedly apply “ap”

/*
The problem with “ap” is that the left-hand side should be a functor (or a monad) containing function.

For example, let’s say we want to repeatedly apply “ap” like below. It will only work if monad1 contains a function. And the result of monad1.ap(monad2) i.e. resultingMonad is also a monad with a function so that we can “ap” to monad3.

let finalResult = monad1.ap(monad2).ap(monad3)

//Can be rewritten as:

let resultingMonad = monad1.ap(monad2)
let finalResult = resultingMonad.ap(monad3)
//will only work if: monad1 has a function and monad1.ap(monad2) results in another monad (resultingMonad) with a function

// Generally speaking, we need 2 monads that has functions in order to apply “ap” twice.
*/

let username = "";
let pwd = "";
let email = "";

/*
Success(returnSuccess)
	.ap(isUsernameValid(username)) //works
	.ap(isPwdLengthCorrect(pwd))//wont work
	.ap(isEmailValid(email))//wont work
*/

/*
The above won’t work because Success(returnSuccess).ap(isUsernameValid(username)) will result in a value. And we can no longer continue to do “ap” on 2nd and 3rd function.

Enter curryN.

We can use curryN to keep returning function until it is called “N” number of times.
*/

//3 coz we are calling "ap" 3 times.
let success = R.curryN(3, returnSuccess);

/*
Now, the curried success keeps returning function 3 times.
*/

function validateForm(username, pwd, email) {
	//3 coz we are calling "ap" 3 times.
	let success = R.curryN(3, returnSuccess);
	return Success(success)// default; used for 3 "ap"s
		.ap(isUsernameValid(username))
		.ap(isPwdLengthCorrect(pwd))
		.ap(ieEmailValid(email))
}
