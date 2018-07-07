const Validation = require('data.validation') //from folktalejs
const Success = Validation.Success
const Failure = Validation.Failure
const R = require('ramda');

function isUsernameValid(a) {
	return /^(0|[1-9][0-9]*)$/.test(a) ? Failure(["Username can't be a number"]) : Success(a)
}

function isPwdLengthCorrect(a) {
	return a.length == 10 ? Success(a) : Failure(["Password must be 10 characters"])
}

function ieEmailValid(a) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(a) ? Success(a) : Failure(["Email is not valid"])
}

const returnSuccess = () => 'success';//simply returns success

function validateForm(username, pwd, email) {
	let success = R.curryN(3, returnSuccess);//3 coz we are calling "ap" 3 times.
	return Success(success)
		.ap(isUsernameValid(username))
		.ap(isPwdLengthCorrect(pwd))
		.ap(ieEmailValid(email))
}

console.log(validateForm('raja', 'pwd1234567890', 'r@r.com'));
console.log(validateForm('raja', 'pwd', 'r@r.com'));
console.log(validateForm('raja', 'pwd', 'notAnEmail'));
console.log(validateForm('123', 'pwd', 'notAnEmail').value);
