/*
At some point you may have to use shadowing on a property, but then inside of it call the “parent” function with the same name. While in most other languages you can just use super(), here things are a bit trickier. If you use this approach and call this.sleep() inside of the shadowed function, you will end up calling the same function and the result will be a recursion. Therefore we must think of another way to solve the problem.

Dog.prototype.sleep = function () {
	Animal.prototype.sleep();
}

This sounds like a good approach at first and it almost is, but if you execute it you will see that you will not get the result you expect because the contextual binding is not correct.
*/

Dog.prototype.sleep = function () {
	Animal.prototype.sleep.call(this);
}